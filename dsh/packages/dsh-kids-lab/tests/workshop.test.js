import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { parseFrontmatter } from '../../dsh-kids-kb/src/frontmatter.js';
import { createWorkshopTools } from '../src/workshop.js';
import { createKbTools, fakeHost, kbFixture, playgroundFixture, sessionExec, tempDir } from './helpers.js';

const NOW = '2026-11-16T15:30:00.000Z';

const egg = (extra = {}) => ({
  title: '让鸡蛋浮起来',
  slug: 'floating-egg',
  emoji: '🥚',
  age_min: 5,
  age_max: 10,
  duration_min: 15,
  domain: 'forces_motion',
  question: '不碰鸡蛋，怎么让沉在水底的鸡蛋自己浮起来？',
  guesses: ['加盐', '加糖', '加热水'],
  materials: ['生鸡蛋 1 个', '透明塑料杯', '食盐', '勺子'],
  steps: ['杯里倒大半杯清水，放进鸡蛋', '一勺一勺加盐并搅拌', '每加一勺观察鸡蛋的位置'],
  expected: ['盐加够了鸡蛋会慢慢浮起来'],
  principle: '盐溶进水里，水的密度变大；当盐水的密度超过鸡蛋，浮力就把鸡蛋托起来。',
  key_concepts: ['密度', '浮力'],
  change: ['盐的多少'],
  keep: ['水量', '同一个鸡蛋'],
  extensions: ['先放盐水再小心加清水，让鸡蛋停在中间'],
  dialogue: [{ nian: '爸爸，鸡蛋怎么沉下去了？<script>', dad: '你看看，往水里加点什么会让水变“重”？' }],
  kb_refs: ['science/experiment-0006-float-egg'],
  playground_ids: ['float'],
  topic_clusters: ['forces_and_motion'],
  experiment_types: ['comparison_test'],
  search_terms: ['盐水浮鸡蛋'],
  ...extra,
});

const setup = (t, { answer = '确认' } = {}) => {
  const { kb } = kbFixture(t);
  const playgroundRoot = playgroundFixture(t);
  const cwd = tempDir(t, 'kids-session-');
  const host = fakeHost({ settings: { playgroundRoot }, kbRoot: kb, answer });
  createWorkshopTools(host.ctx, { now: () => NOW });
  createKbTools(host.ctx, { maintain: true, skills: false });
  return { host, kb, cwd, exec: sessionExec(cwd) };
};

test('the workshop registers its tools and both skills', (t) => {
  const { host } = setup(t);
  assert.deepEqual([...host.tools.keys()].filter((name) => name.startsWith('lab_')).sort(),
    ['lab_create_experiment', 'lab_list_experiments', 'lab_safety_check', 'lab_save_to_kb']);
  assert.deepEqual([...host.skills.keys()].sort(), ['kids-lab-experiment', 'kids-lab-web-curation']);
  for (const skill of host.skills.values()) assert.ok(skill.content.length < 8192, `${skill.name} stays under the tool-result pruner threshold`);
});

test('lab_create_experiment asks first, then writes an offline page, a card and the data', async (t) => {
  const { host, cwd, exec } = setup(t);
  const result = await host.call('lab_create_experiment', egg(), exec);
  assert.equal(host.asked.length, 1);
  assert.match(host.asked[0].questions[0].detail, /kids-lab\/floating-egg\//);
  const folder = path.join(cwd, 'kids-lab', 'floating-egg');
  assert.equal(result.folder, folder);
  assert.deepEqual(readdirSync(folder).sort(), ['experiment.md', 'index.html', 'lab.json']);

  const html = readFileSync(result.files.page, 'utf8');
  assert.match(html, /<title>🥚 让鸡蛋浮起来/);
  assert.match(html, /data-check="step-2"/);
  assert.ok(!html.includes('<script>\'') && !html.includes('沉下去了？<script>'), 'content is escaped');
  assert.match(html, /沉下去了？&lt;script&gt;/);
  assert.ok(!/<script[^>]+src=|<link[^>]+href=|@import/.test(html), 'no external resources');
  assert.match(html, /href="https:\/\/handsondad\.github\.io\/sci-playground\/#\/g\/float"/);
  assert.match(html, /盐水浮鸡蛋|science\/experiment-0006-float-egg/);

  const lab = JSON.parse(readFileSync(result.files.data, 'utf8'));
  assert.deepEqual(lab.kb_refs, [{ ref: 'science/experiment-0006-float-egg', title: '盐水浮鸡蛋' }]);
  assert.deepEqual(lab.playground, [{ id: 'float', title: '🥚 浮起来的鸡蛋', url: 'https://handsondad.github.io/sci-playground/#/g/float' }]);
  assert.match(readFileSync(result.files.card, 'utf8'), /人工整理草案/);
  assert.match(host.text('lab_create_experiment', {}, result), /present/);
});

test('cancelling writes nothing', async (t) => {
  const { host, cwd, exec } = setup(t, { answer: '取消' });
  const result = await host.call('lab_create_experiment', egg(), exec);
  assert.equal(result.cancelled, true);
  assert.equal(existsSync(path.join(cwd, 'kids-lab')), false);
});

test('blocked hazards are refused before asking', async (t) => {
  const { host, exec } = setup(t);
  await assert.rejects(host.call('lab_create_experiment', egg({ materials: ['84消毒液', '洁厕灵'] }), exec), /不能生成.*有毒气体/);
  assert.equal(host.asked.length, 0);
});

test('high-risk steps are flagged on the page', async (t) => {
  const { host, exec } = setup(t);
  const result = await host.call('lab_create_experiment', egg({ slug: 'candle', materials: ['蜡烛', '打火机', '盘子'], steps: ['大人点燃蜡烛', '用杯子罩住'] }), exec);
  assert.equal(result.safety.level, 'high');
  assert.match(readFileSync(result.files.page, 'utf8'), /role="alert">⚠️ 这个实验里有危险步骤：明火/);
});

test('citations must exist: unknown knowledge refs and museum ids are refused', async (t) => {
  const { host, exec } = setup(t);
  await assert.rejects(host.call('lab_create_experiment', egg({ kb_refs: ['science/experiment-9999-made-up'] }), exec), /kb_refs 里的 science\/experiment-9999-made-up 不在知识库里/);
  await assert.rejects(host.call('lab_create_experiment', egg({ playground_ids: ['volcano'] }), exec), /volcano 不是科学馆里的实验/);
  await assert.rejects(host.call('lab_create_experiment', egg({ sources: [{ url: 'javascript:alert(1)' }] }), exec), /http\(s\) 的 url/);
});

test('arguments are validated', async (t) => {
  const { host, exec } = setup(t);
  await assert.rejects(host.call('lab_create_experiment', egg({ slug: '鸡蛋' }), exec), /slug 只能用小写字母/);
  await assert.rejects(host.call('lab_create_experiment', egg({ age_min: 10, age_max: 5 }), exec), /age_min 不能大于 age_max/);
  await assert.rejects(host.call('lab_create_experiment', egg({ domain: 'magic' }), exec), /domain 只能是/);
  await assert.rejects(host.call('lab_create_experiment', egg({ steps: ['只有一步'] }), exec), /至少要有 2 步/);
  await assert.rejects(host.call('lab_create_experiment', egg({ topic_clusters: ['magic'] }), exec), /不认识的值：magic/);
  await assert.rejects(host.call('lab_create_experiment', egg(), {}), /当前会话没有工作目录/);
});

test('an existing slug needs overwrite, which asks again', async (t) => {
  const { host, exec } = setup(t);
  await host.call('lab_create_experiment', egg(), exec);
  await assert.rejects(host.call('lab_create_experiment', egg(), exec), /已经有 kids-lab\/floating-egg/);
  await host.call('lab_create_experiment', egg({ title: '鸡蛋浮起来了', overwrite: true }), exec);
  assert.equal(host.asked.length, 2);
  assert.equal(host.asked[1].questions[0].header, '覆盖实验页');
});

test('lab_list_experiments lists what was built', async (t) => {
  const { host, exec } = setup(t);
  assert.deepEqual((await host.call('lab_list_experiments', {}, exec)).experiments, []);
  await host.call('lab_create_experiment', egg(), exec);
  const { experiments } = await host.call('lab_list_experiments', {}, exec);
  assert.deepEqual(experiments.map((item) => [item.slug, item.title, item.ages]), [['floating-egg', '让鸡蛋浮起来', '5–10 岁']]);
});

test('lab_save_to_kb writes a draft card with the next free id that kb_search then finds', async (t) => {
  const { host, kb, exec } = setup(t);
  await host.call('lab_create_experiment', egg({ kb_refs: ['science/experiment-0006-float-egg', 'games/game-0001'] }), exec);
  const saved = await host.call('lab_save_to_kb', { slug: 'floating-egg' }, exec);
  assert.equal(saved.ref, 'science/experiment-0041-floating-egg', 'the fixture already has experiment-0040');
  assert.equal(saved.path, path.join(kb, 'science', 'experiments', 'forces_motion', 'experiment-0041-floating-egg.md'));
  const { data, body } = parseFrontmatter(readFileSync(saved.path, 'utf8'));
  assert.equal(data.doc_type, 'experiment_card');
  assert.equal(data.status, 'draft');
  assert.equal(data.title_zh, '让鸡蛋浮起来');
  assert.deepEqual(data.age_range, { min: 5, max: 10 });
  assert.deepEqual(data.science_domains, ['physics']);
  assert.deepEqual(data.source_refs, ['experiment-0006-float-egg']);
  assert.deepEqual(data.related, ['games/game-0001'], 'refs into other libraries keep their library');
  assert.equal(data.source_kind, 'manual_curation');
  assert.equal(data.last_reviewed, '2026-11-16');
  for (const heading of ['# 实验简介', '## 准备材料', '## 操作步骤', '## 科学原理', '## 安全提醒', '## 检索提示', '## 来源说明']) assert.ok(body.includes(heading), heading);

  const found = await host.call('kb_search', { q: '让鸡蛋浮起来', library: 'science' });
  assert.equal(found.items[0].ref, 'science/experiment-0041-floating-egg');
  assert.equal(found.items[0].status, 'draft');
  await assert.rejects(host.call('lab_save_to_kb', { slug: 'floating-egg' }, exec), /已经有这张卡/);
  const check = await host.call('kb_check', { paths: ['science/experiments/forces_motion/experiment-0041-floating-egg.md'] });
  assert.deepEqual(check.errors, [], 'a saved card passes the knowledge-base rules');
  const links = await host.call('kb_links', { ref: 'games/game-0001' });
  assert.ok(links.incoming.some((link) => link.ref === 'science/experiment-0041-floating-egg'), 'the saved card shows up as a backlink');
  const listed = await host.call('lab_list_experiments', {}, exec);
  assert.equal(listed.experiments[0].saved_to, 'science/experiment-0041-floating-egg');
});

test('web sources are kept as links and mark the card as an article summary', async (t) => {
  const { host, exec } = setup(t);
  const sources = [{ title: 'Exploratorium Science Snacks', url: 'https://www.exploratorium.edu/snacks', retrieved: '2026-11-16' }];
  const created = await host.call('lab_create_experiment', egg({ slug: 'web-egg', sources }), exec);
  assert.match(readFileSync(created.files.page, 'utf8'), /href="https:\/\/www\.exploratorium\.edu\/snacks" target="_blank" rel="noopener"/);
  const saved = await host.call('lab_save_to_kb', { slug: 'web-egg', folder: 'weather_water' }, exec);
  const { data, body } = parseFrontmatter(readFileSync(saved.path, 'utf8'));
  assert.equal(data.source_kind, 'article_summary');
  assert.deepEqual(data.source_urls, ['https://www.exploratorium.edu/snacks']);
  assert.match(saved.path, /weather_water/);
  assert.ok(!body.includes('人工整理草案'));
});

test('lab_save_to_kb asks first, and cancelling leaves the library unchanged', async (t) => {
  const { exec, kb } = setup(t);
  const host = fakeHost({ kbRoot: kb, answer: '取消' });
  createWorkshopTools(host.ctx, { now: () => NOW });
  const first = fakeHost({ kbRoot: kb });
  createWorkshopTools(first.ctx, { now: () => NOW });
  await first.call('lab_create_experiment', egg({ kb_refs: [], playground_ids: [] }), exec);
  const result = await host.call('lab_save_to_kb', { slug: 'floating-egg' }, exec);
  assert.equal(result.cancelled, true);
  assert.equal(existsSync(path.join(kb, 'science', 'experiments', 'forces_motion', 'experiment-0041-floating-egg.md')), false);
});

test('lab_safety_check renders the hazards and the disclaimer', async (t) => {
  const { host } = setup(t);
  const result = await host.call('lab_safety_check', { materials: ['酒精', '棉签'], age: 9 });
  assert.equal(result.level, 'high');
  const markdown = host.text('lab_safety_check', {}, result);
  assert.match(markdown, /\[high\] 酒精/);
  assert.match(markdown, /不能代替大人现场判断/);
});

test('lab_safety_check also takes materials and steps written as one string', async (t) => {
  const { host } = setup(t);
  const result = await host.call('lab_safety_check', { materials: '透明塑料杯, 鸡蛋, 盐', steps: '1. 倒水。 2. 用打火机点蜡烛。', age: 7 });
  assert.equal(result.level, 'high');
  assert.ok(result.hazards.some((hazard) => hazard.id === 'open-flame'));
});
