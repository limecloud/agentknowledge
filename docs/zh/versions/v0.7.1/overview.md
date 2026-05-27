---
title: v0.7.1 概览
description: Agent Knowledge v0.7.1 发布概览。
---

# Agent Knowledge v0.7.1

Agent Knowledge v0.7.1 为 ontology-aware 知识包增加可选 Operational Ontology 数据。它保持目录即包的模型，并继续坚持知识是数据，不是可执行行为。

## Highlights

- 新增 Operational Ontology 作者指南。
- 新增 signal、objective、resource、action type、decision gate、action log 和 feedback loop 的可选文件。
- 明确 `ActionType` 记录是声明式数据，不是 runtime command。
- 明确 `Signal` 和 `ActionLog` 可以解释历史或触发评审，但不能独立证明事实主张。
- 更新 latest specification 和 ontology-aware pack 指南。

## 兼容性

v0.7.1 向后兼容 v0.7.0。既有 ontology-aware 知识包不需要新增 operational 文件。尚不支持 operational ontology loading 的客户端可以忽略 `ontology/` 下这些可选文件。

