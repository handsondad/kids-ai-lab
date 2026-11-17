---
doc_type: topic_card
id: topic-0106
title: openclaw-variants-and-nicknames
title_zh: OpenClaw 变体、昵称与社区生态
status: published
language: zh-CN
learning_level: level_100
topic_clusters:
  - agents
  - open_source
capabilities:
  - workflow_automation
  - tool_use
prerequisites:
  - topic-0105
source_refs:
  - note-0020
aliases:
  - 龙虾 AI
  - 小龙虾 AI
  - 养龙虾
search_terms:
  - 什么是养龙虾
  - OpenClaw 有哪些版本
  - MimiClaw 和 qclaw 的区别
last_reviewed: 2026-05-06
---

# 一句话定义

OpenClaw 生态是指围绕核心智能体框架 OpenClaw 形成的，包含多种硬件适配版本（如 MimiClaw）、性能优化分支（如 qclaw）以及特定场景应用（如 WorkBuddy）的多元化社区体系。

## 为什么重要

- **硬件普惠**：通过 MimiClaw 等变体，让 AI 智能体能运行在几美元的芯片上，极大地降低了物理世界的 AI 化门槛。
- **场景定制**：不同的变体针对办公（WorkBuddy）、独立任务（Trae-Solo）等场景进行了优化，提升了实用性。
- **社区文化**：有趣的昵称（如“龙虾”）降低了技术理解门槛，促进了开源项目的快速扩散。

## 关键机制

- **内核重写**：如 MimiClaw 使用 C 语言重写内核以适配嵌入式设备，而 PicoClaw 使用 Go。
- **能力裁剪**：轻量化版本通常保留核心的“指令接收-执行”逻辑，裁剪复杂的 Web UI。
- **生态昵称**：
    - **龙虾/小龙虾**：指代 OpenClaw 本身。
    - **养龙虾**：指代部署、维护和运行 OpenClaw 的过程。
    - **dumate**：常指代基于 OpenClaw 的协作式 AI 伙伴界面。

## 与相邻主题的关系

- **与核心 OpenClaw 的关系**：这些变体是核心框架在不同方向（体积、速度、场景）的延伸。
- **与 Trae 的关系**：Trae-Solo 是 Trae IDE 将其 Agent 能力独立化的一种尝试，属于“单兵”执行模式。

## 常见误区

- **误区 1：MimiClaw 可以运行大模型**。MimiClaw 本身运行的是智能体逻辑，它依然需要连接云端或局域网内的 LLM API 来获取“大脑”支持。
- **误区 2：“养龙虾”是虚拟宠物游戏**。它实际上是开发者和爱好者对运行自律型 AI 智能体的趣味说法。

## 下一步学习建议

- **入门**：先了解 [topic-0105](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/topics/agents/topic-0105-agentic-ai-autonomous-workflows.md) 智能体基础。
- **进阶**：如果你有 ESP32 开发板，可以尝试部署 [tool-0133](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/tools/model_playgrounds/tool-0133-mimiclaw-embedded-agent.md)。

## 检索提示

- “养龙虾”是 OpenClaw 在中文社区的代名词，MimiClaw 是其嵌入式版本。

## 来源说明

- 来源笔记 ID: `note-0020`
