import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { pathToFileURL } from 'node:url';
import { REPO_KB, sessionExec, REPO_ROOT } from './helpers.js';

// Loads the host row and the tools row into the installed DSH's own cordis runtime and runs every tool schema
// through its `assertSupportedJsonSchema`, the check `tools.register` applies. Set KIDS_LAB_DSH_PACKAGE to the
// absolute path of the installed @deepseek-ai/dsh package. Without it this test is skipped, not passed.
const DSH = process.env.KIDS_LAB_DSH_PACKAGE;
const dep = (name, entry) => pathToFileURL(path.join(DSH, 'node_modules', '@deepseek-ai', name, ...entry)).href;

test('the installed DSH mounts the kb rows and accepts every tool schema', { skip: !DSH && 'set KIDS_LAB_DSH_PACKAGE to the installed @deepseek-ai/dsh path' }, async (t) => {
  const { Context } = await import(dep('cordis', ['lib', 'index.js']));
  const { assertSupportedJsonSchema } = await import(dep('dsh-tools', ['lib', 'index.js']));
  const settings = await import('../src/settings.js');
  const tools = await import('../src/tools.js');

  const registered = new Map();
  const skills = new Map();
  const root = new Context();
  await root.plugin((ctx) => ctx.provide('tools', { register(tool) { registered.set(tool.name, tool); return () => registered.delete(tool.name); } }));
  await root.plugin((ctx) => ctx.provide('skills', { register(skill) { skills.set(skill.name, skill); return () => skills.delete(skill.name); } }));
  t.after(async () => { await root.fiber.dispose(); });

  await root.plugin((ctx) => settings.apply(ctx, { kbRoot: REPO_KB }));
  const row = (ctx) => tools.apply(ctx, { maintain: true });
  row.inject = tools.inject;
  await root.plugin(row);

  assert.deepEqual([...registered.keys()].sort(), ['kb_check', 'kb_libraries', 'kb_links', 'kb_read', 'kb_schema', 'kb_search']);
  for (const name of ['kb-contribute', 'kb-ingest-source', 'kb-link', 'kb-science', 'kb-wonder']) assert.ok(skills.has(name), name);
  for (const [name, tool] of registered) {
    assert.doesNotThrow(() => assertSupportedJsonSchema(tool.parameters), `${name} parameters`);
    assert.doesNotThrow(() => assertSupportedJsonSchema(tool.output.schema), `${name} output`);
    assert.ok(tool.description.length > 40, `${name} explains itself`);
  }

  // The tools row has no kbRoot of its own: it reads the host 知识库配置 service.
  const search = await registered.get('kb_search').execute({ q: '冷热水 密度', library: 'science' }, {});
  assert.equal(search.items[0].ref, 'science/experiment-0066-hot-cold-water-density');
  const schema = await registered.get('kb_schema').execute({ library: 'games', doc_type: 'game_card', slug: 'x', subfolder: 'age_24_36m/language' }, sessionExec(REPO_ROOT));
  assert.match(schema.write_path, /^kb\/games\/games\/age_24_36m\/language\/game-\d{4}-x\.md$/);
});
