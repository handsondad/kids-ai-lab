---
doc_type: source_article
id: article-0129
title: self-llm Family Batch1 Playbooks
source_type: repo_doc
source_url: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
author: Datawhale Contributors
language: zh-CN
retrieved_at: 2026-04-03
---

# self-llm 模型家族提炼（Batch 1）

## What This Source Is

这是对 self-llm `support_model.md` 中高密度模型家族的第一批结构化提炼，聚焦 Qwen3、ChatGLM3、DeepSeek、InternLM、Gemma3、GLM-4 系。

## Selected Families

- Qwen3
- ChatGLM3
- DeepSeek（含 DeepSeek-R1-Distill、DeepSeek-Coder 相关条目）
- InternLM（含 InternLM2/InternLM3）
- Gemma3
- GLM-4 系（含 GLM-4、GLM-4.1-Thinking、GLM-4.5-Air、GLM-4.7-Flash）

## Repeated Tutorial Patterns

1. 基础推理部署：FastAPI、Transformers、vLLM、SGLang。
2. 应用接入：WebDemo、LangChain、可视化交互页面。
3. 能力增强：LoRA/QLoRA、DPO/GRPO、SwanLab 记录。
4. 工程落地：Docker 镜像、平台适配（AMD/Ascend）。

## Family-Level Highlights

- Qwen3：覆盖从结构解析到部署、评测、微调、GRPO 的完整闭环，并包含 AMD 条目。
- ChatGLM3：强调通用接入能力（Transformers/FastAPI/WebDemo/LangChain）与可解释的本地实践。
- DeepSeek：兼具通用模型与代码模型实践，覆盖 MoE、R1-Distill、Coder 微调链路。
- InternLM：从早期 InternLM 到 InternLM2/3，体现版本迁移与任务形态升级。
- Gemma3：在基础部署之外补充 EvalScope、GRPO 与 AMD 环境适配。
- GLM-4 系：形成连续版本线，便于比较“新版本能力 + 同类部署路径”。

## Why It Matters

相较单模型教程，家族化提炼更利于复用：同一动作清单可跨模型迁移，降低技术栈切换成本。

## Practical Takeaways for KB

- 可把家族卡作为“选型入口”，把单模型教程作为“执行细节”。
- 先按家族建立标准流程，再在具体模型上做性能与效果微调。
- 版本系模型（如 GLM-4.*、InternLM*）应单独维护迁移对照。

## References

- c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
