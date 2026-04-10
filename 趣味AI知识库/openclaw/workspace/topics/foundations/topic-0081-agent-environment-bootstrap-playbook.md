---
doc_type: topic_card
id: topic-0081
title: agent_environment_bootstrap_playbook
title_zh: 智能体环境引导手册
status: reviewed
language: zh-CN
learning_level: level_100
topic_clusters:
  - beginner_map
  - ai_engineering
  - tooling
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0067
source_refs:
  - note-0012
  - article-0141
aliases:
  - nodejs npx n8n setup
  - agent dev environment bootstrap
search_terms:
  - node npm npx install
  - docker n8n local run
  - mcp environment preparation
last_reviewed: 2026-04-08
---

# 一句话定义

智能体环境引导手册用于在 Windows/macOS/Linux 上快速搭建 Agent 开发所需的 Node.js/npx 与 n8n 本地运行环境。

## 关键路径

1. 先安装 Node.js（含 npm 与 npx）并完成版本验证。
2. 用 npx 测试 MCP 社区服务器基础连通性。
3. 使用 Docker 启动 n8n 容器并映射本地持久化卷。
4. 在浏览器进入 n8n 控制台完成节点可用性验证。

## 实操要点

- 优先使用 LTS 版本 Node.js，减少兼容性问题。
- 用最小命令做安装后烟雾测试，避免后续排错成本。
- n8n 建议采用容器化部署并开启自动重启策略。

## 检索提示

- 适用于 hello-agents 第十章协议与低代码编排前的环境准备阶段。
