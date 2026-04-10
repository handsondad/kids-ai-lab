---
doc_type: tool_card
id: tool-0047
title: crewai
title_zh: CrewAI
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - multi_agent
  - orchestration
  - python_framework
capabilities:
  - crew_collaboration
  - event_driven_flows
  - project_scaffolding
use_cases:
  - multi_agent_automation
  - role_based_task_execution
  - production_agent_pipelines
source_refs:
  - note-0007
  - article-0047
aliases:
  - crewai framework
  - crews and flows
search_terms:
  - crewai
  - crewai flows crews
  - python multi agent orchestration
  - crewai create crew
last_reviewed: 2026-04-03
---

# 工具定位

CrewAI 是一个多 Agent 编排框架，适合在 Python 技术栈中快速搭建“自治协作 + 流程控制”并存的 Agent 系统。

## 适用场景

- 你要构建多个角色分工协作的 Agent 自动化流程
- 你希望在自治决策之外保持流程可控和可回放
- 你需要从原型逐步升级到生产化部署

## 核心能力

- Crews 抽象: 支持角色化协作与任务委托
- Flows 抽象: 支持事件驱动、条件路由与状态控制
- CLI 项目脚手架: 统一项目结构与配置管理

## 上手路径

1. 先用 CLI 初始化一个最小 crew 项目。
2. 再把单 Agent 任务拆成多角色协作流程。
3. 最后引入 Flow 路由与状态治理做生产化演进。

## 选择边界

- 多 Agent 协作收益高，但调试与评测成本也更高。
- 流程与角色设计需要治理规范，避免复杂度失控。
- 对简单任务，单 Agent 或轻量工作流可能更经济。

## 相关主题

- 与 `tool-0042` 同类但路径不同，可做编排范式对照。
- 与 `tool-0048` 互补: 框架编排 + 平台化应用运营。
- 与 `collection-0001` 强相关，适合作为多 Agent 进阶节点。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0047`
