---
doc_type: topic_card
id: topic-0098
title: claude_code_version_drift_control_checklist
title_zh: Claude Code 版本漂移控制清单
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - governance
  - ai_engineering
  - tooling
capabilities:
  - risk_management
  - planning
prerequisites:
  - topic-0092
source_refs:
  - note-0016
  - article-0146
aliases:
  - claude code release alignment
search_terms:
  - commands plugins hooks release notes drift
last_reviewed: 2026-04-10
---

# 一句话定义

这张卡用于控制 Claude Code 文档与实践中的版本漂移风险，保证命令和能力认知持续对齐。

## 每周检查项

1. 对照 release notes 更新命令状态。
2. 校验 built-in、bundled skills、plugin 三层边界。
3. 抽测关键自动化链路是否行为变化。
4. 更新风险清单与回滚策略。
