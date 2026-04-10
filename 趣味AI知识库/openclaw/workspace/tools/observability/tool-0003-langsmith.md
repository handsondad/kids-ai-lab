---
doc_type: tool_card
id: tool-0003
title: langsmith
title_zh: LangSmith
status: reviewed
language: zh-CN
learning_level: level_200
tool_category: observability
topic_clusters:
  - agents
  - evaluation
  - ai_engineering
capabilities:
  - workflow_automation
  - planning
  - reasoning
use_cases:
  - trace_inspection
  - failure_analysis
  - benchmark_iteration
source_refs:
  - note-0002
  - note-0005
aliases:
  - LangChain tracing 平台
  - LangSmith 观测平台
search_terms:
  - langsmith 是什么
  - langsmith 怎么用
  - langsmith tracing quickstart
  - langsmith 适合什么场景
last_reviewed: 2026-04-02
---

# 工具定位

LangSmith 是 LangChain 体系里的 LLM / agent observability 与 tracing 平台。它的核心价值不是“多一个日志后台”，而是把模型调用、检索步骤、工具调用和整条应用链路组织成可查看、可过滤、可复盘的 traces。

## 适用场景

- 你已经有 LLM 或 agent 应用，但不知道它为什么失败或为什么偶尔成功
- 你想把 prompt、retrieval、tool calls 和最终输出放在一条链上看
- 你正在做 harness 迭代，希望每次改动都能有 trace 级反馈

## 核心能力

- LLM call tracing：先把单次模型调用打点进平台
- Application tracing：再把整条 RAG 或 agent pipeline 追进去
- 项目化管理：把 traces 组织到 workspace / project 中，便于团队协作与筛选
- 调试与复盘：帮助你从“结果不对”回到“是哪一步出了问题”

## 上手路径

1. 先接最小链路，只 trace 一个模型调用，确认数据能进入平台。
2. 再给关键函数加上 traceable，把应用级流程纳入 trace。
3. 最后再把 traces 和评测、失败分析、回归检查结合起来，形成长期迭代机制。

## 选择边界

- 如果你还停留在单轮 prompt 试验，LangSmith 可能比 playground 更重。
- 如果你的系统没有明确的评测与复盘流程，trace 数据容易积压而不产生决策价值。
- 它很适合 LangChain / LangGraph 生态，但并不意味着其他 tracing 工具就没有价值。

## 相关主题

- 与 `topic-0006` 强相关，因为自验证和 trace 优化都需要可见的执行链路。
- 与 `tool-0002` 强相关，因为它是“Agent Observability / Tracing 平台”这个工具类别下的具体代表。
- 与 `topic-0002` 强相关，因为 Harness Engineering 的很多优化动作都要依靠它类工具落地。

## 来源说明

- 来源笔记 ID: `note-0005`
- 辅助来源笔记 ID: `note-0002`