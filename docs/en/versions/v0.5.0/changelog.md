---
title: v0.5.0 Changelog
description: Changelog for Agent Knowledge v0.5.0.
---

# v0.5.0 Changelog

## Added

- Runtime standard page for discovery, catalog construction, activation, context selection, data wrapping, diagnostics, and Skills relation.
- Public `context-resolution.schema.json`.
- `agentknowledge-ref validate-run` support for context-resolution records.
- Runtime standard navigation entries in English and Chinese docs.

## Updated

- Specification now links to the runtime standard and context-resolution schema.
- Client implementation docs now use the same runtime vocabulary across discovery, resolver, security, and adding-support pages.
- Authoring, reference, and example pages now use protocol-style wording.
- README and release workflow defaults now point to `v0.5.0`.
- Reference CLI examples now use `agentknowledge-ref@0.5.0`.

## Compatibility

- No breaking pack-format change.
- `KNOWLEDGE.md` remains required.
- `scripts/` remains outside the core pack protocol.
- `context-resolution.schema.json` is a reference schema for diagnostics and evals, not a required runtime dependency.
