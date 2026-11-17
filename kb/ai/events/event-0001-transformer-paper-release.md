---
doc_type: event_card
id: event-0001
title: transformer_paper_release
title_zh: Transformer 论文发布
status: reviewed
language: zh-CN
event_date: 2017-06-12
event_type: paper_release
topic_clusters:
  - history_and_milestones
  - llm_foundations
  - model_architecture
related_orgs:
  - Google Brain
source_refs:
  - note-0001
  - paper-0001
aliases:
  - Attention Is All You Need 发布
search_terms:
  - Transformer 什么时候出现
  - attention is all you need 为什么重要
  - LLM 历史节点
last_reviewed: 2026-04-02
---

# 事件概览

2017 年《Attention Is All You Need》发布后，序列建模的主流思路开始明显转向以 attention 为核心的架构。它的重要性不只在于“提出了新模型”，而在于它为后来的大规模预训练模型提供了更适合扩展和并行训练的基础结构。

## 关键变化

- 把 attention 从辅助机制推进为核心机制
- 弱化了循环结构在主流序列建模中的中心地位
- 给后续大规模语言模型提供了统一架构基础

## 为什么重要

- 没有这个结构突破，后来的 LLM 扩展路径会很不一样
- 它让“规模化训练 + 通用语言建模”更可行
- 它也改变了很多学习者理解 AI 历史的起点：很多现代热点，本质上都能往回连到这次转折

## 后续影响

- 影响了 GPT、BERT、T5 等大量后续模型路线
- 推动了 prompt、RAG、Agent 等上层应用生态建立在统一模型底座上
- 也让“模型架构”成为理解 AI 事件史时不能跳过的一层

## 来源说明

- 来源笔记 ID: `note-0001`
- 来源论文 ID: `paper-0001`