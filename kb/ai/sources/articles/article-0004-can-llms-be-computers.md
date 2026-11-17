---
doc_type: source_article
id: article-0004
title: can_llms_be_computers
title_zh: Can LLMs Be Computers?
author: Christos Tzamos together with others at Percepta
publisher: Percepta
publish_date: 2026-03-11
article_url: https://www.percepta.ai/blog/can-llms-be-computers
source_kind: article_summary
topic_tags:
  - llm_foundations
  - model_architecture
  - ai_engineering
status: reviewed
last_reviewed: 2026-04-02
---

# 文章定位

这篇文章讨论的是一个很尖锐的问题：LLM 能不能不依赖外部工具，直接在模型内部完成长程、精确、可验证的计算。它不是普通的“模型会不会做数学题”讨论，而是试图把 transformer 从“会描述计算、会协调工具”的系统推进到“自己就是计算机”的方向。

## 核心观点

- 当代 LLM 在高层数学推理上可能很强，但在长步骤、精确计算任务上仍然脆弱，哪怕是简单乘法或 Sudoku 都常常需要外部工具。
- 工具调用和 agent 外循环虽然能补这个短板，但那只是“外挂了一个会计算的系统”，不代表模型自己具备了可靠计算能力。
- 文章的核心主张是：可以把一个可执行的计算机直接实现到 transformer 内部，让模型在自身推理循环中执行程序，而不是把程序交给外部解释器。
- 他们把 C 代码编译成 token 级程序，再通过模型内部的 WebAssembly 解释器执行，声称可在 transformer 内部稳定运行数百万步。
- 技术关键不只是“能表示计算”，而是“能高效执行计算”：他们通过 2D attention heads 和几何化查询结构，把执行型 trace 的查询从线性扫描改到对数时间。

## 值得保留的方法或框架

- 区分 tool use 和 in-model execution
- 把计算表示成只追加、不回写的 execution trace
- 用 2D heads + convex hull supporting-point query 实现对数级查找
- 把 weights 看成未来潜在的软件部署目标

## 局限与偏见

- 这篇文章带有强烈的研究展示性质，很多结果建立在特定 executor 设置和特殊解码路径上，不等于现有通用 LLM 已经具备这种能力。
- 文中展示的是“把 transformer 变成执行器”的方向，不等于所有通用推理任务都会受益于同样的参数化或推理路径。
- 一些更宏大的延展，例如“把程序直接编译进权重”或“AI 像软件一样增量生长”，目前更像研究愿景而非成熟工程结论。

## 可拆出的卡片

- `note-0003`: LLM 能否成为计算机
- 适合后续拆成 topic card：in-model execution / transformer as executor