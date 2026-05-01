---
title: v0.4.0 Changelog
description: Changelog for Agent Knowledge v0.4.0.
---

# v0.4.0 Changelog

## Added

- `agentknowledge-ref` reference CLI with validation, catalog, resolver dry-run, run validation, and discovery eval commands.
- Skills interop guidance.
- Maintenance script contract.
- Discovery eval guide.
- Reference CLI guide.
- Complete pack example.
- Public schemas:
  - `compile-run.schema.json`
  - `source-map.schema.json`
  - `selection-eval.schema.json`

## Updated

- Specification now links to Skills interop, script contracts, and public schemas.
- Maintenance automation now points to the script contract.
- Evaluation docs now link to discovery evals and the complete pack example.
- Navigation now exposes the new tooling and ecosystem pages.

## Compatibility

- `KNOWLEDGE.md` remains the required entrypoint.
- Existing v0.1, v0.2, and v0.3 packs remain valid.
- `scripts/` remains outside the pack core protocol.
- The reference CLI is optional tooling, not a required client runtime.
