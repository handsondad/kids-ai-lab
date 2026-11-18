#!/usr/bin/env node
// Validate the knowledge base: node dsh/packages/dsh-kids-kb/bin/kb-check.js [kbRoot] [--library <id>] [--warnings] [--json]
// Exits 1 when there are errors. Warnings are listed with --warnings (otherwise only counted).
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkKnowledge } from '../src/check.js';
import { createKnowledgeIndex } from '../src/index.js';

const args = process.argv.slice(2);
const flag = (name) => { const at = args.indexOf(name); if (at === -1) return null; const [, value] = args.splice(at, 2); return value; };
const library = flag('--library');
const showWarnings = args.includes('--warnings');
const json = args.includes('--json');
const positional = args.filter((arg) => !arg.startsWith('--'));
const kbRoot = path.resolve(positional[0] ?? path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..', 'kb'));

const result = checkKnowledge(createKnowledgeIndex(kbRoot), { library: library ?? undefined });
if (json) {
  console.log(JSON.stringify(result, null, 2));
} else {
  const line = (issue) => `  ${issue.level === 'error' ? '✗' : '!'} ${issue.path ?? ''}  ${issue.message}`;
  console.log(`kb: ${kbRoot}`);
  console.log(`检查了 ${result.checked} 张卡片：${result.errors.length} 个错误，${result.warnings.length} 个提醒。`);
  for (const [rule, count] of Object.entries(result.by_rule).sort()) console.log(`  ${rule}: ${count}`);
  if (result.errors.length) console.log('\n错误：\n' + result.errors.map(line).join('\n'));
  if (showWarnings && result.warnings.length) console.log('\n提醒：\n' + result.warnings.map(line).join('\n'));
}
process.exit(result.ok ? 0 : 1);
