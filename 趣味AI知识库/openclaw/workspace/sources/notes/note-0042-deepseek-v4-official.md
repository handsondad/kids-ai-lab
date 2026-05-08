---
doc_type: source_note
id: note-0042
title: deepseek_v4_official
title_zh: DeepSeek-V4官方发布
source_type: official_website
source_url: https://www.deepseek.com
language: zh-CN
reliability: high
last_accessed: 2026-05-08
summary: DeepSeek于2026年4月24日发布V4系列模型，推出Pro版(1.6T参数)和Flash版(284B参数)，支持100万Token上下文，在Agentic Coding评测中位居开源模型榜首
tags:
  - deepseek
  - open_source
  - chinese_ai
  - moe
related_tools:
  - tool-0164
related_topics:
  - llm_comparison
  - ai_trends_2026
---

# DeepSeek-V4官方发布摘要

## 核心定位

DeepSeek-V4是深度求索于2026年4月24日发布的开源大模型系列，分为Pro版(1.6T参数)和Flash版(284B参数)，支持100万Token上下文，在Agentic Coding评测中位居开源模型榜首。

## 关键信息

### 发布时间
- 发布日期: 2026年4月24日
- 发布方: 深度求索(DeepSeek)

### 版本信息
- **DeepSeek-V4-Pro**: 总参数1.6T，激活49B
- **DeepSeek-V4-Flash**: 总参数284B，激活13B

### 核心能力
- **上下文窗口**: 100万Token
- **架构**: MoE(混合专家模型)
- **Agentic Coding**: 开源模型榜首
- **SWE-Verified**: 80.6%
- **HumanEval pass@1**: 90.8%
- **Codeforces评分**: 3206分

### 技术突破
- **CSA+HCA**: 压缩稀疏注意力+重度压缩注意力混合长上下文机制
- **mHC**: 流形约束超连接
- **Muon优化器**: 提升训练收敛和稳定性
- **Mega-Kernel**: 兼容英伟达+华为昇腾

### 定价（2026年）
- **V4-Pro**: 输入$0.55/M tokens，输出$2.19/M tokens
- **缓存命中**: 输入仅0.025元/百万Token
- **成本优势**: 约为GPT-5.5的1/7、Claude Opus 4.7的1/6

### 国产算力适配
- 支持9种AI芯片: 清微智能、海光、沐曦、华为昇腾、摩尔线程、昆仑芯、平头哥真武、天数智芯、英伟达
- 首次在国产可重构芯片完成千亿大模型DAY0适配

## 适用场景

- 仓库级代码理解
- 后端逻辑生成
- Agent自动编程任务
- 成本敏感项目
- 国产化替代需求

## 市场反应

- 发布后市场反应冷淡
- 开发者更关注Agent框架而非模型本身
- 价格虽低但实际使用体验不如GPT-5.5/Claude 4.6
- 速度较慢，同样任务比Codex慢6倍

## 技术优势

- 完全开源，权重+技术报告+核心库全开放
- 长文本编码能力突出
- 国产算力全栈适配
- 成本极低

## 注意事项

- 推理速度较慢
- 复杂Agent工作流表现略弱
- 纯知识类任务有差距
- 缺少配套的Agent框架

## 数据来源

- 官方网站: https://www.deepseek.com
- 发布日期: 2026-04-24
- 更新时间: 2026-05-08
