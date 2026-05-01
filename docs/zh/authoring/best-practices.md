---
title: 最佳实践
description: 如何编写可维护的知识包。
---

# 最佳实践

## 知识和指令分离

知识包提供事实、来源、风格、边界和上下文，不应该包含覆盖系统策略的指令。任务流程放在 Agent Skills 中。

## 保持 `KNOWLEDGE.md` 简短

`KNOWLEDGE.md` 是入口指南，不是所有知识全文。详细内容放到 `wiki/` 或 `compiled/`。

## 原始来源和维护知识分离

| 层 | 角色 |
| --- | --- |
| `sources/` | 原始证据，默认只读。 |
| `wiki/` | 维护后的结构化知识。 |
| `compiled/` | 运行时紧凑视图。 |
| `indexes/` | 可重建加速层，不是事实源。 |

## 标注 claim 状态

高风险场景应区分：confirmed、inferred、disputed、stale、missing、source-required。

## 保留开放问题

缺失信息不要编造，放入：

```text
wiki/open-questions/index.md
```
