import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SETTINGS_SERVICE, KB_SERVICE, normalizeSettings } from '../src/shared.js';
// The kb package is a sibling in this repository; at runtime the lab reaches it only through the kidsKb service.
import { createKbService } from '../../dsh-kids-kb/src/service.js';
import { createKbTools } from '../../dsh-kids-kb/src/tools.js';

export { kbFixture, card } from '../../dsh-kids-kb/tests/helpers.js';
export { createKbTools };

export const PACKAGE_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// The package lives inside the kids-ai-lab repository; sci-playground is its sibling checkout.
export const REPO_ROOT = path.resolve(PACKAGE_DIR, '..', '..', '..');
export const REPO_KB = path.join(REPO_ROOT, 'kb');
export const PLAYGROUND_ROOT = process.env.SCI_PLAYGROUND_ROOT || path.resolve(REPO_ROOT, '..', 'sci-playground');

/** A host with what these plugins use: tools, confirmations, skills, the 实验室配置 service and the kidsKb service. */
export function fakeHost({ settings = {}, kbRoot = '', answer = '确认' } = {}) {
  const tools = new Map();
  const skills = new Map();
  const asked = [];
  const services = { [SETTINGS_SERVICE]: normalizeSettings(settings), [KB_SERVICE]: createKbService({ kbRoot }) };
  const ctx = {
    tools: { register(tool) { tools.set(tool.name, tool); return () => tools.delete(tool.name); } },
    skills: { register(skill) { skills.set(skill.name, skill); return () => skills.delete(skill.name); } },
    userQuestions: {
      async ask(request) {
        asked.push(request);
        return { answers: request.questions.map((question) => ({ id: question.id, selected: [answer] })) };
      },
    },
    get(name) { return services[name]; },
  };
  const call = async (name, args = {}, exec = {}) => {
    const tool = tools.get(name);
    if (!tool) throw new Error(`no tool ${name}`);
    return tool.execute(args, exec);
  };
  const text = (name, args, value) => tools.get(name).output.render(args, value).map((part) => part.text).join('');
  return { ctx, tools, skills, asked, call, text };
}

export const sessionExec = (cwd) => ({ agent: { session: { header: { cwd } } }, signal: new AbortController().signal });

export function tempDir(t, prefix = 'kids-lab-') {
  const dir = mkdtempSync(path.join(tmpdir(), prefix));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  return dir;
}

export function writeTree(root, files) {
  for (const [relative, content] of Object.entries(files)) {
    const file = path.join(root, relative);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, content, 'utf8');
  }
}

/** A minimal sci-playground checkout with the same literal shapes as the real catalog. */
export function playgroundFixture(t) {
  const root = tempDir(t, 'sci-pg-');
  writeTree(root, {
    'src/catalog/categories.ts': `import type { Category } from "./types.ts";
export const categories: readonly Category[] = [
  { id: "physics", title: "声光电磁馆", emoji: "💡", blurb: "浮力与光。", color: "#f59e0b" },
  { id: "chemistry", title: "化学分子馆", emoji: "🧪", blurb: "酸碱与反应。", color: "#000" }
];`,
    'src/catalog/games.ts': `import { floatEgg } from "../games/physics/float/index.tsx";
import { fizz } from "../games/chemistry/fizz/index.tsx";
// import { hidden } from "../games/physics/hidden/index.tsx" is not registered
export const games = [floatEgg, fizz];`,
    'src/games/physics/float/index.tsx': `export const floatEgg = {
  meta: {
    id: "float",
    category: "physics" as const,
    title: "浮起来的鸡蛋",
    emoji: "🥚",
    blurb: "一勺勺加盐提高水密度，让鸡蛋悬浮！",
    tag: "流体 · 浮力与密度",
    maxStars: levels.length * 3
  },
  Play
};`,
    'src/games/chemistry/fizz/index.tsx': `export const fizz = { meta: { id: "fizz", category: "chemistry", title: "小苏打气球", emoji: "🎈", blurb: "小苏打遇到醋放出二氧化碳，把气球吹 \\"鼓\\" 起来。", tag: "产气反应", maxStars: 9 }, Play };`,
    'src/games/physics/hidden/index.tsx': 'export const hidden = { meta: { id: "hidden", category: "physics", title: "没注册的实验", emoji: "x", blurb: "鸡蛋", tag: "", maxStars: 3 } };',
    'src/catalog/wiki.ts': `export const scienceWiki: readonly WikiCard[] = [
  {
    id: "archimedes",
    category: "physics",
    emoji: "👑",
    era: "公元前 250 年",
    scientist: "阿基米德",
    title: "洗澡水溢出来，揭穿了假王冠",
    story: "阿基米德坐进浴缸，水漫了出来{他想到了}。",
    homeLab: "🏠 居家小实验：把鸡蛋放进盐水里看它浮起来。",
    relatedGameId: "float",
    relatedGameTitle: "浮起来的鸡蛋"
  }
];`,
    'src/catalog/talks.ts': `export const hubChats = [["a", "b"]];
export const scienceTalks: readonly (TalkItem & { category: CategoryId })[] = [
  {
    emoji: "🎈",
    category: "chemistry",
    title: "气球为什么自己鼓起来？",
    turns: [
      { nian: "爸爸，瓶子里没人吹气呀？", dad: "小苏打和醋见面会放出一种看不见的气体。" }
    ],
    wrap: "原来是二氧化碳把气球吹大的！"
  }
];`,
  });
  return root;
}
