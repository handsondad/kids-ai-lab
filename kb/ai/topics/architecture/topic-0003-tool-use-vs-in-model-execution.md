---
doc_type: topic_card
id: topic-0003
title: tool_use_vs_in_model_execution
title_zh: Tool Use 与 In-Model Execution 的区别
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - llm_foundations
  - ai_engineering
  - agents
capabilities:
  - tool_use
  - reasoning
  - planning
prerequisites:
  - topic-0001
source_refs:
  - note-0003
  - article-0004
  - article-0126
aliases:
  - 外部工具调用与模型内部执行
  - 工具调用和内生计算
search_terms:
  - tool use 和 in-model execution 区别
  - llm 为什么要调用外部工具
  - transformer 能自己执行程序吗
  - 模型内部计算和工具调用对比
last_reviewed: 2026-04-03
---

# 一句话定义

Tool Use 是让模型把计算交给外部系统执行，而 In-Model Execution 是让模型在自身推理循环中直接执行程序，两者的核心差别在于计算能力究竟位于模型外部还是模型内部。

## 为什么重要

- 这决定了模型到底是在“协调计算”还是“自己完成计算”。
- 它直接影响系统的透明性、可微性、执行效率边界和对外部基础设施的依赖程度。
- 很多关于 Agent、工具调用、程序合成和模型能力边界的讨论，实际上都卡在这个分界线上。

## 核心区别

- Tool Use：模型生成代码、命令或 API 请求，由外部解释器、搜索器、数据库或执行器完成真正计算，再把结果回传给模型。
- In-Model Execution：模型不把执行外包出去，而是在自身 token 生成过程中，沿着一条可执行 trace 逐步运行程序。
- Tool Use 的优点是工程成熟、易接现有系统、易获得强可靠性；缺点是能力主要存在于外部系统而不是模型内部。
- In-Model Execution 的优点是理论上更统一、执行过程透明、可与模型内部表示更深耦合；缺点是当前仍偏研究前沿、难以直接替代通用工具链。

## 为什么今天大多数系统更像 Tool Use

- 通用 LLM 在长程精确计算上并不稳定，外部工具可以立即补齐这个短板。
- 工程团队已经有成熟的解释器、数据库、浏览器和运行时，不必等待模型本体获得可靠执行能力。
- 在大多数生产系统里，外部工具的正确性、沙箱隔离和审计路径更容易保障。

## In-Model Execution 在补什么空白

- 它试图回答“模型能否真正 internalize computation”，而不是只会描述算法或安排工具。
- 它希望把执行路径变成模型自身的一部分，而不是一个外部黑盒回路。
- 如果这条路线成熟，未来模型可能不只调用软件，而是把部分程序逻辑直接吸收到自身计算基底中。

## 与 Harness Engineering 的关系

- Harness Engineering 主要解决模型外部系统如何组织、约束和验证执行。
- In-Model Execution 主要解决模型内部是否具备可靠、长程、精确的执行能力。
- 一个偏“外部外壳”，一个偏“内部计算基底”；前者更工程化，后者更偏模型与体系结构研究。
- 即使 In-Model Execution 变强，Harness 也不会消失，因为复杂系统依然需要任务拆解、记忆、边界控制和观测闭环。

## 常见误区

- “模型会调用 Python，所以模型自己会算”不成立；很多时候它只是会把计算外包给 Python。
- “In-Model Execution 出现后就不需要工具”也不成立；真实系统仍然需要外部世界交互、状态存储和权限控制。
- “Tool Use 比 In-Model Execution 低级”不准确；它是当前最实用、最可靠的工程路径之一。

## 下一步学习建议

- 先把 Tool Use、Agent Loop、Harness、Execution Trace 这几个词区分清楚。
- 再看 Percepta 这篇文章里的执行 trace、2D heads 和 fast path，理解它到底试图把什么能力搬进模型内部。
- 最后再回头看 Harness Engineering，会更容易明白外部系统和内部计算基底分别在补什么缺口。

## 检索提示

- 区分模型协调外部计算和模型内部直接执行程序的关键主题，连接 agent 工具调用、harness 与 transformer 执行能力边界。

## 来源说明

- 来源笔记 ID: `note-0003`
- 主要来源文章 ID: `article-0004`