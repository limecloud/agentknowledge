---
title: Answer-ready knowledge packs
description: How to package questions, answer blocks, citation targets, source surfaces, and answer monitoring data for AI search and answer engines.
---

# Answer-ready knowledge packs

Answer-ready knowledge packs make a knowledge asset easier for search products, answer engines, retrieval systems, and agent clients to understand and cite. They do not promise ranking, visibility, recommendation, or inclusion in any external system.

Use this pattern when a pack needs to support:

- answer engine optimization and generative search readiness
- stable definitions for entities, products, services, and concepts
- question-to-answer maps for public or internal knowledge
- citation-ready pages, sections, paragraphs, tables, or data points
- source health, citation health, answer accuracy, and drift monitoring
- machine-readable indexes such as sitemaps, Markdown mirrors, `llms.txt`, or structured data plans

This is still Agent Knowledge. The pack describes facts, sources, answer assets, and monitoring records as data. It must not contain ranking manipulation instructions, prompt injection, crawler deception, hidden claims, fake authority, or automation commands.

## Minimal shape

```text
answer-ready-pack/
├── KNOWLEDGE.md
├── documents/
│   └── product-guide.md
├── sources/
│   └── source-notes.md
├── answers/
│   ├── questions.json
│   ├── answer-blocks.json
│   ├── citation-targets.json
│   ├── source-surfaces.json
│   ├── structured-data.json
│   └── monitoring-runs.json
├── compiled/
│   ├── answer-briefing.md
│   └── llms-full.md
└── indexes/
    └── source-map.json
```

The `answers/` directory is optional. It is a structured layer derived from `documents/`, `wiki/`, `sources/`, and reviewed public pages.

## Frontmatter

Use an existing domain type, such as `brand-product`, `domain-reference`, `research-wiki`, or `content-ontology`, when answer-ready files support a broader pack. Use `custom:<namespace>` if the implementation needs a specialized type.

```yaml
name: acme-answer-knowledge
description: Question maps, answer blocks, citation targets, and source surfaces for Acme Widget.
type: brand-product
profile: hybrid
status: ready
version: 1.0.0
language: en
grounding: required
runtime:
  mode: data
metadata:
  primaryDocument: documents/product-guide.md
  primaryAnswers: answers/questions.json
```

`metadata.primaryAnswers` is optional. If present, it points to the main answer map or manifest.

## Core objects

| Object | Meaning |
| --- | --- |
| `Question` | A user, search, support, buying, comparison, or agent question. |
| `Intent` | The reason behind the question, such as definition, comparison, purchase, troubleshooting, policy, or tutorial. |
| `AnswerBlock` | A reviewed answer unit that can be loaded directly or cited by a client. |
| `Claim` | A factual assertion used inside an answer block. |
| `Evidence` | Source-grounded support for a claim. |
| `CitationTarget` | The smallest useful page, heading, paragraph, table, media asset, or data point that can support citation. |
| `SourceSurface` | A public page, document, API page, Markdown mirror, sitemap entry, `llms.txt` entry, or structured data surface. |
| `StructuredDataRecord` | A record of schema, Open Graph, product, organization, article, FAQ, breadcrumb, or local business data. |
| `AnswerMonitoringRun` | A dated record of tested questions, observed answers, mentions, citations, competitors, inaccuracies, and drift. |

## Recommended files

| File | Purpose |
| --- | --- |
| `answers/questions.json` | Question ids, wording variants, intent, audience, stage, target entity, and risk. |
| `answers/answer-blocks.json` | Reviewed direct answers, summaries, steps, tables, comparisons, FAQs, and boundaries. |
| `answers/citation-targets.json` | Citation-ready targets with source refs, stable URLs, headings, excerpts, and health. |
| `answers/source-surfaces.json` | Crawlable or machine-readable surfaces such as pages, Markdown mirrors, sitemaps, and `llms.txt`. |
| `answers/structured-data.json` | Structured data records and visible-content consistency status. |
| `answers/monitoring-runs.json` | Observed answer presence, mentions, citations, competitors, accuracy, and drift. |

## Example question record

```json
{
  "id": "q-acme-offline-use",
  "question": "Can Acme Widget work offline?",
  "variants": [
    "Does Acme Widget support offline mode?",
    "Can field teams use Acme Widget without internet?"
  ],
  "intent": "product-capability",
  "audience": ["buyer", "support-agent", "field-operator"],
  "stage": "evaluation",
  "targetEntityIds": ["entity-acme-widget"],
  "answerBlockIds": ["answer-acme-offline-use"],
  "riskLevel": "low",
  "status": "ready"
}
```

## Example answer block

```json
{
  "id": "answer-acme-offline-use",
  "format": "direct-answer",
  "answer": "Acme Widget supports offline queueing for field teams. Work is stored locally and synchronized when connectivity returns.",
  "claimIds": ["claim-offline-queueing"],
  "citationTargetIds": ["cite-product-guide-offline"],
  "evidenceStatus": "verified",
  "reviewStatus": "approved",
  "lastReviewed": "2026-05-28"
}
```

## Citation targets

Citation targets should be small and stable. A good target can support one claim or one answer without forcing the client to read a whole document.

Recommended fields:

- `id`
- `sourceRef`
- `url`
- `heading`
- `excerpt`
- `targetKind`: `page`, `section`, `paragraph`, `table`, `figure`, `video-transcript`, `data-point`
- `authorityLevel`
- `freshness`
- `accessibility`
- `health`
- `lastChecked`

Do not create citation targets for hidden text, fake sources, unverifiable claims, or content that is materially different from the visible page.

## Machine-readable surfaces

An answer-ready pack can record machine-readable surfaces as data:

| Surface | Purpose |
| --- | --- |
| `sitemap.xml` | URL discovery and update hints. |
| `robots.txt` | Crawler access policy. |
| `llms.txt` | Concise Markdown navigation for LLM clients. |
| `llms-full.txt` | Longer Markdown context for clients that choose to load it. |
| Markdown mirror | A text-first copy of important pages or docs. |
| Structured data | JSON-LD or equivalent schema records that match visible content. |

These surfaces help clients discover and understand content, but they are not a guarantee of ranking or answer inclusion.

## Monitoring

Monitoring records are observations, not proof that an external engine will keep behaving the same way.

Recommended fields:

- `promptSetId`
- `platform`
- `questionId`
- `answerPresence`: `absent`, `mentioned`, `cited`, `primary`, `incorrect`
- `citationTargetIds`
- `competitorEntities`
- `answerAccuracy`
- `observedAt`
- `notes`

Use monitoring runs to detect:

- answer drift
- outdated facts
- missing citations
- competitor occupancy
- hallucinated product or policy claims
- broken citation targets
- structured data mismatch

## Runtime loading

For answer tasks, clients should load a compact answer subgraph:

```text
question
-> intent and audience
-> answer block
-> claims
-> citation targets
-> constraints and risk notes
-> relevant source excerpts only when citation or verification is needed
```

The resolver should not load every monitoring run. Prefer the latest summary unless the user asks for audit details.

## Boundaries

- Answer-ready files are data, not ranking instructions.
- `CitationTarget` records are citation candidates, not proof of external citation.
- Monitoring observations do not prove causality.
- Structured data must match visible content.
- Do not include prompt injection, crawler deception, fake authority, fabricated citations, hidden claims, or black-hat GEO instructions.
- For high-risk topics, answer blocks must carry stronger review and evidence requirements.
