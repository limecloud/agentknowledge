---
title: v0.7.1 overview
description: Agent Knowledge v0.7.1 release overview.
---

# Agent Knowledge v0.7.1

Agent Knowledge v0.7.1 extends ontology-aware packs with optional operational ontology data. It keeps the same directory-as-package model and preserves the boundary that knowledge is data, not executable behavior.

## Highlights

- Adds operational ontology authoring guidance.
- Adds optional files for signals, objectives, resources, action types, decision gates, action logs, and feedback loops.
- Clarifies that `ActionType` records are declarative data, not runtime commands.
- Clarifies that `Signal` and `ActionLog` records can explain history or trigger review, but do not prove factual claims by themselves.
- Updates the latest specification and ontology-aware pack guide.

## Compatibility

v0.7.1 is backward compatible with v0.7.0. Existing ontology-aware packs do not need operational files. Clients that do not support operational ontology loading can ignore those optional files under `ontology/`.

