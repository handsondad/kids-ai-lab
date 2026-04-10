---
doc_type: source_note
id: note-0008
source_ref: article-0009
chapter: seven_layer_memory_architecture
chapter_zh: Claude Code 七层记忆架构
source_kind: article_summary
focus_topic_clusters:
  - agents
  - ai_engineering
  - evaluation
derived_cards:
  - topic-0015
  - collection-0003
status: reviewed
last_reviewed: 2026-04-02
---

# 核心观点

- 该架构的主线是“纵深防御 + 成本分层”：优先用便宜机制处理上下文压力，把昂贵压缩留作后手。
- 第 1-2 层处理高频工具结果膨胀，第 3-4 层处理会话级压缩，第 5-6 层处理长期记忆巩固，第 7 层处理多 agent 协作与通信。
- 提示词缓存是核心经济性杠杆，系统通过稳定前缀、冻结替换决策、缓存编辑等方式尽量避免缓存失效。
- 自动化治理机制（熔断、互斥、节流、锁）是确保长会话稳定运行的关键，不是附属功能。
- 会话记忆与自动记忆提取形成“短期工作记忆 + 长期项目记忆”的双层结构，减少重复探索。

## 可拆出的卡片

- 主题卡：coding agent 的分层记忆架构设计
- 主题卡：提示词缓存命中驱动的 agent 成本优化
- 主题卡：后台记忆巩固（dreaming）与长期学习机制

## 学习者会怎么问

- 为什么要分 7 层，而不是一层大压缩
- 如何在不破坏缓存命中的情况下清理旧上下文
- 什么时候应触发全量压缩，什么时候应静默降级
- 后台 dream 机制与普通记忆提取有什么本质区别

## 备注

- 该笔记基于外部技术解读整理，不等同于官方逐行实现说明。
- 适合作为 agent 记忆系统设计参考，落地时需结合团队模型、流量与成本约束复验。
