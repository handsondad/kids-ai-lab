---
doc_type: guide
id: guide-0002
title: agent_learning_map
title_zh: Agent 课程式学习地图
status: reviewed
language: zh-CN
aliases:
  - Agent 学习地图
  - Agent 课程
  - AGENT_LEARNING_MAP
  - Agent 入门进阶前沿
search_terms:
  - Agent 应该怎么系统学
  - Agent 入门先看什么
  - Agent 失败诊断怎么学
  - Harness 和模型内部执行怎么区分
  - Agent 学习阶段产出
last_reviewed: 2026-11-17
---

# Agent 课程式学习地图

这份地图把当前知识库里的 Agent 内容整理成三段式课程：入门、进阶、前沿。
每段都给出学习目标、必读卡片和可交付产出，适合按路径推进，而不是零散查阅。

## 使用方式

- 推荐顺序：先完成入门，再做进阶，最后进入前沿。
- 每个阶段都要求做一个小产出，确保不是“看完就忘”。
- 如果你是工程导向，可把前沿阶段放在进阶之后按需补。

## 入门层（Level A）

学习目标：先分清你在调哪一层，不把所有问题都归结为 prompt。

必读：

1. `topic-0004` [Prompt、Context、Harness 与 In-Model Execution 对比](../topics/architecture/topic-0004-prompt-context-harness-and-in-model-execution.md)
2. `topic-0002` [Harness Engineering](../topics/agents/topic-0002-harness-engineering.md)
3. `collection-0003` [Agent 系统设计总览](../collections/collection-0003-agent-system-design-overview.md)

阶段产出：

- 写一段“问题定位说明”：把你当前一个 Agent 问题归类为 Prompt / Context / Harness / In-Model Execution 之一，并写出理由。

完成标志：

- 你能明确说出四层优化对象分别是什么。
- 你能解释为什么很多 Agent 问题不是换更强模型就能解决。

## 进阶层（Level B）

学习目标：掌握 Agent 失败诊断和迭代优化的工程闭环。

必读：

1. `topic-0006` [Agent 自验证与 Trace 优化](../topics/agents/topic-0006-agent-self-verification-and-trace-optimization.md)
2. `tool-0002` [Agent Observability / Tracing 平台](../tools/observability/tool-0002-agent-observability-and-tracing.md)
3. `tool-0003` [LangSmith](../tools/observability/tool-0003-langsmith.md)
4. `tool-0004` [Phoenix](../tools/observability/tool-0004-phoenix.md)

阶段产出：

- 做一份“失败模式清单”：至少列出 5 类失败模式（如早退、误判成功、循环编辑、未验证、错用工具），并给出对应的 trace 观测信号与改进动作。

完成标志：

- 你能解释 Build-Verify-Fix 为什么要被强制而不是可选。
- 你能说明 tracing 平台在优化闭环中的角色，而不只把它当日志系统。
- 你能初步比较 LangSmith 与 Phoenix 的适配场景。

## 前沿层（Level C）

学习目标：把外部系统优化与模型内部执行能力边界区分清楚。

必读：

1. `topic-0003` [Tool Use 与 In-Model Execution 的区别](../topics/architecture/topic-0003-tool-use-vs-in-model-execution.md)
2. `collection-0002` [Harness 与模型内部计算能力](../collections/collection-0002-harness-and-in-model-compute.md)
3. `topic-0005` [2D Attention 与 Fast Path](../topics/architecture/topic-0005-2d-attention-fast-path.md)
4. `note-0004` [Can LLMs Be Computers 首页摘要版](../sources/notes/note-0004-can-llms-be-computers-short-summary.md)
5. `topic-0105` [智能体 AI (Agentic AI) 与自主工作流](../topics/agents/topic-0105-agentic-ai-autonomous-workflows.md)
6. `collection-0014` [2025-2026 AI 重大突破与智能体时代](../collections/collection-0014-ai-breakthroughs-2025-2026.md)

阶段产出：

- 写一份“二层架构判断”：针对你的一个目标系统，明确哪些能力应放在 Harness 层解决，哪些问题值得押注模型内部执行能力。

完成标志：

- 你能区分 Tool Use 与 In-Model Execution 的根本差异。
- 你能说明 2D fast path 这类研究到底在补什么瓶颈，而不是把它当通用万能解。

## 复盘与写回

完成任一阶段后，按下面顺序回写：

1. 先在 `sources/notes/` 写阶段总结
2. 再拆为 `topics/` 或 `tools/` 的稳定卡片
3. 需要导航时再更新 `collections/` 或本地图

建议复盘问题：

- 这次学到的是概念差异、工程方法，还是研究边界？
- 哪些结论可以沉淀成团队长期规则？
- 哪些判断仍需要更多来源验证？
