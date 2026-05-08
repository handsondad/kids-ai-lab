---
doc_type: tool_card
id: tool-0148
title: deerflow
title_zh: DeerFlow
status: reviewed
language: zh-CN
learning_level: level_400
tool_category: agent_framework
topic_clusters:
  - agents
  - ai_engineering
  - research_automation
capabilities:
  - multi_agent_orchestration
  - deep_research
  - code_generation
use_cases:
  - complex_research_tasks
  - multi_agent_collaboration
  - knowledge_synthesis
source_refs:
  - note-0024
aliases:
  - byte dance deer flow
  - deer flow agent
search_terms:
  - deerflow 是什么
  - 字节跳动deerflow
  - 多智能体研究系统
  - superagent工具
last_reviewed: 2026-05-08
---

# 工具定位

DeerFlow 是字节跳动开源的 SuperAgent 工具，能够编排子智能体、记忆和沙盒环境，适合深度研究、代码生成和报告撰写的复杂任务。

## 适用场景

- 你需要多智能体协同完成复杂研究任务
- 你要结合代码执行和知识检索
- 你希望构建可扩展的研究工作流

## 核心能力

- **智能体编排**: 协调多个专业化子智能体
- **记忆管理**: 持久化研究过程和中间结果
- **沙盒执行**: 安全的代码运行环境
- **InfoQuest**: 集成信息检索能力

## 上手路径

1. 先配置单个研究任务，理解智能体编排机制。
2. 观察子智能体的协作过程，调整任务分配策略。
3. 引入自定义子智能体，适配特定研究场景。

## 选择边界

- 适合复杂研究任务，不适合简单问答。
- 需要较强的工程能力来配置和扩展。
- 依赖外部API和工具，成本较高。
- 调试多智能体系统较为复杂。

## 相关主题

- 与 `tool-0143`（AI-Scientist）竞争，DeerFlow更灵活可扩展，AI-Scientist更开箱即用。
- 与 `tool-0144`（STORM）互补，DeerFlow可集成STORM作为文献综述子智能体。
- 与 `topic-0110`（多智能体研究系统）强相关。

## 来源说明

- 来源笔记 ID: `note-0024`
- GitHub: https://github.com/bytedance/deer-flow
- Stars: 2500+
- 开发机构: ByteDance
