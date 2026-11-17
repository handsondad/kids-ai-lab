---
id: tool-0123
name: Xinference
title: Xinference
git_url: https://github.com/xorbitsai/inference
official_website: https://inference.readthedocs.io/
author: Xorbits AI
description: Unified model serving framework for language, speech, and multimodal workloads.
tags:
  - unified serving
  - openai api
  - distributed deployment
---

# Xinference

## Introduction

Xinference (Xorbits Inference) is a versatile serving framework for deploying and operating multiple model modalities through unified interfaces.

## Key Features

- OpenAI-compatible REST API with RPC, CLI, and Web UI access modes.
- Heterogeneous and distributed deployment support from laptop to cluster.
- Built-in integrations with common LLM application frameworks.
- Broad built-in model coverage and frequent model/engine updates.

## Getting Started

Install `xinference[all]`, run `xinference-local`, then access models via web UI, cURL, or Python client; use Docker/Helm for production setups.

## See Also

- tool-0111 (Triton Inference Server)
- tool-0124 (llamafile)
- tool-0115 (Text Generation Inference)