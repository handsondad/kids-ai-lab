---
doc_type: topic_card
id: topic-0107
title: mcp-and-a2a-protocols
title_zh: 智能体标准化协议 (MCP & A2A)
status: published
language: zh-CN
learning_level: level_300
topic_clusters:
  - agents
  - ai_engineering
capabilities:
  - tool_use
  - workflow_automation
prerequisites:
  - topic-0105
source_refs:
  - note-0021
aliases:
  - Model Context Protocol
  - Agent-to-Agent Protocol
search_terms:
  - 什么是 MCP 协议
  - Google A2A 协议是什么
  - 智能体如何互相协作
last_reviewed: 2026-05-06
---

# 一句话定义

MCP (Model Context Protocol) 是解决智能体与工具连接的垂直标准，而 A2A (Agent-to-Agent) 是解决不同智能体之间协作的水平标准。

## 为什么重要

- **消除集成地狱**：在 MCP 之前，每个工具都要为不同的 AI 编写特定的连接代码；现在只需编写一次 MCP Server 即可适配所有支持该协议的 AI。
- **跨厂商协作**：A2A 让 Google 的智能体可以指挥 OpenAI 的智能体执行任务，打破了平台孤岛。

## 关键机制

- **MCP (工具侧标准)**：
    - **Client-Server 架构**：AI 客户端（如 Claude Desktop）连接到 MCP 服务器（如 Google Drive MCP）。
    - **标准化资源与工具**：统一了数据读取和功能执行的描述格式。
- **A2A (通信侧标准)**：
    - **P2P 架构**：智能体之间直接建立点对点连接。
    - **统一身份与发现**：定义了智能体如何声明身份、能力以及如何被发现。

## 与相邻主题的关系

- **与 API 的关系**：MCP 是对 API 的一层语义化封装，让 AI 更容易理解如何调用。
- **与 Multi-Agent Systems (MAS) 的关系**：A2A 是实现跨框架 MAS 的基础设施。

## 常见误区

- **误区：MCP 只能在 Anthropic 的产品上用**。实际上，OpenAI 和 Google 均已在 2025 年全面支持 MCP。
- **误区：有了 A2A 就不需要人类了**：A2A 依然支持“人类在环（Human-in-the-loop）”模式，只是让 AI 之间的沟通更标准。

## 下一步学习建议

- **先读**：[note-0021](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/sources/notes/note-0021-ai-agent-tech-2026-extract.md)
- **实践**：尝试在 [openclaw](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/README.md) 中添加一个 MCP Server 技能。

## 检索提示

- MCP 是工具调用的“USB-C”，A2A 是智能体协作的“HTTP”。

## 来源说明

- 来源笔记 ID: `note-0021`
