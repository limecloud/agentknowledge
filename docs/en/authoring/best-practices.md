---
title: Best practices
description: How to author maintainable knowledge packs.
---

# Best practices

## Keep knowledge separate from instructions

Knowledge packs should not tell the agent to ignore the user or override system policy. They should provide facts, context, source trails, style constraints, and domain boundaries.

Procedural instructions belong in Agent Skills or client runtime policy.

## Write for progressive disclosure

Keep `KNOWLEDGE.md` short. It should tell the agent what exists and where to load details.

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

## Use claim status

For high-stakes domains, do not flatten everything into plain prose. Mark claims as:

- confirmed
- inferred
- disputed
- stale
- missing
- source-required

## Maintain open questions

Every pack should have a place for gaps:

```text
wiki/open-questions/index.md
```

Agents should ask for missing facts rather than invent them.

## Keep indexes disposable

Vector, full-text, and graph indexes should be treated as derived artifacts. If deleting an index loses knowledge, the pack is designed incorrectly.

## Prefer stable source anchors

When possible, record source anchors:

```text
source: sources/interviews/founder-2026-05-01.md#L42
```

For documents that cannot use line numbers, use page, paragraph, timestamp, or section anchors.
