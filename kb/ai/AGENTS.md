# 趣味AI知识库（kb/ai）

这是一个 AI 学习、检索、拆解和写回用的 Markdown 知识库：解释 AI 主题、概念和方法，对比工具与工作流，回顾关键论文、模型发布和行业事件，并把新输入拆成结构化卡片写回库里，而不是只停留在聊天里。服务对象是在系统学习 AI、持续建设这套库的学习者。事实来源以库里的 Markdown 卡片为准；不伪造论文结论、发布日期、作者或产品能力，不把猜测包装成事实。默认用中文。共通规范见 `../README.md`。

## 目录与卡片

| 目录 | doc_type | 文件名模式 | 用途 |
| --- | --- | --- | --- |
| `topics/<主题簇>/`（agents、architecture、eval_and_safety、learning_paths、models、rag_and_data、serving_and_ops、tools、trends） | `topic_card` | `topic-NNNN-slug.md` | 概念是什么、为什么重要 |
| `tools/<工具类别>/`（agent_frameworks、ai_audio_tools、ai_image_tools、ai_programming_tools、ai_video_tools、autonomous_agents、code_execution、data_analysis、model_playgrounds、model_serving、observability、security） | `tool_card` | `tool-NNNN-slug.md` | 工具做什么、怎么选 |
| `events/` | `event_card` | `event-NNNN-slug.md` | 论文、发布、行业事件为什么重要 |
| `collections/` | `collection` | `collection-NNNN-slug.md` | 专题学习包 |
| `guides/` | `guide` | `guide-NNNN-slug.md` | 学习导航（guide-0001）、Agent 课程地图（guide-0002） |
| `sources/notes/` | `source_note` | `note-NNNN-slug.md` | 来源摘要，拆卡的中间层 |
| `sources/articles/` | `source_article` | `article-NNNN-slug.md` | 文章、博客、产品说明 |
| `sources/papers/` | `source_paper` | `paper-NNNN-slug.md` | 论文 |
| `sources/books/`（需要时新建） | `source_book` | `book-NNNN-slug.md` | 书籍 |

`taxonomy/taxonomy.md` 是受控词表。`_templates/` 只用于写作，不是答案来源。

## 回答时

查找优先级：

- 问“这个概念是什么”：`topics/` → `sources/notes/` → `events/` → `sources/papers/` → `sources/books/` → `sources/articles/`
- 问“这个工具能做什么 / 怎么选”：`tools/` → `collections/` → `topics/` → `sources/notes/`
- 问“这件事为什么重要”：`events/` → `sources/notes/` → `topics/` → `sources/papers/` → `sources/articles/`
- 问“我该怎么学 / 先看什么”：`guides/` → `collections/` → `topics/learning_paths/`

回答原则：

- 优先用 `reviewed` / `published`；用户主动要草案或结构思路时才用 `draft`
- 先给清晰结论，再补结构和来源；需要可追溯时列出卡片 id 和 `source_refs`
- 库里没有完全匹配的内容时，可以按已有模式整理，但必须标注“基于现有知识库模式整理的草案”
回答结构：

- 主题：一句话定义 → 为什么重要 → 关键机制或组成 → 常见误区 → 与相邻主题的关系 → 下一步学习建议 → 来源说明
- 工具：工具定位 → 适用场景 → 核心能力 → 使用门槛 → 选择边界 → 相关主题 → 来源说明
- 事件：发生了什么 → 为什么重要 → 影响了哪些主题或工具 → 后续值得跟进什么 → 来源说明

澄清策略：目标不清时只补问一个最关键的问题，优先顺序：

1. 想理解概念、工具，还是事件
2. 当前学习层级
3. 只想快速了解，还是要继续拆卡写回
4. 有没有特定输入材料
5. 是否需要形成学习路径

## 设计新内容

- 先用 `kb_search` 找相近的主题 / 工具 / 事件卡和合集，复用已有结构，不重复建卡
- 拆解优先于堆积：新材料先变成结构化笔记，再拆卡，不把库堆成原文片段集合
- 规划学习路径时参考 `guide-0001`、`guide-0002` 的写法：按目标或阶段给出必读卡片、阶段产出和完成标志
- 讲清概念之外，也要指出下一步怎么学

## 写回

写回顺序（根据新论文、书籍或文章）：

1. 来源卡不存在时，先在 `sources/papers/`、`sources/articles/` 或 `sources/books/` 建来源卡
2. 在 `sources/notes/` 写来源笔记：核心问题、主要观点、方法、局限、可拆方向
3. 拆成 `topic_card`、`tool_card` 或 `event_card`，用 `source_refs` 指回来源笔记或来源卡
4. 主题已形成稳定学习路径时，再整理成 `collection`；需要跨专题导航时更新 `guides/`

本库规则：

- 用户认可某个整理结果时，优先沉淀成卡片
- 完成一段学习后，先在 `sources/notes/` 写阶段总结，再拆稳定卡片，需要导航时更新 `collections/` 或 `guide-0002`
- 没有真实来源的人工归纳，`source_kind` / `source_ref` 写 `manual_curation`
- 标签只用 `taxonomy/taxonomy.md` 里的值；确需新值先加进词表
- 新卡一律 `status: draft`
- 写之前调用 `kb_schema` 拿模板、下一个 id 和建议路径；写完调用 `kb_check`
- 跨库关联写在 `related:`，格式 `库id/卡片id`（如 `science/topic-0025`），同库只写 id

## 提升到 reviewed 前

- frontmatter 完整，`doc_type`、`id` 与文件名一致，id 不与已有卡片重复
- 标签来自受控词表
- `source_refs` 指向真实存在的卡片；人工归纳已标 `manual_curation`
- 论文结论、日期、作者、产品能力都能在来源里找到
- 正文覆盖该卡片类型的必备小节（见上面的回答结构）
- 没有大段原文摘录
- `aliases` / `search_terms` 写了学习者真实会用的问法
