---
title: Linting and review
description: A review model for keeping knowledge packs healthy.
---

# Linting and review

Knowledge packs drift unless they are checked. Agent Knowledge treats linting as a first-class workflow.

## What to lint

A linter should detect:

- missing required frontmatter
- broken file references
- orphan wiki pages
- duplicated entities
- stale claims
- claims without sources when grounding is required
- contradictions between compiled views and wiki pages
- raw sources accidentally copied into runtime views
- prompt-injection text in sources
- secrets or credentials in sources

## Review report

Write review runs to `runs/`:

```text
runs/
└── lint-2026-05-01.md
```

Example report:

```markdown
# Lint report: 2026-05-01

Status: needs-review

## Findings

- Missing source anchor for pricing claim in `compiled/facts.md`.
- `wiki/entities/acme-widget.md` conflicts with `compiled/boundaries.md` on medical claims.

## Required actions

- Add source anchor for pricing.
- Ask product owner to resolve compliance claim.
```

## Human confirmation

Agents can propose edits, but status changes should be explicit:

```yaml
status: ready
trust: user-confirmed
```

For `official` trust, require an organization-defined approval process.
