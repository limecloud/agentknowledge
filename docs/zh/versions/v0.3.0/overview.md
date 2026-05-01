---
title: v0.3.0 概览
description: Agent Knowledge v0.3.0 的主要变化。
---

# v0.3.0 概览

0.3.0 把 LLM Wiki 的编译优先模型明确成标准概念。

它进一步说明：Agent Knowledge 不只是一个有来源上下文的可移植目录格式，也是一套把来源资料维护成可评审、可追溯、可检查、可复用知识工件的工程模型。

## 亮点

- 增加编译模型：`sources/` 是输入，`wiki/` 是主编译产物，`compiled/` 是运行时派生视图，`indexes/` 是可重建加速层，`runs/` 是审计证据。
- 增加 source map 和增量编译指导。
- 增加编译门禁和编译运行记录。
- 增加 resolver 对 stale、disputed、缺失 source map 的告警指导。
- 增加知识库工程闭环：摄取、编译、使用、沉淀、检查。
- 澄清 `raw/`、`outputs/` 等个人工作流命名只是示例，不是协议必需目录。
- 保持核心规范与具体工具、客户端无关。
