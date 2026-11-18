import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { pathToFileURL } from 'node:url';
import { REPO_KB, PLAYGROUND_ROOT, sessionExec, tempDir } from './helpers.js';

// Loads both host rows and the 实验模式 entries into the installed DSH's own cordis runtime and runs every tool
// schema through its `assertSupportedJsonSchema`, the check `tools.register` applies. Set KIDS_LAB_DSH_PACKAGE to
// the absolute path of the installed @deepseek-ai/dsh package. Without it this test is skipped, not passed.
const DSH = process.env.KIDS_LAB_DSH_PACKAGE;
const dep = (name, entry) => pathToFileURL(path.join(DSH, 'node_modules', '@deepseek-ai', name, ...entry)).href;

test('the installed DSH mounts every entry and accepts every tool schema', { skip: !DSH && 'set KIDS_LAB_DSH_PACKAGE to the installed @deepseek-ai/dsh path' }, async (t) => {
  const { Context } = await import(dep('cordis', ['lib', 'index.js']));
  const { assertSupportedJsonSchema } = await import(dep('dsh-tools', ['lib', 'index.js']));
  const labSettings = await import('../src/settings.js');
  const kbSettings = await import('../../dsh-kids-kb/src/settings.js');
  const rows = [
    [await import('../../dsh-kids-kb/src/tools.js'), { skillLibraries: ['science', 'wonder'] }],
    [await import('../src/playground.js'), {}],
    [await import('../src/workshop.js'), {}],
  ];

  const tools = new Map();
  const skills = new Map();
  const root = new Context();
  await root.plugin((ctx) => ctx.provide('tools', { register(tool) { tools.set(tool.name, tool); return () => tools.delete(tool.name); } }));
  await root.plugin((ctx) => ctx.provide('userQuestions', { async ask(request) { return { answers: request.questions.map((q) => ({ id: q.id, selected: ['确认'] })) }; } }));
  await root.plugin((ctx) => ctx.provide('skills', { register(skill) { skills.set(skill.name, skill); return () => skills.delete(skill.name); } }));
  t.after(async () => { await root.fiber.dispose(); });

  await root.plugin((ctx) => kbSettings.apply(ctx, { kbRoot: REPO_KB }));
  await root.plugin((ctx) => labSettings.apply(ctx, { playgroundRoot: PLAYGROUND_ROOT }));
  for (const [module, config] of rows) {
    const plugin = (ctx) => module.apply(ctx, config);
    plugin.inject = module.inject;
    await root.plugin(plugin);
  }

  assert.deepEqual([...tools.keys()].sort(), ['kb_libraries', 'kb_links', 'kb_read', 'kb_search', 'lab_create_experiment', 'lab_list_experiments',
    'lab_safety_check', 'lab_save_to_kb', 'playground_halls', 'playground_search']);
  for (const name of ['kids-lab-experiment', 'kids-lab-web-curation', 'kb-science', 'kb-wonder']) assert.ok(skills.has(name), name);
  assert.ok(!skills.has('kb-games') && !skills.has('kb-contribute'), 'only the libraries and skills this mode asks for');
  for (const [name, tool] of tools) {
    assert.doesNotThrow(() => assertSupportedJsonSchema(tool.parameters), `${name} parameters`);
    assert.doesNotThrow(() => assertSupportedJsonSchema(tool.output.schema), `${name} output`);
    assert.ok(tool.description.length > 40, `${name} explains itself`);
  }

  // The rows inside the preset read the knowledge base and the museum from the host services, not their own config.
  const search = await tools.get('kb_search').execute({ q: '冷热水 密度', library: 'science' }, {});
  assert.equal(search.items[0].ref, 'science/experiment-0066-hot-cold-water-density');
  const halls = await tools.get('playground_halls').execute({}, {});
  assert.equal(halls.halls.length, 9);
  const found = await tools.get('playground_search').execute({ q: '鸡蛋 浮' }, {});
  assert.ok(found.items.length > 0);
  const cwd = tempDir(t);
  const listed = await tools.get('lab_list_experiments').execute({}, sessionExec(cwd));
  assert.deepEqual(listed.experiments, []);
});
