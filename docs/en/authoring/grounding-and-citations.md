---
title: Grounding and citations
description: How Agent Knowledge packs represent evidence, source anchors, and citation requirements.
---

# Grounding and citations

Grounding means the agent can trace important claims back to source material.

## Grounding modes

| Mode | Meaning |
| --- | --- |
| `none` | Citations are not expected. Suitable for low-risk drafts. |
| `recommended` | Important claims should cite source anchors when available. |
| `required` | Claims must be backed by source anchors or marked unknown. |

Set the mode in frontmatter:

```yaml
grounding: required
```

## Source anchors

A source anchor identifies where a claim came from.

Examples:

```yaml
source: sources/transcripts/founder-interview.md#L120
source: sources/reports/q1.pdf#page=4
source: sources/calls/customer-demo.vtt#t=00:12:33
```

## Claim records

For strict packs, keep claim records in `wiki/sources/` or `compiled/facts.md`:

```markdown
- claim: Acme Widget is sold in three tiers.
  status: confirmed
  source: sources/pricing-notes.md#tiers
  updated: 2026-05-01
```

## Runtime behavior

When grounding is required, compatible clients should instruct the model to:

- answer only from loaded pack context and allowed tools
- mark missing information as unknown
- include citations in generated output when requested
- avoid using memory or model prior as factual authority

## High-risk domains

Use `grounding: required` for domains such as:

- legal
- healthcare
- finance
- compliance
- HR policies
- regulated product claims
