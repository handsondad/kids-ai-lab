---
doc_type: source_article
id: article-0068
title: promptflow_github_overview
title_zh: Promptflow 官方仓库概览
author: Microsoft and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/microsoft/promptflow
source_kind: article_summary
topic_tags:
  - llm_app_lifecycle
  - flow_engineering
  - evaluation_pipeline
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

Promptflow 是面向 LLM 应用全生命周期的开发工具套件，覆盖从 flow 原型、测试评估到部署监控，强调把提示工程纳入工程化流程。

## 核心观点

- 提示工程应与测试评估和部署流程一体化设计。
- Flow DAG 让提示、工具、代码节点可视化组合与迭代。
- CLI 与 VS Code 设计器并行，平衡自动化与交互开发。
- 质量保障应从原型期前置，而不是上线后补救。

## 值得保留的方法或框架

- Flow-as-code: 用 DAG 描述可执行 LLM 流程。
- Evaluate-before-deploy: 批量测试与评估先于生产发布。
- Dev-to-prod loop: 开发、调优、部署形成闭环。

## 局限与偏见

- 框架导向明显，迁移既有链路需要改造成本。
- 复杂场景下 flow 设计与节点治理会快速变重。
- 全量收益依赖团队持续维护评估数据与标准。

## 可拆出的卡片

- `tool-0068`: Promptflow 工具卡
- `collection-0001`: AI 基础与工具起步包（LLM 应用生命周期补充）
