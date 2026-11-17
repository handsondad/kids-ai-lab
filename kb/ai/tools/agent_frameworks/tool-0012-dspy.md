---
doc_type: tool_card
id: tool-0012
title: dspy
title_zh: DSPy
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - evaluation
capabilities:
  - reasoning
  - planning
  - workflow_automation
use_cases:
  - agent_loop_building
  - rag_pipeline
  - benchmark_iteration
source_refs:
  - note-0007
  - article-0012
aliases:
  - Declarative Self-improving Python
  - DSPy framework
search_terms:
  - dspy 是什么
  - dspy 和 prompt engineering 区别
  - dspy 优化器
  - dspy agent pipeline
last_reviewed: 2026-04-03
---

# 工具定位

DSPy 是一个用“程序化构建和优化”替代“手工提示词堆叠”的框架，适合把 LM 应用拆成可组合模块，并通过优化器持续改进效果。

## 适用场景

- 你希望把 Agent 或 RAG 流程做成可复用、可测试的模块化系统
- 团队需要持续迭代效果，而不是每次手工改 prompt
- 你希望把实验优化和工程代码连接成统一工作流

## 核心能力

- 声明式编排: 先定义模块结构，再迭代优化内部行为
- 自改进机制: 通过优化策略持续改进提示与系统效果
- 流程组合能力: 支持从单任务到多阶段 pipeline 的统一组织

## 上手路径

1. 先将一个现有任务改写为最小 DSPy 模块，跑通端到端结果。
2. 再引入评测样本与优化器，比较改造前后质量与稳定性。
3. 最后把模块扩展到完整 Agent 或 RAG 流程，建立迭代节奏。

## 选择边界

- DSPy 不替代高质量数据与评测设计，优化效果依赖反馈质量。
- 对只做一次性小脚本场景，框架引入成本可能高于收益。
- 团队需要接受新的抽象方式与实验流程，存在学习曲线。

## 相关主题

- 与 `topic-0006` 强相关，可把自验证与外循环优化做成工程化流程。
- 与 `topic-0011` 强相关，适合纳入发布门禁前的基准迭代环节。
- 与 `tool-0003` 和 `tool-0004` 互补，可组合 tracing + evaluation 工作流。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0012`
