import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { PACKAGE_DIR, createKbTools, fakeHost, kbFixture } from './helpers.js';
import { createPlaygroundTools } from '../src/playground.js';
import { createWorkshopTools } from '../src/workshop.js';

const patch = readFileSync(path.join(PACKAGE_DIR, 'cordis.patch.yml'), 'utf8');
const manifest = JSON.parse(readFileSync(path.join(PACKAGE_DIR, 'package.json'), 'utf8'));
const kbPackage = path.join(PACKAGE_DIR, '..', 'dsh-kids-kb');
const kbManifest = JSON.parse(readFileSync(path.join(kbPackage, 'package.json'), 'utf8'));
const kbPatch = readFileSync(path.join(kbPackage, 'cordis.patch.yml'), 'utf8');

test('every @kids-ai-lab row in both patches names an exported entry', () => {
  const rows = (text) => [...text.matchAll(/name: '(@kids-ai-lab\/[^']*)'/g)].map((match) => match[1]);
  assert.deepEqual(rows(patch), ['@kids-ai-lab/dsh-kids-lab', '@kids-ai-lab/dsh-kids-kb/tools', '@kids-ai-lab/dsh-kids-lab/playground', '@kids-ai-lab/dsh-kids-lab/workshop']);
  assert.deepEqual(rows(kbPatch), ['@kids-ai-lab/dsh-kids-kb', '@kids-ai-lab/dsh-kids-kb/tools']);
  for (const row of [...rows(patch), ...rows(kbPatch)]) {
    const owner = row.startsWith(kbManifest.name) ? kbManifest : manifest;
    const subpath = row === owner.name ? '.' : `.${row.slice(owner.name.length)}`;
    assert.ok(owner.exports[subpath], `${row} is exported`);
  }
  assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml');
  assert.equal(kbManifest.dsh.bundle.patch, './cordis.patch.yml');
});

test('both presets are declared and their prompts only name tools that exist', (t) => {
  assert.match(patch, /id: kidslab\r?\n\s+name: 实验模式/);
  assert.match(kbPatch, /id: kidskb\r?\n\s+name: 知识库模式/);
  const host = fakeHost({ kbRoot: kbFixture(t).kb });
  createKbTools(host.ctx, { maintain: true });
  createPlaygroundTools(host.ctx);
  createWorkshopTools(host.ctx);
  const dsh = ['web_search', 'web_fetch', 'present', 'ask_user_question', 'exit_plan_mode'];
  const parameterNames = new Set(['kb_refs', 'playground_ids']);
  const named = new Set([...`${patch}\n${kbPatch}`.matchAll(/\b((?:kb|playground|lab)_[a-z_]+|web_search|web_fetch)\b/g)].map((match) => match[1]));
  for (const name of named) assert.ok(host.tools.has(name) || dsh.includes(name), `${name} is a real tool`);
  for (const skill of host.skills.values()) {
    for (const match of skill.content.matchAll(/\b((?:kb|playground|lab)_[a-z_]+)\b/g)) {
      if (!parameterNames.has(match[1])) assert.ok(host.tools.has(match[1]) || dsh.includes(match[1]), `${skill.name} names ${match[1]}`);
    }
  }
});
