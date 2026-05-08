# Agent Knowledge v0.6.3

Agent Knowledge v0.6.3 fixes and polishes the localized documentation home pages so `/en/` and `/zh/` are proper landing pages for readers and AI clients instead of long overview pages.

## Highlights

- Fixes Simplified Chinese homepage rendering by using proper VitePress home layout for localized index pages.
- Refines English and Simplified Chinese home pages with concise hero actions, quick links, ecosystem links, and LLM entrypoints.
- Keeps the core Agent Knowledge specification compatible with v0.6.2.
- Updates version snapshots and package metadata.

## Validation

- `npm run build`
- Repository-base `VITEPRESS_BASE` build
- `npm audit --omit=dev`
- `npm pack --dry-run`
- LLM file consistency checks
- Localized homepage layout checks
