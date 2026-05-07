---
title: v0.6.0 概览
description: Agent Knowledge v0.6.0 的主要变化。
---

# v0.6.0 概览

v0.6.0 把 Agent Knowledge 明确定位为 Agent Skills 生态中的互补知识资产标准，而不是另一套 Skill 标准。

## 主要变化

- 引入 `document-first`、`wiki-first`、`hybrid` 三种 profile。
- 增加 `documents/` 作为 document-first pack 的主事实源。
- 增加 `runtime.mode: data | persona`，支持事实型和人设型知识上下文。
- 增加 Builder Skill provenance，记录哪个 Skill / 工具生产或维护了知识包。
- 扩展运营类标准类型：内容运营、私域运营、直播运营、活动运营和增长策略。
- 更新 runtime 标准：persona wrapper 应先于相关 data wrapper，且 persona 仍然是数据，不是系统指令。
- 扩展 `compile-run`、`context-resolution` 和 `source-map` schema。

## 兼容性

- `KNOWLEDGE.md` 仍然是唯一必需入口。
- 未声明 `profile` 的 v0.5 pack 可按 `wiki-first` 兼容处理。
- `wiki/` 没有废弃；它从唯一主路径变成 `wiki-first` profile 的主事实源。
