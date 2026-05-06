---
doc_type: topic_card
id: topic-0035
title: kimi_k2_5_practical_playbook
title_zh: Kimi-K2.5 实操手册（双后端高性能）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - ai_engineering
  - inference_and_serving
  - performance_optimization
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0017
source_refs:
  - note-0010
  - article-0133
aliases:
  - Kimi-K2.5 落地路径
  - Kimi 高并发部署
search_terms:
  - kimi-k2.5 vllm sglang
  - kimi docker 部署
  - kimi 微调
last_reviewed: 2026-04-03
---

# 一句话定义

Kimi-K2.5 实操手册聚焦 vLLM 与 SGLang 双后端部署，适用于构建高吞吐且可迁移的服务化路径。

## 典型链路

1. 先用 vLLM 部署形成标准推理基线。
2. 再用 SGLang 跑同口径压测做后端对照。
3. 用 Docker 固化环境，保证复现。
4. 根据业务指标选定主后端并沉淀 SOP。

## 实操要点

- 统一请求模板与并发参数，避免后端对比失真。
- 指标建议至少覆盖 TTFT、tokens/s、P95 延迟。
- 把部署参数与版本一并纳入变更记录。

## 检索提示

- 适用于希望在新模型上快速建立双后端性能基线的团队。
