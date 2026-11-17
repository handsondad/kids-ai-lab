---
doc_type: tool_card
id: tool-0085
title: cline
title_zh: Cline
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - ide_agent
  - human_in_the_loop
  - mcp_extensibility
capabilities:
  - file_terminal_browser_actions
  - checkpoint_compare_restore
  - multi_provider_model_support
use_cases:
  - interactive_ide_coding_agent
  - controlled_autonomous_development
  - custom_mcp_tool_workflows
source_refs:
  - note-0007
  - article-0085
aliases:
  - cline ide agent
  - cline vscode
search_terms:
  - cline mcp tools
  - cline checkpoints
  - cline terminal browser
  - cline model providers
last_reviewed: 2026-04-03
---

# 工具定位

Cline 是 IDE 内的人机协作编码代理，支持在审批机制下执行文件编辑、终端命令、浏览器操作和工具扩展。

## 适用场景

- 你要在 IDE 中让代理执行端到端开发任务
- 你要在高自治效率与人工控制之间做平衡
- 你要通过 MCP 快速接入团队定制工具链

## 核心能力

- 三位一体执行: 文件、终端、浏览器联动
- 可恢复检查点: 支持比较与回滚任务过程
- 多模型接入: 兼容多 API 与本地/远程模型

## 上手路径

1. 先用小任务体验授权式执行闭环。
2. 再接入问题面板和项目上下文注入。
3. 最后扩展 MCP 工具并固化团队规则。

## 选择边界

- 自治能力强，必须提前设置权限和审批边界。
- 任务上下文管理不当会带来成本上涨。
- 团队使用需统一规范提示和回滚流程。

## 相关主题

- 与 `tool-0076` 同属编码代理: Cline 偏 IDE 插件协作，OpenHands 覆盖更广产品形态。
- 与 `tool-0079` 可组合: Cline 负责执行界面，Composio 负责工具连接层。
- 与 `collection-0001` 强相关，补齐人机协作编码代理路径。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0085`
