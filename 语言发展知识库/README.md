# 孩子语言发展知识库

这个目录是一个以 Markdown 为主的孩子语言发展知识库和素材库。
它同时服务两个目标：

- 便于人工长期维护和持续摘录育儿书内容
- 便于后续接入 OpenClaw 或其他 RAG 检索系统

当前目录主要是知识库入口层。
真正供 OpenClaw 使用的工作区和知识内容位于 `./openclaw/workspace/`。

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 所有阶段结论和练习建议都尽量保留来源链路。
3. 语言发展内容按年龄顺序组织，方便家长快速定位。
4. 理论理解和可执行练习分开存放，既利于检索，也利于写回。
5. 通过结构化摘要而非大段原文摘录，降低版权风险。

## 推荐目录结构

```text
./
  README.md
  openclaw/
    README.md
    OPENCLAW_INTEGRATION.md
    openclaw.json
    workspace/
      AGENTS.md
      SOUL.md
      IDENTITY.md
      USER.md
      MEMORY.md
      TOOLS.md
      HEARTBEAT.md
      _templates/
        source_book_template.md
        source_note_template.md
        development_card_template.md
        practice_card_template.md
        collection_template.md
      taxonomy/
        taxonomy.md
      sources/
        books/
        notes/
      stages/
        age_00_12m/
        age_12_18m/
        age_18_24m/
        age_24_36m/
        age_3_4y/
        age_4_6y/
      practices/
        age_00_12m/
        age_12_18m/
        age_18_24m/
        age_24_36m/
        age_3_4y/
        age_4_6y/
      collections/
```

除非特别说明，下文中出现的 `stages/`、`practices/`、`collections/`、`sources/`、`taxonomy/`、`_templates/` 等逻辑路径，默认都以 `./openclaw/workspace/` 为基准。

## 知识单元类型

### 1. 来源书籍卡

用于记录书目信息和摘录进度。

适合在这些时候创建：

- 你开始阅读一本新的语言发展或育儿书
- 你想把书里的相关章节系统拆解出来
- 你希望给后续阶段卡和练习卡保留来源链路

模板：[./openclaw/workspace/_templates/source_book_template.md](openclaw/workspace/_templates/source_book_template.md)

### 2. 来源笔记卡

用于记录某一章、某一主题或某一段摘录的结构化摘要。

适合在这些时候创建：

- 你刚读完一个和语言发展相关的章节
- 你想保留页码、重点观点和可拆出的练习场景
- 你想先形成素材库，再拆阶段卡和练习卡

模板：[./openclaw/workspace/_templates/source_note_template.md](openclaw/workspace/_templates/source_note_template.md)

### 3. 阶段卡

这是回答“这个年龄通常会发展什么语言能力”的核心检索单元。

适合在这些时候创建：

- 你想按发育时间顺序解释语言发展
- 你想帮助家长理解某个年龄段的典型表现和支持方式
- 你希望把多个来源笔记汇总成一个清晰的阶段结论

模板：[./openclaw/workspace/_templates/development_card_template.md](openclaw/workspace/_templates/development_card_template.md)

### 4. 练习卡

这是回答“在某个场景里怎么和孩子说话、怎么练”的核心检索单元。

适合在这些时候创建：

- 你有一个明确场景，比如吃饭、睡前、等待、看书、玩耍
- 你想给家长可直接照着说的对话示例
- 你希望让 OpenClaw 直接返回可执行互动方案

模板：[./openclaw/workspace/_templates/practice_card_template.md](openclaw/workspace/_templates/practice_card_template.md)

### 5. 合集卡

用于把多个阶段卡或练习卡打包成一个场景化答案。

适合在这些时候创建：

- 你想预制“12-24 月日常语言支持”“睡前对话包”这类答案
- 你希望对高频问题做提前编排

模板：[./openclaw/workspace/_templates/collection_template.md](openclaw/workspace/_templates/collection_template.md)

## 分类策略

只保留两层分类：

1. 文件夹分类
   - 第一维：年龄阶段
   - 第二维：内容类型或核心领域

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
- OpenClaw 既能做“解释型回答”，也能做“立即可执行的对话建议”

受控词表见 [./openclaw/workspace/taxonomy/taxonomy.md](openclaw/workspace/taxonomy/taxonomy.md)。

## 推荐写作流程

1. 在 `sources/books/` 下创建一本来源书籍卡。
2. 对每个有价值的章节或主题，在 `sources/notes/` 下创建来源笔记卡。
3. 把可复用的阶段理解拆成 `stages/` 下的阶段卡。
4. 把场景化对话和练习拆成 `practices/` 下的练习卡。
5. 当阶段卡和练习卡积累到一定数量后，再创建 `collections/` 中的合集卡。

## 编写规则

### 阶段卡负责解释“这个年龄通常在发展什么”

阶段卡要优先回答：

- 这个年龄常见的语言表现是什么
- 家长应重点支持什么
- 有哪些常见误区或观察点

不要把多个跨度很大的年龄阶段塞进同一张卡里。

### 练习卡负责回答“现在可以怎么做”

练习卡要尽快说明：

- 适合什么年龄
- 适合什么场景
- 家长能怎么说
- 这样说主要在支持什么能力

### 保留来源链路

每张阶段卡和练习卡都应通过 `source_refs` 指向来源笔记。
每张来源笔记都应尽可能通过 `source_book` 指向来源书籍。

如果当前只是做结构化起盘，还没有真实书籍摘录，也要明确标记为人工整理或设计来源，不要伪造具体书籍页码。

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

即使正文是中文，文件名也建议使用 ASCII。
稳定 ID 比“好看文件名”更重要。

## 状态规则

只使用三种状态：

- `draft`：草稿或待补充来源
- `reviewed`：可用且元数据完整
- `published`：未来如要对外发布，可视为生产可见版本

## OpenClaw 落地方案

这一版采用的是“知识库目录直连工作区”方案，而不是依赖未验证的外部 memory 根目录字段。

原因很简单：

- 路径清晰，接法稳定
- 工作区规则和知识内容处在同一套目录里
- 你后续新增书籍、摘录、阶段卡和练习卡时，不需要再改主配置

真正的接入说明见 [./openclaw/OPENCLAW_INTEGRATION.md](openclaw/OPENCLAW_INTEGRATION.md)。