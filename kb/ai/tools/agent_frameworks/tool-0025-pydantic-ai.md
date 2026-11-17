---
doc_type: tool_card
id: tool-0025
title: pydantic_ai
title_zh: PydanticAI
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - evaluation
capabilities:
  - tool_use
  - workflow_automation
  - reasoning
use_cases:
  - typed_agent_development
  - human_in_the_loop_workflow
  - durable_agent_execution
source_refs:
  - note-0007
  - article-0025
aliases:
  - pydantic ai
  - genai agent framework the pydantic way
search_terms:
  - pydantic ai 是什么
  - pydantic ai 类型安全
  - pydantic ai tool approval
  - pydantic ai durable execution
last_reviewed: 2026-04-03
---

# 工具定位

PydanticAI 是强调类型安全与工程可靠性的 Python Agent 框架，适合构建结构化输出、可观测、可评测并可长期维护的生成式应用工作流。

## 适用场景

- 你希望用强类型约束降低 Agent 系统的运行时错误
- 你需要结构化输出、工具调用审批和耐久执行能力
- 你要把可观测与评测能力内建到研发流程中

## 核心能力

- 类型安全开发: 依赖类型标注与校验提升开发可预测性
- 能力组合机制: 通过 capabilities 组织工具、指令与模型配置
- 生产可靠性: 支持人审工具调用、耐久执行与流式结构化输出

## 上手路径

1. 先从单 Agent + 结构化输出开始，验证类型和输出契约。
2. 再加入工具调用与依赖注入，增强业务能力。
3. 最后接入可观测与评测，落地长期迭代机制。

## 选择边界

- 强类型和结构化设计会增加前期建模成本。
- 框架能力丰富，需控制最小可行范围防止一次性过度设计。
- 最终可靠性仍依赖模型质量和外部工具稳定性。

## 相关主题

- 与 `tool-0022` 互补，可将类型安全 Agent 逻辑放入更大应用编排中。
- 与 `tool-0021` 强相关，适合深研类 Agent 的结构化与可靠执行强化。
- 与 `topic-0014` 强相关，可支持成本与质量双约束下的稳定迭代。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0025`
