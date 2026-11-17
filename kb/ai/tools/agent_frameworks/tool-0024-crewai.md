---
doc_type: tool_card
id: tool-0024
title: crewai
title_zh: CrewAI
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - workflow
capabilities:
  - planning
  - workflow_automation
  - tool_use
use_cases:
  - multi_agent_collaboration
  - production_agent_workflow
  - process_automation
source_refs:
  - note-0007
  - article-0024
aliases:
  - crew ai
  - crews and flows
search_terms:
  - crewai 是什么
  - crews flows 区别
  - 多 agent 编排
  - crewai 生产落地
last_reviewed: 2026-04-03
---

# 工具定位

CrewAI 是面向多 Agent 自动化的 Python 框架，通过 Crews 与 Flows 的双层机制，在“自主协作”与“确定性流程控制”之间取得平衡。

## 适用场景

- 你需要多个角色化 Agent 协作完成复杂任务
- 你希望把 Agent 执行流程做成可控、可维护的生产流程
- 你要在事件驱动和条件分支场景中实现稳定自动化

## 核心能力

- Crews 协作层: 组织多 Agent 角色与任务协同
- Flows 流程层: 用事件驱动和路由条件控制执行路径
- 组合编排: 将自治能力与生产流程治理组合在同一系统

## 上手路径

1. 先用单 Crew 跑通一个顺序任务，确认角色与任务拆分。
2. 再引入 Flow 路由与状态，处理分支与异常路径。
3. 最后接入观测与评测，建立长期维护机制。

## 选择边界

- 多 Agent 系统对任务定义和协调机制要求更高。
- 规模扩大后调试成本上升，必须配套可观测工具。
- 对一次性小任务，单 Agent 方案可能更简单高效。

## 相关主题

- 与 `tool-0022` 互补，可在 LangChain 组件生态之上使用多 Agent 流程思路。
- 与 `tool-0013` 强相关，可通过 MCP 增强 Agent 工具接入能力。
- 与 `topic-0011` 强相关，适合纳入发布前评测与回归检查。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0024`
