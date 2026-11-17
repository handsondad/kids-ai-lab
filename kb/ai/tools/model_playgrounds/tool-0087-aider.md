---
doc_type: tool_card
id: tool-0087
title: aider
title_zh: Aider
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - terminal_agent
  - git_native
  - pair_programming
capabilities:
  - repository_map_contexting
  - automatic_git_commit_support
  - lint_test_feedback_loop
use_cases:
  - ai_assisted_code_modification
  - existing_codebase_refactoring
  - terminal_first_dev_workflows
source_refs:
  - note-0007
  - article-0087
aliases:
  - aider chat
  - aider terminal
search_terms:
  - aider repomap
  - aider git integration
  - aider lint test
  - aider local llm
last_reviewed: 2026-04-03
---

# 工具定位

Aider 是终端优先的 AI 编码助手，适合在现有 Git 工作流里做可控、可回溯的代码修改。

## 适用场景

- 你要在大仓库中做持续小步改动
- 你要保持 AI 改动可提交、可回滚
- 你要把测试校验融入 AI 改动闭环

## 核心能力

- Repo map 上下文: 提升复杂项目理解能力
- Git 原生协作: 自动提交并保留清晰轨迹
- 质量回路: 改动后可联动 lint 与测试

## 上手路径

1. 先在小分支上进行单任务改动。
2. 再加入 lint/test 自动校验流程。
3. 最后沉淀提示模板和团队使用规范。

## 选择边界

- 自动改动仍需代码评审与业务验证。
- 大任务会消耗较多 token 与时间。
- 上下文管理策略会显著影响效果稳定性。

## 相关主题

- 与 `tool-0085` 同属编码代理: Aider 偏终端，Cline 偏 IDE。
- 与 `tool-0086` 可组合: Aider 产出改动，Continue 负责 PR 规则审查。
- 与 `collection-0001` 强相关，补齐终端编码代理路线。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0087`
