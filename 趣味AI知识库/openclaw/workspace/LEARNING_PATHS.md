# LEARNING_PATHS.md - 当前学习导航

这份文件不是知识卡本身，而是当前这套 AI 学习库里最值得先走的一些路径入口。

如果你想按课程推进（入门/进阶/前沿），而不是按主题跳着看，优先打开：

- `AGENT_LEARNING_MAP.md`

## 如果你刚开始系统学 AI

先看：

1. `collections/collection-0001-ai-foundations-and-tooling.md`
2. `topics/architecture/topic-0001-transformer-and-llm-basics.md`
3. `tools/model_playgrounds/tool-0001-llm-playground-comparison.md`

适合的问题：

- Transformer 到底是什么
- 为什么大模型需要 playground 这类实验工具
- 我应该先学概念还是先上手工具

## 如果你在学 Agent 系统怎么搭

先看：

1. `collections/collection-0003-agent-system-design-overview.md`
2. `topics/architecture/topic-0004-prompt-context-harness-and-in-model-execution.md`
3. `topics/agents/topic-0002-harness-engineering.md`
4. `topics/agents/topic-0006-agent-self-verification-and-trace-optimization.md`
5. `tools/observability/tool-0002-agent-observability-and-tracing.md`
6. `tools/observability/tool-0003-langsmith.md`
7. `tools/observability/tool-0004-phoenix.md`

适合的问题：

- 这个问题到底该调 prompt 还是 harness
- 为什么 agent 会早退、误判成功或走死循环
- trace 平台在 agent 系统里到底有什么用
- LangSmith 这类具体工具在这套链条里处在哪一层
- Phoenix 这类把 tracing 和 evaluation 放一起的平台又适合什么团队

## 如果你在追模型内部执行能力

先看：

1. `collections/collection-0002-harness-and-in-model-compute.md`
2. `topics/architecture/topic-0003-tool-use-vs-in-model-execution.md`
3. `topics/architecture/topic-0005-2d-attention-fast-path.md`
4. `sources/notes/note-0004-can-llms-be-computers-short-summary.md`

适合的问题：

- 工具调用和模型内部执行到底差在哪
- 2D attention fast path 到底解决了什么瓶颈
- 未来模型会不会把部分程序逻辑直接吸收到内部执行路径里

## 如果你在追 2025-2026 前沿进展

先看：

1. `collections/collection-0014-ai-breakthroughs-2025-2026.md`
2. `topics/agents/topic-0105-agentic-ai-autonomous-workflows.md`
3. `events/event-0002-gpt-5-launch.md`
4. `tools/model_playgrounds/tool-0132-deepseek-v3-cost-efficiency.md`
5. `collections/collection-0015-openclaw-ecosystem-and-variants.md`

适合的问题：

- GPT-5 的推理能力和 GPT-4 有什么本质区别
- 为什么说 2025 年是智能体 (Agent) 的元年
- 原生多模态模型 (如 Gemini 3) 对未来应用有什么影响
- DeepSeek 是如何通过架构创新实现极致性价比的
- 什么是“养龙虾”，OpenClaw 有哪些好玩的衍生版本
- DeepSeek-R2 是如何实现 32B 参数媲美顶尖模型的
- 什么是动态计算架构 (Dynamic-Computation)，它对万亿参数模型意味着什么

## 一个简单判断法

- 如果问题是“怎么说”，先看 Prompt。
- 如果问题是“给什么信息”，先看 Context。
- 如果问题是“怎么让它稳定做完”，先看 Harness。
- 如果问题是“模型自己能不能执行长程精确计算”，再看 In-Model Execution。

## 如果你想选择合适的AI编程工具

先看：

1. `topics/models/topic-0112-llm-comparison-2026.md`
2. `tools/model_playgrounds/tool-0152-gpt-5.md`
3. `tools/model_playgrounds/tool-0153-claude-4.md`
4. `tools/model_playgrounds/tool-0155-deepseek-r1.md`
5. `tools/model_playgrounds/tool-0164-deepseek-v4.md`
6. `tools/model_playgrounds/tool-0156-cursor.md`
7. `tools/ai_programming_tools/tool-0157-github-copilot.md`
8. `tools/ai_programming_tools/tool-0158-windsurf.md`

适合的问题：

- 2026年主流AI编程工具有哪些，如何选择
- Claude Code、Cursor、Copilot、Windsurf各有什么优势
- 不同编程场景应该用什么工具
- 如何平衡成本和能力

## 如果你想了解多模态AI技术

先看：

1. `topics/models/topic-0116-multimodal-ai-technology.md`
2. `tools/ai_image_tools/tool-0159-midjourney.md`
3. `tools/ai_image_tools/tool-0160-dall-e-3.md`
4. `tools/ai_video_tools/tool-0161-seedance.md`
5. `tools/ai_audio_tools/tool-0162-suno.md`
6. `tools/ai_audio_tools/tool-0163-elevenlabs.md`
7. `events/event-0009-sora-shutdown.md`

适合的问题：

- 多模态AI包括哪些技术领域
- AI图像生成、视频生成、音频生成工具有哪些
- Midjourney和DALL-E 3有什么区别
- 中国在视频生成领域的进展如何
- 为什么OpenAI Sora会关停
- 如何选择合适的多模态AI工具


## 如果你想了解2026年AI发展趋势

先看：

1. `topics/trends/topic-0117-ai-trends-2026.md`
2. `events/event-0007-gpt5-launch.md`
3. `events/event-0008-claude4-launch.md`
4. `events/event-0009-sora-shutdown.md`
5. `events/event-0010-deepseek-v4-launch.md`
6. `topics/tools/topic-0115-ai-programming-tools-comparison.md`

适合的问题：

- 2026年AI发展的核心趋势是什么
- 为什么说2026年是智能体商用元年
- GPT-5和Claude 4有什么突破
- 为什么OpenAI Sora会关停
- DeepSeek-V4为什么发布后遇冷
- 中国AI在哪些领域取得领先
- AI编程工具如何选择

## 后续写回建议

## 如果你想用AI加速科研流程

先看：

1. `collections/collection-0016-ai-research-automation-track.md`
2. `topics/agents/topic-0109-ai-research-automation.md`
3. `tools/agent_frameworks/tool-0144-storm.md`
4. `tools/agent_frameworks/tool-0146-paperqa2.md`
5. `tools/agent_frameworks/tool-0145-openhands.md`
6. `tools/agent_frameworks/tool-0143-ai-scientist.md`
7. `events/event-0004-ai-scientist-v2-peer-review-acceptance.md`

适合的问题：

- AI科研自动化到底是什么，能帮我做什么
- 如何自动化文献综述和论文阅读
- 如何自动化实验和代码开发
- 端到端研究系统是如何工作的
- AI生成的论文质量如何，能否通过同行评审

- 新文章先落 `sources/articles/`
- 再写 `sources/notes/`
- 能稳定回答的问题，再拆成 `topics/`、`tools/` 或 `collections/`