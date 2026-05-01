---
title: v0.4.0 变更记录
description: Agent Knowledge v0.4.0 的变更记录。
---

# v0.4.0 变更记录

## 新增

- `agentknowledge-ref` 参考 CLI，支持 validate、catalog、resolver dry-run、run validation 和 discovery eval。
- Skills 互操作指导。
- 维护脚本契约。
- 发现评估指南。
- 参考 CLI 指南。
- 完整知识包示例。
- 公开 schema：
  - `compile-run.schema.json`
  - `source-map.schema.json`
  - `selection-eval.schema.json`

## 更新

- 规范链接到 Skills 互操作、脚本契约和公开 schema。
- 维护自动化链接到脚本契约。
- 评估文档链接到发现评估和完整知识包示例。
- 导航暴露新的工具链和生态页面。

## 兼容性

- `KNOWLEDGE.md` 仍是必需入口。
- 现有 v0.1、v0.2 和 v0.3 知识包仍然有效。
- `scripts/` 仍不属于知识包核心协议。
- 参考 CLI 是可选工具，不是兼容客户端的必需运行时。
