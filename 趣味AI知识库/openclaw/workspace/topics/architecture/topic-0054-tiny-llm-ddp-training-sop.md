---
doc_type: topic_card
id: topic-0054
title: tiny_llm_ddp_training_sop
title_zh: Tiny-LLM 分布式训练 SOP
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - training
  - ai_engineering
  - performance_optimization
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0047
source_refs:
  - note-0011
  - article-0137
aliases:
  - ddp 预训练脚本模板
  - tiny-llm 训练循环
search_terms:
  - ddp pretrain sft
  - torch amp gradscaler
  - cosine warmup schedule
last_reviewed: 2026-04-08
---

# 一句话定义

Tiny-LLM 分布式训练 SOP 是基于 chapter5 训练脚本沉淀的可迁移模板，覆盖预训练与 SFT 的统一训练主循环。

## 关键路径

1. 明确模型配置与 tokenizer 对齐关系。
2. 构建 DataLoader，并使用 loss mask 过滤无效 token。
3. 采用 warmup + cosine 学习率和梯度累积策略。
4. 使用 AMP、梯度裁剪、周期性 checkpoint 保障训练稳定性。

## 实操要点

- 先保证单卡可复现，再开启多卡 DataParallel。
- 保存 checkpoint 时兼容单卡和多卡 state_dict 结构。
- 将日志、学习率和 loss 同步记录到实验平台，便于回溯。

## 检索提示

- 适用于从教学代码快速迁移到可持续训练流水线的场景。
