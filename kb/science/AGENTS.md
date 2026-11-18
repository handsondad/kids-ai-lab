# 趣味科学实验库（kb/science）

这个库用来解释科学概念和现象、推荐和设计可动手的科学实验，并把论文、文章、书籍和人工笔记拆成来源笔记、主题卡和实验卡写回。服务家庭亲子和课堂科学启蒙。事实来源以库里的 Markdown 卡片为准：不要把库里没有的内容说成“已有依据”，不伪造论文、实验结论、数据或来源页码，不把推测包装成事实。共通规范见 `../README.md`，受控词表见 `taxonomy/taxonomy.md`。

## 目录与卡片

| 目录 | doc_type | 文件名模式 | 用途 |
| --- | --- | --- | --- |
| `topics/<主题簇>/` | `topic_card` | `topic-NNNN-slug.md` | 概念是什么、为什么会这样 |
| `experiments/<实验方向>/` | `experiment_card` | `experiment-NNNN-slug.md` | 怎么做、会看到什么、原理、安全 |
| `collections/` | `collection` | `collection-NNNN-slug.md` | 专题路线、任务卡、导航 |
| `sources/notes/` | `source_note` | `note-NNNN-slug.md` | 来源的结构化摘要和可拆方向 |
| `sources/articles/` | `source_article` | `article-NNNN-slug.md` | 文章来源卡 |
| `sources/papers/` | `source_paper` | `paper-NNNN-slug.md` | 论文来源卡（按需建目录） |
| `sources/books/` | `source_book` | `book-NNNN-slug.md` | 书籍来源卡（按需建目录） |

主题簇文件夹：foundations、physics、chemistry、biology、earth_space。实验方向文件夹：earth_space、electricity_magnets、environment、forces_motion、light_sound、materials_reactions、plants_life、scientific_method、simple_machines、thermal_energy、weather_water。`_templates/` 只用于写卡，不是答案来源。

## 回答时

查找优先级：
- 问“这个概念是什么”或“为什么会这样”：`topics/` → `sources/notes/` → `experiments/` → `sources/papers/`、`sources/articles/`、`sources/books/`
- 问“可以做什么实验”：`experiments/` → `collections/` → `topics/` → `sources/notes/`

回答原则：
- 默认中文；直接、清楚、可执行，多讲观察、步骤、变量和证据，少讲空泛口号。
- 优先用 `reviewed` / `published` 内容；用户主动要草案、实验思路或拆解骨架时才用 `draft`。需要可追溯时给出卡片 ref 或 `source_refs`。
- 要实验方案时先给实验卡（可执行、可观察、材料清晰、风险可控），再补原理；要概念解释时先给主题卡。
- 库里没有完全匹配的内容时，可以基于已有主题卡、来源笔记和实验模式整理，但必须明确标注“基于现有知识库模式整理的草案”。
- 安全提醒必须有：说明卡片的 `safety_level`（low/medium/high）和 `supervision_level`（independent 可独立做 / guided 需大人在旁指导 / close_supervision 需大人全程近距离看护）。涉及明火、高温或热水、刀具和尖锐物、强酸强碱等化学品、电源或纽扣电池等步骤，要明确写“由大人操作”。
- 不提供明显危险、不可控或缺乏安全边界的实验；按孩子年龄降低难度或换更安全的材料。

回答结构：
- 解释概念：一句话定义 → 核心现象或机制 → 为什么重要 → 常见误解 → 可关联实验 → 来源说明
- 推荐或设计实验：适用对象或场景 → 准备材料 → 操作步骤 → 预期观察结果 → 科学原理 → 安全提醒 → 来源说明

澄清策略：缺信息时只补问最关键的一个，顺序为：目标概念或主题 → 对象年龄段 → 材料限制 → 安全限制 → 是否要在家完成。

## 设计新内容

- 先 `kb_search` 找相近的实验卡、主题卡和合集，复用已有结构和变量设计，不另起炉灶。
- 安全与年龄适配优先：先定安全边界和看护等级，再定步骤和材料；优先家用低门槛材料。
- 一个实验只讲一个核心原理；写清要改变的变量和要保持一致的条件。
- 明确区分“预期观察”与“科学原理”，不夸大效果。
- 主题与实验分离：概念放主题卡，操作放实验卡，两者用 `source_refs` 或 `related:` 互相连接。

## 写回

- 用户认可新结论后，优先整理成可写回的卡片，而不是只停在对话里。
- 写回顺序：先来源卡（`sources/books|papers|articles/`）→ 再来源笔记（`sources/notes/`，记录结构化摘要和可拆方向）→ 再拆主题卡和实验卡 → 某主题已有多张卡时再整理或更新 `collections/`。不要直接跳到合集卡。
- 没有真实来源时写 `source_kind: manual_curation`，明确是人工整理，不要伪造成书摘或论文摘要。
- 每张实验卡必须填 `safety_level`、`supervision_level`，并写“安全提醒”和“变量与对照”两节；主题卡和实验卡都要有 `source_refs`。标签只用 taxonomy 里的值，新值先加进词表。
- 新卡一律 `status: draft`。写之前调用 `kb_schema` 拿模板、下一个 id 和建议路径；写完调用 `kb_check`。
- DSH 实验模式的 `lab_save_to_kb` 会在家长确认后，把实验以 `status: draft`、`source_kind: manual_curation` 或 `article_summary` 的实验卡写进 `experiments/<实验方向>/experiment-NNNN-<slug>.md`；这类卡同样要人工审核后才能提升状态。
- 跨库关联写在 `related:`，格式 `库id/卡片id`（如 `games/game-0246`）；同库可只写 id。

## 提升到 reviewed 前

- 一张卡只讲一个概念或一个实验，frontmatter 按模板填全，标签都在 taxonomy 里
- `source_refs` 指向真实存在的卡，无伪造出处、页码、数据，无大段原文
- 实验卡：材料清楚、步骤可照做、预期观察具体、原理正确、变量与对照写明
- 实验卡：`safety_level` / `supervision_level` 与实际风险一致，需大人操作的步骤已标明
- 主题卡写了常见误解，并关联至少一个实验
