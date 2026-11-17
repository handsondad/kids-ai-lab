---
id: tool-0118
name: ExLlamaV2
title: ExLlamaV2
git_url: https://github.com/turboderp-org/exllamav2
official_website: https://github.com/turboderp-org/exllamav2
author: turboderp-org
description: Local GPU inference library with GPTQ/EXL2 quantization support for efficient LLM serving.
lifecycle_status: archived
tags:
  - local inference
  - quantization
  - gpu serving
---

# ExLlamaV2

## Introduction

ExLlamaV2 is a local LLM inference library optimized for modern consumer GPUs and quantized model workflows.

## Key Features

- Dynamic generation API with batching, prompt caching, and paged-attention-based optimizations.
- Support for GPTQ and EXL2 quantization, including mixed-bit configurations.
- Multiple installation paths: source, release wheels, and PyPI/JIT workflows.
- Integration with OpenAI-compatible serving stacks through ecosystem tools such as TabbyAPI.

## Getting Started

Install from source or wheel, then run test/chat examples with local model paths for quantized inference.

## Notes

Repository is archived and ongoing development has moved to ExLlamaV3.

## See Also

- tool-0113 (llama.cpp)
- tool-0124 (llamafile)