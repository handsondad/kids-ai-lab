---
doc_type: source_note
id: note-0023
source_ref: article-0155
chapter: deepseek_2026_technical_leap
chapter_zh: DeepSeek 2026 技术跨越
source_kind: article_extract
focus_topic_clusters:
  - llm_foundations
  - reasoning
derived_cards:
  - tool-0141
  - tool-0142
  - topic-0111
  - topic-0112
status: published
last_reviewed: 2026-05-06
---

# 核心观点

- **R2 的小型化奇迹**：通过 **GRPO** 算法，DeepSeek 证明了 32B 的密集模型在经过 671B 巨型推理模型（R1）的“思维蒸馏”后，可以具备世界顶尖的逻辑推演能力。这标志着“推理民主化”的到来——普通消费级显卡即可运行顶尖 AI。
- **V4 的架构范式转移**：从静态参数向 **动态计算 (Dynamic-Computation)** 转型。1T 参数模型不再是简单的堆料，而是通过 **mHC Attention** 实现更精准的条件激活，旨在解决长文本（1M tokens）下的计算瓶颈。
- **国产芯片适配与回迁**：官方文档坦诚了在国产芯片（如昇腾 910C）训练时的挑战，最终通过软件栈优化和混合算力部署解决了 V4 的大规模预训练问题。

## 可拆出的卡片

- **主题卡**：动态计算架构 (Dynamic-Computation) 的原理。
- **主题卡**：GRPO (Group Relative Policy Optimization) 强化学习。
- **工具卡**：DeepSeek-R2, DeepSeek-V4 (Preview)。

## 学习者会怎么问

- 为什么 DeepSeek-R2 只有 32B 却这么聪明？
- 什么是动态计算架构？
- DeepSeek-V4 的万亿参数和 V3 的 MoE 有什么不同？
- 我能在自己的电脑上运行 R2 吗？

## 备注

- 信息源自 DeepSeek 2026.04 的官方技术分享。
