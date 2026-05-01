---
title: 快速开始
description: 创建第一个 Agent Knowledge 知识包。
---

# 快速开始

## 1. 创建目录

```text
acme-product-brief/
└── KNOWLEDGE.md
```

## 2. 写入 frontmatter

```yaml
name: acme-product-brief
description: Acme Widget 的产品事实、定位、语气和边界。
type: brand-product
status: draft
version: 0.1.0
language: zh-CN
grounding: recommended
```

## 3. 写使用指南

`KNOWLEDGE.md` 正文应该说明：何时使用、何时不要使用、运行时边界、上下文地图、引用策略。

## 4. 增加运行时视图

```text
compiled/
├── facts.md
├── voice.md
└── boundaries.md
```

## 5. 增加来源

```text
sources/
├── product-one-pager.md
├── pricing-notes.md
└── customer-interview.md
```

来源是证据，运行时视图是给 Agent 使用的紧凑上下文。
