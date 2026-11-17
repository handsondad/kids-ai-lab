---
doc_type: source_article
id: article-0012
title: dspy_github_overview
title_zh: DSPy 官方仓库概览
author: StanfordNLP
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/stanfordnlp/dspy
source_kind: article_summary
topic_tags:
  - agents
  - ai_engineering
  - evaluation
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

这是 DSPy 官方仓库入口页，重点是给出其方法论定位: 用可组合程序和优化器替代手工 prompt 堆叠，构建可迭代的 LM 系统。

## 核心观点

- DSPy 定位为 programming-not-prompting 框架，强调声明式、模块化构建。
- 其核心目标是让 LM pipeline 可以被系统化优化，而不是依赖一次性提示词技巧。
- 官方强调适用范围从简单分类器到 RAG pipeline 与 Agent loop。
- 框架名称体现 Declarative Self-improving Python，强调可持续改进。
- 文档与论文链路完整，便于从工程实践回到方法论与实验依据。

## 值得保留的方法或框架

- 声明式 LM 编程: 先写结构，再让优化器搜索更优提示与参数。
- 模块化组合: 将复杂流程拆解为可测试、可替换的子模块。
- 研究到工程闭环: 通过论文与文档将优化策略沉淀为可复用实践。

## 局限与偏见

- 仓库首页偏框架理念与入口说明，缺少行业场景化案例细节。
- DSPy 并不自动替代数据质量和评测设计，仍需外部评测体系支撑。
- 引入新编程范式会带来学习成本与团队迁移成本。

## 可拆出的卡片

- `tool-0012`: DSPy 工具卡
- `collection-0004`: Agent 与 MCP 工具精选（框架层补强）
