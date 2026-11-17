---
doc_type: topic_card
id: topic-0101
title: claude_code_command_level_sop_templates
title_zh: Claude Code 命令级作业模板
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - workflow_automation
  - agent
  - ai_engineering
capabilities:
  - execution
  - planning
prerequisites:
  - topic-0097
  - topic-0098
source_refs:
  - note-0016
  - article-0146
aliases:
  - claude code sop templates
search_terms:
  - mcp hook channels sdk command templates
  - claude code daily operations template
last_reviewed: 2026-04-10
---

# 一句话定义

这张卡提供 Claude Code 线的命令级标准作业模板，覆盖日常开发、自动化巡检和故障回退。

## 模板A：新项目自动化初始化

1. `/config` 校验模型与编辑模式。
2. `/plugin` 检查必需插件状态。
3. 配置 MCP 并跑最小可用测试。
4. 添加 Hooks（只开最小保护与格式化）。
5. 记录回滚命令与禁用开关。

## 模板B：事件驱动任务处理

1. 启动 `--channels` 接入事件源。
2. 用 Hook 对关键工具调用做前后检查。
3. 用 `/schedule` 或 `/loop` 兜底无事件阶段。
4. 失败时降级为人工确认流程。

## 模板C：版本升级回归

1. 对照 release notes 标记命令变更。
2. 回归测试 MCP/Hooks/Channels/SDK 核心链路。
3. 记录兼容性风险与回滚结论。
