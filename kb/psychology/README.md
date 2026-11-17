# 儿童心理学知识库

这个目录是一个以 Markdown 为主的儿童心理学知识库和素材库。
它同时服务两个目标：

- 便于人工长期维护和持续摘录儿童心理学书籍和实务内容
- 便于后续接入 OpenClaw 或其他 RAG 检索系统

当前目录主要是知识库入口层。
真正供 OpenClaw 使用的工作区和知识内容位于 `./openclaw/workspace/`。

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 所有结论和支持建议都尽量保留来源链路。
3. 儿童心理学内容按主题与发展阶段组织，方便家长和专业人员快速定位。
4. 理论解释与可执行支持方案分开存放，既利于检索，也利于写回。
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
        stage_card_template.md
        support_card_template.md
        collection_template.md
      taxonomy/
        taxonomy.md
      sources/
        books/
        notes/
      stages/
      supports/
      collections/
```

除非特别说明，下文中出现的 `stages/`、`supports/`、`collections/`、`sources/`、`taxonomy/`、`_templates/` 等逻辑路径，默认都以 `./openclaw/workspace/` 为基准。

## 知识单元类型

### 1. 来源书籍卡

用于记录书目信息和摘录进度。

适合在这些时候创建：

- 你开始阅读一本新的儿童心理学书籍
- 你想把书里的相关章节系统拆解出来
- 你希望给后续阶段卡和支持卡保留来源链路

模板：[./openclaw/workspace/_templates/source_book_template.md](openclaw/workspace/_templates/source_book_template.md)

### 2. 来源笔记卡

用于记录某一章、某一主题或某一段摘录的结构化摘要。

适合在这些时候创建：

- 你刚读完一个和儿童心理发展、情绪或行为相关的章节
- 你想保留页码、重点观点和可拆出的支持策略
- 你想先形成素材库，再拆阶段卡和支持卡

模板：[./openclaw/workspace/_templates/source_note_template.md](openclaw/workspace/_templates/source_note_template.md)

### 3. 阶段卡

这是回答“这个年龄或阶段通常会有哪些心理特点”的核心检索单元。

适合在这些时候创建：

- 你想按发展阶段解释儿童情绪、依恋、行为或社交特点
- 你想帮助家长理解某个年龄段的典型表现和支持重点
- 你希望把多个来源笔记汇总成一个清晰结论

模板：[./openclaw/workspace/_templates/stage_card_template.md](openclaw/workspace/_templates/stage_card_template.md)

### 4. 支持卡

这是回答“在这个情境里可以怎么做”的核心检索单元。

适合在这些时候创建：

- 你有一个明确场景，比如入睡、分离、情绪爆发、社交冲突
- 你想给家长或照护者可直接照着做的支持方案
- 你希望让 OpenClaw 返回可执行的陪伴、引导与回应建议

模板：[./openclaw/workspace/_templates/support_card_template.md](openclaw/workspace/_templates/support_card_template.md)

### 5. 合集卡

用于把多个阶段卡或支持卡打包成一个场景化答案。

适合在这些时候创建：

- 你想预制“婴幼儿情绪安抚”“学龄前社交支持”“睡前亲子关系”这类答案
- 你希望对常见问题做提前编排

模板：[./openclaw/workspace/_templates/collection_template.md](openclaw/workspace/_templates/collection_template.md)

## 分类策略

只保留两层分类：

1. 文件夹分类
   - 第一维：阶段或主题
   - 第二维：内容类型或核心领域

2. 元数据分类
   - 场景 `scenes`
   - 领域 `domains`
   - 支持策略 `support_strategies`
   - 适用年龄 `age_range`
   - 材料 `materials`
   - 时长 `duration_min`
   - 成人投入 `adult_effort`
   - 难度 `difficulty`
   - 检索别名 `aliases` / `search_terms`

这样拆分的好处是：

- 家长和维护者都能先按阶段或主题定位
- 阶段理解和支持方案不会混成一团
- OpenClaw 既能做“解释型回答”，也能做“立即可操作的支持建议”

受控词表见 [./openclaw/workspace/taxonomy/taxonomy.md](openclaw/workspace/taxonomy/taxonomy.md)。

## 推荐写作流程

1. 在 `sources/books/` 下创建一本来源书籍卡。
2. 对每个有价值的章节或主题，在 `sources/notes/` 下创建来源笔记卡。
3. 把可复用的阶段理解拆成 `stages/` 下的阶段卡。
4. 把场景化支持拆成 `supports/` 下的支持卡。
5. 当阶段卡和支持卡积累到一定数量后，再创建 `collections/` 中的合集卡。

## 编写规则

### 阶段卡负责解释“这个年龄或阶段通常在发展什么”

阶段卡要优先回答：

- 这个阶段常见的心理和行为表现是什么
- 家长应重点支持什么
- 有哪些常见误区或观察点

不要把多个跨度很大的阶段塞进同一张卡里。

### 支持卡负责回答“现在可以怎么做”

支持卡要尽快说明：

- 适合什么年龄或阶段
- 适合什么场景
- 成人可以怎么说
- 这样做主要在支持什么能力或关系

### 保留来源链路

每张阶段卡和支持卡都应通过 `source_refs` 指向来源笔记。
每张来源笔记都应尽可能通过 `source_book` 指向来源书籍。

如果当前只是做结构化起盘，还没有真实书籍摘录，也要明确标记为人工整理或设计来源，不要伪造具体书籍页码。

### 避免大段原文摘录

对于来源于书籍的内容：

- 保留书目信息
- 保留页码范围
- 用自己的话总结
- 只有在绝对必要时才保留极短引文

不要把仓库建设成大段原文堆积区。