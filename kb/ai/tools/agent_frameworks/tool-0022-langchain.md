---
doc_type: tool_card
id: tool-0022
title: langchain
title_zh: LangChain
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - evaluation
capabilities:
  - planning
  - reasoning
  - workflow_automation
use_cases:
  - agent_orchestration
  - rag_pipeline
  - production_prototyping
source_refs:
  - note-0007
  - article-0022
aliases:
  - LangChain Python
  - agent engineering platform
search_terms:
  - langchain 是什么
  - langchain 和 langgraph 区别
  - langchain 生态
  - langchain 生产化
last_reviewed: 2026-04-03
---

# 工具定位

LangChain 是面向 Agent 与 LLM 应用开发的通用框架，擅长把模型、检索、工具调用和流程编排串成可迭代的工程系统。

## 适用场景

- 你要快速搭建 LLM 应用原型并保留后续扩展空间
- 你需要统一管理多类组件并逐步升级到复杂 Agent 流程
- 你希望与 LangGraph/LangSmith 协同形成开发到评测闭环

## 核心能力

- 组件化编排: 将模型、检索、工具与记忆能力按模块组合
- 生态兼容: 能与 LangGraph、LangSmith 等形成完整工程链路
- 抽象稳定层: 降低底层模型和服务更替带来的改造成本

## 上手路径

1. 先用最小链路跑通一个任务，明确输入输出与失败模式。
2. 再逐步引入检索和工具调用，沉淀可复用组件。
3. 最后对接观测与评测，建立迭代发布门禁。

## 选择边界

- 组件较多时，系统复杂度会上升，需要规范化工程约束。
- 框架本身不保证答案质量，仍需数据和评测驱动优化。
- 对超轻量脚本场景，直接 SDK 方案可能更高效。

## 相关主题

- 与 `tool-0012` 互补，前者偏工程编排，后者偏程序化优化。
- 与 `tool-0003` 强相关，可用 LangSmith 完成可观测与评测闭环。
- 与 `tool-0023` 强相关，可组合数据框架与编排框架构建 RAG Agent。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0022`
