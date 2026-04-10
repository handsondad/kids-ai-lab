---
doc_type: tool_card
id: tool-0013
title: mcp_servers
title_zh: MCP Servers (Official Repository)
status: reviewed
language: zh-CN
learning_level: level_200
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - tool_use
capabilities:
  - tool_use
  - search_and_retrieval
  - workflow_automation
use_cases:
  - mcp_tool_selection
  - integration_bootstrap
  - protocol_learning
source_refs:
  - note-0007
  - article-0013
aliases:
  - modelcontextprotocol/servers
  - MCP 官方参考仓库
search_terms:
  - mcp servers 怎么选
  - mcp 官方仓库
  - mcp reference servers
  - mcp 客户端配置
last_reviewed: 2026-04-03
---

# 工具定位

MCP Servers 官方仓库是 MCP 工具生态的参考入口，提供协议参考实现、客户端接入示例和官方与社区生态索引，适合做选型起点和协议学习基座。

## 适用场景

- 你要从零搭建 MCP 工具链，需要先理解协议与最小接入路径
- 你需要在大量 MCP 项目中先建立可信起点，再扩展到社区生态
- 你要给团队制定 MCP 工具引入与治理规范

## 核心能力

- 参考实现集合: 提供官方维护的最小可运行服务样例
- 生态索引能力: 汇总官方集成与社区服务器，便于初筛
- 接入模板: 提供客户端配置范式，降低首接成本

## 上手路径

1. 先用官方 reference server 跑通本地客户端调用。
2. 再按业务需求筛选第三方服务器，建立白名单评估清单。
3. 最后把鉴权、审计、隔离和风险分级纳入组织治理流程。

## 选择边界

- 官方仓库强调参考性质，不能直接视为生产级安全方案。
- 社区服务器质量差异大，必须做维护状态与权限边界验证。
- 目录丰富不代表适配你的场景，仍需任务导向的选型与压测。

## 相关主题

- 与 `collection-0004` 强相关，是 MCP 工具精选的总入口。
- 与 `topic-0010` 强相关，可作为发布前工具权限与门禁检查基础。
- 与 `topic-0016` 互补，帮助把权限边界与纵深防御落到工具接入层。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0013`
