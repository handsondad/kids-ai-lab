---
doc_type: source_article
id: article-0140
title: hello-agents Code Assets Playbook
source_type: repo_code
source_url: c:/Xiuqin/Code/xiuqin/hello-agents-main/code
author: Hello-Agents Contributors
language: zh-CN
retrieved_at: 2026-04-08
---

# hello-agents 代码资产工程提炼

## What This Source Is

这是对 hello-agents chapter10-14 代码资产的工程化提炼，目标是沉淀可迁移的协议、训练、评测与应用交付模板。

## Scope Covered

- chapter10：MCP/A2A/ANP 协议示例与多服务器接入。
- chapter11：Agentic RL 端到端训练流水线（SFT + GRPO + 评估）。
- chapter12：BFCL/GAIA 评测执行与报告导出。
- chapter13：多智能体旅行助手（前后端分离 + MCP 工具协作）。
- chapter14：深度研究智能体（TODO 驱动 + 流式执行 + 笔记沉淀）。

## Core Engineering Insights

1. 协议层可通过统一工具封装显著降低接入复杂度。
2. 训练层应采用“可配置流水线 + 分阶段评估”方式提升复现实用性。
3. 评测层需要官方格式导出和结果归档，保证可比性与可复盘。
4. 应用层需要任务分解、状态管理、流式反馈和可追溯日志协同设计。

## Practical Takeaways

- 先跑通内置演示工具，再接入外部协议服务。
- 训练流程中建议保留快速样本模式用于冒烟验证。
- 评测脚本应标准化输入输出路径，便于持续集成。
- 复杂应用优先做多 Agent 角色边界设计，再补工具细节。

## References

- c:/Xiuqin/Code/xiuqin/hello-agents-main/code/chapter10/05_UseMCPToolInAgent.py
- c:/Xiuqin/Code/xiuqin/hello-agents-main/code/chapter11/06_complete_pipeline.py
- c:/Xiuqin/Code/xiuqin/hello-agents-main/code/chapter12/04_run_bfcl_evaluation.py
- c:/Xiuqin/Code/xiuqin/hello-agents-main/code/chapter13/helloagents-trip-planner/backend/app/agents/trip_planner_agent.py
- c:/Xiuqin/Code/xiuqin/hello-agents-main/code/chapter14/helloagents-deepresearch/backend/src/agent.py
