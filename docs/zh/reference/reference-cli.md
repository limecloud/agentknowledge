---
title: 参考 CLI
description: Agent Knowledge 参考工具的最小命令集合。
---

# 参考 CLI

参考工具用于校验知识包格式、读取 catalog、测试 resolver 行为和检查运行记录。工具名称可以变化；本文用 `agentknowledge-ref` 表示。

参考 CLI 不是协议核心，但它能让客户端和作者对同一套语义形成共识。

## 最小命令

```bash
agentknowledge-ref validate ./pack
agentknowledge-ref read-properties ./pack
agentknowledge-ref to-catalog ./pack
agentknowledge-ref resolve-context ./pack --query "..." --dry-run
agentknowledge-ref validate-run ./pack/runs/compile-2026-05-01.json
agentknowledge-ref eval ./pack --suite evals/discovery.validation.json
```

## `validate`

检查：

- `KNOWLEDGE.md` 是否存在。
- 必需 frontmatter 是否有效。
- `profile`、`runtime.mode` 和 `metadata.primaryDocument` 是否与目录结构兼容。
- 目录和路径是否符合约定。
- source map 是否能解析到来源锚点。
- `compiled/` 是否存在无法追溯的重要 claim。
- schema、eval 和 run 文件是否能解析。

## `read-properties`

输出包 metadata：

```json
{
  "name": "acme-product-brief",
  "description": "Product facts and boundaries for Acme Widget.",
  "type": "brand-product",
  "status": "ready",
  "profile": "document-first",
  "trust": "user-confirmed",
  "grounding": "recommended",
  "runtime": {
    "mode": "data"
  },
  "metadata": {
    "primaryDocument": "documents/acme-widget-product-brief.md",
    "producedBy": {
      "kind": "agent-skill",
      "name": "brand-product-knowledge-builder",
      "version": "1.0.0"
    }
  }
}
```

## `to-catalog`

输出适合客户端启动时加载的短 catalog。不得包含完整知识正文。

## `resolve-context`

执行 dry-run resolver，返回将加载哪些文件、source anchors、token 估算和告警。它不调用模型。

resolver SHOULD 按 `profile` 选择候选：`document-first` 优先 `compiled/splits/` 和 `metadata.primaryDocument`；`wiki-first` 优先 `compiled/` 和必要的 `wiki/` 页面。

## `validate-run`

校验 `runs/` 中的编译、lint、health 或 eval 记录是否符合 schema。

## `eval`

运行 discovery、context 或 answer eval，并输出可比较结果。

## 发布

参考工具 SHOULD 支持版本锁定调用：

```bash
uvx agentknowledge-ref@0.7.1 validate ./pack
npx agentknowledge-ref@0.7.1 validate ./pack
```

工具输出应遵循 [维护脚本契约](/zh/authoring/maintenance-script-contract)。
