---
title: v0.3.0 变更记录
description: Agent Knowledge v0.3.0 的变更记录。
---

# v0.3.0 变更记录

## 新增

- 编译模型文档，描述从来源到 wiki 再到运行时视图的维护过程。
- 知识库工程闭环指南，帮助作者建立可持续维护流程。
- `runs/compile-<timestamp>.json` 编译运行记录指导。
- source map 指导，用于将 claim 追溯到来源锚点。
- resolver 对 stale、disputed、缺失 source map 的告警指导。

## 更新

- 规范明确 `wiki/` 是主编译产物，`compiled/` 是派生运行时视图。
- 维护自动化加入编译器接口预期。
- LLM Wiki 参考页澄清 `compiled/` 不是唯一编译产物。
- 快速开始、lint、术语表和导航链接到新的编译与工程闭环指导。

## 兼容性

- `KNOWLEDGE.md` 仍是必需入口。
- 现有 v0.1 和 v0.2 知识包仍然有效。
- `sources/`、`wiki/`、`compiled/`、`indexes/`、`runs/`、`schemas/`、`evals/` 仍是可选目录。
- 不要求特定编辑器、LLM、向量数据库或客户端运行时。
