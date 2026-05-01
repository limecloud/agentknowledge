# Agent Knowledge

Agent Knowledge is a draft open format for packaging source-grounded knowledge so AI agents can discover, load, cite, validate, and maintain it without confusing knowledge assets with procedural skills.

This repository contains the documentation site and standard draft.

The published site includes:

- English and Simplified Chinese docs under `/en/` and `/zh/`
- versioned snapshots under `/versions/`
- rendered Mermaid diagrams for architecture, flow, and sequence explanations
- a per-page **Copy Markdown** button so the current source page can be pasted into an AI session

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated at `docs/.vitepress/dist` and is deployed to GitHub Pages by `.github/workflows/pages.yml`.

## Reference CLI

The package also provides `agentknowledge-ref`, a small reference CLI for validating Agent Knowledge packs and exercising the documented tooling contracts.

```bash
npx agentknowledge-ref@0.4.0 validate ./pack
npx agentknowledge-ref@0.4.0 to-catalog ./pack
npx agentknowledge-ref@0.4.0 resolve-context ./pack --query "Need pricing facts" --dry-run
npx agentknowledge-ref@0.4.0 eval ./pack --suite evals/discovery.validation.json
```
