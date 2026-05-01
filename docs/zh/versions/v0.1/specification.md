---
title: v0.1 规范
description: Agent Knowledge v0.1 草案快照。
---

# Agent Knowledge v0.1 规范

这是 Agent Knowledge 标准的第一个草案版本。

## 状态

草案。实现方应把本版本视为实验性版本。

## 必需文件

知识包必须包含 `KNOWLEDGE.md`。

## 与 Agent Skills 的边界

Agent Skills 描述流程、工作流、脚本和工具使用方式。Agent Knowledge 描述事实、来源、上下文、约束和评审状态。

Skills 可以构建或维护知识包。但当每个用户的具体知识语料需要归属、来源、状态和评审历史时，不应该把这些全文塞进 Skill。

## 必需 frontmatter

| 字段 | 是否必需 |
| --- | --- |
| `name` | 是 |
| `description` | 是 |
| `type` | 是 |
| `status` | 是 |

## 可选目录

```text
sources/
wiki/
compiled/
indexes/
runs/
schemas/
assets/
```

## 兼容承诺

后续版本应尽量保留 `KNOWLEDGE.md` 入口和渐进加载模型，除非主版本明确破坏兼容。
