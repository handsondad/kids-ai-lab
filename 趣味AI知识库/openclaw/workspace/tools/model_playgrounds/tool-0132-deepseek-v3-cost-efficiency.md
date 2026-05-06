---
doc_type: tool_card
id: tool-0132
title: deepseek-v3-cost-efficiency
title_zh: DeepSeek-V3 / R1 (深度求索)
status: published
language: zh-CN
learning_level: level_100
tool_category: model_serving
topic_clusters:
  - llm_foundations
capabilities:
  - text_generation
  - reasoning
  - coding
use_cases:
  - cost_effective_api
  - local_deployment
source_refs:
  - note-0019
aliases:
  - DeepSeek V3
  - DeepSeek R1
search_terms:
  - DeepSeek-V3 价格
  - DeepSeek-R1 推理能力
  - DeepSeek 为什么便宜
last_reviewed: 2026-05-06
---

# 工具定位

DeepSeek-V3 是中国顶尖 AI 实验室深度求索在 2025 年发布的超大规模 MoE 模型，以“极致性价比”和“媲美顶尖模型的能力”彻底改变了大模型市场的定价规则。

## 适用场景

- **高频大规模调用**：API 价格极低（约为 GPT-4 的 1/7），适合需要海量并发的企业级应用。
- **本地化私有部署**：提供开源权重，支持在消费级显卡集群上进行高效部署。
- **科研与数学**：R1 推理模型在数学和编程逻辑上表现极其强悍。

## 核心能力

- **671B MoE 架构**：通过稀疏专家模型，在保证高性能的同时大幅降低了推理功耗。
- **DSA (Sparse Attention)**：稀疏注意力机制，使长文本处理效率提升 50% 以上。
- **卓越的逻辑推理**：R1 系列模型在 AIME、Math 等评测中与 OpenAI 的推理模型不相上下。

## 上手路径

1. **DeepSeek 官网/APP**：直接进行对话体验。
2. **DeepSeek API**：极简集成，支持 OpenAI 兼容接口。
3. **本地部署**：通过 Ollama、vLLM 等工具加载开源权重。

## 选择边界

- **多模态稍弱**：在视觉和音频处理能力上，相比 Gemini 3 和 GPT-5 仍有一定差距。

## 相关主题

- [topic-0021-deepseek-practical-playbook](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/topics/foundations/topic-0021-deepseek-practical-playbook.md)

## 来源说明

- 来源笔记 ID: `note-0019`
