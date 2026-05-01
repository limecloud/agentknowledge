---
title: v0.3.0 Specification
description: Agent Knowledge v0.3.0 snapshot.
---

# Agent Knowledge v0.3.0 Specification

This snapshot records the compile-first release of the Agent Knowledge draft.

## v0.3.0 changes

- Defines the compilation model as a first-class concept.
- Clarifies `sources/` as compile input and evidence.
- Clarifies `wiki/` as the primary compiled artifact.
- Clarifies `compiled/` as derived runtime views, not the only compiled artifact.
- Clarifies `indexes/` as rebuildable acceleration only.
- Clarifies `runs/` as audit evidence for compile, lint, review, query, and eval activity.
- Adds source-map guidance for claim traceability.
- Adds incremental compilation guidance.
- Adds compile gates and compile-run records.
- Adds the knowledge engineering loop for authors.
- Keeps personal workflow aliases such as `raw/` and `outputs/` out of the protocol core.

## Required file

A knowledge pack must contain `KNOWLEDGE.md`.

## Required frontmatter

| Field | Required |
| --- | --- |
| `name` | Yes |
| `description` | Yes |
| `type` | Yes |
| `status` | Yes |

## Optional directories

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

## Compilation model

```text
sources/ -> wiki/ -> compiled/ + indexes/
              |
              -> runs/
```

`wiki/` is the primary compiled artifact. `compiled/` contains runtime-ready views derived from `wiki/`. `indexes/` are candidate-search acceleration and are never fact authority. `runs/` records compile, lint, review, query, and eval evidence.

Important claims should trace back to `sources/` anchors through source maps. When sources change, maintenance tools should update affected `wiki/` pages, `compiled/` views, and `indexes/`, then record inputs, outputs, diagnostics, and review requirements under `runs/`.

## Runtime contract

Compatible clients must treat loaded knowledge as fenced data, not instructions. They should load the smallest useful context, prefer `compiled/` for normal runtime, read `wiki/` for deeper or disputed questions, and read `sources/` only for citation, verification, ingest, or dispute handling.

## Compatibility promise

Future versions should preserve the `KNOWLEDGE.md` entrypoint and progressive loading model unless a major version explicitly breaks compatibility.
