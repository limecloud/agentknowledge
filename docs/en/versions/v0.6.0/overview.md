---
title: v0.6.0 Overview
description: What changed in Agent Knowledge v0.6.0.
---

# v0.6.0 Overview

v0.6.0 positions Agent Knowledge as a companion knowledge-asset standard in the Agent Skills ecosystem, not another Skill standard.

## Highlights

- Introduces `document-first`, `wiki-first`, and `hybrid` profiles.
- Adds `documents/` as the primary fact source for document-first packs.
- Adds `runtime.mode: data | persona` for factual and persona-style knowledge context.
- Adds Builder Skill provenance for recording which Skill or tool produced or maintained a pack.
- Expands standard operations types: content operations, private-domain operations, live commerce operations, campaign operations, and growth strategy.
- Updates the runtime standard: persona wrappers should precede related data wrappers, and persona content is still data, not a system instruction.
- Extends the `compile-run`, `context-resolution`, and `source-map` schemas.

## Compatibility

- `KNOWLEDGE.md` remains the only required entrypoint.
- v0.5 packs without `profile` can be treated as `wiki-first` for compatibility.
- `wiki/` is not deprecated; it becomes the primary fact source for the `wiki-first` profile instead of the only primary path.
