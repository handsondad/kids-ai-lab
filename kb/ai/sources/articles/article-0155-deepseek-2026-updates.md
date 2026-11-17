---
doc_type: source_article
id: article-0155
title: introducing-deepseek-r2-and-v4-preview
title_zh: DeepSeek 官方发布：R2 极致推论与 V4 万亿参数预览
author: DeepSeek
publisher: DeepSeek Blog
publish_date: 2026-04-19
article_url: https://www.deepseek.com/blog/introducing-r2-and-v4-preview
source_kind: article_summary
topic_tags:
  - llm_foundations
  - reasoning
  - ai_engineering
status: published
last_reviewed: 2026-05-06
---

# 文章定位

本文基于 DeepSeek 2026 年 4 月的官方发布，介绍了第二代推理模型 **DeepSeek-R2** 的正式上线，以及下一代万亿参数通用模型 **DeepSeek-V4** 的技术预览。

## 核心观点

- **DeepSeek-R2 正式发布**：
    - **极致性能与小型化**：仅 32B 参数，但在 AIME 2025 数学测试中达到 92.7%，媲美 OpenAI o3。
    - **单卡可跑**：支持在 NVIDIA RTX 4090 (24GB VRAM) 上本地运行。
    - **技术演进**：放弃了 V3 的 MoE 架构，回归 Dense Transformer，通过 **GRPO (Group Relative Policy Optimization)** 和从 R1 (671B) 模型的 **知识蒸馏** 实现了智力跃迁。
- **DeepSeek-V4 技术预览**：
    - **万亿参数 (1T Parameters)**：采用下一代 **动态计算 (Dynamic-Computation)** 架构。
    - **核心技术创新**：引入 **mHC (Multi-head Conditional) Attention** 和 **Engram Conditional Memory**。
    - **长文本突破**：原生支持 **100万 (1M) token** 上下文窗口。
    - **DSA Sparse-Attention**：进一步优化长文本处理效率与推理成本。

## 值得保留的方法或框架

- **GRPO (Group Relative Policy Optimization)**：无需奖励模型的强化学习优化方法。
- **Knowledge Distillation from R1**：大型推理模型向中型模型转移思考能力的技术。
- **Dynamic-Computation Architecture**：V4 采用的动态分配算力的新型架构。

## 局限与偏见

- R2 在极大规模多模态处理上仍处于迭代中。
- V4 目前处于技术预览阶段，完整权重尚未全部公开。

## 可拆出的卡片

- **Tool**: DeepSeek-R2
- **Tool**: DeepSeek-V4 (Preview)
- **Topic**: 动态计算架构 (Dynamic-Computation)
- **Topic**: GRPO 强化学习
