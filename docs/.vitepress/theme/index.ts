import DefaultTheme from 'vitepress/theme'
import { h, onMounted, watch } from 'vue'
import type { Theme } from 'vitepress'
import { useRoute } from 'vitepress'
import MermaidDiagram from './MermaidDiagram.vue'
import './custom.css'

function normalizeMarkdownPath(path: string): string {
  const withoutHash = path.split('#')[0].split('?')[0]
  const base = import.meta.env.BASE_URL
  const withoutBase = base !== '/' && withoutHash.startsWith(base)
    ? `/${withoutHash.slice(base.length)}`
    : withoutHash
  const normalized = withoutBase.endsWith('/') ? `${withoutBase}index` : withoutBase
  const withoutLeadingSlash = normalized.replace(/^\/+/, '')
  return `${withoutLeadingSlash || 'index'}.md`
}

function isChinesePath(path: string): boolean {
  return normalizeMarkdownPath(path).startsWith('zh/')
}

async function copyCurrentMarkdown(path: string) {
  const markdownPath = normalizeMarkdownPath(path)
  const candidates = [
    `${import.meta.env.BASE_URL}markdown/${markdownPath}`.replace(/\/+/g, '/'),
    `https://raw.githubusercontent.com/limecloud/agentknowledge/main/docs/${markdownPath}`
  ]

  let markdown = ''
  for (const url of candidates) {
    try {
      const response = await fetch(url)
      if (response.ok) {
        markdown = await response.text()
        break
      }
    } catch {
      // Try the next source.
    }
  }

  if (!markdown) {
    throw new Error(`Unable to fetch ${markdownPath}`)
  }

  await writeClipboard(markdown)
}

async function writeClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', 'true')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    document.execCommand('copy')
  } finally {
    document.body.removeChild(textarea)
  }
}

function CopyMarkdownButton() {
  const route = useRoute()

  onMounted(() => {
    const update = () => {
      const existing = document.querySelector<HTMLButtonElement>('.ak-copy-md')
      if (existing) existing.dataset.path = route.path
    }
    update()
    watch(() => route.path, update)
  })

  return h('button', {
    class: 'ak-copy-md',
    type: 'button',
    'data-path': route.path,
    onClick: async (event: MouseEvent) => {
      const button = event.currentTarget as HTMLButtonElement
      const original = button.textContent || (isChinesePath(route.path) ? '复制 Markdown' : 'Copy Markdown')
      button.disabled = true
      try {
        await copyCurrentMarkdown(button.dataset.path || route.path)
        button.textContent = isChinesePath(button.dataset.path || route.path) ? '已复制 Markdown' : 'Copied Markdown'
      } catch {
        button.textContent = isChinesePath(button.dataset.path || route.path) ? '复制失败' : 'Copy failed'
      } finally {
        window.setTimeout(() => {
          button.textContent = original
          button.disabled = false
        }, 1400)
      }
    }
  }, isChinesePath(route.path) ? '复制 Markdown' : 'Copy Markdown')
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MermaidDiagram', MermaidDiagram)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(CopyMarkdownButton)
    })
  }
} satisfies Theme
