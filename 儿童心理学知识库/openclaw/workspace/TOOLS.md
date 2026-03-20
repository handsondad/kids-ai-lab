# TOOLS.md - 本地知识库说明

这里记录的是这套儿童心理学知识库的本地结构和使用约定。

## 关键路径

- 知识库根目录：当前目录
- 配置入口：`../openclaw.json`
- 配置包说明：`../README.md`
- 总览入口：`../../README.md`
- OpenClaw 接入说明：`../OPENCLAW_INTEGRATION.md`
- 受控词表：`taxonomy/taxonomy.md`

## 内容目录

- `stages/`：按年龄组织的发展阶段理解卡
- `supports/`：按场景组织的回应和支持卡
- `collections/`：高频场景下的成套答案
- `sources/notes/`：来源摘要、章节总结、人工整理素材
- `sources/books/`：书目信息和摘录进度
- `_templates/`：新建文件时参考，不作为答案来源

## 写回约定

- 新的书摘先落到 `sources/books/` 和 `sources/notes/`
- 再创建对应的 `stage_card` 或 `support_card`
- 文件命名遵循 `book-0001-short-slug.md`、`note-0001-short-slug.md`、`stage-0001-short-slug.md`、`support-0001-short-slug.md`、`collection-0001-short-slug.md`
- 文件状态只用 `draft`、`reviewed`、`published`

## 配置约定

- 不修改原 `.openclaw` 目录下已有主配置
- 这套知识库的专用配置位于当前目录上一级的 `../` 目录中