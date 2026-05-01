---
title: 接入支持
description: 在 Agent、桌面应用或托管工具中接入 Agent Knowledge。
---

# 接入支持

接入生命周期借鉴 Agent Skills，但对象从 Skill 变成 Knowledge pack。

## 渐进加载

| 层级 | 内容 | 时机 |
| --- | --- | --- |
| Catalog | `name`、`description`、`type`、`status`、`location` | 作用域启动 |
| Guide | `KNOWLEDGE.md` 正文 | 选择或命中知识包时 |
| Runtime context | `compiled/` 或选中的 `wiki/` 页面 | 模型调用前 |
| Evidence | 来源锚点或原文摘录 | 需要引用或校验时 |

## 步骤

1. 扫描包含 `KNOWLEDGE.md` 的目录。
2. 只解析 frontmatter 建立 catalog。
3. 向模型披露紧凑元数据，而不是全文。
4. 激活时加载 `KNOWLEDGE.md`。
5. 使用上下文解析器选择运行时内容。
6. 用边界包裹知识，明确它是数据不是指令。
7. 记录使用的知识包、版本、状态和文件。
