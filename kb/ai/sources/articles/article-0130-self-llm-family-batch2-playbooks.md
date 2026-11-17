---
doc_type: source_article
id: article-0130
title: self-llm Family Batch2 Playbooks
source_type: repo_doc
source_url: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
author: Datawhale Contributors
language: zh-CN
retrieved_at: 2026-04-03
---

# self-llm 模型家族提炼（Batch 2）

## What This Source Is

这是对 self-llm `support_model.md` 中第二批高价值模型家族的结构化提炼，聚焦 Qwen2.5-Coder、Qwen2-VL、Llama3 系、MiniCPM 系、phi4。

## Selected Families

- Qwen2.5-Coder
- Qwen2-VL
- Llama3 系（LLaMA3、Llama3.1）
- MiniCPM 系（MiniCPM、MiniCPM-o）
- phi4

## Repeated Tutorial Patterns

1. 推理部署：FastAPI、Transformers、vLLM。
2. 应用接入：WebDemo、LangChain。
3. 任务增强：LoRA、QLoRA、GRPO。
4. 拓展场景：多模态、语音、OCR、本地化部署。

## Family-Level Highlights

- Qwen2.5-Coder：代码场景导向，覆盖从 API 到 vLLM 再到 LoRA 的完整工程链。
- Qwen2-VL：视觉语言模型路径完整，包含 LaTeX OCR 等典型任务。
- Llama3 系：兼顾社区主流推理链与本地 GGUF/Ollama 路径，适合做生态桥接。
- MiniCPM 系：从通用小模型到多模态语音模型，体现轻量与多模态并行实践。
- phi4：覆盖部署、接入、LoRA、GRPO，适合作为中小规模实验与微调样板。

## Why It Matters

Batch 2 的价值在于把“代码、视觉、多模态、轻量、本地化”五类常见落地需求纳入统一教程框架，提升迁移效率。

## Practical Takeaways for KB

- 家族卡用于表达方法，单篇教程用于执行细节。
- 对代码与视觉任务应维护独立评测基线。
- 本地化路径（GGUF/Ollama）适合作为低门槛验证入口。

## References

- c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
