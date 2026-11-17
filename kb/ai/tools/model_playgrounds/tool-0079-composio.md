---
doc_type: tool_card
id: tool-0079
title: composio
title_zh: Composio
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - tool_integration
  - provider_adapters
  - mcp_ecosystem
capabilities:
  - unified_toolkits_and_auth_layer
  - python_typescript_sdks
  - broad_provider_adapter_packages
use_cases:
  - agent_tool_connection_at_scale
  - multi_framework_tool_standardization
  - mcp_and_api_integration_acceleration
source_refs:
  - note-0007
  - article-0079
aliases:
  - composio sdk
  - composiohq
search_terms:
  - composio toolkits
  - composio openai agents
  - composio langchain
  - composio mcp
last_reviewed: 2026-04-03
---

# 工具定位

Composio 是 Agent 工具接入层 SDK，帮助你把认证、工具检索和多框架适配统一到一套连接器体系中。

## 适用场景

- 你要让代理稳定接入大量第三方业务工具
- 你要统一不同代理框架的工具调用方式
- 你要在 Python/TypeScript 团队内共享接入标准

## 核心能力

- 统一连接层: 工具目录、认证与调用能力集中管理
- 多语言 SDK: Python 与 TS 同步覆盖
- Provider 生态: 对接 OpenAI Agents、LangChain、Mastra 等

## 上手路径

1. 先安装 core SDK 并创建最小连接实例。
2. 再按框架选择 provider 包接入。
3. 最后逐步扩展工具集并治理权限策略。

## 选择边界

- 接入规模扩大后，权限模型复杂度会显著上升。
- 依赖生态变化快，需要建立版本升级节奏。
- 关键业务流程仍需对第三方 API 做可用性兜底。

## 相关主题

- 与 `tool-0075` 可组合: MCP TS SDK 提供协议层，Composio 提供工具连接层。
- 与 `tool-0053` 可组合: OpenRouter 管模型路由，Composio 管工具路由。
- 与 `collection-0001` 强相关，补齐工具接入中间层能力。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0079`
