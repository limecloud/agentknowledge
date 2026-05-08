# Agent Knowledge v0.6.2

Agent Knowledge v0.6.2 adds public ecosystem exposure across the Agent standards family. Each standard now links to the other published standards and documents future standard candidates.

## Highlights

- Adds an Agent standards ecosystem page under `reference/agent-ecosystem`.
- Links Agent Knowledge, Agent UI, Agent Runtime, and Agent Evidence from the public docs.
- Adds English and Simplified Chinese ecosystem pages.
- Adds ecosystem links to `llms.txt` and `llms-full.txt`.
- Updates version snapshots and package metadata.

## Validation

- `npm run build`
- Repository-base `VITEPRESS_BASE` build
- `npm audit --omit=dev`
- `npm pack --dry-run`
- LLM file consistency checks
- Forbidden local-coupling scan
