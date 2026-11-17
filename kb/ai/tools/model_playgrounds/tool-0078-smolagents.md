---
doc_type: tool_card
id: tool-0078
title: smolagents
title_zh: smolagents
status: reviewed
language: zh-CN
learning_level: level_200
tool_category: model_playground
topic_clusters:
  - code_agent
  - lightweight_framework
  - secure_execution
capabilities:
  - codeagent_and_toolcallingagent
  - model_tool_modality_agnostic
  - sandbox_execution_options
use_cases:
  - minimal_agent_framework_learning
  - code_executing_agent_prototyping
  - hf_ecosystem_agent_integration
source_refs:
  - note-0007
  - article-0078
aliases:
  - hf smolagents
  - huggingface smolagents
search_terms:
  - smolagents codeagent
  - smolagents sandbox
  - smolagents mcp tools
  - smolagents litellm
last_reviewed: 2026-04-03
---

# 工具定位

smolagents 是 Hugging Face 的轻量代理框架，突出 CodeAgent 代码动作范式和低抽象学习成本。

## 适用场景

- 你要快速理解代理框架核心执行机制
- 你要构建代码执行型代理并接入沙箱隔离
- 你要在 HF/LiteLLM/MCP 生态中做轻量实验

## 核心能力

- 双代理范式: CodeAgent 与 ToolCallingAgent 可选
- 多后端兼容: 模型、工具、模态都可自由替换
- 安全执行支持: E2B、Docker、WASM 等沙箱路径

## 上手路径

1. 先用默认工具包跑通 quick demo。
2. 再切到 CodeAgent 验证代码动作链路。
3. 最后引入沙箱并加上工具权限限制。

## 选择边界

- 轻量框架不等于免治理，生产化仍需外围工程。
- 本地执行器不是安全边界，不能执行不可信代码。
- 复杂多团队协作需补充平台与审计能力。

## 相关主题

- 与 `tool-0067` 对照: smolagents 更轻量，OpenAI Agents SDK 更偏规范化生产接口。
- 与 `tool-0076` 可组合: smolagents 做策略实验，OpenHands 做开发执行界面。
- 与 `collection-0001` 强相关，补齐代码执行型代理范式。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0078`
