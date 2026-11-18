# 知识库（kb/）

孩子的 AI 实验室的全部知识都在这里：六个库，每个库一个目录，卡片是带 YAML frontmatter 的 Markdown。DSH 的插件 `@kids-ai-lab/dsh-kids-kb`（`dsh/packages/dsh-kids-kb`）把它变成检索、阅读、关联、校验工具和 skill，任何 DSH 模式都可以挂上；「实验模式」用它查资料，「知识库模式」用它整理和扩充。

| 库 id | 名称 | 主要内容 | 年龄写法 |
| --- | --- | --- | --- |
| `science` | 趣味科学实验库 | 实验卡、科学主题卡、实验合集 | `age_range: {min, max}`（岁） |
| `games` | 亲子游戏知识库 | 按年龄段和能力分的亲子游戏卡 | `age_min_months` / `age_max_months` |
| `psychology` | 儿童心理学知识库 | 情境支持卡、阶段卡 | `age_stage` 标签 |
| `language` | 语言发展知识库 | 语言练习卡、发展阶段卡 | `age_stage` 标签 |
| `ai` | 趣味AI知识库 | AI 主题卡、工具卡、事件卡、学习指南 | 不按年龄 |
| `wonder` | 孩子的奇妙视界 | 回答孩子“为什么”的主题笔记和讲稿 | `age_stages` 标签 |

## 一个库的目录

```
kb/<库id>/
  library.json        这个库是什么、什么时候用、有哪些卡片类型（见下文）
  AGENTS.md           这个库的规则：怎么查、怎么回答、怎么写回。注册成 skill kb-<库id>
  README.md           给人看的介绍
  skills/*.md         可选：这个库额外的 skill，一个文件一个
  _templates/         卡片模板
  taxonomy/           可选：受控词表
  <内容目录>/         卡片，按 library.json 里的 folder 组织
```

以 `_` 或 `.` 开头的目录、`skills/`、`taxonomy/`、`_templates/`，以及 `README.md`、`AGENTS.md` 都不是卡片，不进索引。不是卡片的工作记录放进 `_reports/` 这类以 `_` 开头的目录。

## 卡片

```yaml
---
doc_type: game_card          # 必填，必须是 library.json 里声明的类型
id: game-0261-mirror-faces   # 必填，<前缀>-<四位编号>[-<英文 slug>]，库内唯一
status: draft                # 必填，draft / reviewed / published
title_zh: 镜子表情游戏
source_refs:                 # 同库引用：写 id
  - note-0012
related:                     # 跨库关联：写 库id/卡片id
  - psychology/support-0012
  - language/practice-0007
last_reviewed: 2026-11-17
---
```

- **文件名**以 id 开头：`<id>-<slug>.md`（id 里已经带 slug 时就是 `<id>.md`）。目录名和文件名只用小写英文、数字、连字符和下划线。
- **编号**一旦被引用就不再改。新编号用 `kb_schema` 拿，不要自己数。
- **status**：新卡一律 `draft`；人工核对过内容和来源改成 `reviewed`；可以直接给家长用的改成 `published`。同样相关时，检索把 published / reviewed 排在 draft 前面。
- **各类型的必填字段、id 前缀和存放目录**在各库的 `library.json` 里，模板在 `_templates/`。

## 引用和关联

- 引用字段：`source_refs`、`source_ref`、`source_book`、`derived_cards`、`derived_games`、`included_cards`、`included_games`、`prerequisites`、`related_tools`、`related_topics`、`related`（完整列表在 `schema.json` 的 `ref_fields`）。
- 值写 id 时在本库里找；写 `库id/卡片id` 时到那个库里找。id 可以只写到编号（`note-0012`），只要在库里唯一。
- `related:` 专门用来跨库关联，里面每一项都必须能找到，否则 `kb_check` 报错。其他字段里不像 id 的值（例如 `manual_curation`）不算引用。
- 反向链接不用写：索引自动算出“被谁引用”，`kb_read` 和 `kb_links` 都会显示。
- 正文里的 Markdown 链接写相对路径（`../topics/x.md`），不写绝对路径。

典型链路：来源卡（`sources/books|articles|papers/`）→ 来源笔记（`sources/notes/`，`source_book`/`source_ref` 指回来源卡，`derived_cards` 列出拆出的卡）→ 核心卡（`source_refs` 指向来源笔记）→ 合集（`included_cards`）→ 跨库 `related`。

## 共通规则

- 不伪造来源、页码、研究结论、数据或实验结果。没有真实来源时写 `source_kind: manual_curation`，明确是人工整理。
- 用自己的话写，不整段复制原文；网上的材料写明 URL 和读取日期。
- 一张卡只讲一个可以独立回答问题的单元；先查重，已经有就改那张。
- 涉及孩子安全（火、热、刀具、化学品、电池、小零件、窒息）时写清哪一步由大人完成。
- 不在卡片里记录孩子的姓名、学校、照片等个人信息。

## 校验

```powershell
node dsh/packages/dsh-kids-kb/bin/kb-check.js                 # 全部；有错误时退出码 1
node dsh/packages/dsh-kids-kb/bin/kb-check.js --library games --warnings
```

错误（frontmatter、id、文件名、重复编号、未知类型、找不到的引用、skill 文件格式）必须为 0；提醒（缺少类型必填字段、目录不符、正文坏链接）是审核前要补的。DSH 里对应的工具是 `kb_check`。

## 扩充

怎么加卡片、加卡片类型、加一个新库、加 skill、加工具或新模式，见仓库根目录的 `AGENTS.md`。
