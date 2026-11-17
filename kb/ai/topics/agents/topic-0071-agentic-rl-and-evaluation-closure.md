---
doc_type: topic_card
id: topic-0071
title: agentic_rl_and_evaluation_closure
title_zh: Agentic-RL 与评测闭环手册
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - training
  - evaluation
  - agent
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0070
source_refs:
  - note-0012
  - article-0139
aliases:
  - sft grpo evaluation loop
  - bfcl gaia benchmark
search_terms:
  - agentic rl grpo
  - bfcl gaia evaluation
  - llm judge win rate
last_reviewed: 2026-04-08
---

# 一句话定义

Agentic-RL 与评测闭环手册用于把 SFT/GRPO 训练与 BFCL/GAIA 等评测基准打通为可迭代优化流程。

## 关键路径

1. 用 SFT 建立任务格式与初始行为基线。
2. 用 GRPO 等方法优化多步决策和工具调用策略。
3. 用 BFCL 评估函数调用能力，用 GAIA 评估综合任务能力。
4. 用评测结果反向修正训练数据、奖励函数和策略参数。

## 实操要点

- 训练目标必须和评测目标显式对齐。
- 先做小样本快速验证，再进行大规模训练。
- 评估报告需要保留失败样例供下一轮优化。

## 检索提示

- 适用于需要持续提升 Agent 实战性能的训练团队。
