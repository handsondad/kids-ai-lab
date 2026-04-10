---
doc_type: source_paper
id: paper-0001
title: attention_is_all_you_need
title_zh: Attention Is All You Need
authors:
  - Ashish Vaswani
  - Noam Shazeer
  - Niki Parmar
  - Jakob Uszkoreit
  - Llion Jones
  - Aidan N. Gomez
  - Lukasz Kaiser
  - Illia Polosukhin
venue: NeurIPS 2017
publish_year: 2017
paper_url: https://arxiv.org/abs/1706.03762
source_kind: paper_summary
topic_tags:
  - llm_foundations
  - model_architecture
  - history_and_milestones
status: reviewed
last_reviewed: 2026-04-02
---

# 论文定位

这篇论文是现代 Transformer 架构的起点之一，也是后来大规模语言模型和多模态模型的重要基础来源。对学习者来说，它不只是一个历史节点，更是一张理解“为什么模型能够高效处理长序列与并行训练”的关键地图。

## 研究问题

- 在机器翻译等序列建模任务中，如何减少循环结构带来的训练瓶颈，并更高效地建模长距离依赖

## 方法摘要

- 用 self-attention 作为核心计算结构，让序列中每个 token 都能直接与其他 token 建立关系
- 用 multi-head attention 让模型从不同子空间同时捕捉关系
- 用 positional encoding 补回顺序信息
- 用 encoder-decoder 结构组织输入理解与输出生成

## 核心结论

- 纯 attention 架构可以在翻译任务上达到很强效果
- 并行化更容易，训练效率优于当时主流的循环结构方案
- attention 成为后续大模型时代的通用基础模块

## 局限与边界

- 原论文的任务背景主要是翻译，不等于直接讨论今天的大语言模型全部能力
- 后来的 LLM 工程实践还叠加了更大数据、更大参数规模和更复杂训练策略

## 可拆出的卡片

- `topic-0001`: Transformer 与 LLM 基础
- `event-0001`: Transformer 论文发布事件