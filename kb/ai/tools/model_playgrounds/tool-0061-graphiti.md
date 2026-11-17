---
doc_type: tool_card
id: tool-0061
title: graphiti
title_zh: Graphiti
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - agent_memory
  - temporal_graph
  - hybrid_retrieval
capabilities:
  - temporal_fact_tracking
  - provenance_aware_memory
  - graph_based_hybrid_search
use_cases:
  - long_term_agent_memory
  - dynamic_fact_management
  - time_aware_context_retrieval
source_refs:
  - note-0007
  - article-0061
aliases:
  - graphiti
  - zep graphiti
search_terms:
  - graphiti temporal context graph
  - graphiti agent memory
  - graphiti mcp server
  - graphiti hybrid retrieval
last_reviewed: 2026-04-03
---

# 工具定位

Graphiti 是时序上下文图记忆框架，适合需要持续更新事实、跨时间检索关系和保持来源可追溯的 Agent 系统。

## 适用场景

- 你要处理会随时间变化的用户偏好或业务事实
- 你要让 Agent 在检索时区分当前真相与历史真相
- 你要构建可追溯的长期记忆基础设施

## 核心能力

- 时序事实管理: 事实具备生效与失效窗口
- 来源追溯: 每个结论可回链到原始 episode
- 混合检索: 语义、关键词和图遍历联合查询

## 上手路径

1. 先用最小数据集跑通 episode 写入和查询。
2. 再建立实体/关系类型并验证时序更新逻辑。
3. 最后接入 MCP 或 API 层供上层 Agent 复用。

## 选择边界

- 依赖图存储与检索栈，基础设施复杂度较高。
- 数据建模不当会影响检索质量和维护成本。
- 高并发时要针对 LLM 与数据库限流做专门调优。

## 相关主题

- 与 `tool-0060` 同属记忆方向: Mem0 偏记忆层，Graphiti 偏图化时序建模。
- 与 `tool-0056` 可组合: LangGraph 编排流程，Graphiti 提供长期上下文。
- 与 `collection-0001` 强相关，补齐 Agent 记忆进阶能力。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0061`
