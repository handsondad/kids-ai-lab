---
doc_type: tool_card
id: tool-0150
title: biomni
title_zh: Biomni
status: reviewed
language: zh-CN
learning_level: level_400
tool_category: agent_framework
topic_clusters:
  - agents
  - research_automation
  - scientific_computing
capabilities:
  - biomedical_research
  - data_analysis
  - experiment_design
use_cases:
  - biology_research
  - drug_discovery
  - clinical_research
source_refs:
  - note-0024
aliases:
  - stanford biomni
  - biomedical ai agent
search_terms:
  - biomni 是什么
  - 生物医学ai智能体
  - 斯坦福biomni
  - 生物研究自动化
last_reviewed: 2026-05-08
---

# 工具定位

Biomni 是 Stanford 开发的通用生物医学 AI 智能体，能够自主执行生物学和医学研究任务，结合 LLM 推理、检索和工具/代码使用，适合生物医学领域的科研自动化。

## 适用场景

- 你要自动化生物医学研究任务
- 你需要进行药物发现或临床研究
- 你希望结合专业数据库和工具进行研究

## 核心能力

- **生物医学推理**: 理解生物学和医学概念
- **数据湖访问**: 集成多种生物医学数据库
- **代码执行**: 自动化数据分析和可视化
- **知识库**: 丰富的生物医学知识库

## 上手路径

1. 先在标准生物医学数据集上测试分析能力。
2. 观察生成的分析报告和可视化效果。
3. 引入到实际研究项目，如药物靶点发现。

## 选择边界

- 专注生物医学领域，不适合其他领域。
- 需要领域知识来评估生成结果的质量。
- 依赖专业数据库访问权限。
- 生成的假设需要实验验证。

## 相关主题

- 与 `tool-0143`（AI-Scientist）互补，Biomni专注生物医学，AI-Scientist更通用。
- 与 `tool-0147`（RD-Agent）类似，二者都是领域专业化工具。
- 与 `topic-0109`（AI科研自动化）强相关，是领域应用案例。

## 来源说明

- 来源笔记 ID: `note-0024`
- GitHub: https://github.com/snap-stanford/Biomni
- Stars: 600+
- 开发机构: Stanford
