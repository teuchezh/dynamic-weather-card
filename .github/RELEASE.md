# Release Process

The project uses trunk-based development: `main` is always releasable, and releases are cut from it whenever there is something worth shipping — no need to batch changes.

## How to Release

1. Go to GitHub Actions → Release workflow
2. Click "Run workflow" (on the `main` branch)
3. Leave the version empty to auto-calculate it, or enter one explicitly (e.g., `2026.9.0`)
4. Click "Run workflow"

The workflow builds the card with that version, tags the current `main` commit as `vX` and publishes a GitHub Release with the built `dynamic-weather-card.js` and generated release notes.

Nothing is committed back to `main`: it stays protected (PR-only), and the version lives in the tag and the built bundle. `package.json` in the repository keeps a placeholder version (`0.0.0-dev`).

## Commit Message Convention

To generate meaningful changelogs, use conventional commit messages:

- `feat:` or `feature:` - New features (appears in ✨ Features)
- `fix:` or `bugfix:` - Bug fixes (appears in 🐛 Bug Fixes)
- `docs:` - Documentation changes (appears in 📚 Documentation)
- `chore:`, `build:`, `ci:` - Maintenance tasks (appears in 🔧 Chores & Maintenance)
- Other prefixes will appear in "Other Changes"

### Examples:

```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: correct temperature display in night mode"
git commit -m "docs: update README with new configuration options"
git commit -m "chore: update dependencies"
```

## What Gets Released

- `dynamic-weather-card.js` — built bundle attached to the GitHub Release (this is what HACS installs)
- Release notes generated from commits since the previous release

## Release Notes

Release notes are generated from commit subjects between the previous release tag and `main`, grouped by type (features, fixes, docs, chores). With squash merging, each PR becomes one line, so a clear, conventional PR title is what ends up in the notes.

The history lives in [GitHub Releases](https://github.com/teuchezh/dynamic-weather-card/releases). `CHANGELOG.md` covers releases up to `v0.5.2` and is no longer updated.

## Versioning

This project uses [Calendar Versioning](https://calver.org/) in the same style as Home Assistant: `YYYY.M.PATCH`, tagged as `vYYYY.M.PATCH`.

- **YYYY.M** — year and month of the release (no leading zero)
- **PATCH** — starts at `0` and increments with each release in that month

Examples: `v2026.9.0` → `v2026.9.1` → `v2026.10.0`.

Breaking changes are not signalled by the version number, so call them out in the release notes (use `feat!:` / `fix!:` in commit messages).

Releases up to `v0.5.2` used Semantic Versioning; CalVer versions always sort after them, so HACS updates work as usual.
