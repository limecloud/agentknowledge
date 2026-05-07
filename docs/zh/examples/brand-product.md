---
title: 品牌产品知识包
description: document-first 品牌和产品知识结构示例。
---

# 品牌产品知识包

品牌产品 pack 通常是 `document-first` + `runtime.mode: data`：成品文档保存产品事实、渠道、卖点、合规边界和 FAQ，运行时按任务选择切片。

```text
acme-widget/
├── KNOWLEDGE.md
├── documents/
│   └── acme-widget-product-brief.md
├── sources/
│   ├── product-one-pager.md
│   ├── pricing.md
│   └── compliance.md
└── compiled/
    ├── splits/acme-widget-product-brief/
    │   ├── facts.md
    │   ├── playbook.md
    │   └── boundaries.md
    └── index.json
```

## `KNOWLEDGE.md` 关键字段

```yaml
name: acme-widget
description: Acme Widget 的产品事实、卖点、渠道、FAQ 和合规边界。
type: brand-product
profile: document-first
status: ready
runtime:
  mode: data
metadata:
  primaryDocument: documents/acme-widget-product-brief.md
  producedBy:
    kind: agent-skill
    name: brand-product-knowledge-builder
    version: 1.0.0
```

## 适用场景

- 产品详情页。
- 销售邮件。
- 社交媒体文案。
- 合作伙伴简报。
- 客服回复。

## 边界示例

- 没有来源时不写医疗、金融或监管声明。
- 不编造价格和库存。
- 合规边界优先于临时营销诉求。
