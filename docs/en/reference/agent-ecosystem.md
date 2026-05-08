---
title: Agent standards ecosystem
description: Mutual links across Agent Knowledge, Agent UI, Agent Runtime, and Agent Evidence.
---

# Agent Standards Ecosystem

The Agent standards ecosystem splits agent products into portable contracts. Each standard owns one layer of meaning and links to the others through stable refs instead of swallowing their responsibilities.

This page is the public friend-link map for the current standards. Use it to discover the adjacent protocols and to decide which standard should own a new concept.

## Where Agent Knowledge fits

Agent Knowledge owns source-grounded knowledge packs: source material, compiled runtime views, citations, status, review records, and safe loading rules.

Knowledge tells agents what durable facts and source-grounded context they may use.

## Current standards

| Standard | Role | Site | LLM context | Repository |
| --- | --- | --- | --- | --- |
| Agent Knowledge | Source-grounded knowledge packs for agents. | [site](https://limecloud.github.io/agentknowledge/) | [llms-full](https://limecloud.github.io/agentknowledge/llms-full.txt) | [repo](https://github.com/limecloud/agentknowledge) |
| Agent UI | Interaction surfaces for agent products. | [site](https://limecloud.github.io/agentui/) | [llms-full](https://limecloud.github.io/agentui/llms-full.txt) | [repo](https://github.com/limecloud/agentui) |
| Agent Runtime | Execution facts, controls, tasks, tools, and recovery. | [site](https://limecloud.github.io/agentruntime/) | [llms-full](https://limecloud.github.io/agentruntime/llms-full.txt) | [repo](https://github.com/limecloud/agentruntime) |
| Agent Evidence | Evidence, provenance, verification, review, replay, and export. | [site](https://limecloud.github.io/agentevidence/) | [llms-full](https://limecloud.github.io/agentevidence/llms-full.txt) | [repo](https://github.com/limecloud/agentevidence) |

## Boundary rule

```text
Agent Knowledge -> what durable source-grounded context an agent can use
Agent Runtime   -> how agent work is accepted, executed, controlled, and resumed
Agent UI        -> how agent work is projected into user-visible surfaces
Agent Evidence  -> why an agent outcome can be trusted, reviewed, replayed, and exported
```

No standard should become the whole stack. A compatible implementation should preserve native ids and link across standards with refs.

## Future standard candidates

| Candidate | Why it may become a standard |
| --- | --- |
| Agent Artifact | Generated deliverables, versions, diffs, previews, exports, and handoff refs. |
| Agent Tool | Capability declarations, permissions, progress, results, large outputs, and audit refs. |
| Agent Policy | Risk, permission, approval, retention, waiver, and access decisions. |
| Agent Context | Working context, memory, compaction, missing context, and source selection boundaries. |
| Agent Evaluation | Acceptance scenarios, rubrics, eval runs, quality gates, and evidence-backed benchmark records. |
| Agent Workflow | Portable multi-step work plans, scene launches, background jobs, and handoff states. |
| Agent Model Routing | Task profiles, model candidates, routing decisions, fallback, quota, and cost records. |

These candidates should remain design notes until they can be specified without relying on one product implementation.

## External alignment

| Reference | Used for |
| --- | --- |
| [Agent Skills](https://agentskills.io/) | Skill package format, authoring style, and AI-friendly docs reference. |
| [Model Context Protocol](https://modelcontextprotocol.io/specification) | Tool, resource, prompt, and JSON-RPC capability reference. |
| [Agent2Agent Protocol](https://github.com/a2aproject/A2A) | Peer agent tasks, messages, artifacts, and native id reference. |
| [OpenTelemetry GenAI](https://opentelemetry.io/docs/specs/semconv/gen-ai/) | Trace, span, GenAI operation, and telemetry correlation reference. |
| [CloudEvents](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) | Portable event envelope reference. |
| [W3C PROV](https://www.w3.org/TR/prov-dm/Overview.html) | Entity, activity, agent, derivation, and attribution reference. |

External protocols are references, not ownership transfers. The Agent standards should preserve their native ids and semantics while defining agent-specific relationships.
