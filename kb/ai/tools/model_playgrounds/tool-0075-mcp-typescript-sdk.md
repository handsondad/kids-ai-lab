---
doc_type: tool_card
id: tool-0075
title: mcp_typescript_sdk
title_zh: MCP TypeScript SDK
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - mcp
  - typescript_sdk
  - protocol_interop
capabilities:
  - server_client_split_packages
  - runtime_middleware_adapters
  - streamable_http_auth_helpers
use_cases:
  - build_mcp_tools_in_ts
  - integrate_mcp_with_express_hono
  - cross_runtime_protocol_clients
source_refs:
  - note-0007
  - article-0075
aliases:
  - mcp typescript sdk
  - modelcontextprotocol typescript sdk
search_terms:
  - mcp ts server client
  - mcp express hono middleware
  - mcp streamable http typescript
  - mcp typescript v1 v2
last_reviewed: 2026-04-03
---

# 工具定位

MCP TypeScript SDK 是 MCP 的官方 TS 实现，适合在 Node/Bun/Deno 生态中构建协议兼容的 MCP 服务端与客户端。

## 适用场景

- 你要在 TypeScript 项目中标准化暴露工具、资源和提示
- 你要把 MCP 能力接入 Express、Hono 或原生 Node 服务
- 你要构建跨运行时可互操作的协议层客户端

## 核心能力

- 拆分包架构: server/client 职责清晰便于组合
- 中间件适配: 快速嵌入常见 TS Web 运行时
- 传输与认证支持: 覆盖 streamable HTTP 与 OAuth 辅助

## 上手路径

1. 先安装 server/client 包并跑通官方示例。
2. 再按运行时选用 middleware 适配器接入。
3. 最后建立版本策略并落实生产传输配置。

## 选择边界

- v2 仍在演进，生产建议优先采用稳定版本策略。
- 协议抽象较多，团队需先建立统一开发规范。
- 高并发部署仍需配套监控与流控治理。

## 相关主题

- 与 `tool-0070` 同属官方 SDK: Python 与 TS 生态互补。
- 与 `tool-0052` 强关联: 规范定义协议，TS SDK 实现工程落地。
- 与 `collection-0001` 强相关，补齐 TypeScript 协议实现层。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0075`
