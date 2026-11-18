import { existsSync } from 'node:fs';
import path from 'node:path';
import { loadLibrarySkills } from './skills.js';

// Checks the rules in kb/README.md against every card. Errors break tools or links (missing ids, unknown types,
// dangling references); warnings are conventions a reviewer should fix before marking a card reviewed.

const present = (value) => !(value === undefined || value === null || value === '' || (Array.isArray(value) && !value.filter((item) => item !== '').length));

/** `<placeholder>` matches one directory level. */
const folderPattern = (pattern) => new RegExp(`^${pattern.split('/').map((part) => (/^<.+>$/.test(part) ? '[^/]+' : part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))).join('/')}$`);

export function checkKnowledge(index, { library, paths } = {}) {
  const schema = index.schema();
  const libraries = index.libraries();
  const { entries, outgoing } = index.graph();
  const idPattern = new RegExp(schema.id_pattern);
  const issues = [];
  const add = (level, entry, rule, message) => issues.push({ level, rule, path: entry?.path ?? null, ref: entry?.ref ?? null, message });

  const wanted = paths?.length ? new Set(paths.map((item) => item.replaceAll('\\', '/').replace(/^kb\//, ''))) : null;
  const inScope = (entry) => (!library || entry.library === library) && (!wanted || wanted.has(entry.path) || wanted.has(entry.ref));

  for (const lib of libraries) {
    if (library && lib.id !== library) continue;
    if (lib.error) add('error', { path: `${lib.id}/library.json` }, 'library', lib.error);
    for (const [type, spec] of Object.entries(lib.doc_types)) {
      if (!Array.isArray(spec.id_prefix) || !spec.id_prefix.length) add('error', { path: `${lib.id}/library.json` }, 'library', `${type} 没有 id_prefix。`);
      if (spec.template && !existsSync(path.join(lib.directory, spec.template))) add('warning', { path: `${lib.id}/library.json` }, 'library', `${type} 的模板 ${spec.template} 不存在。`);
    }
    if (!existsSync(path.join(lib.directory, 'AGENTS.md'))) add('warning', { path: `${lib.id}/` }, 'library', '缺少 AGENTS.md（库规则，也会注册成 skill）。');
  }
  for (const problem of loadLibrarySkills(libraries.filter((lib) => !library || lib.id === library)).problems) add('error', null, 'skill', problem);

  const seen = new Map();
  for (const entry of entries) {
    const key = `${entry.library}/${entry.id}`;
    if (!seen.has(key)) seen.set(key, []);
    seen.get(key).push(entry);
  }

  for (const entry of entries) {
    if (!inScope(entry)) continue;
    const lib = libraries.find((item) => item.id === entry.library);
    if (!entry.has_frontmatter) { add('error', entry, 'frontmatter', '缺少 YAML frontmatter。不是知识卡的文件放进以 _ 开头的目录。'); continue; }
    for (const field of schema.required) if (!present(entry.data[field])) add('error', entry, 'required', `缺少 ${field}。`);
    if (entry.status && !schema.statuses.includes(entry.status)) add('error', entry, 'status', `status 只能是 ${schema.statuses.join(' / ')}，现在是 ${entry.status}。`);
    if (entry.has_id) {
      if (!idPattern.test(entry.id)) add('error', entry, 'id', `id ${entry.id} 不符合 <前缀>-<编号> 的格式。`);
      const base = path.basename(entry.file, '.md');
      if (base !== entry.id && !base.startsWith(`${entry.id}-`)) add('error', entry, 'filename', `文件名要以 id 开头：${entry.id}-<slug>.md。`);
      if ((seen.get(`${entry.library}/${entry.id}`) ?? []).length > 1) add('error', entry, 'duplicate', `id ${entry.id} 在本库重复：${seen.get(`${entry.library}/${entry.id}`).map((other) => other.path).join('、')}。`);
    }
    const spec = entry.doc_type ? lib?.doc_types[entry.doc_type] : null;
    if (entry.doc_type && !spec) {
      add('error', entry, 'doc_type', `${entry.library} 的 library.json 里没有 doc_type ${entry.doc_type}，可用：${Object.keys(lib?.doc_types ?? {}).join('、')}。`);
    } else if (spec) {
      if (entry.has_id && !spec.id_prefix.some((prefix) => entry.id.startsWith(`${prefix}-`))) add('warning', entry, 'id_prefix', `${entry.doc_type} 的 id 应以 ${spec.id_prefix.join(' / ')}- 开头。`);
      if (spec.folder && !folderPattern(spec.folder).test(path.posix.dirname(entry.relative))) add('warning', entry, 'folder', `${entry.doc_type} 应放在 ${spec.folder}/ 下。`);
      const missing = (spec.required ?? []).filter((field) => !present(entry.data[field]));
      if (missing.length) add('warning', entry, 'fields', `缺少字段：${missing.join('、')}。`);
    }
    for (const ref of outgoing.get(entry.ref) ?? []) {
      if (!ref.target) add('error', entry, 'ref', `${ref.field} 引用的 ${ref.value} 找不到。跨库引用写成 库id/卡片id。`);
    }
    for (const match of entry.body.matchAll(/\]\(([^)#\s]+\.md)(?:#[^)]*)?\)/g)) {
      const target = match[1];
      if (/^[a-z]+:/i.test(target)) { add('warning', entry, 'link', `正文链接 ${target} 是绝对地址，改成相对路径或卡片 ref。`); continue; }
      if (!existsSync(path.resolve(path.dirname(entry.file), decodeURIComponent(target)))) add('warning', entry, 'link', `正文链接 ${target} 指向的文件不存在。`);
    }
  }

  const errors = issues.filter((issue) => issue.level === 'error');
  const warnings = issues.filter((issue) => issue.level === 'warning');
  const byRule = {};
  for (const issue of issues) byRule[`${issue.level}:${issue.rule}`] = (byRule[`${issue.level}:${issue.rule}`] ?? 0) + 1;
  return { ok: errors.length === 0, checked: entries.filter(inScope).length, errors, warnings, by_rule: byRule };
}
