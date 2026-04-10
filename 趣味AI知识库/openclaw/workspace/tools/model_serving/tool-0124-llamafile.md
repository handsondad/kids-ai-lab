---
id: tool-0124
name: llamafile
title: llamafile
git_url: https://github.com/mozilla-ai/llamafile
official_website: https://mozilla-ai.github.io/llamafile/
author: Mozilla AI
description: Single-file distribution and execution framework for local LLM inference.
tags:
  - local deployment
  - single file runtime
  - portability
---

# llamafile

## Introduction

llamafile packages local LLM runtimes into single executable files to simplify model distribution and execution.

## Key Features

- Single-file, no-install local execution design across major platforms.
- Built on llama.cpp with packaging architecture focused on portability.
- Documentation for quickstart, custom file creation, and troubleshooting.
- Companion whisperfile flow for speech-to-text workloads.

## Getting Started

Download a model-specific `.llamafile`, mark executable where needed, and run directly; use docs for creating custom bundled artifacts.

## See Also

- tool-0113 (llama.cpp)
- tool-0118 (ExLlamaV2)
- tool-0123 (Xinference)