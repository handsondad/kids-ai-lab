import assert from 'node:assert/strict';
import test from 'node:test';
import { RULES, safetyCheck } from '../src/safety.js';

const ids = (result) => result.hazards.map((hazard) => hazard.id);

test('a kitchen experiment with vinegar and baking soda is guided, not blocked', () => {
  const result = safetyCheck({ materials: ['小苏打', '白醋', '塑料杯'], steps: ['把醋倒进小苏打里'], age: 7 });
  assert.equal(result.level, 'medium');
  assert.equal(result.blocked, false);
  assert.equal(result.supervision, 'guided');
  assert.deepEqual(ids(result), ['acid-splash']);
});

test('nothing risky and an older child can work independently; unknown age stays guided', () => {
  assert.equal(safetyCheck({ materials: ['纸', '尺子'], age: 10 }).supervision, 'independent');
  assert.equal(safetyCheck({ materials: ['纸', '尺子'] }).supervision, 'guided');
  assert.equal(safetyCheck({ materials: ['纸', '尺子'], age: 5 }).supervision, 'guided');
});

test('fire, boiling water and blades need an adult for that step', () => {
  const result = safetyCheck({ materials: ['蜡烛', '火柴', '玻璃杯'], steps: ['大人用开水烫一下杯子', '用美工刀切开瓶子'] });
  assert.equal(result.level, 'high');
  assert.equal(result.supervision, 'close_supervision');
  for (const id of ['open-flame', 'boiling', 'blades', 'glass']) assert.ok(ids(result).includes(id), id);
  assert.equal(result.hazards[0].level, 'high', 'riskiest first');
});

test('dangerous combinations and materials are blocked', () => {
  assert.equal(safetyCheck({ materials: ['84消毒液', '洁厕灵'] }).blocked, true);
  assert.equal(safetyCheck({ materials: ['电线'], steps: ['把电线插到插座上'] }).blocked, true);
  assert.equal(safetyCheck({ materials: ['液氮'] }).blocked, true);
  assert.equal(safetyCheck({ materials: ['84消毒液', '清水'] }).blocked, false, 'bleach alone is not the toxic mix');
});

test('choking and small-part rules get stricter for younger children', () => {
  const young = safetyCheck({ materials: ['气球'], age: 5 });
  assert.equal(young.hazards[0].level, 'high');
  assert.match(young.hazards[0].note, /未满 8 岁/);
  assert.equal(safetyCheck({ materials: ['气球'], age: 10 }).hazards[0].level, 'medium');
  assert.deepEqual(ids(safetyCheck({ materials: ['塑料袋'], age: 8 })), [], 'plastic bags matter only for toddlers');
  assert.deepEqual(ids(safetyCheck({ materials: ['塑料袋'], age: 2 })), ['strings-bags']);
});

test('gas in a sealed bottle is a pressure hazard only when it is sealed', () => {
  assert.ok(ids(safetyCheck({ materials: ['小苏打', '矿泉水瓶'], steps: ['拧紧瓶盖摇一摇'] })).includes('pressure'));
  assert.ok(!ids(safetyCheck({ materials: ['小苏打', '矿泉水瓶'], steps: ['把气球套在瓶口'] })).includes('pressure'));
});

test('every rule has an id, label, advice and a valid level, and every result carries the disclaimer', () => {
  const seen = new Set();
  for (const rule of RULES) {
    assert.ok(rule.id && rule.label && rule.advice, rule.id);
    assert.ok(['medium', 'high', 'block'].includes(rule.level), rule.id);
    assert.ok(!seen.has(rule.id), `duplicate ${rule.id}`);
    seen.add(rule.id);
  }
  assert.match(safetyCheck({ materials: ['纸'] }).disclaimer, /不能代替大人现场判断/);
});
