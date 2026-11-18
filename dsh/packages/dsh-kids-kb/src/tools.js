import { readFileSync } from 'node:fs';
import path from 'node:path';
import { checkKnowledge } from './check.js';
import { nextId } from './index.js';
import { kbServiceOf } from './service.js';
import { MAX_TEXT, cut, fail, integer, inside, only, optionalText, output, parameters, registerSkills, requiredText, sessionDirectory, textList } from './shared.js';
import { MAINTENANCE_SKILLS, loadLibrarySkills } from './skills.js';

// 知识库工具：kids-ai-lab 的 kb/ 目录（六个库，见 kb/README.md）。每个模式都可以挂这一行：
//   kb_libraries / kb_search / kb_read / kb_links  只读，所有模式都有；
//   kb_schema / kb_check                          maintain: true 时才有（知识库模式），配合 DSH 自带的文件工具写卡片。
// skillLibraries 决定注册哪些库的 skill（kb/<id>/AGENTS.md 和 kb/<id>/skills/*.md），默认全部。
export const name = 'kids-kb-tools';
export const inject = ['tools'];

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SUGGEST_MIN_SCORE = 3;

const facts = (item) => [item.library, item.doc_type, item.age, item.duration_min ? `${item.duration_min} 分钟` : null,
  item.safety_level ? `安全 ${item.safety_level}` : null, item.status].filter(Boolean).join(' · ');
const hit = (item) => `- **${item.title}** — ref \`${item.ref}\`（${facts(item)}）\n  ${item.snippet}`;
const linkLine = (link) => (link.ref ? `\`${link.ref}\` ${link.title}（${link.field}）` : `\`${link.value}\` ⚠ 找不到（${link.field}）`);

const markdownOf = {
  libraries: (value) => [
    '| id | 知识库 | 条目 | 主要类型 | 什么时候用 |',
    '| --- | --- | --- | --- | --- |',
    ...value.libraries.map((library) => `| \`${library.id}\` | ${library.title_zh} | ${library.documents} | ${Object.entries(library.counts)
      .sort((a, b) => b[1] - a[1]).slice(0, 4).map(([type, count]) => `${type} ${count}`).join('、')} | ${library.when_to_use} |`),
    '',
    `每个库的规则是 skill \`kb-<id>\`。引用卡片写 ref（库id/卡片id）。`,
  ].join('\n'),
  search: (value) => (value.items.length
    ? [`共命中 ${value.total} 条，显示前 ${value.items.length} 条：`, ...value.items.map(hit), '', value.citation_rule].join('\n')
    : `没有命中。${value.hint}`),
  read: (value) => [
    `ref: \`${value.ref}\` · ${value.doc_type ?? '无类型'} · ${value.status ?? '无状态'} · kb/${value.path}`,
    value.links.outgoing.length ? `引用：${value.links.outgoing.map(linkLine).join('；')}` : null,
    value.links.incoming.length ? `被引用：${value.links.incoming.map(linkLine).join('；')}` : null,
    '',
    value.content,
    value.next_offset !== null ? `\n> 正文还没读完：共 ${value.total_chars} 字符，下一次用 offset=${value.next_offset} 继续读。` : null,
  ].filter((part) => part !== null).join('\n'),
  links: (value) => [
    `**${value.title}**（\`${value.ref}\`）`,
    `引用（${value.outgoing.length}）：${value.outgoing.length ? '' : '无'}`, ...value.outgoing.map((link) => `- ${linkLine(link)}`),
    `被引用（${value.incoming.length}）：${value.incoming.length ? '' : '无'}`, ...value.incoming.map((link) => `- ${linkLine(link)}`),
    ...(value.suggestions ? [`其他库里可能相关（${value.suggestions.length}，先 kb_read 确认再写进 related）：`,
      ...value.suggestions.map((item) => `- \`${item.ref}\` ${item.title}（${facts(item)}）`)] : []),
  ].join('\n'),
  schema: (value) => (value.doc_type
    ? [
      `**${value.library} / ${value.doc_type}**（${value.label}）`,
      `- 下一个 id：\`${value.next_id}\``,
      `- 放在：\`kb/${value.folder}/\`${value.existing_folders.length ? `，已有子目录：${value.existing_folders.map((folder) => `\`${folder}\``).join('、')}` : ''}`,
      `- 文件：${value.write_path ? `\`${value.write_path}\`` : `\`${value.next_id}-<slug>.md\`（给 slug 就会算出完整路径）`}`,
      `- 必填：${value.required.join('、')}`,
      `- 引用字段：${value.ref_fields.join('、')}；跨库写 related: [库id/卡片id]`,
      `- status：${value.statuses.join(' / ')}（新卡写 draft）`,
      value.workspace,
      '',
      value.template ? `模板（${value.template_path}）：\n\n${value.template}` : '这个类型没有模板，参照同类型的现有卡片。',
    ].join('\n')
    : [`**${value.library}** 的卡片类型：`, ...value.doc_types.map((type) => `- \`${type.doc_type}\` ${type.label}：id 前缀 ${type.id_prefix.join(' / ')}，放在 kb/${value.library}/${type.folder}/，现有 ${type.count} 张`),
      '', '传 doc_type（和 slug）拿模板、下一个 id 和文件路径。'].join('\n')),
  check: (value) => [
    `检查了 ${value.checked} 张卡片：${value.errors.length} 个错误，${value.warnings.length} 个提醒。`,
    ...value.shown.map((issue) => `- ${issue.level === 'error' ? '✗' : '!'} ${issue.path ?? ''} ${issue.message}`),
    value.shown.length < value.errors.length + value.warnings.length ? `…还有 ${value.errors.length + value.warnings.length - value.shown.length} 条，缩小 library 或 paths 再查。` : null,
    value.ok ? '没有错误。' : '错误必须修完：它们会让检索或引用失效。',
  ].filter(Boolean).join('\n'),
};

function workspaceHint(exec, kbRoot) {
  const cwd = sessionDirectory(exec);
  if (!cwd) return null;
  if (inside(cwd, kbRoot)) return { cwd, relative: (file) => path.relative(cwd, file).split(path.sep).join('/') };
  return { cwd, relative: null };
}

export function createKbTools(ctx, config = {}) {
  const service = kbServiceOf(ctx, config);
  const kb = () => service.index();
  const maintain = config.maintain === true;
  const register = (tool) => ctx.tools.register(tool);

  register({
    name: 'kb_libraries',
    description: 'List the kids-ai-lab knowledge libraries under kb/ (science experiments, parent-child games, child psychology, language development, fun AI, wonder notes): id, what each is for, and how many cards of each type it holds. Each library has a skill kb-<id> with its own rules.',
    parameters: parameters({}),
    output: output({ libraries: { type: 'array', items: { type: 'object' } } }, markdownOf.libraries),
    async execute(args) {
      only(args, [], 'kb_libraries');
      return {
        libraries: kb().libraries().map(({ directory: _directory, doc_types: types, ...library }) => ({ ...library, doc_types: Object.keys(types) })),
      };
    },
  });

  register({
    name: 'kb_search',
    description: 'Search the kids-ai-lab knowledge base before answering. q is the user\'s own words (Chinese works without spaces). library narrows to one library id from kb_libraries (science, games, psychology, language, ai, wonder). doc_type narrows to a card type such as experiment_card, game_card, support_card. age (years) keeps cards whose age range includes it; max_minutes keeps cards that take at most that long; max_safety (low/medium/high) drops riskier cards. Cite each hit by its ref. No hit means the knowledge base has nothing on it: say so, do not invent a card.',
    parameters: parameters({
      q: { type: 'string', description: 'What to look for, in the user\'s words.' },
      library: { type: 'string', description: 'Library id from kb_libraries, e.g. science.' },
      doc_type: { type: 'string', description: 'Card type, e.g. experiment_card, game_card, support_card, practice_card, topic_card, collection.' },
      age: { type: 'integer', description: 'Child age in years, 0 to 18.' },
      max_minutes: { type: 'integer', description: 'Longest acceptable duration in minutes, 1 to 600.' },
      max_safety: { type: 'string', enum: ['low', 'medium', 'high'] },
      limit: { type: 'integer', description: 'How many hits to return, 1 to 20 (default 8).' },
    }, ['q']),
    output: output({ items: { type: 'array', items: { type: 'object' } }, total: { type: 'integer' } }, markdownOf.search),
    async execute(args) {
      only(args, ['q', 'library', 'doc_type', 'age', 'max_minutes', 'max_safety', 'limit'], 'kb_search');
      const q = requiredText(args.q, 'q', 200);
      const library = optionalText(args.library, 'library', 60) || undefined;
      const docType = optionalText(args.doc_type, 'doc_type', 60) || undefined;
      const age = integer(args.age, 'age', { min: 0, max: 18, fallback: undefined });
      const maxMinutes = integer(args.max_minutes, 'max_minutes', { min: 1, max: 600, fallback: undefined });
      if (args.max_safety !== undefined && !['low', 'medium', 'high'].includes(args.max_safety)) fail('max_safety 只能是 low、medium 或 high。');
      const limit = integer(args.limit, 'limit', { min: 1, max: 20, fallback: 8 });
      return {
        ...kb().search(q, { library, docType, age, maxMinutes, maxSafety: args.max_safety, limit }),
        citation_rule: '引用时写出条目的 ref（库id/卡片id）；snippet 只是片段，要用条目内容时先 kb_read。',
        hint: '可以换个说法、去掉筛选条件，或换一个库再搜；都没有时如实告诉用户，需要的话按 skill kb-ingest-source 从可信来源补充。',
      };
    },
  });

  register({
    name: 'kb_read',
    description: 'Read one knowledge card in full by its ref (library/id, as kb_search returns), a bare id, or its path under kb/. Shows what the card references and which cards reference it. Long cards come in pages: pass the returned next_offset as offset to continue.',
    parameters: parameters({
      ref: { type: 'string', description: 'The ref from kb_search, e.g. science/experiment-0066-hot-cold-water-density.' },
      offset: { type: 'integer', description: 'Character offset to continue a long card from.' },
    }, ['ref']),
    output: output({ ref: { type: 'string' }, content: { type: 'string' } }, markdownOf.read),
    async execute(args) {
      only(args, ['ref', 'offset'], 'kb_read');
      const index = kb();
      const entry = index.find(requiredText(args.ref, 'ref', 300));
      const offset = integer(args.offset, 'offset', { min: 0, max: 10_000_000, fallback: 0 });
      const full = readFileSync(entry.file, 'utf8');
      const content = full.slice(offset, offset + MAX_TEXT);
      return {
        ref: entry.ref, title: entry.title, library: entry.library, doc_type: entry.doc_type, path: entry.path, status: entry.status,
        links: index.links(entry), content, total_chars: full.length, next_offset: offset + MAX_TEXT < full.length ? offset + MAX_TEXT : null,
      };
    },
  });

  register({
    name: 'kb_links',
    description: 'Show how one card connects to the rest of the knowledge base: the cards it references (sources, derived cards, related), the cards that reference it, and with suggest=true candidate cards in other libraries worth adding to its related field. Use it to follow a topic across libraries (e.g. a game card to the psychology support card behind it).',
    parameters: parameters({
      ref: { type: 'string', description: 'Card ref (library/id), bare id, or path under kb/.' },
      suggest: { type: 'boolean', description: 'Also suggest related cards from other libraries (default false).' },
      limit: { type: 'integer', description: 'How many suggestions, 1 to 12 (default 6).' },
    }, ['ref']),
    output: output({ ref: { type: 'string' }, outgoing: { type: 'array' }, incoming: { type: 'array' } }, markdownOf.links),
    async execute(args) {
      only(args, ['ref', 'suggest', 'limit'], 'kb_links');
      if (args.suggest !== undefined && typeof args.suggest !== 'boolean') fail('suggest 必须是 true 或 false。');
      const limit = integer(args.limit, 'limit', { min: 1, max: 12, fallback: 6 });
      const index = kb();
      const entry = index.find(requiredText(args.ref, 'ref', 300));
      const { outgoing, incoming } = index.links(entry);
      let suggestions = null;
      if (args.suggest) {
        const linked = new Set([entry.ref, ...outgoing.map((link) => link.ref), ...incoming.map((link) => link.ref)]);
        // Digits and ages ("2 岁") match model names and years in other libraries, not topics.
        const words = [entry.title, ...[entry.data.aliases, entry.data.search_terms].flat().filter((item) => typeof item === 'string')]
          .slice(0, 6).join(' ').replace(/\d+(?:\.\d+)?\s*(?:岁|个月|月龄)?/g, ' ');
        const age = entry.age;
        const ageFits = (other) => !age || (other.age && other.age.min <= age.max && other.age.max >= age.min);
        suggestions = index.search(words, {
          limit,
          exclude: (other) => other.library === entry.library || linked.has(other.ref) || !other.doc_type || other.doc_type.startsWith('source_') || !ageFits(other),
        }).items.filter((item) => item.score >= SUGGEST_MIN_SCORE);
      }
      return { ref: entry.ref, title: entry.title, outgoing, incoming, suggestions };
    },
  });

  if (maintain) {
    register({
      name: 'kb_schema',
      description: 'Before writing a card: the template, the next free id, the folder and file path, required fields and reference fields for one card type in one library. Without doc_type it lists the library\'s card types. Write the file yourself with the file tools, then run kb_check on it.',
      parameters: parameters({
        library: { type: 'string', description: 'Library id, e.g. games.' },
        doc_type: { type: 'string', description: 'Card type from the library, e.g. game_card.' },
        slug: { type: 'string', description: 'English kebab-case slug for the file name, e.g. balloon-rocket.' },
        subfolder: { type: 'string', description: 'Values for the folder placeholders, e.g. age_24_36m/language for games/<age_stage>/<skill>.' },
      }, ['library']),
      output: output({ library: { type: 'string' }, next_id: { type: 'string' } }, markdownOf.schema),
      async execute(args, exec) {
        only(args, ['library', 'doc_type', 'slug', 'subfolder'], 'kb_schema');
        const index = kb();
        const library = index.library(requiredText(args.library, 'library', 60));
        const schema = index.schema();
        const entries = index.entries().filter((entry) => entry.library === library.id);
        const docType = optionalText(args.doc_type, 'doc_type', 60);
        if (!docType) {
          return {
            library: library.id, doc_type: null,
            doc_types: Object.entries(library.doc_types).map(([type, spec]) => ({
              doc_type: type, label: spec.label, id_prefix: spec.id_prefix, folder: spec.folder, count: entries.filter((entry) => entry.doc_type === type).length,
            })),
          };
        }
        const spec = library.doc_types[docType] ?? fail(`${library.id} 没有 doc_type ${docType}，可用：${Object.keys(library.doc_types).join('、')}。`);
        const slug = optionalText(args.slug, 'slug', 60);
        if (slug && !SLUG.test(slug)) fail('slug 只能用小写英文字母、数字和连字符，例如 balloon-rocket。');
        const prefix = spec.id_prefix[0];
        const id = nextId(index.ids(library.id, prefix), prefix);
        const existing = [...new Set(entries.filter((entry) => entry.doc_type === docType).map((entry) => path.posix.dirname(entry.relative)))].sort();
        const placeholders = (spec.folder ?? '').split('/').filter((part) => /^<.+>$/.test(part)).length;
        let folder = spec.folder ?? '';
        const subfolder = optionalText(args.subfolder, 'subfolder', 120).replaceAll('\\', '/').replace(/^\/+|\/+$/g, '');
        if (subfolder) {
          const parts = subfolder.split('/');
          if (parts.length !== placeholders || parts.some((part) => !/^[a-z0-9_]+$/.test(part))) fail(`subfolder 要给 ${placeholders} 级目录（${spec.folder}），只用小写英文、数字和下划线。`);
          let at = 0;
          folder = folder.split('/').map((part) => (/^<.+>$/.test(part) ? parts[at++] : part)).join('/');
        }
        const ready = slug && (placeholders === 0 || subfolder);
        const file = ready ? path.join(index.root, library.id, ...folder.split('/'), `${id}-${slug}.md`) : null;
        const hint = workspaceHint(exec, index.root);
        let template = null;
        if (spec.template) {
          try { template = cut(readFileSync(path.join(library.directory, spec.template), 'utf8'), 6000); } catch { template = null; }
        }
        return {
          library: library.id, doc_type: docType, label: spec.label, next_id: id,
          folder: `${library.id}/${spec.folder}`, existing_folders: existing.slice(0, 30),
          write_path: file ? (hint?.relative ? hint.relative(file) : file) : null, file,
          required: [...schema.required, ...(spec.required ?? [])], ref_fields: schema.ref_fields, statuses: schema.statuses,
          template_path: spec.template ? `kb/${library.id}/${spec.template}` : null, template,
          workspace: hint && !hint.relative
            ? `⚠ 当前会话目录 ${hint.cwd} 不包含知识库（${index.root}），文件工具可能写不进去：请在 kids-ai-lab 仓库目录新开会话。`
            : `文件路径相对当前会话目录；知识库在 ${index.root}。`,
        };
      },
    });

    register({
      name: 'kb_check',
      description: 'Validate knowledge cards against kb/README.md: frontmatter, ids, file names, doc types, folders, required fields, and that every reference resolves. Run it on the files you just wrote (paths relative to kb/, or refs) and fix every error before finishing.',
      parameters: parameters({
        library: { type: 'string', description: 'Only check this library.' },
        paths: { type: 'array', items: { type: 'string' }, description: 'Card paths relative to kb/ (e.g. games/games/age_24_36m/language/game-0300-x.md) or refs.' },
        warnings: { type: 'boolean', description: 'List warnings too (default true).' },
      }),
      output: output({ ok: { type: 'boolean' }, errors: { type: 'array' }, warnings: { type: 'array' } }, markdownOf.check),
      async execute(args) {
        only(args, ['library', 'paths', 'warnings'], 'kb_check');
        const index = kb();
        const library = optionalText(args.library, 'library', 60);
        if (library) index.library(library);
        const paths = textList(args.paths, 'paths', { max: 50, itemMax: 400 });
        if (args.warnings !== undefined && typeof args.warnings !== 'boolean') fail('warnings 必须是 true 或 false。');
        const result = checkKnowledge(index, { library: library || undefined, paths });
        if (paths.length && !result.checked) fail(`没有找到这些卡片：${paths.join('、')}。路径相对 kb/，例如 games/games/age_24_36m/language/game-0300-x.md。`);
        const shown = [...result.errors, ...(args.warnings === false ? [] : result.warnings)].slice(0, 60);
        return { ...result, shown };
      },
    });
  }

  let disposeSkills = () => {};
  if (config.skills !== false) {
    try {
      const wanted = Array.isArray(config.skillLibraries) ? config.skillLibraries : undefined;
      const { skills } = loadLibrarySkills(kb().libraries(), { only: wanted });
      disposeSkills = registerSkills(ctx, [...(maintain ? MAINTENANCE_SKILLS : []), ...skills]);
    } catch {
      disposeSkills = registerSkills(ctx, maintain ? MAINTENANCE_SKILLS : []);
    }
  }

  return { dispose() { disposeSkills(); } };
}

export function apply(ctx, config = {}) {
  const { dispose } = createKbTools(ctx, config);
  ctx.on('dispose', dispose);
}
