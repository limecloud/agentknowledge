---
title: v0.6.4 概览
description: Agent Knowledge v0.6.4 发布概览。
---

# Agent Knowledge v0.6.4

Agent Knowledge v0.6.4 修复 repository-base 部署下的首页资源链接。本地化首页继续保持 home layout，同时 LLM 入口链接会落在项目站点路径下，导航 logo 也从正确 public asset 路径加载。

## 重点

- 修复 `/en/` 与 `/zh/` 首页的 LLM 入口链接，使其在 GitHub Pages 项目路径下正确解析。
- 修复 repository-base 部署下的文档 logo 路径。
- 保留 v0.6.3 引入的本地化首页结构。
- 核心 Agent Knowledge 规范继续兼容 v0.6.3。
