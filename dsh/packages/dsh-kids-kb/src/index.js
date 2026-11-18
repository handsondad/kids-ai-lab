import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { parseFrontmatter } from './frontmatter.js';
import { normalize, queryTerms, scoreFields, snippet } from './search.js';

// One index over every library under kb/. A library is a directory with a library.json; kb/schema.json holds the
// rules shared by all of them. Files are re-read only when their modification time or size changes, so cards
// written during a session are searchable on the next call.

export const DEFAULT_SCHEMA = {
  statuses: ['draft', 'reviewed', 'published'],
  required: ['doc_type', 'id', 'status'],
  ref_fields: ['source_refs', 'source_ref', 'source_ref_secondary', 'source_book', 'derived_cards', 'derived_games', 'included_cards',
    'included_games', 'prerequisites', 'related_tools', 'related_topics', 'related'],
  strict_ref_fields: ['related'],
  id_pattern: '^[a-z][a-z0-9]*(?:-[a-z]+)*-\\d{3,}(?:-[a-z0-9]+)*$',
  ignored_directories: ['_templates', 'skills', 'taxonomy'],
  ignored_files: ['README.md', 'AGENTS.md'],
};
const SAFETY_RANK = { low: 0, low_to_medium: 1, medium: 1, high: 2 };
const STATUS_WEIGHT = { published: 1.15, reviewed: 1.1, draft: 0.9 };

const posix = (value) => value.split(path.sep).join('/');
const readJson = (file) => JSON.parse(readFileSync(file, 'utf8').replace(/^\uFEFF/, ''));
const round = (value) => (Number.isInteger(value) ? value : Math.round(value * 10) / 10);
const strings = (value) => (Array.isArray(value) ? value : [value]).filter((item) => typeof item === 'string' && item.trim()).map((item) => item.trim());

export function loadSchema(kbRoot) {
  try { return { ...DEFAULT_SCHEMA, ...readJson(path.join(kbRoot, 'schema.json')) }; } catch { return { ...DEFAULT_SCHEMA }; }
}

/** Libraries in directory order; a broken library.json is reported, not skipped silently. */
export function loadLibraries(kbRoot) {
  const libraries = [];
  for (const entry of readdirSync(kbRoot, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    if (!entry.isDirectory() || entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    const directory = path.join(kbRoot, entry.name);
    const file = path.join(directory, 'library.json');
    let manifest;
    try { statSync(file); } catch { continue; }
    try { manifest = readJson(file); } catch (error) { manifest = { id: entry.name, error: `library.json 不是合法 JSON：${error.message}` }; }
    libraries.push({
      id: entry.name,
      title_zh: manifest.title_zh || entry.name,
      summary: manifest.summary || '',
      when_to_use: manifest.when_to_use || '',
      age_convention: manifest.age_convention ?? null,
      doc_types: manifest.doc_types && typeof manifest.doc_types === 'object' ? manifest.doc_types : {},
      directory,
      error: manifest.error || (manifest.id && manifest.id !== entry.name ? `library.json 的 id（${manifest.id}）和目录名 ${entry.name} 不一致。` : null),
    });
  }
  return libraries;
}

/** Age span in years from the three conventions the libraries use; null when a card says nothing about age. */
export function ageSpan(data) {
  const range = data.age_range;
  if (range && typeof range === 'object' && Number.isFinite(range.min) && Number.isFinite(range.max)) return { min: range.min, max: range.max };
  if (Number.isFinite(data.age_min_months) && Number.isFinite(data.age_max_months)) {
    return { min: data.age_min_months / 12, max: data.age_max_months / 12 };
  }
  let min = Infinity;
  let max = -Infinity;
  for (const stage of [...strings(data.age_stage), ...strings(data.age_stages)]) {
    const match = stage.match(/^age_(\d+)_(\d+)(m|y)$/);
    if (!match) continue;
    const scale = match[3] === 'm' ? 12 : 1;
    min = Math.min(min, Number(match[1]) / scale);
    max = Math.max(max, Number(match[2]) / scale);
  }
  return Number.isFinite(min) ? { min, max } : null;
}

function walk(directory, schema, found = []) {
  let entries;
  try { entries = readdirSync(directory, { withFileTypes: true }); } catch { return found; }
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_') || entry.name === 'node_modules') continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!schema.ignored_directories.includes(entry.name)) walk(full, schema, found);
    } else if (entry.isFile() && entry.name.endsWith('.md') && !schema.ignored_files.includes(entry.name)) {
      found.push(full);
    }
  }
  return found;
}

function entryOf(library, kbRoot, schema, file, source, stat) {
  const { data, body, frontmatter } = parseFrontmatter(source);
  const heading = body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? '';
  const base = path.basename(file, '.md');
  const id = typeof data.id === 'string' && data.id ? data.id : '';
  const titleZh = typeof data.title_zh === 'string' ? data.title_zh : '';
  const title = titleZh || (typeof data.name === 'string' ? data.name : '') || heading || (typeof data.title === 'string' ? data.title : '') || base;
  const headings = [...body.matchAll(/^#{1,4}\s+(.+)$/gm)].map((match) => match[1].trim());
  const keys = [...strings(data.aliases), ...strings(data.search_terms)];
  const tags = [];
  for (const [key, value] of Object.entries(data)) {
    if (schema.ref_fields.includes(key) || key === 'aliases' || key === 'search_terms' || key === 'id') continue;
    tags.push(...strings(value).filter((item) => !Array.isArray(value) || item.length < 60));
  }
  const relative = posix(path.relative(library.directory, file));
  return {
    library: library.id,
    ref: `${library.id}/${id || base}`,
    id: id || base,
    has_id: Boolean(id),
    has_frontmatter: frontmatter,
    path: `${library.id}/${relative}`,
    relative,
    file,
    doc_type: typeof data.doc_type === 'string' ? data.doc_type : null,
    status: typeof data.status === 'string' ? data.status : null,
    title,
    data,
    body,
    age: ageSpan(data),
    duration_min: Number.isFinite(data.duration_min) ? data.duration_min : null,
    safety_level: typeof data.safety_level === 'string' ? data.safety_level : null,
    fields: [
      { text: normalize(`${title} ${typeof data.title === 'string' ? data.title : ''} ${id}`), weight: 12, phrase: 20 },
      { text: normalize(keys.join(' | ')), weight: 7, phrase: 10 },
      { text: normalize(tags.join(' | ')), weight: 3 },
      { text: normalize(headings.join(' | ')), weight: 2 },
      { text: normalize(body), weight: 1, cap: 6, phrase: 4 },
    ],
    mtime: stat.mtimeMs,
    size: stat.size,
  };
}

export function createKnowledgeIndex(kbRoot) {
  const cache = new Map();
  let libraries = [];
  let schema = DEFAULT_SCHEMA;
  let idPattern = new RegExp(DEFAULT_SCHEMA.id_pattern);
  let graph = null;

  const refresh = () => {
    schema = loadSchema(kbRoot);
    idPattern = new RegExp(schema.id_pattern);
    libraries = loadLibraries(kbRoot);
    const seen = new Set();
    let changed = false;
    for (const library of libraries) {
      for (const file of walk(library.directory, schema)) {
        seen.add(file);
        let stat;
        try { stat = statSync(file); } catch { continue; }
        const cached = cache.get(file);
        if (cached && cached.mtime === stat.mtimeMs && cached.size === stat.size) continue;
        try { cache.set(file, entryOf(library, kbRoot, schema, file, readFileSync(file, 'utf8'), stat)); } catch { cache.delete(file); }
        changed = true;
      }
    }
    for (const file of [...cache.keys()]) if (!seen.has(file)) { cache.delete(file); changed = true; }
    if (changed) graph = null;
    return [...cache.values()];
  };

  /** Cards by library and id, outgoing references, and backlinks. Rebuilt only when a file changed. */
  const links = () => {
    const entries = refresh();
    if (graph) return graph;
    const byLibrary = new Map();
    for (const entry of entries) {
      if (!byLibrary.has(entry.library)) byLibrary.set(entry.library, new Map());
      const ids = byLibrary.get(entry.library);
      if (!ids.has(entry.id)) ids.set(entry.id, []);
      ids.get(entry.id).push(entry);
    }
    const resolve = (from, value) => {
      const slash = value.indexOf('/');
      const library = slash > 0 ? value.slice(0, slash) : from.library;
      const id = slash > 0 ? value.slice(slash + 1) : value;
      const ids = byLibrary.get(library);
      if (!ids) return null;
      if (ids.get(id)?.length === 1) return ids.get(id)[0];
      const near = [...ids.values()].flat().filter((other) => other.id.startsWith(`${id}-`) || id.startsWith(`${other.id}-`));
      return near.length === 1 ? near[0] : null;
    };
    const outgoing = new Map();
    const incoming = new Map();
    for (const entry of entries) {
      const refs = [];
      for (const field of schema.ref_fields) {
        for (const value of strings(entry.data[field])) {
          const strict = schema.strict_ref_fields.includes(field);
          const looksLikeRef = value.includes('/') || idPattern.test(value);
          if (!strict && !looksLikeRef) continue;
          const target = resolve(entry, value);
          refs.push({ field, value, target });
          if (target) {
            if (!incoming.has(target.ref)) incoming.set(target.ref, []);
            incoming.get(target.ref).push({ field, from: entry });
          }
        }
      }
      outgoing.set(entry.ref, refs);
    }
    graph = { entries, byLibrary, outgoing, incoming, resolve };
    return graph;
  };

  const libraryOf = (value) => {
    if (value === undefined || value === null || value === '') return null;
    const found = libraries.find((library) => library.id === value || library.title_zh === value);
    if (!found) {
      const known = libraries.map((library) => `${library.id}（${library.title_zh}）`).join('、');
      throw new Error(`没有这个知识库：${value}。可用的有：${known}。`);
    }
    return found;
  };

  const brief = (entry) => ({ ref: entry.ref, title: entry.title, library: entry.library, doc_type: entry.doc_type });

  return {
    root: kbRoot,
    schema: () => { refresh(); return schema; },
    entries: () => refresh(),
    graph: () => links(),

    libraries() {
      const entries = refresh();
      return libraries.map((library) => {
        const own = entries.filter((entry) => entry.library === library.id);
        const types = {};
        for (const entry of own) types[entry.doc_type ?? '?'] = (types[entry.doc_type ?? '?'] ?? 0) + 1;
        return { ...library, documents: own.length, counts: types };
      });
    },

    library(value) {
      refresh();
      return libraryOf(value);
    },

    search(query, { library, docType, age, maxMinutes, maxSafety, limit = 8, exclude } = {}) {
      const entries = refresh();
      const only = libraryOf(library);
      const terms = queryTerms(query);
      const ceiling = maxSafety ? SAFETY_RANK[maxSafety] : undefined;
      const hits = [];
      for (const entry of entries) {
        if (only && entry.library !== only.id) continue;
        if (exclude?.(entry)) continue;
        if (docType && entry.doc_type !== docType) continue;
        if (age !== undefined && entry.age && (age < Math.floor(entry.age.min) || age > Math.ceil(entry.age.max))) continue;
        if (maxMinutes !== undefined && entry.duration_min !== null && entry.duration_min > maxMinutes) continue;
        if (ceiling !== undefined && entry.safety_level && (SAFETY_RANK[entry.safety_level] ?? 2) > ceiling) continue;
        const score = scoreFields(entry.fields, terms) * (STATUS_WEIGHT[entry.status] ?? 1);
        if (score > 0) hits.push({ entry, score });
      }
      hits.sort((a, b) => b.score - a.score);
      return {
        total: hits.length,
        items: hits.slice(0, limit).map(({ entry, score }) => ({
          ...brief(entry),
          status: entry.status,
          path: entry.path,
          age: entry.age ? `${round(entry.age.min)}–${round(entry.age.max)} 岁` : null,
          duration_min: entry.duration_min,
          safety_level: entry.safety_level,
          score: Math.round(score * 10) / 10,
          snippet: snippet(entry.body, terms),
        })),
      };
    },

    /** One card by ref (`library/id`), bare id, or path under kb/ (`library/relative/path.md`). */
    find(value) {
      const entries = refresh();
      const wanted = String(value ?? '').trim().replaceAll('\\', '/').replace(/^kb\//, '');
      if (!wanted) throw new Error('ref 不能为空。');
      const exact = entries.find((entry) => entry.ref === wanted || entry.path === wanted);
      if (exact) return exact;
      const slash = wanted.indexOf('/');
      if (slash > 0 && libraries.some((library) => library.id === wanted.slice(0, slash))) {
        const found = links().resolve({ library: wanted.slice(0, slash) }, wanted);
        if (found) return found;
      }
      const byId = entries.filter((entry) => entry.id === wanted);
      if (byId.length === 1) return byId[0];
      if (byId.length > 1) throw new Error(`id ${wanted} 在多个知识库里都有：${byId.map((entry) => entry.ref).join('、')}。请用 库/id 的形式。`);
      throw new Error(`知识库里没有 ${wanted}。先用 kb_search 找到条目，再用返回的 ref 读取。`);
    },

    /** What a card points to and what points to it, grouped by frontmatter field. */
    links(entry) {
      const { outgoing, incoming } = links();
      return {
        outgoing: (outgoing.get(entry.ref) ?? []).map(({ field, value, target }) => ({ field, value, ...(target ? brief(target) : { ref: null }) })),
        incoming: (incoming.get(entry.ref) ?? []).map(({ field, from }) => ({ field, ...brief(from) })),
      };
    },

    /** Ids already used in a library for one id prefix, for allocating the next one. */
    ids(libraryId, prefix) {
      return refresh().filter((entry) => entry.library === libraryId && entry.id.startsWith(`${prefix}-`)).map((entry) => entry.id);
    },
  };
}

/** The next free `<prefix>-NNNN` for a library: one more than the highest number in use. */
export function nextId(ids, prefix) {
  let highest = 0;
  for (const id of ids) {
    const match = id.slice(prefix.length + 1).match(/^(\d+)/);
    if (match) highest = Math.max(highest, Number(match[1]));
  }
  return `${prefix}-${String(highest + 1).padStart(4, '0')}`;
}
