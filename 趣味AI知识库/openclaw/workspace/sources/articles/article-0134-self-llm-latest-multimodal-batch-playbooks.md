---
doc_type: source_article
id: article-0134
title: self-llm Latest Multimodal Batch Playbooks
source_type: repo_doc
source_url: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
author: Datawhale Contributors
language: zh-CN
retrieved_at: 2026-04-03
---

# self-llm 最新多模态/特种能力批次提炼

## What This Source Is

这是针对 self-llm 中“非传统纯文本对话”方向的新模型能力批次提炼，聚焦 Qwen3-VL、BGE-M3、Kimi-VL、SpatialLM、Hunyuan3D-2。

## Selected Families

- Qwen3-VL-4B-Instruct
- BGE-M3
- Kimi-VL
- SpatialLM
- Hunyuan3D-2

## Repeated Tutorial Patterns

1. 多模态部署：FastAPI、vLLM、Gradio、API Server。
2. 任务导向微调：LoRA（如 OCR、视觉理解）。
3. 专项应用：图文理解、代码检索嵌入、3D 点云理解与生成。
4. 工程复现：Docker 镜像与案例化 Demo。

## Family-Level Highlights

- Qwen3-VL：覆盖结构解析、部署、微调案例，适合视觉语言主线实践。
- BGE-M3：聚焦 embedding 微调，直接服务代码检索和 RAG 召回质量。
- Kimi-VL：以技术报告解读和网页对话助手切入视觉推理落地。
- SpatialLM：定位 3D 点云理解与目标检测，是空间智能能力补位。
- Hunyuan3D-2：覆盖部署、代码调用、Gradio、API Server 与镜像，适合 3D 生产链路验证。

## Why It Matters

该批次把多模态与空间智能能力纳入同一工程框架，能补齐“仅文本模型”在复杂场景中的能力短板。

## Practical Takeaways for KB

- 文本主线之外应单独维护多模态和 3D 任务评测集。
- 先打通输入输出链路再做任务优化，避免早期陷入微调细节。
- embedding 路线（BGE-M3）建议与主模型路线并行建设。

## References

- c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
