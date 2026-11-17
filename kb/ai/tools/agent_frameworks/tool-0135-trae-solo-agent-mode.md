---
doc_type: tool_card
id: tool-0135
title: trae-solo-agent-mode
title_zh: Trae-Solo (独立执行模式)
status: published
language: zh-CN
learning_level: level_200
tool_category: coding_agent
topic_clusters:
  - agents
  - ai_engineering
capabilities:
  - coding
  - tool_use
  - planning
use_cases:
  - background_refactoring
  - autonomous_debugging
source_refs:
  - note-0020
aliases:
  - Trae Solo
search_terms:
  - Trae Solo 模式怎么用
  - Trae 独立智能体
last_reviewed: 2026-05-06
---

# 工具定位

Trae-Solo 是 Trae IDE 推出的一种独立运行模式，允许其内置的高级智能体（Agent）脱离 GUI 编辑器界面，以独立进程的形式在后台执行复杂的、长周期的系统级任务。

## 适用场景

- **长周期重构**：在不干扰用户编码的情况下，让 Agent 在后台对整个项目进行架构级优化。
- **自动修复与验证**：自动监控测试结果，并在后台自主编写、运行并验证修复代码。
- **环境搭建自动化**：在项目启动时，由 Solo 模式智能体自动配置本地开发环境。

## 核心能力

- **全权文件系统操作**：具备比普通 IDE 插件更深的权限，可跨目录进行大规模文件操作。
- **持久化状态跟踪**：即使关闭 IDE，Solo 模式的任务依然可以在后台维持，直到任务完成。
- **多步自主循环**：不依赖用户的每一步确认，具备完整的 Planning-Execution-Check 闭环。

## 上手路径

1. **进入 Trae**：在 Trae 编辑器中选择“Agent Settings”。
2. **启用 Solo 模式**：点击“Detach for Solo Task”。
3. **分配目标**：输入一个宏大的目标（如“将项目所有接口升级为 GraphQL”），然后即可最小化 IDE。

## 选择边界

- **风险控制**：由于权限极高且高度自主，建议在版本控制（Git）环境完备的情况下使用，以便随时回滚。

## 相关主题

- [topic-0106-openclaw-variants-and-nicknames](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/topics/agents/topic-0106-openclaw-variants-and-nicknames.md)

## 来源说明

- 来源笔记 ID: `note-0020`
