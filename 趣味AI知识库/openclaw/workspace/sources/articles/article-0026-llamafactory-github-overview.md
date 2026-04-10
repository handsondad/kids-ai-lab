---
doc_type: source_article
id: article-0026
title: llamafactory_github_overview
title_zh: LLaMA-Factory 官方仓库概览
author: hiyouga and contributors
publisher: GitHub
publish_date: 2026-04-03
article_url: https://github.com/hiyouga/LlamaFactory
source_kind: article_summary
topic_tags:
  - training_and_alignment
  - ai_engineering
  - inference_and_serving
status: reviewed
last_reviewed: 2026-04-03
---

# 文章定位

这是 LLaMA-Factory 官方仓库入口页的能力概览，核心定位是统一高效微调框架，强调低代码 CLI/WebUI、广泛模型覆盖与多种训练范式支持。

## 核心观点

- LLaMA-Factory 将微调、推理、合并导出等流程整合为统一工作流。
- 支持 100+ LLM/VLM 与多种训练方法，覆盖 SFT、DPO、PPO、LoRA、QLoRA 等。
- 提供 CLI、WebUI 与 Docker 等多入口，降低上手和迁移成本。
- 可衔接 vLLM/SGLang 和实验跟踪工具，形成训练到服务闭环。

## 值得保留的方法或框架

- 一体化训练流水线: 把数据准备、训练、推理验证与导出纳入同一工具链。
- 参数高效训练优先: 在资源约束下优先采用 LoRA/QLoRA 等方案。
- 训练与服务联动: 训练结果可快速进入 API 化部署路径。

## 局限与偏见

- 仓库覆盖能力很广，初学者容易因选项过多而路径分散。
- 实际效果强依赖数据质量、任务定义和评测设计。
- 不同模型与后端组合对环境依赖敏感，需要严格版本治理。

## 可拆出的卡片

- `tool-0026`: LLaMA-Factory 工具卡
- `collection-0005`: 模型部署与推理栈精选（训练前置能力补强）
