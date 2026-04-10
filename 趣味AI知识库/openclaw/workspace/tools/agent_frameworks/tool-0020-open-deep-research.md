---
doc_type: tool_card
id: tool-0020
title: open_deep_research
title_zh: Open Deep Research
status: reviewed
language: zh-CN
learning_level: level_400
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - evaluation
capabilities:
  - search_and_retrieval
  - reasoning
  - workflow_automation
use_cases:
  - deep_research_agent
  - benchmark_driven_iteration
  - mcp_enhanced_research
source_refs:
  - note-0007
  - article-0020
aliases:
  - langchain open deep research
  - deep research agent
search_terms:
  - open deep research 是什么
  - deep research bench
  - langgraph deep research
  - mcp 深度研究代理
last_reviewed: 2026-04-03
---

# 工具定位

Open Deep Research 是面向复杂研究任务的开源 Agent 框架，强调跨模型和跨搜索工具配置、MCP 扩展能力，以及基准驱动的可评估迭代。

## 适用场景

- 你要构建多阶段研究型 Agent，而不是一次性检索问答
- 你需要将搜索、摘要、压缩、报告生成拆分为可配置模块
- 你希望把研究系统放到基准评测与持续优化流程中

## 核心能力

- 深研流程编排: 覆盖检索到报告生成的多阶段链路
- 多模型多工具配置: 按任务分配模型职责并替换搜索后端
- 评测与可视化调试: 支持与 Deep Research Bench 对齐的评测实践

## 上手路径

1. 先用默认配置跑通一条端到端研究任务链路。
2. 再分离模型职责，按任务调优摘要、研究和报告环节。
3. 最后引入评测集与成本监控，建立长期优化机制。

## 选择边界

- 深研链路成本较高，需提前设置预算和配额。
- 并行或多阶段流程会放大失败传播，必须加强可观测与重试设计。
- 基准表现仅作参考，仍需业务任务集复验。

## 相关主题

- 与 `tool-0013` 强相关，可通过 MCP 扩展研究工具集合。
- 与 `topic-0011` 强相关，适合纳入基准门禁与发布决策。
- 与 `topic-0014` 强相关，便于开展成本与质量联合优化。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0020`
