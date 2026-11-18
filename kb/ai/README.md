# 趣味 AI 知识库（kb/ai）

这个目录是一套以 Markdown 为主的 AI 学习知识库和素材库。
它同时服务四个目标：

- 便于长期沉淀 AI 主题、工具、事件和学习线索
- 便于把论文、书籍、文章等输入拆成结构化卡片
- 便于直接在 chat 里基于本地知识库完成学习、复盘和写回
- 便于逐步扩展为更稳定的检索 / RAG 工作区

下文所有路径都相对 `kb/ai/`。

## 当前推荐入口

先看两张指南卡：

1. [guide-0001 当前学习导航](guides/guide-0001-learning-paths.md)：按学习目标挑路径（入门、Agent 系统、模型内部执行、前沿进展、编程工具、多模态、趋势、科研自动化）
2. [guide-0002 Agent 课程式学习地图](guides/guide-0002-agent-learning-map.md)：入门 / 进阶 / 前沿三段式课程

如果主要在学 Agent 系统设计，接着看：

1. [collection-0003 Agent 系统设计总览](collections/collection-0003-agent-system-design-overview.md)
2. [topic-0002 Harness Engineering](topics/agents/topic-0002-harness-engineering.md)
3. [topic-0006 Agent 自验证与 Trace 优化](topics/agents/topic-0006-agent-self-verification-and-trace-optimization.md)

如果主要在看模型内部执行能力，再接着看：

1. [topic-0003 Tool Use 与 In-Model Execution 的区别](topics/architecture/topic-0003-tool-use-vs-in-model-execution.md)
2. [topic-0005 2D Attention 与 Fast Path](topics/architecture/topic-0005-2d-attention-fast-path.md)

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 主题理解、工具理解、事件背景和来源摘要分开存放。
3. 所有结论尽量保留来源链路，方便追溯和继续拆分。
4. 先沉淀结构化摘要，再做主题卡、工具卡、事件卡和合集卡。
5. 通过结构化转述而非大段原文摘录，降低版权风险。

## 目录结构

```text
kb/ai/
  README.md            给人看的库说明（本文件）
  AGENTS.md            给 AI Agent 看的规则
  _templates/          各类卡片模板（不是答案来源）
  taxonomy/
    taxonomy.md        受控词表
  guides/              指南卡：学习导航、课程地图
  collections/         合集卡：专题学习包
  topics/              主题卡，按主题簇分子目录
    agents/  architecture/  eval_and_safety/  learning_paths/
    models/  rag_and_data/  serving_and_ops/  tools/  trends/
  tools/               工具卡，按工具类别分子目录
    agent_frameworks/  ai_audio_tools/  ai_image_tools/  ai_programming_tools/
    ai_video_tools/  autonomous_agents/  code_execution/  data_analysis/
    model_playgrounds/  model_serving/  observability/  security/
  events/              事件卡
  sources/
    articles/          来源文章卡
    papers/            来源论文卡
    notes/             来源笔记卡
```

目前还没有书籍来源卡；需要时新建 `sources/books/`，用 `_templates/source_book_template.md`。

## 知识单元类型

| 类型 | 什么时候建 | 目录 | 模板 |
| --- | --- | --- | --- |
| 来源书籍卡 | 记录 AI 书籍信息、阅读进度和可拆方向 | `sources/books/` | [source_book_template.md](_templates/source_book_template.md) |
| 来源论文卡 | 记录论文元数据、核心问题、方法、结论和局限 | `sources/papers/` | [source_paper_template.md](_templates/source_paper_template.md) |
| 来源文章卡 | 博客、访谈、课程文章、综述或产品说明的结构化摘要 | `sources/articles/` | [source_article_template.md](_templates/source_article_template.md) |
| 来源笔记卡 | 把一章、一篇论文 / 文章或一组输入转成便于拆卡的中间层摘要 | `sources/notes/` | [source_note_template.md](_templates/source_note_template.md) |
| 主题卡 | 回答“某个 AI 概念是什么、为什么重要、和什么相关”的核心检索单元 | `topics/<主题簇>/` | [topic_card_template.md](_templates/topic_card_template.md) |
| 工具卡 | 回答“某个 AI 工具做什么、适合什么场景、怎么选” | `tools/<工具类别>/` | [tool_card_template.md](_templates/tool_card_template.md) |
| 事件卡 | 回答“某篇关键论文、模型发布、平台升级、政策变化为什么重要” | `events/` | [event_card_template.md](_templates/event_card_template.md) |
| 合集卡 | 把多张主题 / 工具 / 事件卡打包成一条学习路径或一个专题答案 | `collections/` | [collection_template.md](_templates/collection_template.md) |
| 指南卡 | 按学习目标或阶段给出“先看哪几张卡”的导航，不承载知识点本身 | `guides/` | [guide_template.md](_templates/guide_template.md) |

## 推荐写作流程

1. 在 `sources/books/`、`sources/papers/` 或 `sources/articles/` 下创建来源卡。
2. 对每个值得保留的输入，在 `sources/notes/` 下创建来源笔记卡。
3. 把稳定可复用的知识拆成 `topics/`、`tools/`、`events/` 下的卡片。
4. 相关卡片积累到一定数量后，再创建 `collections/` 中的合集卡；需要跨专题导航时更新 `guides/`。

## 分类策略

只保留两层分类：

1. 文件夹分类
   - 第一维：内容类型，例如 `topics/`、`tools/`、`events/`
   - 第二维：主题簇或工具类别，例如 `architecture/`、`models/`、`serving_and_ops/`、`model_playgrounds/`
2. 元数据分类
   - 知识领域 `topic_clusters`
   - 学习层级 `learning_level`
   - 工具类别 `tool_category`
   - 事件类型 `event_type`
   - 能力标签 `capabilities`
   - 检索别名 `aliases` / `search_terms`

受控词表见 [taxonomy/taxonomy.md](taxonomy/taxonomy.md)。需要新标签时先加进词表再用。

## 编写规则

### 主题卡负责回答“这是什么”

优先说明：核心定义、为什么重要、关键机制、与其他主题的关系、常见误区、下一步学习建议。

### 工具卡负责回答“它能帮我做什么”

优先说明：适用场景、核心能力、上手路径、选择边界、和其他工具的比较线索。

### 事件卡负责回答“为什么值得关注”

优先说明：事件本身发生了什么、它改变了什么、影响了哪些主题或工具、后续还值得跟进什么。

### 保留来源链路

每张主题卡、工具卡、事件卡都应通过 `source_refs` 指向来源笔记或来源卡。没有真实来源的人工归纳，来源性质写成 `manual_curation`。

### 避免大段原文摘录

对于来源于论文、书籍、文章的内容：

- 保留书目 / 链接信息
- 保留页码或章节范围
- 用自己的话总结
- 只在绝对必要时保留极短引文

## 文件命名规则

推荐模式：

- `book-0001-short-slug.md`
- `paper-0001-short-slug.md`
- `article-0001-short-slug.md`
- `note-0001-short-slug.md`
- `topic-0001-short-slug.md`
- `tool-0001-short-slug.md`
- `event-0001-short-slug.md`
- `collection-0001-short-slug.md`
- `guide-0001-short-slug.md`

即使正文是中文，文件名也使用 ASCII。稳定 ID 比“好看文件名”更重要；同一前缀下 ID 不要重复。

## 状态规则

只使用三种状态：

- `draft`：草稿或待补充来源
- `reviewed`：可用且元数据完整
- `published`：未来如需对外发布时使用

## 质量检查清单（提升到 reviewed 前）

- frontmatter 字段齐全，`doc_type`、`id` 与文件名一致，ID 未与已有卡片重复
- 标签取自 `taxonomy/taxonomy.md`
- `source_refs` 指向真实存在的来源卡或来源笔记；人工归纳已标 `manual_curation`
- 论文结论、发布日期、作者、产品能力都能在来源里找到，没有猜测当事实
- 正文按对应卡片类型的“编写规则”覆盖了关键小节
- 没有大段原文摘录
- `aliases` / `search_terms` 写了学习者真实会用的问法

## 在 DSH 里使用

这个库在 DeepSeek Harness（DSH）的「知识库模式」里可直接检索和维护：

- 检索与阅读：`kb_search`、`kb_read`，查卡片之间的引用关系用 `kb_links`
- 写卡前先用 `kb_schema` 查对应模板、下一个可用 id 和建议路径；写完用 `kb_check` 校验
- Agent 在本库的回答与写回规则见同目录 [AGENTS.md](AGENTS.md)
- 全库共通规范见 [../README.md](../README.md)

## 跨库关联

卡片可以用 `related:` 字段引用其他库的卡片，写法是 `库id/卡片id`；同库引用仍可只写 id。例如：

```yaml
# topics/agents/topic-0006-agent-self-verification-and-trace-optimization.md
related:
  - topic-0002                 # 同库：Harness Engineering
  - science/topic-0025         # 科学库：科学解释、证据与可检验性
```

```yaml
# topics/eval_and_safety/topic-0013-eval-dataset-governance-and-drift-control.md
related:
  - science/topic-0001         # 科学库：观察、变量与证据（变量控制思路）
```

以上只是写法示例，并没有真的写进这些卡片。

## 适合直接在 chat 中问的问题

- Transformer 到底解决了什么问题
- RAG、微调、提示工程分别适合什么场景
- 我现在学 agent，需要先补哪些基础
- Claude Code、Cursor、Copilot 这类工具分别适合什么工作流
- 某篇论文值得先读方法、实验还是结论
- 把这篇文章先整理成来源笔记，再拆成一张主题卡和一张工具卡
