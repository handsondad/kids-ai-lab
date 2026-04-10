---
doc_type: collection
id: collection-0002
title: harness_and_in_model_compute
title_zh: Harness 与模型内部计算能力
status: reviewed
language: zh-CN
audience_tags:
  - builder
  - research_reader
theme_tags:
  - agent_building
  - llm_foundations
  - hands_on_learning
included_cards:
  - topic-0002
  - topic-0003
last_reviewed: 2026-04-02
---

# 专题说明

这个合集适合已经开始接触 Agent、工具调用或系统设计的人。它把两个很容易混在一起的方向拆开来看：一个是 Harness Engineering，关注如何在模型外部搭好约束、验证和执行环境；另一个是 In-Model Execution，关注模型内部是否能真正执行长程精确计算。

## 推荐顺序

1. 先看 `topic-0002`，理解为什么 Agent 时代的主战场常常在模型外部系统设计，而不是只在 prompt 或模型本体。
2. 再看 `topic-0003`，理解“调用工具”和“模型自己执行”到底差在哪。
3. 最后把两者放回一张图里想：哪些问题该由 harness 解决，哪些问题可能需要更强的模型内部执行能力。

## 包含卡片

- `topic-0002`: 帮你建立 Agent 外壳工程的主干理解，看到系统级约束、验证与 trace 的价值。
- `topic-0003`: 帮你区分“模型会调工具”和“模型自己会算”不是同一件事。

## 使用建议

- 如果你偏工程实现，先把 Harness Engineering 吃透，再去看内部执行研究。
- 如果你偏模型研究，先看 In-Model Execution，再反过来理解为什么现实系统仍然离不开 Harness。
- 不要把这两条线理解成替代关系；更合理的看法是，它们分别对应外部系统能力与内部计算能力两个层面。

## 检索提示

- 适合理解 Agent 外壳和模型内部计算能力的分工：前者解决可控执行，后者解决内生计算。