import { statSync } from 'node:fs';
import path from 'node:path';

export const KB_SERVICE = 'kidsKb';
export const MAX_TEXT = 30_000;
export const NOT_CONFIGURED = '在 DSH Profile 的 cordis.patch.yml 里给 kids-kb 填 kbRoot（kids-ai-lab 仓库里的 kb 目录），或重新运行 dsh/scripts/install-kidslab。';

const text = (value) => (typeof value === 'string' ? value.trim() : '');

/** kbRoot from a row's own config, then the environment. KIDS_AI_LAB_ROOT is the repository root. */
export function kbRootOf(config = {}) {
  const own = text(config.kbRoot);
  if (own) return own;
  const env = text(process.env.KIDS_AI_LAB_KB);
  if (env) return env;
  const repo = text(process.env.KIDS_AI_LAB_ROOT);
  return repo ? path.join(repo, 'kb') : '';
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

/** The directory the user picked for this DSH session, or null outside a session. */
export function sessionDirectory(exec) {
  const cwd = exec?.agent?.session?.header?.cwd;
  return typeof cwd === 'string' && path.isAbsolute(cwd) ? cwd : null;
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
