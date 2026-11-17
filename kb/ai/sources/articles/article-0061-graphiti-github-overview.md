---
doc_type: source_article
id: article-0061
title: graphiti_github_overview
title_zh: Graphiti 官方仓库概览
author: Zep and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/getzep/graphiti
source_kind: article_summary
topic_tags:
  - agent_memory
  - temporal_graph
  - hybrid_retrieval
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

Graphiti 是面向 Agent 记忆场景的时序上下文图框架，强调事实随时间演化、来源可追溯和混合检索，适合处理动态知识与长期记忆。

## 核心观点

- Agent 记忆应从静态文档检索转向可演化的上下文图。
- 事实需要有效期与失效机制，才能正确表达时间变化。
- 通过语义、关键词和图遍历混合检索提升准确率与时效性。
- 记忆层可通过 MCP 暴露给不同客户端复用。

## 值得保留的方法或框架

- Temporal context graph: 在图结构中显式管理事实时序。
- Episode provenance: 每个结论回溯到原始事件来源。
- Incremental ingestion: 增量更新替代整图重算。

## 局限与偏见

- 对图数据库与检索基础设施依赖较强，上手成本较高。
- 高并发与大规模场景需仔细调参和容量规划。
- 记忆图建模不当会引入复杂度与维护负担。

## 可拆出的卡片

- `tool-0061`: Graphiti 工具卡
- `collection-0001`: AI 基础与工具起步包（时序记忆图补充）
