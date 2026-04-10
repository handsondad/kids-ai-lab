---
id: tool-0115
name: Text Generation Inference
title: Text Generation Inference
git_url: https://github.com/huggingface/text-generation-inference
official_website: https://huggingface.co/docs/text-generation-inference
author: Hugging Face
description: High-performance LLM serving toolkit with streaming, batching, and OpenAI-compatible APIs.
lifecycle_status: maintenance
tags:
  - llm serving
  - inference
  - tgi
---

# Text Generation Inference

## Introduction

Text Generation Inference (TGI) is a serving toolkit for production LLM text generation with throughput and latency optimizations.

## Key Features

- Continuous batching, streaming responses, and tensor-parallel execution.
- OpenAI-compatible chat completion interface and documented REST APIs.
- Quantization options and operational telemetry integration.
- Containerized deployment patterns across multiple hardware targets.

## Getting Started

Run official Docker images and expose chat/completions endpoints, then tune quantization and runtime flags for workload targets.

## Notes

Repository status indicates archived/read-only plus maintenance-mode guidance; evaluate successor engines when planning new long-term deployments.

## See Also

- tool-0111 (Triton Inference Server)
- tool-0123 (Xinference)