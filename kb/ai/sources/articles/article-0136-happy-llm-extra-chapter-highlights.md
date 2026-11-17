---
doc_type: source_article
id: article-0136
title: happy-llm Extra-Chapter Highlights
source_type: repo_doc
source_url: c:/Xiuqin/Code/xiuqin/happy-llm-main/Extra-Chapter/Readme.md
author: Happy-LLM Contributors
language: zh-CN
retrieved_at: 2026-04-08
---

# happy-llm Extra-Chapter 高价值专题提炼

## What This Source Is

这是对 happy-llm Extra-Chapter 的专题层提炼，目标是把社区增量内容转化为可复用工程方法卡。

## Selected High-Value Themes

- 小模型微调的成本与隐私决策（0.6B 级任务化模型）。
- 训练与推理中的生成策略（Greedy、Sampling、Beam 等）。
- Test-time scaling 与思考预算（vLLM + thinking budget）。
- 多模态拼接微调（Qwen3 与 SmolVLM2 模块拼接）。
- 知识引导检索增强（CDDRS 动态语义分块与细粒度检索）。

## Why It Matters

Extra-Chapter 的价值在于“主教程之外的可执行创新”：覆盖了模型选择、推理控制、多模态构建与专业RAG优化等热点能力。

## Practical Takeaways

1. 先用小模型微调完成成本受控的任务闭环，再评估大模型替换。
2. 在推理阶段加入生成策略和思考预算控制，降低不稳定输出风险。
3. 多模态系统可通过模块拼接快速验证，不必从零训练全模型。
4. 专业场景 RAG 要重视动态分块和细粒度检索，而非仅向量相似度。

## References

- c:/Xiuqin/Code/xiuqin/happy-llm-main/Extra-Chapter/why-fine-tune-small-large-language-models/readme.md
- c:/Xiuqin/Code/xiuqin/happy-llm-main/Extra-Chapter/generation-method/readme.md
- c:/Xiuqin/Code/xiuqin/happy-llm-main/Extra-Chapter/s1-vllm-thinking-budget/readme.md
- c:/Xiuqin/Code/xiuqin/happy-llm-main/Extra-Chapter/vlm-concatenation-finetune/README.md
- c:/Xiuqin/Code/xiuqin/happy-llm-main/Extra-Chapter/CDDRS/readme.md
