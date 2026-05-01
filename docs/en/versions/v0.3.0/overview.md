---
title: v0.3.0 Overview
description: What changed in Agent Knowledge v0.3.0.
---

# v0.3.0 Overview

Version 0.3.0 makes the LLM Wiki compile-first model explicit.

It clarifies that Agent Knowledge is not only a portable folder format for source-grounded context. It is also a maintenance model for turning source material into durable knowledge artifacts that can be reviewed, traced, checked, and reused.

## Highlights

- Adds the compilation model: `sources/` as input, `wiki/` as the primary compiled artifact, `compiled/` as derived runtime views, `indexes/` as rebuildable acceleration, and `runs/` as audit evidence.
- Adds source-map and incremental-compilation guidance.
- Adds compile gates and compile-run records.
- Adds resolver guidance for stale, disputed, or missing source maps.
- Adds the knowledge engineering loop for pack authors: ingest, compile, use, file back, and check.
- Clarifies that personal workflow names such as `raw/` and `outputs/` are examples, not required protocol directories.
- Keeps the core specification tool-neutral and client-neutral.
