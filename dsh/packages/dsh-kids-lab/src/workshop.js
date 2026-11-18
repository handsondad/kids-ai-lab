import { existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { EXPERIMENT_FOLDERS, EXPERIMENT_TYPES, TOPIC_CLUSTERS, renderKnowledgeCard, renderLabMarkdown } from './lab-card.js';
import { renderLabPage, safeUrl } from './lab-page.js';
import { createPlaygroundIndex } from './playground-index.js';
import { safetyCheck } from './safety.js';
import { SKILLS } from './skills.js';
import {
  LAB_FOLDER, approve, existingDirectory, fail, integer, inside, kbService, only, optionalText, output, parameters, registerSkills, requiredText,
  resolveSettings, sessionDirectory, textList,
} from './shared.js';

// 实验工坊插件：安全检查、生成互动实验页（会话工作区 kids-lab/<slug>/）、列出实验、写回 kb/science（趣味科学实验库）。
// 两个写入工具都要用户在 DSH 的确认卡上确认；写回知识库的卡片一律是 draft。
export const name = 'kids-lab-workshop';
export const inject = ['tools', 'userQuestions'];

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const SCIENCE = 'science';
const LEVEL_TEXT = { low: '低风险', medium: '需要大人指导', high: '有危险步骤（大人操作）', block: '不适合儿童' };
const SUPERVISION_TEXT = { independent: '可以自己做', guided: '大人在旁指导', close_supervision: '大人全程陪同' };

const stringArray = (description) => ({ type: 'array', items: { type: 'string' }, description });

const SPEC = {
  title: { type: 'string', description: 'Chinese title a child would enjoy, e.g. 让鸡蛋浮起来.' },
  slug: { type: 'string', description: 'ASCII folder name: lowercase letters, digits and hyphens, e.g. floating-egg.' },
  emoji: { type: 'string' },
  age_min: { type: 'integer', description: 'Youngest suitable age in years, 2 to 16.' },
  age_max: { type: 'integer', description: 'Oldest suitable age in years, 2 to 18.' },
  duration_min: { type: 'integer', description: 'Minutes, 1 to 240.' },
  domain: { type: 'string', enum: Object.keys(EXPERIMENT_FOLDERS), description: 'Which 趣味科学实验库 experiments folder it belongs to.' },
  question: { type: 'string', description: 'The driving question, in a child\'s words.' },
  summary: { type: 'string', description: 'Optional 1–2 sentences for parents.' },
  guesses: stringArray('2–4 predictions the child picks from before doing it.'),
  materials: stringArray('Household materials, with substitutes in brackets.'),
  steps: stringArray('3–12 short steps, one action each. Say which step an adult does.'),
  expected: stringArray('What the child will most likely see.'),
  principle: { type: 'string', description: 'Why it happens, in plain words a child understands. Scientifically correct.' },
  key_concepts: stringArray('2–4 key concepts.'),
  change: stringArray('Variables to change.'),
  keep: stringArray('Conditions to keep the same.'),
  safety_notes: stringArray('Extra safety notes beyond what lab_safety_check found.'),
  extensions: stringArray('Harder or simpler variations.'),
  dialogue: { type: 'array', description: '1–3 turns of 小念 (7, curious) asking and 爸爸 giving clues, not answers.',
    items: { type: 'object', additionalProperties: false, properties: { nian: { type: 'string' }, dad: { type: 'string' } }, required: ['nian'] } },
  kb_refs: stringArray('Refs returned by kb_search that this experiment draws on.'),
  playground_ids: stringArray('Experiment ids returned by playground_search (kind game).'),
  sources: { type: 'array', description: 'Web pages actually read with web_fetch.',
    items: { type: 'object', additionalProperties: false, properties: { title: { type: 'string' }, url: { type: 'string' }, retrieved: { type: 'string' } }, required: ['url'] } },
  topic_clusters: { type: 'array', items: { type: 'string', enum: TOPIC_CLUSTERS } },
  experiment_types: { type: 'array', items: { type: 'string', enum: EXPERIMENT_TYPES } },
  aliases: stringArray('Other names people use for this experiment.'),
  search_terms: stringArray('How a parent would ask for it.'),
  overwrite: { type: 'boolean', description: 'Replace an experiment page with the same slug (asks again).' },
};
const REQUIRED = ['title', 'slug', 'age_min', 'age_max', 'duration_min', 'domain', 'question', 'materials', 'steps', 'principle'];

const enumList = (value, name, allowed) => {
  const items = textList(value, name, { max: 6, itemMax: 60 });
  const bad = items.filter((item) => !allowed.includes(item));
  if (bad.length) fail(`${name} 里有不认识的值：${bad.join('、')}。`);
  return items;
};

function normalizeLab(args, now) {
  const slug = requiredText(args.slug, 'slug', 60);
  if (!SLUG.test(slug)) fail('slug 只能用小写字母、数字和连字符，例如 floating-egg。');
  const ageMin = integer(args.age_min, 'age_min', { min: 2, max: 16, fallback: undefined });
  const ageMax = integer(args.age_max, 'age_max', { min: 2, max: 18, fallback: undefined });
  if (ageMin === undefined || ageMax === undefined || ageMin > ageMax) fail('age_min 和 age_max 都要给，并且 age_min 不能大于 age_max。');
  const duration = integer(args.duration_min, 'duration_min', { min: 1, max: 240, fallback: undefined });
  if (duration === undefined) fail('duration_min 必须给。');
  if (!Object.hasOwn(EXPERIMENT_FOLDERS, args.domain)) fail(`domain 只能是 ${Object.keys(EXPERIMENT_FOLDERS).join('、')}。`);
  const steps = textList(args.steps, 'steps', { max: 12, required: true });
  if (steps.length < 2) fail('steps 至少要有 2 步。');
  const dialogue = args.dialogue === undefined ? [] : args.dialogue;
  if (!Array.isArray(dialogue) || dialogue.length > 6 || dialogue.some((turn) => !turn || typeof turn.nian !== 'string' || (turn.dad !== undefined && typeof turn.dad !== 'string'))) {
    fail('dialogue 是最多 6 轮的 { nian, dad } 数组。');
  }
  const sources = args.sources === undefined ? [] : args.sources;
  if (!Array.isArray(sources) || sources.length > 10 || sources.some((source) => !source || !safeUrl(source.url))) fail('sources 里每一项都要有 http(s) 的 url，最多 10 项。');
  return {
    title: requiredText(args.title, 'title', 60),
    slug,
    emoji: optionalText(args.emoji, 'emoji', 8) || '🔬',
    age_min: ageMin,
    age_max: ageMax,
    duration_min: duration,
    domain: args.domain,
    question: requiredText(args.question, 'question', 300),
    summary: optionalText(args.summary, 'summary', 600),
    guesses: textList(args.guesses, 'guesses', { max: 6, itemMax: 120 }),
    materials: textList(args.materials, 'materials', { max: 25, itemMax: 120, required: true }),
    steps,
    expected: textList(args.expected, 'expected', { max: 10 }),
    principle: requiredText(args.principle, 'principle', 1500),
    key_concepts: textList(args.key_concepts, 'key_concepts', { max: 8, itemMax: 80 }),
    change: textList(args.change, 'change', { max: 8 }),
    keep: textList(args.keep, 'keep', { max: 8 }),
    safety_notes: textList(args.safety_notes, 'safety_notes', { max: 10 }),
    extensions: textList(args.extensions, 'extensions', { max: 8 }),
    dialogue: dialogue.map((turn) => ({ nian: requiredText(turn.nian, 'dialogue.nian', 300), dad: optionalText(turn.dad, 'dialogue.dad', 400) })),
    sources: sources.map((source) => ({ title: optionalText(source.title, 'sources.title', 200), url: safeUrl(source.url),
      retrieved: optionalText(source.retrieved, 'sources.retrieved', 30) || now.slice(0, 10) })),
    topic_clusters: enumList(args.topic_clusters, 'topic_clusters', TOPIC_CLUSTERS),
    experiment_types: enumList(args.experiment_types, 'experiment_types', EXPERIMENT_TYPES),
    aliases: textList(args.aliases, 'aliases', { max: 10, itemMax: 60 }),
    search_terms: textList(args.search_terms, 'search_terms', { max: 10, itemMax: 60 }),
    learning_level: 'level_100',
    created_at: now,
  };
}

const safetyMarkdown = (value) => [
  `总体：**${LEVEL_TEXT[value.level]}** · 陪同：${SUPERVISION_TEXT[value.supervision]}${value.blocked ? ' · **不要生成这个实验，换一个安全的做法**' : ''}`,
  ...value.hazards.map((hazard) => `- [${hazard.level}] ${hazard.label}（命中：${hazard.matched.join('、')}）：${hazard.advice}${hazard.note ? ` ${hazard.note}` : ''}`),
  value.hazards.length ? null : '- 材料和步骤里没有发现已知风险关键词。',
  `> ${value.disclaimer}`,
].filter(Boolean).join('\n');

export function createWorkshopTools(ctx, config = {}) {
  const now = config.now ?? (() => new Date().toISOString());
  let playground = null;
  const settings = () => resolveSettings(ctx, config);
  const knowledgeIndex = (required) => {
    const kb = kbService(ctx);
    if (!required && !kb.configured()) return null;
    return kb.index();
  };
  const playgroundIndex = () => {
    const { playgroundRoot, playgroundUrl } = settings();
    if (!playgroundRoot || !existsSync(playgroundRoot)) return null;
    if (!playground || playground.root !== playgroundRoot || playground.baseUrl !== playgroundUrl) playground = createPlaygroundIndex(playgroundRoot, playgroundUrl, kbService(ctx).text);
    return playground;
  };
  const labRoot = (exec) => path.join(sessionDirectory(exec), LAB_FOLDER);
  const labDirectory = (exec, slug) => {
    if (!SLUG.test(slug ?? '')) fail('slug 只能用小写字母、数字和连字符。');
    const root = labRoot(exec);
    const directory = path.join(root, slug);
    if (!inside(root, directory)) fail('slug 不合法。');
    if (existsSync(directory) && lstatSync(directory).isSymbolicLink()) fail('实验目录不能是符号链接。');
    return directory;
  };
  const register = (tool) => ctx.tools.register(tool);
  const unregisterSkills = registerSkills(ctx, SKILLS);

  register({
    name: 'lab_safety_check',
    description: 'Check an experiment\'s materials and steps against known child-safety hazards (fire, heat, blades, chemicals, batteries, magnets, choking, pressure) before designing it. age (years) makes choking and small-part rules stricter. blocked true means do not build it: choose a safer method. It is a keyword check and says so; it does not replace an adult\'s judgement.',
    parameters: parameters({ materials: stringArray('Materials.'), steps: stringArray('Steps, if already drafted.'), age: { type: 'integer', description: 'Child age in years, 1 to 18.' } }, ['materials']),
    output: output({ level: { type: 'string' }, blocked: { type: 'boolean' }, hazards: { type: 'array', items: { type: 'object' } } }, safetyMarkdown),
    async execute(args) {
      only(args, ['materials', 'steps', 'age'], 'lab_safety_check');
      // Some models send one comma-separated string; the keyword scan only needs the text.
      const lenient = (value) => (typeof value === 'string' ? [value] : value);
      return safetyCheck({
        materials: textList(lenient(args.materials), 'materials', { max: 40, itemMax: 2000, required: true }),
        steps: textList(lenient(args.steps), 'steps', { max: 30, itemMax: 4000 }),
        age: integer(args.age, 'age', { min: 1, max: 18, fallback: undefined }),
      });
    },
  });

  register({
    name: 'lab_create_experiment',
    description: 'Build an interactive experiment page for a child in the session workspace, at kids-lab/<slug>/: index.html (guess, materials and step checklists, timer, observation log, reveal, read-aloud, stars; works offline), experiment.md and lab.json. Runs the safety check itself and refuses blocked hazards. Asks the user to confirm before writing. kb_refs and playground_ids must come from kb_search and playground_search; sources only pages actually read. After it succeeds, deliver index.html with present.',
    parameters: parameters(SPEC, REQUIRED),
    output: output({ folder: { type: 'string' }, files: { type: 'object' } }, (value) => (value.cancelled ? '用户取消了，没有写入任何文件。' : [
      `实验页已生成：\`${value.files.page}\``,
      `实验卡：\`${value.files.card}\``,
      `安全：${LEVEL_TEXT[value.safety.level]} · ${SUPERVISION_TEXT[value.safety.supervision]}`,
      value.warnings.length ? `注意：${value.warnings.join('；')}` : null,
      value.next_step,
    ].filter(Boolean).join('\n'))),
    async execute(args, exec) {
      only(args, Object.keys(SPEC), 'lab_create_experiment');
      const lab = normalizeLab(args, now());
      const age = lab.age_min;
      lab.safety = safetyCheck({ materials: lab.materials, steps: lab.steps, age });
      if (lab.safety.blocked) {
        fail(`这个实验不能生成：${lab.safety.hazards.filter((hazard) => hazard.level === 'block').map((hazard) => `${hazard.label}（${hazard.advice}）`).join('；')}`, 'UNSAFE');
      }
      const warnings = [];
      const kbRefs = textList(args.kb_refs, 'kb_refs', { max: 12, itemMax: 200 });
      const kb = knowledgeIndex(false);
      lab.kb_refs = kbRefs.map((ref) => {
        if (!kb) return { ref, title: null };
        let entry;
        try { entry = kb.find(ref); } catch (error) { fail(`kb_refs 里的 ${ref} 不在知识库里：${error.message}`); }
        return { ref: entry.ref, title: entry.title };
      });
      if (kbRefs.length && !kb) warnings.push('没有配置知识库根目录，kb_refs 没有核对');
      const ids = textList(args.playground_ids, 'playground_ids', { max: 8, itemMax: 60 });
      const pg = playgroundIndex();
      lab.playground = ids.map((id) => {
        const game = pg?.game(id);
        if (pg && !game) fail(`playground_ids 里的 ${id} 不是科学馆里的实验。先用 playground_search 找到实验 id。`);
        const base = settings().playgroundUrl;
        return game ? { id, title: `${game.emoji} ${game.title}`, url: pg.gameUrl(id) } : { id, title: id, url: `${base}#/g/${id}` };
      });
      if (ids.length && !pg) warnings.push('没有配置 sci-playground 目录，科学馆链接没有核对');

      const directory = labDirectory(exec, lab.slug);
      const exists = existsSync(directory);
      if (exists && args.overwrite !== true) fail(`工作区里已经有 kids-lab/${lab.slug}。换一个 slug，或给 overwrite: true 覆盖。`, 'EXISTS');
      const hazards = lab.safety.hazards.map((hazard) => hazard.label).join('、') || '未发现已知风险关键词';
      const confirmed = await approve(ctx, exec, {
        id: 'lab_create_experiment',
        header: exists ? '覆盖实验页' : '生成实验页',
        question: `${exists ? '覆盖' : '生成'}「${lab.emoji} ${lab.title}」实验页？`,
        detail: `写到工作区 kids-lab/${lab.slug}/（index.html、experiment.md、lab.json）。${lab.age_min}–${lab.age_max} 岁，约 ${lab.duration_min} 分钟，${lab.steps.length} 步。安全：${LEVEL_TEXT[lab.safety.level]}（${hazards}）。`,
      });
      if (!confirmed) return { cancelled: true };
      mkdirSync(directory, { recursive: true });
      const files = { page: path.join(directory, 'index.html'), card: path.join(directory, 'experiment.md'), data: path.join(directory, 'lab.json') };
      writeFileSync(files.data, `${JSON.stringify(lab, null, 2)}\n`, 'utf8');
      writeFileSync(files.card, renderLabMarkdown(lab), 'utf8');
      writeFileSync(files.page, renderLabPage(lab), 'utf8');
      return {
        slug: lab.slug, folder: directory, files, safety: lab.safety, warnings,
        next_step: `下一步用 present 交付 ${files.page}，再告诉孩子先猜一猜、然后按步骤动手。用户要存进知识库时用 lab_save_to_kb（slug: ${lab.slug}）。`,
      };
    },
  });

  register({
    name: 'lab_list_experiments',
    description: 'List the experiment pages already built in this session workspace (kids-lab/), with their slugs, titles and whether they were saved to the knowledge base.',
    parameters: parameters({}),
    output: output({ experiments: { type: 'array', items: { type: 'object' } } }, (value) => (value.experiments.length
      ? value.experiments.map((item) => `- ${item.emoji} **${item.title}** \`${item.slug}\` · ${item.ages} · ${item.page}${item.saved_to ? ` · 已写回 \`${item.saved_to}\`` : ''}`).join('\n')
      : '工作区里还没有实验页。')),
    async execute(args, exec) {
      only(args, [], 'lab_list_experiments');
      const root = labRoot(exec);
      if (!existsSync(root)) return { experiments: [] };
      const experiments = [];
      for (const entry of readdirSync(root, { withFileTypes: true })) {
        if (!entry.isDirectory() || !SLUG.test(entry.name)) continue;
        try {
          const lab = JSON.parse(readFileSync(path.join(root, entry.name, 'lab.json'), 'utf8'));
          experiments.push({ slug: entry.name, title: lab.title, emoji: lab.emoji, ages: `${lab.age_min}–${lab.age_max} 岁`,
            page: path.join(root, entry.name, 'index.html'), saved_to: lab.saved_to ?? null });
        } catch { /* a folder without a readable lab.json is not one of ours */ }
      }
      return { experiments };
    },
  });

  register({
    name: 'lab_save_to_kb',
    description: 'Write an experiment built with lab_create_experiment back to 趣味科学实验库 as a new draft experiment_card, in that library\'s frontmatter format, with the next free experiment id. Only when the user asks to save it. Asks the user to confirm. The card stays draft until a person reviews it.',
    parameters: parameters({
      slug: { type: 'string', description: 'The slug used with lab_create_experiment.' },
      folder: { type: 'string', enum: Object.keys(EXPERIMENT_FOLDERS), description: 'Experiments folder; defaults to the experiment\'s domain.' },
    }, ['slug']),
    output: output({ ref: { type: 'string' }, path: { type: 'string' } }, (value) => (value.cancelled ? '用户取消了，知识库没有改动。'
      : `已写回知识库（draft）：ref \`${value.ref}\`\n文件：\`${value.path}\`\n审核后把 status 改成 reviewed 或 published。`)),
    async execute(args, exec) {
      only(args, ['slug', 'folder'], 'lab_save_to_kb');
      const slug = requiredText(args.slug, 'slug', 60);
      const directory = labDirectory(exec, slug);
      let lab;
      try { lab = JSON.parse(readFileSync(path.join(directory, 'lab.json'), 'utf8')); } catch { fail(`工作区里没有 kids-lab/${slug}。先用 lab_create_experiment 生成。`); }
      if (args.folder !== undefined && !Object.hasOwn(EXPERIMENT_FOLDERS, args.folder)) fail(`folder 只能是 ${Object.keys(EXPERIMENT_FOLDERS).join('、')}。`);
      const folder = args.folder ?? lab.domain;
      const kb = knowledgeIndex(true);
      const experiments = path.join(kb.root, SCIENCE, 'experiments');
      existingDirectory(experiments, 'kb/science/experiments 目录', '确认 kids-kb 的 kbRoot 指向 kids-ai-lab 仓库里的 kb 目录。');
      const same = kb.entries().find((entry) => entry.library === SCIENCE && entry.doc_type === 'experiment_card' && entry.id.endsWith(`-${slug}`));
      if (same) fail(`知识库里已经有这张卡：kb/${same.path}（ref ${same.ref}）。`, 'EXISTS');
      let highest = 0;
      for (const used of kb.ids(SCIENCE, 'experiment')) highest = Math.max(highest, Number(used.match(/^experiment-(\d+)/)?.[1] ?? 0));
      const id = `experiment-${String(highest + 1).padStart(4, '0')}-${slug}`;
      const target = path.join(experiments, folder, `${id}.md`);
      const relative = `kb/${path.relative(kb.root, target).split(path.sep).join('/')}`;
      const confirmed = await approve(ctx, exec, {
        id: 'lab_save_to_kb',
        header: '写回知识库',
        question: `把「${lab.emoji} ${lab.title}」写回趣味科学实验库（kb/science）？`,
        detail: `新建 ${relative}（status: draft，id ${id}）。不会改动已有的卡片。`,
      });
      if (!confirmed) return { cancelled: true };
      mkdirSync(path.dirname(target), { recursive: true });
      writeFileSync(target, renderKnowledgeCard(lab, { id, today: now().slice(0, 10) }), { encoding: 'utf8', flag: 'wx' });
      lab.saved_to = `science/${id}`;
      writeFileSync(path.join(directory, 'lab.json'), `${JSON.stringify(lab, null, 2)}\n`, 'utf8');
      return { ref: `science/${id}`, id, path: target };
    },
  });

  return { dispose() { unregisterSkills(); playground = null; } };
}

export function apply(ctx, config = {}) {
  const { dispose } = createWorkshopTools(ctx, config);
  ctx.on('dispose', dispose);
}
