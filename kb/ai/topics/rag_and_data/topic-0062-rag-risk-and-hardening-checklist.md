---
doc_type: topic_card
id: topic-0062
title: rag_risk_and_hardening_checklist
title_zh: RAG 风险与加固清单
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - retrieval_and_rag
  - ai_engineering
  - evaluation
capabilities:
  - planning
  - workflow_automation
prerequisites:
  - topic-0057
source_refs:
  - note-0011
  - article-0137
aliases:
  - rag 防坑清单
  - vector store hardening
search_terms:
  - rag chunk overlap risk
  - vector persistence schema
  - retrieval observability
last_reviewed: 2026-04-08
---

# 一句话定义

RAG 风险与加固清单用于在最小 RAG 模板落地时，提前识别数据处理、向量存储、检索质量和可观测性四类高频风险。

## 关键风险

1. 文档切分策略固定，遇到长段落和结构化内容时召回质量波动。
2. 向量持久化文件命名与结构未版本化，后续重构易造成加载失败。
3. 检索仅使用相似度 top-k，缺少 rerank 与证据一致性检查。
4. 缺少检索日志与评测指标，问题定位依赖人工排查。

## 加固动作

1. 建立按文档类型分层切分策略，并对 `max_token_len` 与 `cover_content` 做任务化调参。
2. 为向量库增加 schema version、构建时间、embedding 模型签名等元数据。
3. 在召回后加入最小重排或规则过滤，并记录证据片段来源。
4. 补充离线评测集，至少跟踪 recall@k、上下文命中率与回答可追溯率。

## 快速检查项

- 同一查询在重建索引前后是否稳定返回同类证据。
- 文档更新后是否触发增量重建或缓存失效机制。
- 回答中是否可定位到检索证据而非模型臆断。

## 检索提示

- 适用于知识库问答从 PoC 走向稳定内测阶段的质量闸门建设。
