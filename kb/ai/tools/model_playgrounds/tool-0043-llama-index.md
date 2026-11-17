---
doc_type: tool_card
id: tool-0043
title: llama_index
title_zh: LlamaIndex
status: reviewed
language: zh-CN
learning_level: level_200
tool_category: model_playground
topic_clusters:
  - rag
  - data_framework
  - document_agents
capabilities:
  - retrieval_augmented_generation
  - workflow_automation
  - summarization
use_cases:
  - private_data_rag
  - document_agent_pipelines
  - index_and_query_workflows
source_refs:
  - note-0007
  - article-0043
aliases:
  - llamaindex
  - llama index framework
search_terms:
  - llamaindex
  - data framework for llm apps
  - vectorstoreindex
  - llama parse extract index
last_reviewed: 2026-04-03
---

# 工具定位

LlamaIndex 是面向 RAG 和文档代理的数据框架，帮助你把私有数据从接入、索引到检索问答串成可复用链路。

## 适用场景

- 你要做企业文档问答或知识库增强
- 你要构建可定制的索引和检索管线
- 你要在多模型和多向量库之间保持灵活性

## 核心能力

- 数据连接与索引: 支持多格式和多来源接入
- 检索增强: 提供统一 query 接口与可扩展模块
- 生态集成: 与主流模型、嵌入和向量库协同

## 上手路径

1. 先使用 core 组件构建最小向量索引。
2. 再按需求安装特定 LLM/embedding 集成包。
3. 持久化索引并加入评测，迭代检索质量。

## 选择边界

- 包数量多，建议按最小依赖逐步扩展。
- 文档与 README 存在更新时差时，以官方文档为准。
- RAG 效果强依赖数据清洗与检索参数调优。

## 相关主题

- 与 `tool-0042` 互补: 数据层与编排层组合。
- 与 `tool-0045` 可联动: 本地模型 + 本地检索链路。
- 与 `collection-0001` 强相关，适合作为 RAG 实战主干。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0043`
