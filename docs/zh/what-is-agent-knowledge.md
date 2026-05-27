---
title: 什么是 Agent Knowledge？
description: Agent Knowledge 是面向 AI Agent 的文件优先知识包格式。
---

# 什么是 Agent Knowledge？

Agent Knowledge 定义一种面向 Agent 的可移植知识资产目录格式。它是 Agent Skills 的互操作伙伴标准：Skills 描述可执行能力，Knowledge 描述可安全消费的事实资产。

适用于需要来源轨迹、状态、评审和跨 Agent 复用的知识：

- 品牌和产品事实
- 组织 Know-how
- 个人、专家、创始人画像
- 长期研究 wiki
- 客服和销售 playbook
- 内容、私域、直播和活动运营 playbook
- 政策、合规、领域参考

不要用它保存流程、工具编排或运行时指令。这些内容属于 Skills 或客户端策略。

## 包分层

| 层 | 角色 | 运行时默认行为 |
| --- | --- | --- |
| `KNOWLEDGE.md` | 必需元数据和使用指南。 | 激活后加载。 |
| `documents/` | document-first 主事实源，保存成品 Markdown。 | 通过切片或明确选择加载。 |
| `sources/` | 原始或规范化证据。 | 只在引用、校验或争议处理时加载。 |
| `wiki/` | wiki-first 主事实源，保存来源摘要、实体、概念、决策、矛盾和综合页面。 | 只加载选中页面。 |
| `ontology/` | 可选概念、主张、关系、证据、约束和覆盖数据。 | 只加载选中的子图。 |
| `compiled/` | 从 `documents/` 或 `wiki/` 派生的短运行时视图。 | 常规运行时优先。 |
| `indexes/` | 可重建搜索、向量、图或 lookup 索引。 | 只用于找候选。 |
| `runs/` | 编译、lint、评审、eval 和查询记录。 | 诊断和审计证据。 |

规范化流程：

```text
# document-first
sources/ -> documents/ -> compiled/splits/ + indexes/
                 |
                 -> runs/

# wiki-first
sources/ -> wiki/ -> compiled/ + indexes/
              |
              -> runs/

# ontology-aware
sources/ -> documents/ 或 wiki/ -> ontology/ -> compiled/ + indexes/
                                      |
                                      -> runs/
```

## 运行时边界

兼容 runtime MUST：

1. 先加载 catalog 元数据，再加载完整内容。
2. 只激活相关知识包。
3. 检查 `status`、`trust`、`grounding`、`profile` 和 `runtime.mode`。
4. 选择最小可用上下文。
5. 把选中知识包裹为数据。
6. 把索引视为加速层，而不是事实权威。
7. 只在相关时加载 ontology 子图；不要把它们当作指令。

## Skills 边界

| 资产 | 正确位置 |
| --- | --- |
| 事实、来源摘要、批准声明、示例、政策和约束。 | Agent Knowledge |
| 流程、脚本、prompt、工具和工作流。 | Agent Skills 或客户端工具 |
| Embedding、向量索引、图索引、lookup 表。 | 知识包内或旁侧的可重建支撑工件 |
