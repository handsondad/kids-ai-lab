---
doc_type: tool_card
id: tool-0073
title: mastra
title_zh: Mastra
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - typescript_agent_framework
  - workflows
  - production_evals
capabilities:
  - ts_native_agents_and_workflows
  - hitl_suspend_resume
  - built_in_evals_observability
use_cases:
  - production_ts_agent_apps
  - controlled_multi_step_automation
  - agent_quality_iteration
source_refs:
  - note-0007
  - article-0073
aliases:
  - mastra
  - mastra ai
search_terms:
  - mastra typescript agents
  - mastra workflows
  - mastra human in the loop
  - mastra evals observability
last_reviewed: 2026-04-03
---

# 工具定位

Mastra 是 TypeScript 原生 Agent 框架，适合需要代理、工作流、人审和评测一体化的生产级 AI 应用。

## 适用场景

- 你要在 TS 全栈体系中构建可上线的 Agent 产品
- 你要兼顾自治代理与可控流程编排
- 你要将评测与观测前置到开发迭代中

## 核心能力

- TS 原生代理与工作流: 开箱支持图式流程控制
- 暂停恢复与人审: 支持长流程审批与状态续跑
- 内建评测观测: 持续量化质量并优化行为

## 上手路径

1. 先用 CLI 模板创建最小可运行项目。
2. 再接入工具、记忆和工作流节点扩展能力。
3. 最后打通评测、监控与发布流程。

## 选择边界

- 对 Python 主导团队迁移成本较高。
- 功能面广，初期建议聚焦单一业务链路。
- 许可分层需在商用前做合规确认。

## 相关主题

- 与 `tool-0066` 同属工程框架: Semantic Kernel 偏多语言企业 SDK，Mastra 偏 TS 原生全栈。
- 与 `tool-0075` 可组合: Mastra 产出 MCP 能力，TS SDK 统一协议接入。
- 与 `collection-0001` 强相关，补齐 TypeScript Agent 主线。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0073`
