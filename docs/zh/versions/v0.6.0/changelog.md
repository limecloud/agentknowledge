---
title: v0.6.0 变更记录
description: Agent Knowledge v0.6.0 的变更记录。
---

# v0.6.0 变更记录

## Added

- `profile: document-first | wiki-first | hybrid`。
- `documents/` 目录说明和 document-first 编译路径。
- `runtime.mode: data | persona`。
- Builder Skill provenance 字段建议。
- 运营类 `type` 示例：`content-operations`、`private-domain-operations`、`live-commerce-operations`、`campaign-operations`、`growth-strategy`。
- 内容运营和私域运营示例页面。
- Skills / Knowledge 边界、profile 选择、运行时安全管道和 Builder Skill provenance 的解释图。
- README 主视觉和面向发布的项目入口页。
- npm 发布 workflow 默认值更新为 `v0.6.0` 发布标签。

## Changed

- 与 Agent Skills 的关系改为 sibling / companion standards。
- Runtime resolver 增加 profile 和 runtime mode 分支。
- Schema 增加 document-first、builder provenance、章节 coverage 和 wrapper order 字段。
- Reference CLI 版本对齐到 `0.6.0`，并支持 profile-aware catalog 和 resolver smoke 行为。

## Compatibility

- v0.5 的 wiki-first 包仍可使用。
- 没有 `profile` 字段时，客户端可按 `wiki-first` 兼容处理。
