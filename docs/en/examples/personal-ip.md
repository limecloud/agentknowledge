---
title: Personal IP pack
description: Document-first example structure for a personal profile knowledge pack.
---

# Personal IP pack

Personal IP packs are usually `document-first`: the user needs a readable, editable, deliverable Markdown document, not only retrieval-ready fragments.

```text
lilei-personal-ip/
├── KNOWLEDGE.md
├── documents/
│   └── lilei-personal-ip.md
├── sources/
│   ├── interview.md
│   └── public-posts.md
├── compiled/
│   ├── splits/lilei-personal-ip/
│   │   ├── 001_profile.md
│   │   ├── 008_voice.md
│   │   └── appendix_agent_usage_guide.md
│   └── index.json
└── runs/
    └── compile-20260507T100000Z.json
```

## Key `KNOWLEDGE.md` fields

```yaml
name: lilei-personal-ip
description: Personal IP knowledge for Lilei, including background, methods, voice, stories, and boundaries.
type: personal-profile
profile: document-first
status: ready
runtime:
  mode: persona
metadata:
  primaryDocument: documents/lilei-personal-ip.md
  producedBy:
    kind: agent-skill
    name: personal-ip-knowledge-builder
    version: 1.0.0
```

## Use cases

- founder introduction
- short video scripts
- event speech opening
- profile rewrite
- sales conversation style guide

## Boundary examples

- Do not invent client names or revenue numbers.
- Mark missing achievements as unknown.
- Keep voice grounded in confirmed interviews and public writing.
- `mode: persona` affects expression style only; it does not override system or user rules.
