#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const cliVersion = '0.4.0'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const schemas = {
  'compile-run': JSON.parse(readFileSync(join(root, 'docs/public/schemas/compile-run.schema.json'), 'utf8')),
  'source-map': JSON.parse(readFileSync(join(root, 'docs/public/schemas/source-map.schema.json'), 'utf8')),
  'selection-eval': JSON.parse(readFileSync(join(root, 'docs/public/schemas/selection-eval.schema.json'), 'utf8'))
}

function main() {
  const args = process.argv.slice(2)
  const command = args[0]

  if (!command || command === '--help' || command === '-h') {
    printHelp()
    return
  }

  if (command === '--version' || command === '-v') {
    console.log(cliVersion)
    return
  }

  try {
    switch (command) {
      case 'validate':
        writeJson(validatePack(requiredArg(args, 1, 'pack path')))
        return
      case 'read-properties':
        writeJson(readProperties(requiredArg(args, 1, 'pack path')))
        return
      case 'to-catalog':
        writeJson(toCatalog(requiredArg(args, 1, 'pack path')))
        return
      case 'resolve-context':
        writeJson(resolveContext(requiredArg(args, 1, 'pack path'), args.slice(2)))
        return
      case 'validate-run':
        writeJson(validateRun(requiredArg(args, 1, 'run path')))
        return
      case 'eval':
        writeJson(runEval(requiredArg(args, 1, 'pack path'), args.slice(2)))
        return
      default:
        fail(`Unknown command: ${command}`, 2)
    }
  } catch (error) {
    fail(error.message || String(error), 2)
  }
}

function printHelp() {
  console.log(`agentknowledge-ref ${cliVersion}

Usage:
  agentknowledge-ref validate <pack>
  agentknowledge-ref read-properties <pack>
  agentknowledge-ref to-catalog <pack>
  agentknowledge-ref resolve-context <pack> --query <text> [--dry-run]
  agentknowledge-ref validate-run <run.json>
  agentknowledge-ref eval <pack> --suite <eval.json>

Commands:
  validate          Validate pack shape and common traceability issues.
  read-properties   Read KNOWLEDGE.md frontmatter as JSON.
  to-catalog        Emit compact catalog metadata.
  resolve-context   Dry-run resolver file selection without model calls.
  validate-run      Validate run/eval/source-map JSON records.
  eval              Run discovery selection eval cases.

Output:
  JSON is written to stdout. Diagnostics are written to stderr.
`)
}

function validatePack(packPath) {
  const packRoot = resolve(packPath)
  const findings = []
  if (!existsSync(packRoot) || !statSync(packRoot).isDirectory()) {
    findings.push(errorFinding('.', 'Pack path is not a directory.'))
    return envelope(false, 'failed', 'validate', basename(packRoot), findings)
  }

  const knowledgePath = join(packRoot, 'KNOWLEDGE.md')
  if (!existsSync(knowledgePath)) {
    findings.push(errorFinding('KNOWLEDGE.md', 'Missing required KNOWLEDGE.md.'))
    return envelope(false, 'failed', 'validate', basename(packRoot), findings)
  }

  const properties = readKnowledgeProperties(knowledgePath)
  for (const field of ['name', 'description', 'type', 'status']) {
    if (!properties[field]) findings.push(errorFinding('KNOWLEDGE.md', `Missing required frontmatter field: ${field}.`))
  }

  if (properties.name && properties.name !== basename(packRoot)) {
    findings.push(warningFinding('KNOWLEDGE.md', `name does not match parent directory: ${properties.name} != ${basename(packRoot)}.`))
  }

  validateKnownJson(packRoot, findings)
  validateSourceAnchors(packRoot, findings)

  const ok = findings.every((finding) => finding.severity !== 'error')
  return envelope(ok, ok ? 'passed' : 'needs-review', 'validate', properties.name || basename(packRoot), findings)
}

function readProperties(packPath) {
  const knowledgePath = join(resolve(packPath), 'KNOWLEDGE.md')
  if (!existsSync(knowledgePath)) throw new Error('Missing KNOWLEDGE.md')
  return readKnowledgeProperties(knowledgePath)
}

function toCatalog(packPath) {
  const properties = readProperties(packPath)
  const allowed = ['name', 'description', 'type', 'status', 'version', 'language', 'trust', 'grounding', 'scope']
  return Object.fromEntries(allowed.filter((key) => properties[key] !== undefined).map((key) => [key, properties[key]]))
}

function resolveContext(packPath, args) {
  const packRoot = resolve(packPath)
  const query = optionValue(args, '--query') || ''
  const properties = readProperties(packRoot)
  const selectedFiles = []
  const warnings = []

  for (const file of ['compiled/briefing.md', 'compiled/facts.md', 'compiled/boundaries.md', 'wiki/index.md']) {
    if (existsSync(join(packRoot, file))) selectedFiles.push(file)
  }

  const lowerQuery = query.toLowerCase()
  if ((lowerQuery.includes('source') || lowerQuery.includes('citation') || lowerQuery.includes('引用') || lowerQuery.includes('来源')) && existsSync(join(packRoot, 'sources'))) {
    warnings.push(warningFinding('sources/', 'Query appears to need evidence; resolver should load source anchors on demand.'))
  }

  if (properties.status && properties.status !== 'ready') {
    warnings.push(warningFinding('KNOWLEDGE.md', `Pack status is ${properties.status}.`))
  }

  return {
    ok: true,
    command: 'resolve-context',
    pack: properties.name || basename(packRoot),
    dry_run: true,
    query,
    selected_files: selectedFiles,
    warnings,
    token_estimate: estimateTokens(packRoot, selectedFiles)
  }
}

function validateRun(runPath) {
  const absolute = resolve(runPath)
  if (!existsSync(absolute)) throw new Error(`Run file does not exist: ${runPath}`)
  const data = JSON.parse(readFileSync(absolute, 'utf8'))
  const schemaName = inferSchemaName(absolute, data)
  const findings = validateAgainstSchema(data, schemas[schemaName], relative(process.cwd(), absolute))
  const ok = findings.every((finding) => finding.severity !== 'error')
  return envelope(ok, ok ? 'passed' : 'needs-review', 'validate-run', basename(absolute), findings, { schema: schemaName })
}

function runEval(packPath, args) {
  const packRoot = resolve(packPath)
  const suite = optionValue(args, '--suite')
  if (!suite) throw new Error('Missing --suite <eval.json>')
  const suitePath = resolve(packRoot, suite)
  const evalData = JSON.parse(readFileSync(suitePath, 'utf8'))
  const findings = validateAgainstSchema(evalData, schemas['selection-eval'], suite)
  if (findings.some((finding) => finding.severity === 'error')) {
    return envelope(false, 'failed', 'eval', evalData.pack_name || basename(packRoot), findings)
  }

  const catalog = toCatalog(packRoot)
  const results = evalData.cases.map((testCase) => {
    const actual = selectByText(catalog, testCase.prompt) ? 'select' : 'reject'
    return {
      id: testCase.id,
      expected: testCase.expected,
      actual,
      passed: testCase.expected === actual
    }
  })
  const passed = results.filter((result) => result.passed).length
  const failed = results.length - passed
  return {
    ok: failed === 0,
    status: failed === 0 ? 'passed' : 'needs-review',
    command: 'eval',
    pack: evalData.pack_name,
    suite,
    results,
    summary: {
      passed,
      failed,
      total: results.length,
      pass_rate: results.length ? passed / results.length : 0
    }
  }
}

function selectByText(catalog, prompt) {
  const haystack = `${catalog.name || ''} ${catalog.description || ''} ${catalog.type || ''}`.toLowerCase()
  const tokens = prompt.toLowerCase().split(/[^a-z0-9\u4e00-\u9fff]+/u).filter((token) => token.length >= 3)
  return tokens.some((token) => haystack.includes(token))
}

function validateKnownJson(packRoot, findings) {
  const candidates = [
    ['indexes/source-map.json', 'source-map'],
    ['evals/discovery.train.json', 'selection-eval'],
    ['evals/discovery.validation.json', 'selection-eval']
  ]
  for (const [relativePath, schemaName] of candidates) {
    const absolute = join(packRoot, relativePath)
    if (!existsSync(absolute)) continue
    try {
      const data = JSON.parse(readFileSync(absolute, 'utf8'))
      findings.push(...validateAgainstSchema(data, schemas[schemaName], relativePath))
    } catch (error) {
      findings.push(errorFinding(relativePath, `Invalid JSON: ${error.message}`))
    }
  }

  const runsRoot = join(packRoot, 'runs')
  if (!existsSync(runsRoot)) return
  for (const file of walkFiles(runsRoot)) {
    if (!file.endsWith('.json')) continue
    try {
      const data = JSON.parse(readFileSync(file, 'utf8'))
      const schemaName = inferSchemaName(file, data)
      findings.push(...validateAgainstSchema(data, schemas[schemaName], relative(packRoot, file)))
    } catch (error) {
      findings.push(errorFinding(relative(packRoot, file), `Invalid JSON: ${error.message}`))
    }
  }
}

function validateSourceAnchors(packRoot, findings) {
  const sourceMapPath = join(packRoot, 'indexes/source-map.json')
  if (!existsSync(sourceMapPath)) return
  try {
    const sourceMap = JSON.parse(readFileSync(sourceMapPath, 'utf8'))
    for (const claim of sourceMap.claims || []) {
      const sourcePath = claim.source?.path
      if (sourcePath && !existsSync(join(packRoot, sourcePath))) {
        findings.push(errorFinding('indexes/source-map.json', `Claim ${claim.claim_id} points to missing source: ${sourcePath}.`))
      }
    }
  } catch {
    // JSON validity is reported elsewhere.
  }
}

function validateAgainstSchema(data, schema, path) {
  const findings = []
  for (const field of schema.required || []) {
    if (data[field] === undefined) findings.push(errorFinding(path, `Missing required field: ${field}.`))
  }
  for (const [key, value] of Object.entries(data)) {
    const propertySchema = schema.properties?.[key]
    if (!propertySchema) {
      if (schema.additionalProperties === false) findings.push(warningFinding(path, `Unexpected field: ${key}.`))
      continue
    }
    findings.push(...validateValue(value, propertySchema, `${path}#${key}`))
  }
  return findings
}

function validateValue(value, schema, path) {
  const findings = []
  if (schema.type && !matchesType(value, schema.type)) findings.push(errorFinding(path, `Expected ${schema.type}.`))
  if (schema.enum && !schema.enum.includes(value)) findings.push(errorFinding(path, `Expected one of: ${schema.enum.join(', ')}.`))
  if (schema.minLength && typeof value === 'string' && value.length < schema.minLength) findings.push(errorFinding(path, `Expected at least ${schema.minLength} characters.`))
  if (schema.minItems && Array.isArray(value) && value.length < schema.minItems) findings.push(errorFinding(path, `Expected at least ${schema.minItems} items.`))
  if (schema.type === 'array' && Array.isArray(value) && schema.items) {
    value.forEach((item, index) => findings.push(...validateAgainstSchema(item, schema.items, `${path}/${index}`)))
  }
  if (schema.type === 'object' && isPlainObject(value)) {
    for (const field of schema.required || []) {
      if (value[field] === undefined) findings.push(errorFinding(path, `Missing required field: ${field}.`))
    }
    for (const [key, child] of Object.entries(value)) {
      const childSchema = schema.properties?.[key]
      if (!childSchema) {
        if (schema.additionalProperties === false) findings.push(warningFinding(path, `Unexpected field: ${key}.`))
        continue
      }
      findings.push(...validateValue(child, childSchema, `${path}#${key}`))
    }
  }
  return findings
}

function matchesType(value, type) {
  if (type === 'array') return Array.isArray(value)
  if (type === 'object') return isPlainObject(value)
  return typeof value === type
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function inferSchemaName(file, data) {
  const name = basename(file)
  if (name.includes('source-map') || data.claims) return 'source-map'
  if (name.includes('discovery') || data.cases) return 'selection-eval'
  return 'compile-run'
}

function readKnowledgeProperties(knowledgePath) {
  const content = readFileSync(knowledgePath, 'utf8')
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const properties = {}
  for (const line of match[1].split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const index = trimmed.indexOf(':')
    if (index === -1) continue
    const key = trimmed.slice(0, index).trim()
    let value = trimmed.slice(index + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1)
    properties[key] = value
  }
  return properties
}

function walkFiles(directory) {
  const files = []
  for (const entry of readdirSync(directory)) {
    const absolute = join(directory, entry)
    if (statSync(absolute).isDirectory()) files.push(...walkFiles(absolute))
    else files.push(absolute)
  }
  return files
}

function estimateTokens(packRoot, selectedFiles) {
  let chars = 0
  for (const file of selectedFiles) {
    const absolute = join(packRoot, file)
    if (existsSync(absolute)) chars += readFileSync(absolute, 'utf8').length
  }
  return Math.ceil(chars / 4)
}

function requiredArg(args, index, label) {
  if (!args[index]) throw new Error(`Missing ${label}`)
  return args[index]
}

function optionValue(args, option) {
  const index = args.indexOf(option)
  if (index === -1) return undefined
  return args[index + 1]
}

function envelope(ok, status, command, pack, findings = [], extra = {}) {
  return { ok, status, command, pack, findings, ...extra }
}

function errorFinding(path, message) {
  return { severity: 'error', path, message }
}

function warningFinding(path, message) {
  return { severity: 'warning', path, message }
}

function writeJson(value) {
  console.log(JSON.stringify(value, null, 2))
  if (value?.ok === false) process.exitCode = 1
}

function fail(message, code) {
  console.error(message)
  process.exit(code)
}

main()
