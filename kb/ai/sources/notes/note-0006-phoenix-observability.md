---
doc_type: source_note
id: note-0006
source_ref: article-0006
chapter: overview_main
chapter_zh: Phoenix 观测与评测总览
source_kind: article_summary
focus_topic_clusters:
  - agents
  - evaluation
  - ai_engineering
derived_cards:
  - tool-0004
status: reviewed
last_reviewed: 2026-04-02
---

# 核心观点

- Phoenix 的定位不只是 trace 平台，而是 AI observability 与 evaluation workflow 平台。
- 它支持 tracing、evaluation、prompt engineering、datasets 与 experiments，强调从发现问题到验证改动的一体化流程。
- 它基于 OpenTelemetry 和 OpenInference，适合想保持较开放接入方式的团队。
- Phoenix 的思路更强调“从单个 trace 走向跨样本比较与实验”，而不是只看一次 agent 执行过程。

## 可拆出的卡片

- 工具卡：Phoenix
- 工具卡：Agent Observability / Tracing 平台

## 学习者会怎么问

- Phoenix 和 LangSmith 的感觉差别在哪里
- observability 平台为什么还要管 evaluation 和 experiments
- OpenTelemetry / OpenInference 对 agent 团队意味着什么

## 备注

- 当前笔记聚焦产品定位与工作流理解，不展开具体部署细节。