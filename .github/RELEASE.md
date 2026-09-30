# Release Process

The project uses trunk-based development: `main` is always releasable, and releases are cut from it whenever there is something worth shipping — no need to batch changes.

## How to Release

### Automatic weekly release

The Release workflow runs every **Monday at 06:17 UTC** (09:17 MSK). It publishes a new release only if `main` has user-facing changes since the last release tag:

- `feat:` / `fix:` / `perf:` (any scope, including breaking `!`)
- `chore(deps):` — runtime dependency updates (they change the bundle)
- `chore(l10n):` — translation updates from Weblate

Docs, CI, dev-dependency (`chore(deps-dev)`) and other chore commits don't trigger a release on their own; they ship with the next one.

### Manual release

For an urgent fix, don't wait for Monday:

1. Go to GitHub Actions → Release workflow
2. Click "Run workflow" (on the `main` branch)
3. Leave the version empty to auto-calculate it, or enter one explicitly (e.g., `2026.9.0`)
4. Click "Run workflow"

A manual run releases whenever there is at least one commit since the last tag, regardless of type.

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

## Release Highlights

For a big release, add a mini-presentation above the generated changelog: put screenshots or GIFs and a short overview into `docs/release-highlights/README.md` (images in the same folder, linked relatively as `./hero.jpg`).

The Release workflow includes this file only when something in `docs/release-highlights/` changed since the previous release, so it appears once and is skipped by the following releases automatically. Image links are rewritten to the files in the new release tag, so old release notes keep their images when the folder is replaced for a later release. The same text shows in HACS when users update the card.

## Versioning

This project uses [Calendar Versioning](https://calver.org/) in the same style as Home Assistant: `YYYY.M.PATCH`, tagged as `vYYYY.M.PATCH`.

- **YYYY.M** — year and month of the release (no leading zero)
- **PATCH** — starts at `0` and increments with each release in that month

Examples: `v2026.9.0` → `v2026.9.1` → `v2026.10.0`.

Breaking changes are not signalled by the version number, so call them out in the release notes (use `feat!:` / `fix!:` in commit messages).

Releases up to `v0.5.2` used Semantic Versioning; CalVer versions always sort after them, so HACS updates work as usual.
