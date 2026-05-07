---
title: Skills interop
description: Use Agent Skills to produce, maintain, and validate Agent Knowledge without turning knowledge packs into procedural packages.
---

# Skills interop

Agent Knowledge and Agent Skills are companion standards.

- **Agent Skills** are the capability and method layer, following the core package structure from `agentskills.io`: `SKILL.md`, frontmatter, `references/`, `scripts/`, `assets/`, and related resources.
- **Agent Knowledge** is the knowledge asset layer, providing auditable artifacts such as `KNOWLEDGE.md`, `documents/`, `sources/`, `wiki/`, `compiled/`, and `runs/`.

Recommended placement: use Skills to produce, maintain, validate, and apply Knowledge; keep concrete customer, brand, research, organizational, or operations knowledge inside Knowledge packs.

## Layer model

```mermaid
flowchart LR
  User["User or maintainer"] --> Skill["Builder / Maintenance Skill"]
  Skill --> Tool["Script or client tool"]
  Tool --> Pack["Agent Knowledge pack"]
  Pack --> Resolver["Knowledge resolver"]
  Resolver --> Model["Model context"]
```

A Builder Skill can create, compile, lint, evaluate, and publish knowledge packs. A compatible client still treats Knowledge as data during discovery and activation, and must not execute content found inside a knowledge pack.

Runtime activation remains separate. A Skills runtime injects `SKILL.md` as procedure. An Agent Knowledge runtime selects `documents/` splits, `compiled/`, `wiki/`, or source anchors and wraps them as data. See [Runtime standard](/en/client-implementation/runtime-standard).

![Builder Skill produces a Knowledge Pack with provenance](/images/builder-skill-provenance-en.png)

## Builder Skill provenance

If a Knowledge pack is generated or maintained by a Skill, it SHOULD record provenance in `KNOWLEDGE.md.metadata.producedBy` and `runs/compile-*.json`:

```yaml
metadata:
  primaryDocument: documents/main.md
  producedBy:
    kind: agent-skill
    name: personal-ip-knowledge-builder
    version: 1.0.0
    digest: sha256:example
```

```json
{
  "run_id": "compile-2026-05-07T10-00-00Z",
  "trigger": "manual",
  "status": "passed",
  "profile": "document-first",
  "builder_skill": {
    "name": "personal-ip-knowledge-builder",
    "version": "1.0.0",
    "digest": "sha256:example"
  },
  "primary_document": "documents/main.md",
  "inputs": [{ "path": "sources/interview.md" }],
  "outputs": [{ "path": "documents/main.md", "operation": "updated" }]
}
```

Provenance explains where the knowledge artifact came from. It does not mean the runtime should execute that Skill.

## Companion Skill

We recommend capturing maintenance workflows in companion Skills such as:

- `personal-ip-knowledge-builder`
- `brand-product-knowledge-builder`
- `content-operations-knowledge-builder`
- `private-domain-operations-knowledge-builder`
- `agent-knowledge-maintainer`

These Skills can provide:

- creating a knowledge pack
- importing sources and normalizing metadata
- compiling `sources/ -> documents/ -> compiled/splits/` or `sources/ -> wiki/ -> compiled/`
- running health, citation, and quality checks
- running discovery, context, and answer evals
- generating version snapshots and changelogs

These capabilities belong to the method layer and SHOULD live in a Skill, client command, CI, or external tool. The knowledge pack MAY store schemas, eval cases, run records, and sample data, but MUST NOT require clients to execute bundled scripts.

## Script boundary

If a companion Skill uses scripts, scripts SHOULD follow the [maintenance script contract](/en/authoring/maintenance-script-contract):

- write operations support `--dry-run`
- output machine-readable JSON
- diagnostics go to stderr
- dependencies and runners are pinned
- network access and credential use are declared explicitly

A Knowledge runtime MUST NOT execute these scripts during discovery, activation, or context resolution.

## What stays out of the pack core

The following MAY exist in Skills or toolchains, but MUST NOT become required Agent Knowledge protocol:

- a `scripts/` directory
- a specific LLM, editor, vector store, or graph database
- a specific package manager
- concrete importers, crawlers, or converters
- proprietary commands for one client
- full agent workflows or tool authorization policies

The portable Agent Knowledge unit remains a plain directory with Markdown and JSON artifacts.

## Interop principles

- Agent Knowledge does not fork Agent Skills; it is a companion knowledge-asset standard in the same ecosystem.
- A Skill can write a knowledge pack, but a knowledge pack cannot require a client to execute a Skill.
- Skill output must leave `runs/` records explaining what was read, what changed, and why review is needed.
- The pack's `status`, `trust`, `grounding`, `profile`, and `runtime.mode` remain determined by pack metadata and review results.
- A client MAY call a maintenance Skill, but runtime answers SHOULD read maintained knowledge artifacts through a resolver.
