---
id: tool-0117
name: DeepSpeed-MII
title: DeepSpeed-MII
git_url: https://github.com/deepspeedai/DeepSpeed-MII
official_website: https://www.deepspeed.ai/
author: DeepSpeed AI
description: Inference-focused library for high-throughput, low-latency LLM serving using DeepSpeed optimizations.
tags:
  - llm serving
  - deepspeed
  - throughput optimization
---

# DeepSpeed-MII

## Introduction

DeepSpeed-MII is a Python library for accelerated model inference with a focus on high throughput and low latency generation.

## Key Features

- Continuous batching, blocked KV cache, dynamic split-fuse, and CUDA-kernel optimizations.
- Non-persistent pipeline and persistent deployment modes.
- Multi-GPU scaling via tensor parallel and replica strategies.
- Optional REST API gateway and client abstractions for service integration.

## Getting Started

Install from PyPI (`deepspeed-mii`) and start with the minimal `mii.pipeline()` or `mii.serve()` examples for single- or multi-GPU deployment.