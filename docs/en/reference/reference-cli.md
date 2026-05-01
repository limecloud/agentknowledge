---
title: Reference CLI
description: The minimal command set an Agent Knowledge reference tool should provide.
---

# Reference CLI

Agent Knowledge should have a reference tool for validating pack format, reading catalog metadata, testing resolver behavior, and checking run records. The tool name can vary; this page uses `agentknowledge-ref`.

The reference CLI is not protocol core, but it helps clients and authors converge on the same semantics.

## Minimal commands

```bash
agentknowledge-ref validate ./pack
agentknowledge-ref read-properties ./pack
agentknowledge-ref to-catalog ./pack
agentknowledge-ref resolve-context ./pack --query "..." --dry-run
agentknowledge-ref validate-run ./pack/runs/compile-2026-05-01.json
agentknowledge-ref eval ./pack --suite evals/discovery.validation.json
```

## `validate`

Checks:

- `KNOWLEDGE.md` exists
- required frontmatter is valid
- directories and paths follow conventions
- source maps resolve to source anchors
- `compiled/` does not contain important untraceable claims
- schema, eval, and run files parse

## `read-properties`

Outputs pack metadata:

```json
{
  "name": "acme-product-brief",
  "description": "Product facts and boundaries for Acme Widget.",
  "type": "brand-product",
  "status": "ready",
  "trust": "user-confirmed",
  "grounding": "recommended"
}
```

## `to-catalog`

Outputs a short catalog suitable for client startup. It must not include full knowledge content.

## `resolve-context`

Runs a dry-run resolver and returns selected files, source anchors, token estimates, and warnings. It does not call a model.

## `validate-run`

Validates compile, lint, health, or eval records in `runs/` against schemas.

## `eval`

Runs discovery, context, or answer evals and outputs comparable results.

## Publishing guidance

Reference tools should support pinned invocation:

```bash
uvx agentknowledge-ref@0.4.0 validate ./pack
npx agentknowledge-ref@0.4.0 validate ./pack
```

Tool output should follow the [maintenance script contract](/en/authoring/maintenance-script-contract).
