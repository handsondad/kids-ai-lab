---
doc_type: tool_card
id: tool-0133
title: mimiclaw-embedded-agent
title_zh: MimiClaw (咪咪龙虾 / 嵌入式智能体)
status: published
language: zh-CN
learning_level: level_300
tool_category: workflow_builder
topic_clusters:
  - agents
capabilities:
  - tool_use
  - workflow_automation
use_cases:
  - iot_automation
  - physical_world_interaction
source_refs:
  - note-0020
aliases:
  - xiaomiclaw
  - 咪咪龙虾
search_terms:
  - 如何在 ESP32 上运行 OpenClaw
  - MimiClaw 硬件要求
  - 什么是 xiaomiclaw
last_reviewed: 2026-05-06
---

# 工具定位

MimiClaw 是 OpenClaw 的极轻量级 C 语言实现版，专为 ESP32-S3 等成本低廉（约 5 美元）的微控制器设计，让 AI 智能体能够直接运行在“裸机”硬件上。

## 适用场景

- **智能家居控制**：直接通过 Telegram 指令操作物理继电器、传感器。
- **低功耗监控**：在不需要 PC 或服务器的情况下，维持一个长年在线的 AI 动作节点。
- **硬件黑客项目**：将 AI 智能体植入小型电子设备。

## 核心能力

- **零操作系统依赖**：不依赖 Linux 或 Node.js，直接编译为固件。
- **超低资源占用**：内存占用仅需几百 KB。
- **云端大脑连接**：通过 Wi-Fi 将硬件动作与 Claude/GPT 等大模型逻辑连接。

## 上手路径

1. **准备硬件**：购买一块 ESP32-S3 开发板。
2. **烧录固件**：使用 PlatformIO 或 ESP-IDF 将 MimiClaw 代码烧录至板卡。
3. **配置渠道**：在配置文件中填入 Telegram Token 和 LLM API Key。

## 选择边界

- **处理能力限制**：无法处理复杂的本地计算任务。
- **技能受限**：只能运行基础的 C 编写的插件，无法像主版本那样运行复杂的 Python 脚本。

## 相关主题

- [topic-0106-openclaw-variants-and-nicknames](file:///d:/xiuqinCode/xiuqin/kids-ai-lab/趣味AI知识库/openclaw/workspace/topics/agents/topic-0106-openclaw-variants-and-nicknames.md)

## 来源说明

- 来源笔记 ID: `note-0020`
