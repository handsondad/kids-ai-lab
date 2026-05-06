---
doc_type: topic_card
id: topic-0108
title: multi-agent-patterns-sub-vs-mega
title_zh: 多智能体架构模式：子智能体 vs 巨型智能体
status: published
language: zh-CN
learning_level: level_300
topic_clusters:
  - agents
  - ai_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0105
source_refs:
  - note-0021
aliases:
  - Sub-agent Systems
  - Mega-agent Pattern
search_terms:
  - 什么是子智能体架构
  - 巨型智能体和多智能体的区别
  - 如何解决上下文腐烂问题
last_reviewed: 2026-05-06
---

# 一句话定义

子智能体模式通过分层隔离任务来保持上下文清晰，而巨型智能体模式通过高度集成的工具集提升单次决策的深度和连贯性。

## 为什么重要

- **对抗上下文腐烂 (Context Rot)**：在长程任务中，无效信息会充斥上下文导致智能体变笨；子智能体模式通过“任务完成即销毁”来保持父智能体上下文的纯净。
- **平衡复杂度与可维护性**：多智能体协作虽然强大但调试极其困难，2026 年的趋势是“能用巨型智能体解决的就不用多智能体”。

## 关键机制

- **子智能体 (Sub-agent) 模式**：
    - **隔离执行**：父智能体派生出子智能体处理具体细节（如写代码），子智能体只返回结果摘要。
    - **职责分离**：分为 Planner（规划者）、Doer（执行者）、Critic（评审者）。
- **巨型智能体 (Mega-agent) 模式**：
    - **全能模型**：使用具备超长上下文（如 Gemini 2M）和极强逻辑（如 GPT-5）的模型。
    - **密集工具集**：一个 Agent 挂载 20-50 个细粒度工具，减少智能体切换带来的损耗。

## 与相邻主题的关系

- **与 LangGraph 的关系**：LangGraph 是实现子智能体和状态机控制的最佳工程框架。
- **与 Agent Blackboards 的关系**：黑板模式是多智能体共享进度和数据的一种高级协作机制。

## 常见误区

- **误区：智能体越多越好**。实际上，每增加一个智能体都会引入通信开销和潜在的理解偏差。
- **误区：巨型智能体不需要架构**。巨型智能体更需要严密的 Prompt 工程和工具权限管理。

## 下一步学习建议

- **实践**：在 Trae 中观察其如何利用子智能体处理大规模代码重构任务。

## 检索提示

- 2026 年的工程共识：智力能解决的靠 Mega-agent，长程复杂任务靠 Sub-agents。

## 来源说明

- 来源笔记 ID: `note-0021`
