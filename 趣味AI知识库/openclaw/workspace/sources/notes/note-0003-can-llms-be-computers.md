---
doc_type: source_note
id: note-0003
source_ref: article-0004
chapter: article_main
chapter_zh: LLM 能否成为计算机
source_kind: article_summary
focus_topic_clusters:
  - llm_foundations
  - model_architecture
  - ai_engineering
derived_cards:
  - topic-0003
  - topic-0005
  - collection-0002
  - collection-0003
status: reviewed
last_reviewed: 2026-04-02
---

# 核心观点

- 文章试图区分两件事：模型“会谈论计算”与模型“自己能执行计算”不是一回事。今天的大多数 LLM 更像前者。
- Tool use 和 agent orchestration 很有用，但本质上是把计算外包给了解释器、代码执行器或外部状态机；真正的计算能力仍然不在模型内部。
- 作者提出的方法是在 transformer 内部实现一个 WebAssembly 执行器，让模型生成程序并直接在自身的 token 生成过程中执行该程序。
- 这个执行过程被表示成只追加的 execution trace：模型不修改旧状态，而是通过回看少量相关位置来重建当前虚拟机状态。
- 真正的瓶颈不是 transformer 理论上能不能模拟计算，而是标准自回归解码在长 trace 上成本太高；文章的技术突破是通过 2D head 的几何结构，把核心检索从线性扫描降到对数时间。
- 在这种设置下，文章展示了在模型内部执行长程精确计算的可能性，例如 Hungarian algorithm、Sudoku solver 和基础算术程序。

## 可拆出的卡片

- 主题卡：LLM 作为执行器而不仅是协调器
- 主题卡：Tool use 与 in-model execution 的区别
- 主题卡：2D attention 与 fast decoding path
- 合集卡：Harness 与模型内部计算能力
- 合集卡：Agent 系统设计总览

## 学习者会怎么问

- LLM 为什么会做复杂数学推理，却做不好简单精确计算
- tool use 和 in-model execution 有什么本质区别
- transformer 真的能成为计算机吗
- 2D attention head 为什么能让执行 trace 更快
- 把程序编译进权重是什么意思

## 备注

- 这篇文章更像研究方向说明和技术展示，不应直接读成“现在通用大模型已经不需要外部工具”。
- 它对理解 agent、tool use、可微执行和模型内部程序化能力很有启发，适合作为研究前沿来源保存。