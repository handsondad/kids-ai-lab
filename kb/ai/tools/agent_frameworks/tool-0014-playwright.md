---
doc_type: tool_card
id: tool-0014
title: playwright
title_zh: Playwright
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - tool_use
capabilities:
  - workflow_automation
  - tool_use
  - search_and_retrieval
use_cases:
  - browser_automation
  - end_to_end_testing
  - agent_execution
source_refs:
  - note-0007
  - article-0014
aliases:
  - Playwright MCP
  - Playwright CLI
search_terms:
  - playwright 是什么
  - playwright mcp
  - 浏览器自动化测试
  - agent 浏览器操作
last_reviewed: 2026-04-03
---

# 工具定位

Playwright 是跨浏览器自动化与测试框架，既能支撑传统 E2E 测试，也能通过 CLI/MCP 直接为 AI Agent 提供可控的网页交互执行能力。

## 适用场景

- 你需要稳定执行网页操作并支持 Chromium、Firefox、WebKit 多浏览器
- 你要把网页操作纳入 Agent 执行链路，且要求可回放可调试
- 你在做端到端回归、表单流验证或 UI 自动化采集

## 核心能力

- 单 API 跨浏览器: 同一套代码覆盖主流浏览器引擎
- 工程可靠性: 自动等待、定位器、隔离上下文与 tracing
- Agent 友好入口: Playwright MCP 与 CLI 可直接接入智能体流程

## 上手路径

1. 先用最小脚本完成目标站点的导航与关键交互。
2. 再加入 tracing 和断言，把流程从“能跑”升级为“可诊断”。
3. 最后按需求接入 MCP 或测试框架，纳入持续回归与发布门禁。

## 选择边界

- 它不是“零维护”自动化，页面变更仍需定位器和流程维护。
- 在纯数据抓取场景，浏览器自动化成本可能高于轻量抓取方案。
- 对高并发生产任务，需额外规划会话隔离、资源与重试策略。

## 相关主题

- 与 `tool-0015` 互补，前者偏底层稳定执行，后者偏自然语言编排。
- 与 `tool-0016` 互补，前者偏操作执行，后者偏内容抓取与结构化。
- 与 `topic-0010` 强相关，可作为门禁与自动化验证执行底座。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0014`
