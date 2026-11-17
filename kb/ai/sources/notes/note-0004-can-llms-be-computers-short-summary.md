---
doc_type: source_note
id: note-0004
source_ref: article-0004
chapter: quick_summary
chapter_zh: Can LLMs Be Computers 首页摘要版
source_kind: article_summary
focus_topic_clusters:
  - llm_foundations
  - ai_engineering
derived_cards:
  - topic-0003
  - collection-0002
status: reviewed
last_reviewed: 2026-04-02
---

# 核心观点

- 这篇文章最重要的判断是：今天的大模型通常会“安排计算”，但并不真正“自己执行计算”。
- 所谓 tool use，本质上是模型把代码或指令交给外部系统跑；所谓 in-model execution，则是模型在自身推理循环里直接执行程序。
- 作者展示了一种研究方向：把 WebAssembly 执行器做进 transformer 内部，并通过特殊的 2D attention fast path，让长程 execution trace 的查询成本从线性降到对数级。
- 这不等于现有通用 LLM 已经不需要工具，而是说明“模型内部可执行计算”正在从理论可能性变成工程探索方向。

## 适合首页引用的短摘要

这篇文章讨论的不是“大模型会不会做题”，而是更底层的问题：大模型到底是在调用计算，还是自己成为计算机。作者给出的方向是，把执行器直接做进 transformer 内部，让模型沿着 execution trace 自己运行程序，而不是把任务交给外部解释器。它最有价值的地方，不是立刻替代工具调用，而是把“模型内部计算能力”这个长期问题正式推到了台前。

## 备注

- 这份摘要适合放在知识库首页、收藏夹或阅读入口，帮助快速回忆文章的核心命题。