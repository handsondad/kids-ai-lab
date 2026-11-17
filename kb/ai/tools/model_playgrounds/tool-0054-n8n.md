---
doc_type: tool_card
id: tool-0054
title: n8n
title_zh: n8n
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - workflow_automation
  - low_code
  - ai_workflows
capabilities:
  - visual_flow_builder
  - code_extensions
  - integration_templates
use_cases:
  - business_process_automation
  - ai_agent_workflow_orchestration
  - self_hosted_integration_hub
source_refs:
  - note-0007
  - article-0054
aliases:
  - n8n automation
  - n8n workflow
search_terms:
  - n8n
  - n8n docker
  - n8n integrations
  - n8n ai workflow
last_reviewed: 2026-04-03
---

# 工具定位

n8n 是技术团队友好的自动化工作流平台，适合把业务系统集成、AI 调用与运维任务收敛到可视化流程中。

## 适用场景

- 你要低成本搭建跨系统自动化流程
- 你希望在可视化编排中保留代码扩展能力
- 你需要自托管环境下的自动化与数据控制

## 核心能力

- 可视化流程编排: 快速搭建与迭代自动化逻辑
- 代码节点扩展: 支持 JS/Python 做复杂处理
- 丰富集成与模板: 复用常见业务场景流程

## 上手路径

1. 先用 npx 或 Docker 启动本地实例。
2. 再基于模板改造一个真实业务流程。
3. 最后引入权限、版本与监控治理。

## 选择边界

- 流程规模增大后需强化测试与发布规范。
- 节点式配置如果缺少文档，后期维护成本会升高。
- 企业高级功能与许可证模式需提前评估。

## 相关主题

- 与 `tool-0048` 可对照: 平台化 LLM 应用 vs 通用自动化编排。
- 与 `tool-0047` 可组合: CrewAI 决策 + n8n 业务流程执行。
- 与 `collection-0001` 强相关，适合作为自动化能力扩展节点。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0054`
