---
id: tool-0099
name: BMTrain
title: BMTrain
git_url: https://github.com/OpenBMB/BMTrain
official_website: https://bmtrain.readthedocs.io/
author: OpenBMB
description: Distributed large-model training toolkit with ZeRO-style optimizations.
tags:
  - training toolkit
  - distributed training
  - large models
---

# BMTrain

## Introduction

BMTrain is an OpenBMB toolkit for efficient distributed training of large neural models.

## Key Features

- Distributed modules and parameters for scale.
- ZeRO optimization support for memory efficiency.
- Communication optimization for transformer workloads.
- PyTorch-compatible distributed launch workflow.

## Getting Started

Install BMTrain, initialize distributed runtime, migrate model components to BMTrain primitives, then run distributed training with torchrun/launch.