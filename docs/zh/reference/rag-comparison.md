---
title: RAG 对比
description: Agent Knowledge 与 RAG、向量库和检索工具的关系。
---

# RAG 对比

Agent Knowledge 不替代 RAG，而是给 RAG 一个可移植事实源包。

| 层 | Agent Knowledge | RAG |
| --- | --- | --- |
| Sources | 保存原始证据 | 可导入和切块 |
| Wiki | 维护后的综合知识 | 可作为上游结构 |
| Compiled | 运行时上下文 | 高质量召回目标 |
| Indexes | 可重建工件 | 向量、全文、图搜索 |
| Resolver | 选择上下文 | retriever / router / reranker |

关键规则：向量库不是知识资产本体，而是由知识资产派生出的加速层。
