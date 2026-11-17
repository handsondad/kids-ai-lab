---
doc_type: tool_card
id: tool-0062
title: skyvern
title_zh: Skyvern
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - browser_automation
  - vision_agent
  - workflow_builder
capabilities:
  - ai_augmented_playwright
  - browser_task_workflows
  - cloud_and_self_host_modes
use_cases:
  - resilient_web_automation
  - form_and_file_operations
  - browser_agent_workflow_ops
source_refs:
  - note-0007
  - article-0062
aliases:
  - skyvern
  - skyvern ai
search_terms:
  - skyvern playwright compatible sdk
  - skyvern browser automation
  - skyvern workflow builder
  - skyvern cloud self host
last_reviewed: 2026-04-03
---

# 工具定位

Skyvern 是视觉增强的浏览器自动化 Agent 平台，适合执行跨站点、页面变化频繁且需要稳定性的网页任务流程。

## 适用场景

- 你要自动化登录、表单填写、数据提取、文件下载等网页任务
- 你要从脚本级自动化升级到任务级工作流编排
- 你要在本地可控部署和云端规模化之间灵活切换

## 核心能力

- AI 增强 Playwright: 自然语言与传统选择器协同操作
- 任务与工作流编排: 支持多步骤执行和复用
- 云本双模式: 本地快速验证，云端增强稳定性与扩展性

## 上手路径

1. 先通过 quickstart 跑通单任务执行。
2. 再把高频动作沉淀为可复用工作流模块。
3. 最后接入权限、监控和异常恢复策略进入生产。

## 选择边界

- 面对复杂反自动化站点仍需额外策略与人工接管。
- 成本会随任务复杂度和执行规模增长。
- 生产环境要重点关注安全凭证与访问审计。

## 相关主题

- 与 `tool-0059` 同属浏览器自动化: browser-use 偏轻量快速，Skyvern 偏平台化流程。
- 与 `tool-0054` 可组合: n8n 编排业务触发，Skyvern 执行网页动作。
- 与 `collection-0001` 强相关，补齐网页 Agent 平台化能力。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0062`
