---
doc_type: topic_card
id: topic-0112
title: grpo-reinforcement-learning
title_zh: GRPO (组相对策略优化) 强化学习
status: published
language: zh-CN
learning_level: level_400
topic_clusters:
  - llm_foundations
  - reasoning
capabilities:
  - reasoning
prerequisites:
  - topic-0001
source_refs:
  - note-0023
aliases:
  - Group Relative Policy Optimization
  - GRPO 算法
search_terms:
  - 什么是 GRPO 强化学习
  - DeepSeek R1 R2 训练算法
  - GRPO vs PPO
last_reviewed: 2026-05-06
---

# 一句话定义

GRPO (Group Relative Policy Optimization) 是由 DeepSeek 提出的一种新型强化学习算法，它通过在同一组输出之间进行相对评估来优化模型，省去了昂贵的奖励模型（Reward Model）。

## 为什么重要

- **极低训练成本**：不再需要训练一个庞大的评价模型（Critic Model），直接利用组内样本的平均奖励作为基准。
- **推动推理模型爆发**：DeepSeek-R1 和 R2 的成功完全建立在 GRPO 之上，它让模型能以极低资源学会“思考”和“反思”。
- **支持自我演进**：模型通过大规模的组内博弈，自主发现解决数学和编程难题的更优路径。

## 关键机制

- **Group Relative Reward**：针对同一个 Prompt 生成一组 N 个回答，计算这组回答的平均奖励值。高于平均值的回答被奖励，低于平均值的被惩罚。
- **无需评价模型**：打破了传统 PPO 算法中必须有 Critic 模型的限制，大幅减少了训练显存占用。
- **Rule-based Verification**：在数学和代码等领域，通过确定性的规则（如编译器通过、数学公式对齐）来提供客观奖励。

## 与相邻主题的关系

- **与 PPO 的关系**：GRPO 是对 PPO 的极致精简和优化。
- **与知识蒸馏的关系**：R2 就是利用 GRPO 训练出的 R1 作为“思维导师”，通过蒸馏思考路径快速习得能力。

## 常见误区

- **误区：GRPO 只能用于数学**。虽然它在有客观规则的领域最强，但在创意写作和安全对齐方面也展现了潜力。

## 检索提示

- GRPO 是 DeepSeek 开源贡献中最具影响力的算法之一，是实现高效推理模型的基石。

## 来源说明

- 来源笔记 ID: `note-0023`
