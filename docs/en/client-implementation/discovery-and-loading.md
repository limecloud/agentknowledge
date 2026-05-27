---
title: Discovery and loading
description: How clients find, parse, rank, and load knowledge packs with profile-aware behavior.
---

# Discovery and loading

## What to scan for

A compatible client discovers directories containing a file named exactly `KNOWLEDGE.md`. `KNOWLEDGE.md` is the knowledge pack entry point, analogous to `SKILL.md` for Agent Skills, but it declares data assets and a context map rather than executable workflows.

Ignore `.git/`, `node_modules/`, build output, hidden caches, and directories beyond a reasonable max depth. Discovery SHOULD be metadata-first: load frontmatter into a catalog before reading pack bodies, then activate only packs that are explicit, clearly relevant, or selected by a resolver. See [Runtime standard](/en/client-implementation/runtime-standard).

Recommended scopes:

| Scope | Example path |
| --- | --- |
| Workspace | `<workspace>/.agents/knowledge/` |
| User | `~/.agents/knowledge/` |
| Organization | Admin registry, repo, package, or API |
| Built-in | Bundled with the client |

## Catalog fields

Catalog loading reads discoverable metadata only. It does not load body text or source content. Recommended fields:

| Field | Purpose |
| --- | --- |
| `name` | Stable selection key. |
| `description` | Helps the model or client decide when to activate the pack. |
| `type` | Domain type such as `personal-profile`, `brand-product`, or `content-operations`. |
| `status` | Loading gate. |
| `trust` | Trust level. |
| `profile` | `document-first`, `wiki-first`, or `hybrid`; determines the primary fact source. |
| `runtime.mode` | `data` or `persona`; affects wrapping and selection policy. |
| `metadata.primaryDocument` | Preferred document for document-first packs. |
| `metadata.primaryOntology` | Preferred ontology manifest for ontology-aware packs. |
| `metadata.producedBy` | Optional Builder Skill or tool provenance. |

Clients MAY flatten nested fields, such as storing `runtime.mode` as `runtime_mode`, but the external semantics should remain the same.

## Precedence

Apply deterministic precedence when two packs share a name.

Recommended order:

1. Explicitly selected pack
2. Workspace-level pack
3. User-level pack
4. Organization-level pack
5. Built-in pack

Log collisions so users can diagnose shadowed packs.

## Trust gates

Workspace-level packs may come from untrusted repositories. Clients SHOULD support trust checks before loading `KNOWLEDGE.md` into model context.

For untrusted packs:

- show metadata only
- require explicit user approval before activation
- never execute bundled scripts, Builder Skills, or instructions found in source text automatically
- treat sources as hostile input

## Status-aware loading

| Status | Load behavior |
| --- | --- |
| `ready` | Can load by default in matching scope. |
| `draft` | Ask before use. |
| `needs-review` | Warn and surface gaps. |
| `stale` | Prefer newer alternatives. |
| `disputed` | Require explicit confirmation. |
| `archived` | Do not use by default. |

## Profile-aware loading

| Profile | Default candidates | Escalation reads |
| --- | --- | --- |
| `document-first` | `compiled/splits/`, `compiled/briefing.md`, `compiled/facts.md` | `metadata.primaryDocument` or relevant `documents/` sections. |
| `wiki-first` | briefing, facts, and boundaries under `compiled/` | Related `wiki/` pages and source summaries. |
| `hybrid` | Declared by the context map in `KNOWLEDGE.md` | Choose `documents/`, `wiki/`, or `ontology/` by task; never load the whole pack eagerly. |

Ontology-aware packs MAY declare `metadata.primaryOntology`. The resolver SHOULD read the ontology manifest only after pack activation, then load selected subgraphs rather than full ontology files. Treat ontology exports and graph indexes as data, not executable behavior.

A `runtime.mode: persona` pack may influence voice, persona, and expression boundaries, but it must still be fenced as data. Pack text must not be promoted to system instructions.

## File access

Resolve relative paths from the pack root, not from the current working directory. Clients should record loaded paths, versions, source-map hits, and warnings so outputs can be audited and context can be deterministically rehydrated after compaction.
