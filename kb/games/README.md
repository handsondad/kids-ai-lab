# 亲子游戏知识库（kb/games）

这是一个以 Markdown 为主的亲子游戏知识库，库 id 为 `games`。
它同时服务两个目标：

- 便于人工长期维护
- 便于在 DeepSeek Harness（DSH）的知识库模式或其他检索系统里直接检索、回答和写回

下文所有路径都相对本目录 `kb/games/`。

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 每个游戏都可以追溯到来源笔记和来源书籍。
3. 标签使用受控分类，不走自由扩散式命名。
4. 内容天然适合检索：短、直接、答案优先。
5. 通过结构化摘要而非大段原文摘录，降低版权风险。

## 目录结构

```text
kb/games/
  README.md            # 本文件，给人看的库说明
  AGENTS.md            # 给 AI Agent 看的规则（DSH 中注册为 skill kb-games）
  _templates/          # 写作模板，不是答案来源
    source_book_template.md
    source_note_template.md
    game_card_template.md
    collection_template.md
  taxonomy/
    taxonomy.md        # 受控词表
  sources/
    books/             # book-*.md 来源书籍卡
    notes/             # note-*.md 来源笔记卡（含设计来源笔记）
  games/               # game-*.md 游戏卡：年龄段/能力 两层目录
    age_00_12m/
      attention/  emotion/  fine_motor/  gross_motor/
      language/   sensory/  social/
    age_12_24m/
      attention/  emotion/  fine_motor/  gross_motor/
      language/   sensory/  social/
    age_24_36m/
      attention/  creativity/  emotion/  gross_motor/  language/
      math_logic/ self_care/   sensory/  social/
  collections/         # collection-*.md 场景化合集卡
```

库已进入真实内容阶段，不保留示例文件。新增内容直接使用真实书籍、真实来源笔记和真实游戏卡。

## 知识单元类型

### 1. 来源书籍卡（`source_book`，放在 `sources/books/`）

用于记录书目信息和提炼进度。适合在这些时候创建：

- 开始阅读一本新的育儿或亲子互动书
- 想记录哪些章节值得提炼
- 想建立清晰的来源链路，方便后续回看

模板：[_templates/source_book_template.md](_templates/source_book_template.md)

### 2. 来源笔记卡（`source_note`，放在 `sources/notes/`）

用于记录对某一章、某一节或某个主题的自主转述摘要，也用于记录新游戏的设计依据（设计来源笔记）。适合在这些时候创建：

- 刚读完一个章节
- 希望保留页码和出处信息
- 一个章节可能会拆出多个游戏卡片
- 要写回一个没有现成来源可引用的全新游戏设计

模板：[_templates/source_note_template.md](_templates/source_note_template.md)

### 3. 游戏卡（`game_card`，放在 `games/<年龄段>/<能力>/`）

这是最核心的检索单元。适合在这些时候创建：

- 一个游戏可以被独立描述清楚
- 它有明确的年龄段、场景和能力目标
- 希望模型直接拿它来回答用户问题

模板：[_templates/game_card_template.md](_templates/game_card_template.md)

### 4. 合集卡（`collection`，放在 `collections/`）

用于把多个游戏打包成一个场景化答案。适合在这些时候创建：

- 想预制“雨天游戏”“睡前 5 分钟游戏”这类答案
- 希望对高频需求做提前编排

模板：[_templates/collection_template.md](_templates/collection_template.md)

## 分类策略

只保留两层分类：

1. 文件夹分类
   - 第一维：年龄阶段（`age_00_12m`、`age_12_24m`、`age_24_36m`）
   - 第二维：核心能力（`attention`、`emotion`、`fine_motor` 等）
2. 元数据分类
   - 年龄 `age_min_months` / `age_max_months` / `age_stage`
   - 能力 `skills`
   - 场景 `scenes`
   - 材料 `materials`
   - 时长 `duration_min`
   - 能量等级 `energy_level`
   - 难度 `difficulty`
   - 大人投入 `adult_effort`
   - 安全等级 `safety_level`
   - 别名和搜索词 `aliases` / `search_terms`

一张卡跨多个年龄段或能力时，文件夹按它最主要的适龄段和能力放，其余写进 `age_stage`、`skills`。

这样拆分的好处是：文件夹稳定、易浏览；元数据灵活、易过滤；避免目录树越来越深，最后无法维护。

受控词表见 [taxonomy/taxonomy.md](taxonomy/taxonomy.md)。需要新标签时先加进词表，再广泛使用。

## 推荐写作流程

1. 在 `sources/books/` 下创建一本来源书籍卡。
2. 对每个有价值的章节或主题，在 `sources/notes/` 下创建来源笔记卡。
3. 把可复用的玩法拆成原子化游戏卡，放入 `games/` 对应的年龄段/能力目录。
4. 新增或更新一批游戏卡后，检查 `collections/` 是否需要补充；出现稳定主题时新增或更新合集卡。
5. 当元数据补全且措辞清晰后，把状态从 `draft` 提升到 `reviewed`。

## 编写规则

### 每张游戏卡都要原子化

每张游戏卡应当把一个真实问题回答好，例如：

- 2 岁孩子在家里、没有玩具时可以玩什么
- 睡前 10 分钟适合什么语言互动游戏
- 哪种低能量亲子游戏适合练习轮流等待

不要把多个互不相干的游戏塞进同一个文件。

### 把答案放在最前面

首段应尽快说明：这是什么游戏、适合什么年龄、适合什么场景、核心发展价值是什么。这会同时提升人工阅读体验和检索效果。

正文尽量保持模板里的顺序：游戏简介、适用场景、准备材料、玩法步骤、引导话术、观察点、难度变体、安全提示、检索提示、来源说明。

### 保留来源链路

- 每张游戏卡都应通过 `source_refs` 指向来源笔记。
- 每张来源笔记都应通过 `source_book` 指向来源书籍，并在 `derived_games` 里列出拆出的游戏卡。

如果是基于现有知识库模式推导出的新游戏设计，也不要跳过这条链路：

1. 先在 `sources/notes/` 下写一张设计来源笔记，记录它参考了哪些现有游戏、来源笔记或设计原则。
2. 再让新的游戏卡通过 `source_refs` 指向这张设计来源笔记。

这样既能保留 AI 辅助设计的推导过程，也不会破坏知识库的一致性。

### 读书内容要落到游戏卡

补充真实读书内容时，不要只停在 `sources/books/` 或 `sources/notes/`；应同步提炼其中可直接执行的活动，尽量在同一轮写成对应的游戏卡。

### 使用别名和搜索词

父母的提问方式很多样，例如“安静游戏”“睡前游戏”“室内游戏”“无材料游戏”“语言游戏”“专注力游戏”。把这些变体存入 `aliases` 和 `search_terms`。

### 避免大段原文摘录

对于来源于书籍的内容：保留书目信息和页码范围，用自己的话总结，只有在绝对必要时才保留极短引文。不要把仓库建设成大段原文的堆积区。

## 文件命名规则

- `book-0001-short-slug.md`
- `note-0001-short-slug.md`
- `game-0001-short-slug.md`
- `collection-0001-short-slug.md`

即使正文是中文，文件名也使用 ASCII。稳定 ID 比“好看文件名”更重要。

## 状态规则

只使用三种状态：

- `draft`：草稿或未完成（新卡一律从这里开始）
- `reviewed`：可用且元数据完整
- `published`：未来如要对外发布，可视为生产可见版本

## 建议长度

- 来源书籍卡：100-300 字中文正文，加书目信息
- 来源笔记卡：200-800 字
- 游戏卡：300-900 字
- 合集卡：300-1200 字

短文件更容易检索，也更不容易被错误切块。

## 质量检查清单

在把一张游戏卡标记为 `reviewed` 前，确认：

- 年龄范围清晰
- 场景清晰
- 材料清晰
- 步骤可立即执行
- 需要时有安全提醒
- 有来源链接
- 表达简洁，不重复
- 别名覆盖常见提问方式

## 在 DSH 里使用

这个库在 DSH 的「知识库模式」里可以直接检索和维护：

- 检索与阅读：`kb_search` 查找卡片，`kb_read` 读取全文，`kb_links` 查看卡片之间（含跨库）的引用关系。
- 写卡前：用 `kb_schema` 查对应模板、下一个可用 id 和建议路径。
- 写卡后：用 `kb_check` 校验 front matter、受控词表和引用链路。

Agent 在这个库里回答和写回时遵循的规则见同目录 [AGENTS.md](AGENTS.md)；全库共通规范见 [../README.md](../README.md)。

## 跨库关联

卡片可以用 `related:` 字段引用其他库的卡片，写法是 `库id/卡片id`；同库引用仍可只写 id。例如：

```yaml
related:
  - language/practice-0031   # 语言库：在真实文字环境里认一认、说一说
  - psychology/support-0017  # 心理库：父母情绪激动时的暂停法
  - game-0047                # 同库引用只写 id
```

对本库有意义的关联方式举例：

- 游戏卡 `game-0057`（出门认认招牌字）与语言库的 `language/practice-0031`（在真实文字环境里认一认、说一说）讲的是同一类环境文字互动，可以互相关联，让家长从“玩法”跳到“语言练习要点”。
- 情绪类游戏卡（如 `game-0001` 表情镜子）可以关联心理库的 `psychology/support-0017`（父母情绪激动时的暂停法），在孩子情绪激烈、游戏玩不下去时指向情绪支持方法。

以上只是写法示例，目前卡片里还没有实际添加这些 `related:` 字段。
