# Hermes Desktop Packs

![Hermes Desktop Packs cover](hermes-desktop-packs.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

101 full-palette themes for the **Hermes Desktop app**, built from the [bchop-studio hermes-skins-pack](https://github.com/bchop-studio/hermes-skins-pack).

A regular skin changes the CLI and TUI, and nudges the desktop with a basic color conversion. A **pack** maps the whole skin palette into Hermes Desktop, surface by surface: background, cards, sidebar, borders, text, accents, success, warning, error, and the integrated terminal. One click, the whole app becomes the skin.

## Install

1. Copy `desktop-plugin/hermes-desktop-packs/plugin.js` into your Hermes Desktop plugin folder.

   Windows: `%LOCALAPPDATA%\hermes\desktop-plugins\hermes-desktop-packs\plugin.js`
   macOS / Linux: `~/.hermes/desktop-plugins/hermes-desktop-packs/plugin.js`

2. In Hermes Desktop, press `Ctrl + K` (or `Cmd + K`) and run **Reload desktop plugins**.

3. Open **Packs** in the left sidebar and click a pack. The app applies it and reloads.

The packs also appear in **Appearance** as user themes, so the choice survives restarts.

## Scope

These packs change Hermes Desktop only. They never touch your operating system, wallpaper, cursor, icons, registry, or terminal settings.

## Source

Palettes are generated from the 101 skins in [bchop-studio/hermes-skins-pack](https://github.com/bchop-studio/hermes-skins-pack). Every pack keeps the skin's own background, text, accent, border, tool, success, warning, and error colors, plus its terminal palette.

Browse the full list with contrast ratios in [themes/](themes/).

## Repository Contents

- `desktop-plugin/hermes-desktop-packs/plugin.js`, the pack engine and Packs page
- `themes/README.md`, all 101 packs with mode and WCAG contrast
- `scripts/generate_packs.py`, the repeatable source-to-Desktop generator
- `tests/test_plugin.py`, the contract every pack must pass
- `VERSION`, current pack version
- `CONTRIBUTING.md`, how to add or fix a pack
- `LICENSE`, MIT

## Verify

```bash
python3 tests/test_plugin.py
python3 scripts/generate_packs.py --check
```

Checks every pack against its source skin, the compact grid, the scoped semantic layer, and confirms no OS-level controls exist.

## License

MIT. See `LICENSE`.

Made by [bchop-studio](https://github.com/bchop-studio)

Built for vibe coders who want their AI to feel less corporate.

If this helped, ⭐ the repo — it helps others find it.
