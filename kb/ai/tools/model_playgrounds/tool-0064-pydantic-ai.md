---
doc_type: tool_card
id: tool-0064
title: pydantic_ai
title_zh: PydanticAI
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: model_playground
topic_clusters:
  - agent_framework
  - type_safe_agents
  - structured_output
capabilities:
  - typed_agent_interfaces
  - validated_structured_outputs
  - tools_and_dependency_injection
use_cases:
  - production_python_agents
  - schema_constrained_generation
  - reliable_tool_call_workflows
source_refs:
  - note-0007
  - article-0064
aliases:
  - pydantic ai
  - pydantic-ai
search_terms:
  - pydantic ai agent framework
  - pydantic ai structured output
  - pydantic ai tool dependency injection
  - pydantic ai durable execution
last_reviewed: 2026-04-03
---

# 工具定位

PydanticAI 是类型安全导向的 Python Agent 框架，适合构建对输出结构、工具参数和运行可靠性要求较高的生产应用。

## 适用场景

- 你要让 Agent 输出严格符合 schema
- 你要把业务依赖安全地注入工具与指令上下文
- 你要减少运行期类型错误和格式异常

## 核心能力

- 类型化 Agent 接口: 提前暴露错误并提升可维护性
- 结构化输出校验: 输出不合规可自动纠偏重试
- 工具与依赖注入: 以工程化方式组织能力扩展

## 上手路径

1. 先定义最小输出模型并跑通单 Agent。
2. 再引入工具函数与依赖注入管理业务状态。
3. 最后接入评测与可观测体系形成生产闭环。

## 选择边界

- 强类型带来稳定性，也要求更高建模投入。
- 对非 Python 团队的迁移和协作成本较高。
- 复杂系统仍需配套运维、权限和审计设计。

## 相关主题

- 与 `tool-0057` 同为 Agent 框架: AutoGen 偏多 Agent 编排，PydanticAI 偏类型安全与输出约束。
- 与 `tool-0058` 可组合: PydanticAI 负责执行，Langfuse 负责观测评测。
- 与 `collection-0001` 强相关，补齐工程可靠性导向框架。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0064`
