import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

const enNav = [
  { text: 'Guide', link: '/en/what-is-agent-knowledge' },
  { text: 'Specification', link: '/en/specification' },
  { text: 'Examples', link: '/en/examples/personal-ip' },
  {
    text: 'Version',
    items: [
      { text: 'latest', link: '/en/specification' },
      { text: 'v0.4.0 overview', link: '/en/versions/v0.4.0/overview' },
      { text: 'v0.4.0', link: '/en/versions/v0.4.0/specification' },
      { text: 'v0.3.0 overview', link: '/en/versions/v0.3.0/overview' },
      { text: 'v0.3.0', link: '/en/versions/v0.3.0/specification' },
      { text: 'v0.2.0 overview', link: '/en/versions/v0.2.0/overview' },
      { text: 'v0.2.0', link: '/en/versions/v0.2.0/specification' },
      { text: 'v0.1', link: '/en/versions/v0.1/specification' }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/limecloud/agentknowledge' }
]

const zhNav = [
  { text: '指南', link: '/zh/what-is-agent-knowledge' },
  { text: '规范', link: '/zh/specification' },
  { text: '示例', link: '/zh/examples/personal-ip' },
  {
    text: '版本',
    items: [
      { text: 'latest', link: '/zh/specification' },
      { text: 'v0.4.0 概览', link: '/zh/versions/v0.4.0/overview' },
      { text: 'v0.4.0', link: '/zh/versions/v0.4.0/specification' },
      { text: 'v0.3.0 概览', link: '/zh/versions/v0.3.0/overview' },
      { text: 'v0.3.0', link: '/zh/versions/v0.3.0/specification' },
      { text: 'v0.2.0 概览', link: '/zh/versions/v0.2.0/overview' },
      { text: 'v0.2.0', link: '/zh/versions/v0.2.0/specification' },
      { text: 'v0.1', link: '/zh/versions/v0.1/specification' }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/limecloud/agentknowledge' }
]

const enSidebar = [
  {
    text: 'Start here',
    items: [
      { text: 'Overview', link: '/en/' },
      { text: 'What is Agent Knowledge?', link: '/en/what-is-agent-knowledge' },
      { text: 'Knowledge vs Skills', link: '/en/agent-knowledge-vs-skills' },
      { text: 'Specification', link: '/en/specification' }
    ]
  },
  {
    text: 'For pack authors',
    items: [
      { text: 'Quickstart', link: '/en/authoring/quickstart' },
      { text: 'Description and discovery', link: '/en/authoring/description-and-discovery' },
      { text: 'Best practices', link: '/en/authoring/best-practices' },
      { text: 'Knowledge engineering loop', link: '/en/authoring/knowledge-engineering-loop' },
      { text: 'Compilation model', link: '/en/authoring/compilation-model' },
      { text: 'Grounding and citations', link: '/en/authoring/grounding-and-citations' },
      { text: 'Linting and review', link: '/en/authoring/linting-and-review' },
      { text: 'Maintenance automation', link: '/en/authoring/maintenance-automation' },
      { text: 'Skills interop', link: '/en/authoring/skills-interop' },
      { text: 'Maintenance script contract', link: '/en/authoring/maintenance-script-contract' },
      { text: 'Discovery evals', link: '/en/authoring/discovery-evals' },
      { text: 'Evaluating knowledge', link: '/en/authoring/evaluating-knowledge' }
    ]
  },
  {
    text: 'For client implementors',
    items: [
      { text: 'Adding support', link: '/en/client-implementation/adding-support' },
      { text: 'Discovery and loading', link: '/en/client-implementation/discovery-and-loading' },
      { text: 'Runtime context resolver', link: '/en/client-implementation/runtime-context-resolver' },
      { text: 'Security model', link: '/en/client-implementation/security-model' }
    ]
  },
  {
    text: 'Reference',
    items: [
      { text: 'LLM Wiki pattern', link: '/en/reference/llm-wiki-pattern' },
      { text: 'RAG comparison', link: '/en/reference/rag-comparison' },
      { text: 'Reference CLI', link: '/en/reference/reference-cli' },
      { text: 'Glossary', link: '/en/reference/glossary' }
    ]
  },
  {
    text: 'Examples',
    items: [
      { text: 'Personal IP pack', link: '/en/examples/personal-ip' },
      { text: 'Brand product pack', link: '/en/examples/brand-product' },
      { text: 'Organization know-how pack', link: '/en/examples/organization-knowhow' },
      { text: 'Complete pack', link: '/en/examples/complete-pack' }
    ]
  },
  {
    text: 'Versions',
    items: [
      { text: 'v0.4.0 overview', link: '/en/versions/v0.4.0/overview' },
      { text: 'v0.4.0 specification', link: '/en/versions/v0.4.0/specification' },
      { text: 'v0.4.0 changelog', link: '/en/versions/v0.4.0/changelog' },
      { text: 'v0.3.0 overview', link: '/en/versions/v0.3.0/overview' },
      { text: 'v0.3.0 specification', link: '/en/versions/v0.3.0/specification' },
      { text: 'v0.3.0 changelog', link: '/en/versions/v0.3.0/changelog' },
      { text: 'v0.2.0 overview', link: '/en/versions/v0.2.0/overview' },
      { text: 'v0.1 specification', link: '/en/versions/v0.1/specification' },
      { text: 'v0.1 changelog', link: '/en/versions/v0.1/changelog' },
      { text: 'v0.2.0 specification', link: '/en/versions/v0.2.0/specification' },
      { text: 'v0.2.0 changelog', link: '/en/versions/v0.2.0/changelog' }
    ]
  }
]

const zhSidebar = [
  {
    text: '开始',
    items: [
      { text: '概览', link: '/zh/' },
      { text: '什么是 Agent Knowledge', link: '/zh/what-is-agent-knowledge' },
      { text: '知识与 Skills 的边界', link: '/zh/agent-knowledge-vs-skills' },
      { text: '规范', link: '/zh/specification' }
    ]
  },
  {
    text: '知识包作者',
    items: [
      { text: '快速开始', link: '/zh/authoring/quickstart' },
      { text: '描述与发现', link: '/zh/authoring/description-and-discovery' },
      { text: '最佳实践', link: '/zh/authoring/best-practices' },
      { text: '知识库工程闭环', link: '/zh/authoring/knowledge-engineering-loop' },
      { text: '编译模型', link: '/zh/authoring/compilation-model' },
      { text: '溯源与引用', link: '/zh/authoring/grounding-and-citations' },
      { text: 'Lint 与评审', link: '/zh/authoring/linting-and-review' },
      { text: '维护自动化', link: '/zh/authoring/maintenance-automation' },
      { text: 'Skills 互操作', link: '/zh/authoring/skills-interop' },
      { text: '维护脚本契约', link: '/zh/authoring/maintenance-script-contract' },
      { text: '发现评估', link: '/zh/authoring/discovery-evals' },
      { text: '评估知识包', link: '/zh/authoring/evaluating-knowledge' }
    ]
  },
  {
    text: '客户端实现者',
    items: [
      { text: '接入支持', link: '/zh/client-implementation/adding-support' },
      { text: '发现与加载', link: '/zh/client-implementation/discovery-and-loading' },
      { text: '运行时上下文解析器', link: '/zh/client-implementation/runtime-context-resolver' },
      { text: '安全模型', link: '/zh/client-implementation/security-model' }
    ]
  },
  {
    text: '参考',
    items: [
      { text: 'LLM Wiki 模式', link: '/zh/reference/llm-wiki-pattern' },
      { text: 'RAG 对比', link: '/zh/reference/rag-comparison' },
      { text: '参考 CLI', link: '/zh/reference/reference-cli' },
      { text: '术语表', link: '/zh/reference/glossary' }
    ]
  },
  {
    text: '示例',
    items: [
      { text: '个人 IP 知识包', link: '/zh/examples/personal-ip' },
      { text: '品牌产品知识包', link: '/zh/examples/brand-product' },
      { text: '组织 Know-how 知识包', link: '/zh/examples/organization-knowhow' },
      { text: '完整知识包', link: '/zh/examples/complete-pack' }
    ]
  },
  {
    text: '版本',
    items: [
      { text: 'v0.4.0 概览', link: '/zh/versions/v0.4.0/overview' },
      { text: 'v0.4.0 规范', link: '/zh/versions/v0.4.0/specification' },
      { text: 'v0.4.0 变更记录', link: '/zh/versions/v0.4.0/changelog' },
      { text: 'v0.3.0 概览', link: '/zh/versions/v0.3.0/overview' },
      { text: 'v0.3.0 规范', link: '/zh/versions/v0.3.0/specification' },
      { text: 'v0.3.0 变更记录', link: '/zh/versions/v0.3.0/changelog' },
      { text: 'v0.2.0 概览', link: '/zh/versions/v0.2.0/overview' },
      { text: 'v0.1 规范', link: '/zh/versions/v0.1/specification' },
      { text: 'v0.1 变更记录', link: '/zh/versions/v0.1/changelog' },
      { text: 'v0.2.0 规范', link: '/zh/versions/v0.2.0/specification' },
      { text: 'v0.2.0 变更记录', link: '/zh/versions/v0.2.0/changelog' }
    ]
  }
]

export default defineConfig({
  base,
  title: 'Agent Knowledge',
  description: 'A portable standard for agent-readable knowledge packs.',
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#1d4d3a' }]
  ],
  locales: {
    root: {
      label: 'Start',
      lang: 'en-US',
      title: 'Agent Knowledge',
      description: 'A portable standard for agent-readable knowledge packs.',
      themeConfig: {
        nav: [
          { text: 'English', link: '/en/' },
          { text: '简体中文', link: '/zh/' }
        ],
        sidebar: [],
        editLink: {
          pattern: 'https://github.com/limecloud/agentknowledge/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Agent Knowledge',
      description: 'A portable standard for agent-readable knowledge packs.',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        editLink: {
          pattern: 'https://github.com/limecloud/agentknowledge/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Agent Knowledge',
      description: '面向 Agent 的可移植知识包标准。',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        editLink: {
          pattern: 'https://github.com/limecloud/agentknowledge/edit/main/docs/:path',
          text: '在 GitHub 编辑本页'
        }
      }
    }
  },
  themeConfig: {
    logo: `${base}favicon.svg`,
    siteTitle: 'Agent Knowledge',
    search: { provider: 'local' },
    footer: {
      message: 'Draft open standard. Inspired by Agent Skills, LLM Wiki, source-grounded notebooks, and production RAG systems.',
      copyright: 'Released for discussion and implementation.'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/limecloud/agentknowledge' }
    ]
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      const defaultFence = md.renderer.rules.fence
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const language = token.info.trim().split(/\s+/)[0]

        if (language === 'mermaid') {
          const encoded = encodeURIComponent(token.content)
          return `<ClientOnly><MermaidDiagram code="${encoded}" /></ClientOnly>`
        }

        return defaultFence
          ? defaultFence(tokens, idx, options, env, self)
          : self.renderToken(tokens, idx, options)
      }
    }
  }
})
