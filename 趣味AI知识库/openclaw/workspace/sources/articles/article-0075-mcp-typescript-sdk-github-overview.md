---
doc_type: source_article
id: article-0075
title: mcp_typescript_sdk_github_overview
title_zh: MCP TypeScript SDK 官方仓库概览
author: Model Context Protocol and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/modelcontextprotocol/typescript-sdk
source_kind: article_summary
topic_tags:
  - mcp
  - typescript_sdk
  - protocol_interop
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

MCP TypeScript SDK 是 MCP 在 TypeScript 生态的官方实现，提供客户端、服务端与中间件适配层，面向跨运行时协议互操作与工程集成。

## 核心观点

- 协议层标准化需要在主流语言生态中对等落地。
- 服务端、客户端与中间件应形成可组合工具箱。
- Streamable HTTP 与认证辅助是生产接入关键路径。
- v1/v2 并行阶段需明确版本策略与迁移节奏。

## 值得保留的方法或框架

- Split packages architecture: server/client/middleware 分离发布。
- Runtime adapters: Express/Hono/Node HTTP 快速接入。
- Runnable examples: 以可执行样例降低学习成本。

## 局限与偏见

- 版本演进期（v2 开发中）要求更谨慎的生产选型。
- 协议实现完整但初学者会面临较高概念门槛。
- 大规模部署仍需配套可观测与运维治理方案。

## 可拆出的卡片

- `tool-0075`: MCP TypeScript SDK 工具卡
- `collection-0001`: AI 基础与工具起步包（MCP TS 实现补充）
