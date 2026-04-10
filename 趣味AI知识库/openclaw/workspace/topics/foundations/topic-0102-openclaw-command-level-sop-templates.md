---
doc_type: topic_card
id: topic-0102
title: openclaw_command_level_sop_templates
title_zh: OpenClaw 命令级作业模板
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - application_engineering
  - security
  - ai_engineering
capabilities:
  - execution
  - risk_management
prerequisites:
  - topic-0099
  - topic-0100
source_refs:
  - note-0017
  - article-0147
aliases:
  - openclaw ops sop templates
search_terms:
  - openclaw onboard doctor models fallback security templates
  - openclaw runbook command checklist
last_reviewed: 2026-04-10
---

# 一句话定义

这张卡提供 OpenClaw 线的命令级标准作业模板，覆盖部署、巡检、应急与升级回滚。

## 模板A：部署与启动

1. `openclaw --version`、`node --version` 基线确认。
2. `openclaw onboard` 生成初始配置。
3. `openclaw doctor` 进行健康检查。
4. 启动 gateway 并验证基础通路。

## 模板B：模型与能力巡检

1. `openclaw models list` 检查可用模型。
2. 设定主模型与 fallback 路径。
3. 验证技能触发与记忆写入链路。
4. 记录成本与响应质量基线。

## 模板C：安全与应急

1. 检查 API Key 管理方式是否合规。
2. 校验 DM pairing、allowlist、沙箱状态。
3. 执行一次最小应急演练（密钥轮换或回滚）。
4. 归档审计日志与整改项。
