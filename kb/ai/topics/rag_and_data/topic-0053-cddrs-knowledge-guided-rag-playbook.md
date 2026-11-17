---
doc_type: topic_card
id: topic-0053
title: cddrs_knowledge_guided_rag_playbook
title_zh: CDDRS 知识引导检索手册（专业 RAG）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - retrieval_and_rag
  - evaluation
  - application_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0048
source_refs:
  - note-0011
  - article-0136
aliases:
  - 动态语义分块 RAG
  - 细粒度语义检索
search_terms:
  - cddrs rag
  - 动态语义分块
  - 建筑文档 智能审查
last_reviewed: 2026-04-08
---

# 一句话定义

CDDRS 知识引导检索手册是面向专业文档场景的 RAG 增强方法，核心在于动态语义分块与细粒度检索增强。

## 关键路径

1. 构建语义连贯的动态分块。
2. 增强查询语义表示，提升细粒度匹配。
3. 检索后结合生成模型进行审查或问答。
4. 用领域指标验证可靠性与可追溯性。

## 实操要点

- 专业文档 RAG 先优化分块，再优化召回。
- 检索指标与生成指标必须拆分评估。
- 对领域高风险场景保留证据链与审查日志。

## 检索提示

- 适用于法规、工程、医疗等高专业门槛文档检索增强应用。
