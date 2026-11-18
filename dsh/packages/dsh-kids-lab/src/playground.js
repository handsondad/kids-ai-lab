import { createPlaygroundIndex } from './playground-index.js';
import { existingDirectory, integer, kbService, only, optionalText, output, parameters, requiredText, resolveSettings } from './shared.js';

// 科学馆插件：把 sci-playground（科学小游戏大冒险）的互动实验、大师故事 + 居家小实验和「小念问爸爸」问答
// 变成可检索的工具，结果带可以直接点开的线上链接。只读。
export const name = 'kids-lab-playground';
export const inject = ['tools'];

const NOT_CONFIGURED = '在 DSH Profile 的 cordis.patch.yml 里给 kids-lab-settings 填 playgroundRoot（sci-playground 仓库根目录），或重新运行 dsh/scripts/install-kidslab。';
const KINDS = ['game', 'home_lab', 'talk'];
const KIND_LABEL = { game: '互动实验台', home_lab: '大师故事 + 居家小实验', talk: '小念问爸爸' };

const hitMarkdown = (item) => {
  const head = `- **${item.title}** — ${KIND_LABEL[item.kind]} · ${item.hall_title} · [打开](${item.url})`;
  if (item.kind === 'game') return `${head}\n  id \`${item.id}\` · ${item.tag}：${item.snippet}`;
  if (item.kind === 'home_lab') return `${head}\n  ${item.scientist}\n  ${item.home_lab}\n  关联实验台：${item.related_game}`;
  return `${head}\n  ${item.turns.map((turn) => `小念：${turn.nian} 爸爸：${turn.dad}`).join('\n  ')}\n  小念总结：${item.wrap}`;
};

export function createPlaygroundTools(ctx, config = {}) {
  let index = null;
  const playground = () => {
    const settings = resolveSettings(ctx, config);
    const root = existingDirectory(settings.playgroundRoot, 'sci-playground 目录', NOT_CONFIGURED);
    if (!index || index.root !== root || index.baseUrl !== settings.playgroundUrl) index = createPlaygroundIndex(root, settings.playgroundUrl, kbService(ctx).text);
    return index;
  };
  const register = (tool) => ctx.tools.register(tool);

  register({
    name: 'playground_halls',
    description: 'List the halls of the 科学小游戏大冒险 science museum (sci-playground) with every interactive experiment in each, and links that open them in the browser.',
    parameters: parameters({}),
    output: output({ halls: { type: 'array', items: { type: 'object' } } }, (value) => value.halls.map((hall) =>
      `### ${hall.emoji} ${hall.title}（\`${hall.id}\`）· [进馆](${hall.url})\n${hall.blurb}\n${hall.games.map((game) => `${game.emoji} ${game.title} \`${game.id}\``).join('、')}`).join('\n\n')),
    async execute(args) {
      only(args, [], 'playground_halls');
      return { halls: playground().halls() };
    },
  });

  register({
    name: 'playground_search',
    description: 'Search the sci-playground science museum: interactive experiments (kind game, with levels and stars), science-history stories with a home experiment (kind home_lab), and 小念问爸爸 dialogues (kind talk). Use it to give a child an experiment to play on screen, and to borrow the museum\'s plain-language explanations. hall narrows to one hall id from playground_halls. Every hit has a url to share as a markdown link.',
    parameters: parameters({
      q: { type: 'string', description: 'What to look for, in the user\'s words.' },
      hall: { type: 'string', description: 'Hall id, e.g. physics, chemistry, astro.' },
      kind: { type: 'string', enum: KINDS },
      limit: { type: 'integer', description: 'How many hits, 1 to 20 (default 6).' },
    }, ['q']),
    output: output({ items: { type: 'array', items: { type: 'object' } }, total: { type: 'integer' } }, (value) => (value.items.length
      ? [`共命中 ${value.total} 条：`, ...value.items.map(hitMarkdown)].join('\n')
      : '科学馆里没有找到。可以换个说法，或用 playground_halls 看全部实验。')),
    async execute(args) {
      only(args, ['q', 'hall', 'kind', 'limit'], 'playground_search');
      const q = requiredText(args.q, 'q', 200);
      const hall = optionalText(args.hall, 'hall', 40) || undefined;
      if (args.kind !== undefined && !KINDS.includes(args.kind)) throw new Error(`kind 只能是 ${KINDS.join('、')}。`);
      const limit = integer(args.limit, 'limit', { min: 1, max: 20, fallback: 6 });
      return playground().search(q, { hall, kind: args.kind, limit });
    },
  });

  return { dispose() { index = null; } };
}

export function apply(ctx, config = {}) {
  const { dispose } = createPlaygroundTools(ctx, config);
  ctx.on('dispose', dispose);
}
