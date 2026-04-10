---
doc_type: topic_card
id: topic-0091
title: claude_openclaw_dual_stack_roadmap
title_zh: Claude 与 OpenClaw 双栈路线图
status: reviewed
language: zh-CN
learning_level: level_200
topic_clusters:
  - learning_strategy
  - agent
  - ai_engineering
capabilities:
  - planning
  - system_design
prerequisites:
  - topic-0088
  - topic-0089
source_refs:
  - note-0014
  - article-0144
aliases:
  - claude code openclaw roadmap
search_terms:
  - dual stack agent workflow
  - development side and operation side agent
last_reviewed: 2026-04-10
---

# 一句话定义

这张卡定义了 Claude Code（开发侧）与 OpenClaw（运行侧）的双栈协作路径，用于搭建端到端 Agent 体系。

## 双栈分工

1. Claude Code：偏研发效率，负责代码、自动化与工程流水线。
2. OpenClaw：偏运营执行，负责多渠道交互、长期记忆与任务编排。
3. 连接层：通过协议、任务清单与安全策略实现上下游闭环。

## 推荐推进顺序

1. 先跑通 Claude Code 的 MCP + Hooks 最小闭环。
2. 再跑通 OpenClaw 的 onboard + 模型 +渠道最小闭环。
3. 用统一任务模板和日志规范连接双栈。
4. 最后补齐部署、安全、监控与回滚策略。

## 检索提示

- 适用于团队级 AI 工具链整合与治理设计。
