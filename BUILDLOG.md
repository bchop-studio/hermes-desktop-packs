# BUILDLOG.md — Hermes Desktop Packs

The real build record. No fake milestones, no invented drama.

## 2026-08-07 — Pre-public walkthrough

### What changed
Full verification pass before flipping the repo public: secret scan across
working tree and entire git history (clean), no stray or private files,
contract test green, 50 packs confirmed in the plugin, themes index matches,
README and links checked, local main synced and all stale branches deleted.
Added this BUILDLOG, the one file that was missing.

### What broke
PR #5's commit showed "Unverified" on GitHub. The pushed commit was unsigned;
a signed copy was re-made locally but never pushed. Badge is permanent on that
PR, signing verified working for all future commits.

### Current status
Public-ready. 50 packs, MIT licensed, contract test passing.

---

## 2026-08-07 — v1.0.0: 50 desktop packs shipped

### What changed
Scaffolded the repo, generated 50 full-palette Hermes Desktop packs from the
bchop-studio hermes-skins-pack, added MIT license, contributing guide, themes
index with WCAG contrast ratios, the python contract test, and the neon cover.

### What broke
Early feature branches (feat/packs-pr, feat/first-hermes-desktop-pack) ended
up on orphaned history after main was rebuilt. Work was re-committed onto the
real main; stale branches cleaned up during the pre-public walkthrough.

### Current status
Shipped as v1.0.0. One click, the whole desktop app becomes the skin.
