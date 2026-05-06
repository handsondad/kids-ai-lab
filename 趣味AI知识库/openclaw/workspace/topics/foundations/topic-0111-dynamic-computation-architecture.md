---
doc_type: topic_card
id: topic-0111
title: dynamic-computation-architecture
title_zh: 动态计算架构 (Dynamic-Computation)
status: published
language: zh-CN
learning_level: level_400
topic_clusters:
  - llm_foundations
capabilities:
  - reasoning
prerequisites:
  - topic-0001
source_refs:
  - note-0023
aliases:
  - Dynamic-Computation
  - 动态参数分配
search_terms:
  - 什么是动态计算架构
  - DeepSeek V4 架构原理
  - 动态计算 vs MoE
last_reviewed: 2026-05-06
---

# 一句话定义

动态计算架构是一种在推理过程中，根据输入任务的复杂程度动态调整参与计算的参数规模和计算路径的模型架构。

## 为什么重要

- **打破“算力死结”**：传统模型无论问题简单还是复杂，都会消耗相同的计算资源。动态计算让“1 + 1”消耗极低算力，而“广义相对论推导”调用万亿参数。
- **支持超大规模模型**：让 1T (万亿) 参数模型的推理成本降至可商用水平。
- **提升长文本效率**：配合 mHC Attention，只对关键上下文片段进行重度计算，极大提升了 1M token 窗口的处理速度。

## 关键机制

- **mHC (Multi-head Conditional) Attention**：条件式多头注意力，根据上下文语义动态决定激活哪些注意力头。
- **Adaptive Depth (自适应深度)**：根据任务难度决定经过多少层 Transformer 块。
- **Engram Conditional Memory**：将知识存储在“印迹”中，只在相关语义出现时才加载到计算缓存。

## 与相邻主题的关系

- **与 MoE (Mixture of Experts) 的关系**：动态计算是 MoE 的高级进化形式，不仅是“专家”的切换，更是计算深度和宽度的全方位动态化。
- **与推理时计算 (topic-0109) 的关系**：动态计算侧重于架构层面的算力分配，而推理时计算侧重于通过思维链延长思考时间。

## 常见误区

- **误区：动态计算就是省钱**。它的核心目标是“智力上限”的最大化，即在有限资源下让模型更聪明。

## 下一步学习建议

- **关注**：DeepSeek-V4 的技术白皮书，了解其具体的门控机制（Gating Mechanism）实现。

## 检索提示

- 动态计算是 2026 年大模型架构的核心关键词，旨在实现参数规模与推理效率的完美平衡。

## 来源说明

- 来源笔记 ID: `note-0023`
