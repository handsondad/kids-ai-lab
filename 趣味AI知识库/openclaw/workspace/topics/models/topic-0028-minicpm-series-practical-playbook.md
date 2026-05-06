---
doc_type: topic_card
id: topic-0028
title: minicpm_series_practical_playbook
title_zh: MiniCPM 系实操手册（轻量与多模态）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - ai_engineering
  - multimodal
  - local_deployment
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0017
source_refs:
  - note-0010
  - article-0130
aliases:
  - MiniCPM 落地路径
  - MiniCPM-o 多模态实操
search_terms:
  - minicpm fastapi webdemo
  - minicpm-o 语音 多模态
  - minicpm lora
last_reviewed: 2026-04-03
---

# 一句话定义

MiniCPM 系实操手册强调轻量模型与多模态能力并重，适合资源受限场景下的快速迭代。

## 典型链路

1. 先完成 MiniCPM 基础推理链路。
2. 再切到 MiniCPM-o 做语音与多模态任务。
3. 根据任务选择 LoRA 或全量微调。
4. 结合 WebDemo 验证端到端体验。

## 实操要点

- 轻量模型优先做延迟与稳定性优化。
- 多模态输入需定义标准化数据清洗流程。
- 评测应覆盖文本、视觉、语音子任务。

## 检索提示

- 适用于边缘设备、教学演示和低成本多模态应用开发。
