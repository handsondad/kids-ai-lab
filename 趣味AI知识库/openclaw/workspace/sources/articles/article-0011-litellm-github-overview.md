---
doc_type: source_article
id: article-0011
title: litellm_github_overview
title_zh: LiteLLM 官方仓库概览
author: BerriAI
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/BerriAI/litellm
source_kind: article_summary
topic_tags:
  - ai_engineering
  - inference_and_serving
  - agents
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

这是 LiteLLM 官方仓库入口页，核心价值是明确其定位为统一 LLM 接入层与 AI Gateway，并提供 SDK/Proxy 两条落地路径。

## 核心观点

- LiteLLM 的主定位是以 OpenAI 风格接口统一接入多家模型提供方。
- 官方强调两种使用方式: Python SDK（应用内集成）和 Proxy Server（平台化网关）。
- Proxy 路线重点能力包括认证授权、多租户成本统计、虚拟密钥、日志与管理面板。
- 文档强调其可用于 Agents 与 MCP Tools 的统一连接层。
- 官方将该仓库定义为工程化平台组件，而不是单一模型能力封装。

## 值得保留的方法或框架

- 统一网关模式: 将多模型调用、鉴权、成本与路由下沉到平台层。
- 双轨接入模式: 团队可按阶段在 SDK 与网关之间平滑演进。
- 平台治理能力前置: 在接入层处理可观测、成本与访问控制。

## 局限与偏见

- 官方仓库主页偏产品与能力总览，缺少针对具体业务场景的效果对比。
- 提供方覆盖很广，但真实生产效果仍依赖各模型与各区域网络条件。
- 企业能力与托管能力存在版本/授权边界，需结合文档确认。

## 可拆出的卡片

- `tool-0011`: LiteLLM 工具卡
- `collection-0004`: Agent 与 MCP 工具精选（接入层补强）
