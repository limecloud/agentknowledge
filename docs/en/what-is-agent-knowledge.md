---
title: What is Agent Knowledge?
description: Agent Knowledge is a file-first format for source-grounded knowledge packs that agents can discover, load, cite, validate, and maintain.
---

# What is Agent Knowledge?

Agent Knowledge defines a portable directory format for agent-readable knowledge assets. It is a companion standard to Agent Skills: Skills describe executable capabilities, while Knowledge describes safely consumable fact assets.

Use it for knowledge that needs source trails, status, review, and reuse across agents:

- brand and product facts
- organization know-how
- personal or expert profiles
- research wikis
- support and sales playbooks
- content, private-domain, live commerce, and campaign operations playbooks
- policy and compliance references
- long-lived domain context

Do not use it for procedure, tool orchestration, or runtime instructions. Those belong in Skills or client policy.

## Package Layers

| Layer | Role | Runtime default |
| --- | --- | --- |
| `KNOWLEDGE.md` | Required metadata and usage guide. | Loaded after activation. |
| `documents/` | document-first authority with finished Markdown documents. | Loaded through splits or explicit selection. |
| `sources/` | Raw or normalized evidence. | Only for citation, verification, or dispute handling. |
| `wiki/` | wiki-first authority with source summaries, entities, concepts, decisions, contradictions, and synthesis. | Selected pages only. |
| `compiled/` | Short runtime views derived from `documents/` or `wiki/`. | Preferred for normal runtime. |
| `indexes/` | Rebuildable search, vector, graph, or lookup indexes. | Candidate search only. |
| `runs/` | Compile, lint, review, eval, and query records. | Diagnostics and audit evidence. |

Canonical flow:

```text
# document-first
sources/ -> documents/ -> compiled/splits/ + indexes/
                 |
                 -> runs/

# wiki-first
sources/ -> wiki/ -> compiled/ + indexes/
              |
              -> runs/
```

## Runtime Boundary

Compatible runtimes MUST:

1. Load catalog metadata before full pack content.
2. Activate only relevant packs.
3. Check `status`, `trust`, `grounding`, `profile`, and `runtime.mode`.
4. Select the smallest useful context.
5. Fence selected knowledge as data.
6. Treat indexes as acceleration, not fact authority.

## Skills Boundary

| Asset | Correct home |
| --- | --- |
| Facts, source summaries, approved claims, examples, policies, and constraints. | Agent Knowledge |
| Procedures, scripts, prompts, tools, and workflows. | Agent Skills or client tools |
| Embeddings, vector indexes, graph indexes, lookup tables. | Rebuildable support artifacts inside or beside a pack |
