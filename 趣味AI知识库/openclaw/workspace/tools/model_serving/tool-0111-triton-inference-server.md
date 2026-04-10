---
id: tool-0111
name: Triton Inference Server
title: Triton Inference Server
git_url: https://github.com/triton-inference-server/server
official_website: https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/index.html
author: NVIDIA
description: Multi-framework inference server for production deployment across cloud, data center, and edge.
tags:
  - inference serving
  - model deployment
  - triton
---

# Triton Inference Server

## Introduction

Triton Inference Server is an open-source production serving system for deploying models from multiple frameworks behind unified inference APIs.

## Key Features

- Multi-backend support including TensorRT, PyTorch, ONNX Runtime, OpenVINO, and Python backends.
- Dynamic batching, sequence batching, and concurrent execution for throughput/latency optimization.
- HTTP/REST and gRPC endpoints aligned with KServe protocol patterns.
- Metrics and profiling ecosystem for operational observability and performance tuning.

## Getting Started

Use the official Docker-first quickstart with model repository layout and client examples, then tune batching and instance configuration for target workloads.

## See Also

- tool-0112 (ONNX Runtime)
- tool-0123 (Xinference)
- tool-0116 (OpenVINO)