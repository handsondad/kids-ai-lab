---
doc_type: source_note
id: note-0010
source_ref: article-0127
chapter: self_llm_practical_playbook
chapter_zh: self-llm 实操路径提炼
source_kind: repo_extraction
focus_topic_clusters:
  - ai_learning
  - inference_and_serving
  - finetuning
  - ai_engineering
derived_cards:
  - topic-0017
  - topic-0018
  - topic-0019
  - topic-0020
  - topic-0021
  - topic-0022
  - topic-0023
  - topic-0024
  - topic-0025
  - topic-0026
  - topic-0027
  - topic-0028
  - topic-0029
  - topic-0030
  - topic-0031
  - topic-0032
  - topic-0033
  - topic-0034
  - topic-0035
  - topic-0036
  - topic-0037
  - topic-0038
  - topic-0039
  - topic-0040
  - topic-0041
  - topic-0042
  - topic-0043
  - topic-0044
  - topic-0045
  - tool-0126
  - collection-0006
status: reviewed
last_reviewed: 2026-04-03
---

# 核心提炼

- self-llm-master 的核心价值不在单个模型，而在“统一方法论 + 多模型实践模板”。
- 教程可抽象为四段式路径：环境配置、部署调用、应用集成、微调评测。
- 对初学者友好：几乎每类模型都给出 FastAPI/WebDemo/LangChain/LoRA 等常见落地形态。
- 对工程团队友好：提供跨硬件平台（AMD/Ascend/Apple M）的兼容落地经验。
- 模型矩阵密度高（`models/` 文档约 249 篇），适合提炼为统一 SOP 而非零散单模型笔记。

## 可沉淀的知识资产

- 主题卡：开源 LLM 学习与工程落地四阶段路线。
- 主题卡：按模型家族组织的实操手册（Qwen3、ChatGLM3、DeepSeek、InternLM、Gemma3、GLM-4 系）。
- 主题卡：按任务形态组织的实操手册（Qwen2.5-Coder、Qwen2-VL、Llama3 系、MiniCPM 系、phi4）。
- 主题卡：按中文通用与角色化场景补全的实操手册（Qwen2.5、Gemma2、Yuan2.0、XVERSE、CharacterGLM）。
- 主题卡：按最新模型补全的实操手册（Kimi-K2.5、Step-3.5-Flash、MiniMax-M2.5、gpt-oss-20b、Hunyuan-A13B、Llama4）。
- 主题卡：按多模态与空间智能补全的实操手册（Qwen3-VL、BGE-M3、Kimi-VL、SpatialLM、Hunyuan3D-2）。
- 选型总表：family 横向对照矩阵（article-0132），用于按任务/资源/部署路径快速决策。
- 工具卡：self-llm-master 作为教程资源库与模板仓。
- 合集卡：从本地部署到应用开发的实操闭环。

## 学习者高频问题

- 新手应该先学部署还是先学微调。
- 同一模型的 CLI、API、WebDemo 三种接入如何选型。
- LoRA 与 QLoRA 在不同硬件预算下如何决策。
- 如何把示例项目迁移成自己的业务场景。