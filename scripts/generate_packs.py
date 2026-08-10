#!/usr/bin/env python3
"""Generate Hermes Desktop packs from the sibling hermes-skins-pack repo."""

from __future__ import annotations

import argparse
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SKINS = ROOT.parent / "hermes-skins-pack" / "skins"
PLUGIN = ROOT / "desktop-plugin" / "hermes-desktop-packs" / "plugin.js"
THEMES_INDEX = ROOT / "themes" / "README.md"

COLOR_RE = re.compile(r'^\s*([a-z_]+):\s*["\']?(#[0-9a-fA-F]{6})', re.MULTILINE)



def rgb(color: str) -> tuple[int, int, int]:
    value = color.lstrip("#")
    return tuple(int(value[index:index + 2], 16) for index in (0, 2, 4))  # type: ignore[return-value]


def hex_color(values: tuple[float, float, float]) -> str:
    return "#" + "".join(f"{max(0, min(255, round(value))):02x}" for value in values)


def mix(first: str, second: str, amount: float) -> str:
    first_rgb = rgb(first)
    second_rgb = rgb(second)
    blended = (
        first_rgb[0] * (1 - amount) + second_rgb[0] * amount,
        first_rgb[1] * (1 - amount) + second_rgb[1] * amount,
        first_rgb[2] * (1 - amount) + second_rgb[2] * amount,
    )
    return hex_color(blended)


def channel(value: int) -> float:
    normalized = value / 255
    return normalized / 12.92 if normalized <= 0.04045 else ((normalized + 0.055) / 1.055) ** 2.4


def luminance(color: str) -> float:
    red, green, blue = rgb(color)
    return 0.2126 * channel(red) + 0.7152 * channel(green) + 0.0722 * channel(blue)


def contrast(first: str, second: str) -> float:
    high, low = sorted((luminance(first), luminance(second)), reverse=True)
    return (high + 0.05) / (low + 0.05)


def readable(foreground: str, background: str, floor: float = 4.5) -> str:
    if contrast(foreground, background) >= floor:
        return foreground
    target = max(("#000000", "#ffffff"), key=lambda candidate: contrast(candidate, background))
    for step in range(1, 101):
        candidate = mix(foreground, target, step / 100)
        if contrast(candidate, background) >= floor:
            return candidate
    return target


def title(name: str) -> str:
    return " ".join(part.upper() if part == "ai" else part.capitalize() for part in name.split("-"))


def load_skins(skins_dir: Path) -> list[tuple[str, dict[str, str]]]:
    skins = []
    for path in sorted(skins_dir.glob("*.yaml")):
        colors = {key: value.lower() for key, value in COLOR_RE.findall(path.read_text(encoding="utf-8"))}
        skins.append((path.stem, colors))
    if not skins:
        raise SystemExit(f"No skins found in {skins_dir}")
    return skins


def pack_block(name: str, colors: dict[str, str]) -> str:
    background = colors["background"]
    foreground = colors["ui_text"]
    primary = colors["ui_accent"]
    tool = colors["ui_tool"]
    border = colors["ui_border"]
    status = colors.get("status_bar_bg", background)
    selection = colors.get("selection_bg", colors.get("completion_menu_current_bg", colors["ui_thinking"]))
    card = colors.get("completion_menu_bg", background)
    popover = colors.get("completion_menu_current_bg", card)
    muted = mix(background, foreground, 0.10 if luminance(background) < 0.5 else 0.06)
    muted_foreground = readable(colors.get("banner_dim", foreground), muted)
    destructive = colors["ui_error"]
    ok = colors["ui_ok"]
    warn = colors["ui_warn"]

    return f"""  {{
    name: 'pack-{name}', label: '{title(name)} Pack', description: 'Full desktop pack from the {name} Hermes skin.',
    colors: {{
      background: '{background}', foreground: '{foreground}', card: '{card}', cardForeground: '{readable(foreground, card)}',
      muted: '{muted}', mutedForeground: '{muted_foreground}', popover: '{popover}', popoverForeground: '{readable(foreground, popover)}',
      primary: '{primary}', primaryForeground: '{readable(background, primary)}', secondary: '{selection}', secondaryForeground: '{readable(foreground, selection)}',
      accent: '{tool}', accentForeground: '{readable(background, tool)}', border: '{border}', input: '{card}', ring: '{tool}',
      midground: '{primary}', midgroundForeground: '{readable(background, primary)}', composerRing: '{tool}',
      destructive: '{destructive}', destructiveForeground: '{readable(background, destructive)}',
      sidebarBackground: '{status}', sidebarBorder: '{border}', userBubble: '{selection}', userBubbleBorder: '{tool}'
    }},
    darkColors: null,
    terminal: {{
      foreground: '{foreground}', cursor: '{tool}', selectionBackground: '{selection}', black: '{background}',
      red: '{colors['ui_error']}', green: '{colors['ui_ok']}', yellow: '{colors['ui_warn']}', blue: '{colors['ui_tool']}', magenta: '{colors['ui_accent']}', cyan: '{colors.get('banner_title', colors['ui_tool'])}', white: '{colors['ui_text']}',
      brightBlack: '{colors.get('banner_dim', border)}', brightRed: '{colors.get('diff_removed_word', colors['ui_error'])}', brightGreen: '{colors.get('diff_added_word', colors['ui_ok'])}', brightYellow: '{colors['ui_warn']}',
      brightBlue: '{colors['ui_tool']}', brightMagenta: '{colors.get('banner_accent', colors['ui_accent'])}', brightCyan: '{colors.get('banner_title', colors['ui_tool'])}', brightWhite: '{colors['ui_text']}'
    }},
    semantic: {{ ok: '{ok}', warn: '{warn}', error: '{destructive}', tool: '{tool}' }}
  }},"""


def generated_plugin(current: str, skins: list[tuple[str, dict[str, str]]]) -> str:
    start_marker = "const fullThemes = [\n"
    end_marker = "]\n\nfor (const theme of fullThemes)"
    start = current.index(start_marker) + len(start_marker)
    end = current.index(end_marker, start)
    blocks = "\n".join(pack_block(name, colors) for name, colors in skins) + "\n"
    return current[:start] + blocks + current[end:]


def generated_index(skins: list[tuple[str, dict[str, str]]]) -> str:
    light_count = sum(luminance(colors["background"]) > 0.5 for _, colors in skins)
    dark_count = len(skins) - light_count
    lines = [
        "# Themes",
        "",
        f"{len(skins)} packs generated from the source skins, {light_count} light and {dark_count} dark. Contrast is foreground on background, measured WCAG.",
        "",
        "| Pack | Source skin | Mode | Contrast |",
        "|---|---|---|---|",
    ]
    for name, colors in skins:
        background = colors["background"]
        foreground = readable(colors["ui_text"], background)
        mode = "☀ light" if luminance(background) > 0.5 else "☾ dark"
        lines.append(f"| {title(name)} | `{name}` | {mode} | {contrast(foreground, background):.1f}:1 |")
    return "\n".join(lines) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--skins", type=Path, default=DEFAULT_SKINS)
    parser.add_argument("--check", action="store_true", help="fail when generated files are stale")
    args = parser.parse_args()

    skins = load_skins(args.skins)
    current_plugin = PLUGIN.read_text(encoding="utf-8")
    next_plugin = generated_plugin(current_plugin, skins)
    next_index = generated_index(skins)

    if args.check:
        stale = []
        if current_plugin != next_plugin:
            stale.append(str(PLUGIN.relative_to(ROOT)))
        if THEMES_INDEX.read_text(encoding="utf-8") != next_index:
            stale.append(str(THEMES_INDEX.relative_to(ROOT)))
        if stale:
            raise SystemExit("Generated files are stale: " + ", ".join(stale))
        print(f"generated pack check passed: {len(skins)} packs")
        return

    PLUGIN.write_text(next_plugin, encoding="utf-8")
    THEMES_INDEX.write_text(next_index, encoding="utf-8")
    print(f"generated {len(skins)} desktop packs")


if __name__ == "__main__":
    main()
