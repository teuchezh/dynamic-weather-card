# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Summary

Dynamic Weather Card is a custom Home Assistant Lovelace card with realistic canvas-based weather animations. Built with Lit (Web Components) and TypeScript, distributed via HACS.

## Essential Commands

```bash
bun install          # Install dependencies
bun run dev          # Development with watch mode
bun run build        # Production build (runs lint first)
bun run lint         # Check code style
bun run lint:fix     # Auto-fix lint issues
bun run typecheck    # TypeScript type checking
bun test             # Unit tests (tests/*.test.ts)
```

## Testing

Unit tests in `tests/` run with `bun test` (also in CI). They cover the pure logic: precipitation outlook, time of day, moon phase, sky palettes, units, sensor overrides, forecast aggregation, i18n and translation files. Build-time globals such as `__VERSION__` are set in `tests/setup.ts` (preloaded via `bunfig.toml`).

Animations and UI are tested manually via `demo.html` - serve the repo root and open it in a browser to try weather conditions and configurations.

## Architecture Overview

See **AGENTS.md** for detailed architecture documentation. Key points:

- **Entry point**: `src/index.ts` registers `custom:dynamic-weather-card` and its editor
- **Main component**: `src/components/card.ts` - config, Home Assistant data, rendering; details, clock and forecasts are separate Lit elements in `src/components/`
- **Animation system**: `src/animations/` - one class per weather type extending `BaseAnimation`, driven by `src/components/animation-manager.ts`
- **i18n**: `src/internationalization/` - Singleton `i18n` object with `i18n.t('key')`; translations are `locales/<code>/translation.json`

### Adding New Animation

1. Create class in `src/animations/` extending `BaseAnimation` and implement `draw()`
2. Create it in `AnimationManager.initializeAnimations()` and add a case in `AnimationManager.draw()`

### Adding New Option or Language

See the step lists in AGENTS.md (option) and CONTRIBUTING.md (language).

## Code Conventions

- Strict TypeScript with ESLint enforcement
- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`
- Trunk-based: branch from `main`, PRs target `main`
- Versioning: CalVer `vYYYY.M.PATCH` (see `.github/RELEASE.md`)
- Branch naming: `feature/`, `fix/`, `docs/`, `chore/`

## Build Output

Single bundled file: `dynamic-weather-card.js` (ESM, minified, target: browser)
