# agent 专用配置包

这个目录本身就是独立 agent 配置包。
下文中所有 `.` 路径都以当前目录为基准。

目标是：

- 不修改你原来的主配置
- 让 agent 直接把 `./workspace/` 当作工作区
- 让 agent 先读取 `./workspace/` 里的角色文件，再围绕趣味科学实验库回答和写回

## 这份配置会做什么

- 把默认工作区指向 `./workspace/`
- 让 agent 优先阅读科学主题、实验卡和来源摘要
- 让新增知识默认按“来源笔记 -> 主题卡 / 实验卡 -> 合集卡”的顺序写回

## 工作区里哪些文件在驱动 agent

- `./workspace/AGENTS.md`：工作流和回答规则
- `./workspace/SOUL.md`：核心使命
- `./workspace/IDENTITY.md`：角色身份
- `./workspace/USER.md`：使用者目标
- `./workspace/MEMORY.md`：长期稳定规则
- `./workspace/TOOLS.md`：本地目录和写回说明

## 知识内容来自哪里

- `topics/`
- `experiments/`
- `collections/`
- `sources/notes/`
- `sources/papers/`
- `sources/articles/`
- `sources/books/`

## 直接使用时的思路

以后你只要让 agent 使用这份工作区，它就会把 `./workspace/` 视为自己的主工作区。

你可以直接问：

- 纸直升机实验背后是什么科学原理
- 怎么把一篇关于儿童科学教育的论文拆成主题卡和实验卡
- 帮我把这篇科普文章先整理成来源笔记，再拆成两张主题卡
- 给我整理一个适合入门的空气、力和运动实验合集