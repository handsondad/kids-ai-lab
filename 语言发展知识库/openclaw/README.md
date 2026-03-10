# OpenClaw 专用配置包

这个目录本身就是独立 OpenClaw 配置包。
下文中所有 `.` 路径都以当前目录为基准。

目标是：

- 不修改你原来的 `.openclaw` 主配置
- 让 OpenClaw 直接把 `./workspace/` 当作工作区
- 让 OpenClaw 先读取 `./workspace/` 里的角色文件，再围绕孩子语言发展知识库回答和写回

## 这份配置会做什么

- 把默认工作区指向 `./workspace/`
- 保留当前可参考的模型和网关配置结构
- 显式声明 `memory-core` / `memory-lancedb` 插件
- 显式补上插件白名单和允许路径

## 工作区里哪些文件在驱动 OpenClaw

- `./workspace/AGENTS.md`：工作流和回答规则
- `./workspace/SOUL.md`：核心使命
- `./workspace/IDENTITY.md`：角色身份
- `./workspace/USER.md`：使用者目标
- `./workspace/MEMORY.md`：长期稳定规则
- `./workspace/TOOLS.md`：本地目录和写回说明

## 知识内容来自哪里

- `stages/`
- `practices/`
- `collections/`
- `sources/notes/`
- `sources/books/`

## 直接使用时的思路

以后你只要让 OpenClaw 使用这份 `./openclaw.json`，它就会把 `./workspace/` 视为自己的主工作区。

你可以直接问：

- 18-24 个月的孩子通常会出现哪些语言表现
- 睡前怎么和 2 岁半孩子对话，更能练习表达
- 在排队等待时，怎么和 3 岁孩子聊天更能练习叙事
- 把这段书摘先整理成来源笔记，再拆成一张阶段卡和两张练习卡