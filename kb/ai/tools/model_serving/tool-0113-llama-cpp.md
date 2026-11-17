---
id: tool-0113
name: llama.cpp
title: llama.cpp
git_url: https://github.com/ggml-org/llama.cpp
official_website: https://github.com/ggml-org/llama.cpp
author: ggml-org
description: Lightweight C/C++ LLM inference stack for local and edge deployment with GGUF support.
tags:
  - local inference
  - gguf
  - edge deployment
---

# llama.cpp

## Introduction

llama.cpp is a lightweight C/C++ project for running LLM inference with minimal dependencies across CPUs, GPUs, and heterogeneous backends.

## Key Features

- Efficient quantized inference with GGUF model workflows and multiple bit-width options.
- Broad backend coverage (Metal, CUDA, HIP, Vulkan, SYCL, and more).
- Includes CLI tools and OpenAI-compatible `llama-server` HTTP endpoints.
- Strong ecosystem integration through bindings, UIs, and infrastructure adapters.

## Getting Started

Install via package manager, Docker, binaries, or source build; then run `llama-cli` for local use or `llama-server` for API-style integration.