---
doc_type: tool_card
id: tool-0027
title: swanlab
title_zh: SwanLab
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: observability
topic_clusters:
  - evaluation
  - ai_engineering
  - training_and_alignment
capabilities:
  - workflow_automation
  - classification
  - summarization
use_cases:
  - experiment_tracking
  - benchmark_iteration
  - training_observability
source_refs:
  - note-0007
  - article-0027
aliases:
  - swan lab
  - ai training tracking platform
search_terms:
  - swanlab 是什么
  - swanlab 和 wandb 对比
  - 模型训练可视化平台
  - swanlab 自托管
last_reviewed: 2026-04-03
---

# 工具定位

SwanLab 是面向模型训练团队的实验跟踪与可视化平台，适合管理训练指标、超参数、硬件资源和实验对比。

## 适用场景

- 你需要统一记录与比较大量训练实验
- 团队希望在云端协作与私有化部署之间灵活切换
- 你要把训练过程问题定位和迭代复盘标准化

## 核心能力

- 实验追踪: 记录指标、超参数、日志和多媒体输出
- 对比分析: 通过基线与实验对比快速定位有效改动
- 多框架集成: 覆盖主流训练框架并支持自托管部署

## 上手路径

1. 先给一个稳定训练任务接入最小日志上报。
2. 再建立 baseline 实验并配置关键对比维度。
3. 最后把评测结论与发布流程联动形成门禁。

## 选择边界

- 平台化追踪不能替代任务级评测设计。
- 如果团队没有统一实验命名和规范，数据价值会下降。
- 大规模使用时要提前规划权限与存储治理。

## 相关主题

- 与 `tool-0004` 强相关，二者都可用于可观测与迭代优化闭环。
- 与 `tool-0026` 强相关，适合跟踪微调实验并筛选上线候选。
- 与 `topic-0011` 强相关，可用于评测门禁与回归追踪。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0027`
