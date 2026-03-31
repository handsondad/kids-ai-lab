# OpenClaw 接入说明

这份知识库是按“本地 Markdown 文档源”来设计的，因此最适合先用 OpenClaw 直接读取目录内容，再逐步过渡到 memory 索引或向量检索。

下文中所有 `.` 路径都以当前 `./openclaw/` 目录为基准。

## 这一版为什么采用“工作区直连”

你这次明确希望把儿童心理学知识库和素材库直接接进 OpenClaw。

在这个前提下，最稳妥的方案不是猜测一堆外部索引字段，而是：

1. 直接把 OpenClaw 的默认工作区切到 `./workspace/`
2. 让 chat 直接读取这里的 Markdown 文件
3. 同时在配置里显式保留 `memory-core` / `memory-lancedb` 的插件声明

这样做的优点是：

- 接法简单，路径明确
- 不依赖未验证的 `memory root` 风格字段
- 即使你的 OpenClaw 版本未来变化，这套目录结构也仍然有效

## 本仓库已准备好的文件

- 工作区规则：`./workspace/AGENTS.md`
- 角色与灵魂：`./workspace/SOUL.md`、`./workspace/IDENTITY.md`
- 用户目标与长期记忆：`./workspace/USER.md`、`./workspace/MEMORY.md`
- 工作区本地说明：`./workspace/TOOLS.md`、`./workspace/HEARTBEAT.md`
- 知识库总览入口：`../README.md`
- 配置包说明：`./README.md`
- 独立配置包：`./openclaw.json`

## 角色文件如何把 OpenClaw 变成儿童心理学知识库助手

这次不是简单把一个目录挂给 OpenClaw，而是把它的“人格层”和“工作流层”也一起定制了。

作用分工如下：

- `AGENTS.md`：定义工作流、文件优先级、回答结构和写回规则
- `SOUL.md`：定义核心使命，不再是通用助手，而是语言发展知识库策展与练习设计助手
- `IDENTITY.md`：固定角色身份和表达气质
- `USER.md`：告诉它这位使用者正在建设孩子语言发展知识库，希望它围绕知识库运转
- `MEMORY.md`：沉淀长期稳定规则，例如“先写来源笔记再拆阶段卡和练习卡”
- `TOOLS.md`：告诉它这套知识库目录和模板如何使用
- `HEARTBEAT.md`：留作后续知识库巡检和维护入口

因此，OpenClaw 启动后不只是“能读这个目录”，而是会以“儿童心理学知识库助手”的身份来读、答、整理和写回这些文件。

## 推荐接入模式

### 模式 A：直接把知识库作为聊天工作区

这是本次提供的主方案。

核心做法：

- 把专用配置文件放在 `./openclaw.json`
- 让这份配置把 `agents.defaults.workspace` 指向 `./workspace/`
- 让工作区根目录直接放置 `AGENTS.md`、`SOUL.md`、`IDENTITY.md`、`USER.md`、`MEMORY.md` 等角色文件
- OpenClaw chat 之后就会围绕这套知识库进行读取、检索、整理和写回

适合你的原因：

- 你要的是“通过 chat 直接回答孩子语言发展和练习内容”
- 你的内容本身就是一套结构化 Markdown 库
- 这比额外猜测 memory 挂载规则更可靠

### 模式 B：未来再升级为 memory 索引模式

如果你未来重新安装 OpenClaw，并确认你的版本支持把外部目录声明为 memory 数据源，那么可以在当前结构上继续升级。

但在这之前，没必要把接入点建立在未确认的字段名上。

## OpenClaw 回答时的内容优先级

### 用户问“这个年龄通常会发展什么心理能力或出现那些表现”

优先顺序：

1. `stages/`
2. `sources/notes/`
3. `supports/`
4. `sources/books/`

### 用户问“在当前情绪或行为场景里该怎么回应”

优先顺序：

1. `supports/`
2. `collections/`
3. `stages/`
4. `sources/notes/`

### 用户问“为什么这样回应有效”

优先顺序：

1. `sources/notes/`
2. `stages/`
3. `supports/`
4. `sources/books/`

## 建议纳入和降权的目录

建议优先纳入：

- `stages/`
- `supports/`
- `collections/`
- `sources/notes/`

建议低优先级处理：

- `sources/books/`

建议排除：

- `_templates/`

## 为什么阶段卡和练习卡要分开

阶段卡更适合回答“理解型问题”，例如：

- 18-24 个月为什么更容易出现强烈挫败反应
- 3-4 岁孩子为什么开始更强烈地主张自主和边界

支持卡更适合回答“执行型问题”，例如：

- 分离时第一句话该怎么说
- 发脾气时先共情还是先设限
- 睡前拖延时怎么降低升级概率

把两者拆开后，检索更清晰，回答也更稳定。

## 如果 OpenClaw 能读 front matter，优先使用这些字段

- `doc_type`
- `id`
- `title_zh`
- `status`
- `age_stage`
- `domains`
- `scenes`
- `child_signals`
- `support_strategies`
- `materials`
- `duration_min`
- `adult_effort`
- `difficulty`
- `source_refs`
- `aliases`
- `search_terms`

建议的使用顺序是：

1. 先做元数据过滤
2. 再做语义检索
3. 当用户问“怎么办”时，对 `doc_type=support_card` 进行重排加权
4. 当用户问“发展阶段”时，对 `doc_type=stage_card` 进行重排加权

## 即使没有 front matter 解析，也要保持正文结构一致

每张阶段卡尽量保持同样的正文顺序：

1. 阶段概览
2. 这个阶段常见的心理发展任务
3. 常见情绪与行为表现
4. 照护者的重点支持方向
5. 推荐回应方式或说法
6. 观察与提醒
7. 何时考虑进一步关注
8. 来源说明

每张支持卡尽量保持同样的正文顺序：

1. 支持简介
2. 适用场景
3. 支持目标
4. 准备材料
5. 支持步骤
6. 照护者可直接说的话
7. 为什么这样做有效
8. 观察点
9. 难度变体
10. 安全或边界提醒
11. 来源说明

## 推荐的内容发布策略

如果以后你把它接成对用户开放的助手，建议：

1. 默认优先 `reviewed` 和 `published`
2. 当用户主动要草案或结构思路时，再返回 `draft`
3. 当你需要可追溯性时，在最终答案里返回 `source_refs`

## 第一阶段里程碑

在你投入更复杂的集成前，先做到：

1. 10 张阶段卡
2. 20 张支持卡
3. 10 张来源笔记
4. 5 张书籍卡
5. 3 个高频合集卡

这已经足够验证年龄桶、分类法和检索行为是否合理。