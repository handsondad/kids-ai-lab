---
doc_type: tool_card
id: tool-0015
title: stagehand
title_zh: Stagehand
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - agents
  - ai_engineering
  - tool_use
capabilities:
  - reasoning
  - planning
  - workflow_automation
use_cases:
  - browser_agent_workflow
  - structured_extraction
  - semi_autonomous_execution
source_refs:
  - note-0007
  - article-0015
aliases:
  - browserbase stagehand
  - ai browser automation framework
search_terms:
  - stagehand 是什么
  - stagehand act agent extract
  - 浏览器 agent 框架
  - stagehand 和 playwright 区别
last_reviewed: 2026-04-03
---

# 工具定位

Stagehand 是将自然语言决策与代码执行结合的浏览器自动化框架，适合在不牺牲可控性的前提下，让 Agent 处理更复杂、更动态的网页任务。

## 适用场景

- 你希望在网页任务中混合“确定性代码”与“探索性自然语言指令”
- 你需要将一次性 AI 探索流程固化为可重复自动化步骤
- 你要在浏览器环境中做多步任务执行与结构化信息提取

## 核心能力

- 混合编排: 支持 act、agent、extract 三类操作模式
- 从探索到复用: 支持缓存与自愈以降低长期维护成本
- 生产导向: 以可靠性和可控性为优先设计目标

## 上手路径

1. 先用 act 完成关键单步动作，确认页面交互边界。
2. 再用 agent 串联多步任务，验证稳定性与异常路径。
3. 最后用 extract 定义结构化输出，并缓存可复用流程。

## 选择边界

- 依赖 LLM 的部分会引入额外成本与不确定性，需要显式兜底。
- 对高度结构化且稳定页面，纯代码自动化可能更轻量。
- 框架能力强但抽象较新，团队需要适应其工作方式。

## 相关主题

- 与 `tool-0014` 强相关，可形成“稳定执行 + 灵活编排”组合。
- 与 `tool-0016` 互补，可把结构化提取与网页浏览自动化衔接。
- 与 `topic-0006` 强相关，适合纳入失败样本回放与优化闭环。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0015`
