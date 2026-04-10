# agent 专用配置包

这个目录本身就是一套面向 AI 学习知识库的 agent 配置入口。
下文中所有 `.` 路径都以当前目录为基准。

目标是：

- 让 chat / agent 优先围绕 `./workspace/` 里的知识库工作
- 让它把“学习、检索、拆解、写回”作为默认工作流
- 让你后续能持续把新论文、书籍、文章和事件写回这套库

## 工作区里哪些文件在驱动 agent

- `./workspace/AGENTS.md`：工作流和回答规则
- `./workspace/SOUL.md`：核心使命
- `./workspace/IDENTITY.md`：角色身份
- `./workspace/USER.md`：使用者目标
- `./workspace/MEMORY.md`：长期稳定规则
- `./workspace/TOOLS.md`：目录与写回约定

## 知识内容来自哪里

- `topics/`
- `tools/`
- `events/`
- `collections/`
- `sources/notes/`
- `sources/papers/`
- `sources/books/`
- `sources/articles/`

## 直接使用时的思路

以后你可以直接在 chat 里让它：

- 解释某个 AI 概念
- 对比某类工具
- 回顾某个关键事件
- 把你提供的论文、书摘或文章拆成结构化卡片
- 帮你设计下一步学习路径