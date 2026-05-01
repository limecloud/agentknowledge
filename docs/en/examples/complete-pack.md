---
title: Complete pack example
description: A complete Agent Knowledge example with compilation, source maps, evals, and run records.
---

# Complete pack example

This example shows how a mature knowledge pack can combine `sources/`, `wiki/`, `compiled/`, `indexes/`, `runs/`, `schemas/`, and `evals/`.

```text
acme-product-brief/
├── KNOWLEDGE.md
├── sources/
│   ├── product-one-pager.md
│   └── customer-interview.md
├── wiki/
│   ├── index.md
│   ├── sources/product-one-pager.md
│   ├── concepts/offline-queue.md
│   ├── contradictions/pricing.md
│   └── synthesis/rag-boundary.md
├── compiled/
│   ├── facts.md
│   ├── boundaries.md
│   └── briefing.md
├── indexes/
│   └── source-map.json
├── evals/
│   └── discovery.validation.json
├── runs/
│   ├── compile-2026-05-01T10-30-00Z.json
│   └── health-2026-05-01.md
└── schemas/
    └── local-claim.schema.json
```

## `KNOWLEDGE.md`

```markdown
---
name: acme-product-brief
description: Product facts, approved positioning, pricing boundaries, support language, and source-grounded claims for Acme Widget. Use for Acme marketing copy, sales replies, support answers, partner briefs, or checking whether Acme-related claims are approved.
type: brand-product
status: ready
version: 1.0.0
language: en
trust: user-confirmed
grounding: recommended
---

# Acme Product Brief

## Context map

- Read `compiled/briefing.md` first for normal tasks.
- Read `compiled/facts.md` for factual claims.
- Read `compiled/boundaries.md` before pricing, compliance, or customer-logo claims.
- Return to `wiki/` for novel questions or disputed claims.
- Read `sources/` anchors for citation and verification.
```

## `compiled/facts.md`

```markdown
# Facts

- Acme Widget supports offline queueing. [source: sources/product-one-pager.md#L12]
- Acme Widget is built for field service teams. [source: sources/product-one-pager.md#L4]
```

## `indexes/source-map.json`

```json
{
  "claims": [
    {
      "claim_id": "clm-acme-offline-queue",
      "text": "Acme Widget supports offline queueing.",
      "status": "confirmed",
      "source": {
        "path": "sources/product-one-pager.md",
        "anchor": "L12"
      },
      "compiled_into": [
        "wiki/concepts/offline-queue.md",
        "compiled/facts.md"
      ]
    }
  ]
}
```

## `evals/discovery.validation.json`

```json
{
  "pack_name": "acme-product-brief",
  "cases": [
    {
      "id": "support-offline-queue",
      "prompt": "Help me answer whether Acme Widget supports offline queueing.",
      "expected": "select",
      "reason": "Requires Acme product facts."
    },
    {
      "id": "generic-email-edit",
      "prompt": "Polish a generic English email.",
      "expected": "reject",
      "reason": "Does not need Acme knowledge."
    }
  ]
}
```

## `runs/compile-...json`

```json
{
  "run_id": "compile-2026-05-01T10-30-00Z",
  "trigger": "ingest",
  "status": "passed",
  "inputs": [
    {
      "path": "sources/product-one-pager.md",
      "sha256": "..."
    }
  ],
  "outputs": [
    {
      "path": "wiki/concepts/offline-queue.md",
      "operation": "updated"
    },
    {
      "path": "compiled/facts.md",
      "operation": "updated"
    }
  ],
  "diagnostics": []
}
```

## Companion Skill

A Skill that maintains this pack might expose:

```bash
agentknowledge-ref validate ./acme-product-brief
agentknowledge-ref compile ./acme-product-brief --changed sources/product-one-pager.md
agentknowledge-ref eval ./acme-product-brief --suite evals/discovery.validation.json
```

These commands are not knowledge pack core. They are maintenance-layer tools, and their outputs should be written to `runs/`.
