---
title: Glossary
description: Terms used by the Agent Knowledge standard.
---

# Glossary

## Agent Knowledge

A source-grounded knowledge asset standard for AI agents. It defines pack entry points, directories, status, provenance, runtime loading, and security boundaries.

## Knowledge pack

A directory containing `KNOWLEDGE.md` and optional `sources/`, `documents/`, `wiki/`, `compiled/`, `indexes/`, `runs/`, `schemas/`, `evals/`, and `assets/`.

## Agent Skill

A capability package that tells an agent how to perform a task. Agent Skills use `SKILL.md`. Agent Knowledge references the Agent Skills ecosystem, but does not fork the Skill standard.

## Builder Skill

An Agent Skill that produces, maintains, validates, or publishes a Knowledge pack. The Builder Skill owns the “how”; the Knowledge pack owns the artifact. A runtime MUST NOT execute the Builder Skill when consuming Knowledge.

## Source

Raw evidence such as documents, transcripts, pages, PDFs, or notes.

## Profile

The primary fact-source strategy for a knowledge pack. v0.6 defines `document-first`, `wiki-first`, and `hybrid`.

## Document-first

A profile where finished Markdown under `documents/` is the primary fact source. Use it for personal IP, brand persona, product facts, operations playbooks, SOPs, and customer-deliverable knowledge bases.

## Wiki-first

A profile where structured long-lived knowledge under `wiki/` is the primary fact source. Use it for large research corpora, multi-entity knowledge graphs, and long-running synthesis libraries.

## Hybrid

A profile that maintains both `documents/` and `wiki/`. The pack should state which side is preferred for which task.

## Runtime mode

The runtime loading mode. `data` means facts, SOPs, policies, product information, or operations playbooks. `persona` means personal or brand voice, persona, taboos, and expression boundaries. Both must enter context as data.

## Documents

The primary fact-source directory for `document-first` packs. It stores readable, editable, deliverable Markdown documents.

## Wiki

Maintained structured knowledge compiled from sources. `wiki/` is the primary fact source for `wiki-first` packs and can be the structured maintenance layer for `hybrid` packs.

## Compiled view

A concise runtime-ready view derived from `documents/` or `wiki/`, such as `compiled/facts.md`, `compiled/boundaries.md`, or `compiled/splits/`. It is a runtime optimization artifact, not an untraceable independent fact source.

## Compilation

The maintenance process that incrementally turns `sources/` into `documents/`, `wiki/`, `compiled/`, and `indexes/`, with inputs, outputs, Builder Skill provenance, diagnostics, and review requirements recorded in `runs/`.

## Builder Skill provenance

A record of which Skill, tool, or manual workflow produced or maintained the pack. Recommended locations are `KNOWLEDGE.md.metadata.producedBy` and `runs/compile-*.json.builder_skill`.

## Source map

A mapping from a claim, page, section, or runtime view back to raw source anchors. It explains where a fact came from and which artifacts it was compiled into.

## Index

A rebuildable search artifact such as full-text, vector, or graph index.

## Context resolver

A client component that selects which pack files or excerpts enter the model context.

## Grounding

The ability to trace claims back to source material.
