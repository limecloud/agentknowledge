---
title: v0.7.0 规范
description: Agent Knowledge v0.7.0 规范快照。
---

# Agent Knowledge v0.7.0 规范

v0.7.0 的规范快照与当前 [latest 规范](/zh/specification) 对齐。

## v0.7.0 变化

- 新增可选 ontology-aware 知识包。
- 新增 `ontology/` 结构化数据目录，用于概念、关系、主张、证据、约束和覆盖矩阵。
- 新增 `metadata.primaryOntology`。
- 新增标准 `type`：`content-ontology`。
- 定义解析器如何选择 ontology 子图。
- 明确 ontology 文件是数据，不是可执行 Skill、脚本、workflow、prompt 或指令。

作者指南见 [Ontology-aware 知识包](/zh/authoring/ontology-packs)。

