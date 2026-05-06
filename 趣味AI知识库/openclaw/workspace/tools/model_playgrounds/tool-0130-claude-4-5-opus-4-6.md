---
doc_type: tool_card
id: tool-0130
title: claude-3-7-and-4-6-series
title_zh: Claude 3.7 / 4.6 系列 (Anthropic)
status: published
language: zh-CN
learning_level: level_100
tool_category: model_playground
topic_clusters:
  - llm_foundations
  - agents
capabilities:
  - coding
  - text_generation
  - reasoning
  - image_understanding
use_cases:
  - software_engineering
  - high_fidelity_writing
  - long_context_analysis
source_refs:
  - note-0019
  - note-0022
aliases:
  - Claude 3.7 Sonnet
  - Claude Sonnet 4.6
  - Claude Opus 4.7
search_terms:
  - Claude 3.7 混合推理
  - Claude 4.6 上下文长度
  - Claude Code 官方介绍
last_reviewed: 2026-05-06
---

# 工具定位

Anthropic 的 Claude 系列以 **混合推理 (Hybrid Reasoning)** 和 **1M token 长上下文** 著称，是目前最受开发者欢迎的编码与智能体模型。

## 适用场景

- **混合任务处理**：Claude 3.7 Sonnet 可以在普通模式（快）和扩展思考模式（深）之间无缝切换。
- **超大规模项目分析**：4.6 系列支持 1M token 上下文，可一次性读入整个微服务架构的代码库。
- **高保真软件工程**：在 SWE-bench Verified 等基准上保持行业领先。

## 核心能力

- **混合推理架构**：首个将标准模型与推理模型合二为一的架构。
- **Thinking Budget Control**：API 用户可以精细控制模型“思考”的 Token 预算。
- **自适应思考 (Adaptive Thinking)**：模型能自动根据任务复杂度调整推理步数（4.6+ 版本）。
- **卓越的 Computer Use**：在操作浏览器和本地系统方面表现出极高的稳定性和指令遵循度。

## 上手路径

1. **Claude.ai**：通过网页版使用 Sonnet 3.7 或 4.6。
2. **API**：通过 `claude-3-7-sonnet` 或 `claude-sonnet-4-6` 接口调用。
3. **Claude Code**：安装 CLI 工具进行本地编码委派。

## 上手路径

1. **Claude.ai**：直接访问网页版进行对话。
2. **Claude Code**：安装 CLI 工具，在终端直接让 Claude 修改本地项目。
3. **Cursor 集成**：在 Cursor IDE 中选择 Claude Opus 4.6 作为底层模型。

## 选择边界

- **合规性限制**：由于安全设置较严，有时会拒绝执行一些可能被判定为敏感但实际合法的请求。

## 相关主题

- [topic-0105-agentic-ai-autonomous-workflows](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/topics/agents/topic-0105-agentic-ai-autonomous-workflows.md)

## 来源说明

- 来源笔记 ID: `note-0019`
