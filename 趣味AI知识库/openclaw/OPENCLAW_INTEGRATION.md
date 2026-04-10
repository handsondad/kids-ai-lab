# OpenClaw 接入说明

这份知识库是按“本地 Markdown 文档源”来设计的，因此最适合先用 OpenClaw 直接读取目录内容，再逐步过渡到 memory 索引或向量检索。

下文中所有 `.` 路径都以当前 `./openclaw/` 目录为基准。

## 这一版为什么采用工作区直连

你当前要的是：

1. 能持续录入 AI 论文、书籍、文章和事件
2. 能在 chat 中直接基于知识库学习
3. 能把后续学习继续写回知识库

因此这一版优先做的是：

1. 把知识结构固化到 `./workspace/`
2. 让 chat 直接读取这里的 Markdown 文件
3. 让角色文件把默认行为固定为“先检索，再解释，再写回”

## 角色文件如何把 openclaw 变成 AI 学习库助手

作用分工如下：

- `AGENTS.md`：定义工作流、文件优先级、回答结构和写回规则
- `SOUL.md`：定义核心使命，不再是通用助手，而是 AI 学习知识库策展与拆解助手
- `IDENTITY.md`：固定角色身份和表达气质
- `USER.md`：告诉它这位使用者正在建设 AI 学习知识库，希望围绕知识库持续学习
- `MEMORY.md`：沉淀长期稳定规则，例如“先做来源笔记，再拆主题 / 工具 / 事件卡”
- `TOOLS.md`：说明目录结构与模板用法
- `HEARTBEAT.md`：留作后续知识库巡检和维护入口

## openclaw 回答时的内容优先级

### 当用户问某个概念是什么

1. `topics/`
2. `sources/notes/`
3. `events/`
4. `sources/papers/` / `sources/books/` / `sources/articles/`

### 当用户问某个工具怎么选或怎么用

1. `tools/`
2. `collections/`
3. `topics/`
4. `sources/notes/`

### 当用户问某个论文、发布或行业变化为什么重要

1. `events/`
2. `sources/notes/`
3. `topics/`
4. `sources/papers/` / `sources/articles/`

## 建议纳入和降权的目录

建议优先纳入：

- `topics/`
- `tools/`
- `events/`
- `collections/`
- `sources/notes/`

建议低优先级处理：

- `sources/books/`
- `sources/papers/`
- `sources/articles/`

建议排除：

- `_templates/`

## 推荐的内容发布策略

1. 默认优先 `reviewed` 和 `published`
2. 用户主动要草案或结构思路时，再返回 `draft`
3. 当需要可追溯性时，在最终答案里返回 `source_refs`

## 第一阶段里程碑

在投入更复杂的自动化前，先做到：

1. 12 张主题卡
2. 8 张工具卡
3. 8 张事件卡
4. 12 张来源笔记
5. 5 个专题合集卡

这已经足够验证分类法、检索行为和学习闭环是否合理。