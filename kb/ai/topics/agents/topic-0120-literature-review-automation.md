---
doc_type: topic_card
id: topic-0111
title: literature_review_automation
title_zh: 文献综述自动化
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - rag_and_data
  - research_automation
  - scientific_computing
capabilities:
  - paper_retrieval
  - summarization
  - synthesis
prerequisites:
  - rag_basics
  - llm_foundations
source_refs:
  - note-0024
aliases:
  - automated literature review
  - paper synthesis
search_terms:
  - 文献综述自动化是什么
  - 自动化文献综述
  - 论文总结工具
  - literature synthesis
last_reviewed: 2026-05-08
---

# 一句话定义

文献综述自动化是指利用AI技术自动检索、阅读、总结和综合大量学术文献，生成结构化综述报告的技术。

## 为什么重要

- **效率提升**: 将文献综述时间从周缩短到小时
- **覆盖全面**: 能够处理大量文献，避免遗漏重要研究
- **结构化输出**: 生成带引用的结构化综述，便于追溯
- **降低门槛**: 让更多人能够开展高质量的文献调研

## 关键机制

1. **文献检索**: 自动从多个数据库检索相关论文（arXiv、Semantic Scholar等）
2. **论文理解**: 使用LLM理解论文核心内容、方法和结论
3. **信息提取**: 提取关键信息（方法、结果、局限等）
4. **主题聚类**: 将论文按主题或方法聚类
5. **综述生成**: 生成结构化的综述文章，保留引用链路

## 与相邻主题的关系

- **与 RAG 强相关**: 文献综述依赖检索增强生成技术
- **与 AI科研自动化 相关**: 文献综述是研究流程的第一步
- **与 Knowledge Management 相关**: 文献综述是知识管理的重要应用
- **与 Academic Writing 相关**: 自动化综述是学术写作的辅助工具

## 常见误区

- **误区1**: "自动化综述可以完全替代人工阅读"
  - 实际: 自动化综述是辅助工具，关键论文仍需人工精读

- **误区2**: "生成的综述质量很高"
  - 实际: 自动化综述需要人工审核和改进，尤其是专业性强的领域

- **误区3**: "只适合机器学习领域"
  - 实际: STORM、PaperQA2等工具已覆盖多个学科

## 下一步学习建议

- **先读**: STORM论文，理解综述生成的技术路径
- **先练**: 使用STORM生成一个主题的文献综述
- **再深入**: 学习PaperQA2的精确问答能力
- **最后**: 对比不同工具，选择适合自己领域的工具

## 检索提示

文献综述自动化利用AI技术自动检索、总结和综合学术文献，代表工具有STORM、GPT Researcher、PaperQA2、ChatPaper等。

## 来源说明

- 来源笔记 ID: `note-0024`
- 参考工具: `tool-0144`（STORM）、`tool-0146`（PaperQA2）、`tool-0149`（ChatPaper）
