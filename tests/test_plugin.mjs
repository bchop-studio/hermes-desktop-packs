import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const plugin = await readFile(new URL('../desktop-plugin/hermes-desktop-packs/plugin.js', import.meta.url), 'utf8')

assert.match(plugin, /id:\s*'hermes-desktop-packs'/)
assert.match(plugin, /label:\s*'Packs'/)
assert.match(plugin, /name:\s*'dark-aubergine'/)
assert.match(plugin, /THEMES_AREA/)
assert.doesNotMatch(plugin, /powershell|HKCU|SystemParametersInfo|WindowsTerminal/i)

console.log('plugin contract passed')
