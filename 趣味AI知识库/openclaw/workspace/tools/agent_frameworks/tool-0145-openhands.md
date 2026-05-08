---
doc_type: tool_card
id: tool-0145
title: openhands
title_zh: OpenHands
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: agent_framework
topic_clusters:
  - agents
  - ai_engineering
  - code_automation
capabilities:
  - autonomous_coding
  - software_engineering
  - task_automation
use_cases:
  - automated_software_development
  - bug_fixing
  - code_review
source_refs:
  - note-0024
aliases:
  - all-hands-ai
  - open hands
search_terms:
  - openhands 是什么
  - ai软件开发平台
  - 自动化编程工具
  - swe-bench
last_reviewed: 2026-05-08
---

# 工具定位

OpenHands 是 AI 驱动的软件开发平台，提供自主编码智能体，能够编辑文件、运行命令、浏览网页，在 SWE-Bench Verified 上达到 72% 准确率。

## 适用场景

- 你需要自动化软件开发任务
- 你要修复 GitHub Issues 或进行代码重构
- 你要进行自动化测试和代码审查

## 核心能力

- **自主编码**: 自动编辑文件、运行命令、浏览网页
- **多模型支持**: Claude、OpenAI、MiniMax及所有LLM
- **沙盒环境**: 安全的代码执行环境
- **SWE-Bench**: 72% Verified 准确率

## 上手路径

1. 先在沙盒环境中跑通一个简单的代码修改任务。
2. 观察智能体的决策过程，调整提示和约束。
3. 引入到实际开发流程，用于代码审查和Bug修复。

## 选择边界

- 适合结构化开发任务，不适合创意性设计工作。
- 需要人工审核生成的代码，尤其是关键模块。
- 依赖清晰的Issue描述，模糊需求效果不佳。
- 沙盒环境可能限制某些系统级操作。

## 相关主题

- 与 `tool-0087`（Aider）互补，OpenHands更侧重自动化执行，Aider更侧重结对编程。
- 与 `tool-0081`（SWE-agent）竞争，二者都专注GitHub Issue修复。
- 与 `tool-0143`（AI-Scientist）相关，OpenHands可作为研究系统的执行引擎。

## 来源说明

- 来源笔记 ID: `note-0024`
- GitHub: https://github.com/All-Hands-AI/OpenHands
- Stars: 40000+
- SWE-Bench Verified: 72%
