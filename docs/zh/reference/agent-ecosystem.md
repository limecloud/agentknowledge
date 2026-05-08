---
title: Agent 标准生态
description: Agent Knowledge、Agent UI、Agent Runtime、Agent Evidence 与 Agent Policy 的互链地图。
---

# Agent 标准生态

Agent 标准生态把 Agent 产品拆成可移植契约。每个标准只拥有一层语义，并通过 stable refs 与其他标准连接，而不是吞并彼此职责。

本页是当前标准的公开友链地图。用它发现相邻协议，也用它判断一个新概念应该由哪个标准拥有。

## Agent Knowledge 的位置

Agent Knowledge 拥有 source-grounded knowledge packs：source material、compiled runtime views、citations、status、review records 与安全加载规则。

Knowledge 说明 Agent 可以使用哪些长期事实与 source-grounded context。

## 当前标准

| Standard | 角色 | Site | LLM context | Repository |
| --- | --- | --- | --- | --- |
| Agent Knowledge | 面向 Agent 的 source-grounded knowledge packs。 | [site](https://limecloud.github.io/agentknowledge/) | [llms-full](https://limecloud.github.io/agentknowledge/llms-full.txt) | [repo](https://github.com/limecloud/agentknowledge) |
| Agent UI | 面向 Agent 产品的 interaction surfaces。 | [site](https://limecloud.github.io/agentui/) | [llms-full](https://limecloud.github.io/agentui/llms-full.txt) | [repo](https://github.com/limecloud/agentui) |
| Agent Runtime | Execution facts、controls、tasks、tools 与 recovery。 | [site](https://limecloud.github.io/agentruntime/) | [llms-full](https://limecloud.github.io/agentruntime/llms-full.txt) | [repo](https://github.com/limecloud/agentruntime) |
| Agent Evidence | Evidence、provenance、verification、review、replay 与 export。 | [site](https://limecloud.github.io/agentevidence/) | [llms-full](https://limecloud.github.io/agentevidence/llms-full.txt) | [repo](https://github.com/limecloud/agentevidence) |
| Agent Policy | risk、permission、approval、retention、waiver、access 与 policy decision facts。 | [site](https://limecloud.github.io/agentpolicy/) | [llms-full](https://limecloud.github.io/agentpolicy/llms-full.txt) | [repo](https://github.com/limecloud/agentpolicy) |

## 边界规则

```text
Agent Knowledge -> Agent 可以使用什么长期、可溯源上下文
Agent Runtime   -> Agent 工作如何被接受、执行、控制和恢复
Agent UI        -> Agent 工作如何投影到用户可见表面
Agent Evidence  -> Agent 结果为什么可信、如何评审、回放和导出
Agent Policy    -> Agent 动作是否可以继续以及需要哪些约束
```

没有任何一个标准应该变成整个 stack。兼容实现应保留 native ids，并通过 refs 连接不同标准。

## 未来标准候选

| Candidate | 为什么可能成为标准 |
| --- | --- |
| Agent Artifact | Generated deliverables、versions、diffs、previews、exports 与 handoff refs。 |
| Agent Tool | Capability declarations、permissions、progress、results、large outputs 与 audit refs。 |
| Agent Context | Working context、memory、compaction、missing context 与 source selection boundaries。 |
| Agent Evaluation | Acceptance scenarios、rubrics、eval runs、quality gates 与 evidence-backed benchmark records。 |
| Agent Workflow | Portable multi-step work plans、scene launches、background jobs 与 handoff states。 |
| Agent Model Routing | Task profiles、model candidates、routing decisions、fallback、quota 与 cost records。 |

这些候选在能脱离单一产品实现之前，应先保持为设计说明。

## 外部对齐

| Reference | 用途 |
| --- | --- |
| [Agent Skills](https://agentskills.io/) | Skill package format, authoring style, and AI-friendly docs reference. |
| [Model Context Protocol](https://modelcontextprotocol.io/specification) | Tool, resource, prompt, and JSON-RPC capability reference. |
| [Agent2Agent Protocol](https://github.com/a2aproject/A2A) | Peer agent tasks, messages, artifacts, and native id reference. |
| [OpenTelemetry GenAI](https://opentelemetry.io/docs/specs/semconv/gen-ai/) | Trace, span, GenAI operation, and telemetry correlation reference. |
| [CloudEvents](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) | Portable event envelope reference. |
| [W3C PROV](https://www.w3.org/TR/prov-dm/Overview.html) | Entity, activity, agent, derivation, and attribution reference. |

外部协议是参考，不是所有权转移。Agent 标准应保留外部协议的 native ids 与 semantics，同时定义 Agent-specific relationships。
