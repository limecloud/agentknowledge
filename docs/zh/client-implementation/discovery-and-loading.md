---
title: 发现与加载
description: 客户端如何查找、解析、排序和加载知识包。
---

# 发现与加载

兼容客户端查找包含 `KNOWLEDGE.md` 的目录。

发现 SHOULD 以元数据优先。客户端先把 frontmatter 读入 catalog，再只激活显式选择、明显相关或由解析器选中的知识包。完整运行时契约见 [运行时标准](/zh/client-implementation/runtime-standard)。

作用域：

| 作用域 | 示例路径 |
| --- | --- |
| 工作区 | `<workspace>/.agents/knowledge/` |
| 用户 | `~/.agents/knowledge/` |
| 组织 | 管理员配置的 registry 或仓库 |
| 内置 | 客户端随包提供 |

## 优先级

1. 用户显式选择。
2. 工作区级。
3. 用户级。
4. 组织级。
5. 内置。

## 信任门禁

来自未信任仓库的知识包不应静默注入模型上下文。应先显示元数据，要求用户确认后再激活。

## 状态感知

`ready` 可默认使用；`draft`、`needs-review`、`stale`、`disputed`、`archived` 都需要不同程度的警告或确认。
