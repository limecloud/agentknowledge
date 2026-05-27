---
title: Answer-ready 知识包
description: 如何为 AI 搜索和答案引擎打包问题、答案块、引用目标、信源表面和答案监测数据。
---

# Answer-ready 知识包

Answer-ready 知识包让知识资产更容易被搜索产品、答案引擎、检索系统和 Agent 客户端理解与引用。它不承诺任何外部系统的排名、可见性、推荐或收录。

当知识包需要支持以下场景时，可以使用这个模式：

- AEO / GEO / 生成式搜索准备度
- 品牌、产品、服务和概念的稳定定义
- 面向公开或内部知识的 question-to-answer 映射
- 可引用的页面、章节、段落、表格或数据点
- 信源健康、引用健康、答案准确性和答案漂移监测
- sitemap、Markdown 镜像、`llms.txt` 或结构化数据计划等机器可读入口

这仍然是 Agent Knowledge。知识包只把事实、来源、答案资产和监测记录描述成数据。它不能包含排名操控指令、prompt injection、爬虫欺骗、隐藏主张、虚假权威或自动化命令。

## 最小结构

```text
answer-ready-pack/
├── KNOWLEDGE.md
├── documents/
│   └── product-guide.md
├── sources/
│   └── source-notes.md
├── answers/
│   ├── questions.json
│   ├── answer-blocks.json
│   ├── citation-targets.json
│   ├── source-surfaces.json
│   ├── structured-data.json
│   └── monitoring-runs.json
├── compiled/
│   ├── answer-briefing.md
│   └── llms-full.md
└── indexes/
    └── source-map.json
```

`answers/` 目录是可选层。它从 `documents/`、`wiki/`、`sources/` 和已审核公开页面派生。

## Frontmatter

当 answer-ready 文件支撑更大的知识包时，继续使用现有领域类型，例如 `brand-product`、`domain-reference`、`research-wiki` 或 `content-ontology`。如果实现方需要专用类型，可以使用 `custom:<namespace>`。

```yaml
name: acme-answer-knowledge
description: Acme Widget 的问题图谱、答案块、引用目标和信源表面。
type: brand-product
profile: hybrid
status: ready
version: 1.0.0
language: zh-CN
grounding: required
runtime:
  mode: data
metadata:
  primaryDocument: documents/product-guide.md
  primaryAnswers: answers/questions.json
```

`metadata.primaryAnswers` 是可选字段。如果存在，它指向主要答案图谱或 manifest。

## 核心对象

| 对象 | 含义 |
| --- | --- |
| `Question` | 用户、搜索、客服、购买、比较或 Agent 会提出的问题。 |
| `Intent` | 问题背后的意图，例如定义、对比、购买、排障、政策或教程。 |
| `AnswerBlock` | 已审核、可直接加载或被客户端引用的答案单元。 |
| `Claim` | 答案块中的事实主张。 |
| `Evidence` | 支撑主张的 source-grounded 证据。 |
| `CitationTarget` | 可用于引用的最小页面、标题、段落、表格、媒体资产或数据点。 |
| `SourceSurface` | 公开页面、文档、API 页面、Markdown 镜像、sitemap entry、`llms.txt` entry 或结构化数据表面。 |
| `StructuredDataRecord` | schema、Open Graph、product、organization、article、FAQ、breadcrumb 或 local business 数据记录。 |
| `AnswerMonitoringRun` | 对问题、答案、提及、引用、竞品、不准确项和漂移的定期观测记录。 |

## 推荐文件

| 文件 | 用途 |
| --- | --- |
| `answers/questions.json` | 问题 id、问法变体、意图、人群、阶段、目标实体和风险。 |
| `answers/answer-blocks.json` | 已审核的直接答案、摘要、步骤、表格、对比、FAQ 和边界说明。 |
| `answers/citation-targets.json` | 可引用目标，包括 source refs、稳定 URL、标题、摘录和健康状态。 |
| `answers/source-surfaces.json` | 可抓取或机器可读表面，例如页面、Markdown 镜像、sitemap 和 `llms.txt`。 |
| `answers/structured-data.json` | 结构化数据记录，以及和可见内容的一致性状态。 |
| `answers/monitoring-runs.json` | 记录答案出现、提及、引用、竞品、准确性和漂移。 |

## 问题记录示例

```json
{
  "id": "q-acme-offline-use",
  "question": "Acme Widget 可以离线使用吗？",
  "variants": [
    "Acme Widget 支持 offline mode 吗？",
    "现场团队断网时能不能用 Acme Widget？"
  ],
  "intent": "product-capability",
  "audience": ["buyer", "support-agent", "field-operator"],
  "stage": "evaluation",
  "targetEntityIds": ["entity-acme-widget"],
  "answerBlockIds": ["answer-acme-offline-use"],
  "riskLevel": "low",
  "status": "ready"
}
```

## 答案块示例

```json
{
  "id": "answer-acme-offline-use",
  "format": "direct-answer",
  "answer": "Acme Widget 支持现场团队的离线队列。工作会先保存在本地，并在网络恢复后同步。",
  "claimIds": ["claim-offline-queueing"],
  "citationTargetIds": ["cite-product-guide-offline"],
  "evidenceStatus": "verified",
  "reviewStatus": "approved",
  "lastReviewed": "2026-05-28"
}
```

## 引用目标

引用目标应该小而稳定。好的引用目标能支撑一条主张或一个答案，而不要求客户端读取整份文档。

推荐字段：

- `id`
- `sourceRef`
- `url`
- `heading`
- `excerpt`
- `targetKind`：`page`、`section`、`paragraph`、`table`、`figure`、`video-transcript`、`data-point`
- `authorityLevel`
- `freshness`
- `accessibility`
- `health`
- `lastChecked`

不要为隐藏文本、虚假来源、不可验证主张，或与可见页面实质不一致的内容创建引用目标。

## 机器可读表面

Answer-ready 知识包可以把机器可读表面记录为数据：

| 表面 | 用途 |
| --- | --- |
| `sitemap.xml` | URL 发现和更新时间提示。 |
| `robots.txt` | 爬虫访问策略。 |
| `llms.txt` | 面向 LLM 客户端的简洁 Markdown 导航。 |
| `llms-full.txt` | 供客户端选择加载的更长 Markdown 上下文。 |
| Markdown mirror | 重要页面或文档的文本优先副本。 |
| Structured data | 与可见内容一致的 JSON-LD 或同类 schema 记录。 |

这些表面可以帮助客户端发现和理解内容，但不保证排名或答案收录。

## 监测

监测记录是观察结果，不证明外部答案引擎会持续保持同一行为。

推荐字段：

- `promptSetId`
- `platform`
- `questionId`
- `answerPresence`：`absent`、`mentioned`、`cited`、`primary`、`incorrect`
- `citationTargetIds`
- `competitorEntities`
- `answerAccuracy`
- `observedAt`
- `notes`

监测运行用于发现：

- 答案漂移
- 过时事实
- 缺失引用
- 竞品占位
- 幻觉出来的产品或政策主张
- 断裂的引用目标
- 结构化数据不一致

## 运行时加载

处理答案任务时，客户端应该加载紧凑答案子图：

```text
question
-> intent and audience
-> answer block
-> claims
-> citation targets
-> constraints and risk notes
-> relevant source excerpts only when citation or verification is needed
```

resolver 不应该加载全部监测运行记录。除非用户要求审计细节，否则优先加载最新摘要。

## 边界

- Answer-ready 文件是数据，不是排名指令。
- `CitationTarget` 记录是引用候选，不证明外部系统已经引用。
- 监测观察不证明因果关系。
- 结构化数据必须与可见内容一致。
- 不要包含 prompt injection、爬虫欺骗、虚假权威、伪造引用、隐藏主张或黑帽 GEO 指令。
- 高风险主题的 answer blocks 必须有更强的评审和证据要求。
