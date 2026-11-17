---
doc_type: topic_card
id: topic-0093
title: openclaw_production_hardening_checklist
title_zh: OpenClaw 生产加固检查清单
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - security
  - ai_engineering
  - application_engineering
capabilities:
  - risk_management
  - deployment
prerequisites:
  - topic-0089
  - topic-0090
source_refs:
  - note-0015
  - article-0145
aliases:
  - openclaw security checklist
search_terms:
  - openclaw dm pairing sandbox api key hardening
  - openclaw production security baseline
last_reviewed: 2026-04-10
---

# 一句话定义

这张卡提供 OpenClaw 上线前的最小安全与稳定性检查清单，适用于公网或团队场景。

## 上线前必查

1. 认证：开启 DM pairing 与 allowlist。
2. 密钥：API Key 全部迁移到环境变量或密钥服务。
3. 执行：关键能力运行在沙箱或受限权限环境。
4. 网络：限制暴露面，优先内网与反向代理。
5. 审计：启用日志、告警、异常追踪和回滚预案。

## 运行中巡检

- 每日：服务可用性和关键告警。
- 每周：依赖和版本风险检查。
- 每月：权限清点和安全演练。

## 检索提示

- 适用于“准备上公网/上团队”的 OpenClaw 部署前评审。
