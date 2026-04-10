---
doc_type: topic_card
id: topic-0060
title: chapter6_notebook_repro_checklist
title_zh: Chapter6 Notebook 复现实验单
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - training
  - evaluation
  - ai_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0056
source_refs:
  - note-0011
  - article-0137
aliases:
  - pretrain sft notebook checklist
  - 训练实验复现清单
search_terms:
  - pretrain ipynb
  - process dataset ipynb
  - sft preprocess checklist
last_reviewed: 2026-04-08
---

# 一句话定义

Chapter6 Notebook 复现实验单是将 `pretrain.ipynb`、`process_dataset.ipynb`、`whole.ipynb` 串成可执行步骤的训练实验清单。

## 关键路径

1. 先在 `process_dataset.ipynb` 做预训练语料小样本切片，验证 I/O 和数据格式。
2. 在 `pretrain.ipynb` 完成模型配置加载、tokenize、group_texts 分块与 Trainer 预训练。
3. 在同一 notebook 的 SFT 区段验证对话模板、mask 逻辑和 `SupervisedDataset` 构建。
4. 用 `whole.ipynb` 做 tokenizer 基础验证与最小端到端连通性检查。

## 实操要点

- 先跑小样本和短 epoch，确认链路正确后再放大训练规模。
- 对 `block_size`、`max_len` 和 `gradient_accumulation_steps` 建立统一实验记录。
- Notebook 验证通过后再迁移到脚本化训练，避免参数漂移。

## 检索提示

- 适用于课程复现、训练新人 onboarding、以及实验到工程迁移前的检查阶段。
