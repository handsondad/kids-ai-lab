# 趣味科学实验库（kb/science）

这是一套以 Markdown 为主的科学知识库和实验素材库，服务家庭和课堂的科学启蒙。它同时服务四个目标：

- 长期沉淀科学主题、概念分类和实验设计
- 把论文、书籍、文章、课堂笔记等输入拆成结构化卡片
- 让 Agent 直接在本地知识库上检索、整理和写回
- 逐步扩展为稳定的科学学习与实验设计工作区

本文中的路径都相对 `kb/science/`。

## 导航仪表盘

如果你只想快速进入可执行路线，直接从下面选一条。

### 全量路线总览（collection-0000 到 collection-0020）

- [collection-0000 全局仪表盘入口](collections/collection-0000-dashboard-global-entrypoint.md)
- [collection-0001 科学方法起步包](collections/collection-0001-starter-science-method-pack.md)
- [collection-0002 家庭与课堂入门高频包](collections/collection-0002-home-classroom-starter-pack.md)
- [collection-0003 第二波主题与实验扩展包](collections/collection-0003-second-wave-home-science-pack.md)
- [collection-0004 系统现象与连续观察包](collections/collection-0004-systems-and-observation-pack.md)
- [collection-0005 课程主干扩展包](collections/collection-0005-fourth-wave-science-pack.md)
- [collection-0006 知识库总导航](collections/collection-0006-kb-navigation-map.md)
- [collection-0007 家庭场景快速路径包](collections/collection-0007-home-scene-quick-route.md)
- [collection-0008 分阶段学习路径包](collections/collection-0008-stage-based-learning-route.md)
- [collection-0009 外部资源转写示范包](collections/collection-0009-handsondad-science-extract-starter.md)
- [collection-0010 观察自然起步包](collections/collection-0010-observe-nature-starter-pack.md)
- [collection-0011 物理互动学习起步包](collections/collection-0011-interactive-physics-starter.md)
- [collection-0012 学校科学主干补全包](collections/collection-0012-school-science-core-route.md)
- [collection-0013 植物与昆虫观察路径包](collections/collection-0013-plants-and-insects-observation-route.md)
- [collection-0014 生物系统深化路径包](collections/collection-0014-biology-systems-deepening-route.md)
- [collection-0015 家庭20分钟快做任务卡](collections/collection-0015-home-20min-quick-do-task.md)
- [collection-0016 一周自然观察任务卡](collections/collection-0016-weekly-nature-observation-task.md)
- [collection-0017 40分钟课堂备课任务卡](collections/collection-0017-classroom-40min-lesson-task.md)
- [collection-0018 控制变量训练任务卡](collections/collection-0018-variable-control-training-task.md)
- [collection-0019 生物机制进阶任务卡](collections/collection-0019-biology-deepening-task.md)
- [collection-0020 亲子科学实验合集包](collections/collection-0020-family-science-experiments-pack.md)

### 按场景快速进入

- 新手第一次进入：先看 [collection-0000](collections/collection-0000-dashboard-global-entrypoint.md)
- 家庭当天就做实验：直接用 [collection-0007](collections/collection-0007-home-scene-quick-route.md) 或 [collection-0020](collections/collection-0020-family-science-experiments-pack.md)
- 按年龄/阶段推进：进入 [collection-0008](collections/collection-0008-stage-based-learning-route.md)
- 想做自然观察主线：从 [collection-0010](collections/collection-0010-observe-nature-starter-pack.md) + [collection-0013](collections/collection-0013-plants-and-insects-observation-route.md)
- 想补齐学校科学主干：走 [collection-0012](collections/collection-0012-school-science-core-route.md)
- 想深入生物机制层：走 [collection-0014](collections/collection-0014-biology-systems-deepening-route.md)

### 推荐起步顺序（最少决策版）

1. [collection-0000](collections/collection-0000-dashboard-global-entrypoint.md)
2. [collection-0007](collections/collection-0007-home-scene-quick-route.md) 或 [collection-0008](collections/collection-0008-stage-based-learning-route.md)
3. 按兴趣进入专项：[collection-0010](collections/collection-0010-observe-nature-starter-pack.md) / [collection-0011](collections/collection-0011-interactive-physics-starter.md) / [collection-0012](collections/collection-0012-school-science-core-route.md)
4. 进阶到 [collection-0014](collections/collection-0014-biology-systems-deepening-route.md)

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 科学主题理解、实验卡、合集卡和来源摘要分开存放。
3. 所有结论尽量保留来源链路，方便追溯和持续拆解。
4. 先沉淀结构化摘要，再做主题卡、实验卡和合集卡。
5. 通过结构化转述而非大段原文摘录，降低版权风险。

## 目录结构

```text
kb/science/
  README.md              # 本文件（给人看）
  AGENTS.md              # 给 Agent 的回答与写回规则
  _templates/            # 新建卡片用的模板，不是答案来源
    source_book_template.md
    source_paper_template.md
    source_article_template.md
    source_note_template.md
    topic_card_template.md
    experiment_card_template.md
    collection_template.md
  taxonomy/
    taxonomy.md          # 受控词表
  sources/
    articles/            # 来源文章卡
    notes/               # 来源笔记卡
    (books/ papers/)     # 目前还没有，第一次写书籍卡或论文卡时再建
  topics/                # 主题卡，按主题簇分文件夹
    foundations/
    physics/
    chemistry/
    biology/
    earth_space/
  experiments/           # 实验卡，按实验方向分文件夹
    earth_space/
    electricity_magnets/
    environment/
    forces_motion/
    light_sound/
    materials_reactions/
    plants_life/
    scientific_method/
    simple_machines/
    thermal_energy/
    weather_water/
  collections/           # 合集卡（专题路线、任务卡、导航）
```

## 知识单元类型

| 类型 | doc_type | 什么时候建 | 放哪里 | 模板 |
| --- | --- | --- | --- | --- |
| 来源书籍卡 | `source_book` | 记录科普书、实验书或教材的信息、摘录范围和可拆方向 | `sources/books/` | [source_book_template.md](_templates/source_book_template.md) |
| 来源论文卡 | `source_paper` | 记录论文元数据、研究问题、方法、结论、局限和可拆主题 | `sources/papers/` | [source_paper_template.md](_templates/source_paper_template.md) |
| 来源文章卡 | `source_article` | 记录科普文章、机构文章、实验说明、课堂文章或长文综述的结构化摘要 | `sources/articles/` | [source_article_template.md](_templates/source_article_template.md) |
| 来源笔记卡 | `source_note` | 把某一章、某一篇论文或文章、一组输入材料转成便于继续拆卡的中间层摘要 | `sources/notes/` | [source_note_template.md](_templates/source_note_template.md) |
| 主题卡 | `topic_card` | 回答“某个科学概念是什么、为什么会这样、和什么相关”的核心检索单元 | `topics/<主题簇>/` | [topic_card_template.md](_templates/topic_card_template.md) |
| 实验卡 | `experiment_card` | 回答“可以做什么实验、怎么做、会观察到什么、背后原理是什么”的核心检索单元 | `experiments/<实验方向>/` | [experiment_card_template.md](_templates/experiment_card_template.md) |
| 合集卡 | `collection` | 把多张主题卡、实验卡和来源卡打包成一条专题学习或实验路径 | `collections/` | [collection_template.md](_templates/collection_template.md) |

## 推荐写作流程

1. 在 `sources/books/`、`sources/papers/` 或 `sources/articles/` 下创建来源卡。
2. 对每个值得保留的输入，在 `sources/notes/` 下创建来源笔记卡。
3. 把稳定可复用的科学知识拆成 `topics/` 下的主题卡。
4. 把可执行、可观察、可解释的活动拆成 `experiments/` 下的实验卡。
5. 当相关卡片积累到一定数量后，再创建或更新 `collections/` 中的合集卡。

如果只是人工归纳、没有真实来源，来源笔记写 `source_kind: manual_curation`，不要写成书摘或论文摘要。

## 分类策略

只保留两层分类：

1. 文件夹分类
   - 第一维：内容类型，例如 `topics/`、`experiments/`
   - 第二维：主题簇或实验方向，例如 `topics/physics/`、`experiments/forces_motion/`
2. 元数据分类
   - 科学领域 `science_domains`
   - 主题簇 `topic_clusters`
   - 学习层级 `learning_level`
   - 实验类型 `experiment_types`
   - 材料标签 `materials`
   - 安全等级 `safety_level`（`low` / `medium` / `high`）和看护等级 `supervision_level`（`independent` / `guided` / `close_supervision`）
   - 来源性质 `source_kind`
   - 检索别名 `aliases` / `search_terms`

实验方向文件夹和 `science_domains` 的大致对应：`earth_space` → `earth_science`、`astronomy_space`；`weather_water` → `earth_science`；`materials_reactions` → `chemistry`、`materials`；`plants_life` → `biology`；`environment` → `environment`；`scientific_method` → `scientific_method`；`simple_machines` → `physics`、`engineering_design`；`thermal_energy` → `physics`、`energy`；`electricity_magnets`、`forces_motion`、`light_sound` → `physics`。

受控词表见 [taxonomy/taxonomy.md](taxonomy/taxonomy.md)。新标签先加进词表再用；只有现有值表达不了、至少会出现在 5 张卡里、并且有助于筛选检索时才新增。

## 编写规则

### 主题卡负责回答“这是什么，为什么会这样”

主题卡优先说明：

- 一句话定义
- 核心现象或机制
- 为什么重要
- 常见误解
- 能和哪些实验连接起来

不要把多个不相干的概念塞进一张主题卡。

### 实验卡负责回答“怎么做，会看到什么”

实验卡优先说明：

- 适合什么对象和场景
- 需要什么材料
- 操作步骤
- 预计观察结果
- 背后科学原理
- 变量与对照
- 安全边界和变体

不要把多个原理完全不同的实验塞进一张实验卡。每张实验卡都要填 `safety_level` 和 `supervision_level`，并写“安全提醒”一节。

### 保留来源链路

每张主题卡和实验卡都应通过 `source_refs` 指向来源笔记或来源卡。

### 避免大段原文摘录

对于来源于论文、书籍、文章的内容：

- 保留书目信息或链接
- 保留页码或章节范围
- 用自己的话总结
- 只在绝对必要时保留极短引文

## 文件命名

文件名用 ASCII，`<类型>-<四位编号>-<短 slug>.md`：

- `book-0001-short-slug.md`、`paper-0001-short-slug.md`、`article-0001-short-slug.md`、`note-0001-short-slug.md`
- `topic-0001-short-slug.md`、`experiment-0001-short-slug.md`、`collection-0001-short-slug.md`

编号在同类型内递增，不复用。

## 状态规则

- 只用 `draft`、`reviewed`、`published` 三种状态。
- 新建卡片一律从 `draft` 开始，人工审核后再改成 `reviewed` 或 `published`。
- 回答时默认优先 `reviewed` 和 `published`；用户主动要草案、实验思路或拆解骨架时才用 `draft`。

## 质量检查清单

把卡片提升到 `reviewed` 前，至少确认：

- 一张卡只讲一个概念或一个实验，frontmatter 字段按模板填全
- 标签都来自 `taxonomy/taxonomy.md`
- `source_refs` 指向真实存在的来源卡或来源笔记，没有伪造出处、页码或数据
- 实验卡：材料清楚、步骤可照做、预期观察具体、原理讲得通、变量与对照写明
- 实验卡：`safety_level` / `supervision_level` 与实际风险一致，安全提醒写清哪些步骤必须大人操作
- 主题卡写了常见误解，并能链接到至少一个相关实验
- 没有大段原文摘录

## 在 DSH 里使用

- 这个库在 DSH 的「知识库模式」里可直接检索和维护：用 `kb_search` 找卡、`kb_read` 读卡、`kb_links` 看关联；写卡前用 `kb_schema` 查模板、下一个 id 和建议路径，写完用 `kb_check` 校验。
- DSH 的「实验模式」也会用 `kb_search` / `kb_read` 查这里的实验卡和主题卡；家长认可某个实验后，实验模式用 `lab_save_to_kb` 把它作为 `status: draft` 的实验卡（`source_kind: manual_curation` 或 `article_summary`）写进 `experiments/<实验方向>/experiment-NNNN-<slug>.md`，等人审核后再改状态。
- Agent 规则见同目录 [AGENTS.md](AGENTS.md)；全库共通规范见 [../README.md](../README.md)。

## 跨库关联

卡片可以用 `related:` 字段引用其他库的卡片，写法是 `库id/卡片id`；同库引用仍可只写 id。例如：

```yaml
# experiments/weather_water/experiment-0017-mini-water-cycle-bag.md
related:
  - topic-0017                 # 同库：水循环主题卡
  - games/game-0235            # 游戏库：浴缸“下雨”倒水游戏，适合给更小的孩子做铺垫
```

```yaml
# experiments/light_sound/experiment-0009-shadow-size-and-distance.md
related:
  - games/game-0246            # 游戏库：手电筒寻宝，低龄版的光与影玩法
```

以上只是写法示例，实际卡片里还没有这些字段。
