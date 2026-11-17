---
doc_type: source_article
id: article-0128
title: self-llm Model Tutorial Matrix
source_type: repo_doc
source_url: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
author: Datawhale Contributors
language: zh-CN
retrieved_at: 2026-04-03
---

# self-llm 模型教程矩阵

## What This Source Is

这是对 self-llm-master 中模型教程矩阵的结构化提取，聚焦“覆盖范围、教程类型、平台支持与复用价值”。

## Coverage Snapshot

- 仓库实操资产总量（md/ipynb/py）约 385 个文件。
- `models/` 下文档约 249 篇，覆盖 50+ 模型家族。
- 目录组织以“模型名/专题名 -> 部署、调用、微调、评测”展开。

## Tutorial Pattern (Common Template)

大部分模型条目遵循类似模板：

1. FastAPI 或 Transformer 推理部署。
2. WebDemo / Gradio 交互部署。
3. LangChain 或知识库接入。
4. LoRA / QLoRA / DPO / GRPO 微调。
5. EvalScope 或并发/精度评测。
6. Docker 镜像复现（部分条目）。

## Model Family Density (by markdown count)

以下是仓库内主要模型家族文档量（按目录统计）：

- Qwen3: 11
- Qwen: 10
- Qwen1.5: 8
- Qwen2.5: 8
- ChatGLM: 7
- DeepSeek: 7
- InternLM: 7
- Gemma3: 7
- CharacterGLM: 6
- DeepSeek-R1-Distill-Qwen: 6
- GLM-4: 6
- Llama3_1: 6
- Qwen2.5-Coder: 6
- Qwen2-VL: 6
- XVERSE: 6
- Yuan2.0: 6
- 其余模型家族多为 1-5 篇，覆盖部署到微调关键环节。

## Hardware-Specific Extensions

- AMD 专区：提供 Gemma3 与 Qwen3 的 AMD 环境准备与部署教程。
- Ascend 专区：提供 Qwen3 的 MindIE、vLLM-ascend、sglang-ascend 路线，以及性能/精度测试入口。
- Apple M 专区：独立目录承接 MLX 相关实践。

## Why It Matters

该矩阵的高价值在于“方法可迁移”：即使目标模型变化，也可复用同一条工程路径（部署 -> 集成 -> 微调 -> 评测）。

## Practical Takeaways for KB

- 可把 self-llm 作为“模型上新时的动作清单模板”。
- 可用其模型家族组织方式作为知识库后续扩展的命名和目录参考。
- 可沉淀成跨模型统一 SOP，而不是模型孤岛教程。

## References

- Main list: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
- AMD list: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model_amd.md
- Ascend list: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model_Ascend.md