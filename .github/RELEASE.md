# Release Process

This project uses manual workflows for creating releases and managing changelogs.

## How to Release

1. Go to GitHub Actions → Release workflow
2. Click "Run workflow"
3. Enter the version (e.g., `v0.2.2`)
4. Click "Run workflow"

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

The release workflow automatically includes:
- `dynamic-weather-card.js` - Built JavaScript file
- `hacs.json` - HACS configuration
- `README.md` - English documentation
- `README.ru.md` - Russian documentation
- `LICENSE` - License file
- `CHANGELOG.md` - Full changelog history

## Changelog

The changelog is automatically:
- Generated from git commits between releases
- Categorized by commit type (features, fixes, docs, etc.)
- Saved to CHANGELOG.md in the repository
- Included in the GitHub Release notes

## Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version (X.0.0): Breaking changes
- **MINOR** version (0.X.0): New features (backwards compatible)
- **PATCH** version (0.0.X): Bug fixes (backwards compatible)
