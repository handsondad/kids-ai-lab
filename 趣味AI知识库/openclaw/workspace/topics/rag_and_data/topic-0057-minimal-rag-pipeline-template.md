---
doc_type: topic_card
id: topic-0057
title: minimal_rag_pipeline_template
title_zh: 最小 RAG 管线模板
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - retrieval_and_rag
  - application_engineering
  - ai_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0048
source_refs:
  - note-0011
  - article-0137
aliases:
  - tiny rag demo
  - 向量检索最小闭环
search_terms:
  - vector store query
  - rag prompt template
  - chunk overlap token
last_reviewed: 2026-04-08
---

# 一句话定义

最小 RAG 管线模板是基于 chapter7/RAG 代码的轻量实现路径，覆盖文档切分、向量化、检索与生成四个核心环节。

## 关键路径

1. 读取 md/txt/pdf 文档并按 token 长度切分。
2. 调用 embedding 模型写入向量与文档存储。
3. 查询时按相似度召回 top-k 片段。
4. 将上下文注入 RAG prompt 生成中文回答。

## 实操要点

- 文档切分的 max_token_len 与 overlap 直接影响召回质量。
- 向量持久化结构要预留版本字段，便于后续重建索引。
- 先保证检索可解释，再逐步加 rerank 与多路召回。

## 检索提示

- 适用于企业知识问答和课程文档问答的快速原型搭建。
