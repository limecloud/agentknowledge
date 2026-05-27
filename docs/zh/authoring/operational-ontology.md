---
title: Operational Ontology 知识包
description: 如何在 Agent Knowledge 中把信号、目标、资源包、决策闸口、动作类型、行动日志和反馈闭环表示为数据。
---

# Operational Ontology 知识包

Operational Ontology 把 ontology-aware 知识包从“哪些事实和关系成立”扩展到“有哪些决策和行动可用、被选择、被阻断或已完成”。它仍然是 Agent Knowledge，不是 Agent Skill、workflow 引擎、自动化脚本或命令入口。

当知识包需要描述一个动态操作模型时，可以加入 operational ontology 数据：

- 市场、用户、竞品、表现或平台信号
- 目标和成功指标
- 由已审核主张、证据、Prompt、素材、SOP 和渠道组成的资源包
- 证据、评审、权限、安全、品牌和渠道约束的决策闸口
- 作为数据描述的可用动作类型
- 记录发生了什么、为什么发生的行动日志
- 更新覆盖矩阵、证据缺口或后续目标的反馈闭环

## 可选文件

Operational 文件放在 `ontology/` 下，因为它们属于结构化知识图的一部分。它们仍然只是数据。

```text
ontology/
├── ontology.json
├── concepts.json
├── relations.json
├── claims.json
├── evidence.json
├── constraints.json
├── coverage.json
├── signals.json          # 可选：外部或内部触发信号
├── objectives.json       # 可选：目标和成功指标
├── resources.json        # 可选：资源包
├── action-types.json     # 可选：声明式动作定义
├── action-logs.json      # 可选：审计记录
├── decision-gates.json   # 可选：证据、评审、权限和安全闸口
└── feedback.json         # 可选：结果和学习记录
```

## 对象模型

推荐对象名：

| 对象 | 含义 |
| --- | --- |
| `Signal` | 可能触发行动的市场、用户、竞品、表现、平台或人工观察信号。 |
| `Objective` | 目标、人群、渠道、截止时间和成功指标。 |
| `ResourceBundle` | 可复用的主张、证据、覆盖矩阵行、Prompt、素材、SOP 和约束集合。 |
| `CampaignCell` | 运营者、Agent、目标、资源、闸口和动作类型的轻量编组。 |
| `ActionType` | 对可用动作及其必要闸口的声明式描述。 |
| `DecisionGate` | 动作使用前必须通过的规则或评审节点。 |
| `ActionLog` | 谁或什么基于哪些资源执行了什么、产出和结果是什么的记录。 |
| `FeedbackLoop` | 更新覆盖、优先级、证据缺口或后续目标的学习记录。 |

## ActionType 不是指令

`ActionType` 记录只把可用操作描述成数据，不要求 runtime 自动执行。

```json
{
  "id": "generate-prompt-draft",
  "name": "生成 Prompt 草稿",
  "requiredEvidenceStrength": "verified",
  "requiredReviewStatus": "approved",
  "allowedRoles": ["content-operator", "reviewer"],
  "blockedByConstraintIds": ["forbidden-medical-claim"],
  "outputKind": "prompt-draft"
}
```

兼容客户端可以把 action type 映射到自己的 UI、workflow 引擎或 Agent Skill，但这种映射不属于知识包本身。知识包只提供事实、闸口和审计记录，不执行动作。

## 运行时加载

执行操作型任务时，客户端应该选择一个小型 operational 子图：

```text
signal
-> objective
-> resource bundle
-> selected claims and evidence
-> decision gates
-> action type
-> related action logs and feedback
```

除非任务是审计或分析，不要整包加载历史 action logs。生成新上下文时优先加载摘要化 feedback 记录。

## 安全边界

- `Signal` 可以触发调查或行动，但不能作为事实主张的证据。
- `ActionLog` 只能证明某个行动发生过，不能证明产品、政策或市场主张本身。
- `DecisionGate` 未通过时，相关内容不得进入 ready runtime context。
- Operational ontology 不能被用作指令通道、自动化脚本、虚假互动机制，也不能用于绕过评审、平台规则、权限或证据要求。

