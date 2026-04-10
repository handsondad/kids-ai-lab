---
doc_type: topic_card
id: topic-0001
title: transformer_and_llm_basics
title_zh: Transformer 与大语言模型基础
status: reviewed
language: zh-CN
learning_level: level_100
topic_clusters:
  - llm_foundations
  - model_architecture
  - history_and_milestones
capabilities:
  - text_generation
  - reasoning
  - summarization
prerequisites:
  - 无
source_refs:
  - note-0001
  - paper-0001
aliases:
  - LLM 基础
  - Transformer 基础
search_terms:
  - Transformer 是什么
  - 大语言模型原理入门
  - attention 为什么重要
last_reviewed: 2026-04-02
---

# 一句话定义

Transformer 是一种以 attention 为核心的神经网络架构，大语言模型则是在这类架构基础上，通过大规模文本训练得到的通用语言处理模型。

## 为什么重要

- 它是今天大多数主流 LLM、代码模型和多模态模型的重要结构基础
- 它让“统一的通用模型 + 多种任务适配”成为现实
- 学懂它之后，再看提示工程、RAG、Agent、评测等主题会更有抓手

## 关键机制

- Self-attention：让 token 之间能直接建立关系，而不是只按固定顺序逐步传递
- Multi-head attention：让模型同时从不同角度观察同一段输入
- Positional encoding：让模型知道顺序，否则 attention 本身不带先后概念
- Pretraining：先在大规模文本上学语言统计规律和知识模式
- Next-token prediction：很多 LLM 的基础训练目标是根据上下文预测下一个 token

## 与相邻主题的关系

- 它不是提示工程，但提示工程建立在模型已经学会一定模式抽取能力之上
- 它不是 RAG，但 RAG 往往是为了解决参数记忆和上下文限制
- 它不是 Agent，但 Agent 通常把 LLM 当作规划、调用工具和生成文本的核心引擎

## 常见误区

- “学会 Transformer 就等于学会了所有 LLM 实战”并不成立，工程层还包括数据、评测、上下文管理和产品工作流
- “LLM 只是把句子接下去”过于简化，虽然训练目标常是 next-token prediction，但规模、数据和对齐策略会带来更复杂能力
- “Attention 就等于理解”也不准确，它是一种信息聚合机制，不等于人类意义上的理解

## 下一步学习建议

- 先把 attention、上下文窗口、token、预训练、对齐这些词串成一张图
- 再学提示工程、RAG 和 Agent，理解它们分别在补什么短板
- 如果想更落地，下一步可以看工具卡，理解 playground、API 和 coding agent 的不同位置

## 检索提示

- LLM 入门主干主题，理解 Transformer、attention、预训练和后续应用框架的关系。

## 来源说明

- 来源笔记 ID: `note-0001`
- 来源论文 ID: `paper-0001`