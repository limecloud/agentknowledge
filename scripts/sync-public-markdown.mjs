import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(root, '..')
const docsRoot = join(repoRoot, 'docs')
const publicRoot = join(docsRoot, 'public', 'markdown')
const ignoredTopLevel = new Set(['.vitepress', 'public'])

function copyMarkdownFiles(fromDir) {
  for (const entry of readdirSync(fromDir)) {
    const source = join(fromDir, entry)
    const stats = statSync(source)

    if (stats.isDirectory()) {
      if (fromDir === docsRoot && ignoredTopLevel.has(entry)) continue
      copyMarkdownFiles(source)
      continue
    }

    if (!entry.endsWith('.md')) continue

    const target = join(publicRoot, relative(docsRoot, source))
    mkdirSync(dirname(target), { recursive: true })
    cpSync(source, target)
  }
}

if (existsSync(publicRoot)) rmSync(publicRoot, { recursive: true, force: true })
mkdirSync(publicRoot, { recursive: true })
copyMarkdownFiles(docsRoot)
