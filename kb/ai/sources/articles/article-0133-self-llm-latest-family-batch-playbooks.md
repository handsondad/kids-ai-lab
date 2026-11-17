---
doc_type: source_article
id: article-0133
title: self-llm Latest Family Batch Playbooks
source_type: repo_doc
source_url: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
author: Datawhale Contributors
language: zh-CN
retrieved_at: 2026-04-03
---

# self-llm 最新模型家族提炼（Latest Batch）

## What This Source Is

这是针对 self-llm 中偏新版本模型家族的专项提炼，聚焦 Kimi-K2.5、Step-3.5-Flash、MiniMax-M2.5、gpt-oss-20b、Hunyuan-A13B-Instruct、Llama4。

## Selected Families

- Kimi-K2.5
- Step-3.5-Flash
- MiniMax-M2.5
- gpt-oss-20b
- Hunyuan-A13B-Instruct
- Llama4

## Repeated Tutorial Patterns

1. 高性能后端部署：vLLM、SGLang、Transformers。
2. 体验与接入：WebDemo、本地交互、在线体验链接。
3. 微调增强：LoRA、DPO/GRPO、SwanLab 记录。
4. 工程复现：Docker 镜像与可迁移部署模板。

## Family-Level Highlights

- Kimi-K2.5：强调 vLLM/SGLang 双后端路线，适合高并发推理实践。
- Step-3.5-Flash：部署链路精简，适合作为最新高效推理模板。
- MiniMax-M2.5：覆盖 vLLM/SGLang/Transformers 三栈，便于统一对照。
- gpt-oss-20b：同时覆盖本地部署、并发评测、LoRA 与 DPO，适合实验闭环。
- Hunyuan-A13B-Instruct：架构解读 + SGLang + LoRA，可做从理论到工程闭环。
- Llama4：以对话助手场景为入口，适合快速验证新代模型应用价值。

## Why It Matters

这批家族更贴近当前主流“高性能部署 + 快速迭代微调”的实践方向，适合优先构建最新栈能力。

## Practical Takeaways for KB

- 优先复现 vLLM/SGLang 双后端，建立统一压测脚本。
- 微调实验建议统一记录数据版本、参数与评测口径。
- 新模型家族先以最小可用闭环验证，再扩展到复杂业务。

## References

- c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
