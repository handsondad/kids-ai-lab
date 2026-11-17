---
doc_type: topic_card
id: topic-0036
title: step_3_5_flash_practical_playbook
title_zh: Step-3.5-Flash 实操手册（轻量高效推理）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - ai_engineering
  - inference_and_serving
  - performance_optimization
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0017
source_refs:
  - note-0010
  - article-0133
aliases:
  - Step-3.5-Flash 落地路径
  - Step Flash 推理优化
search_terms:
  - step-3.5-flash vllm sglang
  - step flash 部署
  - step flash lora
last_reviewed: 2026-04-03
---

# 一句话定义

Step-3.5-Flash 实操手册是一条面向轻量高效推理的最新模型落地路径，强调快速部署与可对比优化。

## 典型链路

1. 先用 vLLM 打通最小可用服务。
2. 用 SGLang 进行同任务并发对照。
3. 可选接入 LoRA 进行领域适配。
4. 用 Docker 固化可迁移部署模板。

## 实操要点

- 先确认稳定性再追求峰值吞吐。
- 小模型易受提示词漂移影响，需固定模板。
- 建议把性能压测和效果评测分开执行。

## 检索提示

- 适用于需要快速试验最新轻量模型并追求部署效率的场景。
