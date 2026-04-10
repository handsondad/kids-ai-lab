---
doc_type: topic_card
id: topic-0083
title: llm_scientist_resource_map
title_zh: LLM Scientist 资源地图
status: reviewed
language: zh-CN
learning_level: level_200
topic_clusters:
  - training
  - evaluation
  - llm_foundations
capabilities:
  - experiment_design
  - model_improvement
prerequisites:
  - topic-0082
source_refs:
  - note-0013
  - article-0142
aliases:
  - llm scientist roadmap
  - pretraining sft dpo grpo evaluation quantization
search_terms:
  - transformer training alignment evaluation quantization
  - trl unsloth axolotl
  - rlhf dpo grpo ppo
last_reviewed: 2026-04-08
---

# 一句话定义

这张卡把 LLM Scientist 部分的核心参考链接组织为“训练-对齐-评测-效率”四段式提升路径。

## 四段式路径

1. 架构与预训练：Transformer 结构、数据构建、分布式训练。
2. 后训练与 SFT：数据模板、合成数据、LoRA/QLoRA 与训练框架。
3. 偏好对齐与评测：DPO/GRPO/PPO、自动评测与人类评测结合。
4. 量化与新趋势：GGUF/GPTQ/AWQ、模型合并、多模态、可解释与 test-time compute。

## 实操准则

- 每个阶段至少保留 1 个“方法综述链接”+ 1 个“可运行实现链接”。
- 评测必须和训练同时推进，避免只看 loss 不看行为质量。
- 优先记录可复现脚本和指标口径，方便横向比较。

## 检索提示

- 适用于“我想把模型能力做上去”的学习或项目阶段。
