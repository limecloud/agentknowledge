---
title: Brand product pack
description: Document-first example structure for brand and product knowledge.
---

# Brand product pack

Brand product packs are usually `document-first` with `runtime.mode: data`: a finished document stores product facts, channels, claims, compliance boundaries, and FAQ; the runtime selects task-relevant splits.

```text
acme-widget/
├── KNOWLEDGE.md
├── documents/
│   └── acme-widget-product-brief.md
├── sources/
│   ├── product-one-pager.md
│   ├── pricing.md
│   └── compliance.md
└── compiled/
    ├── splits/acme-widget-product-brief/
    │   ├── facts.md
    │   ├── playbook.md
    │   └── boundaries.md
    └── index.json
```

## Key `KNOWLEDGE.md` fields

```yaml
name: acme-widget
description: Product facts, claims, channels, FAQ, and compliance boundaries for Acme Widget.
type: brand-product
profile: document-first
status: ready
runtime:
  mode: data
metadata:
  primaryDocument: documents/acme-widget-product-brief.md
  producedBy:
    kind: agent-skill
    name: brand-product-knowledge-builder
    version: 1.0.0
```

## Use cases

- product pages
- sales emails
- social posts
- partner briefs
- support replies

## Boundary examples

- Do not make medical, financial, or regulated claims without source anchors.
- Do not invent pricing or availability.
- Compliance boundaries override ad-hoc marketing requests.
