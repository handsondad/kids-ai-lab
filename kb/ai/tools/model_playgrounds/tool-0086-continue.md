---
doc_type: tool_card
id: tool-0086
title: continue
title_zh: Continue
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - coding_agent
  - ci_checks
  - policy_as_code
capabilities:
  - markdown_defined_pr_checks
  - cli_and_ci_execution
  - multi_editor_multi_model_support
use_cases:
  - ai_code_review_guardrails
  - repository_level_quality_checks
  - source_controlled_agent_policies
source_refs:
  - note-0007
  - article-0086
aliases:
  - continue cli
  - continuedev
search_terms:
  - continue checks
  - continue cn cli
  - continue pr status checks
  - continue policy as code
last_reviewed: 2026-04-03
---

# 工具定位

Continue 是面向团队的 AI 代码检查与代理协作平台，核心是把检查规则与仓库代码一起管理。

## 适用场景

- 你要把 AI 审查纳入 PR 质量门禁
- 你要让团队共享一致的检查策略
- 你要在本地与 CI 统一执行代理检查

## 核心能力

- Checks as Code: markdown 规则驱动 PR 检查
- 统一执行入口: `cn` CLI 可本地/CI 共用
- 多模型多编辑器兼容: 便于渐进接入

## 上手路径

1. 先定义 1 到 2 条关键检查规则。
2. 再把规则接入 PR 状态检查流程。
3. 最后迭代规则并建立团队治理机制。

## 选择边界

- 规则设计不佳会造成噪音或漏检。
- 流程落地需要开发与安全共同参与。
- 多模型策略需同步管理成本与一致性。

## 相关主题

- 与 `tool-0085` 可组合: Cline 执行编码任务，Continue 做 PR 守门。
- 与 `tool-0090` 可组合: Continue 触发流程，Semgrep 提供静态分析信号。
- 与 `collection-0001` 强相关，补齐“策略即代码”的治理层。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0086`
