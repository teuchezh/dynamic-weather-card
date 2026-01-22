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
```

## Testing

No automated tests. Manual testing via `demo.html` - open in browser to test various weather conditions and configurations.

## Architecture Overview

See **AGENTS.md** for detailed architecture documentation. Key points:

- **Entry point**: `src/index.ts` registers `custom:dynamic-weather-card`
- **Main component**: `src/components/card.ts` - Lit Element handling UI, canvas, and HA integration
- **Animation system**: `src/animations/` - Each weather condition has its own class extending `BaseAnimation`
- **i18n**: `src/internationalization/` - Singleton `i18n` object with `i18n.t('key')` for translations

### Adding New Animation

1. Create class in `src/animations/` extending `BaseAnimation`
2. Implement `draw(time, width, height, timeOfDay)` method
3. Register in `card.ts` at `initializeAnimations()` and add case in `draw()` method

### Adding New Language

1. Create `src/internationalization/locales/XX/translation.ts`
2. Import in `src/internationalization/index.ts`

## Code Conventions

- Strict TypeScript with ESLint enforcement
- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`
- PRs target `dev` branch, not `main`
- Branch naming: `feature/`, `fix/`, `docs/`, `chore/`

## Build Output

Single bundled file: `dynamic-weather-card.js` (ESM, minified, target: browser)
