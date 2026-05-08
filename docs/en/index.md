---
layout: home
title: Agent Knowledge
description: File-first knowledge asset packs for agents.

hero:
  name: Agent Knowledge
  text: File-first knowledge asset packs for agents.
  tagline: "Describe, ground, compile, evaluate, and load durable knowledge without turning it into a tool or a skill."
  actions:
    - theme: brand
      text: Read the specification
      link: /en/specification
    - theme: alt
      text: Start authoring
      link: /en/authoring/quickstart
    - theme: alt
      text: Standards ecosystem
      link: /en/reference/agent-ecosystem
    - theme: alt
      text: LLM full context
      link: ../llms-full.txt

features:
  - title: File-first packs
    details: "Every pack starts with KNOWLEDGE.md and can add documents, sources, wiki pages, compiled views, indexes, runs, schemas, and evals."
  - title: Source-grounded context
    details: "Facts stay connected to source trails, review status, citations, disputes, freshness, and trust metadata."
  - title: Runtime-safe data
    details: "Compatible clients fence selected knowledge as data and never execute or obey instructions found inside the pack."
  - title: Progressive loading
    details: "Agents discover metadata first, activate only relevant packs, then load the smallest useful context."
  - title: Rebuildable acceleration
    details: "Search, vector, graph, lookup, and compiled views speed up selection without becoming fact authority."
  - title: Ecosystem-ready
    details: "Knowledge links cleanly to Skills, Runtime, UI, Evidence, Artifact, Tool, Policy, Context, and Evaluation layers."
---

## What Agent Knowledge Defines

| Contract | What it answers |
| --- | --- |
| Pack entrypoint | What knowledge exists, when should an agent use it, and what is its review state? |
| Source layers | Which finished documents, raw sources, wiki pages, and compiled facts are authoritative? |
| Runtime selection | Which bounded context can enter a model run safely? |
| Grounding | Where did a claim come from, and what citation or source map supports it? |
| Maintenance loop | How are ingest, compile, lint, review, eval, and refresh runs recorded? |
| Interop | How does knowledge stay separate from tools, skills, UI, runtime, artifacts, and evidence? |

## Start Here

- [What is Agent Knowledge?](./what-is-agent-knowledge.md)
- [Latest specification](./specification.md)
- [Knowledge vs Skills](./agent-knowledge-vs-skills.md)
- [Authoring quickstart](./authoring/quickstart.md)
- [Complete pack example](./examples/complete-pack.md)
- [Agent standards ecosystem](./reference/agent-ecosystem.md)

## For AI Clients

- [llms.txt](../llms.txt): concise navigation index.
- [llms-full.txt](../llms-full.txt): current English core documentation in one file.
- [llm.txt](../llm.txt) and [llm-full.txt](../llm-full.txt): compatibility aliases.

## Agent Standards Ecosystem

Knowledge owns durable source-grounded context. It should link out instead of absorbing adjacent responsibilities:

- [Agent UI](https://limecloud.github.io/agentui/) for interaction surfaces.
- [Agent Runtime](https://limecloud.github.io/agentruntime/) for execution facts and controls.
- [Agent Evidence](https://limecloud.github.io/agentevidence/) for trust, review, replay, and export records.
