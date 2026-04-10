---
id: tool-0122
name: Aphrodite Engine
title: Aphrodite Engine
git_url: https://github.com/aphrodite-engine/aphrodite-engine
official_website: https://aphrodite.pygmalion.chat/
author: Aphrodite Engine Community
description: Large-scale inference engine for Hugging Face compatible models with OpenAI-style serving.
tags:
  - inference engine
  - openai compatible api
  - performance
---

# Aphrodite Engine

## Introduction

Aphrodite Engine is a high-performance LLM serving engine designed for multi-user, large-scale inference scenarios.

## Key Features

- Continuous batching and paged-attention-based KV management.
- Broad quantization support and optimized CUDA kernel paths.
- Distributed inference, speculative decoding, multimodal support, and multi-LoRA capabilities.
- OpenAI-compatible API serving with Docker and pip quickstart options.

## Getting Started

Install `aphrodite-engine`, install required kernels, then run `aphrodite run` for local API serving or use the official Docker image for deployment.