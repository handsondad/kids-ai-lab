---
doc_type: topic_card
id: topic-0050
title: llm_generation_control_playbook
title_zh: LLM 生成控制手册（解码策略）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - ai_engineering
  - inference_and_serving
  - evaluation
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0046
source_refs:
  - note-0011
  - article-0136
aliases:
  - 解码策略对照
  - greedy sampling beam 手册
search_terms:
  - greedy sampling beam search
  - 生成策略 温度 top-k
  - llm 输出稳定性
last_reviewed: 2026-04-08
---

# 一句话定义

LLM 生成控制手册用于在质量、稳定性、多样性之间选择合适的解码策略与参数配置。

## 关键对照

1. Greedy：确定性强、速度快，但多样性差。
2. Sampling：多样性高，需通过温度与 top-k 控制噪声。
3. Beam Search：质量更稳，但计算开销更高。

## 实操要点

- 先明确任务目标，再调策略，不同任务优先级不同。
- 服务化场景保留策略配置模板，按任务切换。
- 生成策略要与评测指标联动，不可只看主观体验。

## 检索提示

- 适用于对话、写作、代码生成等场景下的输出稳定性与质量调优。
