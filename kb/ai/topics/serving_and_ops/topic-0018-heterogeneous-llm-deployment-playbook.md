---
doc_type: topic_card
id: topic-0018
title: heterogeneous_llm_deployment_playbook
title_zh: 异构硬件 LLM 部署手册（AMD/Ascend）
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - inference_and_serving
  - ai_engineering
  - deployment
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0017
  - topic-0007
source_refs:
  - note-0010
  - article-0128
aliases:
  - 多硬件大模型部署
  - AMD Ascend 部署路径
search_terms:
  - amd 部署 llm
  - ascend mindie vllm sglang
  - 异构硬件部署手册
last_reviewed: 2026-04-03
---

# 一句话定义

异构硬件 LLM 部署手册是一套把同一模型能力映射到不同硬件栈（如 AMD、Ascend）的可迁移部署方法。

## 为什么重要

- 现实生产环境常常不是单一 CUDA 栈，硬件多样化是常态。
- 统一模型目标下，部署链路差异会直接影响性能、稳定性和可维护性。
- 先建立“硬件无关的方法论”，再做“硬件相关的参数调优”。

## 两层方法

1. 通用层：模型下载、服务接口、评测指标、回归流程。
2. 平台层：驱动固件、运行时框架、量化策略、性能调优。

## AMD/Ascend 对照要点

- AMD 路线关注 NPU/GPU 驱动与平台 SDK 兼容。
- Ascend 路线关注 MindIE、vLLM-ascend、sglang-ascend 生态差异。
- 两者都需要把性能测试与精度测试纳入发布前门禁。

## 落地步骤

1. 先确定统一的 API 和评测基线。
2. 再按平台完成环境和运行时适配。
3. 做吞吐/时延/精度三维对比。
4. 根据业务约束做平台选型与回滚策略。

## 常见误区

- 只看峰值吞吐，不看稳定性和精度漂移。
- 直接复用另一平台参数，忽略运行时差异。
- 没有统一评测基线，导致跨平台结果不可比。

## 检索提示

- 适用于将同一 LLM 服务迁移到 AMD 或 Ascend 等异构硬件平台的部署与评测手册。