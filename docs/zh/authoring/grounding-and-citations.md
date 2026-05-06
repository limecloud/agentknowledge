---
title: 溯源与引用
description: 如何表示证据、来源锚点和引用要求。
---

# 溯源与引用

Grounding 表示 Agent 能把重要 claim 追溯到来源材料。

## 模式

| 模式 | 含义 |
| --- | --- |
| `none` | 不要求引用，适合低风险草稿。 |
| `recommended` | 重要 claim 有来源锚点时 SHOULD 引用。 |
| `required` | claim 必须有来源，否则标记 unknown。 |

```yaml
grounding: required
```

## 来源锚点

```yaml
source: sources/transcripts/founder-interview.md#L120
source: sources/reports/q1.pdf#page=4
source: sources/calls/customer-demo.vtt#t=00:12:33
```

## 运行时行为

当 `grounding: required` 时，兼容客户端 SHOULD 要求模型：

- 只基于已加载知识和允许工具回答。
- 缺失信息标记 unknown。
- 用户要求或策略要求时输出引用。
- 不把模型记忆或先验当作事实权威。
