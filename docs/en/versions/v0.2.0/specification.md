---
title: v0.2.0 Specification
description: Agent Knowledge v0.2.0 snapshot.
---

# Agent Knowledge v0.2.0 Specification

This snapshot captures the expanded draft after the first public release.

## What changed in v0.2.0

- Clarified the boundary between Skills and Knowledge.
- Added a full LLM Wiki reference mapped from Karpathy's gist.
- Added guidance for description optimization and discovery evaluation.
- Added maintenance automation guidance for scripts and tools.
- Expanded client integration guidance with progressive disclosure, trust gates, and fenced runtime context.
- Added evaluation guidance for discovery, grounding, and answer quality.
- Added a per-page Copy Markdown button to the reference site.
- Added Mermaid diagrams for architecture, flow, and sequence explanations.
- Added multilingual documentation structure with English under `/en/` and Chinese under `/zh/`.

## Required file

A pack must contain `KNOWLEDGE.md`.

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

## Compatibility promise

Future versions should preserve the `KNOWLEDGE.md` entrypoint and progressive disclosure model unless a major version explicitly changes them.
