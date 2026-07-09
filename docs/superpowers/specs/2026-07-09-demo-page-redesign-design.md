# Demo Page Redesign

## Problem

`demo.html` is the manual testing tool for the card (no automated tests exist per CLAUDE.md — this page is how contributors verify weather conditions and configuration options). Two problems:

1. **Layout**: the settings panel (`.controls-panel`) is `position: sticky` with `max-height: calc(100vh - 120px)` and `overflow-y: auto`. It holds ~6 sections (Quick Presets, Language, Weather Condition, Time of Day, Display Options with ~10 checkboxes, Action Buttons), so it scrolls internally, separately from the page. Reaching controls at the bottom (clock format, action buttons) requires scrolling inside a small fixed box.
2. **Visual style**: page background is a dark blue-to-purple gradient (`#1e3c72 → #2a5298 → #7e22ce`) with a dark glassy theme. Feels dated/heavy. Target look: light, airy, close to Apple system UI and Home Assistant's own frontend.

## Scope

In scope: `demo.html` only — its CSS and HTML structure, plus the minimal JS needed to drive tab switching.

Out of scope:
- The card component itself (`src/**`) — not touched.
- Existing JS logic (`updateCard`, `applyPreset`, `toggleDemoMode`, `setTime`, etc.) and all control element `id`s — unchanged, so all current wiring keeps working.
- i18n content — no new translation keys. Existing keys (`quickPresets`, `language.title`, `weatherCondition`, `timeOfDay`, `displayOptions`, `configuration`, etc.) are reused as tab labels.
- Icons — no icon replacement. Emoji already present in `<select>` options, preset cards, and buttons stay exactly as they are today. Section/tab headers become plain text (dropping the leading emoji glyph that's currently baked into the `data-i18n` label, e.g. "🎨 Quick Presets" → "Quick Presets").
- Dark mode / theme toggle — light theme only.

## Visual Language

Replace the dark glass theme with a light, neutral theme:

- **Page background**: solid `#f5f5f7` (no gradient).
- **Panels** (card preview box, settings box): white `#ffffff`, `border-radius: 16px`, soft shadow `0 1px 3px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.04)` — replacing the current `backdrop-filter: blur` + heavy `0 20px 60px rgba(0,0,0,.4)` shadow.
- **Accent color**: `#007AFF` (system blue) for active tab indicator, focus rings, primary button, slider thumb — replacing the purple/indigo `--primary`/`--secondary` gradient pair.
- **Text**: `#1d1d1f` primary, `#6e6e73` secondary — replacing the light-on-dark `#e2e8f0`/`#a0aec0` pair.
- **Form controls** (`select`, `input[type=number|text]`): light gray fill `#f5f5f7`, `1px solid #d2d2d7` border, blue focus ring — replacing translucent white-on-dark fills.
- **Buttons**: primary button solid `#007AFF` (no gradient); demo/secondary buttons get a neutral light-gray style instead of the pink/red gradients.
- Font stack (`-apple-system, ...`) is unchanged.
- CSS custom properties in `:root` are redefined for the new palette (same variable names where reasonable, so downstream rules mostly just work): `--primary`, `--bg-*`, `--text-*`, `--border` etc. get light-theme values; unused dark-theme-only variables are removed.

## Layout

Two-column grid is kept at the outer level:

- **Left column**: `.card-preview`, sticky, containing the live card — unchanged in behavior, restyled to the white/light-shadow panel style above.
- **Right column**: `.controls-panel`, restructured:
  - Header: "Configuration" (text only, no gear emoji).
  - **Horizontal tab bar** with 5 tabs, one per existing section: Presets, Language, Weather, Time, Display. Tab labels reuse the existing i18n keys minus their emoji prefix.
  - **Tab content area**: exactly one section visible at a time (the current `.control-section` divs become tab panels, shown/hidden via a `hidden` attribute or `display` toggle). No inner `max-height`/`overflow-y` — the panel is exactly as tall as its content.
  - **Action buttons** ("Update Card", "Start Demo Mode") are pinned below the tab content, always visible regardless of active tab (they are not part of any tab's content).
- Removed: `overflow-y: auto`, `max-height: calc(100vh - 120px)`, and the associated custom scrollbar CSS on `.controls-panel` (no longer needed).
- Responsive breakpoint unchanged (`max-width: 1200px` collapses the grid to one column, card on top). On narrow viewports the tab bar wraps or scrolls horizontally if it doesn't fit — simple `overflow-x: auto` on the tab bar, no hamburger/dropdown fallback needed at this scope.

## Interaction

New minimal JS (added inline in the existing `<script>` block, not a new file):

- On page load, wrap each existing `.control-section` (excluding the Action Buttons section) in a tab panel with a `data-tab` attribute matching a tab button's `data-tab`.
- Clicking a tab button shows its panel and hides the others, and toggles an `active` class on the clicked tab button.
- First tab (Presets) is active by default on load.
- No persistence of the selected tab across reloads — always resets to Presets tab.
- Tab switching does not touch any card configuration or trigger `updateCard()` — purely a display toggle, so switching tabs never changes the live preview.

## Testing

No automated tests for this file (consistent with project conventions). Manual verification: open `demo.html` via a local server, click through all 5 tabs confirming each shows the right controls and the previously-existing `id`s still resolve (so `updateCard()`, presets, and demo mode all keep working), confirm the page scrolls as one unit with no inner scrollbar, and check the ≤1200px responsive collapse.
