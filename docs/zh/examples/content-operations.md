---
title: 内容运营知识包
description: 内容日历、栏目体系、选题库和复盘指标的 document-first 示例。
---

# 内容运营知识包

内容运营 pack 属于 `data` mode 的运营 playbook。它回答“什么时候发、发什么、为什么这么发、怎么复盘”，而不是替代品牌或个人的人设。

```text
acme-content-ops/
├── KNOWLEDGE.md
├── documents/
│   └── acme-content-operations-playbook.md
├── sources/
│   ├── channel-strategy.md
│   ├── topic-bank.csv
│   └── performance-review.md
├── compiled/
│   ├── splits/acme-content-operations-playbook/
│   │   ├── columns.md
│   │   ├── calendar.md
│   │   └── review-metrics.md
│   └── index.json
└── runs/
    └── compile-20260507T100000Z.json
```

## `KNOWLEDGE.md` 关键字段

```yaml
name: acme-content-ops
description: Acme 的内容运营 playbook，含账号定位、栏目体系、选题库、内容日历和复盘指标。
type: content-operations
profile: document-first
status: ready
runtime:
  mode: data
metadata:
  primaryDocument: documents/acme-content-operations-playbook.md
  producedBy:
    kind: agent-skill
    name: content-operations-knowledge-builder
    version: 1.0.0
```

## 适用场景

- 生成下周内容日历。
- 把一个主题拆成视频号、小红书、公众号版本。
- 根据历史表现复盘选题。
- 为新品预热生成内容节奏。

## 边界示例

- 没有历史数据时，不编造播放量、转化率或 ROI。
- 内容节奏应引用 pack 中的栏目和渠道策略。
- 如果和 persona pack 同时启用，persona 决定语气，本 pack 决定运营节奏。
