---
doc_type: collection
id: collection-0005
title: model_serving_and_inference_stack
title_zh: 模型部署与推理栈精选
status: reviewed
language: zh-CN
audience_tags:
  - builder
  - engineer
theme_tags:
  - tool_selection
  - hands_on_learning
included_cards:
  - topic-0001
  - topic-0004
  - topic-0007
  - topic-0008
  - topic-0009
  - topic-0010
  - topic-0011
  - topic-0012
  - topic-0013
  - topic-0014
  - collection-0001
  - tool-0005
  - tool-0006
  - tool-0007
  - tool-0008
  - tool-0009
  - tool-0010
  - tool-0026
  - tool-0027
last_reviewed: 2026-04-03
---

# 专题说明

这个合集聚焦“模型从可调用到可服务”的部署与推理主线，适合正在搭建 API 层、推理服务层或本地模型运行方案的学习者。它优先帮助你建立推理栈视角，而不是陷入单一工具选型。

## 推荐顺序

1. 先看 `topic-0001`，确认你对模型基础和推理对象有统一认知。
2. 再看 `topic-0004`，判断当前问题更偏 Context、Harness 还是部署系统本身。
3. 接着看 `tool-0006`，先建立本地运行和原型验证路径。
4. 再看 `tool-0005`、`tool-0009`、`tool-0010`，建立服务引擎的三角对比感。
5. 然后看 `tool-0026`，补齐从训练微调到服务交付的前置能力。
6. 再看 `tool-0007` 与 `tool-0008`，理解统一 API 平台的接入价值。
7. 接着看 `topic-0008`，形成统一 API 平台的选型基线。
8. 然后看 `topic-0009`，把选型判断落成可复验的压测流程。
9. 再看 `tool-0027`，把训练与服务链路的实验跟踪和对比闭环补齐。
10. 最后看 `topic-0010`，形成可执行的迁移与回滚策略。
11. 接着看 `topic-0011`，把 tracing、评测和压测整合为统一门禁看板。
12. 再看 `topic-0012`，补齐发布值班、告警分级和复盘闭环。
13. 然后看 `topic-0013`，把评测样本治理与漂移监控纳入长期机制。
14. 再看 `topic-0014`，建立路由、缓存与配额协同的降本策略。
15. 回看 `collection-0001`，把基础概念和工具实验能力串回部署场景。

## 本期关注工具范围（来自来源清单）

- 推理与服务引擎：vLLM、SGLang、Xorbits Inference
- 模型运行与统一接口：Ollama、OpenRouter、SiliconFlow
- 训练与评测支撑：LLaMA-Factory、SwanLab
- 运行可行性辅助：canirun.ai

## 本期已拆卡

- `tool-0005`：vLLM
- `tool-0006`：Ollama
- `tool-0007`：OpenRouter
- `tool-0008`：SiliconFlow
- `tool-0009`：SGLang
- `tool-0010`：Xorbits Inference
- `tool-0026`：LLaMA-Factory
- `tool-0027`：SwanLab

## 使用建议

- 先明确目标场景：本地实验、团队 API、线上服务，三者优先级不同。
- 选型时先看吞吐、延迟、模型覆盖和运维复杂度，不要只看“能不能跑”。
- 先做最小可用服务，再逐步补监控、评测和回归机制。

## 下一步拆卡建议

- 可以继续补“自动化运营卡”：把容量预测、预算预警和扩缩容联动起来。
- 再补“多租户治理卡”：定义 tenant 优先级、限额和隔离策略。

## 检索提示

- 适合理解模型部署与推理栈的起步合集，强调场景化选型与最小可用服务路径。

## 来源说明

- 主要来源笔记 ID: `note-0007`

## 补充来源

- `article-0007`（SGLang 官方 README 概览）
- `article-0008`（Xorbits Inference 官方 README 概览）