---
doc_type: source_article
id: article-0006
title: phoenix_overview
title_zh: What is Arize Phoenix?
author: Arize AI
publisher: Arize Docs
publish_date: 2026-04-02
article_url: https://arize.com/docs/phoenix
source_kind: article_summary
topic_tags:
  - agents
  - evaluation
  - ai_engineering
status: reviewed
last_reviewed: 2026-04-02
---

# 文章定位

这是一篇 Phoenix 的官方总览文档，重点在于说明 Phoenix 如何把 tracing、evaluation、prompt iteration、datasets 与 experiments 放在同一个 AI 调试和迭代工作流里。它适合作为“Agent Observability 平台除了看 trace 还能做什么”的产品入口。

## 核心观点

- Phoenix 既做 tracing，也做 evaluation、prompt engineering、datasets 与 experiments，强调从单次调试走向证据驱动的迭代。
- Phoenix 基于 OpenTelemetry 和 OpenInference，强调可接入性和开放生态。
- 它支持多框架、多 provider、多语言的自动埋点或接入，适合复杂异构的 agent / LLM 应用。
- 它的价值不只在观察一次运行，而在于把观测、评测、提示优化和实验组织成完整 workflow。

## 值得保留的方法或框架

- 从 trace 调试起步，再走向 evaluation 和 experiments
- 基于 OpenTelemetry / OTLP 的开放接入方式
- 用生产样本驱动提示和系统迭代

## 局限与偏见

- 这是一篇官方概览，重点在产品能力展示，不是竞品横评。
- 文档没有替你决定何时该优先做 tracing、evaluation 或 experiments，需要结合团队成熟度判断。

## 可拆出的卡片

- `note-0006`: Phoenix 作为 observability 与 evaluation 平台
- `tool-0004`: Phoenix