# Contributing

Want a new pack or a fix? Read this first.

## What a pack is

Every pack is generated from a skin in [bchop-studio/hermes-skins-pack](https://github.com/bchop-studio/hermes-skins-pack). This repo does not hand-write palettes. If a pack looks wrong, the fix belongs in the source skin, then the packs get regenerated.

## Add or change a pack

1. Open an issue or PR in the skins pack first. The palette lives there.
2. Once the skin is merged, regenerate the desktop packs from the updated skins.
3. Run the contract test: `python3 tests/test_plugin.py`. It must pass.
4. Open a PR here with the regenerated plugin.

## Rules

- One pack per skin. The source skin is the single source of truth.
- Every pack must pass the full contrast audit. The test enforces it.
- Packs change Hermes Desktop only. Nothing may touch the operating system, wallpaper, cursor, icons, registry, or terminal settings. The test blocks those strings.
- No placeholder themes. A pack that doesn't map the full source palette isn't a pack.

## Style

Match the existing generator's mapping. Background from `background`, text from `ui_text`, primary from `ui_accent`, tool and accent channels from `ui_tool`, success, warning, and error from their `ui_*` keys. If you're unsure, read `tests/test_plugin.py`, it is the contract.
