---
doc_type: topic_card
id: topic-0087
title: llm_course_30_day_execution_plan
title_zh: LLM Course 30 天执行计划
status: reviewed
language: zh-CN
learning_level: level_100
topic_clusters:
  - learning_strategy
  - hands_on_learning
  - ai_engineering
capabilities:
  - planning
  - execution
prerequisites:
  - topic-0082
  - topic-0085
  - topic-0086
source_refs:
  - note-0013
  - article-0143
aliases:
  - llm course monthly plan
  - 4 weeks llm roadmap
search_terms:
  - 30 day llm study plan
  - weekly llm practice roadmap
last_reviewed: 2026-04-08
---

# 一句话定义

这张卡把 README 链接内容转成 30 天可执行任务，按每周目标、产出、验收标准推进。

## 第 1 周：基础与最小实践

- 目标：补齐数学/Python/NN/NLP 基础，并跑通 1 个 Notebook。
- 任务：学习 topic-0082，执行 topic-0085 中任意 1 个工具型 Colab。
- 产出：1 份学习笔记，1 份可复现运行记录。
- 验收：可以独立解释 tokenizer、attention、embedding、RAG 基本链路。

## 第 2 周：训练与评测入门

- 目标：理解 SFT 与偏好对齐差异，跑通 1 条微调或评测链路。
- 任务：学习 topic-0083，复现 1 个 fine-tuning Notebook。
- 产出：1 份实验对比表（参数、耗时、效果）。
- 验收：可说明何时用 SFT、DPO、GRPO，并定义 2 个评测指标。

## 第 3 周：工程化构建

- 目标：完成一个最小 RAG/Agent 应用雏形。
- 任务：学习 topic-0084，完成向量库+检索+回答闭环。
- 产出：1 个可运行 Demo（本地或云端）。
- 验收：具备基础可观测日志，能定位至少 2 个失败样例。

## 第 4 周：优化、部署与安全

- 目标：把 Demo 升级到可演示、可评估、可防护。
- 任务：使用 topic-0086 索引补齐性能优化与安全参考。
- 产出：1 份发布检查清单（性能、成本、安全、回滚）。
- 验收：完成一次红队测试与一次评测回归。

## 执行节奏建议

- 每天 60-90 分钟：40% 学习，60% 实操。
- 每周固定一次复盘：记录阻塞点、替代路径、下周计划。
- 任何资源都要落到产出物，不做纯收藏。
