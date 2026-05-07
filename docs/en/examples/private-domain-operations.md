---
title: Private-domain operations pack
description: Document-first example for user segmentation, touch cadence, community SOP, and conversion scripts.
---

# Private-domain operations pack

A private-domain operations pack is an operations playbook in `data` mode. It stores user segmentation, touch cadence, community SOPs, social posting strategy, conversion scripts, and reactivation rules.

```text
acme-private-domain-ops/
├── KNOWLEDGE.md
├── documents/
│   └── acme-private-domain-playbook.md
├── sources/
│   ├── user-segments.md
│   ├── community-sop.md
│   └── conversion-scripts.md
└── compiled/
    ├── splits/acme-private-domain-playbook/
    │   ├── segments.md
    │   ├── touch-cadence.md
    │   └── conversion-scripts.md
    └── index.json
```

## Key `KNOWLEDGE.md` fields

```yaml
name: acme-private-domain-ops
description: Acme private-domain and community operations playbook covering segmentation, touch cadence, SOP, and conversion scripts.
type: private-domain-operations
profile: document-first
status: ready
runtime:
  mode: data
metadata:
  primaryDocument: documents/acme-private-domain-playbook.md
  producedBy:
    kind: agent-skill
    name: private-domain-operations-knowledge-builder
    version: 1.0.0
```

## Use cases

- generate a seven-day community warm-up cadence
- write follow-up scripts for different user segments
- design a community event SOP
- review reactivation performance for churned users

## Boundary examples

- Do not invent segment sizes, conversion rates, or repeat-purchase rates.
- Touch frequency must not exceed the user-experience boundaries declared in the pack.
- If activated with a product-facts pack, product facts override ad-hoc conversion copy.
