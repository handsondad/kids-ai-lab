---
doc_type: topic_card
id: topic-0074
title: agentic_rl_training_pipeline_template
title_zh: Agentic-RL 训练流水线模板
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - training
  - agent
  - ai_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0071
source_refs:
  - note-0012
  - article-0140
aliases:
  - sft grpo pipeline template
  - rl training orchestration
search_terms:
  - complete pipeline sft grpo
  - rltrainingtool train evaluate
  - training stages orchestration
last_reviewed: 2026-04-08
---

# 一句话定义

Agentic-RL 训练流水线模板用于将数据准备、SFT、GRPO、阶段评估和结果归档串成可自动执行的训练流程。

## 关键路径

1. 加载配置并完成数据集检查。
2. 执行 SFT 训练并记录阶段产物。
3. 执行 GRPO 训练并进行对比评估。
4. 统一导出训练结果与关键指标。

## 实操要点

- 每一阶段都要保留可独立运行入口。
- 配置文件建议集中管理并做版本记录。
- 训练监控建议接入 tensorboard 或 wandb。

## 检索提示

- 适用于需要复现实验并持续优化 Agent 训练策略的团队。
