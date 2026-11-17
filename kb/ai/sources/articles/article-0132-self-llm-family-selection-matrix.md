---
doc_type: source_article
id: article-0132
title: self-llm Family Selection Matrix
source_type: repo_doc
source_url: c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
author: Datawhale Contributors
language: zh-CN
retrieved_at: 2026-04-03
---

# self-llm 家族横向选型总表

## What This Source Is

这是一份基于 self-llm 已提炼家族卡（topic-0019 至 topic-0040）的横向选型矩阵，用于快速回答“该先用哪个家族”。

## 选型维度说明

- 部署后端：FastAPI、vLLM、SGLang、Transformers、Ollama 等。
- 应用接入：WebDemo、LangChain、本地化交互。
- 微调方式：LoRA/QLoRA/GRPO/DPO 等。
- 多模态：是否覆盖图像/语音等非纯文本任务。
- 评测与回归：是否有 EvalScope、并发、可视化实验记录。

## Family Matrix

| 家族 | 主场景 | 常见部署后端 | 应用接入 | 微调方式 | 多模态 | 评测/回归线索 | 推荐卡片 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Qwen3 | 通用主力 + 快速迭代 | FastAPI, vLLM, LMStudio | WebDemo, LangChain | LoRA, GRPO | 部分（Qwen3-VL 扩展） | EvalScope, SwanLab | topic-0019 |
| ChatGLM3 | 中文通用接入 | Transformers, FastAPI | WebDemo, LangChain | LoRA | 否 | 基础回归 + 交互验证 | topic-0020 |
| DeepSeek | 通用 + 代码双场景 | FastAPI, vLLM, Transformers | WebDemo, LangChain | LoRA, QLoRA, GRPO | 否 | Distill/Coder 分线评测 | topic-0021 |
| InternLM 系 | 版本迁移与升级 | FastAPI, Transformers | WebDemo, LangChain | LoRA, QLoRA | 否 | 版本对照回归 | topic-0022 |
| Gemma3 | 轻量工程化 | FastAPI, Ollama | Open-WebUI | LoRA, GRPO | 否 | EvalScope + 平台对照 | topic-0023 |
| GLM-4 系 | 连续版本选型 | vLLM, SGLang, FastAPI | Gradio, WebDemo | LoRA | 部分（Thinking/V） | 并发/效果对照 | topic-0024 |
| Qwen2.5-Coder | 代码任务 | FastAPI, vLLM | WebDemo, LangChain | LoRA | 否 | 代码任务集回归 | topic-0025 |
| Qwen2-VL | 视觉语言任务 | FastAPI, vLLM | WebDemo | LoRA | 是（图文/OCR） | 任务专项评测 | topic-0026 |
| Llama3 系 | 生态桥接（服务化+本地） | FastAPI, Transformers, Ollama | WebDemo, LangChain | LoRA | 否 | 服务化与本地化双回归 | topic-0027 |
| MiniCPM 系 | 轻量 + 多模态 | FastAPI, Transformers | WebDemo | LoRA, Full | 是（语音/多模态） | 子任务分维评测 | topic-0028 |
| phi4 | 中小规模实验 | FastAPI | WebDemo, LangChain | LoRA, GRPO | 否 | SwanLab 记录 + 对比 | topic-0029 |
| Qwen2.5 | 中文通用基线 | FastAPI, vLLM | WebDemo, LangChain | LoRA | 否 | o1-like 与基础问答分测 | topic-0030 |
| Gemma2 | 成本-效果平衡 | FastAPI | WebDemo, LangChain | Peft LoRA | 否 | 延迟/吞吐/质量三维 | topic-0031 |
| Yuan2.0 系 | 参数规模迁移 | FastAPI, vLLM | WebDemo, LangChain | LoRA | 否 | 2B vs M32 A/B 回归 | topic-0032 |
| XVERSE | 中文对照基线 | Transformers, FastAPI | WebDemo, LangChain | LoRA | 否 | 横向对照评测 | topic-0033 |
| CharacterGLM | 角色化对话 | Transformers, FastAPI | WebDemo | LoRA | 否 | 角色稳定性 + 安全评测 | topic-0034 |
| Kimi-K2.5 | 高性能推理 | vLLM, SGLang | API 服务 | LoRA | 否 | 双后端压测 | topic-0035 |
| Step-3.5-Flash | 轻量高效推理 | vLLM, SGLang | API 服务 | LoRA | 否 | 轻量部署回归 | topic-0036 |
| MiniMax-M2.5 | 三后端选型 | vLLM, SGLang, Transformers | 在线体验, API | LoRA | 否 | 三栈对照评测 | topic-0037 |
| gpt-oss-20b | 实验闭环 | vLLM, LMStudio | 本地交互, API | LoRA, DPO | 否 | EvalScope 并发 + 微调复测 | topic-0038 |
| Hunyuan-A13B | 架构到落地 | SGLang | API 服务 | LoRA | 否 | 架构解读 + 实验记录 | topic-0039 |
| Llama4 | 新代对话应用 | 应用化部署 | 对话助手 | 任务适配 | 否 | 多轮对话回归 | topic-0040 |
| Qwen3-VL | 视觉语言主线 | FastAPI, vLLM | WebDemo | LoRA | 是（图文/OCR） | 多模态专项评测 | topic-0041 |
| BGE-M3 | 检索嵌入底座 | Embedding Pipeline | RAG/检索系统 | Embedding Finetune | 否 | Recall@K/MRR 对照 | topic-0042 |
| Kimi-VL | 视觉推理对话 | 应用化部署 | Web 对话助手 | 任务适配 | 是（图文） | 多轮视觉对话回归 | topic-0043 |
| SpatialLM | 空间智能 | 专项部署 | 3D 任务链路 | 任务适配 | 是（点云/3D） | 3D 检测与理解评测 | topic-0044 |
| Hunyuan3D-2 | 3D 生产链路 | API Server, Gradio | 代码调用, API | 任务适配 | 是（3D） | 服务稳定性长测 | topic-0045 |

## 快速决策建议

1. 先按任务选家族：代码优先 Qwen2.5-Coder/DeepSeek-Coder，视觉优先 Qwen2-VL，角色对话优先 CharacterGLM。
2. 再按资源选路径：资源紧张优先 Gemma3/MiniCPM/phi4，需要通用主力优先 Qwen3/Qwen2.5。
3. 最后按工程形态选部署：生产并发优先 vLLM/SGLang，快速原型优先 FastAPI/WebDemo，本地验证可走 Ollama/GGUF。

## References

- c:/Xiuqin/Code/xiuqin/self-llm-master/support_model.md
- topic-0019 ~ topic-0040
