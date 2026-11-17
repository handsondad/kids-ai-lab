---
doc_type: tool_card
id: tool-0070
title: mcp_python_sdk
title_zh: MCP Python SDK
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - mcp
  - sdk
  - tools_resources_prompts
capabilities:
  - fastmcp_server_client_apis
  - streamable_http_transport
  - structured_output_and_auth
use_cases:
  - build_mcp_servers_and_clients
  - standardized_tool_exposure
  - production_mcp_transport_setup
source_refs:
  - note-0007
  - article-0070
aliases:
  - mcp python sdk
  - modelcontextprotocol python sdk
search_terms:
  - mcp fastmcp python
  - mcp streamable http
  - mcp structured output python
  - mcp oauth python sdk
last_reviewed: 2026-04-03
---

# 工具定位

MCP Python SDK 是 MCP 的官方 Python 实现，适合快速构建可互操作的 MCP 服务端和客户端，并以标准协议暴露工具与资源能力。

## 适用场景

- 你要把内部能力以 MCP 标准开放给多种代理客户端
- 你要快速实现工具、资源、提示三类协议接口
- 你要在生产环境使用 streamable HTTP 承载 MCP 服务

## 核心能力

- FastMCP 高层接口: 快速搭建服务端与客户端
- 多传输支持: stdio、SSE、streamable HTTP
- 结构化输出与认证: 提升协议交互可靠性与安全性

## 上手路径

1. 先用 FastMCP quickstart 跑通基础 server。
2. 再实现 tools/resources/prompts 与结构化输出。
3. 最后切换 streamable HTTP 并加入鉴权与运维配置。

## 选择边界

- 协议层能力完整，初期概念负担相对较高。
- 生产部署需要额外处理会话、鉴权和扩缩容细节。
- 低层 API 灵活但实现复杂度更高。

## 相关主题

- 与 `tool-0052` 强关联: MCP 规范是协议基线，Python SDK 是工程实现。
- 与 `tool-0051` 可组合: Servers 提供样例生态，Python SDK 提供实现框架。
- 与 `collection-0001` 强相关，补齐 MCP Python 实战能力。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0070`
