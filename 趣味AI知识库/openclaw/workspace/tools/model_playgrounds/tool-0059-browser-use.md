---
doc_type: tool_card
id: tool-0059
title: browser_use
title_zh: browser-use
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - browser_automation
  - agent_actions
  - web_task_execution
capabilities:
  - agent_browser_control
  - cli_and_templates
  - cloud_scale_execution
use_cases:
  - web_form_automation
  - repetitive_browser_tasks
  - web_agent_prototyping
source_refs:
  - note-0007
  - article-0059
aliases:
  - browser-use
  - browser use
search_terms:
  - browser use agent automation
  - browser use cloud
  - browser use cli
  - browser use templates
last_reviewed: 2026-04-03
---

# 工具定位

browser-use 是让 Agent 执行网页任务的自动化框架，适合处理表单填写、页面导航、信息采集等高重复网页操作。

## 适用场景

- 你要让 Agent 在真实网站中完成连续操作
- 你要从脚本自动化升级到任务目标驱动自动化
- 你要在开源本地与云端托管之间灵活切换

## 核心能力

- 任务驱动网页执行: 通过任务目标组织页面操作链路
- CLI 与模板体系: 快速搭建可运行原型并迭代
- 开源与云协同: 本地可控，云端可扩展与增强稳定性

## 上手路径

1. 先用模板和示例跑通单一网页任务。
2. 再把关键步骤抽象成可复用工具或流程。
3. 最后引入云端能力和监控机制用于规模化执行。

## 选择边界

- 网站结构和反自动化策略变化会影响稳定性。
- 复杂任务需要明确超时、重试和人工接管机制。
- 生产场景应补齐权限、审计和合规边界控制。

## 相关主题

- 与 `tool-0054` 可组合: n8n 负责编排，browser-use 执行网页动作。
- 与 `tool-0051` 可组合: 通过 MCP 统一暴露浏览器能力。
- 与 `collection-0001` 强相关，补齐网页自动化 Agent 实战路径。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0059`
