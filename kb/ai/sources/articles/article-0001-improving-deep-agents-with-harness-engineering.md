---
doc_type: source_article
id: article-0001
title: improving_deep_agents_with_harness_engineering
title_zh: Improving Deep Agents with harness engineering
author: LangChain
publisher: LangChain Blog
publish_date: 2026-02-17
article_url: https://blog.langchain.com/improving-deep-agents-with-harness-engineering/
source_kind: article_summary
topic_tags:
  - agents
  - ai_engineering
  - evaluation
status: reviewed
last_reviewed: 2026-04-02
---

# 文章定位

这篇文章讨论的不是“如何换一个更强模型”，而是如何在模型外面搭建更好的执行外壳，让 agent 在真实任务里更稳定、更会验证、更少走偏路。对 AI Agent 学习来说，它很适合当作“prompt 之外还有什么可以系统性优化”的入门材料。

## 核心观点

- Harness engineering 的目标，是把模型本身不稳定、带尖峰的能力，塑造成更适合特定任务目标的系统行为。
- 可调旋钮不只包括 system prompt，还包括工具、middleware、hooks、memory、sub-agent delegation 和执行流程。
- 文章用同一模型 `gpt-5.2-codex` 做实验，只改 harness，就把 deepagents-cli 在 Terminal Bench 2.0 上的成绩从 `52.8` 提升到 `66.5`。
- 真正有效的改动集中在四类：强制 build-verify-fix 循环、注入环境与约束上下文、检测并打断 doom loops、按阶段分配 reasoning budget。
- Trace 分析是外循环改进的重要信号，因为它能把失败模式从“感觉不行”变成可聚类、可对比、可迭代的问题列表。

## 值得保留的方法或框架

- 把 harness 视为一个可实验系统，而不是只调 prompt 的黑盒。
- 用 trace + benchmark + targeted change 的闭环持续优化 agent。
- 在 agent 即将结束前用 middleware 强制触发一次验证检查。

## 局限与偏见

- 文章基于 LangChain 自家 agent 栈、LangSmith、Harbor 和 Terminal Bench，结论受该环境影响。
- 文中的很多 guardrail 更像“为今天模型的缺陷补栏杆”，未来更强模型可能不再需要同样强度的外部约束。

## 可拆出的卡片

- `topic-0002`: Harness Engineering