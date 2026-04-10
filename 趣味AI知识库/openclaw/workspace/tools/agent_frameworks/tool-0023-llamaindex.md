---
doc_type: tool_card
id: tool-0023
title: llamaindex
title_zh: LlamaIndex
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - retrieval
capabilities:
  - search_and_retrieval
  - workflow_automation
  - reasoning
use_cases:
  - rag_pipeline
  - private_knowledge_qa
  - document_agent_building
source_refs:
  - note-0007
  - article-0023
aliases:
  - LlamaIndex OSS
  - data framework for llm apps
search_terms:
  - llamaindex 是什么
  - llamaindex rag
  - llamaindex core integrations
  - llama parse 和 llamaindex
last_reviewed: 2026-04-03
---

# 工具定位

LlamaIndex 是面向 LLM 应用的数据框架，核心价值在于把多源数据接入、索引与检索能力系统化，支撑 RAG 和文档 Agent 应用落地。

## 适用场景

- 你需要把文档、数据库和 API 数据接入到 LLM 应用中
- 你在做私有知识库问答并希望提升检索质量与可维护性
- 你希望用统一框架组织 ingestion、index、query 的全流程

## 核心能力

- 数据接入能力: 覆盖多类型数据源与格式的连接与加载
- 检索与索引能力: 支持多种索引结构与查询接口组合
- 生态扩展能力: 通过 core + integrations 模式按需接入组件

## 上手路径

1. 先用最小数据集构建索引，验证检索与回答质量。
2. 再按业务场景扩展 embedding、rerank 和检索策略。
3. 最后将数据更新与评测纳入周期化流程。

## 选择边界

- 框架解决的是数据增强链路，不替代业务知识建模。
- 集成项较多时需控制依赖范围，避免早期复杂度膨胀。
- 检索效果高度依赖数据清洗和索引设计。

## 相关主题

- 与 `tool-0022` 强相关，可形成“数据框架 + 编排框架”组合。
- 与 `tool-0016` 互补，前者偏应用内数据与索引，后者偏网页抓取入库。
- 与 `topic-0009` 强相关，适合用于 RAG 质量迭代与检索策略优化。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0023`
