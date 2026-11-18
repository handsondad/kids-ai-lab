import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';
// Reads the sci-playground catalog straight from its TypeScript sources (categories.ts, games.ts and each
// registered game's `meta`, wiki.ts, talks.ts). Only the literal object shapes that project uses are read;
// nothing is executed.

const CATALOG = ['src', 'catalog'];

/** Index of the bracket that closes the one at `open`, skipping string and template literals. */
function closing(source, open) {
  const pairs = { '{': '}', '[': ']', '(': ')' };
  const stack = [];
  let quote = null;
  for (let index = open; index < source.length; index++) {
    const char = source[index];
    if (quote) {
      if (char === '\\') index++;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '"' || char === "'" || char === '`') { quote = char; continue; }
    if (char === '/' && source[index + 1] === '/') { index = source.indexOf('\n', index); if (index === -1) return -1; continue; }
    if (char === '/' && source[index + 1] === '*') { index = source.indexOf('*/', index + 2); if (index === -1) return -1; index++; continue; }
    if (pairs[char]) stack.push(pairs[char]);
    else if (char === '}' || char === ']' || char === ')') {
      if (stack.pop() !== char) return -1;
      if (!stack.length) return index;
    }
  }
  return -1;
}

/** Top-level `{ … }` items of the array literal assigned to `exportName`. */
function arrayObjects(source, exportName) {
  const at = source.search(new RegExp(`export\\s+const\\s+${exportName}\\b`));
  if (at === -1) return [];
  const equals = source.indexOf('=', at);
  const open = source.indexOf('[', equals);
  const end = open === -1 ? -1 : closing(source, open);
  if (end === -1) return [];
  const items = [];
  for (let index = open + 1; index < end; index++) {
    if (source[index] !== '{') continue;
    const close = closing(source, index);
    if (close === -1) break;
    items.push(source.slice(index, close + 1));
    index = close;
  }
  return items;
}

const unquote = (raw) => {
  try { return JSON.parse(`"${raw}"`); } catch { return raw; }
};

export function stringField(block, key) {
  const match = block.match(new RegExp(`\\b${key}\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return match ? unquote(match[1]) : '';
}

const allStrings = (block, key) => [...block.matchAll(new RegExp(`\\b${key}\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`, 'g'))].map((match) => unquote(match[1]));

const read = (file) => readFileSync(file, 'utf8');

export function loadPlayground(root) {
  const catalog = path.join(root, ...CATALOG);
  const halls = arrayObjects(read(path.join(catalog, 'categories.ts')), 'categories').map((block) => ({
    id: stringField(block, 'id'), title: stringField(block, 'title'), emoji: stringField(block, 'emoji'), blurb: stringField(block, 'blurb'),
  })).filter((hall) => hall.id);

  // A game counts only when games.ts registers it; a folder on disk alone is not on the site.
  const registry = read(path.join(catalog, 'games.ts')).replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  const games = [];
  for (const match of registry.matchAll(/from\s+"(\.\.\/games\/[^"]+)"/g)) {
    const file = path.resolve(catalog, match[1]);
    let source;
    try { source = read(file); } catch { continue; }
    const at = source.search(/\bmeta\s*[:=]\s*\{/);
    if (at === -1) continue;
    const open = source.indexOf('{', at);
    const close = closing(source, open);
    if (close === -1) continue;
    const meta = source.slice(open, close + 1);
    const id = stringField(meta, 'id');
    if (!id) continue;
    games.push({
      id, hall: stringField(meta, 'category'), title: stringField(meta, 'title'), emoji: stringField(meta, 'emoji'),
      blurb: stringField(meta, 'blurb'), tag: stringField(meta, 'tag'), source_dir: path.dirname(file),
    });
  }

  const cards = arrayObjects(read(path.join(catalog, 'wiki.ts')), 'scienceWiki').map((block) => ({
    id: stringField(block, 'id'), hall: stringField(block, 'category'), emoji: stringField(block, 'emoji'), era: stringField(block, 'era'),
    scientist: stringField(block, 'scientist'), title: stringField(block, 'title'), story: stringField(block, 'story'),
    home_lab: stringField(block, 'homeLab'), related_game: stringField(block, 'relatedGameId'),
  })).filter((card) => card.id);

  const talks = arrayObjects(read(path.join(catalog, 'talks.ts')), 'scienceTalks').map((block) => ({
    hall: stringField(block, 'category'), emoji: stringField(block, 'emoji'), title: stringField(block, 'title'),
    turns: allStrings(block, 'nian').map((nian, index) => ({ nian, dad: allStrings(block, 'dad')[index] ?? '' })),
    wrap: stringField(block, 'wrap'),
  })).filter((talk) => talk.title);

  return { halls, games, cards, talks };
}

const signature = (root) => ['categories.ts', 'games.ts', 'wiki.ts', 'talks.ts']
  .map((name) => { try { return statSync(path.join(root, ...CATALOG, name)).mtimeMs; } catch { return 0; } }).join(':');

/**
 * Rebuilt when one of the catalog files changes, so a game added to sci-playground shows up without a restart.
 * `text` is the knowledge base's ranking helpers (kidsKb.text), so museum hits and cards rank the same way.
 */
export function createPlaygroundIndex(root, baseUrl, { normalize, queryTerms, scoreFields, snippet }) {
  let cached = null;
  let stamp = '';
  const data = () => {
    const now = signature(root);
    if (!cached || now !== stamp) { cached = loadPlayground(root); stamp = now; }
    return cached;
  };
  const gameUrl = (id) => `${baseUrl}#/g/${id}`;
  const hallUrl = (id) => `${baseUrl}#/c/${id}`;
  const hallTitle = (id) => data().halls.find((hall) => hall.id === id)?.title ?? id;

  return {
    root,
    baseUrl,
    gameUrl,
    halls() {
      const { halls, games, cards, talks } = data();
      return halls.map((hall) => ({
        ...hall, url: hallUrl(hall.id),
        games: games.filter((game) => game.hall === hall.id).map((game) => ({ id: game.id, title: game.title, emoji: game.emoji })),
        home_labs: cards.filter((card) => card.hall === hall.id).length,
        talks: talks.filter((talk) => talk.hall === hall.id).length,
      }));
    },
    game(id) {
      return data().games.find((game) => game.id === id) ?? null;
    },
    search(query, { hall, kind, limit = 8 } = {}) {
      const { halls, games, cards, talks } = data();
      if (hall && !halls.some((item) => item.id === hall)) throw new Error(`没有这个展馆：${hall}。可用的有：${halls.map((item) => `${item.id}（${item.title}）`).join('、')}。`);
      const terms = queryTerms(query);
      const hits = [];
      const consider = (item, fields, body) => {
        if (hall && item.hall !== hall) return;
        if (kind && item.kind !== kind) return;
        const score = scoreFields(fields, terms);
        if (score > 0) hits.push({ ...item, score: Math.round(score * 10) / 10, snippet: snippet(body, terms) });
      };
      for (const game of games) {
        consider({ kind: 'game', id: game.id, hall: game.hall, hall_title: hallTitle(game.hall), title: `${game.emoji} ${game.title}`, tag: game.tag, url: gameUrl(game.id) }, [
          { text: normalize(`${game.title} ${game.id}`), weight: 12, phrase: 20 },
          { text: normalize(game.tag), weight: 6 },
          { text: normalize(`${game.blurb} ${hallTitle(game.hall)}`), weight: 3, phrase: 6 },
        ], game.blurb);
      }
      for (const card of cards) {
        const game = games.find((item) => item.id === card.related_game);
        consider({ kind: 'home_lab', id: card.id, hall: card.hall, hall_title: hallTitle(card.hall), title: `${card.emoji} ${card.title}`,
          scientist: `${card.scientist}（${card.era}）`, home_lab: card.home_lab, related_game: game ? `${game.emoji} ${game.title}` : card.related_game,
          url: game ? gameUrl(game.id) : hallUrl(card.hall) }, [
          { text: normalize(`${card.title} ${card.scientist}`), weight: 10, phrase: 16 },
          { text: normalize(card.home_lab), weight: 5, phrase: 8 },
          { text: normalize(card.story), weight: 2, phrase: 4 },
        ], `${card.home_lab} ${card.story}`);
      }
      for (const talk of talks) {
        const dialogue = talk.turns.map((turn) => `${turn.nian} ${turn.dad}`).join(' ');
        consider({ kind: 'talk', id: `${talk.hall}:${talk.title}`, hall: talk.hall, hall_title: hallTitle(talk.hall), title: `${talk.emoji} ${talk.title}`,
          turns: talk.turns, wrap: talk.wrap, url: hallUrl(talk.hall) }, [
          { text: normalize(talk.title), weight: 10, phrase: 16 },
          { text: normalize(`${dialogue} ${talk.wrap}`), weight: 2, phrase: 4 },
        ], `${dialogue} ${talk.wrap}`);
      }
      hits.sort((a, b) => b.score - a.score);
      return { total: hits.length, items: hits.slice(0, limit) };
    },
  };
}
