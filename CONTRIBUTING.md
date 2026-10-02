# Contributing to Dynamic Weather Card

Thank you for your interest in contributing to Dynamic Weather Card! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Translation Contributions](#translation-contributions)

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming and inclusive community.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- Git
- A GitHub account

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/dynamic-weather-card.git
   cd dynamic-weather-card
   ```

3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/teuchezh/dynamic-weather-card.git
   ```

4. Install dependencies:
   ```bash
   bun install
   ```

5. Start development mode:
   ```bash
   bun run dev
   ```

## Development Workflow

### Branch Strategy

The project uses trunk-based development:

- `main` - The trunk. Always releasable; all PRs target this branch
- Short-lived feature branches - Create from `main`, keep them small and merge quickly
- Releases are cut from `main` as needed (see [RELEASE.md](.github/RELEASE.md))

### Creating a Feature Branch

```bash
git checkout main
git pull upstream main
git checkout -b feature/your-feature-name
```

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-wind-speed`)
- `fix/` - Bug fixes (e.g., `fix/forecast-rendering`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `chore/` - Maintenance tasks (e.g., `chore/update-dependencies`)

## Pull Request Process

1. **Update your branch** with the latest changes from `main`:
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. **Make your changes** following the coding standards

3. **Test your changes**:
   ```bash
   bun run lint        # Check code style
   bun run typecheck   # Check TypeScript types
   bun test            # Run unit tests
   bun run build       # Build the project
   ```

4. **Commit your changes** using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add new weather animation"
   git commit -m "fix: correct forecast time display"
   git commit -m "docs: update installation instructions"
   ```

5. **Push to your fork**:
   ```bash
   git push origin your-branch
   ```

6. **Create a Pull Request** on GitHub:
   - Target the `main` branch
   - Fill out the PR template
   - Link any related issues
   - Add screenshots for UI changes

### PR Requirements

- ✅ All CI checks must pass (linting, type checking, build)
- ✅ Code follows project conventions
- ✅ Commits follow Conventional Commits format
- ✅ PR description clearly explains the changes
- ✅ No unnecessary dependencies added

## Coding Standards

### TypeScript

- Use TypeScript for all code
- Define proper types, avoid `any`
- Use existing types from `src/types.ts`

### Code Style

- Follow existing code patterns
- Use ESLint configuration (run `bun run lint`)
- Use meaningful variable and function names
- Add comments for complex logic

### Component Structure

When adding new animations:

```typescript
import { BaseAnimation } from './base';
import type { TimeOfDay } from '../types';

export class MyAnimation extends BaseAnimation {
  draw(time: number, width: number, height: number, timeOfDay: TimeOfDay): void {
    // Animation logic here
  }
}
```

### File Organization

- Animations: `src/animations/`
- Components: `src/components/`
- Utilities: `src/utils.ts`
- Types: `src/types.ts`
- Constants: `src/constants.ts`
- Translations: `src/internationalization/locales/`

## Testing

### Unit Tests

Pure logic lives under test in `tests/*.test.ts` and runs with `bun test` (CI runs it on every PR). When you change something like the precipitation outlook, sun times, units or forecast aggregation, add or update a test there. Use local `Date` values (`new Date(2026, 9, 2, 14, 0)`) so tests pass in any time zone.

### Manual Testing

1. Run `bun run build`, then serve the repository root (e.g. `python3 -m http.server`) and open `demo.html`
2. Test various weather conditions
3. Test different configurations
4. Check browser console for errors

The live demo on GitHub Pages is rebuilt and deployed from `main` on every push (`.github/workflows/pages.yml`).

### Testing in Home Assistant

1. Build the project: `bun run build`
2. Copy `dynamic-weather-card.js` to your Home Assistant `www` folder
3. Add the card to a dashboard
4. Test with real weather data

### Before Submitting PR

Run all checks:
```bash
bun run lint       # ESLint
bun run typecheck  # TypeScript
bun test           # Unit tests
bun run build      # Production build
```

## Translation Contributions

We welcome translations for new languages!

### Improving a Translation

Edit `src/internationalization/locales/<code>/translation.json` and open a pull request against `main`. Use `locales/en/translation.json` as the reference: missing keys fall back to English, keys that `en` doesn't have are rejected by `bun run locales:check`. Keep placeholders such as `{kind}`, `{time}` and `{hours}` as they are (a unit test checks this).

### Adding a New Language

1. Create `src/internationalization/locales/<code>/translation.json`, starting from a copy of the English file.
2. Add the language's name to `en` (and, if you can, `ru`): `editor.language_<code>` and `demo.language.<name>`.
3. Regenerate the locale index: `bun run locales:generate` (CI fails until `locales.generated.ts` is up to date).
4. Add the language to the demo's language picker (`LANGUAGES` in `demo.html`) and to the language lists in `README.md` and `README.ru.md`.
5. Run `bun run locales:check` and `bun test`.

The `demo` block of each file is only used by the demo page and is left out of the card bundle.

## Adding New Features

### New Weather Animation

1. Create animation class in `src/animations/new-animation.ts`
2. Extend `BaseAnimation`
3. Implement `draw()` method
4. Register in `src/components/card.ts` (initializeAnimations + draw method)
5. Test with `demo.html`
6. Update documentation

### New Configuration Option

1. Add to `WeatherCardConfig` interface in `src/types.ts`
2. Add to `DEFAULT_CONFIG` in `src/constants.ts`
3. Implement the feature in `src/components/card.ts`
4. Update README.md and README.ru.md
5. Test thoroughly

## Getting Help

- 📖 Read the [AGENTS.md](AGENTS.md) for architecture overview
- 💬 Ask questions in GitHub Discussions
- 🐛 Report bugs via GitHub Issues
- 📧 Contact: Create an issue for questions

## Recognition

All contributors will be recognized in the project. Thank you for making Dynamic Weather Card better!

---

**Happy Contributing! 🎉**
