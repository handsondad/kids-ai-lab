---
doc_type: topic_card
id: topic-0109
title: test-time-compute-reasoning-scaling
title_zh: 推理时计算与推理规模化 (Test-Time Compute)
status: published
language: zh-CN
learning_level: level_400
topic_clusters:
  - llm_foundations
  - agents
capabilities:
  - reasoning
  - planning
prerequisites:
  - topic-0001
source_refs:
  - note-0021
aliases:
  - Reasoning Scaling Laws
  - 思维链规模化
search_terms:
  - 什么是推理时计算
  - o1 和 R1 的原理
  - 为什么 Agent 需要更多思考时间
last_reviewed: 2026-05-06
---

# 一句话定义

推理时计算是指通过让模型在输出最终答案前进行多轮内部思考（思维链），从而用更多的计算时间换取更高的逻辑成功率。

## 为什么重要

- **打破训练瓶颈**：当通过增加训练数据和模型参数带来的收益边际递减时，推理时计算提供了第三条提升智力的路径（推理规模化定律）。
- **解决 Agent 规划难题**：让 Agent 能够“三思而后行”，显著降低了在复杂任务初期的规划错误。

## 关键机制

- **内部思维链 (System 2 Thinking)**：模型在隐藏空间内生成长篇思考过程。
- **搜索与评估 (Search & Evaluation)**：利用蒙特卡洛树搜索（MCTS）等算法探索不同的解题路径。
- **强化学习对齐**：通过 RL 训练模型如何更好地进行自我纠错和路径优化。

## 与相邻主题的关系

- **与 Agentic AI 的关系**：这是 Agent 具备“深度思考”能力的技术基础。
- **与推理延迟的关系**：它是用延迟（Latency）换取质量（Quality）的权衡。

## 常见误区

- **误区：所有任务都适合推理时计算**。简单的问答使用推理模型只会浪费成本和时间。
- **误区：推理过程只是 Prompt 出来的**。真正的推理模型（如 o1）是经过大规模强化学习训练出的原生能力。

## 下一步学习建议

- **对比**：在 [tool-0129](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/tools/model_playgrounds/tool-0129-gpt-5-o3-reasoning.md) 中测试不同推理模式的效果差异。

## 检索提示

- 推理时计算是 2025-2026 年大模型最重要的范式转移，标志着 AI 具备了深思熟虑的能力。

## 来源说明

- 来源笔记 ID: `note-0021`
