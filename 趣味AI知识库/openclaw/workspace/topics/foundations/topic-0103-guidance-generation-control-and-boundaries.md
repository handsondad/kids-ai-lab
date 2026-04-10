---
doc_type: topic_card
id: topic-0103
title: guidance_generation_control_and_boundaries
title_zh: Guidance 生成控制与适用边界
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - ai_engineering
  - application_engineering
capabilities:
  - structured_output
  - execution
  - risk_management
prerequisites:
  - topic-0050
source_refs:
  - note-0018
  - article-0148
aliases:
  - guidance constrained generation
  - guidance structured output control
search_terms:
  - guidance json schema regex cfg constrained decoding
  - guidance use cases boundaries
last_reviewed: 2026-04-10
---

# 一句话定义

Guidance 是把提示、约束与控制流编程化的生成控制框架，适合高确定性输出场景，不等同于通用工作流平台。

## 核心机制

1. 在生成过程中施加约束，而非只做后处理校验。
2. 用条件分支、循环和函数模块表达多步生成流程。
3. 把“格式合法性”转化为可执行约束，降低输出漂移。

## 最适合的任务

- 固定结构 JSON、表单字段、审计结论输出。
- 分类标签、路由策略、候选项选择。
- Agent 流程中的关键节点结构化落盘。

## 不优先场景

- 仅做闲聊补全、对格式约束不敏感。
- 主要瓶颈在吞吐和服务时延，且不追求强约束。

## 落地建议

1. 先识别高风险输出节点（审批、决策、系统写入）。
2. 先把这些节点迁移到 Guidance 约束生成。
3. 再与编排层或平台层集成，形成端到端闭环。