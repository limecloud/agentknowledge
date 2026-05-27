---
title: v0.7.1 规范
description: Agent Knowledge v0.7.1 规范快照。
---

# Agent Knowledge v0.7.1 规范

v0.7.1 的规范快照与当前 [latest 规范](/zh/specification) 对齐。

## v0.7.1 变化

- 新增 signals、objectives、resource bundles、decision gates、action types、action logs 和 feedback loops 等可选 operational ontology records。
- 扩展 `ontology/` 语义，但不改变 package entrypoint 或 runtime boundary。
- 明确 `ActionType` 记录是声明式数据，不是命令。
- 明确 `Signal` 和 `ActionLog` 记录除非另有独立证据支撑，否则不能作为事实主张证据。

作者指南：

- [Ontology-aware 知识包](/zh/authoring/ontology-packs)
- [Operational Ontology 知识包](/zh/authoring/operational-ontology)

