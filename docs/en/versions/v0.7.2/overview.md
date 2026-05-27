---
title: v0.7.2 overview
description: Agent Knowledge v0.7.2 release overview.
---

# Agent Knowledge v0.7.2

Agent Knowledge v0.7.2 adds answer-ready knowledge pack guidance for AI search, answer engines, retrieval systems, and agent clients. It keeps the same directory-as-package model and preserves the boundary that knowledge is data, not executable behavior or ranking manipulation instructions.

## Highlights

- Adds [Answer-ready knowledge packs](/en/authoring/answer-engine-knowledge).
- Adds optional `answers/` files for questions, answer blocks, citation targets, source surfaces, structured data records, and monitoring runs.
- Adds optional `metadata.primaryAnswers`.
- Clarifies that citation targets are candidates, not proof that an external answer engine has cited a pack.
- Clarifies that monitoring observations are audit data, not causality claims.
- Updates the latest specification, ontology-aware guidance, glossary, README, release notes, and LLM entrypoints.

## Compatibility

v0.7.2 is backward compatible with v0.7.1. Existing knowledge packs do not need an `answers/` directory. Clients that do not support answer-ready loading can ignore optional files under `answers/`.
