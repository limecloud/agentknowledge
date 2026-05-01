---
title: Glossary
description: Terms used by the Agent Knowledge standard.
---

# Glossary

## Agent Knowledge

The proposed standard for packaging source-grounded knowledge for AI agents.

## Knowledge pack

A directory containing `KNOWLEDGE.md` and optional sources, wiki pages, compiled views, indexes, runs, schemas, evals, and assets.

## Agent Skill

A procedural package that tells an agent how to perform a task. Agent Skills use `SKILL.md`.

## Source

Raw evidence such as documents, transcripts, pages, PDFs, or notes.

## Wiki

Maintained structured knowledge compiled from sources. `wiki/` is the pack's primary compiled artifact.

## Compiled view

A concise runtime-ready file derived from `wiki/`, such as `compiled/facts.md` or `compiled/boundaries.md`. It is a runtime optimization artifact, not an untraceable independent fact source.

## Compilation

The maintenance process that incrementally turns `sources/` into `wiki/`, `compiled/`, and `indexes/`, with inputs, outputs, diagnostics, and review requirements recorded in `runs/`.

## Source map

A mapping from a claim, page, or runtime view back to raw source anchors. It explains where a fact came from and which artifacts it was compiled into.

## Index

A rebuildable search artifact such as full-text, vector, or graph index.

## Context resolver

A client component that selects which pack files or excerpts enter the model context.

## Grounding

The ability to trace claims back to source material.
