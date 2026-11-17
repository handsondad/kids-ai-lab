---
doc_type: tool_card
id: tool-0028
title: skyvern
title_zh: Skyvern
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - workflow
capabilities:
  - planning
  - workflow_automation
  - search_and_retrieval
use_cases:
  - browser_workflow_automation
  - web_rpa_agent
  - schema_guided_extraction
source_refs:
  - note-0007
  - article-0028
aliases:
  - ai browser automation
  - skyvern cloud
search_terms:
  - skyvern 是什么
  - skyvern playwright
  - 浏览器 agent 自动化
  - skyvern workflow
last_reviewed: 2026-04-03
---

# 工具定位

Skyvern 是面向浏览器任务自动化的 AI Agent 框架，结合视觉理解与流程编排能力，适合跨站点执行表单、提取、下载等重复工作。

## 适用场景

- 你要自动化网页端重复任务而不想手写大量脆弱选择器
- 你需要结构化提取网页数据并校验结果
- 你希望用 SDK 或工作流方式管理浏览器自动化任务

## 核心能力

- AI 增强浏览器操作: 在 Playwright 之上增加自然语言交互能力
- 任务工作流编排: 将单步任务组合成可复用流程
- 结构化输出: 支持 schema 约束的数据提取与校验

## 上手路径

1. 先跑一个单站点任务，验证 act/extract/validate 三个基本能力。
2. 再把任务拆成可复用 workflow，并设置失败重试与告警。
3. 最后接入凭据与审计机制，满足生产自动化要求。

## 选择边界

- 复杂站点与反自动化场景会显著影响稳定性。
- 纯规则脚本在固定页面上可能更低成本。
- 生产使用需强化权限、审计与安全策略。

## 相关主题

- 与 `tool-0014`、`tool-0015` 强相关，形成浏览器 Agent 工具体系。
- 与 `tool-0013` 强相关，可通过 MCP 扩展工具与数据接入。
- 与 `collection-0004` 强相关，适合补齐自动化执行链路。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0028`
