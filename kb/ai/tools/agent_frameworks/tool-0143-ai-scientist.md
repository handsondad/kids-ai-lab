---
doc_type: tool_card
id: tool-0143
title: ai_scientist
title_zh: AI-Scientist
status: reviewed
language: zh-CN
learning_level: level_400
tool_category: agent_framework
topic_clusters:
  - agents
  - ai_engineering
  - research_automation
capabilities:
  - end_to_end_research
  - paper_writing
  - experiment_automation
use_cases:
  - automated_scientific_discovery
  - ml_research_automation
  - paper_generation
source_refs:
  - note-0024
aliases:
  - sakana ai scientist
  - automated research system
search_terms:
  - ai scientist 是什么
  - 自动化科研系统
  - 端到端研究系统
  - ai scientist sakana
last_reviewed: 2026-05-08
---

# 工具定位

AI-Scientist 是首个全面自动化开放式科学发现的系统，能够从想法生成到论文撰写完成端到端的研究流程，适合机器学习研究和算法优化场景。

## 适用场景

- 你需要自动化完整的机器学习研究流程
- 你希望快速验证研究想法并生成论文草稿
- 你要进行算法优化和实验迭代

## 核心能力

- **端到端自动化**: 想法生成 → 编码 → 实验 → 论文撰写
- **多模型支持**: OpenAI、Claude、DeepSeek、Gemini等多种LLM后端
- **模板化流程**: 使用LaTeX模板自动生成论文
- **实验管理**: 自动化实验执行和结果分析

## 上手路径

1. 先配置LLM API密钥，跑通一个简单的ML研究任务。
2. 观察生成的论文质量，调整想法生成和实验设计参数。
3. 引入自定义模板和评估标准，适配特定研究领域。

## 选择边界

- 主要面向机器学习研究，不适合实验科学领域。
- 生成的论文需要人工审核和改进，不能直接投稿。
- 需要充足的API调用预算，实验成本较高。
- 依赖模板质量，领域适应性有限。

## 相关主题

- 与 `tool-0144`（STORM）互补，AI-Scientist侧重研究执行，STORM侧重文献综述。
- 与 `tool-0076`（OpenHands）相关，二者都是自动化执行工具，但AI-Scientist专注研究流程。
- 与 `topic-xxxx`（AI科研自动化）强相关，是该领域的代表性工具。

## 来源说明

- 来源笔记 ID: `note-0024`
- GitHub: https://github.com/SakanaAI/AI-Scientist
- Stars: 4000+
