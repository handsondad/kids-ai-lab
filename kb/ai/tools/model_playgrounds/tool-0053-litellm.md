---
doc_type: tool_card
id: tool-0053
title: litellm
title_zh: LiteLLM
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - llm_gateway
  - model_routing
  - observability
capabilities:
  - unified_model_api
  - gateway_governance
  - routing_fallback
use_cases:
  - multi_provider_llm_access
  - enterprise_ai_gateway
  - cost_control_and_tracking
source_refs:
  - note-0007
  - article-0053
aliases:
  - litellm proxy
  - ai gateway litellm
search_terms:
  - litellm
  - litellm proxy server
  - openai compatible gateway
  - litellm routing fallback
last_reviewed: 2026-04-03
---

# 工具定位

LiteLLM 是多模型调用统一层与 AI Gateway，适合在复杂模型供应商生态中做接口统一、流量治理与成本控制。

## 适用场景

- 你要同时接入多个模型供应商并保持上层接口稳定
- 你需要统一做配额、成本、日志与路由策略治理
- 你要在团队内建设可观测、可控的模型访问网关

## 核心能力

- OpenAI 兼容统一接口: 降低供应商切换成本
- Proxy 网关治理: 认证、虚拟密钥、配额与多租户能力
- Router 策略: 重试、回退、负载与成本优化路径

## 上手路径

1. 先在单应用中用 SDK 验证多模型切换。
2. 再部署 Proxy 统一接入并接入监控回调。
3. 最后引入组织级策略与预算治理。

## 选择边界

- 网关带来治理收益，也带来额外运维复杂度。
- 统一接口可能无法覆盖全部供应商特性。
- 企业高级能力与支持方式需按预算与合规评估。

## 相关主题

- 与 `tool-0044` 互补: vLLM 负责推理，LiteLLM 负责上层网关治理。
- 与 `tool-0045` 互补: Ollama 本地运行 + LiteLLM 统一路由。
- 与 `collection-0001` 强相关，适合作为多模型中间层入口。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0053`
