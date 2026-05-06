---
title: v0.5.0 概览
description: Agent Knowledge v0.5.0 的主要变化。
---

# v0.5.0 概览

0.5.0 定义 Agent Knowledge runtime 契约，并把当前文档统一为协议说明风格。

它继续保持 `KNOWLEDGE.md` 作为必需入口，维护工具仍为可选层，同时补齐 discovery、activation、context selection、data wrapping、diagnostics 和 Skills 互操作的运行时规则。

## 亮点

- 增加运行时标准。
- 增加 `context-resolution.schema.json` 参考 schema。
- 扩展 `agentknowledge-ref validate-run`，支持校验 context-resolution record。
- 更新客户端实现文档，覆盖发现、激活、resolver 行为和安全上下文注入。
- 将当前英文和中文文档改为更接近规范的写法：字段表、步骤、MUST/SHOULD/MAY 和更短的协议文本。
- 历史版本快照保持不变。

## 运行时边界

Agent Knowledge 激活不是 Skill 激活。

| Runtime | 入口文件 | 激活提供 | 模型行为 |
| --- | --- | --- | --- |
| Agent Skills | `SKILL.md` | 流程说明 | 遵循流程。 |
| Agent Knowledge | `KNOWLEDGE.md` | 受保护事实上下文 | 只作为数据使用。 |

## 兼容性

- `KNOWLEDGE.md` 仍是必需入口。
- 必需 frontmatter 仍是 `name`、`description`、`type`、`status`。
- 现有 v0.1、v0.2、v0.3 和 v0.4 知识包仍然有效。
- runtime 工具仍是可选项；兼容客户端可以不使用 `agentknowledge-ref`。
