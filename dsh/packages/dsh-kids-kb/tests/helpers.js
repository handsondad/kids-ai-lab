import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createKbService } from '../src/service.js';
import { KB_SERVICE } from '../src/shared.js';

export const PACKAGE_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const REPO_ROOT = path.resolve(PACKAGE_DIR, '..', '..', '..');
export const REPO_KB = path.join(REPO_ROOT, 'kb');

/** A host with what the kb plugins use: tools, skills and (optionally) the shared kidsKb service. */
export function fakeHost({ kbRoot } = {}) {
  const tools = new Map();
  const skills = new Map();
  const service = kbRoot === undefined ? undefined : createKbService({ kbRoot });
  const ctx = {
    tools: { register(tool) { tools.set(tool.name, tool); return () => tools.delete(tool.name); } },
    skills: { register(skill) { skills.set(skill.name, skill); return () => skills.delete(skill.name); } },
    get(name) { return name === KB_SERVICE ? service : undefined; },
  };
  const call = async (name, args = {}, exec = {}) => {
    const tool = tools.get(name);
    if (!tool) throw new Error(`no tool ${name}`);
    return tool.execute(args, exec);
  };
  const text = (name, args, value) => tools.get(name).output.render(args, value).map((part) => part.text).join('');
  return { ctx, tools, skills, call, text };
}

export const sessionExec = (cwd) => ({ agent: { session: { header: { cwd } } }, signal: new AbortController().signal });

export function tempDir(t, prefix = 'kids-kb-') {
  const dir = mkdtempSync(path.join(tmpdir(), prefix));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  return dir;
}

export function writeTree(root, files) {
  for (const [relative, content] of Object.entries(files)) {
    const file = path.join(root, ...relative.split('/'));
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, content, 'utf8');
  }
}

export const card = (front, body) => `---\n${front.trim()}\n---\n\n${body.trim()}\n`;
const json = (value) => `${JSON.stringify(value, null, 2)}\n`;

/** A two-library kb/ shaped like kids-ai-lab's: library.json, AGENTS.md, templates, skills, and cross-library links. */
export function kbFixture(t) {
  const repo = tempDir(t);
  const kb = path.join(repo, 'kb');
  writeTree(kb, {
    'README.md': '# 知识库\n',
    'schema.json': json({ statuses: ['draft', 'reviewed', 'published'], required: ['doc_type', 'id', 'status'] }),
    'science/library.json': json({
      id: 'science', title_zh: '趣味科学实验库', summary: '科学实验和主题卡。', when_to_use: '孩子问科学问题时。', age_convention: 'age_range',
      doc_types: {
        experiment_card: { label: '实验卡', id_prefix: ['experiment'], folder: 'experiments/<science_domain>', template: '_templates/experiment_card_template.md', answerable: true, required: ['title_zh', 'source_refs'] },
        topic_card: { label: '主题卡', id_prefix: ['topic'], folder: 'topics/<area>', answerable: true, required: ['title_zh'] },
      },
    }),
    'science/AGENTS.md': '# 趣味科学实验库规则\n\n鸡蛋 浮起来 这里不是知识。\n',
    'science/README.md': '# 趣味科学实验库\n\n鸡蛋 说明文件。\n',
    'science/skills/science-explain.md': card('name: science-explain\ndescription: 给孩子讲清一个科学原理。\nwhen_to_use: 孩子问为什么时。', '# 讲原理\n\n先猜，再做，再讲。'),
    'science/_templates/experiment_card_template.md': card('doc_type: experiment_card\nid: experiment-0000\nstatus: draft\ntitle_zh: 鸡蛋模板', '# 模板'),
    'science/experiments/forces_motion/experiment-0006-float-egg.md': card(`
doc_type: experiment_card
id: experiment-0006-float-egg
title_zh: 盐水浮鸡蛋
status: published
duration_min: 15
safety_level: low
age_range:
  min: 5
  max: 10
aliases:
  - 浮起来的鸡蛋
search_terms:
  - 鸡蛋 浮 盐水
source_refs:
  - topic-0006
related:
  - games/game-0001
`, '# 实验简介\n\n往清水里一勺一勺加盐，鸡蛋会慢慢浮起来。\n\n## 科学原理\n\n盐水密度变大，浮力变大。见[主题卡](../../topics/physics/topic-0006-floating.md)。'),
    'science/experiments/materials_reactions/experiment-0040-candle-jar.md': card(`
doc_type: experiment_card
id: experiment-0040-candle-jar
title_zh: 蜡烛与杯子
status: reviewed
duration_min: 40
safety_level: high
source_refs:
  - topic-0006
age_range:
  min: 8
  max: 14
`, '# 实验简介\n\n点燃蜡烛，用杯子罩住，观察水面和鸡蛋大小的气泡。'),
    'science/topics/physics/topic-0006-floating.md': card(`
doc_type: topic_card
id: topic-0006
title_zh: 浮沉与密度
status: reviewed
`, '# 一句话定义\n\n物体在液体里浮还是沉，取决于它和液体的密度。'),
    'games/library.json': json({
      id: 'games', title_zh: '亲子游戏知识库', summary: '按年龄分的亲子游戏。', when_to_use: '家长要找亲子游戏时。', age_convention: 'months',
      doc_types: { game_card: { label: '游戏卡', id_prefix: ['game'], folder: 'games/<age_stage>/<skill>', answerable: true, required: ['title_zh'] } },
    }),
    'games/AGENTS.md': '# 亲子游戏知识库规则\n',
    'games/games/age_24_36m/sensory/game-0001-bath-float.md': card(`
doc_type: game_card
id: game-0001
title_zh: 浴缸里的沉浮
status: draft
age_stage:
  - age_24_36m
age_min_months: 24
age_max_months: 36
`, '# 怎么玩\n\n洗澡时把玩具放进水里，猜一猜哪个会浮起来。'),
  });
  return { repo, kb };
}
