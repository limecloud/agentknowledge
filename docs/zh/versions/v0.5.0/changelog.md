---
title: v0.5.0 变更记录
description: Agent Knowledge v0.5.0 的变更记录。
---

# v0.5.0 变更记录

## 新增

- 运行时标准页面，覆盖发现、catalog 构建、激活、上下文选择、数据包裹、诊断和 Skills 关系。
- 公开 `context-resolution.schema.json`。
- `agentknowledge-ref validate-run` 支持 context-resolution record。
- 英文和中文文档导航加入运行时标准。

## 更新

- 规范链接到运行时标准和 context-resolution schema。
- 客户端实现文档统一使用 runtime 词汇，覆盖 discovery、resolver、security 和 adding-support。
- Authoring、reference 和 examples 页面改为协议式措辞。
- README 和发布 workflow 默认值更新到 `v0.5.0`。
- Reference CLI 示例更新为 `agentknowledge-ref@0.5.0`。

## 兼容性

- 没有破坏性 pack-format 变更。
- `KNOWLEDGE.md` 仍是必需入口。
- `scripts/` 仍不属于知识包核心协议。
- `context-resolution.schema.json` 是诊断和 eval 的参考 schema，不是必需 runtime 依赖。
