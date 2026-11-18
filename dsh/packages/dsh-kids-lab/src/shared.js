import { statSync } from 'node:fs';
import path from 'node:path';

export const SETTINGS_SERVICE = 'kidsLabSettings';
export const KB_SERVICE = 'kidsKb';
export const DEFAULT_PLAYGROUND_URL = 'https://handsondad.github.io/sci-playground/';
export const LAB_FOLDER = 'kids-lab';
export const MAX_TEXT = 30_000;

const text = (value) => (typeof value === 'string' ? value.trim() : '');

export function normalizeSettings(config = {}) {
  const url = text(config.playgroundUrl) || DEFAULT_PLAYGROUND_URL;
  return {
    playgroundRoot: text(config.playgroundRoot),
    playgroundUrl: url.endsWith('/') ? url : `${url}/`,
  };
}

const hostService = (ctx, name) => {
  if (typeof ctx?.get !== 'function') return null;
  try { return ctx.get(name) ?? null; } catch { return null; }
};

// A row's own config wins, then the host 实验室配置 row, then the environment. Nothing is guessed from the
// package location: DSH installs a copy of this package into the profile, far from the repositories.
export function resolveSettings(ctx, config = {}) {
  const own = normalizeSettings(config);
  const shared = normalizeSettings(hostService(ctx, SETTINGS_SERVICE) ?? {});
  return {
    playgroundRoot: own.playgroundRoot || shared.playgroundRoot || text(process.env.SCI_PLAYGROUND_ROOT),
    playgroundUrl: text(config.playgroundUrl) ? own.playgroundUrl : shared.playgroundUrl,
  };
}

/**
 * The knowledge base and its ranking helpers come from the host 知识库配置 row of @kids-ai-lab/dsh-kids-kb.
 * Packages are installed as separate copies, so they share code through this service rather than imports.
 */
export function kbService(ctx) {
  const service = hostService(ctx, KB_SERVICE);
  if (!service?.index || !service?.text) {
    fail('实验模式需要知识库插件 @kids-ai-lab/dsh-kids-kb（宿主行 kids-kb）。重新运行 dsh/scripts/install-kidslab 会一起装好。', 'NOT_CONFIGURED');
  }
  return service;
}

export const fail = (message, code) => {
  const error = new Error(message);
  if (code) error.code = code;
  throw error;
};

export const parameters = (properties, required = []) => ({ type: 'object', additionalProperties: false, properties, required });

export const only = (args, keys, tool) => {
  const extra = Object.keys(args ?? {}).filter((key) => !keys.includes(key));
  if (extra.length) fail(`${tool} 不接受参数 ${extra.join(', ')}。`);
};

export const integer = (value, name, { min, max, fallback }) => {
  if (value === undefined || value === null) return fallback;
  if (!Number.isInteger(value) || value < min || value > max) fail(`${name} 必须是 ${min} 到 ${max} 之间的整数。`);
  return value;
};

export const optionalText = (value, name, max = 2000) => {
  if (value === undefined || value === null) return '';
  if (typeof value !== 'string') fail(`${name} 必须是字符串。`);
  const trimmed = value.trim();
  if (trimmed.length > max) fail(`${name} 不能超过 ${max} 个字符。`);
  return trimmed;
};

export const requiredText = (value, name, max = 2000) => {
  const result = optionalText(value, name, max);
  if (!result) fail(`${name} 不能为空。`);
  return result;
};

export const textList = (value, name, { max = 30, itemMax = 400, required = false } = {}) => {
  if (value === undefined || value === null) {
    if (required) fail(`${name} 至少要有一项。`);
    return [];
  }
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) fail(`${name} 必须是字符串数组。`);
  const items = value.map((item) => item.trim()).filter(Boolean);
  if (required && !items.length) fail(`${name} 至少要有一项。`);
  if (items.length > max) fail(`${name} 最多 ${max} 项。`);
  if (items.some((item) => item.length > itemMax)) fail(`${name} 的每一项不能超过 ${itemMax} 个字符。`);
  return items;
};

export function existingDirectory(value, what, hint) {
  if (!value) fail(`${what}还没有配置。${hint}`, 'NOT_CONFIGURED');
  if (!path.isAbsolute(value) || value.includes('\0')) fail(`${what}必须是绝对路径：${value}`, 'NOT_CONFIGURED');
  let stat;
  try { stat = statSync(value); } catch { stat = null; }
  if (!stat?.isDirectory()) fail(`${what}不存在：${value}。${hint}`, 'NOT_CONFIGURED');
  return value;
}

/** The directory the user picked for this DSH session; the same one the file tools use. */
export function sessionDirectory(exec) {
  const cwd = exec?.agent?.session?.header?.cwd;
  if (typeof cwd !== 'string' || !path.isAbsolute(cwd) || cwd.includes('\0')) {
    fail('当前会话没有工作目录。新建会话时请选择一个工作区。');
  }
  let stat;
  try { stat = statSync(cwd); } catch { stat = null; }
  if (!stat?.isDirectory()) fail('当前会话的工作目录不存在。');
  return cwd;
}

/** Inside a directory, never through `..`. */
export function inside(root, target) {
  const relative = path.relative(root, target);
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

export const cut = (value, max) => (value.length > max ? `${value.slice(0, max)}…` : value);

/** Tool output: the model reads Markdown; the structured value stays available to hooks and the UI. */
export const output = (properties, toMarkdown) => ({
  schema: { type: 'object', additionalProperties: true, properties },
  render: (_args, value) => [{ type: 'text', text: toMarkdown(value) }],
});

/** Native DSH confirmation card. Resolves true only when the user picked 确认. */
export async function approve(ctx, exec, { id, header, question, detail }) {
  if (!exec?.agent) fail('这一步需要在 DSH 会话里由用户确认。');
  if (typeof ctx.userQuestions?.ask !== 'function') fail('当前宿主没有确认服务，不能执行写入。');
  const label = '确认';
  const answer = await ctx.userQuestions.ask({
    agent: exec.agent,
    signal: exec.signal,
    questions: [{ id, header, question, detail, options: [{ label, description: '按上述内容执行。' }, { label: '取消', description: '不执行。' }] }],
  });
  return answer?.answers?.some((item) => item.id === id && item.selected?.includes(label)) === true;
}

/** Skills are optional: a profile with ctx.skills loads them through DSH's own `skill` tool. */
export function registerSkills(ctx, skills) {
  const disposers = [];
  if (typeof ctx.inject === 'function') {
    ctx.inject(['skills'], (inner) => { for (const skill of skills) inner.skills.register(skill); });
  } else if (ctx.skills?.register) {
    for (const skill of skills) {
      const dispose = ctx.skills.register(skill);
      if (typeof dispose === 'function') disposers.push(dispose);
    }
  }
  return () => { for (const dispose of disposers.splice(0)) dispose(); };
}
