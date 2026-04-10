---
doc_type: tool_card
id: tool-0050
title: haystack
title_zh: Haystack
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - ai_orchestration
  - rag
  - agent_workflow
capabilities:
  - modular_pipelines
  - retrieval_routing_control
  - vendor_agnostic_integrations
use_cases:
  - production_rag_systems
  - context_engineered_agents
  - enterprise_llm_orchestration
source_refs:
  - note-0007
  - article-0050
aliases:
  - deepset haystack
  - haystack ai
search_terms:
  - haystack
  - haystack rag pipeline
  - haystack agent workflow
  - haystack-ai python
last_reviewed: 2026-04-03
---

# 工具定位

Haystack 是一个面向生产场景的 AI 编排框架，适合构建对检索、路由、记忆与生成有显式控制需求的 RAG 与 Agent 系统。

## 适用场景

- 你要构建可解释、可评测、可演进的企业级 RAG 系统
- 你需要在多模型、多组件间保持灵活替换能力
- 你希望将 Agent 行为纳入可追踪的流程编排中

## 核心能力

- 模块化管道: 检索、路由、工具、生成可组合
- 厂商无关集成: 支持多模型与多基础设施切换
- 上下文工程导向: 强调信息处理路径的显式设计

## 上手路径

1. 先用快速入门构建最小 RAG 管道。
2. 再按业务需求替换检索、重排与生成组件。
3. 最后加入评测、观测与部署治理形成生产闭环。

## 选择边界

- 自由度高意味着架构设计责任更重。
- 若团队缺少工程治理，系统可能快速复杂化。
- 平台化需求强时可考虑与上层平台协同而非单独使用。

## 相关主题

- 与 `tool-0043` 同属知识增强主线，可按框架风格对照选型。
- 与 `tool-0048` 互补: 框架灵活编排 + 平台化运营管理。
- 与 `collection-0001` 强相关，适合作为生产级编排进阶入口。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0050`
