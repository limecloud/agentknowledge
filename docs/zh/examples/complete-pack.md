---
title: 完整知识包示例
description: 一个包含编译、source map、eval 和 run record 的完整 Agent Knowledge 示例。
---

# 完整知识包示例

这个示例展示一个成熟知识包应如何组合 `sources/`、`wiki/`、`compiled/`、`indexes/`、`runs/`、`schemas/` 和 `evals/`。

```text
acme-product-brief/
├── KNOWLEDGE.md
├── sources/
│   ├── product-one-pager.md
│   └── customer-interview.md
├── wiki/
│   ├── index.md
│   ├── sources/product-one-pager.md
│   ├── concepts/offline-queue.md
│   ├── contradictions/pricing.md
│   └── synthesis/rag-boundary.md
├── compiled/
│   ├── facts.md
│   ├── boundaries.md
│   └── briefing.md
├── indexes/
│   └── source-map.json
├── evals/
│   └── discovery.validation.json
├── runs/
│   ├── compile-2026-05-01T10-30-00Z.json
│   └── health-2026-05-01.md
└── schemas/
    └── local-claim.schema.json
```

## `KNOWLEDGE.md`

```markdown
---
name: acme-product-brief
description: Acme Widget 的产品事实、批准定位、价格边界、客服语言和有来源声明。用于撰写 Acme 营销文案、销售回复、客服答案、合作伙伴简报，或检查 Acme 相关 claim 是否已批准。
type: brand-product
status: ready
version: 1.0.0
language: zh-CN
trust: user-confirmed
grounding: recommended
---

# Acme Product Brief

## Context map

- 常规任务先读 `compiled/briefing.md`。
- 事实 claim 读 `compiled/facts.md`。
- 价格、合规和客户 logo 先读 `compiled/boundaries.md`。
- 新问题或争议 claim 回到 `wiki/`。
- 引用和核验读取 `sources/` 锚点。
```

## `compiled/facts.md`

```markdown
# Facts

- Acme Widget 支持离线队列。 [source: sources/product-one-pager.md#L12]
- Acme Widget 面向现场服务团队。 [source: sources/product-one-pager.md#L4]
```

## `indexes/source-map.json`

```json
{
  "claims": [
    {
      "claim_id": "clm-acme-offline-queue",
      "text": "Acme Widget 支持离线队列。",
      "status": "confirmed",
      "source": {
        "path": "sources/product-one-pager.md",
        "anchor": "L12"
      },
      "compiled_into": [
        "wiki/concepts/offline-queue.md",
        "compiled/facts.md"
      ]
    }
  ]
}
```

## `evals/discovery.validation.json`

```json
{
  "pack_name": "acme-product-brief",
  "cases": [
    {
      "id": "support-offline-queue",
      "prompt": "帮我回复客户：Acme Widget 是否支持离线队列？",
      "expected": "select",
      "reason": "需要 Acme 产品事实。"
    },
    {
      "id": "generic-email-edit",
      "prompt": "帮我润色一封普通英文邮件。",
      "expected": "reject",
      "reason": "任务不需要 Acme 知识。"
    }
  ]
}
```

## `runs/compile-...json`

```json
{
  "run_id": "compile-2026-05-01T10-30-00Z",
  "trigger": "ingest",
  "status": "passed",
  "inputs": [
    {
      "path": "sources/product-one-pager.md",
      "sha256": "..."
    }
  ],
  "outputs": [
    {
      "path": "wiki/concepts/offline-queue.md",
      "operation": "updated"
    },
    {
      "path": "compiled/facts.md",
      "operation": "updated"
    }
  ],
  "diagnostics": []
}
```

## Companion Skill

维护这个知识包的 Skill 可以提供：

```bash
agentknowledge-ref validate ./acme-product-brief
agentknowledge-ref compile ./acme-product-brief --changed sources/product-one-pager.md
agentknowledge-ref eval ./acme-product-brief --suite evals/discovery.validation.json
```

这些命令不属于知识包核心。它们是维护层工具，输出应写入 `runs/`。
