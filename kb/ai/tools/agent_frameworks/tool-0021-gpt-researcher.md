---
doc_type: tool_card
id: tool-0021
title: gpt_researcher
title_zh: GPT Researcher
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
  - citation_grounded_reporting
  - hybrid_web_local_research
source_refs:
  - note-0007
  - article-0021
aliases:
  - open deep research agent
  - gptr
search_terms:
  - gpt researcher 是什么
  - planner execution publisher
  - 深度研究代理
  - gpt researcher mcp
last_reviewed: 2026-04-03
---

# 工具定位

GPT Researcher 是面向复杂研究任务的开源研究 Agent，强调结构化研究流程、来源引用与较强可配置性，适合生成较长、可追溯的研究报告。

## 适用场景

- 你需要从多来源收集证据并输出带引用的研究报告
- 你要把研究流程拆为可复用步骤并持续优化质量
- 你希望结合 web 与本地文档开展混合研究任务

## 核心能力

- 分层研究架构: planner、execution agents 与 publisher 协同
- 混合数据输入: 支持 web 检索与本地文档研究
- MCP 扩展能力: 可引入外部数据源增强研究覆盖

## 上手路径

1. 先用默认检索器跑通一个端到端研究任务。
2. 再开启 MCP 或本地文档输入，验证证据覆盖率与报告质量。
3. 最后引入 tracing 与预算控制，形成可持续研究工作流。

## 选择边界

- 深研任务通常耗时和成本较高，不适合轻量即时问答。
- 输出结论仍需人工复核，尤其在高风险决策场景。
- 检索源质量直接影响报告可信度，需做来源治理。

## 相关主题

- 与 `tool-0020` 强相关，二者都属于深研 Agent 路线，可对比实现策略。
- 与 `tool-0013` 强相关，可通过 MCP 扩展专用数据源与工具链。
- 与 `topic-0011`、`topic-0014` 强相关，适合纳入评测门禁与成本优化。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0021`
