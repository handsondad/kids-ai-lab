# OpenClaw 专用配置包

这个目录本身就是“孩子的奇妙视界”的独立 OpenClaw 配置包。
下文中所有 `.` 路径都以当前目录为基准。

## 这份配置的目标

- 不改动你原来的 `.openclaw` 主配置
- 让 OpenClaw 直接把 `./workspace/` 当作“孩子的奇妙视界”的工作区
- 让 OpenClaw 先读取角色、年龄阶段、Prompt 框架和检索规则
- 让回答从一开始就围绕“孩子 + 老爸共同认识世界和自己”来组织

## 这份配置会做什么

- 把默认工作区指向 `./workspace/`
- 保留与现有 OpenClaw 环境兼容的插件声明
- 显式补上插件白名单和允许路径
- 不把回答逻辑绑死在某个单独模型上

## 工作区里哪些文件在驱动 OpenClaw

- `./workspace/AGENTS.md`：工作流、优先级、回答结构
- `./workspace/SOUL.md`：核心使命
- `./workspace/IDENTITY.md`：角色身份
- `./workspace/USER.md`：这位使用者到底在构建什么
- `./workspace/MEMORY.md`：长期稳定规则
- `./workspace/AGE_STAGES.md`：不同年龄段的认知深度
- `./workspace/PROMPT_PLAYBOOK.md`：Prompt 和知识生成框架
- `./workspace/SKILLS.md`：检索能力与多模态边界
- `./workspace/TOOLS.md`：本地目录说明和写回约定

## 直接使用时的思路

以后只要让 OpenClaw 使用这份 `./openclaw.json`，它就会把“孩子的奇妙视界”的专用 workspace 当作入口。

你可以直接问：

- 为什么月亮有时大有时小
- 为什么我会想哭
- 给 5 岁孩子讲清楚“植物为什么要晒太阳”
- 用孩子能懂的话解释为什么要刷牙，再给爸爸一个追问脚本
- 如果这个问题要做成配图讲解，帮我写出画面说明和旁白