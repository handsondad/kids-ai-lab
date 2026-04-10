---
doc_type: source_article
id: article-0131
title: self-llm Family Batch3 Playbooks
source_type: repo_doc
source_url: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
author: Datawhale Contributors
language: zh-CN
retrieved_at: 2026-04-03
---

# self-llm 模型家族提炼（Batch 3）

## What This Source Is

这是对 self-llm `support_model.md` 第三批家族的结构化提炼，聚焦 Qwen2.5、Gemma2、Yuan2.0、XVERSE、CharacterGLM。

## Selected Families

- Qwen2.5
- Gemma2
- Yuan2.0（含 Yuan2.0-M32）
- XVERSE
- CharacterGLM

## Repeated Tutorial Patterns

1. 部署调用：FastAPI、Transformers、vLLM。
2. 应用接入：WebDemo、LangChain。
3. 微调增强：LoRA/QLoRA 以及可视化记录。
4. 特性扩展：推理链实现、角色对话、参数规模迁移。

## Family-Level Highlights

- Qwen2.5：部署、接入、微调和 o1-like 推理链完整，适合作为通用中文主力基线。
- Gemma2：典型的中等参数模型路线，便于做成本和质量平衡实验。
- Yuan2.0：覆盖 2B 与 M32 形态，适合练习多参数规模的统一部署方式。
- XVERSE：经典中文模型路线完整，便于与主流家族做横向对照。
- CharacterGLM：强调角色/人格化交互场景，适合专项对话应用验证。

## Why It Matters

Batch 3 把通用基线、参数规模迁移、角色化任务三类需求纳入同一方法框架，帮助建立更稳的家族选型策略。

## Practical Takeaways for KB

- 在同一评测集上做跨家族比较，优先得出可执行选型结论。
- 参数规模变化（如 Yuan2.0）应先验证接口兼容，再做性能压测。
- 角色化模型（CharacterGLM）建议单独维护安全和风格评测维度。

## References

- c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
