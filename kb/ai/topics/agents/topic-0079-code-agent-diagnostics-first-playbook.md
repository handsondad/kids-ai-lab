---
doc_type: topic_card
id: topic-0079
title: code_agent_diagnostics_first_playbook
title_zh: Code Agent 可诊断优先手册
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - agent
  - ai_engineering
  - observability
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0077
source_refs:
  - note-0012
  - article-0141
aliases:
  - diagnostic-first agent design
  - code agent pitfalls
search_terms:
  - agent debugging observability
  - tool granularity design
  - shell pipeline failure diagnostics
last_reviewed: 2026-04-08
---

# 一句话定义

Code Agent 可诊断优先手册用于在工具链设计中优先保证错误可定位、状态可恢复和行为可解释，避免盲目复杂化。

## 关键路径

1. 先构建最小可运行链路，再逐步增加能力。
2. 高频操作优先拆为原子工具，减少黑盒管道。
3. 统一状态码与结构化错误输出，支持针对性重试。
4. 用可观测日志和步骤追踪支撑持续优化。

## 实操要点

- 复杂命令自由度不是能力上限，可能是故障放大器。
- 工具设计需落在“不过粗也不过细”的可用区间。
- 无法诊断的问题通常无法稳定恢复。

## 检索提示

- 适用于 Code Agent、终端代理和自动修复类系统开发。
