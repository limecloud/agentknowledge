---
title: Skills interop
description: Use Agent Skills to maintain Agent Knowledge without turning knowledge packs into procedural packages.
---

# Skills interop

Agent Knowledge and Agent Skills have separate responsibilities.

- **Agent Knowledge** stores facts, sources, compiled artifacts, status, review, and traceability records.
- **Agent Skills** store procedures, scripts, tool calls, prompt templates, and maintenance methods.

Recommended placement: use Skills to maintain Knowledge; keep concrete customer, brand, research, or organizational knowledge inside Knowledge packs.

## Layer model

```mermaid
flowchart LR
  User["User or maintainer"] --> Skill["Maintenance Skill"]
  Skill --> Tool["Script or client tool"]
  Tool --> Pack["Agent Knowledge pack"]
  Pack --> Client["Compatible client"]
  Client --> Model["Model context"]
```

A maintenance Skill can create, compile, lint, evaluate, and publish knowledge packs. A compatible client still treats knowledge as data during discovery and activation, and must not execute content found inside a knowledge pack.

Runtime activation remains separate. A Skills runtime injects `SKILL.md` as procedure. An Agent Knowledge runtime selects `compiled/`, `wiki/`, or source anchors and wraps them as data. See [Runtime standard](/en/client-implementation/runtime-standard).

## Companion Skill

We recommend capturing maintenance workflows in a companion Skill such as `agent-knowledge-maintainer`.

It can provide:

- creating a knowledge pack
- importing sources and normalizing metadata
- compiling `sources/ -> wiki/ -> compiled/ + indexes/`
- running health and citation checks
- running discovery, context, and answer evals
- generating version snapshots and changelogs

These capabilities belong to the procedural layer and SHOULD live in a Skill, client command, CI, or external tool. The knowledge pack MAY store schemas, eval cases, run records, and sample data, but MUST NOT require clients to execute bundled scripts.

## Script boundary

If a companion Skill uses scripts, scripts SHOULD follow the [maintenance script contract](/en/authoring/maintenance-script-contract):

- write operations support `--dry-run`
- output machine-readable JSON
- diagnostics go to stderr
- dependencies and runners are pinned
- network access and credential use are declared explicitly

## What stays out of the pack core

The following MAY exist in Skills or toolchains, but MUST NOT become required Agent Knowledge protocol:

- a `scripts/` directory
- a specific LLM, editor, vector store, or graph database
- a specific package manager
- concrete importers, crawlers, or converters
- proprietary commands for one client

The portable Agent Knowledge unit remains a plain directory with Markdown and JSON artifacts.

## Interop principles

- A Skill can write a knowledge pack, but a knowledge pack cannot require a client to execute a Skill.
- Skill output must leave `runs/` records explaining what was read, what changed, and why review is needed.
- The pack's `status`, `trust`, and `grounding` remain determined by pack metadata and review results.
- A client MAY call a maintenance Skill, but runtime answers SHOULD read maintained knowledge artifacts through a resolver.
