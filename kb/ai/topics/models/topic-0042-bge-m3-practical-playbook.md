---
doc_type: topic_card
id: topic-0042
title: bge_m3_practical_playbook
title_zh: BGE-M3 实操手册（检索嵌入与召回）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - ai_engineering
  - retrieval_and_rag
  - finetuning
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0017
source_refs:
  - note-0010
  - article-0134
aliases:
  - BGE-M3 落地路径
  - embedding 微调实操
search_terms:
  - bge-m3 embedding finetune
  - 检索召回优化
  - 代码检索 embedding
last_reviewed: 2026-04-03
---

# 一句话定义

BGE-M3 实操手册聚焦 embedding 模型微调与检索召回优化，是 RAG 体系中的关键底座能力。

## 典型链路

1. 先建立基线 embedding 召回效果。
2. 用任务数据做 BGE-M3 微调。
3. 对比 Recall@K、MRR 等检索指标。
4. 将改进后的 embedding 接入 RAG 主链路。

## 实操要点

- 检索评测集必须覆盖真实业务查询分布。
- embedding 更新需做索引重建与回归验证。
- 建议把重排器和 embedding 分开评估。

## 检索提示

- 适用于代码检索、知识检索与 RAG 召回质量优化场景。
