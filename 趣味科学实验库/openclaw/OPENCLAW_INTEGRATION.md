# OpenClaw 接入说明

这份知识库是按“本地 Markdown 文档源”来设计的，因此最适合先用 OpenClaw 直接读取目录内容，再逐步过渡到 memory 索引或向量检索。

下文中所有 `.` 路径都以当前 `./openclaw/` 目录为基准。

## 这一版为什么采用“工作区直连”

你这次明确希望建设的是一套可持续扩写的趣味科学实验库。

在这个前提下，最稳妥的方案不是先设计复杂数据库，而是：

1. 直接把 openclaw 的默认工作区切到 `./workspace/`
2. 让 chat 直接读取这里的 Markdown 文件
3. 用稳定的目录约定来承接后续论文、笔记、文章和实验拆解

这样做的优点是：

- 接法简单，路径明确
- 不依赖额外基础设施
- 先把结构化沉淀做起来，后续升级也不会推倒重来

## 本仓库已准备好的文件

- 工作区规则：`./workspace/AGENTS.md`
- 角色与灵魂：`./workspace/SOUL.md`、`./workspace/IDENTITY.md`
- 用户目标与长期记忆：`./workspace/USER.md`、`./workspace/MEMORY.md`
- 工作区说明：`./workspace/TOOLS.md`、`./workspace/HEARTBEAT.md`
- 知识库总览入口：`../README.md`
- 配置包说明：`./README.md`

## 角色文件如何把 openclaw 变成科学知识库助手

这次不是简单把一个目录挂给 agent，而是把它的角色和工作流一起定制了。

作用分工如下：

- `AGENTS.md`：定义工作流、文件优先级、回答结构和写回规则
- `SOUL.md`：定义核心使命，不再是通用助手，而是科学知识与实验策展助手
- `IDENTITY.md`：固定角色身份和表达气质
- `USER.md`：说明这位使用者正在建设趣味科学实验库
- `MEMORY.md`：沉淀长期稳定规则，例如“先写来源笔记，再拆主题卡和实验卡”
- `TOOLS.md`：说明这套知识库目录和模板如何使用
- `HEARTBEAT.md`：预留给后续巡检和维护

## 推荐接入模式

### 模式 A：直接把知识库作为聊天工作区

这是当前主方案。

核心做法：

- 让工作区根目录直接放置 `AGENTS.md`、`SOUL.md`、`IDENTITY.md`、`USER.md`、`MEMORY.md` 等角色文件
- 让 chat 围绕这套知识库进行读取、检索、整理和写回

适合你的原因：

- 你要的是“通过 chat 直接回答科学概念和实验设计问题”
- 你的输入来源会持续变化，包括论文、文章和人工笔记
- 你需要的是稳定的拆解流程，而不是一次性整理

## openclaw 回答时的内容优先级

### 用户问“这个科学概念是什么”

优先顺序：

1. `topics/`
2. `sources/notes/`
3. `experiments/`
4. `sources/papers/`、`sources/articles/`、`sources/books/`

### 用户问“可以做什么实验”

优先顺序：

1. `experiments/`
2. `collections/`
3. `topics/`
4. `sources/notes/`

### 用户问“这个实验为什么会这样”

优先顺序：

1. `topics/`
2. `sources/notes/`
3. `experiments/`
4. `sources/papers/`、`sources/articles/`、`sources/books/`

## 推荐内容发布策略

1. 默认优先 `reviewed` 和 `published`
2. 当用户主动要草案、实验思路或拆解骨架时，再返回 `draft`
3. 当你需要可追溯性时，在最终答案里返回 `source_refs`

## 第一阶段里程碑

在你投入更多材料前，先做到：

1. 10 张主题卡
2. 10 张实验卡
3. 10 张来源笔记
4. 3 张专题合集卡

这样知识库就会从“空骨架”进入“可检索、可继续扩写”的状态。