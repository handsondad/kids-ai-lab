---
doc_type: tool_card
id: tool-0030
title: roo_code
title_zh: Roo Code
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: coding_agent
topic_clusters:
  - agents
  - ai_engineering
  - coding
capabilities:
  - coding
  - planning
  - workflow_automation
use_cases:
  - code_generation_and_refactor
  - editor_native_agent_workflow
  - mcp_augmented_development
source_refs:
  - note-0007
  - article-0030
aliases:
  - roo
  - ai dev team in editor
search_terms:
  - roo code 是什么
  - roo code modes
  - roo code mcp
  - vscode coding agent
last_reviewed: 2026-04-03
---

# 工具定位

Roo Code 是面向编辑器内开发流程的 AI 编码助手体系，强调多模式协作、代码改造与调试支持，以及可扩展的 MCP 工具接入。

## 适用场景

- 你希望在同一编辑器里完成生成、重构、调试和文档更新
- 团队需要按任务类型切换不同智能助手模式
- 你要将外部工具链通过 MCP 接入编码流程

## 核心能力

- 模式化协作: Code、Architect、Ask、Debug、Custom 模式覆盖不同任务
- 原位开发流程: 在编辑器内完成理解、修改、验证闭环
- 扩展接入: 支持 MCP 与自定义模式增强团队工作流

## 上手路径

1. 先用 Code/Ask 模式跑通最小编码与解释任务。
2. 再加入 Debug/Architect 模式处理重构与问题定位。
3. 最后接入 MCP 与团队规范，建立可复用协作流程。

## 选择边界

- 自动改码必须配合代码审查与测试门禁。
- 在超大仓库中需要良好的上下文管理策略。
- 工具提升效率但不替代架构判断与业务理解。

## 相关主题

- 与 `tool-0022`、`tool-0025` 相关，分别对应编排能力与类型安全开发思路。
- 与 `tool-0013` 强相关，可用 MCP 扩展工具与数据能力。
- 与 `collection-0004` 强相关，补齐编码 Agent 方向。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0030`
