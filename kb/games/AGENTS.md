# 亲子游戏知识库（kb/games）

这个库用于检索、策展、设计和写回 0-3 岁亲子游戏，服务想快速找到“现在就能玩”的游戏的家长和维护这套库的人。事实来源是库里的 Markdown 卡片：库内内容优先，不把库里没有的内容说成“已有依据”，绝不伪造来源、页码或研究依据。下文路径都相对 `kb/games/`；共通规范见 `../README.md`。

## 目录与卡片

| 目录 | doc_type | 文件名模式 | 用途 |
| --- | --- | --- | --- |
| `games/<年龄段>/<能力>/` | `game_card` | `game-0001-short-slug.md` | 最核心的可回答单元：一张卡一个可直接玩的游戏 |
| `collections/` | `collection` | `collection-0001-short-slug.md` | 场景化成套推荐（如雨天、睡前） |
| `sources/notes/` | `source_note` | `note-0001-short-slug.md` | 章节转述摘要、设计来源笔记，解释“为什么有效” |
| `sources/books/` | `source_book` | `book-0001-short-slug.md` | 书目信息和提炼进度 |
| `taxonomy/taxonomy.md` | — | — | 受控词表，写卡时取值依据 |
| `_templates/` | — | `*_template.md` | 写作模板，不是答案来源 |

`games/` 两层目录：
- `age_00_12m/`：attention、emotion、fine_motor、gross_motor、language、sensory、social
- `age_12_24m/`：同上 7 类
- `age_24_36m/`：attention、creativity、emotion、gross_motor、language、math_logic、self_care、sensory、social

卡片跨多个年龄段或能力时，按最主要的适龄段和能力放目录，其余写进 `age_stage`、`skills`。

## 回答时

查找优先级：
- 要“能直接玩的游戏”：`games/` → `collections/` → `sources/notes/`
- 问“为什么有效 / 发展逻辑 / 依据”：`sources/notes/` → `games/` → `sources/books/`
- 要“成套推荐”：`collections/` → `games/`
- 先按年龄、场景、材料、时长等 front matter 过滤，再看正文。

回答原则：
- 默认中文；直接、清楚、可执行，少讲空泛原则，不输出与本库无关的泛泛育儿建议。
- 优先使用 `reviewed` / `published` 内容；只能用到 `draft` 时照常使用，但不要说成已审核结论。
- 答案优先：先给可执行玩法，再补发展价值和来源；用户要“直接能玩的活动”时返回游戏卡，不要长篇理论。
- 适合时引用卡片 `id`、`source_refs` 或来源笔记标题；用户问“依据是什么”时要能指出完整来源链路。
- 库里没有完全匹配的现成内容时，可以基于已有模式设计，但必须明确标注“基于现有知识库模式整理的设计草案”，不能包装成书本或研究结论。
- 不给明显超龄、危险或缺乏安全边界的活动。

推荐或设计游戏时，回答尽量包含：
1. 适龄范围
2. 适用场景
3. 是否需要材料
4. 大致时长
5. 核心发展价值
6. 玩法步骤
7. 引导语或互动提示
8. 安全提醒
9. 来源说明或设计依据

澄清策略：年龄、场景、材料、时长没说清时，只补问一个最关键的问题，优先顺序为 年龄 → 场景 → 材料限制 → 时长限制。

## 设计新内容

1. 先用 `kb_search` 找相近年龄、场景、能力目标的游戏卡和来源笔记。
2. 尽量复用已有模式，不凭空发散。
3. 安全高于新奇：保持可执行、低成本、低材料、年龄适配、安全可控。
4. 说明它为什么适合当前年龄和场景。
5. 用户要求写回时，不直接生成孤立的游戏卡，按下面“写回”顺序来。

## 写回

写回顺序：
1. 有真实书籍内容：先建或更新 `sources/books/` 的书籍卡，再写 `sources/notes/` 的来源笔记（`source_book` 指向书，保留页码范围，自己转述）。
2. 全新设计、没有现成来源笔记可引用：先在 `sources/notes/` 写一张设计来源笔记，记录参考了哪些现有游戏、来源笔记和设计原则。
3. 再写 `game_card`，用 `source_refs` 指向上面的来源笔记；回到来源笔记的 `derived_games` 补上新游戏 id。
4. 最后检查 `collections/`。

本库特有规则：
- 用户补充真实读书内容时，不要只停在 `source_book` / `source_note`；要同步提炼其中可直接执行的活动，尽量在同一轮写成对应的 `game_card`。
- 新增或更新一批 `game_card` 后，主动检查现有 `collections/` 是否要补充；已形成稳定的场景、年龄或主题组合时，新增或更新对应 `collection`（`included_games` 列出游戏 id），不必等用户提醒。
- 一张游戏卡只写一个游戏，不把不相干的游戏塞进同一文件。
- 标签只用 `taxonomy/taxonomy.md` 里的值；确需新值时先加进词表（不能用已有值表达、预计至少 5 张卡会用、对过滤或检索有帮助）。
- 首段先说清是什么游戏、适合几岁、什么场景、核心价值；正文按模板顺序；把家长的多种问法写进 `aliases`、`search_terms`。

通用写回要求：
- 新卡一律 `status: draft`。
- 写之前调用 `kb_schema` 拿模板、下一个 id 和建议路径；写完调用 `kb_check` 校验，有错先修。
- 跨库关联写在 `related:`，格式 `库id/卡片id`，例如 `language/practice-0031`、`psychology/support-0017`；同库引用只写 id。

## 提升到 reviewed 前

逐项确认：
- 年龄范围清晰（`age_min_months`、`age_max_months`、`age_stage` 一致）
- 场景、材料清晰
- 步骤可立即执行
- 需要时有安全提醒，`safety_level` 合理
- `source_refs` 指向真实存在的来源笔记，来源链路完整
- 表达简洁，不重复，没有大段原文
- 别名和搜索词覆盖常见提问方式
- 篇幅适中：游戏卡约 300-900 字，来源笔记约 200-800 字，合集卡约 300-1200 字
