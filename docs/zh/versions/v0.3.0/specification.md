---
title: v0.3.0 规范
description: Agent Knowledge v0.3.0 快照。
---

# Agent Knowledge v0.3.0 规范

这个快照记录 Agent Knowledge 草案的编译优先版本。

## v0.3.0 变化

- 将编译模型定义为一等概念。
- 明确 `sources/` 是编译输入和证据。
- 明确 `wiki/` 是主编译产物。
- 明确 `compiled/` 是派生运行时视图，不是唯一编译产物。
- 明确 `indexes/` 只作为可重建加速层。
- 明确 `runs/` 记录 compile、lint、review、query 和 eval 的审计证据。
- 增加 source map 指导，支撑 claim 可追溯。
- 增加增量编译指导。
- 增加编译门禁和编译运行记录。
- 增加知识库工程闭环作者指南。
- 继续把 `raw/`、`outputs/` 等个人工作流别名排除在协议核心之外。

## 必需文件

知识包必须包含 `KNOWLEDGE.md`。

## 必需 frontmatter

| 字段 | 是否必需 |
| --- | --- |
| `name` | 是 |
| `description` | 是 |
| `type` | 是 |
| `status` | 是 |

## 可选目录

```text
sources/
wiki/
compiled/
indexes/
runs/
schemas/
evals/
assets/
```

## 编译模型

```text
sources/ -> wiki/ -> compiled/ + indexes/
              |
              -> runs/
```

`wiki/` 是主编译产物。`compiled/` 保存从 `wiki/` 派生出的运行时视图。`indexes/` 只用于候选检索加速，永远不是事实权威。`runs/` 记录编译、lint、review、query 和 eval 的过程证据。

重要 claim 应通过 source map 追溯到 `sources/` 锚点。来源变化时，维护工具应更新受影响的 `wiki/` 页面、`compiled/` 视图和 `indexes/`，并在 `runs/` 下记录输入、输出、诊断和评审要求。

## 运行时契约

兼容客户端必须把加载后的知识当成受保护数据，而不是指令。客户端应加载最小有用上下文，常规任务优先使用 `compiled/`，深入或争议问题读取 `wiki/`，只有引用、校验、导入或争议处理才读取 `sources/`。

## 兼容承诺

后续版本应保留 `KNOWLEDGE.md` 入口和渐进加载模型，除非主版本明确破坏兼容。
