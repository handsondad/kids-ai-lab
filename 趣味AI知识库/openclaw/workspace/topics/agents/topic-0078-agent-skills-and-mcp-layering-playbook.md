---
doc_type: topic_card
id: topic-0078
title: agent_skills_and_mcp_layering_playbook
title_zh: Agent Skills 与 MCP 分层手册
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - agent
  - protocol
  - context_engineering
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0073
source_refs:
  - note-0012
  - article-0141
aliases:
  - skills mcp hybrid architecture
  - progressive disclosure skills
search_terms:
  - agent skills mcp
  - progressive disclosure context
  - tool capability layering
last_reviewed: 2026-04-08
---

# 一句话定义

Agent Skills 与 MCP 分层手册用于将“工具连接能力”和“领域执行能力”解耦，实现低成本、高可控的智能体能力扩展。

## 关键路径

1. MCP 层负责工具和资源连接标准化。
2. Skills 层负责任务策略、领域 SOP 和组合逻辑。
3. 采用渐进式披露机制控制上下文加载成本。
4. 通过混合架构实现复用与可维护性平衡。

## 实操要点

- 不把业务策略硬编码在协议接入层。
- 优先元数据轻加载，再按需加载详细技能内容。
- 对高频技能建立版本和评测基线。

## 检索提示

- 适用于复杂工具生态下的 Agent 能力治理场景。
