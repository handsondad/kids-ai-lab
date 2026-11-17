---
doc_type: tool_card
id: tool-0084
title: griptape
title_zh: Griptape
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - modular_framework
  - workflow_engine
  - driver_architecture
capabilities:
  - structures_tasks_tools_engines
  - provider_swappable_drivers
  - built_in_rag_extract_eval_engines
use_cases:
  - enterprise_genai_workflows
  - modular_agent_systems
  - observability_ready_llm_apps
source_refs:
  - note-0007
  - article-0084
aliases:
  - griptape framework
  - griptape ai
search_terms:
  - griptape structures tasks
  - griptape drivers
  - griptape rag engine
  - griptape eval engine
last_reviewed: 2026-04-03
---

# 工具定位

Griptape 是模块化 GenAI 框架，适合通过可替换驱动与结构化组件构建可维护、可治理的代理工作流。

## 适用场景

- 你要搭建可演进的企业级代理/工作流系统
- 你要把模型和基础设施接入做成可替换层
- 你要在同一框架内整合 RAG、抽取、评测能力

## 核心能力

- 组件化架构: Structures、Tasks、Tools、Engines 分层清晰
- Driver 抽象: 最小改动切换模型与外部服务
- 引擎能力集: RAG、Extraction、Summary、Eval 可组合

## 上手路径

1. 先用 PromptTask 跑通单任务示例。
2. 再用 Workflow 构建串并行任务链。
3. 最后引入 Driver 与观测组件做生产化增强。

## 选择边界

- 组件丰富，初期需定义标准模板避免过度设计。
- 高灵活性要求团队具备架构治理意识。
- 复杂流程下仍需独立评测和成本控制机制。

## 相关主题

- 与 `tool-0050` 同属编排框架: Haystack 偏上下文工程主线，Griptape 偏模块分层与驱动替换。
- 与 `tool-0080` 可组合: Griptape 负责流程，Portkey 提供网关可靠性策略。
- 与 `collection-0001` 强相关，补齐模块化企业框架视角。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0084`
