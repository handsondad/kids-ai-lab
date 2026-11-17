---
doc_type: topic_card
id: topic-0015
title: layered_memory_architecture_for_coding_agents
title_zh: Coding Agent 分层记忆架构
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - agents
  - ai_engineering
  - evaluation
capabilities:
  - planning
  - workflow_automation
  - reasoning
prerequisites:
  - topic-0002
  - topic-0006
source_refs:
  - note-0008
  - article-0009
aliases:
  - 7 层记忆架构
  - coding agent 上下文治理
search_terms:
  - coding agent 记忆架构
  - 7 层记忆系统
  - agent 上下文压缩策略
  - prompt cache 命中优化
last_reviewed: 2026-04-02
---

# 一句话定义

分层记忆架构是将 coding agent 的上下文治理拆为多级成本梯度防线，用低成本机制优先处理高频冗余，用高成本机制兜底处理全局溢出和长期知识沉淀。

## 为什么重要

- coding agent 的失败常由上下文膨胀和缓存失效引起，而不是单纯推理能力不足。
- 单一“大压缩”策略通常成本高、抖动大、且容易打断工作流连续性。
- 分层治理可以同时优化稳定性、成本和可恢复性。

## 核心机制

- 近端层（工具结果预算与微压缩）：优先削减“高体积低时效”内容。
- 中间层（会话记忆与全量压缩）：在上下文压力上升时进行结构化摘要与保留。
- 长期层（自动提取与梦境巩固）：把跨会话有效经验沉淀为可复用记忆。
- 协作层（跨 agent 通信）：在多 agent 模式下共享必要状态并控制冲突。
- 治理层（熔断、互斥、节流）：防止系统进入高成本死循环或并发污染。

## 工程设计抓手

- 把“提示词缓存命中率”作为一等监控指标，而非隐藏实现细节。
- 对每层定义明确触发条件和回退路径，避免抢占同一资源。
- 区分可清理内容与不可清理内容，保证任务连续性与可追踪性。

## 常见误区

- 认为上下文治理只是摘要问题，忽略缓存策略和并发治理。
- 没有熔断机制，导致压缩失败重试雪崩。
- 只做短期会话记忆，不做长期经验整理，长期成本持续走高。

## 下一步学习建议

- 先在现有 agent 系统里画出“内容进入上下文的分层路径图”。
- 再建立每层的触发阈值、失败回退与观测指标。
- 最后用一次长会话压测验证成本曲线和任务成功率变化。

## 检索提示

- 适用于设计 coding agent 的上下文治理与记忆系统，强调成本分层、缓存优先和运行时防护。

## 来源说明

- 来源笔记 ID: `note-0008`
- 主要来源文章 ID: `article-0009`
