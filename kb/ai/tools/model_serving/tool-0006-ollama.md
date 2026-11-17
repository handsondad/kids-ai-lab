---
doc_type: tool_card
id: tool-0006
title: ollama
title_zh: Ollama
status: reviewed
language: zh-CN
learning_level: level_100
tool_category: deployment_platform
topic_clusters:
  - inference_and_serving
  - ai_overview
  - ai_engineering
capabilities:
  - text_generation
  - workflow_automation
  - reasoning
use_cases:
  - local_model_runtime
  - rapid_prototyping
  - offline_experiment
source_refs:
  - note-0007
aliases:
  - 本地模型运行器
  - 本地 LLM 快速部署工具
search_terms:
  - ollama 是什么
  - 本地运行大模型工具
  - ollama 和 vllm 区别
  - ollama 适合什么场景
last_reviewed: 2026-04-02
---

# 工具定位

Ollama 是一个面向本地运行与快速实验的开源模型运行工具。它的优势是低门槛和启动快，适合个人学习、原型验证和轻量离线场景。

## 适用场景

- 想在本地快速跑通开源模型体验与原型
- 需要离线或半离线的实验环境
- 需要先低成本验证应用想法，再决定是否上服务端栈

## 核心能力

- 本地快速启动：适合从“想试试”到“跑起来”
- 开发友好：适合配合本地脚本、桌面应用或小型 agent 原型
- 学习友好：便于建立对模型运行参数和行为的直觉

## 上手路径

1. 先在本机跑通一个模型和最小对话接口。
2. 再把你的一个真实任务接进去，验证输出稳定性和资源占用。
3. 最后再决定是否迁移到 vLLM 这类服务端引擎。

## 选择边界

- 如果目标是团队级高并发服务，Ollama 通常不是首选。
- 如果任务需要严格 SLA 或复杂服务治理，建议转向服务端推理栈。
- 本地跑通不等于线上可用，仍需评测与回归验证。

## 相关主题

- 与 `collection-0005` 强相关，是部署推理栈里的本地运行路径代表。
- 与 `tool-0005` 构成常见迁移路径：先 Ollama 原型，再 vLLM 服务化。
- 与 `topic-0001` 相关，因为它帮助学习者把模型概念落到可运行体验。

## 来源说明

- 来源笔记 ID: `note-0007`