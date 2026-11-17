---
doc_type: tool_card
id: tool-0045
title: ollama
title_zh: Ollama
status: reviewed
language: zh-CN
learning_level: level_200
tool_category: model_playground
topic_clusters:
  - local_llm
  - model_runtime
  - developer_tooling
capabilities:
  - model_inference
  - api_service
  - workflow_automation
use_cases:
  - local_model_prototyping
  - private_llm_assistant
  - offline_friendly_ai_workflows
source_refs:
  - note-0007
  - article-0045
aliases:
  - ollama runtime
  - local llm with api
search_terms:
  - ollama
  - ollama run model
  - ollama api chat
  - local llm deployment
last_reviewed: 2026-04-03
---

# 工具定位

Ollama 是本地模型运行与管理入口，适合快速搭建私有、低门槛的本地 LLM 体验与开发环境。

## 适用场景

- 你要在本地快速验证模型效果和提示策略
- 你要构建隐私优先的个人或小团队 AI 工作流
- 你要用 API 把本地模型接入应用或自动化脚本

## 核心能力

- 一键式模型运行: `ollama run` 快速启动
- 本地 REST API: 便于程序化调用与集成
- 跨平台支持: 桌面与容器路径都可落地

## 上手路径

1. 先安装并运行一个基础模型做交互验证。
2. 再通过 API 在脚本中接入聊天或生成能力。
3. 最后结合 IDE/RAG/监控集成形成工作流。

## 选择边界

- 本地资源限制会影响模型大小和并发能力。
- 大规模生产服务一般需迁移到专用推理栈。
- 不同模型在本地体验差异大，需按任务实测。

## 相关主题

- 与 `tool-0044` 形成梯度: 本地原型 -> 高吞吐服务。
- 与 `tool-0043` 互补: 本地模型 + 本地知识增强。
- 与 `collection-0001` 强相关，适合作为开源模型实践入口。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0045`
