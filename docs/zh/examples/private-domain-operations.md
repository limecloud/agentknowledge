---
title: 私域 / 社群运营知识包
description: 用户分层、触达节奏、社群 SOP 和转化话术的 document-first 示例。
---

# 私域 / 社群运营知识包

私域运营 pack 属于 `data` mode 的运营 playbook。它沉淀用户分层、触达节奏、社群 SOP、朋友圈策略、转化话术和流失唤醒。

```text
acme-private-domain-ops/
├── KNOWLEDGE.md
├── documents/
│   └── acme-private-domain-playbook.md
├── sources/
│   ├── user-segments.md
│   ├── community-sop.md
│   └── conversion-scripts.md
└── compiled/
    ├── splits/acme-private-domain-playbook/
    │   ├── segments.md
    │   ├── touch-cadence.md
    │   └── conversion-scripts.md
    └── index.json
```

## `KNOWLEDGE.md` 关键字段

```yaml
name: acme-private-domain-ops
description: Acme 私域和社群运营 playbook，含用户分层、触达节奏、社群 SOP 和转化话术。
type: private-domain-operations
profile: document-first
status: ready
runtime:
  mode: data
metadata:
  primaryDocument: documents/acme-private-domain-playbook.md
  producedBy:
    kind: agent-skill
    name: private-domain-operations-knowledge-builder
    version: 1.0.0
```

## 适用场景

- 生成 7 天社群预热节奏。
- 为不同用户分层生成私聊跟进话术。
- 设计社群活动 SOP。
- 复盘流失用户唤醒效果。

## 边界示例

- 不编造用户分层人数、成交率或复购率。
- 触达频次不得超过 pack 中声明的用户体验边界。
- 如果和产品事实 pack 同时启用，产品事实优先于临时转化话术。
