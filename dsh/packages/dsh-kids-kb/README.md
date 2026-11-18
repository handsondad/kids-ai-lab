# dsh-kids-kb

kids-ai-lab 知识库（仓库里的 `kb/`）的 DSH 插件。所有模式共用它：「知识库模式」用它整理和扩充知识库，「实验模式」和以后新增的模式用它查资料。包没有运行时依赖，只用 Node 24 自带模块。卡片格式和规则见 `kb/README.md`。

## 三个入口

| 入口 | 挂在哪 | 作用 |
| --- | --- | --- |
| `@kids-ai-lab/dsh-kids-kb`（`src/settings.js`） | 宿主行 `kids-kb` | 「知识库配置」：`kbRoot` 指向 `kb/`。用 `ctx.provide('kidsKb')` 提供共享服务：`index()`（知识库索引）、`text`（检索打分函数，别的包用它给自己的目录排序）、`configured()` |
| `@kids-ai-lab/dsh-kids-kb/tools`（`src/tools.js`） | 某个 preset 的 `plugins` 里 | 知识库工具和 skill。配置：`maintain`（`true` 时加 `kb_schema`、`kb_check` 和三个维护 skill）、`skillLibraries`（注册哪些库的 skill，默认全部）、`skills: false`（不注册 skill）、`kbRoot`（覆盖宿主配置） |
| `@kids-ai-lab/dsh-kids-kb/lib`（`src/lib.js`） | 脚本 | 不经过 DSH 直接用索引、校验、frontmatter 解析 |

## 工具

| 工具 | 说明 |
| --- | --- |
| `kb_libraries` | 列出各库：id、名称、用途、卡片数量和类型 |
| `kb_search` | 中英文检索（中文按双字切分），可按库、`doc_type`、年龄、时长、最高安全等级筛选；三种年龄写法统一换算成岁；同样相关时 published / reviewed 排在 draft 前 |
| `kb_read` | 按 ref（`库id/卡片id`）、id 或 `kb/` 下的路径读全文，30000 字一页；附带它引用的卡和引用它的卡 |
| `kb_links` | 一张卡的出链和反向链接；`suggest: true` 时从其他库找年龄相符的候选关联 |
| `kb_schema` | 维护：某库某类型的模板、下一个编号、存放目录（已有子目录）、文件路径、必填字段和引用字段；提醒会话目录是否包含知识库 |
| `kb_check` | 维护：按 `kb/README.md` 校验全部、某个库或指定文件；错误和提醒分开 |

## Skill

- `kb-<库id>`：`kb/<库id>/AGENTS.md` 的内容。
- `kb/<库id>/skills/*.md`：frontmatter 的 `name`、`description`、`when_to_use` 加正文。
- 维护模式另有 `kb-contribute`、`kb-ingest-source`、`kb-link`（`src/skills.js`）。

skill 在插件加载时读取，改了要重启 DSH；正文超过 7800 字会截断并注明完整内容的位置。

## 校验 CLI

```powershell
node dsh/packages/dsh-kids-kb/bin/kb-check.js [kbRoot] [--library id] [--warnings] [--json]
```

默认检查仓库里的 `kb/`，有错误时退出码为 1。

## 测试

`node --test tests/*.test.js`（不需要 `npm install`）。最后一个测试会用真实的 `kb/` 跑检索、校验和 skill 注册。设置 `KIDS_LAB_DSH_PACKAGE` 为已安装的 `@deepseek-ai/dsh` 包目录，会额外在真实 cordis 运行时里加载两行并校验工具参数。
