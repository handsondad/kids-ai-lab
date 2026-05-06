---
doc_type: topic_card
id: topic-0075
title: agent_evaluation_automation_template
title_zh: 智能体评测自动化模板
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - evaluation
  - agent
  - workflow_automation
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0074
source_refs:
  - note-0012
  - article-0140
aliases:
  - bfcl automation pipeline
  - benchmark export and scoring
search_terms:
  - bfcl evaluator ast match
  - official eval export format
  - evaluation reports automation
last_reviewed: 2026-04-08
---

# 一句话定义

智能体评测自动化模板用于将基准评测、结果导出、官方打分与报告展示统一成一键执行流程。

## 关键路径

1. 加载基准数据并创建被测 Agent。
2. 运行评测器得到原始预测结果。
3. 导出官方格式并执行标准评测命令。
4. 汇总评分文件与关键指标输出报告。

## 实操要点

- 评测脚本要支持小样本快速验证模式。
- 导出路径和模型命名需规范化，避免评测工具无法识别。
- 评测失败日志必须可追踪到样本级别。

## 检索提示

- 适用于需要持续回归测试 Agent 能力的工程场景。
