---
title: v0.7.1 specification
description: Agent Knowledge v0.7.1 specification snapshot.
---

# Agent Knowledge v0.7.1 Specification

The v0.7.1 specification snapshot is aligned with the current [latest specification](/en/specification).

## v0.7.1 changes

- Adds optional operational ontology records for signals, objectives, resource bundles, decision gates, action types, action logs, and feedback loops.
- Extends `ontology/` semantics without changing the package entrypoint or runtime boundary.
- Clarifies that `ActionType` records are declarative data, not commands.
- Clarifies that `Signal` and `ActionLog` records are not evidence for factual claims unless independently grounded.

Authoring guides:

- [Ontology-aware packs](/en/authoring/ontology-packs)
- [Operational ontology packs](/en/authoring/operational-ontology)

