---
title: LLM Wiki 模式
description: Agent Knowledge 与 LLM Wiki 维护模式的关系。
---

# LLM Wiki 模式

Agent Knowledge 兼容 LLM Wiki：原始来源被持续整理成维护后的页面和运行时视图。

```text
raw sources -> maintained wiki pages -> compiled runtime views -> context resolver
```

## 推荐结构

```text
wiki/
├── index.md
├── log.md
├── entities/
├── concepts/
├── decisions/
├── open-questions/
├── sources/
└── synthesis/
```

`wiki/` 负责长期维护，`compiled/` 负责运行时紧凑上下文。
