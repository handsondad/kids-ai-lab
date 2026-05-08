---
doc_type: tool_card
id: tool-0147
title: rd_agent
title_zh: RD-Agent
status: reviewed
language: zh-CN
learning_level: level_400
tool_category: agent_framework
topic_clusters:
  - agents
  - ai_engineering
  - research_automation
capabilities:
  - automated_rd
  - quant_finance
  - kaggle_automation
use_cases:
  - quantitative_finance
  - kaggle_competition
  - paper_to_code
source_refs:
  - note-0024
aliases:
  - microsoft rd agent
  - research development agent
search_terms:
  - rd agent 是什么
  - 微软rd agent
  - 量化金融智能体
  - kaggle自动化
last_reviewed: 2026-05-08
---

# 工具定位

RD-Agent 是 Microsoft 开发的自动化 R&D 智能体，专注量化金融、Kaggle 自动化和论文到代码实现，在 MLE-bench 上表现顶级。

## 适用场景

- 你要自动化量化金融因子和模型演化
- 你要参加 Kaggle 竞赛并自动化特征工程
- 你要将论文方法快速实现为代码

## 核心能力

- **量化金融**: 自动化因子挖掘和模型优化
- **Kaggle自动化**: 自动特征工程和模型调优
- **论文实现**: 将论文方法转化为可运行代码
- **多模型支持**: OpenAI GPT-4o/o1/o3、Azure、DeepSeek

## 上手路径

1. 先在量化金融数据集上测试因子生成能力。
2. 观察生成的因子和模型性能，调整优化策略。
3. 引入到 Kaggle 竞赛或实际交易系统。

## 选择边界

- 主要面向量化金融和竞赛场景，不适合通用研究。
- 需要领域知识来评估生成结果的质量。
- 依赖数据质量和计算资源。
- 生成的策略需要回测验证，不能直接实盘。

## 相关主题

- 与 `tool-0143`（AI-Scientist）互补，RD-Agent更侧重量化金融，AI-Scientist更通用。
- 与 `tool-0145`（OpenHands）相关，二者都支持代码自动化，但RD-Agent专注R&D流程。
- 与 `topic-xxxx`（AI科研自动化）强相关。

## 来源说明

- 来源笔记 ID: `note-0024`
- GitHub: https://github.com/microsoft/RD-Agent
- Stars: 3000+
- 开发机构: Microsoft
