---
doc_type: event_card
id: event-0010
title: deepseek_v4_launch
title_zh: DeepSeek-V4发布
event_type: product_launch
event_date: 2026-04-24
status: reviewed
language: zh-CN
importance: high
source_refs:
  - note-0042
aliases:
  - DeepSeek V4发布
  - 深度求索V4发布
search_terms:
  - deepseek v4发布
  - 深度求索v4
  - 2026年ai事件
last_reviewed: 2026-05-08
---

# DeepSeek-V4发布

## 事件概述

深度求索(DeepSeek)于2026年4月24日正式发布V4系列模型，推出Pro版(1.6T参数)和Flash版(284B参数)，支持100万Token上下文，在Agentic Coding评测中位居开源模型榜首，成本仅为GPT-5.5的1/7。

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

### 定价策略
- **V4-Pro**: 输入$0.55/M tokens，输出$2.19/M tokens
- **缓存命中**: 输入仅0.025元/百万Token
- **成本优势**: 约为GPT-5.5的1/7、Claude Opus 4.7的1/6

### 国产算力适配
- 支持9种AI芯片: 清微智能、海光、沐曦、华为昇腾、摩尔线程、昆仑芯、平头哥真武、天数智芯、英伟达
- 首次在国产可重构芯片完成千亿大模型DAY0适配

## 市场反应

### 发布后的市场表现
- 市场反应冷淡，行业讨论寥寥
- 开发者更关注Codex等Agent框架，而非模型本身
- 即便价格更低，开发者仍选用GPT-5.5或Claude 4.6

### 遇冷原因分析
- **速度问题**: 同样任务比Codex慢6倍
- **缺少配套**: 缺少属于自己的Codex类Agent框架
- **行业转向**: 2026年AI行业从模型能力转向实际产出价值
- **体验差距**: 实际使用体验不如闭源模型

## 行业影响

### 对开源生态的影响
- 救活全球开源AI生态
- 证明开源模型可接近闭源SOTA
- 推动开源模型能力提升

### 对国产算力的影响
- 推动国产AI芯片生态发展
- 打破算力硬件壁垒
- 实现多元AI算力可用、易用、好用

### 对竞争格局的影响
- 证明中国团队可训练顶级模型
- 推动大模型价格下降
- 加剧行业竞争

## 相关工具

- `tool-0164`: DeepSeek-V4工具卡

## 相关主题

- `topic-0112`: 2026年大语言模型对比
- `topic-0117`: 2026年AI趋势

## 后续发展

- DeepSeek-V4成为开源模型首选
- 推动国产算力生态发展
- 但市场反应冷淡，开发者更关注Agent框架

## 教训与启示

- **价格不是万能药**: 便宜不能解决所有问题
- **体验为王**: 实际使用体验比跑分更重要
- **生态重要**: 需要配套的Agent框架
- **速度关键**: 推理速度影响用户体验

## 来源说明

- 来源笔记 ID: `note-0042`
- 官方网站: https://www.deepseek.com
- 发布日期: 2026-04-24
