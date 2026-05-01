---
title: Discovery evals
description: Use repeatable tests to evaluate whether a knowledge pack is selected for the right tasks.
---

# Discovery evals

A pack's `description` is the entrypoint for client catalogs and resolver selection. If it is too narrow, the pack is missed. If it is too broad, the pack is over-selected.

Discovery evals answer two questions:

- Which tasks should select this knowledge pack?
- Which tasks should not select it?

## File structure

```text
evals/
├── discovery.train.json
└── discovery.validation.json
```

Use `train` to iterate on descriptions and context maps. Use `validation` to prevent overfitting.

## Case format

```json
{
  "pack_name": "acme-product-brief",
  "cases": [
    {
      "id": "support-pricing-boundary",
      "prompt": "Help me answer whether Acme Widget has enterprise pricing.",
      "expected": "select",
      "reason": "The task concerns Acme product facts and pricing boundaries."
    },
    {
      "id": "generic-email-edit",
      "prompt": "Polish this generic English email.",
      "expected": "reject",
      "reason": "The task does not require Acme product knowledge."
    }
  ]
}
```

## Metrics

| Metric | Meaning |
| --- | --- |
| selection precision | Of selected tasks, how many truly needed the pack. |
| selection recall | Of tasks that should select the pack, how many did. |
| false positive count | Selected when it should not. |
| false negative count | Missed when it should select. |
| warning accuracy | Whether stale, disputed, and needs-review warnings fired correctly. |

## Run record

Discovery eval results should be written to `runs/eval-discovery-<timestamp>.json`:

```json
{
  "suite": "evals/discovery.validation.json",
  "pack_name": "acme-product-brief",
  "results": [
    {
      "id": "support-pricing-boundary",
      "expected": "select",
      "actual": "select",
      "passed": true
    }
  ],
  "summary": {
    "passed": 1,
    "failed": 0,
    "precision": 1,
    "recall": 1
  }
}
```

## Iteration rules

- Re-run discovery evals after changing `description`.
- When adding a major use case, add a validation case before tuning the description.
- Do not put long rules in `description`; put detailed navigation in the `KNOWLEDGE.md` context map.
- If selection needs complex logic, put it in the client resolver or maintenance Skill, not in knowledge prose.
