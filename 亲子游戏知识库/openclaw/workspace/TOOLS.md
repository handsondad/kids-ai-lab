# TOOLS.md - 本地知识库说明

这里记录的是这套亲子游戏知识库的本地结构和使用约定。

## 关键路径

- 知识库根目录：当前目录
- 配置入口：`../openclaw.json`
- 配置包说明：`../README.md`
- 总览入口：`../../README.md`
- OpenClaw 接入说明：`../OPENCLAW_INTEGRATION.md`
- 受控词表：`taxonomy/taxonomy.md`

## 内容目录

- `games/`：最优先的可回答单元
- `collections/`：针对场景的成套推荐
- `sources/notes/`：来源摘要、章节总结、设计来源笔记
- `sources/books/`：书目信息和提炼进度
- `_templates/`：新建文件时参考，不作为答案来源

## 写回约定

- 新设计如果没有现成来源笔记，先写 `sources/notes/`
- 再创建对应 `game_card`
- 文件命名遵循 `book-0001-short-slug.md`、`note-0001-short-slug.md`、`game-0001-short-slug.md`、`collection-0001-short-slug.md`
- 文件状态只用 `draft`、`reviewed`、`published`

## 配置约定

- 不修改原 `.openclaw` 目录下已有主配置
- 这套知识库的专用配置位于当前目录上一级的 `../` 目录中