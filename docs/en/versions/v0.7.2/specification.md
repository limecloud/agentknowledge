---
title: v0.7.2 specification
description: Agent Knowledge v0.7.2 specification snapshot.
---

# Agent Knowledge v0.7.2 Specification

The v0.7.2 specification snapshot is aligned with the current [latest specification](/en/specification).

## v0.7.2 changes

- Adds optional answer-ready records for questions, answer blocks, citation targets, source surfaces, structured data records, and monitoring observations.
- Adds optional `metadata.primaryAnswers` for answer maps or manifests.
- Extends the directory model with optional `answers/` while preserving the package entrypoint and runtime boundary.
- Clarifies that answer-ready files are data, not ranking instructions or external visibility guarantees.
- Clarifies that `CitationTarget` records are citation candidates, and `AnswerMonitoringRun` records are observations.

Authoring guides:

- [Ontology-aware packs](/en/authoring/ontology-packs)
- [Operational ontology packs](/en/authoring/operational-ontology)
- [Answer-ready knowledge packs](/en/authoring/answer-engine-knowledge)
