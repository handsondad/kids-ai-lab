---
doc_type: topic_card
id: topic-0104
title: llm_framework_and_platform_selection_matrix
title_zh: LLM 框架与平台选型矩阵
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - architecture
  - ai_engineering
  - application_engineering
capabilities:
  - architecture_design
  - tool_selection
prerequisites:
  - topic-0103
  - topic-0091
source_refs:
  - note-0018
  - article-0148
aliases:
  - guidance dspy langchain sglang comparison
  - agent platform dify n8n selection
search_terms:
  - llm stack layering framework platform comparison
  - guidance dspy langchain sglang claude code openclaw dify n8n
last_reviewed: 2026-04-10
---

# 一句话定义

这张卡把常见 LLM 技术栈拆成分层能力，帮助在“控生成、做优化、搭流程、跑代理、做自动化”之间做正确选型。

## 分层定位

- Guidance：生成控制层（强约束输出）。
- DSPy：优化层（基于数据与指标优化模块）。
- LangChain：代码编排层（模型、RAG、工具链集成）。
- SGLang/vLLM：推理运行时层（吞吐、时延、服务化性能）。
- Claude Code/OpenClaw：代理执行平台层（目标驱动、自主行动、工具闭环）。
- Dify/n8n：可视化平台编排层（流程搭建、系统集成、业务发布）。

## 核心差异轴

1. 控制粒度：单次生成约束 vs 全流程编排。
2. 优化方式：手工规则约束 vs 数据驱动自动优化。
3. 交付形态：开发库 import vs 平台化开箱可用。
4. 执行模式：流程图驱动 vs 目标驱动自主代理。

## 选型规则（主矛盾优先）

- 输出经常格式失控：优先 Guidance。
- 有标注集和评测指标，需持续提效：优先 DSPy。
- 要快速搭完整应用链路：优先 LangChain 或 Dify。
- 要企业系统自动化联动：优先 n8n。
- 要代理直接读写代码并执行任务：优先 Claude Code/OpenClaw。
- 要极致服务吞吐和并发性能：优先 SGLang/vLLM。

## 可组合参考

1. Dify/n8n 做业务流程入口与系统连接。
2. LangChain 负责代码级链路与工具封装。
3. Guidance 用于关键节点结构化强约束输出。
4. DSPy 用于核心模块离线评测与持续优化。
5. SGLang/vLLM 提供高性能模型服务。
6. Agent 平台承接复杂自主执行任务。