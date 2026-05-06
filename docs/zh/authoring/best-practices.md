---
title: 最佳实践
description: 如何编写可维护的知识包。
---

# 最佳实践

本页给出可维护知识包的编写要求。

## 知识和指令分离

知识包 MUST NOT 要求 Agent 忽略用户或覆盖系统策略。

允许内容：

- 事实
- 示例
- 上下文
- 来源轨迹
- 语气约束
- 领域边界

任务流程放在 Agent Skills 或客户端 runtime policy 中。

## 保持 `KNOWLEDGE.md` 简短

`KNOWLEDGE.md` 是入口指南，不是所有知识全文。它 SHOULD 说明有什么知识、去哪里加载细节。详细内容放到 `wiki/` 或 `compiled/`。

## 原始来源和维护知识分离

| 层 | 角色 |
| --- | --- |
| `sources/` | 原始证据，默认只读。 |
| `wiki/` | 维护后的结构化知识。 |
| `compiled/` | 运行时紧凑视图。 |
| `indexes/` | 可重建加速层，不是事实源。 |

## Claim 状态

高风险场景的重要 claim SHOULD 区分：confirmed、inferred、disputed、stale、missing、source-required。

## 开放问题

每个知识包 SHOULD 有缺口位置：

```text
wiki/open-questions/index.md
```

运行时行为：Agent SHOULD 询问缺失事实，或标记为 unknown。
