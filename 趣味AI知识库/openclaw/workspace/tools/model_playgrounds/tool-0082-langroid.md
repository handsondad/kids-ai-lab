---
doc_type: tool_card
id: tool-0082
title: langroid
title_zh: Langroid
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - multi_agent
  - python_framework
  - task_orchestration
capabilities:
  - agent_task_core_abstractions
  - toolmessage_and_function_calling
  - mcp_tool_adapter_support
use_cases:
  - modular_multi_agent_apps
  - rag_with_agent_collaboration
  - local_and_remote_llm_orchestration
source_refs:
  - note-0007
  - article-0082
aliases:
  - langroid framework
  - langroid ai
search_terms:
  - langroid task agent
  - langroid mcp adapter
  - langroid multi agent
  - langroid docchat
last_reviewed: 2026-04-03
---

# 工具定位

Langroid 是轻量多代理 Python 框架，强调 Agent 与 Task 抽象、低耦合模块化和多模型可替换编排。

## 适用场景

- 你要构建结构清晰的多代理协作系统
- 你要在 RAG 与工具调用间做统一编排
- 你要保持框架轻量同时支持扩展能力

## 核心能力

- Agent/Task 双核心: 职责与流程解耦
- 统一工具接口: ToolMessage 与函数调用并行
- MCP 适配支持: 将外部工具转换为可用工具消息

## 上手路径

1. 先用单 Agent + 单 Task 跑通最小流程。
2. 再引入子任务形成多代理协作结构。
3. 最后对接检索、工具与可观测组件。

## 选择边界

- 灵活度高，需要团队统一模式与提示规范。
- 多代理链路增长后排障成本会显著上升。
- 大规模生产需补齐平台治理与权限层。

## 相关主题

- 与 `tool-0056` 对照: LangGraph 偏图式状态机，Langroid 偏 Agent/Task 语义抽象。
- 与 `tool-0075` 可组合: Langroid 负责代理协作，MCP TS/协议层负责工具互通。
- 与 `collection-0001` 强相关，补齐轻量多代理编排路线。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0082`
