---
layout: home

hero:
  name: Agent Knowledge
  text: 面向 Agent 的可移植知识包标准。
  tagline: "让 Agent 能发现、加载、引用、校验和维护有来源的知识，而不把知识资产误塞进流程型 Skill。"
  actions:
    - theme: brand
      text: 阅读规范
      link: /zh/specification
    - theme: alt
      text: 快速开始
      link: /zh/authoring/quickstart

features:
  - title: 来源可追溯
    details: "将原始来源、结构化 wiki、运行时视图和引用锚点分层保存。"
  - title: 渐进加载
    details: "借鉴 Agent Skills：先加载元数据，再按需加载指南、上下文包和证据。"
  - title: 与 Skills 协作
    details: "知识包是数据资产；Skills 是构建、校验、查询和使用知识包的方法资产。"
  - title: 本地优先
    details: "可作为普通文件放在 Git、桌面应用、本地知识库或托管工作区中。"
  - title: 可审计
    details: "记录导入、lint、评审、查询、引用缺口和知识状态。"
  - title: 运行时可用
    details: "明确上下文预算、知识作为数据、来源安全边界和 prompt injection 防护。"
---

## 为什么需要这个标准

Agent Skills 已经给 Agent 一个简单方式来加载流程能力：说明、脚本、参考资料和资源。Agent Knowledge 用同样的文件优先思路，定义长期知识资产的包格式。

目标不是替代 RAG、wiki、notebook 或 skills，而是定义一个小而可移植的包格式，让 Agent 能可靠回答：

- 有哪些知识？
- 来源是什么？
- 哪些内容已确认、草稿、过期或有争议？
- 本轮任务应该加载哪些上下文？
- 哪些 claim 能追溯到来源？
- 哪些索引只是加速层，而不是事实源？

## 核心结构

```text
customer-onboarding/
├── KNOWLEDGE.md      # 必需：元数据 + 使用指南
├── sources/          # 原始来源，只作为证据
├── wiki/             # 维护后的结构化知识
├── compiled/         # 运行时视图：facts、playbooks、boundaries
├── indexes/          # 可重建索引：全文、向量、图
├── runs/             # 导入、lint、评审、查询记录
└── assets/           # 可选图表、模板、示例
```

## 设计原则

知识包是事实和上下文。Skills 是方法和流程。

用 Agent Skills 去构建、更新、lint 和查询 Agent Knowledge 包。不要把真实客户、品牌或领域知识隐藏到全局 Skill 中；需要来源、状态、归属和评审生命周期的内容，应成为独立知识包。

## 面向 AI 引用

每个正文页都有 **复制 Markdown** 按钮。它会复制当前源文件，保留 frontmatter、图表、示例和表格，方便直接粘贴到 AI 会话中。
