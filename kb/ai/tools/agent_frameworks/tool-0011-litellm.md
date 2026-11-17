---
doc_type: tool_card
id: tool-0011
title: litellm
title_zh: LiteLLM
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: api_platform
topic_clusters:
  - ai_engineering
  - inference_and_serving
  - agents
capabilities:
  - text_generation
  - tool_use
  - workflow_automation
use_cases:
  - api_serving
  - multi_model_serving
  - migration_rollout
source_refs:
  - note-0007
  - article-0011
aliases:
  - LiteLLM Proxy
  - AI Gateway
search_terms:
  - litellm 是什么
  - litellm proxy 怎么用
  - 多模型统一网关
  - openai 格式兼容层
last_reviewed: 2026-04-03
---

# 工具定位

LiteLLM 是一个把多家模型服务统一成 OpenAI 风格调用接口的接入层工具，既可作为 Python SDK 嵌入应用，也可作为网关服务统一治理模型访问。

## 适用场景

- 你需要同时接入多家模型供应商并减少上层改造成本
- 团队希望把鉴权、成本追踪和路由策略放到统一平台层管理
- 你正在做模型供应商切换、灰度迁移或容灾回退

## 核心能力

- 统一调用接口: 用相对稳定的请求格式覆盖多 provider
- 双模式接入: 应用内 SDK 与独立 Proxy 网关都可落地
- 平台治理: 在网关侧处理认证、项目隔离、成本与可观测

## 上手路径

1. 先用 SDK 跑通一条最小调用链，验证核心业务可兼容。
2. 再将关键流量迁移到 Proxy，集中处理密钥与成本观测。
3. 最后补齐路由、回退与灰度策略，形成生产治理闭环。

## 选择边界

- 它解决的是接入层统一，不直接替代你对提示、评测和业务逻辑的优化。
- 多 provider 并不自动等于高质量，仍需任务级基准测试与路由策略。
- 网关模式会增加一层平台复杂度，需匹配团队运维能力。

## 相关主题

- 与 `topic-0008` 强相关，可作为模型供应商切换与回退的实现基座。
- 与 `topic-0010` 强相关，适合接入发布门禁与流量治理流程。
- 与 `tool-0007` 互补，前者偏统一接入层，后者偏模型聚合服务。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0011`
