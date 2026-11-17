---
doc_type: tool_card
id: tool-0055
title: lobehub
title_zh: LobeHub
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - agent_workspace
  - multi_agent
  - self_hosted_ui
capabilities:
  - agent_team_workspace
  - plugin_ecosystem
  - personal_memory_controls
use_cases:
  - collaborative_agent_operations
  - self_hosted_ai_frontend
  - multi_model_agent_playground
source_refs:
  - note-0007
  - article-0055
aliases:
  - lobehub
  - lobe chat workspace
search_terms:
  - lobehub
  - lobehub self hosting
  - agent workspace platform
  - lobehub plugins
last_reviewed: 2026-04-03
---

# 工具定位

LobeHub 是以 Agent 协作为核心的人机工作台，适合作为团队级 AI 前端层，承载多模型交互、插件扩展与长期记忆协同。

## 适用场景

- 你要给团队提供统一的 Agent 协作工作台
- 你要在前端层管理多模型、多插件与多角色协作
- 你希望在自托管环境中沉淀个人与团队上下文

## 核心能力

- Agent 工作单元化: 任务围绕 Agent 协作组织
- 协作网络能力: 支持多 Agent 并行与共享上下文
- 自托管与插件扩展: 便于定制组织内 AI 工作流

## 上手路径

1. 先按 Docker 或云部署路径启动可用实例。
2. 再配置模型接入与基础插件形成最小可用工作台。
3. 最后为团队定义协作规则、记忆治理与权限边界。

## 选择边界

- 前端协作平台不替代底层推理与数据治理体系。
- 插件与生态扩展快，需建立稳定性与安全审查流程。
- 团队使用前应先定义清晰的协作协议与维护责任。

## 相关主题

- 与 `tool-0049` 同属交互层，可按生态与协作模式对照选型。
- 与 `tool-0053` 可组合: LiteLLM 做网关，LobeHub 做工作台。
- 与 `collection-0001` 强相关，适合作为协作化 Agent 入口。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0055`
