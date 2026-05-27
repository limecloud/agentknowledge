---
title: 术语表
description: Agent Knowledge 标准术语。
---

# 术语表

## Agent Knowledge

面向 AI Agent 的有来源知识资产标准。它定义知识包的入口、目录、状态、溯源、运行时加载和安全边界。

## Knowledge pack

包含 `KNOWLEDGE.md` 以及可选 `sources/`、`documents/`、`wiki/`、`compiled/`、`indexes/`、`runs/`、`schemas/`、`evals/`、`assets/` 的目录。

## Agent Skill

告诉 Agent 如何执行任务的能力包，入口是 `SKILL.md`。Agent Knowledge 参考 Agent Skills 生态，但不 fork Skill 标准。

## Builder Skill

用于生产、维护、校验或发布 Knowledge pack 的 Agent Skill。Builder Skill 负责“怎么做”，Knowledge pack 负责“产物是什么”。运行时消费 Knowledge 时不得执行 Builder Skill。

## Source

原始证据，如文档、访谈、网页、PDF、会议记录。

## Profile

知识包的主事实源策略。v0.6 定义 `document-first`、`wiki-first` 和 `hybrid`。

## Document-first

以 `documents/` 中的成品 Markdown 为主事实源的 profile。适合个人 IP、品牌人设、产品事实、运营 playbook、SOP 和客户交付型知识库。

## Wiki-first

以 `wiki/` 中的结构化长期知识为主事实源的 profile。适合大型研究、多实体知识图谱和长期综合库。

## Hybrid

同时维护 `documents/` 与 `wiki/` 的 profile。需要在 `KNOWLEDGE.md` 中说明不同任务优先读取哪一侧。

## Runtime mode

运行时加载模式。`data` 表示事实、SOP、政策、产品信息或运营 playbook；`persona` 表示个人或品牌语气、人设、禁忌和表达边界。两者都必须作为数据进入上下文。

## Documents

`document-first` pack 的主事实源目录，保存可读、可编辑、可交付的 Markdown 文档。

## Wiki

从 sources 编译出的结构化长期知识。`wiki/` 是 `wiki-first` pack 的主事实源，也可以作为 `hybrid` pack 的结构化维护层。

## Compiled view

从 `documents/` 或 `wiki/` 派生出的运行时紧凑视图，如 `compiled/facts.md`、`compiled/boundaries.md` 或 `compiled/splits/`。它是运行时优化产物，不应成为无法追溯的独立事实源。

## Compilation

把 `sources/` 增量转成 `documents/`、`wiki/`、`compiled/` 和 `indexes/` 的维护过程，并在 `runs/` 中记录输入、输出、Builder Skill provenance、诊断和评审要求。

## Builder Skill provenance

记录知识包由哪个 Skill、工具或人工流程生产和维护的来源信息。推荐写入 `KNOWLEDGE.md.metadata.producedBy` 和 `runs/compile-*.json.builder_skill`。

## Source map

claim、页面、章节或运行时视图到原始来源锚点的映射。它解释某个事实从哪里来，以及被编译到了哪些产物中。

## Index

可重建检索工件，如全文、向量或图索引。

## Context resolver

选择哪些知识进入模型上下文的客户端组件。

## Grounding

claim 能追溯回来源材料的能力。

## Answer-ready 知识包

一种知识包模式，把问题、答案块、引用目标、信源表面、结构化数据记录和答案监测观察作为数据记录。

## Question

用户、搜索、客服、购买、比较或 Agent 问题，可映射到意图、实体、答案块和引用目标。

## Answer block

已审核答案单元，例如直接答案、摘要、步骤列表、表格、对比、FAQ 回答或边界说明。

## Citation target

可支撑引用的最小页面、章节、段落、表格、图、转写或数据点。

## Source surface

知识暴露的公开或内部表面，例如页面、Markdown 镜像、sitemap entry、`llms.txt`、API 文档或结构化数据记录。

## Answer monitoring run

对答案出现、提及、引用、竞品、准确性、漂移和信源健康的定期观察记录。
