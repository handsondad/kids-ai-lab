---
id: tool-0103
name: QLoRA
title: QLoRA
git_url: https://github.com/artidoro/qlora
official_website: https://arxiv.org/abs/2305.14314
author: artidoro
description: Efficient finetuning method for quantized LLMs using LoRA adapters.
tags:
  - quantization
  - fine-tuning
  - llm training
---

# QLoRA

## Introduction

QLoRA enables memory-efficient finetuning by training adapters on top of 4-bit quantized base models.

## Key Features

- NF4 quantization and double quantization support.
- Paged optimizer strategy for memory control.
- Compatible with common Hugging Face workflows.
- Proven recipe for efficient adaptation of large models.

## Getting Started

Install project dependencies, then use qlora.py with target model and dataset arguments to run finetuning.