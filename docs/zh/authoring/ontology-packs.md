---
title: Ontology-aware 知识包
description: 如何在 Agent Knowledge 知识包中加入概念图、主张、证据约束和覆盖矩阵。
---

# Ontology-aware 知识包

Ontology-aware 知识包增加一层结构化知识，但不改变 Agent Skills 风格的包模型。包仍然是一个目录。`KNOWLEDGE.md` 仍然是入口。YAML frontmatter 仍然负责发现。客户端仍然渐进加载。

当知识包不只需要文档或 wiki 页面时，使用 `ontology/`：

- 产品功能到卖点的映射
- 主张到证据的映射
- 人群、痛点、场景和渠道覆盖矩阵
- 已批准和禁用表达
- 概念别名和归一
- 用于 prompt grounding 或内容质检的可复用子图
- operational 信号、资源包、决策闸口、行动日志和反馈闭环

不要把 `ontology/` 用于流程、工具、脚本或 workflow 指令。这些内容属于 Agent Skills 或客户端工具。

## 最小结构

```text
brand-product-ontology/
├── KNOWLEDGE.md
├── documents/
│   └── product-brief.md
├── sources/
│   └── customer-feedback.md
├── ontology/
│   ├── ontology.json
│   ├── concepts.json
│   ├── relations.json
│   ├── claims.json
│   ├── evidence.json
│   ├── constraints.json
│   ├── coverage.json
│   ├── action-types.json
│   ├── action-logs.json
│   └── decision-gates.json
└── compiled/
    └── prompt-grounding.md
```

`ontology/ontology.json` 是 manifest。它应该说明图名称、范围摘要、文件列表，以及 ontology 是 draft、reviewed、stale 还是 disputed。

## Frontmatter

独立 ontology 知识包使用 `type: content-ontology`。如果 ontology 文件只是更大知识包中的支撑层，可以继续使用现有领域类型，例如 `brand-product` 或 `content-operations`。

```yaml
name: acme-content-ontology
description: Acme Widget 的产品主张、证据、人群、痛点、场景覆盖和内容约束。
type: content-ontology
profile: hybrid
status: ready
version: 1.0.0
language: zh-CN
grounding: required
runtime:
  mode: data
metadata:
  primaryDocument: documents/product-brief.md
  primaryOntology: ontology/ontology.json
  producedBy:
    kind: agent-skill
    name: content-ontology-builder
    version: 1.0.0
```

## 证据规则

每条重要主张都应该包含：

- 稳定 claim id
- 证据状态
- 一个或多个 source refs
- 评审状态
- 必要时包含风险或渠道约束

推荐证据状态：

| 状态 | 含义 |
| --- | --- |
| `verified` | 已评审且有来源支撑。 |
| `weak` | 有支撑，但证据有限或间接。 |
| `needs-verification` | 候选主张；没有警告时不能当作事实使用。 |
| `forbidden` | 生成输出中必须禁用。 |

## 运行时加载

客户端不应该注入完整 ontology，而应该为当前任务选择小子图：

```text
选中概念
-> 已批准主张
-> 证据摘录
-> 约束和禁用主张
-> 覆盖矩阵行
-> 派生 prompt grounding context
```

用于内容生成时，运行时应该把约束和选中事实一起注入。一个使用产品收益的 prompt，也应该同时拿到该收益对应的禁用主张、证据要求和渠道规则。

## Operational Ontology 数据

Operational ontology 数据是可选层。它把行动和决策描述成可审计数据，而不是可执行指令。

当 ontology 需要连接以下链路时使用：

```text
signal
-> objective
-> resource bundle
-> decision gates
-> action type
-> action log
-> feedback loop
```

推荐可选文件：

| 文件 | 用途 |
| --- | --- |
| `signals.json` | 市场、用户、竞品、表现、平台或人工观察信号。 |
| `objectives.json` | 目标、人群、渠道、截止时间和成功指标。 |
| `resources.json` | 已批准主张、证据、覆盖矩阵行、Prompt、素材、SOP 和约束的资源包。 |
| `action-types.json` | 对可用动作及其必要闸口的声明式描述。 |
| `decision-gates.json` | 证据、评审、权限、品牌、安全和渠道规则。 |
| `action-logs.json` | 记录谁或什么基于哪些资源行动，产物、闸口结果和状态是什么。 |
| `feedback.json` | 结果摘要和学习记录。 |

Operational 文件必须保持 Agent Knowledge 的边界：它们是数据。客户端可以把 `ActionType` 映射到 UI 按钮、workflow 或 Agent Skill，但知识包不能执行它。

## Builder Skill provenance

Ontology 文件通常由 Builder Skill 产生，但运行时消费知识时不得执行该 Skill。请在 `metadata.producedBy` 和 `runs/compile-*.json` 中记录 provenance。

推荐 Builder Skill 流程：

```text
sources/ + documents/
-> 抽取候选概念
-> 归一别名
-> 绑定主张和证据
-> 建立关系
-> 建立覆盖矩阵
-> 校验规则
-> 写入 ontology/
-> 写入 runs/compile-*.json
```

生成的概念和关系在评审前应该保持 `candidate` 或 `needs-review`。

## 边界

- `ontology/` 是结构化数据，不是可执行行为。
- `action-types.json`、`action-logs.json` 等 operational ontology 文件同样是数据，不能当作脚本、workflow 指令或自动化命令。
- `exports/` 可以包含 JSON-LD、RDF、Turtle、SKOS 或 OWL，但除非知识包另行声明，否则它们只是互操作工件。
- 索引可以指向 ontology 文件，但索引仍然只是加速层。
- 缺失或有争议的证据状态应该在常规回答中阻止事实主张。
- `Signal` 或 `ActionLog` 可以触发评审或解释历史，但除非另有证据支撑，否则不能当作产品、政策或市场事实主张的证据。

详见 [Operational Ontology 知识包](/zh/authoring/operational-ontology)。
