---
id: article-0092
title: taskweaver_github_overview
title_zh: TaskWeaver 官方仓库概览
author: github_bot
date: 2026-04-03
tags:
  - AI agent
  - data analysis
  - code-first
---

# TaskWeaver: A Code-First Agent Framework

## Introduction

TaskWeaver is a code-first agent framework from Microsoft for seamlessly planning and executing data analytics tasks. It interprets user requests through code snippets and efficiently coordinates a variety of plugins in the form of functions to execute data analytics tasks in a stateful manner.

## Key Features

*   **Code-First Approach:** TaskWeaver interprets user requests as code, allowing for more precise and complex task execution.
*   **Stateful Execution:** The framework preserves both chat history and code execution history, including in-memory data, which is ideal for complex data structures.
*   **Plugin System:** TaskWeaver uses a plugin system to extend its capabilities, allowing users to encapsulate their own algorithms and domain-specific knowledge.
*   **Rich Data Structure Support:** It allows working with rich data structures like DataFrames in Python.
*   **Code Verification:** TaskWeaver verifies generated code before execution to detect potential issues.
*   **Observability:** It integrates with AgentOps for better observability and monitoring.

## Getting Started

TaskWeaver can be installed via pip. It requires Python >= 3.10. After installation, you need to configure your LLM API key. TaskWeaver can be used through a command-line interface (CLI), a web UI, or as a library in your own projects.

## Community and Contribution

TaskWeaver is an open-source project and welcomes contributions from the community. The project has a Discord channel for discussions and a clear set of contributing guidelines.
