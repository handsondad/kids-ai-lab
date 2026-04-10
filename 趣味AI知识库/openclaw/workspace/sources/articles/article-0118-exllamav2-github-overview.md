---
doc_type: source_article
id: article-0118
title: exllamav2 GitHub Overview
source_type: github
source_url: https://github.com/turboderp-org/exllamav2
author: turboderp-org
language: en
retrieved_at: 2026-04-03
---

# turboderp-org/exllamav2

## What This Source Is

This source is the ExLlamaV2 repository for local LLM inference on consumer GPUs, with strong focus on quantization-aware performance.

## Key Points Extracted

- ExLlamaV2 provides local GPU inference with dynamic batching, prompt caching, and paged-attention-enabled generation pipelines.
- It supports GPTQ and EXL2 quantization formats, including mixed-bit configurations for memory/performance tradeoffs.
- Installation paths include source build, release wheels, and PyPI/JIT-style setup.
- Integration guidance highlights OpenAI-compatible serving through TabbyAPI and compatibility with common local frontends.
- Repository note indicates archived status and recommends migration to ExLlamaV3 for ongoing development.

## Why It Matters

ExLlamaV2 remains an important reference for high-efficiency local quantized inference workflows, especially for constrained VRAM scenarios.

## References

- Repository: https://github.com/turboderp-org/exllamav2
- README source used: https://raw.githubusercontent.com/turboderp-org/exllamav2/master/README.md
- Successor project: https://github.com/turboderp-org/exllamav3