#!/usr/bin/env node
// Inspect library schema, next free id, template, and optionally scaffold a draft card:
//   node dsh/packages/dsh-kids-kb/bin/kb-schema.js
//   node dsh/packages/dsh-kids-kb/bin/kb-schema.js <library> [doc_type] [slug] [--subfolder <a/b>] [--write]
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createKnowledgeIndex, nextId } from '../src/index.js';

const args = process.argv.slice(2);
const flag = (name) => {
  const at = args.indexOf(name);
  if (at === -1) return null;
  const [, value] = args.splice(at, 2);
  return value ?? null;
};
const write = args.includes('--write');
const subfolderArg = flag('--subfolder');
const kbRootArg = flag('--kb');
const positional = args.filter((a) => !a.startsWith('--'));
const [libId, docType, slug] = positional;

const kbRoot = path.resolve(kbRootArg ?? path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..', '..', 'kb'));
const index = createKnowledgeIndex(kbRoot);
const schema = index.schema();

if (!libId) {
  console.log('可用知识库 (libraries):');
  for (const lib of index.libraries()) {
    console.log(`  - ${lib.id} (${lib.title_zh}) · ${lib.documents} 张 · 类型: ${Object.keys(lib.doc_types).join(', ')}`);
  }
  console.log('\n用法: npm run kb:schema -- <library> [doc_type] [slug] [--subfolder <...>] [--write]');
  process.exit(0);
}

const library = index.library(libId);
const entries = index.entries().filter((e) => e.library === library.id);

if (!docType) {
  console.log(`知识库 ${library.id} (${library.title_zh}) 的卡片类型:`);
  for (const [type, spec] of Object.entries(library.doc_types)) {
    const count = entries.filter((e) => e.doc_type === type).length;
    console.log(`  - ${type} (${spec.label}) · 前缀 ${spec.id_prefix.join('/')} · 目录 kb/${library.id}/${spec.folder}/ · 现有 ${count} 张`);
  }
  process.exit(0);
}

const spec = library.doc_types[docType];
if (!spec) {
  console.error(`❌ ${library.id} 没有 doc_type "${docType}"。可用: ${Object.keys(library.doc_types).join(', ')}`);
  process.exit(1);
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
if (slug && !SLUG_RE.test(slug)) {
  console.error('❌ slug 只能用小写英文字母、数字和连字符，例如 balloon-rocket。');
  process.exit(1);
}

const prefix = spec.id_prefix[0];
const id = nextId(index.ids(library.id, prefix), prefix);
const existingFolders = [...new Set(entries.filter((e) => e.doc_type === docType).map((e) => path.posix.dirname(e.relative)))].sort();
const placeholders = (spec.folder ?? '').split('/').filter((part) => /^<.+>$/.test(part)).length;

let folder = spec.folder ?? '';
if (subfolderArg) {
  const cleanSub = subfolderArg.replaceAll('\\', '/').replace(/^\/+|\/+$/g, '');
  const parts = cleanSub.split('/');
  if (parts.length !== placeholders || parts.some((p) => !/^[a-z0-9_]+$/.test(p))) {
    console.error(`❌ --subfolder 需要 ${placeholders} 级目录 (${spec.folder})，只用小写英文、数字和下划线。`);
    process.exit(1);
  }
  let at = 0;
  folder = folder.split('/').map((part) => (/^<.+>$/.test(part) ? parts[at++] : part)).join('/');
}

const ready = Boolean(slug) && (placeholders === 0 || Boolean(subfolderArg));
const targetRel = ready ? `${library.id}/${folder}/${id}-${slug}.md` : null;
const targetAbs = targetRel ? path.join(kbRoot, ...targetRel.split('/')) : null;

console.log(`库/类型: ${library.id} / ${docType} (${spec.label})`);
console.log(`下一个 id: ${id}`);
console.log(`目录模式: kb/${library.id}/${spec.folder}/`);
if (existingFolders.length) console.log(`已有目录: ${existingFolders.slice(0, 20).join(', ')}`);
console.log(`必填字段: ${[...schema.required, ...(spec.required ?? [])].join(', ')}`);
console.log(`引用字段: ${schema.ref_fields.join(', ')}`);
if (targetRel) console.log(`目标文件: kb/${targetRel}`);
else console.log(`提示: 传入 <slug>${placeholders > 0 ? ` 和 --subfolder <${placeholders}级>` : ''} 可生成目标路径并支持 --write。`);

const templateText = spec.template ? readFileSync(path.join(library.directory, spec.template), 'utf8').replace(/^\uFEFF/, '') : '';
if (templateText && !write) {
  console.log(`\n--- 模板 (kb/${library.id}/${spec.template}) ---\n${templateText}`);
}

if (write) {
  if (!targetAbs) {
    console.error('❌ --write 需要同时提供 <slug>' + (placeholders > 0 ? ` 与 --subfolder (${spec.folder})` : '') + '。');
    process.exit(1);
  }
  if (existsSync(targetAbs)) {
    console.error(`❌ 文件已存在: ${targetAbs}`);
    process.exit(1);
  }
  const today = new Date().toISOString().slice(0, 10);
  let body = templateText || `---\ndoc_type: ${docType}\nid: ${id}\nstatus: draft\ntitle_zh: 待补充标题\nlast_reviewed: ${today}\n---\n\n# 待补充标题\n`;
  body = body
    .replace(/^id:\s*.*$/m, `id: ${id}`)
    .replace(/^doc_type:\s*.*$/m, `doc_type: ${docType}`)
    .replace(/^status:\s*.*$/m, 'status: draft')
    .replace(/^last_reviewed:\s*.*$/m, `last_reviewed: ${today}`);
  mkdirSync(path.dirname(targetAbs), { recursive: true });
  writeFileSync(targetAbs, body, 'utf8');
  console.log(`✅ 已生成草稿卡片: kb/${targetRel}`);
}
