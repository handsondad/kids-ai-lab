---
doc_type: tool_card
id: tool-0146
title: paperqa2
title_zh: PaperQA2
status: reviewed
language: zh-CN
learning_level: level_300
tool_category: agent_framework
topic_clusters:
  - rag_and_data
  - research_automation
  - scientific_computing
capabilities:
  - scientific_document_rag
  - paper_qa
  - citation_tracking
use_cases:
  - paper_analysis
  - literature_review
  - scientific_qa
source_refs:
  - note-0024
aliases:
  - paper-qa
  - future house paperqa
search_terms:
  - paperqa2 是什么
  - 科学文档问答
  - 论文rag系统
  - paper qa
last_reviewed: 2026-05-08
---

# 工具定位

PaperQA2 是高精度科学文档 RAG 系统，能够动态检索全文论文并进行迭代式问答，在 ICLR 发表，适合需要精确引用的科研场景。

## 适用场景

- 你需要对科学论文进行精确问答
- 你要检索和分析大量学术文献
- 你需要保留完整的引用链路

## 核心能力

- **高精度RAG**: 动态检索全文论文
- **迭代式问答**: 多轮检索和答案优化
- **多模型支持**: OpenAI、Claude、Gemini、Ollama、llama.cpp
- **引用追踪**: 自动追踪论文引用关系

## 上手路径

1. 先上传几篇相关论文，测试问答质量。
2. 观察检索准确性和答案可信度，调整检索参数。
3. 引入到文献综述流程，辅助论文阅读和分析。

## 选择边界

- 适合科学文献问答，不适合通用知识问答。
- 需要论文全文访问权限，部分论文可能无法获取。
- 检索质量依赖论文库覆盖范围。
- 成本较高，尤其是处理大量论文时。

## 相关主题

- 与 `tool-0144`（STORM）互补，PaperQA2用于精确问答，STORM用于综述生成。
- 与 `tool-0021`（GPT Researcher）相关，二者都支持研究任务，但PaperQA2更专注论文分析。
- 与 `topic-xxxx`（科学文档RAG）强相关。

## 来源说明

- 来源笔记 ID: `note-0024`
- GitHub: https://github.com/Future-House/paper-qa
- Stars: 3500+
- 发表: ICLR
