---
title: v0.7.0 概览
description: Agent Knowledge v0.7.0 发布概览。
---

# Agent Knowledge v0.7.0

Agent Knowledge v0.7.0 增加 ontology-aware 知识包，同时保持 Agent Skills 风格的包模型：目录即包、`KNOWLEDGE.md` 入口、YAML frontmatter、渐进加载和可选资源目录。

## Highlights

- 新增可选 `ontology/` 目录，用于概念、关系、主张、证据、约束和覆盖工件。
- 新增 `metadata.primaryOntology`，用于声明 ontology-aware pack 的 manifest。
- 新增标准 `type`：`content-ontology`。
- 定义运行时如何加载选中 ontology 子图，而不是注入完整图。
- 新增 ontology-aware 知识包作者指南。
- 保持 ontology 数据与 Skills、脚本、workflow 和可执行指令分离。

## 兼容性

v0.7.0 向后兼容 v0.6 知识包。没有 `ontology/` 的既有知识包无需修改。尚不支持 ontology-aware 加载的客户端可以忽略 `ontology/` 和 `metadata.primaryOntology`。

