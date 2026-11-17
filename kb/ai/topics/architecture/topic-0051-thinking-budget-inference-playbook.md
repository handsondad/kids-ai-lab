---
doc_type: topic_card
id: topic-0051
title: thinking_budget_inference_playbook
title_zh: Thinking Budget 推理手册（vLLM）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - inference_and_serving
  - reasoning
  - performance_optimization
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0050
source_refs:
  - note-0011
  - article-0136
aliases:
  - test-time scaling 实操
  - 思考预算控制
search_terms:
  - thinking budget vllm
  - wait token 推理控制
  - test time scaling llm
last_reviewed: 2026-04-08
---

# 一句话定义

Thinking Budget 推理手册是通过控制思考 token 预算来平衡推理质量与成本的测试时优化方法。

## 关键路径

1. 设定预算上限与停止条件。
2. 在思考阶段注入控制词并迭代生成。
3. 达预算后进入总结输出阶段。
4. 记录 token 成本与效果变化。

## 实操要点

- 预算不是越大越好，需任务化调参。
- 关注重复思考和无效 token 膨胀问题。
- 把预算策略纳入在线推理治理规则。

## 检索提示

- 适用于复杂推理任务中需要精细控制推理开销与准确性的场景。
