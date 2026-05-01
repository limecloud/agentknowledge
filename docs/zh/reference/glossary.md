---
title: 术语表
description: Agent Knowledge 标准术语。
---

# 术语表

## Agent Knowledge

面向 AI Agent 的有来源知识包标准。

## Knowledge pack

包含 `KNOWLEDGE.md` 以及可选 sources、wiki、compiled、indexes、runs、schemas、evals、assets 的目录。

## Agent Skill

告诉 Agent 如何执行任务的流程包，入口是 `SKILL.md`。

## Source

原始证据，如文档、访谈、网页、PDF、会议记录。

## Wiki

从 sources 编译出的结构化长期知识。`wiki/` 是知识包的主编译产物。

## Compiled view

从 `wiki/` 派生出的运行时紧凑视图，如 `compiled/facts.md`。它是运行时优化产物，不应成为无法追溯的独立事实源。

## Compilation

把 `sources/` 增量转成 `wiki/`、`compiled/` 和 `indexes/` 的维护过程，并在 `runs/` 中记录输入、输出、诊断和评审要求。

## Source map

claim、页面或运行时视图到原始来源锚点的映射。它解释某个事实从哪里来，以及被编译到了哪些产物中。

## Index

可重建检索工件，如全文、向量或图索引。

## Context resolver

选择哪些知识进入模型上下文的客户端组件。
