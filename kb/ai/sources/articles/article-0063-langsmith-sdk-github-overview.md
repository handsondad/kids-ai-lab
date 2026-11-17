---
doc_type: source_article
id: article-0063
title: langsmith_sdk_github_overview
title_zh: LangSmith SDK 官方仓库概览
author: LangChain and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/langchain-ai/langsmith-sdk
source_kind: article_summary
topic_tags:
  - llm_observability
  - tracing_sdk
  - evaluation_workflow
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

LangSmith SDK 是 LangSmith 平台的 Python/JS 客户端实现，聚焦 LLM 应用的追踪、评估与监控，是把可观测能力嵌入工程代码的基础接入层。

## 核心观点

- 可观测应尽早通过 SDK 融入开发链路，而非事后补采样。
- Tracing 与评估结合，才能把日志转化为可执行优化。
- Python 与 JS 双栈支持降低团队异构语言接入门槛。
- 与 OpenAI/ LangChain 等生态无缝集成，缩短落地时间。

## 值得保留的方法或框架

- Wrapper-first instrumentation: 用包装器快速采集调用与上下文。
- Unified tracing config: 环境变量统一控制观测行为。
- SDK as platform gateway: 通过客户端抽象稳定接入平台能力。

## 局限与偏见

- SDK 本身不是完整 LLMOps 平台，需配合平台端功能使用。
- 追踪覆盖率不完整时评估结论可能失真。
- 引入观测会增加一定开发与治理开销。

## 可拆出的卡片

- `tool-0063`: LangSmith SDK 工具卡
- `collection-0001`: AI 基础与工具起步包（追踪 SDK 层补充）
