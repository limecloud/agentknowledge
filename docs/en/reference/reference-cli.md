---
title: Reference CLI
description: The minimal command set for an Agent Knowledge reference tool.
---

# Reference CLI

Reference tools validate pack format, read catalog metadata, test resolver behavior, and check run records. The tool name can vary; this page uses `agentknowledge-ref`.

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
- `profile`, `runtime.mode`, and `metadata.primaryDocument` are compatible with the directory shape
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
  "profile": "document-first",
  "trust": "user-confirmed",
  "grounding": "recommended",
  "runtime": {
    "mode": "data"
  },
  "metadata": {
    "primaryDocument": "documents/acme-widget-product-brief.md",
    "producedBy": {
      "kind": "agent-skill",
      "name": "brand-product-knowledge-builder",
      "version": "1.0.0"
    }
  }
}
```

## `to-catalog`

Outputs a short catalog suitable for client startup. It must not include full knowledge content.

## `resolve-context`

Runs a dry-run resolver and returns selected files, source anchors, token estimates, and warnings. It does not call a model.

Resolvers SHOULD choose candidates according to `profile`: `document-first` prefers `compiled/splits/` and `metadata.primaryDocument`; `wiki-first` prefers `compiled/` and relevant `wiki/` pages when needed.

## `validate-run`

Validates compile, lint, health, or eval records in `runs/` against schemas.

## `eval`

Runs discovery, context, or answer evals and outputs comparable results.

## Publishing guidance

Reference tools SHOULD support pinned invocation:

```bash
uvx agentknowledge-ref@0.7.0 validate ./pack
npx agentknowledge-ref@0.7.0 validate ./pack
```

Tool output SHOULD follow the [maintenance script contract](/en/authoring/maintenance-script-contract).
