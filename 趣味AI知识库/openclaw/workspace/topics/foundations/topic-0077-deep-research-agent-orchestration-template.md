---
doc_type: topic_card
id: topic-0077
title: deep_research_agent_orchestration_template
title_zh: 深度研究智能体编排模板
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - multi_agent
  - context_engineering
  - application_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0069
source_refs:
  - note-0012
  - article-0140
aliases:
  - todo driven research agent
  - streaming research orchestrator
search_terms:
  - deep research workflow
  - task planner summarizer reporter
  - stream progress events
last_reviewed: 2026-04-08
---

# 一句话定义

深度研究智能体编排模板用于把任务拆解、检索执行、阶段总结和报告生成串成可流式反馈的研究工作流。

## 关键路径

1. 用规划模块把研究主题拆分为 TODO 子任务。
2. 对每个子任务执行检索与上下文准备。
3. 通过总结模块沉淀阶段结论并写入笔记。
4. 通过报告模块整合最终输出并持续推送进度事件。

## 实操要点

- 子任务状态需要显式机管理（pending/in_progress/completed）。
- 流式事件结构应统一，便于前端消费与调试。
- 研究过程要保留可追溯笔记和工具调用轨迹。

## 检索提示

- 适用于知识密集型任务和长时程研究助手构建场景。
