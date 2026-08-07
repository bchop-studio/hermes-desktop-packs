from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
PLUGIN = ROOT / "desktop-plugin" / "hermes-desktop-packs" / "plugin.js"
SKINS = Path("/home/bchop/github/hermes-skins-pack/skins")


def source_color_map(name: str) -> dict[str, str]:
    text = (SKINS / f"{name}.yaml").read_text(encoding="utf-8")
    return {
        key: value.lower()
        for key, value in re.findall(r'^\s*([a-z_]+):\s*["\']?(#[0-9a-fA-F]{6})', text, re.MULTILINE)
    }


def test_plugin_registers_full_desktop_packs_from_every_bchop_skin():
    plugin = PLUGIN.read_text(encoding="utf-8").lower()
    skin_names = sorted(path.stem for path in SKINS.glob("*.yaml"))

    assert len(skin_names) == 50
    assert "const fullthemes" in plugin
    assert plugin.count("darkcolors: null") == 50
    assert "theme.darkcolors = theme.colors" in plugin

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

    # Every source skin contributes its full palette to its pack.
    for name in skin_names:
        source = source_color_map(name)
        assert f"name: 'pack-{name}'" in plugin, f"missing desktop pack: {name}"
        for key in ("background", "ui_accent", "ui_text", "ui_tool", "ui_error", "ui_ok", "ui_warn"):
            assert source[key] in plugin, f"{name} is missing {key}: {source[key]}"

    # No operating-system surface is touched, ever.
    for forbidden in ["powershell", "hkcu", "systemparametersinfo", "windowsterminal"]:
        assert forbidden not in plugin


if __name__ == "__main__":
    test_plugin_registers_full_desktop_packs_from_every_bchop_skin()
    print("full desktop pack contract passed")
