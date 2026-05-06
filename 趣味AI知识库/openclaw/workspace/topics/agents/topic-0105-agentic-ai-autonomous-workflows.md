---
doc_type: topic_card
id: topic-0105
title: agentic-ai-autonomous-workflows
title_zh: 智能体 AI (Agentic AI) 与自主工作流
status: published
language: zh-CN
learning_level: level_200
topic_clusters:
  - agents
capabilities:
  - reasoning
  - planning
  - tool_use
prerequisites:
  - topic-0001
source_refs:
  - note-0019
  - note-0021
aliases:
  - Agentic Workflow
  - 自主智能体
search_terms:
  - 什么是智能体 AI
  - Agent 和 Chatbot 的区别
  - 智能体工作流的核心组成
last_reviewed: 2026-05-06
---

# 一句话定义

智能体 AI (Agentic AI) 是一种能够自主规划、调用工具、执行任务并根据环境反馈自我纠错的人工智能系统。

## 为什么重要

- **从“说”到“做”**：打破了传统聊天机器人只能生成文本的限制，使其能够真正代替人类完成多步复杂任务（如软件开发、深度研究、项目管理）。
- **降低人类干预**：通过自主规划和循环反馈，大幅减少了人类在任务过程中的琐碎指引。

## 关键机制

- **规划 (Planning)**：将复杂目标分解为可执行的子任务。2026 年主流技术包括：
    - **Tree of Thoughts (ToT)**：多路径探索与评估。
    - **Test-Time Reasoning**：利用推理时计算（如 o1/R1）进行深度推演。
- **行动 (Action/Tool Use)**：
    - **MCP 标准化**：通过 Model Context Protocol 统一调用各类工具。
- **反思 (Reflection/Evaluation)**：
    - **Self-Correction**：智能体在执行过程中识别错误并实时修正。
- **记忆 (Memory)**：
    - **Persistent Spec**：在执行前先生成持久化规格文档，防止目标漂移。
    - **Layered Memory**：区分工作记忆、短期记忆和长期（RAG）记忆。

## 与相邻主题的关系

- **与 Chatbot 的区别**：Chatbot 是一问一答；Agent 是目标导向，会自动运行多轮直到任务完成。
- **与 RAG 的关系**：Agent 通常使用 RAG 作为其获取知识的工具之一。

## 常见误区

- **误区 1：Agent 就是更强的模型**。实际上，Agent 更多是指一种工程架构，弱模型通过良好的 Agent 框架也能完成复杂任务。
- **误区 2：Agent 是完全不可控的**。通过 LangGraph 等框架可以对 Agent 的执行逻辑进行精细的图状态机控制。

## 下一步学习建议

- **先读**：[note-0019](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/sources/notes/note-0019-ai-landscape-2025-2026-extract.md)
- **先练**：尝试使用 LangGraph 或 CrewAI 搭建一个简单的翻译/搜索 Agent。

## 检索提示

- 智能体 AI 是 2025 年 AI 落地的核心关键词，强调自主性、规划和行动。

## 来源说明

- 来源笔记 ID: `note-0019`
