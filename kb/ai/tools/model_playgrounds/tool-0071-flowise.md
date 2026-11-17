---
doc_type: tool_card
id: tool-0071
title: flowise
title_zh: Flowise
status: reviewed
language: zh-CN
learning_level: level_200
tool_category: model_playground
topic_clusters:
  - visual_agent_builder
  - low_code_workflow
  - self_hosted_platform
capabilities:
  - visual_flow_authoring
  - component_node_ecosystem
  - docker_and_cloud_deployment
use_cases:
  - rapid_agent_prototyping
  - low_code_ai_workflows
  - self_hosted_llm_app_builder
source_refs:
  - note-0007
  - article-0071
aliases:
  - flowise
  - flowiseai
search_terms:
  - flowise visual builder
  - flowise docker
  - flowise self host
  - flowise agent workflow
last_reviewed: 2026-04-03
---

# 工具定位

Flowise 是低代码可视化 Agent 平台，适合快速拼装和验证 LLM 工作流，并支持自托管部署。

## 适用场景

- 你要在最短时间做出可演示的 Agent/工作流原型
- 你要让非深度开发角色参与流程搭建与迭代
- 你要在私有环境自托管可视化 AI 工作台

## 核心能力

- 可视化流程编辑: 通过节点连线快速构建链路
- 组件化扩展: 支持接入第三方节点与工具能力
- 多部署路径: 本地、Docker、云环境均可运行

## 上手路径

1. 先用全局安装启动默认实例。
2. 再选择关键业务场景搭建最小流程。
3. 最后把核心节点抽象复用并完善部署配置。

## 选择边界

- 复杂流程会逐步逼近代码化维护需求。
- 平台层需要额外补齐权限与审计治理。
- 可视化效率高，但架构边界要提前定义。

## 相关主题

- 与 `tool-0072` 同属可视化平台: Flowise 偏低代码快速搭建，Langflow 偏流程服务化能力。
- 与 `tool-0054` 可组合: n8n 编排触发，Flowise 负责 Agent 流程执行。
- 与 `collection-0001` 强相关，补齐可视化构建路线。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0071`
