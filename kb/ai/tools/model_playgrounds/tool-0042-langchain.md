---
doc_type: tool_card
id: tool-0042
title: langchain
title_zh: LangChain
status: reviewed
language: zh-CN
learning_level: level_200
tool_category: model_playground
topic_clusters:
  - agent_framework
  - llm_app_dev
  - orchestration
capabilities:
  - workflow_automation
  - code_generation
  - retrieval_augmented_generation
use_cases:
  - agent_workflow_orchestration
  - llm_component_composition
  - rapid_prototyping_to_production
source_refs:
  - note-0007
  - article-0042
aliases:
  - langchain python
  - langchain framework
search_terms:
  - langchain
  - agent engineering platform
  - langgraph langsmith
  - llm application framework
last_reviewed: 2026-04-03
---

# 工具定位

LangChain 是 LLM 应用与 Agent 工作流框架，适合通过模块化组件快速构建、评测并迭代智能应用。

## 适用场景

- 你要把多模型、多工具、多检索组件编排成统一流程
- 你要快速做原型并逐步演进为可维护系统
- 你要降低模型更换和供应商切换成本

## 核心能力

- 标准化抽象: 模型、检索、工具等统一接口
- 生态协同: 与 LangGraph/LangSmith 紧密配合
- 可扩展架构: 高层快搭建，低层可细粒度控制

## 上手路径

1. 先用最小链路验证核心业务路径。
2. 再引入检索与工具调用，形成可观测工作流。
3. 最后接入评测和部署体系，做生产化治理。

## 选择边界

- 抽象层多，需防止过度封装导致排障困难。
- 版本迭代快，建议固定依赖并做兼容测试。
- 关键链路仍需自己定义可靠性与安全策略。

## 相关主题

- 与 `tool-0043` 互补: 编排框架 + 数据框架。
- 与 `tool-0041` 互补: MCP 入门后接 Agent 工程。
- 与 `collection-0001` 强相关，属于构建阶段核心工具。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0042`
