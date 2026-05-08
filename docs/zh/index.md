---
layout: home
title: Agent Knowledge
description: 面向 Agent 的文件优先知识资产包标准。

hero:
  name: Agent Knowledge
  text: 面向 Agent 的文件优先知识资产包。
  tagline: "描述、溯源、编译、评估并安全加载长期知识，而不是把知识伪装成工具或 Skill。"
  actions:
    - theme: brand
      text: 阅读规范
      link: /zh/specification
    - theme: alt
      text: 快速开始
      link: /zh/authoring/quickstart
    - theme: alt
      text: 标准生态
      link: /zh/reference/agent-ecosystem
    - theme: alt
      text: LLM 完整上下文
      link: ../llms-full.txt

features:
  - title: 文件优先知识包
    details: "每个知识包从 KNOWLEDGE.md 开始，并可包含 documents、sources、wiki、compiled、indexes、runs、schemas 与 evals。"
  - title: 来源可追踪
    details: "事实与来源轨迹、评审状态、引用、争议、新鲜度和 trust metadata 保持连接。"
  - title: 运行时安全数据
    details: "兼容客户端必须把选中知识包围为数据，不能执行或服从知识内容里的指令。"
  - title: 渐进加载
    details: "Agent 先发现元数据，只激活相关知识包，再加载最小可用上下文。"
  - title: 可重建加速层
    details: "搜索、向量、图、lookup 与 compiled views 用于加速选择，不能成为事实权威。"
  - title: 面向生态互操作
    details: "Knowledge 与 Skills、Runtime、UI、Evidence、Artifact、Tool、Policy、Context、Evaluation 分层协同。"
---

## Agent Knowledge 定义什么

| 契约 | 回答的问题 |
| --- | --- |
| 知识包入口 | 有什么知识、什么时候用、当前评审状态是什么？ |
| 来源层 | 哪些 documents、sources、wiki pages 与 compiled facts 是事实权威？ |
| 运行时选择 | 哪些有界上下文可以安全进入模型运行？ |
| 溯源 | 某个 claim 来自哪里，由哪个 citation 或 source map 支撑？ |
| 维护闭环 | ingest、compile、lint、review、eval 与 refresh 如何记录？ |
| 互操作 | Knowledge 如何与 tools、skills、UI、runtime、artifacts、evidence 分清边界？ |

## 快速入口

- [什么是 Agent Knowledge？](./what-is-agent-knowledge.md)
- [最新规范](./specification.md)
- [Knowledge 与 Skills 的边界](./agent-knowledge-vs-skills.md)
- [作者快速开始](./authoring/quickstart.md)
- [完整知识包示例](./examples/complete-pack.md)
- [Agent 标准生态](./reference/agent-ecosystem.md)

## 面向 AI 客户端

- [llms.txt](../llms.txt)：简洁导航索引。
- [llms-full.txt](../llms-full.txt)：当前英文核心文档合集。
- [llm.txt](../llm.txt) 与 [llm-full.txt](../llm-full.txt)：兼容别名。

## Agent 标准生态

Knowledge 负责 durable source-grounded context。它应该链接相邻标准，而不是吞掉相邻职责：

- [Agent UI](https://limecloud.github.io/agentui/) 负责交互表面。
- [Agent Runtime](https://limecloud.github.io/agentruntime/) 负责执行事实与控制面。
- [Agent Evidence](https://limecloud.github.io/agentevidence/) 负责信任、评审、回放与导出记录。
