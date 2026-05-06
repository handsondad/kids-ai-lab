---
doc_type: topic_card
id: topic-0110
title: hybrid-reasoning-architecture
title_zh: 混合推理架构 (Hybrid Reasoning)
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
  - topic-0109
source_refs:
  - note-0022
aliases:
  - Integrated Reasoning
  - 统一推理模型
search_terms:
  - 什么是混合推理模型
  - Claude 3.7 混合推理原理
  - 为什么需要统一推理和标准模型
last_reviewed: 2026-05-06
---

# 一句话定义

混合推理架构是指将传统的快速直觉响应（System 1）与深度的逻辑思考过程（System 2）集成在同一个单一模型中的人工智能架构。

## 为什么重要

- **无缝体验**：用户无需在不同模型间切换，同一个模型可以根据指令或任务复杂度决定是否启动“扩展思考”。
- **智力统一**：避免了推理模型在常识或 EQ 上的缺失，同时也让标准模型具备了解决逻辑难题的潜力。
- **可控的思考预算**：开发者可以通过 API 精细控制模型思考的 Token 数量，从而在性能、延迟和成本之间取得平衡。

## 关键机制

- **Thinking tokens (思考 Token)**：模型在输出最终答案前生成的内部推理过程，通常对用户可见（如 Claude 3.7）。
- **Thinking Budget Control**：允许设置 `max_thinking_tokens` 参数。
- **Unified Training (统一训练)**：模型在训练阶段就学会了何时以及如何进行自我反思。

## 与相邻主题的关系

- **与 Test-Time Compute (topic-0109) 的关系**：混合推理是推理时计算在工程实现上的高级进化形式。
- **与 Agentic AI 的关系**：为智能体提供了更加灵活、可控的“大脑”，使其能根据任务难度自动分配算力。

## 常见误区

- **误区：混合推理就是把两个模型拼在一起**。它是在一个模型参数空间内实现的两种能力的融合。
- **误区：所有混合推理模型都一样**。不同厂商的对齐策略（如侧重数学还是侧重现实世界任务）会有显著差异。

## 下一步学习建议

- **实践**：在 API 中尝试调整 Claude 3.7 的 thinking budget，观察不同任务下的表现差异。

## 检索提示

- 混合推理是 2025 年由 Anthropic 首创的架构范式，旨在实现智力的全方位集成。

## 来源说明

- 来源笔记 ID: `note-0022`
