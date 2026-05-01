---
title: RAG comparison
description: How Agent Knowledge relates to RAG, vector stores, and retrieval tools.
---

# RAG comparison

Agent Knowledge does not replace RAG. It gives RAG systems a portable source-of-truth package.

| Layer | Agent Knowledge role | RAG role |
| --- | --- | --- |
| Sources | Stores raw evidence | Can ingest and chunk |
| Wiki | Maintained synthesis | Optional upstream structure |
| Compiled views | Runtime-friendly context | High quality retrieval targets |
| Indexes | Rebuildable artifacts | Vector, full-text, graph search |
| Resolver | Selects context | Retriever / router / reranker |

## Key rule

A vector store is not the knowledge asset. It is an acceleration layer derived from the knowledge asset.

If deleting the vector index deletes the only copy of the facts, the system is incorrectly designed.
