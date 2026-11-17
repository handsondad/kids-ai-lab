---
doc_type: tool_card
id: tool-0019
title: vanna
title_zh: Vanna
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - ai_engineering
  - ai_product
  - rag
capabilities:
  - search_and_retrieval
  - reasoning
  - workflow_automation
use_cases:
  - text_to_sql_qa
  - user_aware_data_agent
  - streaming_data_insights
source_refs:
  - note-0007
  - article-0019
aliases:
  - vanna 2.0
  - natural language to sql agent
search_terms:
  - vanna 是什么
  - text to sql agent
  - vanna 用户权限
  - vanna chat 组件
last_reviewed: 2026-04-03
---

# 工具定位

Vanna 是面向数据问答场景的 Text-to-SQL 代理框架，强调用户感知权限、流式结果和可嵌入 web 组件，适合构建面向业务用户的数据交互入口。

## 适用场景

- 你要为业务用户提供自然语言问数与可视化结果
- 你需要将用户身份和权限贯穿到 SQL 执行与结果返回
- 你希望快速集成后端路由和前端聊天组件

## 核心能力

- Text-to-SQL 代理: 自然语言到 SQL 到结果解释
- 用户感知权限: 身份信息可进入工具和查询过滤链路
- 流式交互输出: 支持表格、图表、摘要等实时返回

## 上手路径

1. 先在样例数据库验证问答、SQL 和结果一致性。
2. 再接入真实身份系统，落实权限与审计策略。
3. 最后把流式接口接入前端组件，形成业务闭环。

## 选择边界

- 该官方仓库已归档只读，长期维护与生态演进需谨慎评估。
- Text-to-SQL 输出必须加入权限校验与结果复核机制。
- 在高合规场景，应优先验证审计、限流和数据脱敏策略。

## 相关主题

- 与 `topic-0010` 强相关，适合纳入发布门禁与权限治理。
- 与 `topic-0013` 强相关，可联合做成本与质量优化。
- 与 `tool-0018` 互补，一个偏产品化代理，一个偏 Python 分析工作流。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0019`
