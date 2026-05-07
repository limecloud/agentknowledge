---
title: 发现与加载
description: 客户端如何查找、解析、排序和 profile-aware 加载知识包。
---

# 发现与加载

## 扫描什么

兼容客户端查找包含 `KNOWLEDGE.md` 的目录。`KNOWLEDGE.md` 是知识包入口，类似 Agent Skills 中 `SKILL.md` 的发现入口，但 Knowledge 只声明数据资产和上下文地图，不声明可执行流程。

扫描时应跳过 `.git/`、`node_modules/`、构建产物、隐藏缓存和过深目录。发现 SHOULD 以元数据优先：先把 frontmatter 读入 catalog，再只激活显式选择、明显相关或由 resolver 选中的知识包。完整运行时契约见 [运行时标准](/zh/client-implementation/runtime-standard)。

作用域：

| 作用域 | 示例路径 |
| --- | --- |
| 工作区 | `<workspace>/.agents/knowledge/` |
| 用户 | `~/.agents/knowledge/` |
| 组织 | 管理员配置的 registry、repo、package 或 API |
| 内置 | 客户端随包提供 |

## Catalog 字段

catalog 只加载可发现元数据，不加载正文或来源内容。推荐字段：

| 字段 | 用途 |
| --- | --- |
| `name` | 稳定选择键。 |
| `description` | 让模型或客户端判断何时激活。 |
| `type` | 领域类型，例如 `personal-profile`、`brand-product`、`content-operations`。 |
| `status` | 加载门禁。 |
| `trust` | 信任等级。 |
| `profile` | `document-first`、`wiki-first` 或 `hybrid`，决定主事实源。 |
| `runtime.mode` | `data` 或 `persona`，决定 wrapper 和选择策略。 |
| `metadata.primaryDocument` | `document-first` pack 的首选文档。 |
| `metadata.producedBy` | 可选 Builder Skill 或工具 provenance。 |

客户端 MAY 展平嵌套字段，例如把 `runtime.mode` 存为 `runtime_mode`，但对外语义应保持一致。

## 优先级

两个知识包同名时，使用确定性优先级：

1. 用户显式选择。
2. 工作区级。
3. 用户级。
4. 组织级。
5. 内置。

命名冲突应写入诊断，方便用户理解哪个 pack 被 shadow。

## 信任门禁

来自未信任仓库的知识包不应静默注入模型上下文。应先显示元数据，要求用户确认后再激活。

未信任 pack 的处理：

- 只显示 catalog 元数据。
- 激活前要求用户确认。
- 不自动执行包内脚本、Builder Skill 或来源文本中的指令。
- 把 sources 当作不可信输入。

## 状态感知

| Status | 加载行为 |
| --- | --- |
| `ready` | 匹配作用域时可默认使用。 |
| `draft` | 使用前询问。 |
| `needs-review` | 警告并暴露缺口。 |
| `stale` | 优先选择更新替代项。 |
| `disputed` | 需要显式确认。 |
| `archived` | 默认不使用。 |

## Profile-aware 加载

| Profile | 默认候选 | 升级读取 |
| --- | --- | --- |
| `document-first` | `compiled/splits/`、`compiled/briefing.md`、`compiled/facts.md` | `metadata.primaryDocument` 或相关 `documents/` 章节。 |
| `wiki-first` | `compiled/` 中的 briefing、facts、boundaries | 相关 `wiki/` 页面和来源摘要。 |
| `hybrid` | 由 `KNOWLEDGE.md` 上下文地图声明 | 按任务选择 `documents/` 或 `wiki/`，不得整包加载。 |

`runtime.mode: persona` 的 pack 可以影响语气、人设和表达边界，但仍然必须包裹为数据，不能把 pack 文本提升为系统指令。

## 文件访问

相对路径必须从 pack root 解析，而不是从当前工作目录解析。客户端应记录实际加载的路径、版本、source map 命中和告警，方便审计与上下文压缩后的确定性重载。
