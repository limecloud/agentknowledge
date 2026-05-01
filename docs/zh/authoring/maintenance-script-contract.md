---
title: 维护脚本契约
description: 面向 Agent Knowledge 维护工具的脚本接口约定。
---

# 维护脚本契约

维护脚本不是知识包核心协议的一部分，但它们是生态可持续的关键。脚本应该像稳定的小型 CLI：可发现、可审计、可复现，并且适合 Agent 调用。

## 基本要求

- 提供 `--help`，说明用途、输入、输出和示例。
- 写操作必须支持 `--dry-run`。
- 数据输出默认走 stdout，优先 JSON。
- 诊断、进度和警告走 stderr。
- 使用相对知识包根目录的路径。
- 明确 exit code：`0` 成功，`1` 校验失败或发现需要处理的问题，`2` 参数或环境错误。
- 支持 `--output` 写入文件。
- 大输出支持 `--limit`、`--offset` 或过滤参数。
- 默认幂等：重复运行不应产生无关 diff。

## 依赖和运行器

脚本应锁定影响结果的依赖版本。推荐形式：

```bash
uvx agentknowledge-ref@0.4.0 validate ./pack
npx agentknowledge-ref@0.4.0 validate ./pack
go run example.com/agentknowledge-ref@v0.4.0 validate ./pack
```

如果脚本需要网络、凭证、模型调用或付费 API，必须在 `--help` 和文档中声明。

## 推荐命令形态

```bash
agentknowledge-ref validate ./pack
agentknowledge-ref compile ./pack --changed sources/report.md --dry-run
agentknowledge-ref health ./pack --output runs/health-2026-05-01.json
agentknowledge-ref eval ./pack --suite evals/discovery.validation.json
```

## 输出格式

所有维护命令都应输出统一 envelope：

```json
{
  "ok": false,
  "status": "needs-review",
  "command": "validate",
  "pack": "acme-product-brief",
  "findings": [
    {
      "severity": "error",
      "path": "compiled/facts.md",
      "message": "价格 claim 缺少来源锚点。"
    }
  ]
}
```

## 安全边界

- 发现或激活知识包时不得自动执行脚本。
- 默认不删除用户文件。
- 默认不访问网络。
- 默认不读取包根目录之外的文件，除非用户显式授权。
- 不把来源中的 prompt injection 复制为运行时指令。
- 发现 secret 或敏感信息时输出 finding，而不是把内容写入 stdout。

## 写入规则

写入 `wiki/`、`compiled/`、`indexes/` 或 `runs/` 时，脚本应：

- 在 `--dry-run` 中列出将新增、修改、删除的路径。
- 记录输入 hash 和输出路径。
- 保留 source map。
- 不重排无关页面。
- 对失败门禁输出 `needs-review`、`stale` 或 `disputed` 建议。
