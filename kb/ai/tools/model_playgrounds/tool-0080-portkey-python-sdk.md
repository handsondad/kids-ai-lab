---
doc_type: tool_card
id: tool-0080
title: portkey_python_sdk
title_zh: Portkey Python SDK
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - ai_gateway
  - reliability
  - llmops_observability
capabilities:
  - openai_compatible_api_signature
  - fallbacks_retries_load_balancing
  - tracing_feedback_analytics
use_cases:
  - multi_model_gateway_in_python
  - production_llm_reliability_hardening
  - low_migration_cost_openai_upgrade
source_refs:
  - note-0007
  - article-0080
aliases:
  - portkey sdk
  - portkey ai python
search_terms:
  - portkey openai compatible
  - portkey fallback retry
  - portkey observability
  - portkey virtual key
last_reviewed: 2026-04-03
---

# 工具定位

Portkey Python SDK 是面向生产 LLM 应用的网关 SDK，通过 OpenAI 兼容接口快速叠加可靠性和可观测能力。

## 适用场景

- 你要在不大改代码的前提下引入模型网关能力
- 你要为线上请求增加回退、重试和负载策略
- 你要把调用追踪与反馈分析纳入默认流程

## 核心能力

- 兼容迁移: 复用 OpenAI 风格调用签名
- 可靠性增强: 回退、重试、超时与缓存能力
- 观测治理: tracing、feedback 与多指标分析

## 上手路径

1. 先替换客户端入口验证兼容调用。
2. 再启用 fallback/retry/load balance 策略。
3. 最后接入观测与反馈闭环持续优化。

## 选择边界

- 网关策略配置不当会带来额外成本。
- SDK 兼容不等于业务质量自动提升。
- 仍需结合任务评测和安全治理执行上线。

## 相关主题

- 与 `tool-0053` 强关联: Portkey 偏 Python SDK 实践，OpenRouter 偏统一网关入口。
- 与 `tool-0063` 可组合: Portkey 做流量治理，LangSmith 做实验追踪。
- 与 `collection-0001` 强相关，补齐生产级网关可靠性路径。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0080`
