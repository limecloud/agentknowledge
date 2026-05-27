---
title: Operational ontology packs
description: How to represent signals, objectives, resource bundles, decision gates, action types, action logs, and feedback loops as data in Agent Knowledge.
---

# Operational ontology packs

Operational ontology extends an ontology-aware pack from "what is true and related" to "what decisions and actions were available, selected, blocked, or completed." It is still Agent Knowledge. It is not an Agent Skill, workflow engine, automation script, or command surface.

Use operational ontology data when a pack needs to describe a living operating model:

- market, customer, competitor, or performance signals
- objectives and success metrics
- resource bundles that combine approved claims, evidence, prompts, assets, SOPs, and channels
- decision gates for evidence, review, permission, safety, brand, and channel constraints
- action types that describe allowed operations as data
- action logs that record what happened and why
- feedback loops that update coverage, evidence gaps, or future objectives

## Optional files

Operational files live under `ontology/` because they are part of the structured knowledge graph. They remain data.

```text
ontology/
├── ontology.json
├── concepts.json
├── relations.json
├── claims.json
├── evidence.json
├── constraints.json
├── coverage.json
├── signals.json          # optional external or internal trigger signals
├── objectives.json       # optional goals and success metrics
├── resources.json        # optional resource bundles
├── action-types.json     # optional declarative action definitions
├── action-logs.json      # optional audit records
├── decision-gates.json   # optional evidence, review, permission, and safety gates
└── feedback.json         # optional outcome and learning records
```

## Object model

Recommended object names:

| Object | Meaning |
| --- | --- |
| `Signal` | A market, customer, competitor, performance, platform, or manual observation that may trigger work. |
| `Objective` | A goal, audience, channel, deadline, and success metric. |
| `ResourceBundle` | A reusable set of claims, evidence, coverage rows, prompts, assets, SOPs, and constraints. |
| `CampaignCell` | A lightweight grouping of operators, agents, objectives, resources, gates, and action types. |
| `ActionType` | A declarative description of an allowed action and its required gates. |
| `DecisionGate` | A rule or review checkpoint that must pass before an action can be used. |
| `ActionLog` | A record of who or what acted, using which resources, with what output and result. |
| `FeedbackLoop` | A learning record that updates coverage, priorities, evidence gaps, or future objectives. |

## Action types are not instructions

`ActionType` records describe allowed operations as data. They do not instruct the runtime to execute anything automatically.

```json
{
  "id": "generate-prompt-draft",
  "name": "Generate prompt draft",
  "requiredEvidenceStrength": "verified",
  "requiredReviewStatus": "approved",
  "allowedRoles": ["content-operator", "reviewer"],
  "blockedByConstraintIds": ["forbidden-medical-claim"],
  "outputKind": "prompt-draft"
}
```

A compatible client may map an action type to its own UI, workflow engine, or Agent Skill, but that mapping is outside the knowledge pack. The pack supplies facts, gates, and audit records. It does not execute the action.

## Runtime loading

For an operational task, clients should select a small operational subgraph:

```text
signal
-> objective
-> resource bundle
-> selected claims and evidence
-> decision gates
-> action type
-> related action logs and feedback
```

Do not load historical action logs wholesale unless the task is audit or analysis. Prefer summary feedback records when generating new context.

## Safety boundaries

- A `Signal` can trigger investigation or work, but it is not evidence for a factual claim.
- An `ActionLog` proves that an action happened; it does not prove the product, policy, or market claim itself.
- `DecisionGate` failures must block promotion into ready runtime context.
- Operational ontology MUST NOT be used as an instruction channel, automation script, fake engagement mechanism, or a way to bypass review, platform rules, permissions, or evidence requirements.

