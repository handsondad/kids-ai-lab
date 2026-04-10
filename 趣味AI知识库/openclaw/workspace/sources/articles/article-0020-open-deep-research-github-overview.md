---
doc_type: source_article
id: article-0020
title: open_deep_research_github_overview
title_zh: Open Deep Research 官方仓库概览
author: LangChain AI
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/langchain-ai/open_deep_research
source_kind: article_summary
topic_tags:
  - agents
  - ai_engineering
  - evaluation
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

这是 Open Deep Research 官方仓库入口页，核心定位是可配置、开源、跨模型与跨工具的深度研究 Agent 实现，强调评测可对齐与 MCP 兼容。

## 核心观点

- 项目提供开源 deep research agent，支持多模型、搜索工具和 MCP 服务器。
- 强调配置化架构，允许对摘要、研究、压缩和报告模型分别配置。
- 提供评测链路并对齐 Deep Research Bench，便于公开基准比较。
- 支持本地 LangGraph Studio 调试与托管部署路径。
- 官方保留 legacy 实现用于对比不同深研架构思路。

## 值得保留的方法或框架

- 研究 Agent 配置分层: 将研究流程拆分为可独立替换的模型职责。
- 基准驱动迭代: 将公开 benchmark 纳入持续优化闭环。
- MCP 扩展优先: 通过工具生态扩展研究范围和数据来源。

## 局限与偏见

- 深研任务计算与 token 成本显著高于普通问答。
- 公开基准成绩不能直接等价于业务场景表现。
- 项目强调灵活性，落地时需要补齐任务边界与成本治理。

## 可拆出的卡片

- `tool-0020`: Open Deep Research 工具卡
- `collection-0004`: Agent 与 MCP 工具精选（深研 Agent 层补强）
