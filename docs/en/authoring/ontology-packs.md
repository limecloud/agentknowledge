---
title: Ontology-aware packs
description: How to add concept maps, claims, evidence constraints, and coverage matrices to Agent Knowledge packs.
---

# Ontology-aware packs

Ontology-aware packs add a structured knowledge layer without changing the Agent Skills-style package model. The pack is still a directory. `KNOWLEDGE.md` is still the entrypoint. YAML frontmatter still controls discovery. Clients still load progressively.

Use `ontology/` when a pack needs more than documents or wiki pages:

- product feature to selling-point maps
- claim to evidence maps
- audience, pain-point, scenario, and channel coverage matrices
- approved and forbidden expressions
- concept aliases and normalization
- reusable subgraphs for prompt grounding or content QA
- operational signals, resource bundles, decision gates, action logs, and feedback loops

Do not use `ontology/` for procedures, tools, scripts, or workflow instructions. Those belong in Agent Skills or client tools.

## Minimal shape

```text
brand-product-ontology/
├── KNOWLEDGE.md
├── documents/
│   └── product-brief.md
├── sources/
│   └── customer-feedback.md
├── ontology/
│   ├── ontology.json
│   ├── concepts.json
│   ├── relations.json
│   ├── claims.json
│   ├── evidence.json
│   ├── constraints.json
│   ├── coverage.json
│   ├── action-types.json
│   ├── action-logs.json
│   └── decision-gates.json
└── compiled/
    └── prompt-grounding.md
```

`ontology/ontology.json` is the manifest. It should name the graph, summarize scope, list files, and state whether the ontology is draft, reviewed, stale, or disputed.

## Frontmatter

Use `type: content-ontology` for standalone ontology packs. Use the existing domain type, such as `brand-product` or `content-operations`, when ontology files are a supporting layer inside a broader pack.

```yaml
name: acme-content-ontology
description: Product claims, evidence, audiences, pain points, scenario coverage, and content constraints for Acme Widget.
type: content-ontology
profile: hybrid
status: ready
version: 1.0.0
language: en
grounding: required
runtime:
  mode: data
metadata:
  primaryDocument: documents/product-brief.md
  primaryOntology: ontology/ontology.json
  producedBy:
    kind: agent-skill
    name: content-ontology-builder
    version: 1.0.0
```

## Evidence rules

Every important claim should carry:

- a stable claim id
- an evidence status
- one or more source refs
- review status
- risk or channel constraints when relevant

Recommended evidence states:

| State | Meaning |
| --- | --- |
| `verified` | Reviewed and source-grounded. |
| `weak` | Supported, but with limited or indirect evidence. |
| `needs-verification` | Candidate claim; do not use as fact without warning. |
| `forbidden` | Must not be used in generated output. |

## Runtime loading

Clients should not inject the full ontology. Select a small subgraph for the current task:

```text
selected concepts
-> approved claims
-> evidence snippets
-> constraints and forbidden claims
-> coverage rows
-> derived prompt grounding context
```

For content generation, the runtime should include constraints beside the selected facts. A prompt that uses a product benefit should also receive forbidden claims, required evidence, and channel rules for that benefit.

## Operational ontology data

Operational ontology data is optional. It describes actions and decisions as audit-friendly data, not as executable instructions.

Use it when the ontology needs to connect:

```text
signal
-> objective
-> resource bundle
-> decision gates
-> action type
-> action log
-> feedback loop
```

Recommended optional files:

| File | Purpose |
| --- | --- |
| `signals.json` | Market, customer, competitor, performance, platform, or manual observations. |
| `objectives.json` | Goals, audiences, channels, deadlines, and success metrics. |
| `resources.json` | Bundles of approved claims, evidence, coverage rows, prompts, assets, SOPs, and constraints. |
| `action-types.json` | Declarative descriptions of allowed actions and required gates. |
| `decision-gates.json` | Evidence, review, permission, brand, safety, and channel rules. |
| `action-logs.json` | Records of who or what acted, with which resources, outputs, gate result, and status. |
| `feedback.json` | Outcome summaries and learning records. |

Operational files must preserve the same boundary as the rest of Agent Knowledge: they are data. A client may map an `ActionType` to a UI button, workflow, or Agent Skill, but the knowledge pack must not execute it.

## Builder Skill provenance

Ontology files are often produced by a Builder Skill, but runtime consumption must not execute that Skill. Record provenance in `metadata.producedBy` and `runs/compile-*.json`.

Recommended Builder Skill flow:

```text
sources/ + documents/
-> extract candidate concepts
-> normalize aliases
-> bind claims to evidence
-> build relations
-> build coverage matrix
-> validate rules
-> write ontology/
-> write runs/compile-*.json
```

Generated concepts and relations should remain `candidate` or `needs-review` until reviewed.

## Boundaries

- `ontology/` is structured data, not executable behavior.
- Operational ontology files such as `action-types.json` and `action-logs.json` are also data. They must not be treated as scripts, workflow instructions, or automation commands.
- `exports/` can contain JSON-LD, RDF, Turtle, SKOS, or OWL, but these are interchange artifacts unless the pack declares otherwise.
- Indexes can point into ontology files, but indexes are still acceleration layers.
- A missing or disputed evidence state should block factual claims in normal answers.
- A `Signal` or `ActionLog` can trigger review or explain history, but it must not be treated as evidence for product, policy, or market claims unless separately grounded.

See [Operational ontology packs](/en/authoring/operational-ontology) for the detailed authoring guide.
