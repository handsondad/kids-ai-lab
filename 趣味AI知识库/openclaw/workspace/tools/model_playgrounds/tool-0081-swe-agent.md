---
doc_type: tool_card
id: tool-0081
title: swe_agent
title_zh: SWE-agent
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - software_engineering_agent
  - benchmark_driven
  - autonomous_debugging
capabilities:
  - issue_to_patch_agent_loop
  - yaml_configurable_execution
  - swe_bench_oriented_evaluation
use_cases:
  - repository_issue_fixing
  - coding_agent_research
  - tool_use_policy_experiments
source_refs:
  - note-0007
  - article-0081
aliases:
  - sweagent
  - swe agent
search_terms:
  - swe-agent swe-bench
  - swe-agent yaml config
  - swe-agent github issue fix
  - mini-swe-agent
last_reviewed: 2026-04-03
---

# 工具定位

SWE-agent 是软件工程任务导向代理框架，适合做代码修复自动化研究与基准化评测。

## 适用场景

- 你要把 issue 修复流程做成可重复实验
- 你要在 SWE-bench 体系下比较代理策略
- 你要研究工具自治与受控执行边界

## 核心能力

- Issue 到补丁闭环: 面向真实仓库问题的执行流程
- 配置驱动行为: 通过 YAML 统一管理代理策略
- 基准导向评测: 支持研究场景下的可比实验

## 上手路径

1. 先跑 hello world 与基础配置样例。
2. 再引入目标仓库做小规模任务验证。
3. 最后接入批量评测并记录回归基线。

## 选择边界

- 官方建议新项目优先关注 mini-SWE-agent 演进路线。
- 自主修复任务需严控执行权限与回滚策略。
- 基准成绩无法直接等价业务生产效果。

## 相关主题

- 与 `tool-0076` 互补: OpenHands 偏产品化入口，SWE-agent 偏研究评测基线。
- 与 `tool-0058` 可组合: SWE-agent 执行实验，Langfuse 做观测与评估。
- 与 `collection-0001` 强相关，补齐软件工程代理评测主线。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0081`
