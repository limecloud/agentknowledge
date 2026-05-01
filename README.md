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

## npm publishing

Publishing is handled by `.github/workflows/publish-npm.yml` so releases do not depend on a local OTP prompt.

For the first npm release of `agentknowledge-ref`, create a short-lived npm granular access token with **Read and write** access, **Bypass 2FA** enabled, and package access broad enough to publish a new unscoped package. Save it as the GitHub repository secret `NPM_TOKEN`, then run the **Publish package to npm** workflow manually with `publish_ref=v0.4.0` and `publish_mode=token`.

After the first package exists on npm, configure npm Trusted Publishing for:

- package: `agentknowledge-ref`
- repository: `limecloud/agentknowledge`
- workflow file: `publish-npm.yml`
- environment: `npm-publish`

Then revoke the temporary token. Future releases can use the same workflow with `publish_mode=trusted` and without `NPM_TOKEN`.
