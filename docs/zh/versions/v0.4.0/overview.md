---
title: v0.4.0 概览
description: Agent Knowledge v0.4.0 的主要变化。
---

# v0.4.0 概览

0.4.0 把草案推进到更可执行的生态阶段。

它保持知识包核心足够小，同时补上工具链层：Skills 互操作、维护脚本契约、发现评估、参考 schema、完整知识包示例，以及第一版 `agentknowledge-ref` CLI。

## 亮点

- 增加 Skills 互操作指导，把 Agent Skills 作为流程型维护层。
- 增加维护脚本契约，定义稳定、适合 Agent 调用的 CLI 行为。
- 增加发现评估，用于测试知识包选择和 description 质量。
- 增加参考 CLI 文档和 `agentknowledge-ref` npm 包。
- 增加 compile run、source map、selection eval 的公开 JSON schema。
- 增加包含 `sources/`、`wiki/`、`compiled/`、`indexes/`、`evals/`、`runs/` 的完整知识包示例。
- 继续把 `scripts/`、包管理器、编辑器、LLM 和向量库排除在知识包核心协议之外。
