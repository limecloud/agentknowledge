---
title: v0.6.1 Specification Snapshot
description: Agent Knowledge v0.6.1 specification snapshot.
---

# v0.6.1 Specification Snapshot

v0.6.1 keeps the v0.6.0 Agent Knowledge pack semantics and adds documentation distribution requirements for LLM-friendly consumers.

## Required documentation entrypoints

A compatible documentation distribution SHOULD expose:

- `llms.txt`: concise project summary and links to primary docs.
- `llms-full.txt`: concatenated current English core docs with source URLs.
- `llm.txt`: compatibility alias for clients that look for singular naming.
- `llm-full.txt`: compatibility alias for full-context singular naming.

When hosted as a static site, these files SHOULD be served from the site root.
