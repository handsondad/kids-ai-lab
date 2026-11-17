---
doc_type: tool_card
id: tool-0057
title: autogen
title_zh: AutoGen
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - multi_agent
  - orchestration
  - mcp_integration
capabilities:
  - multi_agent_collaboration
  - layered_architecture
  - studio_and_bench
use_cases:
  - expert_agent_teams
  - tool_augmented_agents
  - rapid_multi_agent_prototyping
source_refs:
  - note-0007
  - article-0057
aliases:
  - autogen
  - microsoft autogen
search_terms:
  - autogen multi agent framework
  - autogen agentchat
  - autogen mcp
  - autogen studio
last_reviewed: 2026-04-03
---

# 工具定位

AutoGen 是多 Agent 应用开发框架，适合快速原型与工程化并行推进，尤其适用于需要多角色协作、工具调用和流程控制的复杂任务。

## 适用场景

- 你要构建多专家 Agent 协同完成复杂任务
- 你要把工具调用、任务分配和结果汇总统一编排
- 你希望在原型验证后平滑迁移到可扩展架构

## 核心能力

- 分层框架: Core/AgentChat/Extensions 支持不同抽象层开发
- 多 Agent 协作: 通过 AgentTool 组织角色分工与协同
- MCP 接入能力: 便于扩展外部系统与执行能力

## 上手路径

1. 先用 AgentChat 实现单任务多角色协作原型。
2. 再引入工具调用与多轮任务编排策略。
3. 最后补齐评测、监控和安全治理进入生产路径。

## 选择边界

- 多 Agent 设计不当会带来链路冗长与成本上升。
- Studio 适合原型，不等同生产应用基座。
- 升级迁移时需关注版本差异与接口变化。

## 相关主题

- 与 `tool-0047` 都是多 Agent 方向，可按生态和抽象层对比。
- 与 `tool-0051` 可组合: AutoGen 编排 + MCP 服务扩展。
- 与 `collection-0001` 强相关，补齐多 Agent 工程主线。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0057`
