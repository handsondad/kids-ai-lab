---
doc_type: source_article
id: article-0070
title: mcp_python_sdk_github_overview
title_zh: MCP Python SDK 官方仓库概览
author: Model Context Protocol and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/modelcontextprotocol/python-sdk
source_kind: article_summary
topic_tags:
  - mcp
  - sdk
  - tools_resources_prompts
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

MCP Python SDK 是 Model Context Protocol 的官方 Python 实现，提供客户端与服务端完整能力，支持资源、工具、提示、会话与认证等核心协议要素。

## 核心观点

- MCP 把“上下文提供”与“模型调用”解耦成标准接口层。
- 官方 SDK 降低了协议实现复杂度并增强互操作性。
- FastMCP 适合快速构建，低层 API 适合深度定制。
- Streamable HTTP 成为生产部署的推荐传输路径。

## 值得保留的方法或框架

- Protocol-first integration: 先对齐协议再对接应用生态。
- Resources/Tools/Prompts 三元抽象: 清晰划分上下文与动作。
- Typed structured output: 输出校验提升工具调用可靠性。

## 局限与偏见

- 协议能力丰富，初学者容易陷入细节复杂度。
- 真正生产化仍需补齐鉴权、审计与容量治理。
- 多传输模式并存时需要额外运维与兼容策略。

## 可拆出的卡片

- `tool-0070`: MCP Python SDK 工具卡
- `collection-0001`: AI 基础与工具起步包（MCP Python 实现补充）
