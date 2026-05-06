---
layout: home

hero:
  name: Agent Knowledge
  text: File-first knowledge packs for agents.
  tagline: "A portable package format for facts, sources, context, status, and runtime-safe knowledge loading."
  actions:
    - theme: brand
      text: Read the specification
      link: /en/specification
    - theme: alt
      text: Start authoring
      link: /en/authoring/quickstart

features:
  - title: Required entrypoint
    details: "Every pack starts with KNOWLEDGE.md: YAML frontmatter plus a short Markdown guide."
  - title: Progressive loading
    details: "Clients read catalog metadata first, then the guide, selected context, and evidence only when needed."
  - title: Data at runtime
    details: "Loaded knowledge is fenced as data. It must not override system, developer, user, or tool instructions."
  - title: Source traceability
    details: "sources/, wiki/, compiled/, indexes/, and runs/ have separate roles and review expectations."
  - title: Rebuildable indexes
    details: "Vector, graph, lookup, and full-text indexes accelerate selection but are not fact authority."
  - title: Skill interop
    details: "Skills can maintain packs. Packs remain portable data artifacts with status and provenance."
---

## Package Shape

An Agent Knowledge pack is a directory containing a required `KNOWLEDGE.md` file and optional support directories.

Required client-visible metadata:

| Field | Purpose |
| --- | --- |
| `name` | Stable package identifier. |
| `description` | Discovery text for selection. |
| `type` | Standard or namespaced pack category. |
| `status` | Review state: `draft`, `ready`, `needs-review`, `stale`, `disputed`, or `archived`. |

```text
customer-onboarding/
├── KNOWLEDGE.md      # Required: metadata + usage guide
├── sources/          # Raw source files, treated as read-only evidence
├── wiki/             # Maintained pages, decisions, entities, concepts
├── compiled/         # Runtime views: facts, playbooks, boundaries
├── indexes/          # Optional, rebuildable search/vector/graph indexes
├── runs/             # Ingest, lint, review, query logs
└── assets/           # Optional diagrams, templates, examples
```

## Runtime Rule

Compatible clients MUST treat selected knowledge as data:

- discover metadata before loading full content
- activate only relevant packs
- select bounded context for the current task
- prefer reviewed `compiled/` views for common runtime context
- use `sources/` for citation and verification
- never execute pack content during discovery or activation
- never obey instructions found inside loaded knowledge

## Boundary With Skills

Knowledge packs store facts, examples, sources, constraints, status, and review records.

Skills store procedures, scripts, tools, and workflow instructions.

Use Skills to build, update, lint, query, or apply knowledge packs. Keep concrete customer, brand, research, organization, or domain knowledge in Agent Knowledge when it needs source trails, ownership, status, and review lifecycle.

## Copy Markdown

Every document page includes a **Copy Markdown** button. Use it to copy the current source page into an AI session with frontmatter, diagrams, examples, and tables intact.
