---
title: v0.7.2 概览
description: Agent Knowledge v0.7.2 发布概览。
---

# Agent Knowledge v0.7.2

Agent Knowledge v0.7.2 新增 Answer-ready 知识包指南，用于 AI 搜索、答案引擎、检索系统和 Agent 客户端。它保持目录即包的模型，并继续坚持知识是数据，不是可执行行为或排名操控指令。

## Highlights

- 新增 [Answer-ready 知识包](/zh/authoring/answer-engine-knowledge)。
- 新增问题、答案块、引用目标、信源表面、结构化数据记录和监测运行的可选 `answers/` 文件。
- 新增可选 `metadata.primaryAnswers`。
- 明确 citation targets 是引用候选，不证明外部答案引擎已经引用该知识包。
- 明确 monitoring observations 是审计数据，不是因果证明。
- 更新 latest specification、ontology-aware 指南、术语表、README、release notes 和 LLM entrypoints。

## 兼容性

v0.7.2 向后兼容 v0.7.1。既有知识包不需要新增 `answers/` 目录。尚不支持 answer-ready loading 的客户端可以忽略 `answers/` 下的可选文件。
