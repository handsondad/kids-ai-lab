import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import test from 'node:test';
import { loadPlayground } from '../src/playground-index.js';
import { createPlaygroundTools } from '../src/playground.js';
import { PLAYGROUND_ROOT, fakeHost, playgroundFixture } from './helpers.js';

const setup = (t, settings) => {
  const host = fakeHost({ settings: settings ?? { playgroundRoot: playgroundFixture(t) } });
  createPlaygroundTools(host.ctx);
  return host;
};

test('the catalog is read from the TypeScript literals, registered games only', (t) => {
  const catalog = loadPlayground(playgroundFixture(t));
  assert.deepEqual(catalog.halls.map((hall) => hall.id), ['physics', 'chemistry']);
  assert.deepEqual(catalog.games.map((game) => game.id), ['float', 'fizz']);
  assert.equal(catalog.games[1].blurb, '小苏打遇到醋放出二氧化碳，把气球吹 "鼓" 起来。');
  assert.equal(catalog.cards[0].story, '阿基米德坐进浴缸，水漫了出来{他想到了}。', 'braces inside strings do not end the object');
  assert.deepEqual(catalog.talks[0].turns, [{ nian: '爸爸，瓶子里没人吹气呀？', dad: '小苏打和醋见面会放出一种看不见的气体。' }]);
});

test('playground_halls lists halls with games and links', async (t) => {
  const host = setup(t);
  const { halls } = await host.call('playground_halls');
  assert.equal(halls[0].url, 'https://handsondad.github.io/sci-playground/#/c/physics');
  assert.deepEqual(halls[0].games, [{ id: 'float', title: '浮起来的鸡蛋', emoji: '🥚' }]);
  assert.equal(halls[0].home_labs, 1);
  assert.equal(halls[1].talks, 1);
});

test('playground_search finds games, home labs and talks with working links', async (t) => {
  const host = setup(t, { playgroundRoot: playgroundFixture(t), playgroundUrl: 'http://localhost:5173' });
  const egg = await host.call('playground_search', { q: '鸡蛋浮起来' });
  assert.equal(egg.items[0].kind, 'game');
  assert.equal(egg.items[0].url, 'http://localhost:5173/#/g/float');
  assert.ok(!egg.items.some((item) => item.id === 'hidden'), 'an unregistered folder is not on the site');
  const lab = egg.items.find((item) => item.kind === 'home_lab');
  assert.equal(lab.related_game, '🥚 浮起来的鸡蛋');
  const talks = await host.call('playground_search', { q: '气球', kind: 'talk' });
  assert.equal(talks.items.length, 1);
  assert.match(host.text('playground_search', {}, talks), /小念：爸爸，瓶子里没人吹气呀？/);
  const chemistry = await host.call('playground_search', { q: '鸡蛋', hall: 'chemistry' });
  assert.equal(chemistry.items.length, 0);
  await assert.rejects(host.call('playground_search', { q: '鸡蛋', hall: 'nope' }), /没有这个展馆/);
  await assert.rejects(host.call('playground_search', { q: '鸡蛋', kind: 'video' }), /kind 只能是/);
});

test('an unconfigured playground says how to configure it', async (t) => {
  const previous = process.env.SCI_PLAYGROUND_ROOT;
  delete process.env.SCI_PLAYGROUND_ROOT;
  t.after(() => { if (previous !== undefined) process.env.SCI_PLAYGROUND_ROOT = previous; });
  const host = setup(t, {});
  await assert.rejects(host.call('playground_halls'), /sci-playground 目录还没有配置/);
});

test('the real sci-playground catalog is fully readable', { skip: !existsSync(PLAYGROUND_ROOT) && 'sci-playground checkout not found' }, async (t) => {
  const host = setup(t, { playgroundRoot: PLAYGROUND_ROOT });
  const { halls } = await host.call('playground_halls');
  assert.equal(halls.length, 9);
  const games = halls.flatMap((hall) => hall.games);
  assert.ok(games.length >= 48, `expected at least 48 games, read ${games.length}`);
  assert.ok(games.every((game) => game.id && game.title && game.emoji), 'every game has id, title and emoji');
  assert.ok(halls.every((hall) => hall.home_labs >= 3 && hall.talks >= 3), 'every hall has its wiki cards and talks');
  const egg = await host.call('playground_search', { q: '鸡蛋 浮起来', kind: 'game' });
  assert.equal(egg.items[0].id, 'float');
});
