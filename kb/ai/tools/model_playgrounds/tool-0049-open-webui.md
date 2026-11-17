---
doc_type: tool_card
id: tool-0049
title: open_webui
title_zh: Open WebUI
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - llm_ui
  - self_hosted
  - rag
capabilities:
  - multi_model_chat
  - local_rag_ui
  - role_based_access
use_cases:
  - self_hosted_llm_portal
  - private_team_assistant
  - local_knowledge_chat
source_refs:
  - note-0007
  - article-0049
aliases:
  - open webui
  - ollama web ui
search_terms:
  - open webui
  - open webui docker
  - open webui ollama
  - self hosted llm ui
last_reviewed: 2026-04-03
---

# 工具定位

Open WebUI 是一个面向自托管场景的 LLM 交互平台，适合为个人与团队提供统一的多模型聊天、RAG 与插件化能力入口。

## 适用场景

- 你要搭建本地或内网可用的 AI 门户
- 你需要统一接入 Ollama 与 OpenAI 兼容接口
- 你希望在 UI 层快速交付可用 AI 体验给团队

## 核心能力

- 多模型会话: 支持并行使用不同模型能力
- 本地 RAG 集成: 直接在 UI 层接入知识检索
- RBAC 与企业集成: 支持权限与身份管理

## 上手路径

1. 先用 Docker 单容器模式启动并接入一个模型后端。
2. 再配置文档库与 RAG 进行私有知识问答。
3. 最后根据团队规模接入监控、存储与横向扩展能力。

## 选择边界

- UI 平台不解决底层推理吞吐瓶颈，需配合推理引擎。
- 功能多时配置复杂度会上升，需制定默认模板。
- 许可证条款与品牌要求需要部署前确认。

## 相关主题

- 与 `tool-0045` 互补: Ollama 作为后端运行层，WebUI 作为交互层。
- 与 `tool-0044` 可组合: vLLM 后端 + Open WebUI 前端。
- 与 `collection-0001` 强相关，适合作为私有化体验入口。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0049`
