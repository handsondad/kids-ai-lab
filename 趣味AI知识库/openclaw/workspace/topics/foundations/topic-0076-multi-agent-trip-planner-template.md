---
doc_type: topic_card
id: topic-0076
title: multi_agent_trip_planner_template
title_zh: 多智能体旅行助手模板
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - multi_agent
  - application_engineering
  - ai_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0073
source_refs:
  - note-0012
  - article-0140
aliases:
  - trip planner multi agents
  - mcp powered travel assistant
search_terms:
  - attraction weather hotel planner agents
  - trip planner json schema
  - multi agent orchestration backend
last_reviewed: 2026-04-08
---

# 一句话定义

多智能体旅行助手模板用于将景点、天气、酒店、行程规划等角色化 Agent 编排为可交付的旅行规划应用。

## 关键路径

1. 拆分角色 Agent 并定义统一输入输出格式。
2. 通过共享工具层接入地图与外部服务能力。
3. 用规划 Agent 汇总多源结果并生成结构化计划。
4. 前后端联动展示地图、预算和可编辑行程。

## 实操要点

- 工具调用格式应标准化，避免提示词歧义。
- 业务模型要先定义 schema 再实现流程。
- 失败场景要提供可回退的默认计划。

## 检索提示

- 适用于需要落地垂直行业多智能体应用的团队。
