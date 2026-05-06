---
title: v0.5.0 Overview
description: What changed in Agent Knowledge v0.5.0.
---

# v0.5.0 Overview

Version 0.5.0 defines the Agent Knowledge runtime contract and tightens the documentation into protocol style.

It keeps `KNOWLEDGE.md` as the required entrypoint, keeps maintenance tooling optional, and adds runtime guidance for discovery, activation, context selection, data wrapping, diagnostics, and Skills interop.

## Highlights

- Adds the Runtime standard for compatible clients.
- Adds the `context-resolution.schema.json` reference schema.
- Extends `agentknowledge-ref validate-run` to validate context-resolution records.
- Updates client implementation docs for discovery, activation, resolver behavior, and safe context injection.
- Rewrites current English and Chinese docs toward specification style: field tables, steps, MUST/SHOULD/MAY language, and shorter protocol text.
- Keeps historical version snapshots unchanged.

## Runtime boundary

Agent Knowledge activation is not Skill activation.

| Runtime | Entry file | Activation provides | Model behavior |
| --- | --- | --- | --- |
| Agent Skills | `SKILL.md` | Procedural instructions | Follow the procedure. |
| Agent Knowledge | `KNOWLEDGE.md` | Fenced factual context | Use as data only. |

## Compatibility

- `KNOWLEDGE.md` remains the required entrypoint.
- Required frontmatter remains `name`, `description`, `type`, and `status`.
- Existing v0.1, v0.2, v0.3, and v0.4 packs remain valid.
- Runtime tooling remains optional; compatible clients may implement the contract without using `agentknowledge-ref`.
