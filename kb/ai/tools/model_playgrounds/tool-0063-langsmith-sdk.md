---
doc_type: tool_card
id: tool-0063
title: langsmith_sdk
title_zh: LangSmith SDK
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - llm_observability
  - tracing_sdk
  - evaluation_workflow
capabilities:
  - python_js_tracing_clients
  - openai_wrapper_instrumentation
  - unified_langsmith_integration
use_cases:
  - llm_call_tracing
  - agent_run_observability
  - eval_ready_telemetry_pipeline
source_refs:
  - note-0007
  - article-0063
aliases:
  - langsmith sdk
  - langsmith client
search_terms:
  - langsmith python sdk
  - langsmith js sdk
  - langsmith tracing wrapper
  - langsmith api key tracing
last_reviewed: 2026-04-03
---

# 工具定位

LangSmith SDK 是接入 LangSmith 平台的客户端层，适合在 Python/JS 应用中快速注入追踪能力，为评测与运维提供统一观测数据。

## 适用场景

- 你要对模型调用链路做可追踪记录
- 你要在多语言代码库中统一观测接入方式
- 你要为后续评测和回归分析沉淀可用数据

## 核心能力

- 双栈 SDK: Python 与 JS/TS 一致接入体验
- Wrapper 接入: 快速包裹 OpenAI 客户端采集调用信息
- 统一配置: 环境变量驱动 tracing 行为管理

## 上手路径

1. 先在核心调用路径启用 tracing 配置。
2. 再扩展到关键 Agent/RAG 流程并补齐标签规范。
3. 最后把观测数据接入评测与质量看板流程。

## 选择边界

- SDK 只解决接入问题，不替代完整治理体系。
- 埋点粒度过粗会限制后续诊断价值。
- 需要团队统一命名和标注规范，避免数据碎片化。

## 相关主题

- 与 `tool-0058` 同属可观测方向: Langfuse 偏平台闭环，LangSmith SDK 偏接入层。
- 与 `tool-0056` 可组合: 流程由 LangGraph 执行，追踪由 LangSmith SDK 注入。
- 与 `collection-0001` 强相关，补齐 tracing SDK 实战节点。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0063`
