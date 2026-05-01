---
title: Maintenance script contract
description: Script interface conventions for Agent Knowledge maintenance tools.
---

# Maintenance script contract

Maintenance scripts are not part of the knowledge pack core protocol, but they are essential for a sustainable ecosystem. Scripts should behave like stable small CLIs: discoverable, auditable, reproducible, and agent-friendly.

## Baseline requirements

- Provide `--help` with purpose, inputs, outputs, and examples.
- Write operations must support `--dry-run`.
- Data goes to stdout, preferably as JSON.
- Diagnostics, progress, and warnings go to stderr.
- Paths are relative to the knowledge pack root.
- Exit codes are explicit: `0` success, `1` validation failed or findings need action, `2` argument or environment error.
- Support `--output` for writing result files.
- Large outputs support `--limit`, `--offset`, or filters.
- Default to idempotent behavior: repeated runs should not create unrelated diffs.

## Dependencies and runners

Scripts should pin dependencies that affect results. Recommended forms:

```bash
uvx agentknowledge-ref@0.4.0 validate ./pack
npx agentknowledge-ref@0.4.0 validate ./pack
go run example.com/agentknowledge-ref@v0.4.0 validate ./pack
```

If a script needs network access, credentials, model calls, or paid APIs, it must declare that in `--help` and documentation.

## Recommended command shape

```bash
agentknowledge-ref validate ./pack
agentknowledge-ref compile ./pack --changed sources/report.md --dry-run
agentknowledge-ref health ./pack --output runs/health-2026-05-01.json
agentknowledge-ref eval ./pack --suite evals/discovery.validation.json
```

## Output format

Maintenance commands should emit a common envelope:

```json
{
  "ok": false,
  "status": "needs-review",
  "command": "validate",
  "pack": "acme-product-brief",
  "findings": [
    {
      "severity": "error",
      "path": "compiled/facts.md",
      "message": "Pricing claim is missing a source anchor."
    }
  ]
}
```

## Safety boundaries

- Never execute scripts automatically during pack discovery or activation.
- Do not delete user files by default.
- Do not access the network by default.
- Do not read files outside the pack root unless the user explicitly grants access.
- Do not copy prompt injection from sources into runtime instructions.
- When secrets or sensitive content are detected, emit a finding instead of writing the content to stdout.

## Write rules

When writing `wiki/`, `compiled/`, `indexes/`, or `runs/`, scripts should:

- list paths to be created, modified, or deleted in `--dry-run`
- record input hashes and output paths
- preserve source maps
- avoid reordering unrelated pages
- suggest `needs-review`, `stale`, or `disputed` when gates fail
