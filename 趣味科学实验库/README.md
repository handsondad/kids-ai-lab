# 趣味科学实验库

这个目录是一套以 Markdown 为主的科学知识库和实验素材库。
它同时服务四个目标：

- 便于你长期沉淀科学主题、概念分类和实验设计
- 便于把论文、书籍、文章、课堂笔记等输入拆成结构化卡片
- 便于后续直接基于 chat / agent 在本地知识库上检索、整理和写回
- 便于逐步扩展为更稳定的科学学习与实验设计工作区

当前目录主要是知识库入口层。
真正供 chat / agent 使用的工作区位于 `./openclaw/workspace/`。

## 导航仪表盘

如果你只想快速进入可执行路线，直接从下面选一条。

### 全量路线总览（collection-0000 到 collection-0019）

- [collection-0001 科学方法起步包](openclaw/workspace/collections/collection-0001-starter-science-method-pack.md)
- [collection-0002 家庭与课堂入门高频包](openclaw/workspace/collections/collection-0002-home-classroom-starter-pack.md)
- [collection-0003 第二波主题与实验扩展包](openclaw/workspace/collections/collection-0003-second-wave-home-science-pack.md)
- [collection-0004 系统现象与连续观察包](openclaw/workspace/collections/collection-0004-systems-and-observation-pack.md)
- [collection-0005 课程主干扩展包](openclaw/workspace/collections/collection-0005-fourth-wave-science-pack.md)
- [collection-0006 知识库总导航](openclaw/workspace/collections/collection-0006-kb-navigation-map.md)
- [collection-0007 家庭场景快速路径包](openclaw/workspace/collections/collection-0007-home-scene-quick-route.md)
- [collection-0008 分阶段学习路径包](openclaw/workspace/collections/collection-0008-stage-based-learning-route.md)
- [collection-0009 外部资源转写示范包](openclaw/workspace/collections/collection-0009-handsondad-science-extract-starter.md)
- [collection-0010 观察自然起步包](openclaw/workspace/collections/collection-0010-observe-nature-starter-pack.md)
- [collection-0011 物理互动学习起步包](openclaw/workspace/collections/collection-0011-interactive-physics-starter.md)
- [collection-0012 学校科学主干补全包](openclaw/workspace/collections/collection-0012-school-science-core-route.md)
- [collection-0013 植物与昆虫观察路径包](openclaw/workspace/collections/collection-0013-plants-and-insects-observation-route.md)
- [collection-0014 生物系统深化路径包](openclaw/workspace/collections/collection-0014-biology-systems-deepening-route.md)
- [collection-0015 家庭20分钟快做任务卡](openclaw/workspace/collections/collection-0015-home-20min-quick-do-task.md)
- [collection-0016 一周自然观察任务卡](openclaw/workspace/collections/collection-0016-weekly-nature-observation-task.md)
- [collection-0017 40分钟课堂备课任务卡](openclaw/workspace/collections/collection-0017-classroom-40min-lesson-task.md)
- [collection-0018 控制变量训练任务卡](openclaw/workspace/collections/collection-0018-variable-control-training-task.md)
- [collection-0019 生物机制进阶任务卡](openclaw/workspace/collections/collection-0019-biology-deepening-task.md)
- [collection-0000 全局仪表盘入口](openclaw/workspace/collections/collection-0000-dashboard-global-entrypoint.md)

### 按场景快速进入

- 新手第一次进入：先看 [collection-0000](openclaw/workspace/collections/collection-0000-dashboard-global-entrypoint.md)
- 家庭当天就做实验：直接用 [collection-0007](openclaw/workspace/collections/collection-0007-home-scene-quick-route.md)
- 按年龄/阶段推进：进入 [collection-0008](openclaw/workspace/collections/collection-0008-stage-based-learning-route.md)
- 想做自然观察主线：从 [collection-0010](openclaw/workspace/collections/collection-0010-observe-nature-starter-pack.md) + [collection-0013](openclaw/workspace/collections/collection-0013-plants-and-insects-observation-route.md)
- 想补齐学校科学主干：走 [collection-0012](openclaw/workspace/collections/collection-0012-school-science-core-route.md)
- 想深入生物机制层：走 [collection-0014](openclaw/workspace/collections/collection-0014-biology-systems-deepening-route.md)

### 推荐起步顺序（最少决策版）

1. [collection-0000](openclaw/workspace/collections/collection-0000-dashboard-global-entrypoint.md)
2. [collection-0007](openclaw/workspace/collections/collection-0007-home-scene-quick-route.md) 或 [collection-0008](openclaw/workspace/collections/collection-0008-stage-based-learning-route.md)
3. 按兴趣进入专项：[collection-0010](openclaw/workspace/collections/collection-0010-observe-nature-starter-pack.md) / [collection-0011](openclaw/workspace/collections/collection-0011-interactive-physics-starter.md) / [collection-0012](openclaw/workspace/collections/collection-0012-school-science-core-route.md)
4. 进阶到 [collection-0014](openclaw/workspace/collections/collection-0014-biology-systems-deepening-route.md)

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 科学主题理解、实验卡、合集卡和来源摘要分开存放。
3. 所有结论尽量保留来源链路，方便追溯和持续拆解。
4. 先沉淀结构化摘要，再做主题卡、实验卡和合集卡。
5. 通过结构化转述而非大段原文摘录，降低版权风险。

## 推荐目录结构

```text
./
  README.md
  openclaw/
    README.md
    OPENCLAW_INTEGRATION.md
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
        source_paper_template.md
        source_article_template.md
        source_note_template.md
        topic_card_template.md
        experiment_card_template.md
        collection_template.md
      taxonomy/
        taxonomy.md
      sources/
        books/
        papers/
        articles/
        notes/
      topics/
        foundations/
        physics/
        chemistry/
        biology/
        earth_space/
      experiments/
        scientific_method/
        forces_motion/
        materials_reactions/
        light_sound/
        plants_life/
        earth_space/
      collections/
```

除非特别说明，下文中出现的 `topics/`、`experiments/`、`collections/`、`sources/`、`taxonomy/`、`_templates/` 等逻辑路径，默认都以 `./openclaw/workspace/` 为基准。

## 知识单元类型

### 1. 来源书籍卡

用于记录科普书、实验书或教材类来源的信息、摘录范围和可拆方向。

### 2. 来源论文卡

用于记录论文元数据、研究问题、方法、结论、局限和可拆主题。

### 3. 来源文章卡

用于记录科普文章、机构文章、实验说明、课堂文章或长文综述的结构化摘要。

### 4. 来源笔记卡

用于把某一章、某一篇论文、某一篇文章或一组输入材料，转成便于继续拆卡的中间层摘要。

### 5. 主题卡

这是回答“某个科学概念是什么、为什么会这样、和什么相关”的核心检索单元。

### 6. 实验卡

这是回答“可以做什么实验、怎么做、会观察到什么、背后原理是什么”的核心检索单元。

### 7. 合集卡

用于把多个主题卡、实验卡和来源卡打包成一条专题学习或实验路径。

## 推荐写作流程

1. 在 `sources/books/`、`sources/papers/` 或 `sources/articles/` 下创建来源卡。
2. 对每个值得保留的输入，在 `sources/notes/` 下创建来源笔记卡。
3. 把稳定可复用的科学知识拆成 `topics/` 下的主题卡。
4. 把可执行、可观察、可解释的活动拆成 `experiments/` 下的实验卡。
5. 当相关卡片积累到一定数量后，再创建 `collections/` 中的合集卡。

## 分类策略

只保留两层分类：

1. 文件夹分类
   - 第一维：内容类型，例如 `topics/`、`experiments/`
   - 第二维：主题簇或实验方向，例如 `physics/`、`forces_motion/`

2. 元数据分类
   - 科学领域 `science_domains`
   - 学习层级 `learning_level`
   - 实验类型 `experiment_types`
   - 材料标签 `materials`
   - 安全等级 `safety_level`
   - 检索别名 `aliases` / `search_terms`

受控词表见 `./openclaw/workspace/taxonomy/taxonomy.md`。

## 编写规则

### 主题卡负责回答“这是什么，为什么会这样”

主题卡优先说明：

- 一句话定义
- 核心现象或机制
- 为什么重要
- 常见误解
- 能和哪些实验连接起来

### 实验卡负责回答“怎么做，会看到什么”

实验卡优先说明：

- 适合什么对象和场景
- 需要什么材料
- 操作步骤
- 预计观察结果
- 背后科学原理
- 安全边界和变体

### 保留来源链路

每张主题卡和实验卡都应通过 `source_refs` 指向来源笔记或来源卡。

### 避免大段原文摘录

对于来源于论文、书籍、文章的内容：

- 保留 bibliographic / link 信息
- 保留页码或章节范围
- 用自己的话总结
- 只在绝对必要时保留极短引文

## 起盘建议

如果你刚开始收集材料，建议优先积累这三层：

1. `sources/notes/`：把论文、文章、课堂记录先做成结构化摘要
2. `topics/`：把高频概念拆出来，例如变量、对照、力、空气阻力、蒸发、发芽
3. `experiments/`：把高频低门槛实验拆出来，例如纸直升机、浮沉、影子变化、种子发芽

这样后续无论你输入的是论文、笔记还是文章，都能稳定地先落到来源层，再拆成主题和实验两条线。