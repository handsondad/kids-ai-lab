---
doc_type: source_article
id: article-0143
title: LLM Course Linked Content Digests
source_type: web_repo_readme
source_url: https://github.com/mlabonne/llm-course/blob/main/README.md
author: Maxime Labonne
language: zh-CN
retrieved_at: 2026-04-08
---

# README 外链内容提炼（逐链接摘要版）

## 提炼说明

本卡基于你提供的 README 原文，对每个链接在文中的用途与内容定位进行摘要化提炼，形成可检索的链接内容索引。

## 顶部入口链接

- Follow me on X: 作者动态与课程更新入口。
- Hugging Face: 作者模型与数据资产主页。
- Blog: 教程文章主阵地，含微调、量化、解码等实践。
- LLM Engineer's Handbook: 端到端 LLM 应用工程书籍。
- DeepWiki: README 的更完整扩展版本。

## Notebooks: Tools（工具型一键实践）

- LLM AutoEval: 自动化评测工作流，强调可复现评分。
- LazyMergekit: 模型合并一键流程，快速试验融合策略。
- LazyAxolotl: 云端微调快速起步模板。
- AutoQuant: 多量化格式一键转换流程。
- Model Family Tree: 模型血缘与合并关系可视化。
- ZeroSpace: 基于 ZeroGPU 快速生成 Gradio 对话界面。
- AutoAbliteration: 面向风格/行为改造的自动流程。
- AutoDedup: 数据去重流程，降低训练污染风险。

## Notebooks: Fine-tuning（微调实操）

- Finetune Llama 3.1 with Unsloth: 高效 SFT 路线与低资源配置。
- Finetune Llama 3 with ORPO: 单阶段偏好优化思路。
- Finetune Mistral-7b with DPO: 从 SFT 到偏好优化的性能提升。
- Finetune Mistral-7b with QLoRA: 免费层 Colab 的参数高效微调。
- Finetune CodeLlama with Axolotl: 代码模型微调完整流程。
- Finetune Llama 2 with QLoRA: 入门级步骤化教程。

## Notebooks: Quantization（量化实操）

- Introduction to Quantization: 量化基本概念与 8-bit 起步。
- 4-bit GPTQ: 消费级硬件可运行方案。
- GGUF + llama.cpp: 本地推理生态核心路径。
- ExLlamaV2: EXL2 量化运行与上传实践。

## Notebooks: Other（进阶专题）

- Merge LLMs with MergeKit: 无需大规模训练的模型融合路线。
- Create MoEs with MergeKit: 多专家组合与能力拼装。
- Uncensor with Abliteration: 不重训条件下的行为调节。
- Improve ChatGPT with Knowledge Graphs: 图谱增强问答思路。
- Decoding Strategies: 从 beam 到 nucleus 的采样策略对比。

## Fundamentals 外链内容

### 数学

- 3Blue1Brown 线代: 几何直觉化线代理解。
- StatQuest 统计: 统计概念工程化解释。
- Seeing Theory: 可交互概率统计学习。
- Immersive Linear Algebra: 线代可视化补充。
- Khan 线代/微积分/统计: 系统化基础课程。

### Python 与 ML

- Real Python: Python 全层级教程库。
- freeCodeCamp Python: 入门长视频。
- Python Data Science Handbook: NumPy/Pandas/可视化参考书。
- freeCodeCamp ML for Everybody: 初学者算法实操。
- Udacity Intro to ML: 包含 PCA 等经典主题。

### 神经网络与 NLP

- 3Blue1Brown 神经网络: 结构与机制直觉。
- freeCodeCamp Deep Learning: 深度学习速通。
- Fast.ai: 实战导向深度学习课程。
- Patrick Loeber PyTorch: 新手友好 PyTorch 系列。
- Lena Voita: 词向量课程。
- RealPython spaCy: NLP 工程上手。
- Kaggle NLP Guide: Notebook 驱动实践。
- Illustrated Word2Vec: Word2Vec 图解。
- PyTorch RNN from Scratch: RNN/LSTM/GRU 代码实现。
- colah LSTM: LSTM 理论经典文章。

## Scientist 外链内容

### 架构与预训练

- Visual intro to Transformers / LLM Visualization / nanoGPT: Transformer 与 GPT 机制理解。
- Attention? Attention!: 注意力发展历史。
- FineWeb / RedPajama v2: 预训练数据构建与质量过滤。
- nanotron / SmolLM2: 训练代码参考。
- Distributed training survey / OLMo2 / LLM360: 分布式训练与开源全栈案例。

### 后训练与 SFT

- LLM Datasets / NeMo-Curator / Distilabel / Semhash: 后训练数据构造与清洗。
- Chat templating: 对话数据到训练样本的模板映射。
- TRL / Unsloth / Axolotl: 主流微调框架。

### 偏好对齐与评测

- DPO/GRPO/PPO 论文与教程: 主要对齐算法路线。
- Illustrating RLHF / Preference Tuning: RLHF 与替代方案。
- Evaluation guidebook / Open LLM Leaderboard / lm-eval-harness / lighteval / arena: 自动评测与人工评测组合。

### 量化与新趋势

- llama.cpp / GPTQ / EXL2 / AWQ / SmoothQuant / ZeroQuant: 推理效率与压缩能力。
- mergekit / Smol Vision / multimodal / abliteration / SAE / test-time compute: 新趋势实验入口。

## Engineer 外链内容

### 运行与基础构建

- OpenAI / Google / Anthropic / OpenRouter / Together / HF Inference: 模型 API 调用生态。
- Hugging Face Hub / Spaces / LM Studio / llama.cpp / ollama: 本地与托管运行路径。
- Prompting Guide / Outlines / LMQL: 提示与结构化输出。

### RAG 与 Agent

- Chroma / Pinecone / Milvus / FAISS / Annoy: 向量检索基础设施。
- LangChain / LlamaIndex / MCP introduction / Ragas / DeepEval: RAG 编排与质量评估。
- DSPy / RAG-fusion / Query Construction / SQL QA: Advanced RAG 技术面。
- MCP / A2A / OpenAI SDK / ADK / Claude Agent SDK / LangGraph / CrewAI / AutoGen: Agent 协议与框架全景。

### 性能、部署、安全

- GPU inference / assisted generation / EAGLE-3 / speculators: 推理性能优化。
- Gradio / Streamlit / TGI / vLLM / MLC / mnn-llm / SkyPilot: 部署路径。
- garak / langfuse / OWASP LLM Top 10 / PIPE / red teaming: 安全评测与防护。

## 可直接落库的价值

1. 每个链接已具备用途标签，可按问题场景检索。
2. 可直接反向生成学习任务单与实验清单。
3. 可与现有 topic-0082 至 topic-0085 形成内容互补。

## 优先级分层（执行版）

### P0 必学（先做）

- Fundamentals 核心资源：3Blue1Brown、Khan、Real Python、Fast.ai。
- Notebook 核心复现：Unsloth 微调、DPO、GPTQ/GGUF 量化。
- Engineer 核心链路：LangChain/LlamaIndex、MCP、Ragas/DeepEval。

### P1 强相关（第二阶段）

- Scientist 扩展：FineWeb、RedPajama、NeMo-Curator、Distilabel。
- Agent 体系：LangGraph、CrewAI、AutoGen、ADK、OpenAI SDK。
- 部署体系：TGI、vLLM、MLC、SkyPilot、Streamlit/Gradio。

### P2 进阶探索（按需）

- 新趋势：mergekit、SAE、test-time compute。
- 安全深化：garak、OWASP LLM Top 10、PIPE、red teaming。
- 多端优化：mnn-llm、speculators、EAGLE-3。
