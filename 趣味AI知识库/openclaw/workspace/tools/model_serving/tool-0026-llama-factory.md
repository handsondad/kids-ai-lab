---
doc_type: tool_card
id: tool-0026
title: llama_factory
title_zh: LLaMA-Factory
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: deployment_platform
topic_clusters:
  - training_and_alignment
  - ai_engineering
  - inference_and_serving
capabilities:
  - workflow_automation
  - reasoning
  - tool_use
use_cases:
  - model_finetuning_pipeline
  - lora_qlora_training
  - train_to_serving_handoff
source_refs:
  - note-0007
  - article-0026
aliases:
  - LLaMA Factory
  - unified efficient fine-tuning
search_terms:
  - llamafactory 是什么
  - llamafactory 微调
  - lora qlora 训练工具
  - llamafactory vllm 部署
last_reviewed: 2026-04-03
---

# 工具定位

LLaMA-Factory 是面向大模型训练与微调的一体化工具链，强调低代码入口、广模型覆盖和训练到推理的衔接效率。

## 适用场景

- 你要快速搭建 LoRA/QLoRA/SFT 等微调实验流水线
- 你需要在多模型间统一训练配置与操作方式
- 你希望将训练产物尽快接入推理服务进行验证

## 核心能力

- 统一训练入口: CLI 与 WebUI 统一微调、推理与导出流程
- 多范式支持: 覆盖 SFT、偏好优化与参数高效训练方法
- 训练服务联动: 可衔接 vLLM/SGLang 等推理后端形成闭环

## 上手路径

1. 先用小模型和最小数据集跑通 LoRA 训练与推理验证。
2. 再引入评测样本与日志系统比较不同训练配置。
3. 最后将最佳产物接入服务层并建立回归验证。

## 选择边界

- 配置维度较多，初期应控制变量避免实验爆炸。
- 工具不替代数据治理，数据质量决定上限。
- 线上稳定性还需额外服务治理与监控体系支撑。

## 相关主题

- 与 `tool-0005`、`tool-0009` 强相关，可形成训练到推理部署闭环。
- 与 `tool-0027` 互补，前者偏训练执行，后者偏实验跟踪分析。
- 与 `collection-0005` 强相关，适合补齐部署栈前置训练能力。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0026`
