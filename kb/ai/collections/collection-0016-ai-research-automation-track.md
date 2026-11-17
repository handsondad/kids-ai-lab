---
doc_type: collection_card
id: collection-0016
title: ai_research_automation_track
title_zh: AI科研自动化学习路径
status: reviewed
language: zh-CN
learning_level: level_300
topic_clusters:
  - agents
  - research_automation
  - ai_engineering
prerequisites:
  - llm_foundations
  - agents_basics
source_refs:
  - note-0024
last_reviewed: 2026-05-08
---

# 学习路径概览

本路径带你从文献综述自动化到端到端研究系统，掌握AI科研自动化的核心工具和技术，适合希望在研究中应用AI的研究者和工程师。

## 学习目标

- 理解AI科研自动化的核心概念和技术路径
- 掌握文献综述、实验自动化、论文撰写等关键工具
- 能够应用AI工具加速研究流程
- 了解AI科研自动化的局限性和伦理考量

## 核心主题

### 1. 基础概念
- **主题卡**: `topic-0109` - AI科研自动化
  - 理解什么是AI科研自动化
  - 了解研究流程的各个环节
  - 掌握关键技术栈

### 2. 文献综述自动化
- **工具卡**: `tool-0144` - STORM
  - 维基百科式长文章生成
  - 多搜索引擎支持
  - 引用管理

- **工具卡**: `tool-0021` - GPT Researcher
  - 快速研究报告生成
  - 混合web和本地研究

- **工具卡**: `tool-0146` - PaperQA2
  - 科学文档精确问答
  - 高精度RAG系统

### 3. 实验自动化
- **工具卡**: `tool-0145` - OpenHands
  - 自主软件开发
  - SWE-Bench 72%

- **工具卡**: `tool-0087` - Aider
  - 终端结对编程
  - 多文件编辑

### 4. 端到端研究系统
- **工具卡**: `tool-0143` - AI-Scientist
  - 端到端研究流程
  - 论文自动生成

- **工具卡**: `tool-0147` - RD-Agent
  - 量化金融自动化
  - Kaggle自动化

### 5. 里程碑事件
- **事件卡**: `event-0004` - AI-Scientist-v2论文通过同行评审
  - 首个AI撰写论文通过评审
  - 科研自动化里程碑

## 学习顺序

### 阶段1: 理解概念（1-2天）
1. 阅读 `topic-0109` 理解AI科研自动化
2. 了解研究流程的各个环节
3. 明确自己的应用场景

### 阶段2: 文献综述实践（3-5天）
1. 使用 `tool-0144`（STORM）生成一个主题的综述
2. 使用 `tool-0146`（PaperQA2）对关键论文进行问答
3. 对比不同工具的优缺点

### 阶段3: 实验自动化（5-7天）
1. 使用 `tool-0145`（OpenHands）完成一个代码任务
2. 使用 `tool-0087`（Aider）进行结对编程
3. 理解代码自动化的能力和局限

### 阶段4: 端到端实践（7-14天）
1. 使用 `tool-0143`（AI-Scientist）完成一个小型研究项目
2. 观察整个流程，识别改进点
3. 根据领域选择合适的工具（如量化金融用RD-Agent）

## 实践项目建议

### 项目1: 文献综述
- 选择一个研究主题
- 使用STORM生成综述
- 使用PaperQA2深入分析关键论文
- 输出: 一篇带引用的文献综述

### 项目2: 代码自动化
- 选择一个GitHub Issue
- 使用OpenHands自动修复
- 使用Aider优化代码
- 输出: 修复后的代码和测试

### 项目3: 端到端研究
- 选择一个机器学习问题
- 使用AI-Scientist完成研究
- 生成论文草稿
- 输出: 论文草稿和实验结果

## 关键洞察

1. **工具选择**: 根据研究阶段选择合适工具，文献综述用STORM，实验用OpenHands，端到端用AI-Scientist
2. **成本控制**: 深度研究成本较高，需要合理规划API调用预算
3. **质量把控**: AI生成的内容需要人工审核，尤其是专业性强的领域
4. **领域适配**: 通用工具需要适配特定领域，如生物医学用Biomni

## 延伸阅读

- **论文**: AI-Scientist: Towards Fully Automated Open-Ended Scientific Discovery
- **论文**: STORM: Synthesis of Topic Outlines through Retrieval and Multi-perspective Question Asking
- **博客**: The Future of AI in Scientific Research

## 来源说明

- 来源笔记 ID: `note-0024`
- 参考仓库: Awesome-Auto-Research-Tools
