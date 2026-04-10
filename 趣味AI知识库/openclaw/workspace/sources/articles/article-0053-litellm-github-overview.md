---
doc_type: source_article
id: article-0053
title: litellm_github_overview
title_zh: LiteLLM 官方仓库概览
author: BerriAI and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/BerriAI/litellm
source_kind: article_summary
topic_tags:
  - llm_gateway
  - model_routing
  - observability
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

LiteLLM 提供统一 LLM 调用层与 AI Gateway，把多模型供应商接入、路由、配额、成本与治理能力收敛在同一接口，适合做模型访问中间层。

## 核心观点

- 用 OpenAI 兼容接口统一 100+ 模型供应商调用路径。
- 同时提供 SDK 与 Proxy 两种接入模式，覆盖单应用与平台团队需求。
- 网关模式强调认证、配额、成本追踪、负载与回退策略。
- 与观测生态（如 Langfuse 等）联动，支持生产诊断与优化。

## 值得保留的方法或框架

- 统一 API 网关化: 先解耦上层应用与底层模型供应商。
- 路由与回退策略内置: 提升稳定性与成本控制能力。
- 渐进式采用: 从 SDK 试点到集中网关治理。

## 局限与偏见

- 统一接口会抽象掉部分供应商特性，需要按场景权衡。
- 网关引入后需要额外运维与配置治理能力。
- 企业级功能与支持能力存在开源与商业层级差异。

## 可拆出的卡片

- `tool-0053`: LiteLLM 工具卡
- `collection-0001`: AI 基础与工具起步包（多模型网关补充）
