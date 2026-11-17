---
doc_type: tool_card
id: tool-0058
title: langfuse
title_zh: Langfuse
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - llm_observability
  - evaluation
  - prompt_management
capabilities:
  - tracing_and_sessions
  - eval_and_datasets
  - prompt_versioning
use_cases:
  - llmops_monitoring
  - quality_iteration_loop
  - prompt_experiment_management
source_refs:
  - note-0007
  - article-0058
aliases:
  - langfuse
  - langfuse oss
search_terms:
  - langfuse tracing
  - langfuse evaluation
  - langfuse prompt management
  - langfuse self host
last_reviewed: 2026-04-03
---

# 工具定位

Langfuse 是 LLM 应用的可观测与评测平台，适合把调用日志、评测数据和提示词版本管理整合为持续优化闭环。

## 适用场景

- 你要追踪复杂 Agent 或 RAG 链路中的质量问题
- 你要建立线上反馈与离线评测联动机制
- 你要管理提示词版本并量化迭代效果

## 核心能力

- 全链路 Tracing: 记录模型调用与关键业务逻辑
- Eval 与数据集: 支持自动评估、人工标注和基准对比
- Prompt 管理: 集中维护、版本化和快速回滚

## 上手路径

1. 先通过 SDK 接入基础 tracing，形成最小可观测面。
2. 再建立核心场景评测集和质量阈值。
3. 最后把提示词管理、实验对比和发布流程打通。

## 选择边界

- 观测数据丰富不等于优化有效，需要明确指标体系。
- 平台能力要配套团队流程，否则难以形成闭环收益。
- 自托管方案需评估数据库、存储和运维投入。

## 相关主题

- 与 `tool-0056` 可组合: LangGraph 执行，Langfuse 观测评测。
- 与 `tool-0053` 可组合: LiteLLM 网关 + Langfuse 监控治理。
- 与 `collection-0001` 强相关，补齐 LLMOps 能力拼图。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0058`
