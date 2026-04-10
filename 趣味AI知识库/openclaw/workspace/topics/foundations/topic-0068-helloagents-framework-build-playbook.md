---
doc_type: topic_card
id: topic-0068
title: helloagents_framework_build_playbook
title_zh: HelloAgents 自建框架手册
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - agent
  - ai_engineering
  - software_architecture
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0067
source_refs:
  - note-0012
  - article-0139
aliases:
  - build your own agent framework
  - helloagents architecture
search_terms:
  - agent framework from scratch
  - tool abstraction everything as tool
  - helloagents core agents tools
last_reviewed: 2026-04-08
---

# 一句话定义

HelloAgents 自建框架手册用于从零构建轻量、可扩展、教学友好的 Agent 框架，并形成可持续迭代的工程底座。

## 关键路径

1. 以 core/agents/tools 三层划分实现职责分离。
2. 用统一工具抽象承载记忆、RAG、协议、评估等能力模块。
3. 建立版本化演进路径，保证学习过程可复现。
4. 通过测试与示例持续验证框架稳定性。

## 实操要点

- 优先保持接口稳定，再扩展功能广度。
- 控制依赖复杂度，避免重型框架耦合。
- 遇到场景差异时优先新增工具而非修改核心循环。

## 检索提示

- 适用于希望从框架使用者升级为框架构建者的开发者。
