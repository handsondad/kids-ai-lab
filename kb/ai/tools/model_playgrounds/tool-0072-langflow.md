---
doc_type: tool_card
id: tool-0072
title: langflow
title_zh: Langflow
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - visual_workflow
  - mcp_server
  - agent_deployment
capabilities:
  - visual_authoring_and_playground
  - api_and_mcp_export
  - observability_integrations
use_cases:
  - workflow_to_tool_publishing
  - multi_agent_flow_operations
  - desktop_to_production_transition
source_refs:
  - note-0007
  - article-0072
aliases:
  - langflow
  - langflow ai
search_terms:
  - langflow mcp server
  - langflow visual builder
  - langflow desktop
  - langflow deployment
last_reviewed: 2026-04-03
---

# 工具定位

Langflow 是可视化 AI 工作流平台，适合把流程从设计阶段直接发布为 API 或 MCP 工具并接入应用系统。

## 适用场景

- 你要把流程快速发布给外部系统调用
- 你要在可视化界面中调试多代理或检索链路
- 你要从桌面试验平滑迁移到服务部署

## 核心能力

- 可视化构建与 Playground: 快速开发并验证流程
- API/MCP 服务化: 将流程转为可调用接口与工具
- 可观测集成: 支持接入 LangSmith、Langfuse 等能力

## 上手路径

1. 先通过本地安装或桌面版跑通最小流程。
2. 再导出 API/MCP 并对接上游系统。
3. 最后完善部署、安全和版本升级策略。

## 选择边界

- 版本升级需密切关注安全通告与兼容性。
- 大规模生产场景需补齐细粒度权限控制。
- 可视化流图复杂后要建立模块化规范。

## 相关主题

- 与 `tool-0071` 同类可视化工具，可按服务化需求对照选择。
- 与 `tool-0075` 可组合: Langflow 产出工具，MCP TS SDK 承载集成实现。
- 与 `collection-0001` 强相关，补齐可视化到服务化路径。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0072`
