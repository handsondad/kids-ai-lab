---
doc_type: topic_card
id: topic-0049
title: small_model_finetuning_decision_playbook
title_zh: 小模型微调决策手册（成本/隐私/并发）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - ai_engineering
  - finetuning
  - cost_optimization
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0046
source_refs:
  - note-0011
  - article-0136
aliases:
  - 0.6B 微调决策
  - 小模型替代大模型策略
search_terms:
  - 小模型微调 意义
  - 0.6b 信息抽取 微调
  - 隐私 成本 并发 选型
last_reviewed: 2026-04-08
---

# 一句话定义

小模型微调决策手册用于判断何时应以 0.6B 级任务模型替代大模型 API，以实现更优的成本、隐私和并发表现。

## 决策三问

1. 数据是否敏感，是否必须内网处理。
2. 任务是否刚需复杂推理链。
3. 并发量和日均调用成本是否可持续。

## 实操要点

- 简单且高并发任务优先小模型微调本地部署。
- 复杂推理任务再考虑高性能大模型 API。
- 先做任务基准，再做模型切换，避免拍脑袋决策。

## 检索提示

- 适用于文本抽取、分类、结构化生成等可模板化任务的模型选型。
