---
title: LLM Wiki pattern
description: How Agent Knowledge relates to LLM Wiki style knowledge maintenance.
---

# LLM Wiki pattern

Agent Knowledge is compatible with the LLM Wiki pattern: raw sources are continuously distilled into maintained pages and compact runtime views.

## Shape

```text
raw sources
  -> maintained wiki pages
  -> compiled runtime views
  -> context resolver
```

## Why it matters

Chunk-first RAG can answer isolated questions, but long-lived agents need maintained knowledge:

- entity pages
- concept pages
- decisions
- open questions
- source indexes
- change logs
- lint reports

## Recommended layout

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

Use `compiled/` for short runtime views and `wiki/` for maintained knowledge.
