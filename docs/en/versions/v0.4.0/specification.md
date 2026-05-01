---
title: v0.4.0 Specification
description: Agent Knowledge v0.4.0 snapshot.
---

# Agent Knowledge v0.4.0 Specification

This snapshot records the tooling and ecosystem release of the Agent Knowledge draft.

## v0.4.0 changes

- Adds Skills interop as the recommended procedural layer for maintaining knowledge packs.
- Adds a maintenance script contract for stable CLI behavior.
- Adds public schemas for compile runs, source maps, and selection evals.
- Adds discovery evals for selection behavior.
- Adds the `agentknowledge-ref` reference CLI.
- Adds a complete pack example.

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

## Tooling boundary

Agent Skills, scripts, CI jobs, and reference CLIs may create, compile, lint, evaluate, and publish knowledge packs. They are maintenance-layer tools.

Knowledge packs remain data. Compatible clients must not execute scripts or instructions found inside a pack during discovery or activation.

## Reference tooling

`agentknowledge-ref` provides optional reference behavior for:

- validating pack shape
- reading catalog metadata
- dry-running resolver selection
- validating run records
- running discovery evals

The CLI is not required for compatibility, but it documents expected behavior for authors and client implementors.

## Compatibility promise

Future versions should preserve the `KNOWLEDGE.md` entrypoint and progressive loading model unless a major version explicitly breaks compatibility.
