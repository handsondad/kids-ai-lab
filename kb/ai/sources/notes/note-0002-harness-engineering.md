---
doc_type: source_note
id: note-0002
source_ref: manual_curation
chapter: article_main
chapter_zh: Harness Engineering 综合框架
source_kind: manual_curation
focus_topic_clusters:
  - agents
  - ai_engineering
  - evaluation
  - history_and_milestones
derived_cards:
  - topic-0002
  - topic-0006
  - topic-0004
  - tool-0002
  - collection-0003
status: reviewed
last_reviewed: 2026-04-02
---

# 核心观点

- Harness engineering 可以理解为“围绕模型搭建执行外壳的工程工作”，重点不是训练模型本身，而是设计模型如何拿到上下文、如何调用工具、如何被约束、如何验证、如何被观测和改进。
- 如果把模型类比成马，harness 更像缰绳、马鞍、脚蹬和路线约束；它不直接提供动力，但决定这股动力能否稳定地用在正确方向上。
- 它比 prompt engineering 更宽：prompt 只是 harness 的一个旋钮，真正的 harness 还包括工具选择、middleware、memory、verification loop、trace instrumentation 和 reasoning budget。
- 文章给出的有效改进说明，很多 agent 失败并不是“模型完全不会”，而是缺少自我验证、环境理解、退出前检查和失败后重新规划的机制。
- Context engineering 可以看作 harness engineering 的一个重要子能力：harness 负责准备和交付 agent 需要的环境、约束和任务信息。
- 从范式演进上看，Prompt Engineering 主要优化“怎么说”，Context Engineering 主要优化“给什么信息”，Harness Engineering 则开始优化“AI 在什么环境里运行、被什么机制约束和反馈”。
- 长周期 agent 的核心问题不是单步回答质量，而是上下文窗口断裂、任务状态遗失、测试缺失、架构约束失效，以及由此积累出的“信任债务”。
- 在长期复杂任务里，Harness 的价值会随着任务复杂度、运行时长和协作规模迅速上升；它更像可持续自主性的基础设施，而不是一次性技巧。

## 关键结构

- OpenAI 方向：把工程师角色从“写代码的人”转成“环境建筑师”，重点建设知识系统、约束系统、观测系统和自动修复机制。
- Anthropic 方向：重点解决跨上下文窗口的长期运行问题，通过进度文件、功能状态、初始化脚本和“一次只做一件事”来实现跨会话连续性。
- LangChain 方向：重点证明 Harness 可以用 trace 分析和 benchmark 迭代带来定量提升，而不必依赖更换模型。
- 行业争议方向：Big Model vs Big Harness 的争论说明，Harness 的必要性与任务长度、复杂度和模型能力强相关，而不是绝对二选一。

## 五大核心组件

- 结构化知识系统：AGENTS.md 更适合做地图而不是百科全书，详细知识拆到架构文档、域文档、计划和 runbook 中，并持续维护一致性。
- 机械化架构约束：把反复出现的架构规范变成 Linter、结构测试或 CI 规则，把“经验”转成机器可执行边界。
- 可观测性注入：日志、指标、浏览器状态和运行时行为不只是给人看，也要能被 Agent 读取、验证和利用。
- 自修复闭环：定期跑清洁 Agent、文档园丁 Agent 或重构 Agent，让代码与文档持续回到黄金路径。
- Agent 互审机制：让一个 Agent 写，另一个 Agent 审，并把人类注意力留给架构级决策和异常问题。

## 可拆出的卡片

- 主题卡：Harness Engineering
- 主题卡：Agent 的自验证与 Trace 驱动优化
- 主题卡：Prompt / Context / Harness / In-Model Execution 对比
- 工具卡：Agent observability / tracing 平台

## 学习者会怎么问

- Harness engineering 和 prompt engineering 到底差在哪
- 为什么同一个模型，换一层 agent 外壳后效果会差这么多
- AI Agent 为什么需要 middleware、loop detection 和 verification
- 做 agent 产品时，应该优先调模型还是优先调 harness
- 长任务里的 Agent 为什么会“失忆”或烂尾
- AGENTS.md 应该怎么写才对 Agent 真有帮助
- Big Model 和 Big Harness 到底谁更重要

## 备注

- 当前笔记综合了 LangChain 原文 `Improving Deep Agents with harness engineering` 与你提供的知乎文章《Harness Engineering 深度解读：AI Agent 时代的「缰绳与马鞍」》正文。
- 如需进一步细化 OpenAI、Anthropic、Martin Fowler、Decision Intelligence 与 Latent Space 各自观点，下一步更适合拆成独立来源卡和对比卡。