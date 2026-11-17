---
doc_type: tool_card
id: tool-0068
title: promptflow
title_zh: Promptflow
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - llm_app_lifecycle
  - flow_engineering
  - evaluation_pipeline
capabilities:
  - flow_dag_authoring
  - batch_test_and_evaluation
  - cli_and_vscode_designer
use_cases:
  - prompt_engineering_workflows
  - llm_quality_gates
  - prototype_to_production_pipelines
source_refs:
  - note-0007
  - article-0068
aliases:
  - promptflow
  - microsoft prompt flow
search_terms:
  - promptflow flow dag
  - promptflow evaluation
  - promptflow vs code extension
  - promptflow cli
last_reviewed: 2026-04-03
---

# 工具定位

Promptflow 是 LLM 应用生命周期工具套件，适合通过 flow 编排把提示开发、测试评估与部署监控统一在工程流程中。

## 适用场景

- 你要把 prompt 试验升级为可复现的工程流水线
- 你要对 flow 进行批量测试与质量评估
- 你要在 CLI 自动化与可视化设计器间协同开发

## 核心能力

- Flow DAG 编排: 将提示、代码、工具节点可执行化
- 评估体系: 支持批量测试与质量指标对比
- 双入口开发: CLI 与 VS Code 设计器协同迭代

## 上手路径

1. 先用 chat template 初始化首个 flow。
2. 再建立连接配置并进行交互测试。
3. 最后接入批量评估和部署流程形成闭环。

## 选择边界

- Flow 规模增大后需要更强配置与版本治理。
- 迁移已有链路可能涉及一定改造成本。
- 质量提升依赖持续维护评估集与指标体系。

## 相关主题

- 与 `tool-0058` 可组合: Promptflow 负责流程开发，Langfuse 负责观测评估。
- 与 `tool-0066` 可对比: Promptflow 偏流程工具链，Semantic Kernel 偏编排 SDK。
- 与 `collection-0001` 强相关，补齐从原型到生产的流程能力。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0068`
