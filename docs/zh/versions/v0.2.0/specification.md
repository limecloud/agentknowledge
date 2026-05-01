---
title: v0.2.0 规范
description: Agent Knowledge v0.2.0 快照。
---

# Agent Knowledge v0.2.0 规范

这个快照记录了首个公开发布后的扩展草案。

## v0.2.0 变化

- 明确了 Skills 与 Knowledge 的边界。
- 增加了对 Karpathy gist 的完整 LLM Wiki 参考映射。
- 增加了 description 优化和发现评估。
- 增加了脚本与工具的维护自动化说明。
- 扩展了客户端接入：渐进加载、信任门禁、受保护运行时上下文。
- 增加了发现、溯源和回答质量的评估指导。
- 每个正文页都支持复制 Markdown。
- 增加了架构图、流程图和时序图。
- 增加了中英文多语言结构。

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

## 兼容承诺

后续版本应保留 `KNOWLEDGE.md` 入口和渐进加载模型，除非主版本明确破坏兼容。
