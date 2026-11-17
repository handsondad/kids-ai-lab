---
doc_type: tool_card
id: tool-0002
title: agent_observability_and_tracing
title_zh: Agent Observability / Tracing 平台
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
aliases:
  - Agent 观测平台
  - Agent Trace 平台
  - Trace 调试工具
search_terms:
  - agent observability 是什么
  - trace 平台怎么选
  - langsmith 类工具有什么用
  - agent 调试平台
last_reviewed: 2026-04-02
---

# 工具定位

Agent Observability / Tracing 平台是一类专门记录和分析 agent 执行过程的工具。它们的价值不只是在“看日志”，而是在把模型调用、工具调用、上下文、验证结果、时间成本和失败路径串成一条可复盘的执行轨迹。

## 适用场景

- 想知道 agent 为什么失败、早退或走偏
- 想比较不同 prompt、middleware 或 harness 改动的效果
- 想把 benchmark 跑分、真实任务表现和 trace 细节连起来看

## 核心能力

- 全链路可视化：把一次任务里的模型调用、工具调用和关键状态变化串起来
- 失败模式分析：能定位 agent 是理解错任务、缺上下文、误用工具，还是没做验证
- 评测闭环：支持把 traces 和 benchmark、人工评分或自动验证结果关联起来
- 迭代支撑：帮助团队把“感觉这个改动有用”变成“有证据地迭代 harness”

## 上手路径

1. 先接入最小链路，只记录一次 agent 任务的模型调用、工具调用和最终结果。
2. 再补上关键元数据，例如耗时、token、错误类型、验证输出和任务标签。
3. 最后把 traces 和回归测试、benchmark 或人工复盘流程接起来，让它真正参与优化闭环。

## 选择边界

- 如果你只是做单轮 prompt 试验，playground 往往比 tracing 平台更轻。
- 如果没有明确的评测目标或复盘流程，再好的 observability 工具也会退化成“漂亮日志仓库”。
- 这类工具能帮助你看清问题，但不能替你设计更好的 harness 或更强的验证标准。

## 相关主题

- 与 `topic-0002` 强相关，因为 Harness Engineering 的很多优化都依赖 trace 反馈。
- 与 `topic-0006` 强相关，因为自验证与 failure-mode analysis 都需要 trace 支撑。
- 与 `evaluation` 强相关，因为它是从执行细节回到任务表现的桥梁。

## 来源说明

- 来源笔记 ID: `note-0002`
- 当前是知识库中的工具类别卡，后续可以继续拆成 LangSmith、Phoenix、Helicone 等具体工具卡。