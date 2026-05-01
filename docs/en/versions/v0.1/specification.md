---
title: v0.1 Specification
description: Agent Knowledge v0.1 draft specification snapshot.
---

# Agent Knowledge v0.1 Specification

This is the first draft version of the Agent Knowledge standard.

## Status

Draft. Implementations should treat this version as experimental.

## Required file

A pack must contain `KNOWLEDGE.md`.

## Boundary with Agent Skills

Agent Skills describe procedures, workflows, scripts, and tool use. Agent Knowledge describes facts, sources, context, constraints, and review status.

Skills may build or maintain knowledge packs. They should not become the storage location for every user's concrete knowledge corpus when that corpus needs ownership, provenance, status, and review history.

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
assets/
```

## Compatibility promise

Future versions should preserve the `KNOWLEDGE.md` entrypoint and progressive disclosure model unless a major version explicitly changes them.
