---
doc_type: source_article
id: article-0017
title: dify_github_overview
title_zh: Dify 官方仓库概览
author: LangGenius
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/langgenius/dify
source_kind: article_summary
topic_tags:
  - agents
  - ai_engineering
  - rag
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

这是 Dify 官方仓库入口页，核心定位是生产可用的 LLM/Agent 应用开发平台，覆盖工作流编排、RAG、Agent、模型管理和可观测能力。

## 核心观点

- Dify 是开源 LLM 应用开发平台，目标是从原型快速走向生产。
- 平台提供可视化工作流、Prompt IDE、RAG pipeline 和 Agent 能力。
- 提供云端与自托管两种路径，并强调企业部署与运维扩展。
- 支持多模型供应商和 OpenAI 兼容模型接入。
- 平台能力包含 LLMOps 监控与 API 化集成，适合嵌入业务系统。

## 值得保留的方法或框架

- 平台化开发: 将应用编排、模型接入、评测与运维能力收敛到统一层。
- 可视化到代码协同: 先在可视化流程验证，再通过 API 接入业务。
- 双部署路线: 早期云试验，后期按合规和成本切换自托管。

## 局限与偏见

- 平台能力全面，但引入后会有运维与治理复杂度。
- 多模型支持不等于自动最佳结果，仍需任务级评测。
- 仓库首页偏平台广度展示，业务深度落地需结合文档与实践验证。

## 可拆出的卡片

- `tool-0017`: Dify 工具卡
- `collection-0004`: Agent 与 MCP 工具精选（平台编排层补强）
