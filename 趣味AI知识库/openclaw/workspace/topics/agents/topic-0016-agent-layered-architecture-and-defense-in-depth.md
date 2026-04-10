---
doc_type: topic_card
id: topic-0016
title: agent_layered_architecture_and_defense_in_depth
title_zh: Agent 分层架构与纵深权限防线
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - agents
  - ai_engineering
  - safety_and_governance
capabilities:
  - planning
  - tool_use
  - workflow_automation
prerequisites:
  - topic-0002
  - topic-0015
source_refs:
  - note-0009
  - article-0010
aliases:
  - agent 五层架构
  - 工具权限纵深防御
search_terms:
  - agent 架构怎么分层
  - plan mode coordinator mode 区别
  - agent 权限防线设计
  - tool use 防注入与越权
last_reviewed: 2026-04-02
---

# 一句话定义

Agent 分层架构与纵深权限防线，是将“能力编排”和“风险控制”同时工程化：上层负责任务流与协作，下层负责工具授权、注入拦截与可控执行。

## 为什么重要

- agent 系统失败很多发生在执行层，不是推理层：越权工具调用、错误自动化、模式串扰。
- 没有清晰分层，前端变化、工具扩展和安全策略会相互耦合，迭代成本快速失控。
- 没有纵深防线，单点失效会直接放大为高风险执行事故。

## 五层架构视角

- 入口层：统一接收 CLI、IDE、Web 等多端输入并标准化路由。
- 运行层：管理状态机、REPL 循环、Hook 生命周期与任务节拍。
- 引擎层：负责上下文构建、缓存管理、响应流控和模式切换。
- 工具能力层：将每个工具封装成可授权、可审计、可隔离的执行单元。
- 基础设施层：承载认证、策略下发、缓存与遥测等全局治理能力。

## 纵深权限防线视角

- 预授权层：按项目/用户策略定义可用工具边界。
- 自动风险层：对无人值守执行进行风险分类与门控。
- 编排层：协调者与 worker 权限分离，避免角色越界。
- 命令安全层：对 shell 指令做注入与危险模式拦截。
- 交互确认层：高风险操作保留最终人工确认。

## 工程设计抓手

- 把“可执行边界”当作系统一等对象，而不是分散在提示词里。
- 规划与执行分离：先只读计划，再最小权限执行。
- 多 agent 协作默认隔离执行环境，再通过结构化消息汇总。

## 常见误区

- 只有最终确认弹窗，没有中间层门控，风险会前置累积。
- 让同一 agent 同时承担规划、执行、审批，容易产生自证偏差。
- 把权限策略写死在代码里，不做远程策略与熔断开关。

## 下一步学习建议

- 先画出你当前 agent 的“输入路由图”和“工具授权链”。
- 再把高风险工具改为多层门控，补充审计日志。
- 最后对 Plan/Execute 两模式做分离压测，比较成功率与事故率。

## 检索提示

- 用于设计生产级 agent 架构，重点是分层解耦、权限纵深和多代理可控执行。

## 来源说明

- 来源笔记 ID: `note-0009`
- 主要来源文章 ID: `article-0010`
