#!/usr/bin/env node
// Writes the 知识库配置 (kids-kb) and 实验室配置 (kids-lab-settings) paths into a DSH profile's own patch layer
// (cordis.patch.yml), inside one marked block that a rerun replaces. Everything outside the block is left as it is.
//
//   node profile-config.js <profileDir> <kbRoot> <playgroundRoot> [--select-default] [--models-from <profileDir>]
//
// --select-default makes 实验模式 the preselected mode for new sessions (only when the profile has no registry row).
// --models-from copies the model provider rows (llm-pi-ai, agent-default-model) from another profile when this one has none.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const BEGIN = '# >>> kids-ai-lab (managed by dsh/scripts/install-kidslab; rerun the script instead of editing)';
const END = '# <<< kids-ai-lab';
const MODEL_ROWS = ['llm-pi-ai', 'agent-default-model'];
const OWN_ROWS = ['kids-kb', 'kids-lab-settings', 'agent-preset-registry', ...MODEL_ROWS];

const args = process.argv.slice(2);
const flag = (name) => { const at = args.indexOf(name); if (at === -1) return null; const [, value] = args.splice(at, 2); return value ?? ''; };
const selectDefault = args.includes('--select-default');
if (selectDefault) args.splice(args.indexOf('--select-default'), 1);
const modelsFrom = flag('--models-from');
const [profileDir, kbRoot, playgroundRoot = ''] = args;
if (!profileDir || !kbRoot) {
  console.error('usage: profile-config.js <profileDir> <kbRoot> <playgroundRoot> [--select-default] [--models-from <profileDir>]');
  process.exit(2);
}

const quote = (value) => `'${String(value).replaceAll('\\', '/').replaceAll("'", "''")}'`;
const read = (file) => (existsSync(file) ? readFileSync(file, 'utf8').replace(/^\uFEFF/, '') : '');

/** Top-level `- id: <id>` rows of a patch file, each up to the next unindented line. */
const rows = (source) => {
  const found = new Map();
  const lines = source.split(/\r?\n/);
  for (let index = 0; index < lines.length; index++) {
    const match = lines[index].match(/^- id:\s*['"]?([^'"\s]+)['"]?\s*$/);
    if (!match) continue;
    let end = index + 1;
    while (end < lines.length && (lines[end] === '' || /^\s/.test(lines[end]))) end++;
    while (end > index + 1 && lines[end - 1] === '') end--;
    found.set(match[1], lines.slice(index, end).join('\n'));
  }
  return found;
};

const file = path.join(profileDir, 'cordis.patch.yml');
const original = read(file);
const begin = original.indexOf(BEGIN);
const end = original.indexOf(END);
const managed = begin !== -1 && end > begin;
const previous = rows(managed ? original.slice(begin + BEGIN.length, end) : '');
let outside = managed ? original.slice(0, begin) + original.slice(end + END.length) : original;
// A fresh profile's patch is the empty list `[]`; rows cannot be appended to it.
outside = outside.split(/\r?\n/).filter((line) => line.trim() !== '[]').join('\n').replace(/\n{3,}/g, '\n\n').trimEnd();
// DSH appends its own rows (e.g. UI settings) to the end of the file, which can land inside the block.
const foreign = [...previous].filter(([id]) => !OWN_ROWS.includes(id)).map(([, row]) => row);
if (foreign.length) outside = [outside, ...foreign].filter(Boolean).join('\n');
const existing = rows(outside);

const block = [
  BEGIN,
  '- id: kids-kb',
  "  name: '@kids-ai-lab/dsh-kids-kb'",
  '  config:',
  `    kbRoot: ${quote(path.resolve(kbRoot))}`,
  '- id: kids-lab-settings',
  "  name: '@kids-ai-lab/dsh-kids-lab'",
  '  config:',
  `    playgroundRoot: ${quote(playgroundRoot ? path.resolve(playgroundRoot) : '')}`,
];
// Rows an earlier run wrote into the block are kept, so a rerun without the flags does not drop them.
if (!existing.has('agent-preset-registry')) {
  if (selectDefault) {
    block.push('- id: agent-preset-registry', "  name: '@deepseek-ai/dsh-agent-preset-registry'", '  config:', '    default: standard', '    selectedDefault: kidslab');
  } else if (previous.has('agent-preset-registry')) {
    block.push(previous.get('agent-preset-registry'));
  }
}
const copied = [];
const source = modelsFrom ? rows(read(path.join(modelsFrom, 'cordis.patch.yml'))) : new Map();
for (const id of MODEL_ROWS) {
  if (existing.has(id)) continue;
  if (source.has(id)) {
    block.push(source.get(id));
    copied.push(id);
  } else if (previous.has(id)) {
    block.push(previous.get(id));
  }
}
block.push(END);

writeFileSync(file, `${outside ? `${outside}\n\n` : ''}${block.join('\n')}\n`, 'utf8');
console.log(JSON.stringify({ file, kbRoot: path.resolve(kbRoot), playgroundRoot: playgroundRoot ? path.resolve(playgroundRoot) : '', copied,
  selectedDefault: selectDefault && !existing.has('agent-preset-registry') }));
