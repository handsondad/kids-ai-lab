# TOOLS.md - 本地知识库说明

这里记录的是这套 AI 学习知识库的本地结构和使用约定。

## 关键路径

- 知识库根目录：当前目录
- 配置包说明：`../README.md`
- 接入说明：`../AGENT_INTEGRATION.md`
- 总览入口：`../../README.md`
- 受控词表：`taxonomy/taxonomy.md`

## 内容目录

- `topics/`：AI 主题与概念卡
- `tools/`：AI 工具与平台卡
- `events/`：关键论文、模型发布、产品与行业事件卡
- `collections/`：专题学习包与学习路径
- `sources/notes/`：来源摘要与结构化中间层
- `sources/books/`：来源书籍卡
- `sources/papers/`：来源论文卡
- `sources/articles/`：来源文章卡
- `_templates/`：新建文件时参考，不作为答案来源

## 写回约定

- 新输入先落到来源卡和来源笔记
- 再创建对应的 `topic_card`、`tool_card`、`event_card`
- 文件命名遵循 `book-0001-short-slug.md`、`paper-0001-short-slug.md`、`article-0001-short-slug.md`、`note-0001-short-slug.md`、`topic-0001-short-slug.md`、`tool-0001-short-slug.md`、`event-0001-short-slug.md`、`collection-0001-short-slug.md`
- 文件状态只用 `draft`、`reviewed`、`published`

## 配置约定

- 不依赖额外数据库也能直接工作
- 先保证 Markdown 结构稳定，再决定是否扩展索引或自动化