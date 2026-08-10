from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
PLUGIN = ROOT / "desktop-plugin" / "hermes-desktop-packs" / "plugin.js"
SKINS = ROOT.parent / "hermes-skins-pack" / "skins"


def source_color_map(name: str) -> dict[str, str]:
    text = (SKINS / f"{name}.yaml").read_text(encoding="utf-8")
    return {
        key: value.lower()
        for key, value in re.findall(r'^\s*([a-z_]+):\s*["\']?(#[0-9a-fA-F]{6})', text, re.MULTILINE)
    }


def relative_luminance(color: str) -> float:
    channels = [int(color[index:index + 2], 16) / 255 for index in (1, 3, 5)]
    linear = [value / 12.92 if value <= 0.04045 else ((value + 0.055) / 1.055) ** 2.4 for value in channels]
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2]


def contrast(first: str, second: str) -> float:
    high, low = sorted((relative_luminance(first), relative_luminance(second)), reverse=True)
    return (high + 0.05) / (low + 0.05)


def desktop_color_map(block: str) -> dict[str, str]:
    desktop = block.split("darkcolors: null", 1)[0]
    return dict(re.findall(r"([a-zA-Z]+): '(#[0-9a-f]{6})'", desktop))


def test_plugin_registers_full_desktop_packs_from_every_bchop_skin():
    plugin = PLUGIN.read_text(encoding="utf-8").lower()
    skin_names = sorted(path.stem for path in SKINS.glob("*.yaml"))

    assert len(skin_names) == 100
    assert "const fullthemes" in plugin
    assert plugin.count("darkcolors: null") == 100
    assert plugin.count("terminal: {") == 100
    assert plugin.count("semantic: {") == 100
    assert "theme.darkcolors = theme.colors" in plugin
    assert "theme.colors.midground =" not in plugin

    # Packs register as USER themes (boot-resolvable), not contributed THEMES_AREA.
    assert "'hermes-desktop-user-themes-v1'" in plugin
    assert "'hermes-desktop-theme-v2'" in plugin
    assert "installpackthemes()" in plugin
    assert "area: themes_area" not in plugin

    # Semantic layer is scoped to active packs and cleans up after itself.
    assert "mutationobserver" in plugin
    assert "hermespacksowned" in plugin
    for token in ("--ui-cyan", "--ui-blue", "--ui-green", "--ui-yellow", "--ui-red", "--ui-selection-background"):
        assert token in plugin, token

    # One-click picker on the Packs page.
    assert "localstorage.setitem(active_theme_key, pack.theme)" in plugin
    assert "window.location.reload()" in plugin
    assert "pack-${activename}" in plugin
    assert "gridtemplatecolumns: 'repeat(auto-fill, minmax(150px, 1fr))'" in plugin

    # Every source skin contributes its full palette to its own pack block.
    pack_blocks = {
        name: block
        for name, block in re.findall(
            r"name: 'pack-([^']+)'(.*?)(?=\n  \},\n  \{|\n  \},\n\])",
            plugin,
            re.DOTALL,
        )
    }
    assert sorted(pack_blocks) == skin_names
    for name in skin_names:
        source = source_color_map(name)
        block = pack_blocks[name]
        for key in ("background", "ui_accent", "ui_text", "ui_tool", "ui_error", "ui_ok", "ui_warn"):
            assert source[key] in block, f"{name} is missing {key}: {source[key]}"

        desktop = desktop_color_map(block)
        exact_roles = {
            "background": "background",
            "foreground": "ui_text",
            "primary": "ui_accent",
            "accent": "ui_tool",
            "border": "ui_border",
            "ring": "ui_tool",
            "midground": "ui_accent",
            "composerring": "ui_tool",
            "destructive": "ui_error",
            "sidebarborder": "ui_border",
            "userbubbleborder": "ui_tool",
        }
        for role, source_key in exact_roles.items():
            assert desktop[role] == source[source_key], (
                f"{name} {role} substitutes {desktop[role]} for source {source_key} {source[source_key]}"
            )

        semantic_match = re.search(
            r"semantic: \{ ok: '(#[0-9a-f]{6})', warn: '(#[0-9a-f]{6})', error: '(#[0-9a-f]{6})', tool: '(#[0-9a-f]{6})' \}",
            block,
        )
        assert semantic_match, f"{name} is missing its semantic palette"
        assert semantic_match.groups() == (
            source["ui_ok"], source["ui_warn"], source["ui_error"], source["ui_tool"]
        )

        for foreground, background, floor in (
            ("foreground", "background", 4.5),
            ("cardforeground", "card", 4.5),
            ("mutedforeground", "muted", 4.5),
            ("primaryforeground", "primary", 4.5),
            ("secondaryforeground", "secondary", 4.5),
            ("accentforeground", "accent", 4.5),
            ("destructiveforeground", "destructive", 4.5),
        ):
            ratio = contrast(desktop[foreground], desktop[background])
            assert ratio >= floor, f"{name} {foreground}/{background} contrast is {ratio:.2f}, needs {floor:.1f}"

    # No operating-system surface is touched, ever.
    for forbidden in ["powershell", "hkcu", "systemparametersinfo", "windowsterminal"]:
        assert forbidden not in plugin


if __name__ == "__main__":
    test_plugin_registers_full_desktop_packs_from_every_bchop_skin()
    print("full desktop pack contract passed")
