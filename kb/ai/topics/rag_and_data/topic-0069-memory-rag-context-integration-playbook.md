---
doc_type: topic_card
id: topic-0069
title: memory_rag_context_integration_playbook
title_zh: Memory-RAG-Context 融合手册
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - memory
  - retrieval_and_rag
  - ai_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0068
source_refs:
  - note-0012
  - article-0139
aliases:
  - context engineering integration
  - memory rag pipeline
search_terms:
  - working episodic semantic memory
  - gssc context builder
  - note tool terminal tool
last_reviewed: 2026-04-08
---

# 一句话定义

Memory-RAG-Context 融合手册用于把长期记忆、外部知识检索和上下文拼装统一为可治理的智能体信息系统。

## 关键路径

1. 用分层记忆体系管理短期与长期信息。
2. 用 RAG 管线按需检索外部知识并注入上下文。
3. 用 GSSC 流水线控制上下文预算和信息密度。
4. 通过笔记与检索策略形成长任务的稳定执行闭环。

## 实操要点

- Memory 和 RAG 不应重复写入同类信息。
- 上下文预算要预留系统指令与关键状态空间。
- 长任务优先使用结构化笔记和分段压缩策略。

## 检索提示

- 适用于需要长时程、多轮任务稳定性的 Agent 应用场景。
