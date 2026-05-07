---
title: Content operations pack
description: Document-first example for content calendars, content pillars, topic banks, and review metrics.
---

# Content operations pack

A content operations pack is an operations playbook in `data` mode. It answers when to publish, what to publish, why, and how to review performance. It does not replace a brand or personal persona.

```text
acme-content-ops/
├── KNOWLEDGE.md
├── documents/
│   └── acme-content-operations-playbook.md
├── sources/
│   ├── channel-strategy.md
│   ├── topic-bank.csv
│   └── performance-review.md
├── compiled/
│   ├── splits/acme-content-operations-playbook/
│   │   ├── columns.md
│   │   ├── calendar.md
│   │   └── review-metrics.md
│   └── index.json
└── runs/
    └── compile-20260507T100000Z.json
```

## Key `KNOWLEDGE.md` fields

```yaml
name: acme-content-ops
description: Acme content operations playbook covering positioning, pillars, topic bank, calendar, and review metrics.
type: content-operations
profile: document-first
status: ready
runtime:
  mode: data
metadata:
  primaryDocument: documents/acme-content-operations-playbook.md
  producedBy:
    kind: agent-skill
    name: content-operations-knowledge-builder
    version: 1.0.0
```

## Use cases

- generate next week's content calendar
- adapt one theme into video, social, and newsletter variants
- review topic performance from historical metrics
- generate a launch content cadence

## Boundary examples

- Do not invent views, conversion rates, or ROI when historical data is missing.
- Cadence should reference the pack's pillars and channel strategy.
- If activated with a persona pack, the persona controls voice while this pack controls operations cadence.
