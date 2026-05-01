---
title: Discovery and loading
description: How clients find, parse, rank, and load knowledge packs.
---

# Discovery and loading

## What to scan for

A compatible client discovers directories containing a file named exactly `KNOWLEDGE.md`.

Ignore `.git/`, `node_modules/`, build output, hidden caches, and directories beyond a reasonable max depth.

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

Workspace-level packs may come from untrusted repositories. Clients should support trust checks before loading `KNOWLEDGE.md` into model context.

For untrusted packs:

- show metadata only
- require explicit user approval before activation
- never execute bundled scripts automatically
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

## File access

Resolve relative paths from the pack root, not from the current working directory.
