# TOOLS.md - 本地知识库说明

这里记录的是这套趣味科学实验库的本地结构和使用约定。

## 关键路径

- 知识库根目录：当前目录
- 配置包说明：`../README.md`
- 总览入口：`../../README.md`
- Agent 接入说明：`../AGENT_INTEGRATION.md`
- 受控词表：`taxonomy/taxonomy.md`

## 内容目录

- `topics/`：按科学主题组织的主题卡
- `experiments/`：按实验方向组织的实验卡
- `collections/`：高频主题下的成套学习或实验答案
- `sources/notes/`：来源摘要、章节总结、人工整理素材
- `sources/papers/`：论文来源卡
- `sources/articles/`：文章来源卡
- `sources/books/`：书目信息和摘录进度
- `_templates/`：新建文件时参考，不作为答案来源

## 写回约定

- 新的来源先落到 `sources/books/`、`sources/papers/`、`sources/articles/` 和 `sources/notes/`
- 再创建对应的 `topic_card` 或 `experiment_card`
- 文件命名遵循 `book-0001-short-slug.md`、`paper-0001-short-slug.md`、`article-0001-short-slug.md`、`note-0001-short-slug.md`、`topic-0001-short-slug.md`、`experiment-0001-short-slug.md`、`collection-0001-short-slug.md`
- 文件状态只用 `draft`、`reviewed`、`published`

## 配置约定

- 不修改已有主配置
- 这套知识库的专用工作区位于当前目录