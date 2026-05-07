---
title: 个人 IP 知识包
description: document-first 个人画像类知识包示例。
---

# 个人 IP 知识包

个人 IP pack 通常是 `document-first`：用户需要一份可读、可编辑、可交付的成品 Markdown，而不是只能被检索器消费的碎片。

```text
lilei-personal-ip/
├── KNOWLEDGE.md
├── documents/
│   └── 李雷_个人IP知识库.md
├── sources/
│   ├── interview.md
│   └── public-posts.md
├── compiled/
│   ├── splits/李雷_个人IP知识库/
│   │   ├── 001_人物档案.md
│   │   ├── 008_表达风格.md
│   │   └── 附录_智能体应用指南.md
│   └── index.json
└── runs/
    └── compile-20260507T100000Z.json
```

## `KNOWLEDGE.md` 关键字段

```yaml
name: lilei-personal-ip
description: 李雷的个人 IP 知识库，含经历、方法论、表达风格、故事素材和禁忌边界。
type: personal-profile
profile: document-first
status: ready
runtime:
  mode: persona
metadata:
  primaryDocument: documents/李雷_个人IP知识库.md
  producedBy:
    kind: agent-skill
    name: personal-ip-knowledge-builder
    version: 1.0.0
```

## 适用场景

- 创始人介绍。
- 短视频脚本。
- 沙龙开场白。
- 个人简介改写。
- 销售沟通风格指南。

## 边界示例

- 不编造客户名或收入数据。
- 缺失成绩标记 unknown 或 `待补充`。
- 语气应来自已确认访谈和公开内容。
- `mode: persona` 只影响表达风格，不覆盖系统或用户规则。
