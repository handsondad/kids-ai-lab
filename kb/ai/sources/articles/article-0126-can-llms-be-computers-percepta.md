---
doc_type: source_article
id: article-0126
title: Can LLMs Be Computers? (Percepta)
source_type: web_article
source_url: https://www.percepta.ai/blog/can-llms-be-computers
author: Christos Tzamos et al. (Percepta)
language: en
retrieved_at: 2026-04-03
---

# Can LLMs Be Computers?

## What This Source Is

This source is a Percepta technical article discussing whether transformers can execute computation internally (instead of relying on external tools), and presenting a prototype system that runs compiled programs inside a transformer.

## Core Thesis

- Current LLM systems often solve exact computation tasks by delegating execution to external tools (code interpreter, agent loops).
- The article argues that true in-model computation requires the transformer itself to execute long, exact, multi-step programs reliably and efficiently.
- The proposed system embeds a RAM-like executor (WebAssembly-style execution trace) in transformer decoding.

## Key Technical Ideas

- Program-to-trace execution: compiled program steps are emitted and executed as an autoregressive token trace.
- Fast decoding path for execution traces: under a structured regime, attention lookup is changed from linear scan to logarithmic-time retrieval.
- 2D head restriction: using head dimension 2 enables a geometric interpretation (convex-hull supporting-point query) for faster lookup.
- Claimed complexity shift in target regime: per-step from Theta(t) style scanning to O(log t) retrieval behavior.

## Evidence and Demonstrations Reported

- Arithmetic and algorithmic tasks are executed internally without external tool calls.
- Sudoku example reports exact solving with long execution traces, including hard instances.
- Optimization example (Hungarian algorithm / min-cost perfect matching) shows long-horizon execution traces.
- Reported throughput in demos includes CPU-side high token generation rates over long traces.

## Why It Matters

- Suggests a path where models are not only reasoning/orchestrating, but also computing inside the same forward loop.
- Could reduce dependence on external executor round-trips for deterministic workloads.
- Opens design space for hybrid systems: reasoning path + fast execution path.

## Limitations and Open Questions (as inferred from the article)

- Scope is a specialized execution regime, not a universal acceleration claim for all transformer workloads.
- 2D-head parameterization may trade off capability on broader language tasks; large-scale training behavior remains an open question.
- Hard-max / sparse-like execution assumptions may differ from general softmax-heavy generation settings.
- Engineering maturity and reproducibility details (benchmarks, ablations, external comparisons) would need deeper validation beyond a blog-level presentation.

## Practical Takeaways for This KB

- Treat this as a high-signal systems idea at the intersection of model architecture and inference algorithms.
- Relevant keywords for follow-up cards: in-model execution, program traces, differentiable execution substrate, geometric attention acceleration.
- Useful to cross-reference with tool-use/agentic orchestration cards where computation currently happens outside the model.

## References

- Article: https://www.percepta.ai/blog/can-llms-be-computers
- Organization: https://www.percepta.ai/