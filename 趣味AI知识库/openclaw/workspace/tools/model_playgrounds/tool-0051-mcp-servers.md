---
doc_type: tool_card
id: tool-0051
title: mcp_servers
title_zh: MCP Servers
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - mcp
  - tool_integration
  - reference_implementation
capabilities:
  - reference_server_examples
  - protocol_practice
  - ecosystem_discovery
use_cases:
  - mcp_server_bootstrap
  - tool_access_design
  - sdk_learning_and_validation
source_refs:
  - note-0007
  - article-0051
aliases:
  - modelcontextprotocol servers
  - official mcp servers
search_terms:
  - mcp servers
  - server-memory npx
  - mcp reference implementation
  - model context protocol servers
last_reviewed: 2026-04-03
---

# 工具定位

MCP Servers 是官方参考服务器集合，适合作为学习 MCP 能力暴露模式与快速验证协议链路的起点。

## 适用场景

- 你要快速理解 MCP server 的工具/资源/提示暴露方式
- 你要用官方样例验证客户端到服务端的连通性
- 你要从参考实现迁移到自定义业务服务器

## 核心能力

- 官方参考样例: 覆盖 filesystem、fetch、memory、git 等典型能力
- 快速运行路径: 支持 npx、uvx、pip 等启动方式
- 生态发现入口: 提供官方与社区服务器索引

## 上手路径

1. 先运行一个最小参考 server 验证 MCP 客户端链路。
2. 再阅读对应源码理解权限与接口约束。
3. 最后按业务需求实现自定义 server 并加入治理层。

## 选择边界

- 参考实现不是生产就绪方案，需补齐认证、审计和风控。
- 社区服务器质量参差不齐，需建立内部准入标准。
- 不建议直接把示例配置无改造投入高风险环境。

## 相关主题

- 与 `tool-0038` 互补: 一个偏目录发现，一个偏官方参考实现。
- 与 `tool-0052` 强耦合: 实现前先理解协议规范。
- 与 `collection-0001` 强相关，适合作为 MCP 实战入口。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0051`
