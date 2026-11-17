---
doc_type: collection
id: collection-0004
title: agent_mcp_toolkit
title_zh: Agent 与 MCP 工具精选
status: reviewed
language: zh-CN
audience_tags:
  - builder
  - engineer
theme_tags:
  - agent_building
  - tool_selection
  - hands_on_learning
included_cards:
  - topic-0002
  - topic-0006
  - tool-0002
  - tool-0003
  - tool-0004
  - tool-0011
  - tool-0012
  - tool-0013
  - tool-0014
  - tool-0015
  - tool-0016
  - tool-0017
  - tool-0018
  - tool-0019
  - tool-0020
  - tool-0021
  - tool-0022
  - tool-0023
  - tool-0024
  - tool-0025
  - tool-0028
  - tool-0030
last_reviewed: 2026-04-03
---

# 专题说明

这个合集从“能把 Agent 跑起来”出发，优先覆盖最关键的外壳能力：任务分解、验证闭环、trace 可观测，以及 MCP 生态下的工具连接思路。它适合已经具备 LLM 基础，想把 Agent 从 demo 推到可持续迭代的人。

## 推荐顺序

1. 先看 `topic-0002`，建立 Harness Engineering 的系统视角。
2. 再看 `topic-0006`，理解自验证与 trace 优化为什么是实战里的第一优先级。
3. 接着看 `tool-0011`，先把多模型接入层与网关治理能力补齐。
4. 再看 `tool-0012`，理解如何把 prompt 迭代升级为程序化优化流程。
5. 再补 `tool-0022`、`tool-0023`、`tool-0024`、`tool-0025`，补齐主流 Agent 编排与类型安全框架能力。
6. 然后看 `tool-0013`，建立 MCP 官方生态入口与接入边界认知。
7. 再补 `tool-0014`、`tool-0015`、`tool-0016`，形成浏览器执行与网页数据抽取能力。
8. 再补 `tool-0017`、`tool-0018`、`tool-0019`，形成平台编排与数据问答能力。
9. 再补 `tool-0020`，把深度研究型 Agent 的配置化与评测化链路补齐。
10. 再补 `tool-0021`，完善另一条开源深度研究 Agent 实践路径。
11. 再补 `tool-0028`，补齐 AI 浏览器工作流自动化路径。
12. 再补 `tool-0030`，补齐编辑器内编码 Agent 协作路径。
13. 最后回到 `tool-0002`、`tool-0003`、`tool-0004`，把 observability 与评测闭环接上。

## 包含卡片

- `topic-0002`: Agent 外壳工程总览，回答“为什么不能只调 prompt”。
- `topic-0006`: 失败模式、验证闭环和 traces 迭代的实战方法。
- `tool-0011`: LiteLLM，统一多模型接入与网关治理能力。
- `tool-0012`: DSPy，把 LM 流程做成可组合、可优化的工程模块。
- `tool-0022`: LangChain，主流 LLM 应用编排框架与生态连接层。
- `tool-0023`: LlamaIndex，数据接入与检索增强导向的数据框架。
- `tool-0024`: CrewAI，多 Agent 协作与事件流流程编排框架。
- `tool-0025`: PydanticAI，强调类型安全、耐久执行与评测可观测。
- `tool-0013`: MCP Servers 官方仓库，MCP 工具生态与参考实现入口。
- `tool-0014`: Playwright，跨浏览器自动化执行与 Agent 控制能力。
- `tool-0015`: Stagehand，代码与自然语言混合编排的浏览器 Agent 框架。
- `tool-0028`: Skyvern，AI 驱动浏览器任务自动化与流程编排框架。
- `tool-0030`: Roo Code，编辑器内多模式协作的编码 Agent 工具。
- `tool-0016`: Crawl4AI，面向 LLM/RAG 的网页抓取与结构化提取能力。
- `tool-0017`: Dify，面向生产的 Agent/RAG 平台化编排能力。
- `tool-0018`: PandasAI，自然语言驱动的数据分析与可视化能力。
- `tool-0019`: Vanna，面向 Text-to-SQL 的用户感知数据代理能力。
- `tool-0020`: Open Deep Research，面向复杂任务的深度研究 Agent 框架。
- `tool-0021`: GPT Researcher，强调引用追踪与混合数据源的深研 Agent。
- `tool-0002`: tracing 平台类别卡，先理解这类工具解决什么问题。
- `tool-0003`: LangSmith 产品卡，偏 LangChain/LangGraph 生态。
- `tool-0004`: Phoenix 产品卡，偏 tracing + evaluation + experiments 工作流。

## 使用建议

- 先把“验证必须发生”做成硬规则，再优化提示或模型。
- 对 Agent 团队来说，先有 trace，再谈优化速度和质量。
- MCP 相关工具建议优先从“可观测、可回放、可审计”的接入策略开始，而不是先堆数量。

## 检索提示

- 适合构建 Agent 工程能力和 MCP 工具连接能力的入门到进阶工具包，重点是可观测、可验证、可迭代。

## 来源说明

- 主要来源笔记 ID: `note-0007`
- 辅助来源笔记 ID: `note-0002`