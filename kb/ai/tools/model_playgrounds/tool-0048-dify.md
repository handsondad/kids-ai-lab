---
doc_type: tool_card
id: tool-0048
title: dify
title_zh: Dify
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - llm_app_platform
  - rag
  - agent_workflow
capabilities:
  - visual_workflow
  - model_management
  - llmops_observability
use_cases:
  - llm_app_builder
  - rag_application_deployment
  - agent_platform_operations
source_refs:
  - note-0007
  - article-0048
aliases:
  - difyai
  - dify platform
search_terms:
  - dify
  - dify self hosted
  - dify workflow rag
  - dify model providers
last_reviewed: 2026-04-03
---

# 工具定位

Dify 是一个平台化 LLM 应用开发环境，适合把工作流、RAG、Agent 与运维监控放在统一平台中迭代。

## 适用场景

- 你需要快速搭建并迭代 LLM 应用而不想从零拼装全栈
- 你要让产品、算法、工程在同一工作流画布协作
- 你希望兼顾低代码构建与 API 化系统集成

## 核心能力

- 可视化工作流与 Prompt IDE: 快速验证应用逻辑
- RAG 与 Agent 能力: 支持知识接入和工具调用
- LLMOps 可观测性: 监控日志、性能与效果迭代

## 上手路径

1. 先通过 Docker Compose 启动社区版完成最小应用。
2. 再接入模型与知识库，形成可用业务流程。
3. 最后通过 API 与运维指标纳入现有系统治理。

## 选择边界

- 平台化方案提效明显，但也要评估可迁移与锁定成本。
- 复杂企业合规场景需补齐安全、审计与发布流程。
- 对高度定制任务，可能仍需框架层深度开发。

## 相关主题

- 与 `tool-0043` 互补: 索引编排框架 + 平台化应用层。
- 与 `tool-0049` 可组合: Dify 负责流程，Open WebUI 负责交互。
- 与 `collection-0001` 强相关，适合作为平台化落地入口。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0048`
