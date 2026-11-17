---
id: article-0106
title: tensorrt-llm_github_overview
title_zh: TensorRT-LLM 官方仓库概览
author: github_bot
date: 2026-04-03
tags:
  - llm serving
  - inference optimization
  - nvidia
---

# TensorRT-LLM: High-Performance LLM Inference on NVIDIA GPUs

## Introduction

TensorRT-LLM is an open-source NVIDIA library for optimizing LLM inference with a Python API and performant runtimes for single-GPU to multi-node deployments.

## Key Features

- Advanced inference optimizations: custom attention kernels, paged KV cache, in-flight batching, speculative decoding.
- Quantization support including FP8, FP4, INT4 AWQ, and INT8 SmoothQuant paths.
- PyTorch-native modular architecture and customizable model implementations.
- Integration with Triton Inference Server and NVIDIA Dynamo ecosystem.

## Getting Started

Users can follow official quick-start and installation docs to configure hardware support, benchmark performance, and deploy production inference stacks.

## Notes

TensorRT-LLM targets enterprise-scale and high-throughput LLM serving on NVIDIA infrastructure.