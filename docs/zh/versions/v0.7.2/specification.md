---
title: v0.7.2 规范
description: Agent Knowledge v0.7.2 规范快照。
---

# Agent Knowledge v0.7.2 规范

v0.7.2 的规范快照与当前 [latest 规范](/zh/specification) 对齐。

## v0.7.2 变化

- 新增问题、答案块、引用目标、信源表面、结构化数据记录和监测观察等可选 answer-ready records。
- 新增可选 `metadata.primaryAnswers`，用于指向答案图谱或 manifest。
- 扩展目录模型，加入可选 `answers/`，同时保持 package entrypoint 和 runtime boundary。
- 明确 answer-ready 文件是数据，不是排名指令或外部可见性保证。
- 明确 `CitationTarget` 记录是引用候选，`AnswerMonitoringRun` 记录是观察结果。

作者指南：

- [Ontology-aware 知识包](/zh/authoring/ontology-packs)
- [Operational Ontology 知识包](/zh/authoring/operational-ontology)
- [Answer-ready 知识包](/zh/authoring/answer-engine-knowledge)
