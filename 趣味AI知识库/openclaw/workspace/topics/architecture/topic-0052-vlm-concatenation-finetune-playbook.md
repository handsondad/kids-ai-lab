---
doc_type: topic_card
id: topic-0052
title: vlm_concatenation_finetune_playbook
title_zh: VLM 拼接微调手册（Qwen3 x SmolVLM）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - multimodal
  - finetuning
  - ai_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0047
source_refs:
  - note-0011
  - article-0136
aliases:
  - 模型拼接微调
  - qwen3 smolvlm 对齐
search_terms:
  - vlm concatenation finetune
  - qwen3 smolvlm2
  - chat template 对齐
last_reviewed: 2026-04-08
---

# 一句话定义

VLM 拼接微调手册用于通过替换与对齐模块，把文本模型与视觉模块快速拼接成可用多模态系统。

## 关键路径

1. 对齐 tokenizer 与 chat template。
2. 替换文本 backbone 与 lm head。
3. 重建视觉到文本的特征映射层。
4. 用多模态数据做对齐微调并验证。

## 实操要点

- 先保证上下文模板一致，否则训练容易失真。
- 关键配置要同步替换到嵌套模块，避免隐性 bug。
- 先验证最小可用，再做数据配比与指标优化。

## 检索提示

- 适用于希望低成本构建中文多模态能力的工程实验场景。
