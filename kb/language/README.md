# 语言发展知识库（kb/language）

这是一个以 Markdown 为主的孩子语言发展知识库和素材库，覆盖 0-6 岁。它同时服务两个目标：

- 便于人工长期维护，持续摘录育儿书内容
- 便于 Agent 检索、回答和写回

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 所有阶段结论和练习建议都尽量保留来源链路。
3. 语言发展内容按年龄顺序组织，方便家长快速定位。
4. 理论理解（阶段卡）和可执行练习（练习卡）分开存放，既利于检索，也利于写回。
5. 用结构化摘要代替大段原文摘录，降低版权风险。

## 目录结构

```text
kb/language/
  README.md                 # 本文件，给人看的库说明
  AGENTS.md                 # 给 Agent 看的规则（在 DSH 里注册为 skill kb-language）
  _templates/
    source_book_template.md
    source_note_template.md
    development_card_template.md
    practice_card_template.md
    collection_template.md
  taxonomy/
    taxonomy.md
  sources/
    books/                  # source_book：书目信息和摘录进度
    notes/                  # source_note：章节或主题的结构化摘要
  stages/                   # development_card，按年龄段一层
    age_00_12m/
    age_12_18m/
    age_18_24m/
    age_24_36m/
    age_3_4y/
    age_4_6y/
  practices/                # practice_card，按年龄段 + 主要语言领域两层
    age_00_12m/
      early_literacy/
      gesture_communication/
      joint_attention/
      speech_sound/
    age_12_18m/
      expressive_language/ joint_attention/ receptive_language/ social_pragmatics/
    age_18_24m/
      early_literacy/ expressive_language/ sentence_building/ social_pragmatics/
    age_24_36m/
      early_literacy/ sentence_building/ speech_sound/
    age_3_4y/
      question_answering/ receptive_language/ social_pragmatics/
    age_4_6y/
      early_literacy/ narrative/
  collections/              # collection：场景化合集
```

练习卡的第二层目录名取自 taxonomy 里的语言领域（`domains`），用卡片的主要领域；需要新领域时按需新建同名目录。卡片跨多个年龄段时，放在最低那个年龄段的目录里，`age_stage` 里列全；`age_00_06m`、`age_06_12m` 这两个细分标签没有单独目录，统一放 `age_00_12m`。

## 知识单元类型

### 1. 来源书籍卡（`source_book`）

用于记录书目信息和摘录进度。适合在这些时候创建：

- 你开始阅读一本新的语言发展或育儿书
- 你想把书里的相关章节系统拆解出来
- 你希望给后续阶段卡和练习卡保留来源链路

模板：[_templates/source_book_template.md](_templates/source_book_template.md)

### 2. 来源笔记卡（`source_note`）

用于记录某一章、某一主题或某一段摘录的结构化摘要。适合在这些时候创建：

- 你刚读完一个和语言发展相关的章节
- 你想保留页码、重点观点和可拆出的练习场景
- 你想先形成素材库，再拆阶段卡和练习卡

如果不是书摘而是人工整理，写 `note_kind: manual_curation`、`source_book: manual_curation`。

模板：[_templates/source_note_template.md](_templates/source_note_template.md)

### 3. 阶段卡（`development_card`）

回答"这个年龄通常会发展什么语言能力"的核心检索单元。适合在这些时候创建：

- 你想按发育时间顺序解释语言发展
- 你想帮助家长理解某个年龄段的典型表现和支持方式
- 你希望把多张来源笔记汇总成一个清晰的阶段结论

模板：[_templates/development_card_template.md](_templates/development_card_template.md)

### 4. 练习卡（`practice_card`）

回答"在某个场景里怎么和孩子说话、怎么练"的核心检索单元。适合在这些时候创建：

- 你有一个明确场景，比如吃饭、睡前、等待、看书、玩耍
- 你想给家长可直接照着说的对话示例
- 你希望 Agent 能直接返回可执行的互动方案

模板：[_templates/practice_card_template.md](_templates/practice_card_template.md)

### 5. 合集卡（`collection`）

用于把多张阶段卡或练习卡打包成一个场景化答案，用 `included_cards` 列出收录的卡片。适合在这些时候创建：

- 你想预制"12-24 月日常语言支持""睡前对话包"这类答案
- 你希望对高频问题做提前编排

模板：[_templates/collection_template.md](_templates/collection_template.md)

## 分类策略

只保留两层分类：

1. 文件夹分类
   - 第一维：年龄阶段（阶段卡和练习卡都有）
   - 第二维：主要语言领域（只有练习卡有）
2. 元数据分类
   - 场景 `scenes`
   - 语言领域 `domains`
   - 支持策略 `support_strategies`
   - 材料 `materials`
   - 时长 `duration_min`
   - 成人投入 `adult_effort`
   - 难度 `difficulty`
   - 检索别名 `aliases` / `search_terms`

这样拆分的好处是：

- 家长和维护者都能先按年龄定位
- 阶段理解和练习方案不会混成一团
- Agent 既能做"解释型回答"，也能给出"立即可执行的对话建议"

受控词表见 [taxonomy/taxonomy.md](taxonomy/taxonomy.md)。只有当现有值表达不了、至少会用在 5 个条目里、并且对过滤或检索有帮助时，才新增受控值，而且要先加进词表再用。

## 推荐写作流程

1. 在 `sources/books/` 下创建一本来源书籍卡。
2. 对每个有价值的章节或主题，在 `sources/notes/` 下创建来源笔记卡。
3. 把可复用的阶段理解拆成 `stages/` 下的阶段卡。
4. 把场景化对话和练习拆成 `practices/` 下的练习卡。
5. 拆出卡片后，回填来源笔记的 `derived_cards` 和书籍卡的"已产出内容"。
6. 当阶段卡和练习卡积累到一定数量后，再创建或更新 `collections/` 中的合集卡。

## 编写规则

### 阶段卡负责解释"这个年龄通常在发展什么"

阶段卡要优先回答：

- 这个年龄常见的语言表现是什么
- 家长应重点支持什么
- 有哪些常见误区或观察点

不要把多个跨度很大的年龄阶段塞进同一张卡里。正文顺序：阶段概览 → 这个阶段常见表现 → 家长可以怎么支持 → 推荐话术或互动例句 → 观察与提醒 → 何时考虑进一步关注 → 检索提示 → 来源说明。

### 练习卡负责回答"现在可以怎么做"

练习卡要尽快说明：

- 适合什么年龄
- 适合什么场景
- 家长能怎么说
- 这样说主要在支持什么能力

不要把多个彼此无关的场景练习塞进同一张卡里。正文顺序：练习简介 → 适用场景 → 准备材料 → 练习步骤 → 家长可直接说的话 → 为什么这样说有效 → 观察点 → 难度变体 → 安全或边界提醒 → 检索提示 → 来源说明。

### 涉及发育担忧时不做诊断

"何时考虑进一步关注"只写一般性提醒，例如"如果长期……可以考虑进一步观察，并在需要时咨询专业人员"，并注明"这里只提供一般性提醒，不替代专业评估"。不要写"是/不是语言发育迟缓"这类诊断式结论。

### 保留来源链路

每张阶段卡和练习卡都应通过 `source_refs` 指向来源笔记。每张来源笔记都应尽可能通过 `source_book` 指向来源书籍。

如果当前只是做结构化起盘，还没有真实书籍摘录，也要明确标记为人工整理来源，不要伪造具体书籍页码。

### 避免大段原文摘录

对于来源于书籍的内容：

- 保留书目信息
- 保留页码范围
- 用自己的话总结
- 只有在绝对必要时才保留极短引文

不要把仓库建设成大段原文堆积区。

## 文件命名规则

推荐模式：

- `book-0001-short-slug.md`
- `note-0001-short-slug.md`
- `stage-0001-short-slug.md`
- `practice-0001-short-slug.md`
- `collection-0001-short-slug.md`

即使正文是中文，文件名也使用 ASCII。稳定 ID 比"好看文件名"更重要。

## 状态规则

只使用三种状态：

- `draft`：草稿或待补充来源（新卡一律从这里开始）
- `reviewed`：可用且元数据完整
- `published`：未来如要对外发布，可视为生产可见版本

## 质量检查清单（提升到 reviewed 前）

- front matter 完整：`id` 与文件名一致，标签都用受控值，年龄范围与所在目录一致
- `source_refs` 指向真实存在的来源笔记，来源笔记指向真实书籍卡或标明 `manual_curation`，没有伪造页码
- 正文按模板顺序，话术是家长能马上照着说的短句，没有大段原文摘录
- 年龄适配，没有诊断式表述，涉及发育担忧时有"不替代专业评估"的提醒
- 一卡一单元，没有混入跨度很大的年龄段或无关场景
- 更新 `last_reviewed`

## 在 DSH 里使用

这个库在 DSH 的「知识库模式」里可以直接检索和维护：

- 检索和阅读：`kb_search`、`kb_read`、`kb_links`
- 写卡前用 `kb_schema` 查模板、下一个 id 和建议路径；写完用 `kb_check` 校验

Agent 的规则见同目录 [AGENTS.md](AGENTS.md)；全库共通规范见 [../README.md](../README.md)。

## 跨库关联

卡片可以用 `related:` 字段引用其他库的卡片，写法是 `库id/卡片id`（例如 `psychology/support-0012`）；同库引用仍可只写 id。

对这个库有意义的例子（只说明写法，并未真的写进卡片）：

- 练习卡 `practice-0022`「在重复书里停一停，让孩子补一个词」（18-36 月）可以关联游戏库里的「留个空等你填」，作为可以一起玩的语言游戏：

  ```yaml
  related:
    - games/game-0051
  ```

- 练习卡 `practice-0001`「面对面轮流发声」（0-12 月）可以关联游戏库里的「咿呀学语你一句我一句」：

  ```yaml
  related:
    - games/game-0119
  ```
