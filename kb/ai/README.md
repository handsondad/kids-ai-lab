# 趣味 AI 学习库

这个目录是一套以 Markdown 为主的 AI 学习知识库和素材库。
它同时服务四个目标：

- 便于你长期沉淀 AI 主题、工具、事件和学习线索
- 便于把论文、书籍、文章等输入拆成结构化卡片
- 便于后续直接基于 chat 在本地知识库上完成学习、复盘和写回
- 便于逐步扩展为更稳定的 openclaw / RAG 工作区

当前目录主要是知识库入口层。
真正供 chat / openclaw 使用的工作区位于 `./openclaw/workspace/`。

## 当前推荐入口

如果你现在主要在学 OpenClaw 系统，建议先从这几个入口开始：

1. `./openclaw/workspace/LEARNING_PATHS.md`
2. `./openclaw/workspace/AGENT_LEARNING_MAP.md`（课程式：入门 / 进阶 / 前沿）
3. `./openclaw/workspace/collections/collection-0003-openclaw-system-design-overview.md`
4. `./openclaw/workspace/topics/agents/topic-0002-harness-engineering.md`
5. `./openclaw/workspace/topics/agents/topic-0006-openclaw-self-verification-and-trace-optimization.md`

如果你主要在看模型内部执行能力，再接着看：

1. `./openclaw/workspace/topics/architecture/topic-0003-tool-use-vs-in-model-execution.md`
2. `./openclaw/workspace/topics/architecture/topic-0005-2d-attention-fast-path.md`

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 主题理解、工具理解、事件背景和来源摘要分开存放。
3. 所有结论尽量保留来源链路，方便追溯和继续拆分。
4. 先沉淀结构化摘要，再做主题卡、工具卡、事件卡和合集卡。
5. 通过结构化转述而非大段原文摘录，降低版权风险。

## 推荐目录结构

```text
./
  README.md
  openclaw/
    README.md
    OPENCLAW_INTEGRATION.md
    workspace/
      AGENTS.md
      SOUL.md
      IDENTITY.md
      USER.md
      MEMORY.md
      TOOLS.md
      HEARTBEAT.md
      _templates/
        source_book_template.md
        source_paper_template.md
        source_article_template.md
        source_note_template.md
        topic_card_template.md
        tool_card_template.md
        event_card_template.md
        collection_template.md
      taxonomy/
        taxonomy.md
      sources/
        books/
        papers/
        articles/
        notes/
      topics/
      tools/
      events/
      collections/
```

除非特别说明，下文中出现的 `topics/`、`tools/`、`events/`、`collections/`、`sources/`、`taxonomy/`、`_templates/` 等逻辑路径，默认都以 `./openclaw/workspace/` 为基准。

## 知识单元类型

### 1. 来源书籍卡

用于记录 AI 相关书籍的信息、阅读进度和可拆方向。

### 2. 来源论文卡

用于记录论文元数据、核心问题、方法、结论和局限。

### 3. 来源文章卡

用于记录博客、访谈、课程文章、研究综述或产品说明的结构化摘要。

### 4. 来源笔记卡

用于把某一章、某一篇论文、某一篇文章或某个主题的输入，转成便于拆卡的中间层摘要。

### 5. 主题卡

这是回答“某个 AI 概念到底是什么、为什么重要、和什么相关”的核心检索单元。

### 6. 工具卡

这是回答“某个 AI 工具是做什么的、适合什么场景、怎么选”的核心检索单元。

### 7. 事件卡

这是回答“某个关键论文、模型发布、平台升级、政策变化为什么重要”的核心检索单元。

### 8. 合集卡

用于把多个主题卡、工具卡、事件卡打包成一条学习路径或一个专题答案。

## 推荐写作流程

1. 在 `sources/books/`、`sources/papers/` 或 `sources/articles/` 下创建来源卡。
2. 对每个值得保留的输入，在 `sources/notes/` 下创建来源笔记卡。
3. 把稳定可复用的知识拆成 `topics/`、`tools/`、`events/` 下的卡片。
4. 当相关卡片积累到一定数量后，再创建 `collections/` 中的学习合集卡。

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

受控词表见 `./openclaw/workspace/taxonomy/taxonomy.md`。

## 编写规则

### 主题卡负责回答“这是什么”

主题卡优先说明：

- 核心定义
- 为什么重要
- 关键机制
- 与其他主题的关系
- 常见误区
- 下一步学习建议

### 工具卡负责回答“它能帮我做什么”

工具卡优先说明：

- 适用场景
- 核心能力
- 上手路径
- 选择边界
- 和其他工具的比较线索

### 事件卡负责回答“为什么值得关注”

事件卡优先说明：

- 事件本身发生了什么
- 它改变了什么
- 影响了哪些主题或工具
- 后续还值得跟进什么

### 保留来源链路

每张主题卡、工具卡、事件卡都应通过 `source_refs` 指向来源笔记或来源卡。

### 避免大段原文摘录

对于来源于论文、书籍、文章的内容：

- 保留 bibliographic / link 信息
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

即使正文是中文，文件名也建议使用 ASCII。
稳定 ID 比“好看文件名”更重要。

## 状态规则

只使用三种状态：

- `draft`：草稿或待补充来源
- `reviewed`：可用且元数据完整
- `published`：未来如需对外发布时使用

## 适合直接在 chat 中问的问题

- Transformer 到底解决了什么问题
- RAG、微调、提示工程分别适合什么场景
- 我现在学 agent，需要先补哪些基础
- Claude Code、Cursor、Copilot 这类工具分别适合什么工作流
- 某篇论文值得先读方法、实验还是结论
- 把这篇文章先整理成来源笔记，再拆成一张主题卡和一张工具卡