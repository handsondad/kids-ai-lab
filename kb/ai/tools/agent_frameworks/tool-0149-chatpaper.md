---
doc_type: tool_card
id: tool-0149
title: chatpaper
title_zh: ChatPaper
status: reviewed
language: zh-CN
learning_level: level_200
tool_category: agent_framework
topic_clusters:
  - rag_and_data
  - research_automation
  - scientific_computing
capabilities:
  - paper_summarization
  - translation
  - peer_review_analysis
use_cases:
  - arxiv_paper_reading
  - paper_translation
  - review_response_generation
source_refs:
  - note-0024
aliases:
  - chat paper
  - arxiv summarizer
search_terms:
  - chatpaper 是什么
  - 论文总结工具
  - arxiv论文阅读
  - 论文翻译工具
last_reviewed: 2026-05-08
---

# 工具定位

ChatPaper 是使用 ChatGPT 总结 arXiv 论文的工具，提供专业翻译、论文润色、同行评审分析和审稿人回复生成，适合快速阅读和理解学术论文。

## 适用场景

- 你需要快速了解大量arXiv论文的核心内容
- 你要翻译英文论文或润色学术写作
- 你要分析审稿意见并生成回复

## 核心能力

- **论文总结**: 自动提取论文核心观点和方法
- **专业翻译**: 中英文学术论文互译
- **论文润色**: 改进学术写作质量
- **评审分析**: 分析审稿意见并生成回复

## 上手路径

1. 先上传一篇arXiv论文，测试总结质量。
2. 观察翻译和润色效果，调整提示词。
3. 引入到日常论文阅读流程，提升效率。

## 选择边界

- 主要面向arXiv论文，不适合其他来源。
- 生成的总结需要人工验证，尤其是技术细节。
- 翻译质量依赖原文质量，专业术语可能不准确。
- 不适合深度理解论文，只适合快速浏览。

## 相关主题

- 与 `tool-0146`（PaperQA2）互补，ChatPaper用于快速总结，PaperQA2用于精确问答。
- 与 `tool-0144`（STORM）相关，ChatPaper可作为文献综述的预处理工具。
- 与 `topic-0111`（文献综述自动化）强相关。

## 来源说明

- 来源笔记 ID: `note-0024`
- GitHub: https://github.com/kaixindelele/ChatPaper
- Stars: 7000+
