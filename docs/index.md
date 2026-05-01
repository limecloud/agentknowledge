---
layout: home

hero:
  name: Agent Knowledge
  text: A portable standard for agent-readable knowledge packs.
  tagline: "English is the default language. Choose a language to continue."
  actions:
    - theme: brand
      text: Continue in English
      link: /en/
    - theme: alt
      text: 简体中文
      link: /zh/

features:
  - title: English default
    details: "The canonical draft is maintained under /en/."
  - title: 多语言
    details: "中文文档维护在 /zh/，与英文版本保持结构对齐。"
  - title: Versioned
    details: "Stable snapshots live under /en/versions/ and /zh/versions/."
---

<script setup>
if (typeof window !== 'undefined') {
  const base = import.meta.env.BASE_URL || '/'
  const lang = window.navigator.language || ''
  const target = lang.toLowerCase().startsWith('zh') ? 'zh/' : 'en/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  if (window.location.pathname === normalizedBase || window.location.pathname === '/') {
    window.setTimeout(() => {
      window.location.href = `${normalizedBase}${target}`
    }, 80)
  }
}
</script>
