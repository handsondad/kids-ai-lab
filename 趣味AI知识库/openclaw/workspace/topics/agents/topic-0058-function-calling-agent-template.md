---
doc_type: topic_card
id: topic-0058
title: function_calling_agent_template
title_zh: Function Calling Agent 模板
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - agent
  - application_engineering
  - ai_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0048
source_refs:
  - note-0011
  - article-0137
aliases:
  - tool calling agent
  - 函数调用代理回路
search_terms:
  - openai tools schema
  - function_to_json
  - tool call loop
last_reviewed: 2026-04-08
---

# 一句话定义

Function Calling Agent 模板是从 chapter7/Agent 提炼的工具调用最小框架，重点是 schema 生成、调用执行和多轮消息编排。

## 关键路径

1. 通过函数签名自动生成工具 JSON schema。
2. 首轮请求允许模型返回 tool_calls。
3. 执行工具并把结果写回对话历史。
4. 二次请求整合工具结果生成最终回答。

## 实操要点

- 工具执行建议禁用不受控 `eval`，改为显式函数映射表。
- 工具结果与模型回复需保留完整消息轨迹，便于审计。
- 先构建小工具集验证调用稳定性，再扩展外部系统集成。

## 检索提示

- 适用于需要快速搭建可调用外部工具的中文 Agent 原型场景。
