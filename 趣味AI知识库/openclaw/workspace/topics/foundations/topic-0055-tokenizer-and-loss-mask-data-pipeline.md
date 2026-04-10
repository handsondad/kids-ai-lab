---
doc_type: topic_card
id: topic-0055
title: tokenizer_and_loss_mask_data_pipeline
title_zh: Tokenizer 与 Loss Mask 数据管线手册
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - data_pipeline
  - training
  - llm_foundations
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0054
source_refs:
  - note-0011
  - article-0137
aliases:
  - chat template 数据对齐
  - sft loss mask 设计
search_terms:
  - tokenizer bpe trainer
  - sft loss mask
  - chat template preprocessing
last_reviewed: 2026-04-08
---

# 一句话定义

Tokenizer 与 Loss Mask 数据管线手册用于把原始文本和对话样本稳定转换为可训练样本，并精确控制训练监督区域。

## 关键路径

1. 训练或加载 tokenizer，并固定特殊 token 映射。
2. 统一 chat template，避免角色 token 与边界 token 漂移。
3. 构建 PretrainDataset/SFTDataset，完成序列截断与 padding。
4. 生成 loss mask，仅对 assistant 目标区间计算损失。

## 实操要点

- tokenizer 配置与训练脚本必须使用同一 special token 定义。
- SFT 掩码建议先在小样本上可视化校验，防止误训练 user 段。
- 长数据建议采用字节偏移读取，降低大文件随机访问开销。

## 检索提示

- 适用于需要从零搭建中文训练数据管线的实践场景。
