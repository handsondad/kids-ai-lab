---
doc_type: tool_card
id: tool-0134
title: qclaw-quantized-agent
title_zh: qclaw (快速量化智能体)
status: published
language: zh-CN
learning_level: level_200
tool_category: workflow_builder
topic_clusters:
  - agents
  - inference_and_serving
capabilities:
  - reasoning
  - planning
use_cases:
  - edge_computing
  - low_latency_agents
source_refs:
  - note-0020
aliases:
  - Quick Claw
search_terms:
  - qclaw 是什么
  - 如何提升 OpenClaw 响应速度
last_reviewed: 2026-05-06
---

# 工具定位

qclaw 是 OpenClaw 生态中的高性能分支，重点在于通过“量化（Quantization）”技术和异步 I/O 优化，在普通家用电脑或轻量级服务器上实现极速的智能体响应。

## 适用场景

- **实时交互任务**：需要 AI 在几百毫秒内给出动作决策的场景。
- **本地模型运行**：配合 llama.cpp 或 vLLM 运行量化后的本地大模型。

## 核心能力

- **推理路径优化**：裁剪了非核心的中间件，缩短了从指令输入到动作执行的链路。
- **内存压缩**：相比标准版 OpenClaw，运行内存占用减少约 40%。

## 上手路径

1. **安装**：通过 `qclaw-cli` 进行快速安装。
2. **选择量化模型**：推荐搭配 Q4_K_M 或 IQ4_XS 等量化格式的模型运行。

## 选择边界

- **扩展性**：为了追求速度，部分过于复杂的第三方技能可能无法兼容。

## 相关主题

- [topic-0106-openclaw-variants-and-nicknames](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/topics/agents/topic-0106-openclaw-variants-and-nicknames.md)

## 来源说明

- 来源笔记 ID: `note-0020`
