---
doc_type: source_note
id: note-0009
source_ref: article-0010
chapter: architecture_and_defense_in_depth
chapter_zh: 五层架构与纵深防线
source_kind: article_summary
focus_topic_clusters:
  - agents
  - ai_engineering
  - safety_and_governance
derived_cards:
  - topic-0016
  - collection-0003
status: reviewed
last_reviewed: 2026-04-02
---

# 核心观点

- Claude Code 的核心不是单一模型能力，而是“架构分层 + 权限治理 + 运行时编排”的系统能力。
- 五层架构将多端入口、运行状态机、查询引擎、工具能力与基础设施解耦，保证扩展与治理可控。
- 多代理机制明确区分只读规划（Plan Mode）与并行执行协调（Coordinator Mode），避免“分析与执行混写”。
- 工具调用前的多层安全门控体现了纵深防御思想，强调每一层独立拦截而非最终确认兜底。
- 信息控制（身份暴露、反蒸馏、客户端认证）反映 agent 产品在竞争环境中的防护面设计。

## 可拆出的卡片

- 主题卡：agent 五层架构设计方法
- 主题卡：agent 工具权限纵深防线
- 主题卡：多代理编排中的协调者模式与隔离执行

## 学习者会怎么问

- Plan Mode 和 Coordinator Mode 在工程边界上怎么区分
- 工具权限为什么要做多层而不是最后一步确认
- 动态提示词拼装对稳定性和可迁移性的影响是什么
- 信息控制机制和产品透明度之间如何平衡

## 备注

- 该笔记聚焦工程结构与治理机制，不展开文中的资本市场预测内容。
- 适合用于 agent 架构复盘与权限体系设计参考。
