---
doc_type: source_note
id: note-0005
source_ref: article-0005
chapter: quickstart_main
chapter_zh: LangSmith 观测与 tracing 入门
source_kind: article_summary
focus_topic_clusters:
  - agents
  - evaluation
  - ai_engineering
derived_cards:
  - tool-0003
status: reviewed
last_reviewed: 2026-04-02
---

# 核心观点

- LangSmith 的核心对象是 trace 与 run：一次请求是一条 trace，trace 里面包含模型调用、检索步骤或其他应用操作等 runs。
- 它特别适合 LLM / agent 系统，因为这类系统天然非确定，开发者需要的不只是最终输出，而是中间过程可见。
- 接入成本相对低，可以先包裹模型 client 记录 LLM calls，再逐步升级到整条应用流程的追踪。
- 一旦 traces 形成体系，后续就可以做过滤、复盘、评测联动和更系统的 failure analysis。

## 可拆出的卡片

- 工具卡：LangSmith
- 工具卡：Agent Observability / Tracing 平台

## 学习者会怎么问

- LangSmith 到底解决什么问题
- trace 和 run 有什么区别
- 我应该先 trace 单个模型调用还是整个 agent 应用
- tracing 平台为什么会变成 agent 团队的基础设施

## 备注

- 这张笔记聚焦产品功能理解与最小接入路径，不覆盖更深入的评测、数据集或自动分析特性。