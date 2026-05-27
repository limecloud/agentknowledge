---
title: v0.7.0 overview
description: Agent Knowledge v0.7.0 release overview.
---

# Agent Knowledge v0.7.0

Agent Knowledge v0.7.0 adds ontology-aware knowledge packs while keeping the Agent Skills-style package model: directory-as-package, `KNOWLEDGE.md` entrypoint, YAML frontmatter, progressive loading, and optional resource directories.

## Highlights

- Adds optional `ontology/` directory support for concept, relation, claim, evidence, constraint, and coverage artifacts.
- Adds `metadata.primaryOntology` for ontology-aware pack manifests.
- Adds `content-ontology` as a standard `type` value.
- Defines runtime behavior for loading selected ontology subgraphs instead of injecting whole graphs.
- Adds authoring guidance for ontology-aware packs.
- Keeps ontology data separate from Skills, scripts, workflows, and executable instructions.

## Compatibility

v0.7.0 is backward compatible with v0.6 packs. Existing packs without `ontology/` continue to work unchanged. Clients that do not support ontology-aware loading can ignore `ontology/` and `metadata.primaryOntology`.

