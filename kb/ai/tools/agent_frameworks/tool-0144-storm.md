---
doc_type: tool_card
id: tool-0144
title: storm
title_zh: STORM
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: agent_framework
topic_clusters:
  - agents
  - rag_and_data
  - research_automation
capabilities:
  - literature_synthesis
  - long_form_generation
  - citation_management
use_cases:
  - wikipedia_style_articles
  - deep_research_reports
  - literature_review
source_refs:
  - note-0024
aliases:
  - stanford storm
  - co-storm
search_terms:
  - storm 是什么
  - 文献综述工具
  - 维基百科式文章生成
  - stanford storm
last_reviewed: 2026-05-08
---

# 工具定位

STORM 是 Stanford 开发的 LLM 驱动知识管理系统，能够生成带引用的维基百科式长文章，适合深度文献综述和知识整理场景。

## 适用场景

- 你需要生成结构化的长篇研究综述
- 你要从多个来源整合知识并保留引用链路
- 你要创建可追溯的知识库文档

## 核心能力

- **维基百科式生成**: 自动生成长篇结构化文章
- **引用管理**: 自动追踪和引用来源
- **多搜索引擎**: 支持 You.com、Bing、Google、Brave、Tavily、SearXNG
- **Co-STORM**: 协作模式，支持多智能体协同

## 上手路径

1. 先用默认搜索引擎跑通一个主题的综述生成。
2. 观察生成质量和引用准确性，调整搜索策略。
3. 引入 Co-STORM 模式，实现多角度协作综述。

## 选择边界

- 适合知识整理和综述，不适合原创研究。
- 生成的文章需要人工审核，尤其是专业性强的领域。
- 依赖搜索引擎质量，信息覆盖可能不完整。
- 长文本生成成本较高，需要合理控制预算。

## 相关主题

- 与 `tool-0021`（GPT Researcher）竞争，STORM更侧重长文章生成，GPT Researcher更侧重报告生成。
- 与 `tool-0145`（PaperQA2）互补，STORM用于综述，PaperQA2用于精确问答。
- 与 `topic-xxxx`（文献综述自动化）强相关。

## 来源说明

- 来源笔记 ID: `note-0024`
- GitHub: https://github.com/stanford-oval/storm
- Stars: 15000+
- 发表机构: Stanford
