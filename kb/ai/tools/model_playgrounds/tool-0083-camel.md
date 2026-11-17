---
doc_type: tool_card
id: tool-0083
title: camel
title_zh: CAMEL
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - multi_agent_research
  - agent_societies
  - data_generation
capabilities:
  - large_scale_agent_simulation
  - stateful_multi_step_interactions
  - synthetic_data_and_benchmark_support
use_cases:
  - scaling_law_research
  - multi_agent_task_automation
  - research_to_product_prototyping
source_refs:
  - note-0007
  - article-0083
aliases:
  - camel-ai
  - camel framework
search_terms:
  - camel ai multi-agent
  - camel scaling laws
  - camel data generation
  - camel chatagent
last_reviewed: 2026-04-03
---

# 工具定位

CAMEL 是多代理研究导向框架，适合探索代理规模化行为、协作模式与数据生成驱动的实验路线。

## 适用场景

- 你要做多代理系统研究与规模实验
- 你要用代理生成结构化数据或训练样本
- 你要验证状态化协作在复杂任务中的效果

## 核心能力

- 大规模协作: 支持高数量级代理实验场景
- 状态化交互: 适合长链多步任务处理
- 数据生成能力: 支持合成数据与评测闭环

## 上手路径

1. 先从 ChatAgent 样例建立基础认知。
2. 再扩展到角色协作与任务自动化。
3. 最后接入数据生成与基准评测链路。

## 选择边界

- 研究优先特性较多，生产需做能力裁剪。
- 代理数量上升会带来成本与治理挑战。
- 需要明确实验指标以避免“规模即效果”误判。

## 相关主题

- 与 `tool-0057` 同属多代理路线: AutoGen 偏应用协作，CAMEL 偏规模研究。
- 与 `tool-0061` 可组合: CAMEL 负责群体协作，Graphiti 强化长期记忆检索。
- 与 `collection-0001` 强相关，补齐多代理研究视角。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0083`
