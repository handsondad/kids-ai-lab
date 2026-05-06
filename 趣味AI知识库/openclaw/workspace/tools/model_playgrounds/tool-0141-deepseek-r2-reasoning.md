---
doc_type: tool_card
id: tool-0141
title: deepseek-r2-reasoning
title_zh: DeepSeek-R2 (极致推理模型)
status: published
language: zh-CN
learning_level: level_200
tool_category: model_playground
topic_clusters:
  - reasoning
  - llm_foundations
capabilities:
  - reasoning
  - coding
  - text_generation
use_cases:
  - math_and_logic
  - autonomous_coding
  - local_deployment
source_refs:
  - note-0023
aliases:
  - DeepSeek R2
search_terms:
  - DeepSeek-R2 官方发布
  - R2 模型 4090 能跑吗
  - DeepSeek R2 AIME 成绩
last_reviewed: 2026-05-06
---

# 工具定位

DeepSeek-R2 是 DeepSeek 在 2026 年 4 月发布的第二代推理专用模型。它以 32B 的轻量化尺寸实现了媲美顶级闭源模型的逻辑推理能力，是本地部署推理 AI 的首选。

## 适用场景

- **本地逻辑推演**：支持在 NVIDIA RTX 4090 等 24G 显存的显卡上全速运行。
- **数学与编程竞赛**：AIME 2025 得分 92.7%，适合处理高难度的 STEM 问题。
- **智能体大脑**：作为 Agent 的核心逻辑节点，提供稳定的多步规划。

## 核心能力

- **思维蒸馏技术**：继承了 671B 巨型模型 R1 的思考模式。
- **GRPO 强化学习**：原生支持自我演进和反思，输出包含详细的思考链（Thinking Process）。
- **极高性价比**：相比同级别的闭源推理 API，成本降低了 70% 以上。

## 上手路径

1. **DeepSeek 官网**：直接在网页端开启“R2 推理模式”。
2. **本地部署**：通过 Ollama 或 vLLM 运行 `deepseek-r2-32b` 权重。
3. **API 集成**：通过兼容 OpenAI 的标准接口接入。

## 相关主题

- [topic-0112-grpo-reinforcement-learning](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/topics/foundations/topic-0112-grpo-reinforcement-learning.md)
