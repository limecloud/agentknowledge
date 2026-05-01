---
title: v0.3.0 Changelog
description: Changelog for Agent Knowledge v0.3.0.
---

# v0.3.0 Changelog

## Added

- Compilation model documentation for source-to-wiki-to-runtime maintenance.
- Knowledge engineering loop guide for durable pack workflows.
- Compile-run record guidance for `runs/compile-<timestamp>.json`.
- Source-map guidance for tracing claims to source anchors.
- Resolver warning guidance for stale, disputed, or missing source maps.

## Updated

- Specification now treats `wiki/` as the primary compiled artifact and `compiled/` as derived runtime views.
- Maintenance automation now includes compiler interface expectations.
- LLM Wiki reference now clarifies that `compiled/` is not the only compiled artifact.
- Quickstart, linting, glossary, and navigation now link to the new compilation and engineering-loop guidance.

## Compatibility

- `KNOWLEDGE.md` remains the required entrypoint.
- Existing v0.1 and v0.2 packs remain valid.
- `sources/`, `wiki/`, `compiled/`, `indexes/`, `runs/`, `schemas/`, and `evals/` remain optional directories.
- No specific editor, LLM, vector database, or client runtime is required.
