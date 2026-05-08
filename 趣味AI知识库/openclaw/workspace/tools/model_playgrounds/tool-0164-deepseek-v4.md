---
doc_type: tool_card
id: tool-0164
title: deepseek_v4
title_zh: DeepSeek-V4
tool_category: model_playgrounds
status: reviewed
language: zh-CN
learning_level: level_100
pricing_model: usage_based
platforms:
  - web
  - api
source_refs:
  - note-0042
aliases:
  - DeepSeek V4
  - 深度求索V4
search_terms:
  - deepseek v4
  - 开源大模型
  - 国产ai
  - agentic coding
last_reviewed: 2026-05-08
---

# DeepSeek-V4

## 工具定位

DeepSeek-V4是深度求索于2026年4月发布的开源大模型系列，分为Pro版(1.6T参数)和Flash版(284B参数)，支持100万Token上下文，在Agentic Coding评测中位居开源模型榜首，成本仅为GPT-5.5的1/7。

## 适用场景

- **仓库级代码理解**: 大型代码库全量处理
- **后端逻辑生成**: 工程级代码生成
- **Agent自动编程**: Agent任务性价比极高
- **成本敏感项目**: 预算有限的开发场景
- **国产化替代**: 需要国产算力支持

## 核心能力

### 1. 超长上下文
- 100万Token上下文窗口
- 大型代码库全量处理
- 长文本稳定性高

### 2. 编程能力强
- Agentic Coding: 开源模型榜首
- SWE-Verified: 80.6%
- HumanEval pass@1: 90.8%
- Codeforces评分: 3206分

### 3. 架构创新
- CSA+HCA混合长上下文机制
- mHC流形约束超连接
- Muon优化器
- Mega-Kernel兼容多芯片

### 4. 国产算力适配
- 支持9种AI芯片
- 首次在国产可重构芯片完成DAY0适配
- 打破算力硬件壁垒

### 5. 成本极低
- V4-Pro: 输入$0.55/M tokens，输出$2.19/M tokens
- 缓存命中: 输入仅0.025元/百万Token
- 成本约为GPT-5.5的1/7、Claude Opus 4.7的1/6

## 上手路径

### 第一步：访问平台
- 访问 https://www.deepseek.com
- 注册账号
- 选择快速模式或专家模式

### 第二步：基础使用
- 输入问题或任务
- 选择V4-Pro或V4-Flash
- 获取结果

### 第三步：API调用
- 获取API Key
- 调用API接口
- 集成到应用中

## 选择边界

### 适合选择DeepSeek-V4的场景
✅ 仓库级代码理解
✅ 后端逻辑生成
✅ Agent自动编程任务
✅ 成本敏感项目
✅ 国产化替代需求

### 不适合的场景
❌ 需要极快推理速度
❌ 复杂Agent工作流
❌ 强审美要求的前端UI
❌ 需要配套Agent框架

## 性能对比

### 与闭源模型对比
- **编程能力**: 接近Claude Opus 4.6(80.8%)
- **推理能力**: 略低于GPT-5系列、Claude Opus 4.6
- **成本**: 仅为闭源模型的1/6~1/7

### 与开源模型对比
- **Agentic Coding**: 开源模型榜首
- **长上下文**: 100万Token，开源领先
- **成本**: 开源模型中性价比最高

## 相关主题

- **2026年大语言模型对比**: `topic-0112`
- **2026年AI趋势**: `topic-0117`
- **成本优化**: `topic-0012`

## 来源说明

- 来源笔记 ID: `note-0042`
- 官方网站: https://www.deepseek.com
- 发布日期: 2026-04-24
- 定价: Pro版输入$0.55/M tokens，输出$2.19/M tokens
