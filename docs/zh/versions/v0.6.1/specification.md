---
title: v0.6.1 规范快照
description: Agent Knowledge v0.6.1 规范快照。
---

# v0.6.1 规范快照

v0.6.1 保留 v0.6.0 的 Agent Knowledge pack 语义，并增加面向 LLM-friendly consumers 的文档分发要求。

## 必需文档入口

兼容的文档分发 SHOULD 暴露：

- `llms.txt`：项目摘要与主要文档链接。
- `llms-full.txt`：合并后的当前英文核心文档，并保留 source URLs。
- `llm.txt`：兼容 singular naming 的 alias。
- `llm-full.txt`：兼容 full-context singular naming 的 alias。

作为静态站点托管时，这些文件 SHOULD 从站点根目录提供。
