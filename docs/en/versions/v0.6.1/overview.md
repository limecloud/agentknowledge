---
title: v0.6.1 Overview
description: What changed in Agent Knowledge v0.6.1.
---

# v0.6.1 Overview

v0.6.1 adds LLM-friendly documentation entrypoints for Agent Knowledge. The release publishes concise and full-context markdown files at the repository root and the documentation site root so AI clients can discover the knowledge-pack standard directly.

## Highlights

- Adds `llms.txt` as the concise LLM navigation index.
- Adds `llms-full.txt` as a concatenated English core documentation file with source URLs.
- Adds compatible `llm.txt` and `llm-full.txt` aliases.
- Publishes the same files through `docs/public/` so GitHub Pages serves them from the site root.
- Includes the LLM entrypoint files in the package manifest.

## Compatibility

v0.6.1 is compatible with v0.6.0. It does not change the Agent Knowledge pack format, schemas, runtime modes, or CLI behavior.
