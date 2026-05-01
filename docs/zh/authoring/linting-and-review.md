---
title: Lint 与评审
description: 保持知识包健康的评审模型。
---

# Lint 与评审

知识包会漂移，因此 lint 是一等流程。

如果你正在搭最小闭环，先看 [知识库工程闭环](/zh/authoring/knowledge-engineering-loop) 中的健康检查部分。

## 检查项

- 缺失 frontmatter。
- 文件引用断裂。
- 孤立 wiki 页面。
- 重复实体。
- 过期 claim。
- required grounding 下缺少来源。
- `compiled/` 与 `wiki/` 冲突。
- 原始来源被直接复制进运行时视图。
- 来源中存在 prompt injection 或密钥。

## 报告

```text
runs/
└── lint-2026-05-01.md
```

状态变更必须显式：

```yaml
status: ready
trust: user-confirmed
```
