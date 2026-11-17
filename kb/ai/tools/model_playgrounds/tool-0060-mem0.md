---
doc_type: tool_card
id: tool-0060
title: mem0
title_zh: Mem0
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - memory_layer
  - personalization
  - long_term_context
capabilities:
  - memory_retrieval_layer
  - multi_level_memory
  - continuous_preference_learning
use_cases:
  - personalized_assistants
  - long_term_agent_memory
  - context_persistence_across_sessions
source_refs:
  - note-0007
  - article-0060
aliases:
  - mem0
  - mem0ai
search_terms:
  - mem0 memory layer
  - mem0 long term memory
  - mem0 personalized ai
  - mem0 agent memory
last_reviewed: 2026-04-03
---

# 工具定位

Mem0 是 AI 应用的长期记忆层组件，帮助助手和 Agent 在多轮、多会话交互中持续保留偏好与上下文，实现个性化响应。

## 适用场景

- 你要让助手在跨会话场景下保持用户偏好记忆
- 你要降低全量上下文拼接带来的 token 成本
- 你要把记忆能力独立成可复用基础设施

## 核心能力

- 记忆检索层: 在生成前注入相关记忆，提高响应一致性
- 多层记忆机制: 覆盖用户、会话和 Agent 维度
- 持续学习更新: 对话后自动提炼并沉淀长期信息

## 上手路径

1. 先接入基础 add/search 流程验证记忆闭环。
2. 再定义记忆提取与冲突处理策略。
3. 最后把记忆层接入主要 Agent 或客服业务链路。

## 选择边界

- 记忆过度或错误会放大个性化偏差。
- 需要明确隐私策略、删除机制和数据保留期限。
- 记忆质量评估需要长期指标，不宜只看短期命中率。

## 相关主题

- 与 `tool-0043` 可组合: RAG 负责知识，Mem0 负责个体记忆。
- 与 `tool-0056` 可组合: LangGraph 管流程，Mem0 管长期上下文。
- 与 `collection-0001` 强相关，补齐 Agent 记忆层能力。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0060`
