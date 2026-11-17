---
doc_type: topic_card
id: topic-0088
title: claude_code_automation_system_playbook
title_zh: Claude Code 自动化系统手册
status: reviewed
language: zh-CN
learning_level: level_200
topic_clusters:
  - agent
  - ai_engineering
  - workflow_automation
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0067
  - topic-0081
source_refs:
  - note-0014
  - article-0144
aliases:
  - claude code mcp hooks channels sdk
search_terms:
  - claude code mcp hooks subagent channels
  - claude agent sdk automation workflow
last_reviewed: 2026-04-10
---

# 一句话定义

这张卡把 Claude Code 教程主线整理成自动化系统图，重点是 MCP、Hooks、Subagent、Channels 与 Agent SDK 的组合实践。

## 核心方法

1. 先用 MCP 接入外部能力，构建工具面。
2. 再用 Hooks 把关键事件自动化，构建执行面。
3. 用 Subagent 处理可并行子任务，提升吞吐。
4. 用 Channels 与计划任务把外部事件推入会话，构建调度面。
5. 最后用 Agent SDK 将能力嵌入程序与流水线，构建产品化闭环。

## 风险与边界

- 区分官方能力与社区扩展，避免误用不稳定路径。
- Hooks 与高权限命令需设置防护规则，避免误删与泄露。
- 并行子代理应按任务边界启用，避免 token 失控。

## 检索提示

- 适用于“把 Claude Code 从助手升级为自动化工程平台”的场景。
