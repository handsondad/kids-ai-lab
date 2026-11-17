---
doc_type: tool_card
id: tool-0090
title: semgrep
title_zh: Semgrep
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - static_analysis
  - appsec
  - code_scanning
capabilities:
  - pattern_based_multilanguage_rules
  - local_precommit_ci_execution
  - mcp_server_for_ai_assistants
use_cases:
  - secure_coding_guardrails
  - custom_rule_enforcement
  - ai_assisted_security_triage
source_refs:
  - note-0007
  - article-0090
aliases:
  - semgrep cli
  - semgrep code scanning
search_terms:
  - semgrep ci
  - semgrep rules
  - semgrep mcp
  - semgrep sast
last_reviewed: 2026-04-03
---

# 工具定位

Semgrep 是多语言静态分析工具，适合在开发与 CI 流程中持续执行安全与规范扫描。

## 适用场景

- 你要在 PR 阶段拦截高风险代码模式
- 你要建立项目级规则库并持续演进
- 你要给 AI 编码助手接入安全扫描反馈

## 核心能力

- 规则即代码: 以源码风格模式定义检测策略
- 多场景执行: 本地、预提交、CI 一致运行
- MCP 支持: 可被 AI 助手直接调用扫描

## 上手路径

1. 先使用官方规则集快速跑通扫描。
2. 再按项目风险自定义高价值规则。
3. 最后接入 CI 阻断与修复建议流程。

## 选择边界

- 规则治理需要持续投入与误报管理。
- 社区版在高级跨文件分析上有能力边界。
- 安全告警需要结合业务语境做优先级排序。

## 相关主题

- 与 `tool-0086` 强关联: Continue 负责 PR 检查编排，Semgrep 提供静态扫描信号。
- 与 `tool-0087` 可组合: Aider 生成改动后用 Semgrep 自动回扫。
- 与 `collection-0001` 强相关，补齐安全左移与规则治理能力。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0090`
