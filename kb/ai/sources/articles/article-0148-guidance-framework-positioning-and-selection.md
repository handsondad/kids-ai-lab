---
doc_type: source_article
id: article-0148
title: Guidance Framework Positioning and Selection
title_zh: Guidance 框架定位与选型对比
source_type: user_provided_summary
source_url: user_provided_conversation_snippet
author: user
language: zh-CN
retrieved_at: 2026-04-10
---

# Guidance 与相关体系定位整理

## 核心定位

Guidance 是一个用 Python 程序化控制大语言模型生成过程的开源框架。它把提示词、约束、控制流、工具调用和结构化输出放在同一套编程模型里，让开发者以“写程序”的方式控制生成。

## 核心价值

1. 约束生成：通过正则、候选项、CFG、JSON Schema 等方式收紧输出空间。
2. 程序化控制：支持条件分支、循环、函数封装和变量捕获。
3. 效率优化：在受约束场景下可减少无效生成路径，改善延迟与成本。

## 典型能力

- 结构化输出：稳定生成合法 JSON 和固定字段。
- 受约束选择：适合分类、路由、标签判定等离散决策。
- 复杂对话流程：可表达 ReAct、工具调用、多步 Agent 流程。
- 可组合函数：用装饰器封装可复用生成模块。
- 语法级控制：在生成过程中施加约束，而非仅后处理校验。

## 适用场景

- 对输出合法性要求高：抽取、审批、表单、配置生成。
- 需要稳定候选决策：路由、意图分类、风险标签。
- 需要把多步流程模块化复用：Agent、工具链、评审流。
- 需要减少提示词脆弱性：降低偶发格式失控。

## 使用边界

- 简单聊天补全场景可能偏重。
- 如果重点是高吞吐服务化，SGLang/vLLM 可能更优先。
- 高级约束能力依赖后端模型对约束解码的支持度。

## 关键对比结论

- 与 SGLang：Guidance 偏生成控制与格式约束；SGLang 偏运行时性能与并行执行。
- 与 DSPy：Guidance 偏单次生成可控；DSPy 偏系统级模块优化与持续迭代。
- 与 LangChain：Guidance 偏生成控制；LangChain 偏应用组件编排与集成。
- 与 Agent 平台（Claude Code/OpenClaw）：Guidance 是框架层能力；Agent 平台是可直接执行任务的产品层。
- 与 Dify/n8n：Guidance 偏生成控制层；Dify/n8n 偏可视化流程编排与业务系统集成。

## 一句话总结

Guidance 更适合“把关键生成节点做成强约束、可复用、可调试的受控程序”，并可与编排层、优化层、执行平台层组合使用。