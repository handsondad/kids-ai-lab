---
doc_type: tool_card
id: tool-0151
title: aide
title_zh: AIDE
status: reviewed
language: zh-CN
learning_level: level_400
tool_category: agent_framework
topic_clusters:
  - agents
  - ai_engineering
  - ml_engineering
capabilities:
  - ml_code_optimization
  - kaggle_automation
  - experiment_iteration
use_cases:
  - kaggle_competition
  - ml_model_development
  - hyperparameter_tuning
source_refs:
  - note-0024
aliases:
  - ai driven exploration
  - weco ai aide
search_terms:
  - aide 是什么
  - ml代码优化工具
  - kaggle自动化
  - 智能体树搜索
last_reviewed: 2026-05-08
---

# 工具定位

AIDE 是 AI 驱动的 ML 代码优化工具，通过智能体树搜索编写、评估和改进 ML 代码，比最佳线性智能体多 4 倍 Kaggle 奖牌，适合机器学习竞赛和模型开发。

## 适用场景

- 你要参加 Kaggle 竞赛并自动化特征工程
- 你需要快速迭代和优化 ML 模型
- 你希望自动化超参数调优和模型选择

## 核心能力

- **智能体树搜索**: 系统化探索代码改进空间
- **自动迭代**: 编写、评估、改进的闭环
- **多模型支持**: OpenAI、Claude、Gemini、Ollama
- **Kaggle集成**: 直接提交和评估结果

## 上手路径

1. 先在简单数据集上测试代码生成能力。
2. 观察迭代过程和性能提升，调整搜索策略。
3. 引入到 Kaggle 竞赛，验证实际效果。

## 选择边界

- 主要面向 ML 任务，不适合其他类型开发。
- 需要充足的 API 调用预算，迭代成本较高。
- 生成的代码需要人工审核，尤其是生产环境。
- 依赖数据质量和计算资源。

## 相关主题

- 与 `tool-0145`（OpenHands）互补，AIDE专注ML优化，OpenHands更通用。
- 与 `tool-0147`（RD-Agent）竞争，二者都支持Kaggle自动化。
- 与 `topic-0109`（AI科研自动化）强相关。

## 来源说明

- 来源笔记 ID: `note-0024`
- GitHub: https://github.com/WecoAI/aideml
- Stars: 1500+
- 论文: arXiv:2502.13138
- 托管平台: Weco AI
