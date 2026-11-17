---
doc_type: source_article
id: article-0086
title: continue_github_overview
title_zh: Continue 官方仓库概览
author: ContinueDev and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/ContinueDev/continue
source_kind: article_summary
topic_tags:
  - coding_agent
  - ci_checks
  - ide_extension
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

Continue 是面向工程团队的 AI 编码基础设施，核心强调“源码托管的 AI 检查”与 IDE/CLI 双入口协作。

## 核心观点

- 将 AI 检查定义为仓库内 markdown 规则，并以 PR 状态检查执行。
- 通过 Continue CLI 支持在本地和 CI 中统一运行。
- 兼容多编辑器与多模型供应商，适合团队级标准化治理。
- 把规则与代码同仓管理，降低“工具配置漂移”风险。

## 值得保留的方法或框架

- Checks as Code: 把 AI 审查策略版本化。
- 本地与 CI 一致性: 同一规则跨开发与发布阶段复用。
- 代理流程可审计: 输出建议差异便于人工复核。

## 局限与偏见

- 规则质量直接决定检查质量，需持续维护。
- 组织落地需要流程配套，否则易沦为“额外提醒”。
- 多模型配置会增加成本与治理复杂度。

## 可迁移知识

- 将 AI 代码审查纳入 PR 流水线时，优先做规则版本化。
- 先从少量高价值检查项切入再逐步扩展。
- 人审与自动建议结合比全自动放行更稳健。

## 来源说明

- 来源链接: https://github.com/ContinueDev/continue
- 抓取时间: 2026-04-03
