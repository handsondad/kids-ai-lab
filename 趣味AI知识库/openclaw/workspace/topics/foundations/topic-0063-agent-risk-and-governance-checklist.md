---
doc_type: topic_card
id: topic-0063
title: agent_risk_and_governance_checklist
title_zh: Agent 风险与治理清单
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - agent
  - ai_engineering
  - governance
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0058
source_refs:
  - note-0011
  - article-0137
aliases:
  - tool calling 安全清单
  - agent 治理手册
search_terms:
  - function calling security
  - tool execution guardrails
  - agent audit trail
last_reviewed: 2026-04-08
---

# 一句话定义

Agent 风险与治理清单用于控制函数调用 Agent 在工具执行、密钥管理、会话状态和审计合规方面的落地风险。

## 关键风险

1. 通过 `eval` 执行工具调用参数，存在代码注入与越权执行风险。
2. API key 与 base_url 在示例中硬编码，存在泄露与环境漂移风险。
3. 会话历史无限增长，可能造成上下文污染与成本不可控。
4. 缺乏工具调用审计字段，事故追溯困难。

## 治理动作

1. 使用显式函数路由表替代 `eval`，并对参数做 schema 校验。
2. 统一用环境变量和密钥管理系统注入凭据，禁用明文提交。
3. 增加消息裁剪策略、轮次上限和错误重试退避策略。
4. 为每次 tool_call 记录 trace id、耗时、输入摘要、输出摘要和异常码。

## 快速检查项

- 非法函数名或超规格参数是否会被拒绝并返回可解释错误。
- 前端日志是否屏蔽密钥与敏感参数。
- 工具调用链路是否支持复盘到单次请求。

## 检索提示

- 适用于 Agent 从演示阶段进入团队试运行与对外服务前的安全检查。
