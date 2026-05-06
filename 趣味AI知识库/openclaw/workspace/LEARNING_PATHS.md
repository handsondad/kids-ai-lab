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

## 后续写回建议

- 新文章先落 `sources/articles/`
- 再写 `sources/notes/`
- 能稳定回答的问题，再拆成 `topics/`、`tools/` 或 `collections/`