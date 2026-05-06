---
title: Best practices
description: How to author maintainable knowledge packs.
---

# Best practices

Use this page as authoring requirements for packs that must stay maintainable.

## Keep knowledge separate from instructions

Knowledge packs MUST NOT tell the agent to ignore the user or override system policy.

Allowed content:

- facts
- examples
- context
- source trails
- style constraints
- domain boundaries

Procedural instructions belong in Agent Skills or client runtime policy.

## Write for progressive disclosure

Keep `KNOWLEDGE.md` short. It SHOULD tell the agent what exists and where to load details.

Good:

```markdown
See `compiled/facts.md` for confirmed facts.
Use `compiled/boundaries.md` before making compliance claims.
```

Poor:

```markdown
Paste every source document and every transcript directly into KNOWLEDGE.md.
```

## Separate raw sources from maintained knowledge

Use this distinction:

| Layer | Editable by agents? | Runtime default? |
| --- | --- | --- |
| `sources/` | No, unless explicitly imported | No |
| `wiki/` | Yes, through controlled ingest/update workflow | Sometimes |
| `compiled/` | Generated or reviewed views | Yes |
| `indexes/` | Rebuildable | No direct fact authority |

## Claim status

For high-risk domains, important claims SHOULD carry status:

- confirmed
- inferred
- disputed
- stale
- missing
- source-required

## Open questions

Every pack SHOULD have a gap location:

```text
wiki/open-questions/index.md
```

Runtime behavior: agents SHOULD ask for missing facts or mark them unknown.

## Keep indexes disposable

Vector, full-text, and graph indexes MUST be treated as derived artifacts. If deleting an index loses knowledge, the pack stores facts in the wrong layer.

## Prefer stable source anchors

Record source anchors when available:

```text
source: sources/interviews/founder-2026-05-01.md#L42
```

For documents that cannot use line numbers, use page, paragraph, timestamp, or section anchors.
