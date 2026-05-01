---
title: 发现评估
description: 用可重复测试评估知识包是否在正确任务中被选择。
---

# 发现评估

知识包的 `description` 是客户端 catalog 和 resolver 选择的入口。描述写得太窄会漏选，写得太宽会误选。

发现评估用于回答两个问题：

- 这个知识包应该在什么任务中被选择？
- 它不应该在哪些任务中被选择？

## 文件结构

```text
evals/
├── discovery.train.json
└── discovery.validation.json
```

`train` 用来迭代描述和上下文地图，`validation` 用来防止过拟合。

## 用例格式

```json
{
  "pack_name": "acme-product-brief",
  "cases": [
    {
      "id": "support-pricing-boundary",
      "prompt": "帮我回复客户：Acme Widget 有没有企业版价格？",
      "expected": "select",
      "reason": "问题涉及 Acme 产品和价格边界。"
    },
    {
      "id": "generic-email-edit",
      "prompt": "帮我润色这封普通英文邮件。",
      "expected": "reject",
      "reason": "任务不需要 Acme 产品知识。"
    }
  ]
}
```

## 指标

| 指标 | 含义 |
| --- | --- |
| selection precision | 被选择的任务中有多少真的需要该包。 |
| selection recall | 应该选择该包的任务中有多少被选中。 |
| false positive count | 不该选却选了。 |
| false negative count | 该选却没选。 |
| warning accuracy | stale、disputed、needs-review 是否触发正确告警。 |

## 运行记录

发现评估结果应写入 `runs/eval-discovery-<timestamp>.json`：

```json
{
  "suite": "evals/discovery.validation.json",
  "pack_name": "acme-product-brief",
  "results": [
    {
      "id": "support-pricing-boundary",
      "expected": "select",
      "actual": "select",
      "passed": true
    }
  ],
  "summary": {
    "passed": 1,
    "failed": 0,
    "precision": 1,
    "recall": 1
  }
}
```

## 迭代规则

- 修改 `description` 后必须重新跑 discovery eval。
- 新增主要使用场景时，先加 validation case，再调 description。
- 不要把长规则塞进 `description`；详细导航放进 `KNOWLEDGE.md` 的上下文地图。
- 如果需要复杂选择逻辑，放进客户端 resolver 或维护 Skill，不要把它伪装成知识正文。
