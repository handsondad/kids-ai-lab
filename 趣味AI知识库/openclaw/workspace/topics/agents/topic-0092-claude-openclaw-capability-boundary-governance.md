---
doc_type: topic_card
id: topic-0092
title: claude_openclaw_capability_boundary_governance
title_zh: Claude 与 OpenClaw 能力边界治理
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - agent
  - governance
  - ai_engineering
capabilities:
  - planning
  - risk_management
prerequisites:
  - topic-0088
  - topic-0091
source_refs:
  - note-0015
  - article-0145
aliases:
  - built-in vs skills vs community
search_terms:
  - claude commands skills plugins boundary
  - official and community capability governance
last_reviewed: 2026-04-10
---

# 一句话定义

这张卡用于区分官方内置能力、官方扩展能力与社区能力，防止错误决策与不稳定接入。

## 三层边界

1. 官方内置能力：优先用于关键路径，稳定性最高。
2. 官方扩展能力：按文档和版本条件启用，需验收。
3. 社区能力：视为可选增强，必须隔离验证后上线。

## 治理规则

- 所有能力在接入前先标注来源层级。
- 关键流程默认禁止依赖单一社区扩展。
- 每次升级都要做命令面与行为面回归测试。

## 检索提示

- 适用于“功能多但风险高”的工具链治理场景。
