---
doc_type: source_article
id: article-0005
title: langsmith_tracing_quickstart
title_zh: LangSmith Tracing Quickstart
author: LangChain
publisher: LangSmith Docs
publish_date: 2026-04-02
article_url: https://docs.langchain.com/langsmith/observability-quickstart
source_kind: article_summary
topic_tags:
  - agents
  - evaluation
  - ai_engineering
status: reviewed
last_reviewed: 2026-04-02
---

# 文章定位

这是一篇典型的 tracing 入门文档，重点不在理论，而在于如何把 LangSmith 接进应用，把 LLM 调用与整条应用链路都记录为可分析的 traces。它适合作为“Agent Observability 工具到底怎么落地”的第一手产品说明。

## 核心观点

- LangSmith 把每个请求记录成 trace，把其中的各个操作记录成 runs，帮助开发者看清一次请求完整发生了什么。
- 对 LLM 与 agent 系统来说，observability 比传统软件更重要，因为同一输入并不保证同一输出。
- 接入可以很轻：既可以先只包一层 OpenAI client，把单次模型调用打到平台里，也可以再用 `traceable` 把整条应用链路追进去。
- trace 不只是开发期调试工具，还能继续服务于过滤、分析、项目级组织与后续 AI 驱动的性能洞察。

## 值得保留的方法或框架

- 从单个 LLM call tracing 开始，再升级到整条 application tracing
- 用 project / workspace 组织 traces
- 把 tracing 看成评测与优化闭环的基础设施，而不只是日志收集

## 局限与偏见

- 这是一篇产品 quickstart，不会系统比较 LangSmith 和其他 tracing 平台。
- 文中示例更偏 LangChain / LangGraph 与 OpenAI 生态，但原理可迁移到其他 provider 和 agent 框架。

## 可拆出的卡片

- `note-0005`: LangSmith 作为 agent tracing 产品
- `tool-0003`: LangSmith