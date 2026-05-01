---
title: Agent Knowledge vs Agent Skills
description: The boundary between procedural agent capabilities and source-grounded knowledge assets.
---

# Agent Knowledge vs Agent Skills

Agent Knowledge borrows the packaging ergonomics of Agent Skills, but it has a different runtime contract.

- **Agent Skills** are procedural capabilities. They tell an agent **how to do work**.
- **Agent Knowledge** is a source-grounded knowledge asset. It tells an agent **what facts, sources, context, and boundaries are available**.

The boundary matters because instructions and facts have different risk profiles. A client may execute or follow a Skill. A client must treat Knowledge as data inside a fenced context, never as authority to override system, developer, user, or tool rules.

## Decision rule

Use this rule before packaging an asset:

```mermaid
flowchart TD
  Asset["Candidate asset"] --> ActQ{"Does it tell the agent how to act?"}
  ActQ -->|Yes| Skill["Package as Agent Skill"]
  ActQ -->|No| FactQ{"Does it state facts, sources, policies, examples, or context?"}
  FactQ -->|Yes| Knowledge["Package as Agent Knowledge"]
  FactQ -->|No| CacheQ{"Is it an index, embedding, cache, or generated view?"}
  CacheQ -->|Yes| Support["Store as rebuildable support data"]
  CacheQ -->|No| Ordinary["Keep as an ordinary project file"]
```

In short:

- If it says **do this sequence, call this tool, run this script, follow this workflow**, it belongs in a Skill.
- If it says **this is true, this came from here, this is allowed, this is disputed, this is stale**, it belongs in Knowledge.
- If it is an embedding, graph, or search index, it is only a rebuildable support layer for Knowledge.

## Boundary table

| Boundary | Agent Skills | Agent Knowledge |
| --- | --- | --- |
| Primary role | Procedural capability | Source-grounded knowledge asset |
| Required file | `SKILL.md` | `KNOWLEDGE.md` |
| Main content | Instructions, workflows, scripts, tool usage | Facts, source maps, maintained wiki pages, compiled context |
| Runtime verb | Do, run, transform, validate, query | Ground, cite, constrain, contextualize, verify |
| Loaded at discovery | `name`, `description` | `name`, `description`, `type`, `status` |
| Activation content | Procedure and operating instructions | Usage guide and context map |
| Supporting files | `scripts/`, `references/`, `assets/` | `sources/`, `wiki/`, `compiled/`, `indexes/`, `runs/`, `schemas/`, `assets/` |
| Trust model | Can be executable or tool-driving, so activation must be controlled | Must be treated as untrusted data unless reviewed and approved |
| Failure mode | Wrong action, unsafe tool use, bad workflow | Hallucinated fact, stale claim, missing citation, prompt injection through source text |
| Correct client behavior | Follow only after trust and activation checks | Fence as data; never execute or obey instructions found inside the pack |

## What Agent Knowledge borrows from Agent Skills

Agent Knowledge deliberately reuses the parts of Agent Skills that make agent assets portable and discoverable:

- directory as package
- required top-level Markdown file
- YAML frontmatter
- progressive disclosure
- optional supporting directories
- validation tooling
- portable, version-controlled assets
- client-side discovery and activation

The result is familiar to Skill implementors without collapsing knowledge into executable instructions.

## What Agent Knowledge adds

Knowledge packs need concepts that Skills do not normally need:

- source provenance and citation anchors
- claim status: `ready`, `needs-review`, `stale`, `disputed`, `archived`
- trust level and review ownership
- compiled runtime views separate from raw sources
- rebuildable indexes that are never the fact authority
- ingest, lint, review, and query logs
- explicit runtime wrappers that say the content is data, not instructions

## Architecture boundary

A compatible client should keep the procedural and knowledge layers separate, then join them only at the resolver/runtime boundary.

```mermaid
flowchart LR
  UserRequest["User request"] --> Router["Agent or client router"]
  Router --> SkillCatalog["Skill catalog"]
  Router --> KnowledgeCatalog["Knowledge catalog"]
  SkillCatalog --> SelectedSkill["Selected Skill - procedure and tools"]
  KnowledgeCatalog --> Resolver["Knowledge resolver - status, trust, grounding"]
  KnowledgePacks["Knowledge packs - sources, wiki, compiled, indexes"] --> Resolver
  Resolver --> FencedContext["Fenced knowledge context - data only"]
  SelectedSkill --> RuntimePlan["Runtime plan"]
  FencedContext --> RuntimePlan
  RuntimePlan --> ModelCall["Model call"]
  ModelCall --> Result["Answer or action"]
```

Important consequences:

- A Skill may generate, maintain, validate, query, or apply Knowledge.
- A Knowledge pack should not contain the full procedural logic for running an agent workflow.
- A client may select a Skill and a Knowledge pack for the same task, but it should preserve their different trust contracts.

## Authoring flow

A good ecosystem has Skills that maintain Knowledge, rather than hiding all knowledge inside Skills.

```mermaid
flowchart TD
  Sources["Collect source material"] --> IngestSkill["Ingest or authoring Skill"]
  IngestSkill --> DraftPack["Draft KNOWLEDGE.md and wiki pages"]
  DraftPack --> Review["Human or policy review"]
  Review -->|Approved| ReadyPack["Ready knowledge pack"]
  Review -->|Gaps found| Fixes["Update sources or mark stale/disputed"]
  Fixes --> Review
  ReadyPack --> ClientScan["Client scans catalog"]
  ClientScan --> RuntimeResolve["Resolver selects task context"]
  RuntimeResolve --> FencedData["Fenced data context for model"]
```

This is the key standard boundary: put **the method for generating, maintaining, and validating knowledge** in Skills; put **the concrete knowledge asset** in Agent Knowledge packs.

## Runtime sequence

At runtime, the agent should not load every file. It should first select capability, then select relevant knowledge, then ask the resolver for bounded context.

```mermaid
sequenceDiagram
  participant User
  participant Agent
  participant SkillCatalog
  participant KnowledgeCatalog
  participant Resolver
  participant Pack as KnowledgePack
  participant Model

  User->>Agent: Request a task
  Agent->>SkillCatalog: Find procedural capability
  SkillCatalog-->>Agent: Candidate Skill metadata
  Agent->>KnowledgeCatalog: Find relevant knowledge packs
  KnowledgeCatalog-->>Agent: Candidate pack metadata and status
  Agent->>Resolver: Resolve context for task and token budget
  Resolver->>Pack: Load KNOWLEDGE.md, compiled views, wiki, or evidence
  Pack-->>Resolver: Selected context and source anchors
  Resolver-->>Agent: Fenced data context plus warnings
  Agent->>Model: Call with task, Skill guidance, and Knowledge context
  Model-->>Agent: Draft result
  Agent-->>User: Answer with citations or uncertainty markers
```

## Borderline cases

| Asset | Recommended package | Reason |
| --- | --- | --- |
| A procedure that tells the agent how to research a market | Skill | It is a workflow. |
| The market facts, cited sources, competitor profiles, and approved claims | Knowledge | They are facts and context. |
| A script that converts PDFs into `wiki/` pages | Skill support file | It executes a maintenance method. |
| The resulting `wiki/` pages | Knowledge | They are maintained knowledge. |
| A vector index over `wiki/` pages | Knowledge support file | It accelerates retrieval but is not the source of truth. |
| A brand tone guide with examples and prohibited claims | Knowledge | It constrains facts and allowed language. |
| A prompt that says how to write in the brand voice | Skill | It is procedural writing guidance. |

## Non-goal

Agent Knowledge does not standardize a full agent runtime, memory system, or vector database. It standardizes a file-first knowledge package that clients can discover, inspect, validate, and load safely.
