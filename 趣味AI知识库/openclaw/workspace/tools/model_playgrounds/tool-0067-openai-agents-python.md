---
doc_type: tool_card
id: tool-0067
title: openai_agents_python
title_zh: OpenAI Agents Python SDK
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - multi_agent
  - guardrails
  - tracing
capabilities:
  - handoff_based_collaboration
  - built_in_guardrails
  - session_and_run_tracing
use_cases:
  - lightweight_multi_agent_workflows
  - safe_tool_orchestration
  - observable_agent_execution
source_refs:
  - note-0007
  - article-0067
aliases:
  - openai agents python
  - openai-agents
search_terms:
  - openai agents sdk python
  - openai agents handoffs
  - openai agents guardrails
  - openai agents tracing
last_reviewed: 2026-04-03
---

# 工具定位

OpenAI Agents Python SDK 是轻量级多代理框架，适合快速构建具备委派、护栏和追踪能力的代理工作流。

## 适用场景

- 你要快速搭建多代理协作流程并迭代验证
- 你要在输入输出层加入安全检查与人审节点
- 你要记录代理运行轨迹用于调试和优化

## 核心能力

- Handoffs 委派: 代理间职责分发与任务接力
- Guardrails 护栏: 输入输出安全与质量约束
- Sessions + Tracing: 会话状态与运行轨迹一体化管理

## 上手路径

1. 先创建单代理并跑通基础 Runner。
2. 再加入工具调用与代理间 handoff。
3. 最后配置 guardrails、会话与 tracing 完成闭环。

## 选择边界

- 轻量化有利上手，但复杂治理需自建外围系统。
- 生产场景要补齐权限、审计和成本控制策略。
- Python 优先，跨语言协作需单独规划。

## 相关主题

- 与 `tool-0057` 同属多代理: AutoGen 偏框架生态，OpenAI Agents 偏轻量 SDK。
- 与 `tool-0058` 可组合: SDK 负责执行，Langfuse 负责观测评测。
- 与 `collection-0001` 强相关，补齐轻量多代理实操路径。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0067`
