---
doc_type: tool_card
id: tool-0056
title: langgraph
title_zh: LangGraph
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - agent_orchestration
  - stateful_workflows
  - production_deployment
capabilities:
  - graph_based_agent_flows
  - durable_execution
  - human_in_the_loop
use_cases:
  - long_running_agents
  - fault_tolerant_workflows
  - production_agent_orchestration
source_refs:
  - note-0007
  - article-0056
aliases:
  - langgraph
  - langgraph framework
search_terms:
  - langgraph durable execution
  - langgraph human in the loop
  - stateful agent graph
  - langgraph production deployment
last_reviewed: 2026-04-03
---

# 工具定位

LangGraph 是用于构建状态化、可恢复的 Agent 工作流框架，适合需要长流程执行、人工审批节点和生产级可靠性的场景。

## 适用场景

- 你要实现可中断恢复的多步骤 Agent 流程
- 你要在关键环节加入人工审核或状态修正
- 你要把实验级 Agent 升级为生产可运维系统

## 核心能力

- 图式编排: 用节点与边表达复杂执行路径
- 持久化恢复: 任务失败后可从断点继续执行
- 状态与可观测联动: 便于追踪每一步状态变化

## 上手路径

1. 先从单 Agent 状态图开始，验证最小工作流。
2. 再加入 checkpoint 与中断恢复机制。
3. 最后接入评测与监控体系进入生产化迭代。

## 选择边界

- 若只做短链路问答，框架能力可能过重。
- 状态建模质量决定系统可靠性上限。
- 生产部署前需补齐日志、告警与回滚策略。

## 相关主题

- 与 `tool-0047` 同属 Agent 编排，可按抽象层级对照选型。
- 与 `tool-0058` 可组合: LangGraph 负责编排，Langfuse 负责观测评测。
- 与 `collection-0001` 强相关，适合作为进阶编排能力节点。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0056`
