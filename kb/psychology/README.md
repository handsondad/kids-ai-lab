# 儿童心理学知识库

这个目录是一个以 Markdown 为主的儿童心理学知识库和素材库，库 id 为 `psychology`。
它同时服务两个目标：

- 便于人工长期维护，持续摘录儿童心理学书籍和实务内容
- 便于 Agent 和检索系统直接读取、回答和写回

本库只做发展理解和日常支持建议，不做诊断，也不替代医生、心理咨询师等专业评估。

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 所有结论和支持建议都尽量保留来源链路。
3. 内容按发展阶段组织，方便家长和专业人员快速定位。
4. 理论解释（阶段卡）与可执行支持方案（支持卡）分开存放，既利于检索，也利于写回。
5. 用结构化摘要代替大段原文摘录，降低版权风险。

## 目录结构

```text
kb/psychology/
  README.md                 本文件（给人看的说明）
  AGENTS.md                 给 Agent 的回答与写回规则
  _templates/
    source_book_template.md
    source_note_template.md
    stage_card_template.md
    support_card_template.md
    collection_template.md
  taxonomy/
    taxonomy.md             受控词表
  sources/
    books/                  来源书籍卡 book-xxxx
    notes/                  来源笔记卡 note-xxxx
  stages/
    <age_stage>/            阶段卡 stage-xxxx，按年龄段分目录
  supports/
    <age_stage>/            支持卡 support-xxxx，按年龄段分目录
  collections/              合集卡 collection-xxxx
```

`<age_stage>` 是 `taxonomy/taxonomy.md` 里的年龄段值。目前 `stages/` 下有 `age_24_36m`、`age_3_4y`、`age_4_6y`、`age_6_12y`、`age_12_18y`，`supports/` 下另外还有 `age_18_24m`。新增年龄段目录时沿用同样的命名。

## 知识单元类型

### 1. 来源书籍卡（`source_book`，放在 `sources/books/`）

用于记录书目信息和摘录进度。

适合在这些时候创建：

- 你开始阅读一本新的儿童心理学书籍
- 你想把书里的相关章节系统拆解出来
- 你希望给后续阶段卡和支持卡保留来源链路

模板：[_templates/source_book_template.md](_templates/source_book_template.md)

### 2. 来源笔记卡（`source_note`，放在 `sources/notes/`）

用于记录某一章、某一主题或某一段摘录的结构化摘要。

适合在这些时候创建：

- 你刚读完一个和儿童心理发展、情绪或行为相关的章节
- 你想保留页码、重点观点和可拆出的支持策略
- 你想先形成素材库，再拆阶段卡和支持卡

模板：[_templates/source_note_template.md](_templates/source_note_template.md)

### 3. 阶段卡（`stage_card`，放在 `stages/<age_stage>/`）

这是回答“这个年龄或阶段通常会有哪些心理特点”的核心检索单元。

适合在这些时候创建：

- 你想按发展阶段解释儿童情绪、依恋、行为或社交特点
- 你想帮助家长理解某个年龄段的典型表现和支持重点
- 你希望把多个来源笔记汇总成一个清晰结论

模板：[_templates/stage_card_template.md](_templates/stage_card_template.md)

### 4. 支持卡（`support_card`，放在 `supports/<age_stage>/`）

这是回答“在这个情境里可以怎么做”的核心检索单元。

适合在这些时候创建：

- 你有一个明确场景，比如入睡、分离、情绪爆发、社交冲突
- 你想给家长或照护者可直接照着做的支持方案
- 你希望 Agent 能返回可执行的陪伴、引导与回应建议

模板：[_templates/support_card_template.md](_templates/support_card_template.md)

### 5. 合集卡（`collection`，放在 `collections/`）

用于把多个阶段卡或支持卡打包成一个场景化答案。

适合在这些时候创建：

- 你想预制“婴幼儿情绪安抚”“学龄前社交支持”“睡前亲子关系”这类答案
- 你希望对常见问题做提前编排
- 你读完一本书的一章，想把这一章拆出的卡片按推荐顺序串起来

模板：[_templates/collection_template.md](_templates/collection_template.md)

## 分类策略

只保留两层分类：

1. 文件夹分类
   - 第一维：内容类型（`stages/`、`supports/`、`collections/`、`sources/`）
   - 第二维：阶段卡和支持卡再按年龄段（`age_stage`）分子目录

2. 元数据分类（写在 front matter 里）
   - 场景 `scenes`
   - 领域 `domains`
   - 孩子表现 `child_signals`
   - 支持策略 `support_strategies`
   - 适用年龄 `age_min_months` / `age_max_months` / `age_stage`
   - 材料 `materials`
   - 时长 `duration_min`
   - 成人投入 `adult_effort`
   - 难度 `difficulty`
   - 检索别名 `aliases` / `search_terms`
   - 来源链路 `source_refs`（阶段卡、支持卡）、`source_book` 和 `derived_cards`（来源笔记）、`included_cards`（合集卡）

这样拆分的好处是：

- 家长和维护者都能先按年龄段定位
- 阶段理解和支持方案不会混成一团
- Agent 既能做“解释型回答”，也能给“立即可操作的支持建议”

受控词表见 [taxonomy/taxonomy.md](taxonomy/taxonomy.md)。需要新标签时，先确认现有值无法表达、预计至少 5 张卡会用、且有助于过滤或检索，再把它加进词表后使用。

## 推荐写作流程

1. 在 `sources/books/` 下创建一本来源书籍卡。
2. 对每个有价值的章节或主题，在 `sources/notes/` 下创建来源笔记卡。
3. 把可复用的阶段理解拆成 `stages/` 下的阶段卡。
4. 把场景化支持拆成 `supports/` 下的支持卡。
5. 回填来源笔记的 `derived_cards` 和书籍卡的“已产出内容”。
6. 当阶段卡和支持卡积累到一定数量后，再创建或更新 `collections/` 中的合集卡。

## 编写规则

### 阶段卡负责解释“这个年龄或阶段通常在发展什么”

阶段卡要优先回答：

- 这个阶段常见的心理和行为表现是什么
- 家长应重点支持什么
- 有哪些常见误区或观察点

不要把多个跨度很大的阶段塞进同一张卡里。“何时考虑进一步关注”只写一般性提醒，不做诊断。

### 支持卡负责回答“现在可以怎么做”

支持卡要尽快说明：

- 适合什么年龄或阶段
- 适合什么场景
- 成人可以怎么说
- 这样做主要在支持什么能力或关系

一张支持卡只处理一个场景，不要把彼此无关的场景塞在一起。要写清“安全或边界提醒”。

### 守住专业边界

- 不做诊断式表达，不给孩子贴疾病或障碍标签。
- 不写超龄、伪科学，或羞辱、恐吓、贴标签式的养育建议。
- 涉及自伤或伤人、疑似虐待或忽视、明显发展倒退、长期明显影响日常生活的情绪或行为困难时，卡片里要明确建议寻求专业帮助。

### 保留来源链路

每张阶段卡和支持卡都应通过 `source_refs` 指向来源笔记。
每张来源笔记都应尽可能通过 `source_book` 指向来源书籍。

如果当前只是人工归纳，还没有真实书籍摘录，也要在来源笔记里明确标记为人工整理来源，不要伪造具体书籍页码。

### 避免大段原文摘录

对于来源于书籍的内容：

- 保留书目信息
- 保留页码范围
- 用自己的话总结
- 只有在绝对必要时才保留极短引文

不要把仓库建设成大段原文堆积区。

## 文件命名规则

文件名只用 ASCII，格式为“类型前缀-四位编号-英文短 slug”：

- `book-0001-short-slug.md`
- `note-0001-short-slug.md`
- `stage-0001-short-slug.md`
- `support-0001-short-slug.md`
- `collection-0001-short-slug.md`

front matter 里的 `id` 与文件名前缀和编号一致（如 `support-0012`）。编号在同类型内全库唯一，不随年龄目录重新计数。

## 状态规则

只使用三种状态：

- `draft`：新写或未核对的内容，所有新卡都从这里开始
- `reviewed`：已按下方检查清单核对过
- `published`：确认可以对外稳定使用

回答时优先使用 `reviewed` 和 `published`，用户主动要草案时再用 `draft`。

## 质量检查清单

提升到 `reviewed` 前确认：

- front matter 完整，`doc_type`、`id`、文件名、所在年龄目录与 `age_stage` 一致
- 标签都在受控词表内
- 阶段卡、支持卡有 `source_refs`，且指向真实存在的来源笔记；来源笔记能追到书籍卡，或写明是人工整理
- 没有大段原文，页码与出处真实
- 年龄适配，单卡只讲一个阶段或一个场景
- 支持卡有清晰步骤和 3–5 句照护者可直接说的话
- 没有诊断式、羞辱或恐吓表达，需要的进一步关注或专业求助提醒已写到位

## 在 DSH 里使用

这个库在 DeepSeek Harness（DSH）的「知识库模式」里可以直接检索和维护：

- 用 `kb_search` 检索卡片，`kb_read` 读取单张卡，`kb_links` 查看卡片之间的引用关系
- 写新卡前先调用 `kb_schema`，拿到对应模板、下一个可用 id 和建议路径
- 写完调用 `kb_check` 校验 front matter、标签和引用

Agent 在本库回答和写回时遵循的规则见同目录 [AGENTS.md](AGENTS.md)；所有库共通的规范见 [../README.md](../README.md)。

## 跨库关联

卡片可以用 `related:` 字段引用其他库的卡片，写法是 `库id/卡片id`；同库引用仍可只写 id。例如：

```yaml
# 一张 24-36 个月、练习情绪命名的支持卡
related:
  - games/game-0001        # 表情镜子：在游戏里练习认表情、说感受
  - stage-0001             # 同库引用只写 id
```

```yaml
# supports/age_3_4y/support-0004（新生弟妹后的失落与被替代感）可以关联
related:
  - games/game-0233        # 娃娃照顾游戏：在假装游戏里练习照顾“小宝宝”
```

以上只是写法示例，相关卡片目前并没有这些 `related:` 字段。
