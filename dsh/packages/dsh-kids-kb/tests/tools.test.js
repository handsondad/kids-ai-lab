import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { parseFrontmatter } from '../src/frontmatter.js';
import { ageSpan, nextId } from '../src/index.js';
import { createKbTools } from '../src/tools.js';
import { REPO_KB, card, fakeHost, kbFixture, sessionExec, writeTree } from './helpers.js';

const setup = (t, { kbRoot, config = {} } = {}) => {
  const host = fakeHost({ kbRoot: kbRoot ?? kbFixture(t).kb });
  createKbTools(host.ctx, config);
  return host;
};

test('frontmatter reads scalars, lists, one-level maps and inline lists', () => {
  const { data, body, frontmatter } = parseFrontmatter(card(`
id: x-1
duration_min: 15
title_zh: "带: 冒号的标题"
age_range:
  min: 6
  max: 14
aliases:
  - 甲
  - '乙'
tags: [a, b]
empty:
`, '# 正文'));
  assert.equal(frontmatter, true);
  assert.equal(data.id, 'x-1');
  assert.equal(data.duration_min, 15);
  assert.equal(data.title_zh, '带: 冒号的标题');
  assert.deepEqual(data.age_range, { min: 6, max: 14 });
  assert.deepEqual(data.aliases, ['甲', '乙']);
  assert.deepEqual(data.tags, ['a', 'b']);
  assert.equal(data.empty, null);
  assert.match(body, /# 正文/);
  assert.equal(parseFrontmatter('# 没有头').frontmatter, false);
});

test('age spans come from age_range, months, or age_stage tags', () => {
  assert.deepEqual(ageSpan({ age_range: { min: 6, max: 14 } }), { min: 6, max: 14 });
  assert.deepEqual(ageSpan({ age_min_months: 24, age_max_months: 36 }), { min: 2, max: 3 });
  assert.deepEqual(ageSpan({ age_stage: ['age_4_6y', 'age_6_12y'] }), { min: 4, max: 12 });
  assert.equal(ageSpan({ age_stage: ['age_30_plus'] }), null);
});

test('nextId continues after the highest number in use, whatever the slug', () => {
  assert.equal(nextId(['game-0001', 'game-0129-crawl', 'game-0007'], 'game'), 'game-0130');
  assert.equal(nextId([], 'note'), 'note-0001');
});

test('kb_libraries lists libraries from library.json and skips rules, readmes, templates and skills', async (t) => {
  const host = setup(t);
  const { libraries } = await host.call('kb_libraries');
  assert.deepEqual(libraries.map((library) => library.id), ['games', 'science']);
  const science = libraries.find((library) => library.id === 'science');
  assert.equal(science.documents, 3);
  assert.equal(science.title_zh, '趣味科学实验库');
  assert.deepEqual(science.doc_types, ['experiment_card', 'topic_card']);
  assert.equal(science.directory, undefined, 'no absolute paths in tool output');
  assert.match(host.text('kb_libraries', {}, { libraries }), /\| `science` \| 趣味科学实验库 \| 3 \|/);
});

test('library rules and skill files become skills; maintenance skills only in maintain mode', async (t) => {
  const { kb } = kbFixture(t);
  const reader = setup(t, { kbRoot: kb });
  assert.deepEqual([...reader.skills.keys()].sort(), ['kb-games', 'kb-science', 'science-explain']);
  assert.match(reader.skills.get('kb-science').content, /趣味科学实验库规则/);
  assert.equal(reader.skills.get('science-explain').whenToUse, '孩子问为什么时。');
  const scoped = setup(t, { kbRoot: kb, config: { skillLibraries: ['games'] } });
  assert.deepEqual([...scoped.skills.keys()], ['kb-games']);
  const editor = setup(t, { kbRoot: kb, config: { maintain: true } });
  for (const name of ['kb-contribute', 'kb-ingest-source', 'kb-link']) {
    assert.ok(editor.skills.has(name), name);
    assert.ok(editor.skills.get(name).content.length < 8000, `${name} fits under the pruner threshold`);
  }
  assert.ok(!reader.tools.has('kb_schema') && editor.tools.has('kb_schema') && editor.tools.has('kb_check'));
});

test('kb_search ranks the matching card first and understands Chinese without spaces', async (t) => {
  const host = setup(t);
  const result = await host.call('kb_search', { q: '鸡蛋浮起来' });
  assert.equal(result.items[0].ref, 'science/experiment-0006-float-egg');
  assert.ok(!result.items.some((item) => /AGENTS|README|template|skills/i.test(item.path)), 'rules, readmes, templates and skills are not cards');
  assert.match(host.text('kb_search', {}, result), /ref `science\/experiment-0006-float-egg`/);
});

test('kb_search filters by library, type, age, duration and safety', async (t) => {
  const host = setup(t);
  const science = await host.call('kb_search', { q: '鸡蛋', library: 'science' });
  assert.ok(science.items.length && science.items.every((item) => item.library === 'science'));
  const byName = await host.call('kb_search', { q: '浮', library: '亲子游戏知识库' });
  assert.deepEqual(byName.items.map((item) => item.ref), ['games/game-0001']);
  const topics = await host.call('kb_search', { q: '密度', doc_type: 'topic_card' });
  assert.deepEqual(topics.items.map((item) => item.ref), ['science/topic-0006']);
  const sixYearOld = await host.call('kb_search', { q: '鸡蛋', age: 6 });
  assert.ok(!sixYearOld.items.some((item) => item.ref.endsWith('candle-jar')), 'an 8–14 card is not for a 6-year-old');
  const quick = await host.call('kb_search', { q: '鸡蛋', max_minutes: 20 });
  assert.ok(!quick.items.some((item) => item.ref.endsWith('candle-jar')));
  const safe = await host.call('kb_search', { q: '鸡蛋', max_safety: 'medium' });
  assert.ok(!safe.items.some((item) => item.safety_level === 'high'));
  const none = await host.call('kb_search', { q: '量子纠缠' });
  assert.equal(none.items.length, 0);
  assert.match(host.text('kb_search', {}, none), /没有命中/);
});

test('kb_search refuses an unknown library and bad arguments', async (t) => {
  const host = setup(t);
  await assert.rejects(host.call('kb_search', { q: '鸡蛋', library: 'nope' }), /没有这个知识库：nope/);
  await assert.rejects(host.call('kb_search', { q: '' }), /q 不能为空/);
  await assert.rejects(host.call('kb_search', { q: '鸡蛋', limit: 99 }), /limit/);
  await assert.rejects(host.call('kb_search', { q: '鸡蛋', extra: 1 }), /不接受参数 extra/);
});

test('kb_read reads by ref, id or path, pages long cards, and shows links both ways', async (t) => {
  const { kb } = kbFixture(t);
  const host = setup(t, { kbRoot: kb });
  const egg = await host.call('kb_read', { ref: 'science/experiment-0006-float-egg' });
  assert.match(egg.content, /盐水密度变大/);
  assert.deepEqual(egg.links.outgoing.map((link) => [link.field, link.ref]), [['source_refs', 'science/topic-0006'], ['related', 'games/game-0001']]);
  const topic = await host.call('kb_read', { ref: 'topic-0006' });
  assert.deepEqual(topic.links.incoming.map((link) => link.ref).sort(), ['science/experiment-0006-float-egg', 'science/experiment-0040-candle-jar']);
  assert.match(host.text('kb_read', {}, topic), /被引用：/);
  const byPath = await host.call('kb_read', { ref: 'kb/games/games/age_24_36m/sensory/game-0001-bath-float.md' });
  assert.equal(byPath.ref, 'games/game-0001');
  writeTree(kb, { 'science/topics/physics/topic-0007-long.md': card('doc_type: topic_card\nid: topic-0007\nstatus: draft\ntitle_zh: 长文', 'x'.repeat(31_000)) });
  const first = await host.call('kb_read', { ref: 'science/topic-0007' });
  assert.equal(first.next_offset, 30_000);
  assert.match(host.text('kb_read', {}, first), /offset=30000/);
  const second = await host.call('kb_read', { ref: 'science/topic-0007', offset: first.next_offset });
  assert.equal(second.next_offset, null);
});

test('kb_read cannot leave the knowledge base or read rules as cards', async (t) => {
  const host = setup(t);
  await assert.rejects(host.call('kb_read', { ref: '../../etc/passwd' }), /知识库里没有/);
  await assert.rejects(host.call('kb_read', { ref: 'science/AGENTS.md' }), /知识库里没有/);
});

test('kb_links follows references across libraries and suggests cards from other libraries', async (t) => {
  const host = setup(t);
  const game = await host.call('kb_links', { ref: 'games/game-0001', suggest: true });
  assert.deepEqual(game.incoming.map((link) => [link.field, link.ref]), [['related', 'science/experiment-0006-float-egg']]);
  assert.ok(game.suggestions.every((item) => item.library !== 'games' && item.ref !== 'science/experiment-0006-float-egg'));
  assert.match(host.text('kb_links', {}, game), /被引用（1）/);
  const plain = await host.call('kb_links', { ref: 'science/topic-0006' });
  assert.equal(plain.suggestions, null);
  const candle = await host.call('kb_links', { ref: 'science/experiment-0040-candle-jar', suggest: true });
  assert.ok(!candle.suggestions.some((item) => item.ref === 'games/game-0001'), 'a 2–3 year game is not suggested for an 8–14 experiment');
});

test('kb_schema gives the template, the next id and a path inside the session directory', async (t) => {
  const { repo, kb } = kbFixture(t);
  const host = setup(t, { kbRoot: kb, config: { maintain: true } });
  const types = await host.call('kb_schema', { library: 'science' });
  assert.deepEqual(types.doc_types.map((type) => [type.doc_type, type.count]), [['experiment_card', 2], ['topic_card', 1]]);
  assert.match(host.text('kb_schema', {}, types), /experiment_card/);
  const exec = sessionExec(repo);
  const partial = await host.call('kb_schema', { library: 'science', doc_type: 'experiment_card', slug: 'balloon-rocket' }, exec);
  assert.equal(partial.next_id, 'experiment-0041');
  assert.equal(partial.write_path, null, 'the folder placeholder is still open');
  assert.deepEqual(partial.existing_folders, ['experiments/forces_motion', 'experiments/materials_reactions']);
  assert.match(partial.template, /鸡蛋模板/);
  const full = await host.call('kb_schema', { library: 'science', doc_type: 'experiment_card', slug: 'balloon-rocket', subfolder: 'forces_motion' }, exec);
  assert.equal(full.write_path, 'kb/science/experiments/forces_motion/experiment-0041-balloon-rocket.md');
  assert.match(host.text('kb_schema', {}, full), /下一个 id：`experiment-0041`/);
  const elsewhere = await host.call('kb_schema', { library: 'science', doc_type: 'topic_card', slug: 'x', subfolder: 'physics' }, sessionExec(path.join(repo, '..')));
  assert.equal(elsewhere.write_path, `${path.basename(repo)}/kb/science/topics/physics/topic-0007-x.md`);
  const outside = await host.call('kb_schema', { library: 'science', doc_type: 'topic_card' }, sessionExec(path.join(kb, 'games')));
  assert.match(outside.workspace, /不包含知识库/);
  await assert.rejects(host.call('kb_schema', { library: 'science', doc_type: 'game_card' }), /没有 doc_type game_card/);
  await assert.rejects(host.call('kb_schema', { library: 'science', doc_type: 'topic_card', slug: '中文' }), /slug/);
  await assert.rejects(host.call('kb_schema', { library: 'games', doc_type: 'game_card', subfolder: 'age_24_36m' }), /2 级目录/);
});

test('kb_check passes the fixture and reports what a careless write breaks', async (t) => {
  const { kb } = kbFixture(t);
  const host = setup(t, { kbRoot: kb, config: { maintain: true } });
  const clean = await host.call('kb_check', {});
  assert.equal(clean.ok, true, JSON.stringify(clean.errors));
  writeTree(kb, {
    'games/games/age_24_36m/sensory/game-0002-bad.md': card('doc_type: game_card\nid: game-0001\nstatus: done\ntitle_zh: 坏卡\nrelated:\n  - science/experiment-9999', '# x\n\n[不存在](./nope.md)'),
    'games/notes.md': '# 没有头信息\n',
    'games/skills/broken.md': card('name: Bad Name\ndescription: x', 'x'),
  });
  const result = await host.call('kb_check', { library: 'games' });
  const rules = new Set(result.errors.map((issue) => issue.rule));
  for (const rule of ['duplicate', 'status', 'filename', 'ref', 'frontmatter', 'skill']) assert.ok(rules.has(rule), rule);
  assert.ok(result.warnings.some((issue) => issue.rule === 'link'));
  const one = await host.call('kb_check', { paths: ['games/games/age_24_36m/sensory/game-0002-bad.md'], warnings: false });
  assert.ok(one.checked === 1 && one.shown.every((issue) => issue.level === 'error'));
  assert.match(host.text('kb_check', {}, one), /错误必须修完/);
  await assert.rejects(host.call('kb_check', { paths: ['games/nope.md'] }), /没有找到这些卡片/);
});

test('a row kbRoot wins over the host service; nothing configured says how to configure it', async (t) => {
  const own = kbFixture(t).kb;
  const host = fakeHost({ kbRoot: path.join(own, 'missing') });
  createKbTools(host.ctx, { kbRoot: own });
  assert.equal((await host.call('kb_libraries')).libraries.length, 2);
  const saved = { kb: process.env.KIDS_AI_LAB_KB, root: process.env.KIDS_AI_LAB_ROOT };
  delete process.env.KIDS_AI_LAB_KB;
  delete process.env.KIDS_AI_LAB_ROOT;
  t.after(() => { for (const [key, name] of [['kb', 'KIDS_AI_LAB_KB'], ['root', 'KIDS_AI_LAB_ROOT']]) if (saved[key] !== undefined) process.env[name] = saved[key]; });
  const bare = fakeHost();
  createKbTools(bare.ctx);
  await assert.rejects(bare.call('kb_search', { q: '鸡蛋' }), /知识库目录还没有配置.*install-kidslab/);
});

test('the real kb/ is valid and answers the questions the modes are for', { skip: !existsSync(path.join(REPO_KB, 'library.json')) && !existsSync(path.join(REPO_KB, 'science', 'library.json')) && 'kids-ai-lab kb/ not found' }, async (t) => {
  const host = setup(t, { kbRoot: REPO_KB, config: { maintain: true } });
  const { libraries } = await host.call('kb_libraries');
  assert.deepEqual(libraries.map((library) => library.id).sort(), ['ai', 'games', 'language', 'psychology', 'science', 'wonder']);
  const density = await host.call('kb_search', { q: '冷热水 密度', library: 'science', doc_type: 'experiment_card' });
  assert.equal(density.items[0].ref, 'science/experiment-0066-hot-cold-water-density');
  assert.match((await host.call('kb_read', { ref: density.items[0].ref })).content, /## 科学原理/);
  const check = await host.call('kb_check', { warnings: false });
  assert.equal(check.errors.length, 0, check.errors.slice(0, 5).map((issue) => `${issue.path} ${issue.message}`).join('\n'));
  for (const library of libraries) assert.ok(host.skills.has(`kb-${library.id}`), `kb-${library.id} skill`);
});
