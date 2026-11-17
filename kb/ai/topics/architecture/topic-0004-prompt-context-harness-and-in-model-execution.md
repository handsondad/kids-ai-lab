---
doc_type: topic_card
id: topic-0004
title: prompt_context_harness_and_in_model_execution
title_zh: Prompt、Context、Harness 与 In-Model Execution 对比
status: reviewed
language: zh-CN
learning_level: level_200
topic_clusters:
  - ai_overview
  - prompting
  - agents
  - ai_engineering
capabilities:
  - reasoning
  - tool_use
  - planning
prerequisites:
  - topic-0001
source_refs:
  - note-0002
  - note-0003
aliases:
  - AI 工程四层对比
  - Prompt Context Harness 内部执行区别
search_terms:
  - prompt context harness 区别
  - in-model execution 和 harness 区别
  - ai 工程范式演进
  - prompt engineering 到 harness engineering
last_reviewed: 2026-04-02
---

# 一句话定义

这四个概念分别在优化 AI 系统的不同层级：Prompt 优化指令表达，Context 优化输入材料，Harness 优化模型外部运行环境，而 In-Model Execution 试图增强模型内部执行能力。

## 为什么重要

- 很多讨论会把这四层混成一个“调 AI”的大概念，结果导致问题定位不准。
- 当系统表现不佳时，先判断问题出在指令、信息、外部执行框架，还是模型内部计算能力，能显著提高改进效率。
- 这也是理解“为什么工程团队和模型团队关注点不同”的关键切口。

## 四层分别解决什么问题

- Prompt Engineering：解决“怎么把话说清楚”，关注指令措辞、结构、示例、输出格式。
- Context Engineering：解决“给模型什么信息”，关注检索、上下文拼装、历史状态和材料质量。
- Harness Engineering：解决“模型在什么规则和反馈系统里工作”，关注工具、约束、验证、trace、退出条件和工作流。
- In-Model Execution：解决“模型内部能不能可靠执行长程精确计算”，关注执行 trace、内部程序化能力和计算基底。

## 可以用什么问题快速区分

- 如果问题是“模型没听懂我要什么”，优先看 Prompt。
- 如果问题是“模型缺少事实、文档或历史状态”，优先看 Context。
- 如果问题是“模型会早退、不会验证、不会利用工具、容易走死循环”，优先看 Harness。
- 如果问题是“模型即使拿到清楚指令也做不好长程精确计算”，才需要考虑 In-Model Execution 这类更底层能力问题。

## 一个直观类比

- Prompt：你怎么下指令。
- Context：你给它什么资料。
- Harness：你让它在怎样的工位、流程和质检制度下工作。
- In-Model Execution：它的大脑内部是否真的长出了稳定的“算盘”或“执行器”。

## 它们之间的关系

- Prompt 和 Context 更靠近单次交互层。
- Harness 更靠近系统工程层。
- In-Model Execution 更靠近模型与体系结构层。
- 它们不是替代关系，而是从外到内、从轻到重的多层优化手段。

## 常见误区

- “Prompt 调好了，系统就稳定了”通常不成立，尤其是多步 Agent。
- “Context 多给一点总没错”也不对，过量信息会淹没有效信号。
- “Harness 只是 Prompt 的扩展”太窄，Harness 处理的是工作流和执行环境。
- “In-Model Execution 很强就不需要 Harness”也不成立，真实系统仍然需要边界、记忆、权限和观测机制。

## 下一步学习建议

- 先在一个真实任务上分层诊断：到底是指令问题、材料问题、系统外壳问题，还是内部计算问题。
- 如果你在做产品或 agent，先把 Prompt / Context / Harness 三层吃透。
- 如果你在看研究前沿，再继续深入 In-Model Execution 和 fast path 架构。

## 检索提示

- 用来区分 AI 系统四个常见优化层级的总览主题，适合做问题定位和学习导航。

## 来源说明

- 来源笔记 ID: `note-0002`、`note-0003`