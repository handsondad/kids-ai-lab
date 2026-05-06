---
doc_type: tool_card
id: tool-0138
title: claude-code-official
title_zh: Claude Code (官方智能体 CLI)
status: published
language: zh-CN
learning_level: level_300
tool_category: coding_agent
topic_clusters:
  - agents
  - ai_engineering
capabilities:
  - coding
  - tool_use
  - planning
use_cases:
  - autonomous_coding
  - codebase_exploration
source_refs:
  - note-0022
aliases:
  - Claude Code CLI
search_terms:
  - Claude Code 官方文档
  - 如何使用 Claude Code 进行开发
last_reviewed: 2026-05-06
---

# 工具定位

Claude Code 是 Anthropic 官方推出的 Agentic 命令行工具。它允许开发者直接在终端中委派复杂的工程任务，智能体会自主理解代码库、执行编辑、运行测试并修复错误。

## 适用场景

- **全自动功能实现**：只需一句话需求，它能跨文件修改代码并完成自测。
- **深度代码库探索**：快速回答“这个认证逻辑是在哪里处理的？”并给出调用链路。
- **实时 Debug**：在终端运行出错时，直接让 Claude 接入并修复环境或代码问题。

## 核心能力

- **终端原生交互**：具备受控的本地 shell 访问权限，可运行 git, npm, pytest 等工具。
- **混合推理支持**：调用 Claude 3.7 Sonnet 的扩展思考能力处理复杂逻辑。
- **Web Search 集成**：可以直接搜索最新的 API 文档或技术文章。
- **多步自主规划**：能将宏大目标分解为一系列原子操作。

## 上手路径

1. **安装**：通过官方提供的 npm 或 curl 指令安装。
2. **认证**：运行 `claude-code auth` 登录 Anthropic 账户。
3. **交互**：在终端输入 `claude-code` 进入交互模式，或直接跟指令。

## 相关主题

- [topic-0110-hybrid-reasoning-architecture](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/topics/architecture/topic-0110-hybrid-reasoning-architecture.md)
