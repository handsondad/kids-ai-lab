---
doc_type: tool_card
id: tool-0077
title: agno
title_zh: Agno
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - agent_runtime
  - governance
  - production_platform
capabilities:
  - agents_teams_workflows_framework
  - stateless_runtime_with_session_isolation
  - control_plane_monitoring_and_management
use_cases:
  - production_agent_services
  - governed_human_in_the_loop_automation
  - auditable_agent_operations
source_refs:
  - note-0007
  - article-0077
aliases:
  - agno runtime
  - agno agentos
search_terms:
  - agno framework runtime control plane
  - agno agentos
  - agno production agents
  - agno approval workflows
last_reviewed: 2026-04-03
---

# 工具定位

Agno 是面向生产代理系统的运行时平台，强调构建、运行与治理一体化，并内建审批、审计与追踪能力。

## 适用场景

- 你要把代理系统从原型升级为可治理的生产服务
- 你要对高风险动作引入审批与人审机制
- 你要在团队层面建立统一代理运维控制面

## 核心能力

- 三层体系: Framework、Runtime、Control Plane 协同
- 生产运行时: 无状态扩展与会话级隔离并存
- 治理能力: 审批流、审计日志、追踪与评测内建

## 上手路径

1. 先按 quickstart 跑通单代理服务化。
2. 再引入会话存储、工具与审批策略。
3. 最后接入控制平面进行监控与运营。

## 选择边界

- 平台能力全面，落地需要较强工程与运维基础。
- 治理机制设计不当会增加流程摩擦。
- 需结合业务安全等级分层配置规则。

## 相关主题

- 与 `tool-0073` 同属生产化框架路线: Mastra 偏 TS 全栈，Agno 偏 Python runtime 治理。
- 与 `tool-0058` 可组合: Agno 承载执行治理，Langfuse 做外部观测评测。
- 与 `collection-0001` 强相关，补齐 runtime/control-plane 视角。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0077`
