---
doc_type: tool_card
id: tool-0074
title: instructor
title_zh: Instructor
status: reviewed
language: zh-CN
learning_level: level_200
tool_category: model_playground
topic_clusters:
  - structured_output
  - pydantic_validation
  - extraction_pipeline
capabilities:
  - pydantic_response_models
  - automatic_validation_retries
  - provider_agnostic_interface
use_cases:
  - robust_information_extraction
  - schema_constrained_generation
  - typed_llm_data_pipelines
source_refs:
  - note-0007
  - article-0074
aliases:
  - instructor
  - instructor ai
search_terms:
  - instructor structured outputs
  - instructor pydantic
  - instructor retries
  - instructor from_provider
last_reviewed: 2026-04-03
---

# 工具定位

Instructor 是结构化输出增强库，适合把 LLM 返回内容稳定转换为 Pydantic 类型对象，降低解析与验证成本。

## 适用场景

- 你要把自由文本抽取成稳定字段结构
- 你要减少手写 JSON 解析和异常处理逻辑
- 你要在多模型后端上保持统一抽取接口

## 核心能力

- response_model 抽象: 直接返回类型化结果对象
- 自动验证重试: 失败时按错误信息自动纠偏
- 提供商无关接口: 同一代码切换不同模型服务

## 上手路径

1. 先定义核心输出模型并接入基础抽取。
2. 再加入字段校验规则和最大重试策略。
3. 最后扩展到嵌套结构与流式输出场景。

## 选择边界

- 不覆盖完整 Agent 生命周期编排。
- 高复杂流程仍需配合上层框架管理。
- 需监控长尾异常样本以持续调优 schema。

## 相关主题

- 与 `tool-0064` 强关联: Instructor 偏抽取增强，PydanticAI 偏完整 Agent 框架。
- 与 `tool-0058` 可组合: Instructor 负责结构化输出，Langfuse 负责观测评估。
- 与 `collection-0001` 强相关，补齐结构化抽取能力块。

## 来源说明

- 来源笔记 ID: `note-0007`
- 来源文章 ID: `article-0074`
