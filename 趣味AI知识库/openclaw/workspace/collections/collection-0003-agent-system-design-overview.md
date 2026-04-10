---
doc_type: collection
id: collection-0003
title: agent_system_design_overview
title_zh: Agent 系统设计总览
status: reviewed
language: zh-CN
audience_tags:
  - builder
  - research_reader
theme_tags:
  - agent_building
  - tool_selection
  - hands_on_learning
included_cards:
  - topic-0002
  - topic-0006
  - topic-0015
  - topic-0016
  - tool-0002
  - topic-0003
  - topic-0004
  - topic-0005
last_reviewed: 2026-04-02
---

# 专题说明

这个合集适合已经从“会用 chat”走到“想理解 AI 系统到底怎么搭”的学习者。它把四个经常被混淆但其实分属不同层级的问题串到一起：外部外壳怎么设计、工具调用和内部执行怎么区分、AI 工程到底在优化哪一层，以及长程计算为什么需要特殊的执行路径。

## 推荐顺序

1. 先看 `topic-0004`，建立 Prompt、Context、Harness、In-Model Execution 的四层地图。
2. 再看 `topic-0002`，理解为什么 Agent 系统的主战场往往在 Harness，而不只在 Prompt。
3. 接着看 `topic-0006`，理解为什么没有自验证和 trace，Agent 往往会早退、误判成功或陷入循环。
4. 再看 `topic-0015`，建立长会话下分层记忆与上下文治理的工程视角。
5. 再看 `topic-0016`，理解分层架构如何与工具权限防线协同工作。
6. 再看 `tool-0002`，理解观测和 tracing 工具为什么是 agent 优化闭环的基础设施。
7. 再看 `topic-0003`，明确 Tool Use 和 In-Model Execution 不是一回事。
8. 最后看 `topic-0005`，理解如果要把执行能力往模型内部搬，底层架构上要补什么。

## 包含卡片

- `topic-0004`: 用来做问题定位，先分清是在调哪一层。
- `topic-0002`: 解释外部执行框架、约束、验证和 trace 的价值。
- `topic-0006`: 解释为什么 agent 必须被逼着验证，以及 traces 为什么是迭代优化的主信号。
- `topic-0015`: 解释在长会话 coding 场景里，分层记忆如何同时控制成本、稳定性和可恢复性。
- `topic-0016`: 解释生产级 agent 如何通过分层设计与纵深防御管理工具风险与执行边界。
- `tool-0002`: 解释 trace 平台在调试、复盘和 benchmark 迭代中的实际位置。
- `topic-0003`: 解释为什么“会调工具”不等于“自己会执行”。
- `topic-0005`: 解释长程内部执行为什么需要 fast path 和几何化 attention。

## 使用建议

- 如果你是产品或工程导向，先优先消化 `topic-0004` 和 `topic-0002`。
- 如果你偏研究导向，再继续吃透 `topic-0003` 和 `topic-0005`。
- 每次遇到一个 AI 系统问题，都先问自己：这是 Prompt、Context、Harness，还是内部执行能力的问题。

## 检索提示

- 适合建立 Agent 系统全景视角的合集：从外部外壳到内部执行路径，帮助区分不同层面的优化问题。