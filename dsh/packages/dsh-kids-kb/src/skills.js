import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { parseFrontmatter } from './frontmatter.js';

// Skills come from three places:
//   - the maintenance skills below (知识库模式 only);
//   - kb/<id>/AGENTS.md, registered as `kb-<id>`: the library's own rules for answering and writing back;
//   - kb/<id>/skills/*.md, one skill per file (frontmatter name / description / when_to_use).
// Skill text stays under the tool-result pruner threshold (8192 characters) so it is never cut when loaded.

export const SKILL_LIMIT = 7800;
const NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const runtime = (skill) => ({ source: 'runtime', invocation: { modelInvocable: true, userInvocable: true }, ...skill });

const CONTRIBUTE = runtime({
  name: 'kb-contribute',
  description: '在 kids-ai-lab 知识库里新建或修改一张卡片：找相近卡片、拿模板和编号、按规范写、校验。',
  whenToUse: '用户要把内容写进知识库、补一张卡片、修改卡片字段、把卡片从 draft 提升到 reviewed 时。',
  content: `# 往知识库写一张卡片

知识库在 kids-ai-lab 仓库的 kb/ 下，每个库一个目录（science、games、psychology、language、ai、wonder），共通规范在 kb/README.md，每个库自己的规则是 skill \`kb-<库id>\`（即 kb/<库id>/AGENTS.md）。

## 步骤

1. 先读这个库的规则：加载 skill \`kb-<库id>\`。
2. 查重：\`kb_search\` 用用户的说法搜，\`kb_read\` 读最接近的两三张。已经有同一个单元就改那张，不要再建一张。
3. 取模板和编号：\`kb_schema\`（library、doc_type、slug）。它给出模板、下一个 id、建议路径、必填字段和引用字段。不要自己数编号。
4. 写文件：用文件工具在建议路径创建 \`<id>-<slug>.md\`。frontmatter 按模板填，\`status: draft\`，\`last_reviewed\` 写今天；正文先给答案，再给步骤和依据。
5. 链路：核心卡用 \`source_refs\` 指向来源笔记；来源笔记用 \`source_book\` / \`source_ref\` 指回来源卡，并在 \`derived_cards\`（游戏库是 \`derived_games\`）里列出拆出的卡片。合集用 \`included_cards\`（游戏库是 \`included_games\`）。跨库关联写 \`related:\`，格式 \`库id/卡片id\`（用 skill \`kb-link\`）。
6. 校验：\`kb_check\`（paths 传刚写的文件，路径相对 kb/）。错误必须改完；提醒尽量补齐。
7. 回报：列出新建或修改的文件、各自的 ref，以及还需要人工核对的地方。

## 不要做

- 不伪造来源、页码、研究结论或数据；没有真实来源时写明“人工整理草案”，来源类型用 manual_curation。
- 不把多个不相干的单元塞进一个文件；不用中文或空格做文件名。
- 不把 status 直接写成 reviewed 或 published，除非用户明确要求并且质量清单都满足。
- 不改别人的卡片编号。编号一旦被引用就是稳定的。
- 不在 _templates/、taxonomy/、skills/ 和以 _ 开头的目录里放知识卡。`,
});

const INGEST = runtime({
  name: 'kb-ingest-source',
  description: '把一份新材料（书的章节、文章、论文、网页、人工笔记）拆进知识库：来源卡 → 来源笔记 → 核心卡 → 合集。',
  whenToUse: '用户给了一本书、一篇文章、一个链接或一段笔记，要求整理、提炼或“写进知识库”时。',
  content: `# 把一份材料拆进知识库

1. 判断去哪个库：材料主要回答什么问题？用 \`kb_libraries\` 看各库的用途；一份材料可以拆到多个库，但每张卡只属于一个库。
2. 读规则：加载 skill \`kb-<库id>\`，按它的写回顺序走。
3. 来源卡：书在 sources/books/，文章在 sources/articles/，论文在 sources/papers/。只记书目信息和来源地址，不抄原文。已有同一来源就复用。
4. 来源笔记：sources/notes/ 下一章或一个主题一张。用自己的话写结构化摘要，保留章节和页码；列出可以拆出的方向。
5. 核心卡：把能独立回答一个真实问题的内容拆成卡（游戏卡、实验卡、主题卡、支持卡、练习卡……），每张用 \`source_refs\` 指向来源笔记，笔记的 \`derived_cards\` 反向列出它们。
6. 合集：同一主题、场景或年龄段已经有 3 张以上卡片时，新建或更新合集。
7. 关联：对每张新卡用 \`kb_links\`（suggest: true）看看其他库里有没有该关联的卡，有就写进 \`related:\`。
8. 校验：\`kb_check\` 检查这次写的所有文件，修到没有错误。

每一步都用 \`kb_schema\` 拿模板、编号和路径。网上的材料先用 \`web_fetch\` 读原文再整理，写明来源地址和读取日期；不确定的事实不写，或明确标注待核实。`,
});

const LINK = runtime({
  name: 'kb-link',
  description: '在不同知识库的卡片之间建立关联（related 字段），并检查关联是否成立。',
  whenToUse: '用户想把几个库的内容串起来，或新写一张卡片后想看看其他库里有哪些相关内容时。',
  content: `# 跨库关联

卡片之间的关联都写在 frontmatter 里，索引会自动算出反向链接：

- 同库引用沿用各库原有字段（source_refs、derived_cards、included_cards、prerequisites……），值写 id，例如 \`note-0004\`。
- 跨库关联写在 \`related:\` 列表里，值写 \`库id/卡片id\`，例如 \`psychology/support-0012\`。related 也可以引用同库卡片。
- 只写真正有帮助的关联：家长看完这张卡，下一步很可能需要那张卡。一张卡的 related 一般不超过 5 条。

## 步骤

1. \`kb_links\`（ref，suggest: true）：看这张卡已有的出链、反向链接，以及其他库里的候选卡片。
2. 对每个候选用 \`kb_read\` 读一下，确认确实相关（年龄段一致、主题一致、可以接着用）。
3. 用文件工具在卡片的 frontmatter 里加或改 \`related:\`。两张卡互相关联时，两边都写。
4. \`kb_check\` 检查这两个文件；related 里找不到的引用会报错。

例子：游戏卡「情绪镜子」可以关联 \`psychology/support-…\`（情绪支持）和 \`language/practice-…\`（命名情绪的语言练习）；科学实验卡可以关联 \`wonder/topic-…\`（同一个“为什么”问题的讲法）。`,
});

export const MAINTENANCE_SKILLS = [CONTRIBUTE, INGEST, LINK];

const truncate = (content, more) => (content.length > SKILL_LIMIT ? `${content.slice(0, SKILL_LIMIT)}\n\n…（已截断，完整内容见 ${more}）` : content);

/** Skills defined by the libraries themselves. Problems are returned, not thrown, so one bad file does not hide the rest. */
export function loadLibrarySkills(libraries, { only } = {}) {
  const skills = [];
  const problems = [];
  const names = new Set();
  const push = (skill, where) => {
    if (names.has(skill.name)) { problems.push(`${where}：skill 名 ${skill.name} 和其他 skill 重复，没有注册。`); return; }
    names.add(skill.name);
    skills.push(skill);
  };
  for (const library of libraries) {
    if (only && !only.includes(library.id)) continue;
    const agents = path.join(library.directory, 'AGENTS.md');
    let rules = null;
    try { rules = readFileSync(agents, 'utf8').replace(/^\uFEFF/, ''); } catch { /* listed by kb_check */ }
    if (rules) {
      push(runtime({
        name: `kb-${library.id}`,
        description: `${library.title_zh}（kb/${library.id}）的规则：怎么查、怎么回答、怎么写回。${library.summary}`.slice(0, 300),
        whenToUse: library.when_to_use || `用到${library.title_zh}时。`,
        content: truncate(rules, `kb/${library.id}/AGENTS.md`),
      }), `kb/${library.id}/AGENTS.md`);
    }
    let files = [];
    try { files = readdirSync(path.join(library.directory, 'skills')).filter((name) => name.endsWith('.md')).sort(); } catch { files = []; }
    for (const file of files) {
      const where = `kb/${library.id}/skills/${file}`;
      const { data, body } = parseFrontmatter(readFileSync(path.join(library.directory, 'skills', file), 'utf8'));
      if (typeof data.name !== 'string' || !NAME.test(data.name)) { problems.push(`${where}：frontmatter 的 name 只能用小写字母、数字和连字符。`); continue; }
      if (typeof data.description !== 'string' || !data.description.trim()) { problems.push(`${where}：缺少 description。`); continue; }
      push(runtime({
        name: data.name,
        description: data.description.trim(),
        whenToUse: typeof data.when_to_use === 'string' && data.when_to_use.trim() ? data.when_to_use.trim() : data.description.trim(),
        content: truncate(body.trim(), where),
      }), where);
    }
  }
  return { skills, problems };
}
