---
doc_type: source_article
id: article-0057
title: autogen_github_overview
title_zh: AutoGen 官方仓库概览
author: Microsoft and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/microsoft/autogen
source_kind: article_summary
topic_tags:
  - multi_agent
  - orchestration
  - mcp_integration
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

AutoGen 是微软主导的多 Agent 应用开发框架，提供从核心运行时、AgentChat 抽象到扩展生态的一体化分层体系，适合构建可协作、可扩展的 Agent 系统。

## 核心观点

- 通过分层架构兼顾快速原型与底层可控性。
- AgentTool 等机制支持多专家代理协同编排。
- 可接入 MCP 工具服务器扩展外部能力边界。
- 配套 Studio 与 Bench 强化可视化开发与评测。

## 值得保留的方法或框架

- Layered architecture: Core/AgentChat/Extensions 分责清晰。
- Tool-mediated collaboration: 用工具化接口组织多 Agent 协作。
- Build + evaluate 并行: 开发流程与评测流程同步推进。

## 局限与偏见

- 生态快速迭代，版本迁移成本需要预留预算。
- Studio 更偏原型验证，生产落地仍需自建安全与运维层。
- 多 Agent 设计若缺少边界约束，容易引入复杂性膨胀。

## 可拆出的卡片

- `tool-0057`: AutoGen 工具卡
- `collection-0001`: AI 基础与工具起步包（多 Agent 框架补充）
