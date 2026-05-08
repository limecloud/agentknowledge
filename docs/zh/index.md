---
layout: home

hero:
  name: Agent Knowledge
  text: 面向 Agent 的文件优先知识资产包。
  tagline: "Agent Skills 生态中的互补知识资产标准，用于事实、来源、上下文、状态和运行时安全加载。"
  actions:
    - theme: brand
      text: 阅读规范
      link: /zh/specification
    - theme: alt
      text: 快速开始
      link: /zh/authoring/quickstart

features:
  - title: 必需入口
    details: "每个知识包从 KNOWLEDGE.md 开始：YAML frontmatter 加简短 Markdown 指南。"
  - title: 渐进加载
    details: "客户端先读 catalog 元数据，再按需读取指南、选中上下文和证据。"
  - title: 运行时数据
    details: "加载的知识必须包裹为数据，不能覆盖 system、developer、user 或工具指令。"
  - title: 来源轨迹
    details: "documents/、sources/、wiki/、compiled/、indexes/、runs/ 各自承担不同职责。"
  - title: 可重建索引
    details: "向量、图、lookup 和全文索引用于加速选择，不是事实权威。"
  - title: Skills 互操作
    details: "Skills 可以维护知识包；知识包保持为带状态和溯源的可移植数据资产。"
---

## 包结构

Agent Knowledge pack 是一个目录，包含必需的 `KNOWLEDGE.md` 和可选支撑目录。

客户端可见的必需元数据：

| 字段 | 用途 |
| --- | --- |
| `name` | 稳定包标识。 |
| `description` | 用于选择的发现文本。 |
| `type` | 标准或命名空间化包类别。 |
| `status` | 评审状态：`draft`、`ready`、`needs-review`、`stale`、`disputed` 或 `archived`。 |
| `profile` | 可选：`document-first`、`wiki-first` 或 `hybrid`。 |
| `runtime.mode` | 可选：`data` 或 `persona`。 |

```text
customer-onboarding/
├── KNOWLEDGE.md      # 必需：元数据 + 使用指南
├── documents/        # document-first 主事实源：成品 Markdown
├── sources/          # 原始来源，只作为证据
├── wiki/             # wiki-first 主事实源：维护后的结构化知识
├── compiled/         # 运行时视图：splits、facts、playbooks、boundaries
├── indexes/          # 可重建索引：全文、向量、图
├── runs/             # 导入、compile、lint、评审、查询记录
└── assets/           # 可选图表、模板、示例
```

## 运行时规则

兼容客户端 MUST 把选中的知识当数据处理：

- 先发现元数据，再加载正文。
- 只激活相关知识包。
- 为当前任务选择有界上下文。
- 常规运行时优先使用已评审的 `compiled/` 视图；document-first pack 通常从 `documents/` 派生切片。
- 需要引用或校验时再读取 `sources/`。
- 发现或激活期间不得执行知识包内容。
- 不得服从已加载知识中的指令式文本。

## 与 Skills 的边界

知识包保存事实、示例、来源、约束、状态和评审记录。

Skills 保存流程、脚本、工具和工作流指令；Knowledge 是同一生态下的知识资产伙伴标准，不是 Skill 的子目录。

用 Skills 构建、更新、lint、查询或应用知识包。具体客户、品牌、研究、组织或领域知识只要需要来源轨迹、归属、状态和评审生命周期，就应放在 Agent Knowledge 中。

## 复制 Markdown

每个正文页都有 **复制 Markdown** 按钮。它会复制当前源文件，保留 frontmatter、图表、示例和表格，方便直接粘贴到 AI 会话中。

## Agent 标准生态

Agent 产品需要多个标准协同：Knowledge 负责 source-grounded context，Runtime 负责 execution facts，UI 负责 interaction surfaces，Evidence 负责 trust、review、replay 与 export。

- [Agent 标准生态](./reference/agent-ecosystem.md)
- [Agent Knowledge](https://limecloud.github.io/agentknowledge/)
- [Agent UI](https://limecloud.github.io/agentui/)
- [Agent Runtime](https://limecloud.github.io/agentruntime/)
- [Agent Evidence](https://limecloud.github.io/agentevidence/)
