---
title: v0.6.0 Changelog
description: Changelog for Agent Knowledge v0.6.0.
---

# v0.6.0 Changelog

## Added

- `profile: document-first | wiki-first | hybrid`.
- `documents/` directory guidance and the document-first compilation path.
- `runtime.mode: data | persona`.
- Recommended Builder Skill provenance fields.
- Operations `type` examples: `content-operations`, `private-domain-operations`, `live-commerce-operations`, `campaign-operations`, and `growth-strategy`.
- Content operations and private-domain operations example pages.
- Explanatory images for the Skills / Knowledge boundary, profile selection, runtime safety pipeline, and Builder Skill provenance.
- A README overview image and release-ready project entry page.
- npm publish workflow defaults updated for the `v0.6.0` release tag.

## Changed

- The relationship with Agent Skills is now described as sibling / companion standards.
- Runtime resolver now has profile and runtime mode branches.
- Schemas now include document-first, builder provenance, chapter coverage, and wrapper order fields.
- Reference CLI version is aligned to `0.6.0` and supports profile-aware catalog and resolver smoke behavior.

## Compatibility

- v0.5 wiki-first packs remain valid.
- If `profile` is absent, clients may treat the pack as `wiki-first` for compatibility.
