# 亲子游戏知识库

这个目录是一个以 Markdown 为主的亲子游戏知识库。
它同时服务两个目标：

- 便于人工长期维护
- 便于后续接入 OpenClaw 或其他 RAG 检索系统

当前目录主要是知识库入口层。
真正供 OpenClaw 使用的工作区和知识内容位于 `./openclaw/workspace/`。

## 设计目标

1. 一个文件只表达一个原子化知识单元。
2. 每个游戏都可以追溯到来源笔记和来源书籍。
3. 标签使用受控分类，不走自由扩散式命名。
4. 内容天然适合检索：短、直接、答案优先。
5. 通过结构化摘要而非大段原文摘录，降低版权风险。

## 当前目录结构

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
        *.md
      taxonomy/
        *.md
      sources/
        books/
          book-*.md
        notes/
          note-*.md
      games/
        age_00_12m/
          attention/
          emotion/
          fine_motor/
          gross_motor/
          language/
          sensory/
          social/
        age_12_24m/
          attention/
          emotion/
          fine_motor/
          language/
          sensory/
          social/
        age_24_36m/
          attention/
          creativity/
          emotion/
          language/
          math_logic/
          self_care/
          sensory/
          social/
      collections/
        collection-*.md
```

当前仓库已经开始进入真实内容阶段，不再保留示例文件。后续新增内容直接使用真实书籍、真实来源笔记和真实游戏卡。

除非特别说明，下文中出现的 `games/`、`collections/`、`sources/`、`taxonomy/`、`_templates/` 等逻辑路径，默认都以 `./openclaw/workspace/` 为基准。

## 知识单元类型

### 1. 来源书籍卡

用于记录书目信息和提炼进度。

适合在这些时候创建：

- 你开始阅读一本新的育儿或亲子互动书
- 你想记录哪些章节值得提炼
- 你想建立清晰的来源链路，方便后续回看

模板：[./openclaw/workspace/_templates/source_book_template.md](openclaw/workspace/_templates/source_book_template.md)

### 2. 来源笔记卡

用于记录你对某一章、某一节或某个主题的自主转述摘要。

适合在这些时候创建：

- 你刚读完一个章节
- 你希望保留页码和出处信息
- 一个章节可能会拆出多个游戏卡片

模板：[./openclaw/workspace/_templates/source_note_template.md](openclaw/workspace/_templates/source_note_template.md)

### 3. 游戏卡

这是最核心的检索单元。

适合在这些时候创建：

- 一个游戏可以被独立描述清楚
- 它有明确的年龄段、场景和能力目标
- 你希望模型直接拿它来回答用户问题

模板：[./openclaw/workspace/_templates/game_card_template.md](openclaw/workspace/_templates/game_card_template.md)

### 4. 合集卡

用于把多个游戏打包成一个场景化答案。

适合在这些时候创建：

- 你想预制“雨天游戏”“睡前 5 分钟游戏”这类答案
- 你希望对高频需求做提前编排

模板：[./openclaw/workspace/_templates/collection_template.md](openclaw/workspace/_templates/collection_template.md)

## 分类策略

只保留两层分类：

1. 文件夹分类
   - 第一维：年龄阶段
   - 第二维：核心能力

2. 元数据分类
   - 场景 `scenes`
   - 材料 `materials`
   - 时长 `duration`
   - 能量等级 `energy_level`
   - 难度 `difficulty`
   - 安全等级 `safety_level`
   - 别名和搜索词 `aliases` / `search_terms`

这样拆分的好处是：

- 文件夹稳定、易浏览
- 元数据灵活、易过滤
- 避免目录树越来越深，最后无法维护

受控词表见 [./openclaw/workspace/taxonomy/taxonomy.md](openclaw/workspace/taxonomy/taxonomy.md)。

## 推荐写作流程

1. 在 `sources/books/` 下创建一本来源书籍卡。
2. 对每个有价值的章节或主题，在 `sources/notes/` 下创建来源笔记卡。
3. 把可复用的玩法拆成原子化游戏卡，放入 `games/`。
4. 当游戏卡积累到一定数量后，再创建 `collections/` 中的合集卡。
5. 当元数据补全且措辞清晰后，把状态从 `draft` 提升到 `reviewed`。

## 编写规则

### 每张游戏卡都要原子化

每张游戏卡应当把一个真实问题回答好，例如：

- 2 岁孩子在家里、没有玩具时可以玩什么
- 睡前 10 分钟适合什么语言互动游戏
- 哪种低能量亲子游戏适合练习轮流等待

不要把多个互不相干的游戏塞进同一个文件。

### 把答案放在最前面

首段应尽快说明：

- 这是什么游戏
- 适合什么年龄
- 适合什么场景
- 核心发展价值是什么

这会同时提升人工阅读体验和向量检索效果。

### 保留来源链路

每张游戏卡都应通过 `source_refs` 指向来源笔记。
每张来源笔记都应通过 `source_book` 指向来源书籍。

如果是基于现有知识库模式推导出的新游戏设计，也不要跳过这条链路。
推荐做法是：

1. 先在 `sources/notes/` 下写一张设计来源笔记，记录它参考了哪些现有游戏、来源笔记或设计原则。
2. 再让新的游戏卡通过 `source_refs` 指向这张设计来源笔记。

这样既能保留 AI 辅助设计的推导过程，也不会破坏知识库的一致性。

### 使用别名和搜索词

父母的提问方式会很多样。

例如：

- 安静游戏
- 睡前游戏
- 室内游戏
- 无材料游戏
- 语言游戏
- 专注力游戏

把这些变体存入 `aliases` 和 `search_terms`。

### 避免大段原文摘录

对于来源于书籍的内容：

- 保留书目信息
- 保留页码范围
- 用自己的话总结
- 只有在绝对必要时才保留极短引文

不要把仓库建设成大段原文的堆积区。

## 文件命名规则

推荐模式：

- `book-0001-short-slug.md`
- `note-0001-short-slug.md`
- `game-0001-short-slug.md`
- `collection-0001-short-slug.md`

即使正文是中文，文件名也建议使用 ASCII。
稳定 ID 比“好看文件名”更重要。

## 状态规则

只使用三种状态：

- `draft`：草稿或未完成
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

## OpenClaw 落地方案

这一版我采用的是“知识库目录直连工作区”方案，而不是依赖未验证的外部 memory 根目录字段。

原因很简单：

- 这是当前信息下最稳妥的接法
- 你可以直接把 OpenClaw 的工作区切到 `./openclaw/workspace/`
- OpenClaw chat 会直接读取这个工作区里的 Markdown 文件
- 同时保留 `memory-core` / `memory-lancedb` 的插件配置，为后续索引化保留入口

本仓库已经为你准备了这几样东西：

- 专用工作区规则：[./openclaw/workspace/AGENTS.md](openclaw/workspace/AGENTS.md)
- 专用角色与灵魂：[./openclaw/workspace/SOUL.md](openclaw/workspace/SOUL.md)、[./openclaw/workspace/IDENTITY.md](openclaw/workspace/IDENTITY.md)
- 用户目标与长期记忆：[./openclaw/workspace/USER.md](openclaw/workspace/USER.md)、[./openclaw/workspace/MEMORY.md](openclaw/workspace/MEMORY.md)
- 工作区本地说明：[./openclaw/workspace/TOOLS.md](openclaw/workspace/TOOLS.md)、[./openclaw/workspace/HEARTBEAT.md](openclaw/workspace/HEARTBEAT.md)
- 详细接入说明：[./openclaw/OPENCLAW_INTEGRATION.md](openclaw/OPENCLAW_INTEGRATION.md)
- 独立的 OpenClaw 配置包：[./openclaw/openclaw.json](openclaw/openclaw.json)

## README 内的接入步骤

1. 保留原来的 `.openclaw` 主配置，不要覆盖它。
2. 使用这里的独立配置入口：[./openclaw/openclaw.json](openclaw/openclaw.json)。
3. 这份配置会把 OpenClaw 的工作区指向 `./openclaw/workspace/`。
4. 启动后，OpenClaw 会先读取 [./openclaw/workspace/AGENTS.md](openclaw/workspace/AGENTS.md)、[./openclaw/workspace/SOUL.md](openclaw/workspace/SOUL.md)、[./openclaw/workspace/IDENTITY.md](openclaw/workspace/IDENTITY.md)、[./openclaw/workspace/USER.md](openclaw/workspace/USER.md)、[./openclaw/workspace/MEMORY.md](openclaw/workspace/MEMORY.md) 等角色文件，再围绕工作区里的知识文件进行回答和设计。
5. 以后你通过 chat 提问时，它不再是通用助手，而是一个围绕这套知识库运转的亲子游戏设计与策展助手。

建议首次验证时直接问这类问题：

- 适合 2 岁半孩子、在家里、10 分钟内能完成的语言游戏有什么
- 给我 3 个睡前低能量亲子游戏，不要需要额外材料
- 为什么某个轮流等待游戏适合 2-3 岁孩子
- 基于现有知识库，帮我设计一个新的雨天亲子游戏，并按草稿写回知识库

## 建议的下一步

1. 先聚焦 3-5 本来源书籍。
2. 先做出 20-30 张高质量 `reviewed` 游戏卡。
3. 观察真实检索里哪些标签最有用。
4. 再决定是否扩展 taxonomy。

更详细的 OpenClaw 接入说明，见 [./openclaw/OPENCLAW_INTEGRATION.md](openclaw/OPENCLAW_INTEGRATION.md)。