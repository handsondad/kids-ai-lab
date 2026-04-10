---
doc_type: topic_card
id: topic-0084
title: llm_engineer_resource_map
title_zh: LLM Engineer 资源地图
status: reviewed
language: zh-CN
learning_level: level_200
topic_clusters:
  - ai_engineering
  - agent
  - application_engineering
  - security
capabilities:
  - workflow_automation
  - deployment
prerequisites:
  - topic-0082
source_refs:
  - note-0013
  - article-0142
aliases:
  - llm engineer roadmap
  - rag agents deployment security
search_terms:
  - llm api rag agent deploy secure
  - mcp a2a langgraph crewai autogen
  - tgi vllm mlc streamlit gradio
last_reviewed: 2026-04-08
---

# 一句话定义

这张卡将 LLM Engineer 的参考链接转成“应用构建与上线”路线，覆盖运行、RAG、Agent、优化、部署与安全。

## 六步路线

1. 运行层：API 与本地模型运行方式选型。
2. 数据层：向量库构建、切块、embedding 与索引。
3. 检索层：RAG 基线、记忆策略、评测指标。
4. 编排层：Advanced RAG、工具调用、Agent 协作协议。
5. 性能层：推理优化、KV cache、speculative decoding。
6. 生产层：部署方式、观测、红队与安全基线。

## 实操准则

- 先做“单链路可运行”再做“多组件最优”。
- 对每次迭代同时记录质量指标和成本指标。
- 把安全测试作为发布前固定步骤。

## 检索提示

- 适用于“把 LLM 做成可持续运行产品”的工程实践阶段。
