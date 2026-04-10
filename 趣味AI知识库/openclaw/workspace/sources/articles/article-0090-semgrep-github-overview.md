---
doc_type: source_article
id: article-0090
title: semgrep_github_overview
title_zh: Semgrep 官方仓库概览
author: semgrep and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/semgrep/semgrep
source_kind: article_summary
topic_tags:
  - static_analysis
  - appsec
  - mcp_integration
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

Semgrep 是轻量静态分析引擎，支持多语言规则扫描、CI 集成与开发流程安全守护，并扩展到 MCP 辅助场景。

## 核心观点

- 规则以接近源码的模式表达，降低编写门槛。
- 可在本地、预提交、CI 中统一执行扫描策略。
- 生态覆盖 SAST、依赖风险与密钥检测场景。
- 提供 MCP server，便于 AI 编码助手调用扫描能力。

## 值得保留的方法或框架

- 规则即策略: 用可读规则持续沉淀安全规范。
- 左移安全: 在开发阶段尽早暴露问题。
- 多场景一致性: 本地与 CI 共享同一规则资产。

## 局限与偏见

- 规则质量和覆盖率决定告警价值。
- 社区版在复杂跨文件场景上存在能力边界。
- 引入后需治理误报与开发者体验平衡。

## 可迁移知识

- 安全扫描应先从高信号规则集启动。
- 将规则变更纳入代码评审可持续提升质量。
- 与编码代理结合时需清晰定义“建议 vs 阻断”边界。

## 来源说明

- 来源链接: https://github.com/semgrep/semgrep
- 抓取时间: 2026-04-03
