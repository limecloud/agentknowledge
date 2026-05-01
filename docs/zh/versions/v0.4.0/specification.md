---
title: v0.4.0 规范
description: Agent Knowledge v0.4.0 快照。
---

# Agent Knowledge v0.4.0 规范

这个快照记录 Agent Knowledge 草案的工具链与生态版本。

## v0.4.0 变化

- 增加 Skills 互操作，推荐把 Agent Skills 作为知识包维护的流程层。
- 增加维护脚本契约，定义稳定 CLI 行为。
- 增加 compile run、source map、selection eval 的公开 schema。
- 增加发现评估，用于测试选择行为。
- 增加 `agentknowledge-ref` 参考 CLI。
- 增加完整知识包示例。

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

## 工具边界

Agent Skills、脚本、CI job 和参考 CLI 可以创建、编译、lint、评估和发布知识包。它们是维护层工具。

知识包仍然是数据。兼容客户端在发现或激活知识包时，不能执行包内脚本或指令。

## 参考工具

`agentknowledge-ref` 提供可选参考行为：

- 校验知识包结构。
- 读取 catalog metadata。
- dry-run resolver 选择。
- 校验 run record。
- 运行发现评估。

CLI 不是兼容性必需项，但它记录作者和客户端实现者应对齐的行为。

## 兼容承诺

后续版本应保留 `KNOWLEDGE.md` 入口和渐进加载模型，除非主版本明确破坏兼容。
