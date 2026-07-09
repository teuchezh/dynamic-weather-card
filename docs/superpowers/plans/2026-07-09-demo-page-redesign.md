# Demo Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign `demo.html` from a dark blue/purple glass theme with an internally-scrolling settings sidebar into a light, Apple/Home-Assistant-style page with a tabbed settings panel that never scrolls internally.

**Architecture:** Single static file (`demo.html`) edited in place — no new files, no build step involved (the file isn't processed by `bun run build`/`lint`/`typecheck`, which only touch `src/**`). Work happens in three layers: (1) CSS color-token rewrite for the light theme, (2) CSS + HTML restructuring of the settings panel into tabs, (3) a small vanilla-JS tab switcher. All existing element `id`s, `onclick` handlers, and `data-i18n` keys are preserved exactly so the existing `updateCard()`/`applyPreset()`/`toggleDemoMode()`/etc. logic keeps working unchanged.

**Tech Stack:** Plain HTML/CSS/vanilla JS (no framework, no build tooling) — matches the existing file.

## Global Constraints

- Scope is `demo.html` only. Do not touch `src/**`, translation files, or `dynamic-weather-card.js`.
- Light theme only — no dark mode / theme toggle.
- No icon changes: emoji already present in `<select>` options, preset cards (`.preset-icon`), and the two action buttons stay byte-for-byte unchanged. Only the `.panel-title` and the five section headers (which become tab labels) lose their leading emoji glyph.
- No new i18n keys — reuse existing keys `configuration`, `quickPresets`, `language.title`, `weatherCondition`, `timeOfDay`, `displayOptions` verbatim.
- Every existing element `id` and inline `onclick`/`addEventListener` target in `demo.html` must be preserved exactly (same id, same casing) — the JS in the `<script>` block at the bottom of the file is not being rewritten, only a small tab-switcher addition.
- This project has no automated tests (see CLAUDE.md: "No automated tests. Manual testing via `demo.html`"). Verification in this plan is manual, via a local static file server.
- Commit message prefixes are restricted to `feat:`, `fix:`, `docs:`, `chore:` per CLAUDE.md.
- Design spec: `docs/superpowers/specs/2026-07-09-demo-page-redesign-design.md`.

---

## File Structure

Only one file changes:

- **Modify: `demo.html`** — inline `<style>` block (lines ~7–444) gets new color values and new `.tab-bar`/`.tab-button`/`.tab-panel`/`.action-buttons` rules, replacing `.control-section`/`.section-header`; inline HTML (lines ~452–714) gets the settings panel restructured from stacked `.control-section` blocks into a tab bar + `.tab-panel` blocks; inline `<script>` block gets one small `initTabs()` function plus one call site.

No other files are created or modified.

---

### Task 1: Light-theme base colors (page chrome)

**Files:**
- Modify: `demo.html:14-52` (the `:root` variable block, `body`, and `.page-title` rules)

**Interfaces:**
- Produces: the CSS custom properties `--primary`, `--text-primary`, `--text-secondary`, `--border`, `--surface`, `--surface-muted`, `--surface-hover`, `--danger` on `:root`. Every later task (2 and 3) consumes these exact variable names — do not rename them.

- [ ] **Step 1: Replace the `:root` variable block**

Find this block (currently `demo.html:14-27`):

```css
        :root {
            --primary: #667eea;
            --primary-dark: #5568d3;
            --secondary: #764ba2;
            --accent: #f093fb;
            --success: #48bb78;
            --danger: #f56565;
            --warning: #ed8936;
            --bg-dark: #1a202c;
            --bg-card: #2d3748;
            --text-primary: #e2e8f0;
            --text-secondary: #a0aec0;
            --border: #4a5568;
        }
```

Replace it with:

```css
        :root {
            --primary: #007aff;
            --text-primary: #1d1d1f;
            --text-secondary: #6e6e73;
            --border: #d2d2d7;
            --surface: #ffffff;
            --surface-muted: #f5f5f7;
            --surface-hover: #ebebed;
            --danger: #ff3b30;
        }
```

- [ ] **Step 2: Replace the `body` background**

Find (currently `demo.html:29-35`):

```css
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
            min-height: 100vh;
            color: var(--text-primary);
            padding: 20px;
        }
```

Replace with:

```css
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: var(--surface-muted);
            min-height: 100vh;
            color: var(--text-primary);
            padding: 20px;
        }
```

- [ ] **Step 3: Replace the `.page-title` gradient-text effect with a solid color**

Find (currently `demo.html:43-52`):

```css
        .page-title {
            font-size: 48px;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 12px;
            text-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
```

Replace with:

```css
        .page-title {
            font-size: 48px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 12px;
        }
```

- [ ] **Step 4: Verify no leftover references to removed variables**

Run: `grep -n "var(--secondary)\|var(--accent)\|var(--success)\|var(--warning)\|var(--bg-dark)\|var(--primary-dark)" demo.html`
Expected: no output yet (these are still used elsewhere in the file — they'll be cleared out in Tasks 2 and 3). This step is just a sanity check that Step 1–3 didn't already remove a variable that's still referenced above line 444; skip fixing anything here, just confirm the count doesn't include lines above 444 (i.e. nothing in the `:root`/`body`/`.page-title` block you just edited references them anymore).

- [ ] **Step 5: Commit**

```bash
git add demo.html
git commit -m "chore: switch demo page to light theme base colors"
```

---

### Task 2: Light-theme panel chrome (card preview & settings panel containers)

**Files:**
- Modify: `demo.html:75-134` (`.card-preview`, `#card-container`, `.controls-panel` and its scrollbar rules)
- Modify: `demo.html:439-442` (mobile media query override for `.controls-panel`)

**Interfaces:**
- Consumes: `--surface`, `--border` from Task 1's `:root` block.
- Produces: no new class names; only recolors existing `.card-preview`, `#card-container`, `.controls-panel`.

- [ ] **Step 1: Replace `.card-preview`**

Find (currently `demo.html:75-85`):

```css
        .card-preview {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 32px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.4);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
```

Replace with:

```css
        .card-preview {
            background: var(--surface);
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.04);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
```

- [ ] **Step 2: Replace `#card-container` shadow**

Find (currently `demo.html:96-102`):

```css
        #card-container {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            max-width: 450px;
            width: 100%;
        }
```

Replace with:

```css
        #card-container {
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
            max-width: 450px;
            width: 100%;
        }
```

- [ ] **Step 3: Replace `.controls-panel` and delete its scrollbar rules**

Find (currently `demo.html:104-133`):

```css
        .controls-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 28px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.4);
            max-height: calc(100vh - 120px);
            overflow-y: auto;
            position: sticky;
            top: 20px;
        }

        .controls-panel::-webkit-scrollbar {
            width: 8px;
        }

        .controls-panel::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
        }

        .controls-panel::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
        }

        .controls-panel::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
        }
```

Replace with:

```css
        .controls-panel {
            background: var(--surface);
            border-radius: 16px;
            padding: 28px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.04);
            position: sticky;
            top: 20px;
        }
```

This removes `max-height`/`overflow-y` (the cause of the internal-scroll problem) and the now-unused scrollbar pseudo-element rules. `position: sticky` is kept — it no longer causes an internal scrollbar since panel height will vary per active tab instead of holding all sections at once.

- [ ] **Step 4: Simplify the mobile override**

Find (currently `demo.html:439-442`, inside the `@media (max-width: 768px)` block):

```css
            .controls-panel {
                position: static;
                max-height: none;
            }
```

Replace with:

```css
            .controls-panel {
                position: static;
            }
```

(`max-height: none` is a no-op now that the base rule no longer sets `max-height`.)

- [ ] **Step 5: Commit**

```bash
git add demo.html
git commit -m "chore: switch demo page panel chrome to light theme"
```

---

### Task 3: Light-theme form controls, buttons, and misc components

**Files:**
- Modify: `demo.html:183-410` (select/input, buttons, time slider, checkboxes, messages, preset cards)

**Interfaces:**
- Consumes: `--primary`, `--text-primary`, `--text-secondary`, `--border`, `--surface`, `--surface-muted`, `--surface-hover`, `--danger` from Task 1.
- Produces: no new class names; only recolors existing `select`, `input`, `.btn-primary`, `.btn-demo`, `.btn-preset`, `.time-controls`, `.time-slider`, `.checkbox-item`, `.error-message`, `.loading-message`, `.preset-card`.

- [ ] **Step 1: Replace select/input base, focus, and option styles**

Find (currently `demo.html:183-205`):

```css
        select, input[type="number"], input[type="text"] {
            width: 100%;
            padding: 12px 14px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 10px;
            font-size: 14px;
            color: var(--text-primary);
            transition: all 0.2s;
            font-family: inherit;
        }

        select:focus, input[type="number"]:focus, input[type="text"]:focus {
            outline: none;
            border-color: var(--primary);
            background: rgba(255, 255, 255, 0.12);
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
        }

        select option {
            background: var(--bg-card);
            color: var(--text-primary);
        }
```

Replace with:

```css
        select, input[type="number"], input[type="text"] {
            width: 100%;
            padding: 12px 14px;
            background: var(--surface-muted);
            border: 1px solid var(--border);
            border-radius: 10px;
            font-size: 14px;
            color: var(--text-primary);
            transition: all 0.2s;
            font-family: inherit;
        }

        select:focus, input[type="number"]:focus, input[type="text"]:focus {
            outline: none;
            border-color: var(--primary);
            background: var(--surface);
            box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15);
        }

        select option {
            background: var(--surface);
            color: var(--text-primary);
        }
```

- [ ] **Step 2: Replace button variants**

Find (currently `demo.html:224-257`):

```css
        .btn-primary {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-demo {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
        }

        .btn-demo:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(240, 147, 251, 0.4);
        }

        .btn-demo.active {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
        }

        .btn-preset {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: var(--text-primary);
        }

        .btn-preset:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: var(--primary);
        }
```

Replace with:

```css
        .btn-primary {
            background: var(--primary);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 122, 255, 0.35);
        }

        .btn-demo {
            background: var(--surface-muted);
            border: 1px solid var(--border);
            color: var(--text-primary);
        }

        .btn-demo:hover {
            transform: translateY(-2px);
            background: var(--surface-hover);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .btn-demo.active {
            background: var(--primary);
            border-color: var(--primary);
            color: white;
        }

        .btn-preset {
            background: var(--surface-muted);
            border: 1px solid var(--border);
            color: var(--text-primary);
        }

        .btn-preset:hover {
            background: var(--surface-hover);
            border-color: var(--primary);
        }
```

Note: `.btn` (the shared base class, defined separately at `demo.html:207-222`) sets `border: none`. `.btn-demo`/`.btn-preset` now set their own `border` — because both selectors have equal CSS specificity and `.btn-demo`/`.btn-preset` are declared later in the stylesheet than `.btn`, their border wins by source order. No change needed to `.btn` itself.

- [ ] **Step 3: Replace `.time-controls` background**

Find (currently `demo.html:259-264`):

```css
        .time-controls {
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 12px;
            margin-top: 12px;
        }
```

Replace with:

```css
        .time-controls {
            background: var(--surface-muted);
            padding: 20px;
            border-radius: 12px;
            margin-top: 12px;
        }
```

- [ ] **Step 4: Replace the time slider track and thumb**

Find (currently `demo.html:280-314`):

```css
        .time-slider {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: rgba(255, 255, 255, 0.1);
            outline: none;
            -webkit-appearance: none;
            margin-bottom: 16px;
        }

        .time-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .time-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
        }

        .time-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            cursor: pointer;
            border: none;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
```

Replace with:

```css
        .time-slider {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: var(--border);
            outline: none;
            -webkit-appearance: none;
            margin-bottom: 16px;
        }

        .time-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--primary);
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .time-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
        }

        .time-slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--primary);
            cursor: pointer;
            border: none;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
```

- [ ] **Step 5: Replace `.checkbox-item` colors**

Find (currently `demo.html:327-342`):

```css
        .checkbox-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid transparent;
        }

        .checkbox-item:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
        }
```

Replace with:

```css
        .checkbox-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            background: var(--surface-muted);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid transparent;
        }

        .checkbox-item:hover {
            background: var(--surface-hover);
            border-color: var(--border);
        }
```

- [ ] **Step 6: Replace message box colors**

Find (currently `demo.html:365-376`):

```css
        .error-message {
            background: rgba(245, 101, 101, 0.15);
            border: 1px solid var(--danger);
            color: #fc8181;
        }

        .loading-message {
            background: rgba(102, 126, 234, 0.15);
            border: 1px solid var(--primary);
            color: var(--text-secondary);
            text-align: center;
        }
```

Replace with:

```css
        .error-message {
            background: #fff2f1;
            border: 1px solid var(--danger);
            color: #c9262e;
        }

        .loading-message {
            background: rgba(0, 122, 255, 0.08);
            border: 1px solid var(--primary);
            color: var(--text-secondary);
            text-align: center;
        }
```

- [ ] **Step 7: Replace `.preset-card` colors**

Find (currently `demo.html:385-399`):

```css
        .preset-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 12px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
        }

        .preset-card:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: var(--primary);
            transform: translateY(-2px);
        }
```

Replace with:

```css
        .preset-card {
            background: var(--surface-muted);
            padding: 12px;
            border-radius: 10px;
            border: 1px solid var(--border);
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
        }

        .preset-card:hover {
            background: var(--surface-hover);
            border-color: var(--primary);
            transform: translateY(-2px);
        }
```

- [ ] **Step 8: Verify no dark-theme literals remain**

Run: `grep -n "rgba(255, 255, 255\|rgba(255,255,255" demo.html`
Expected: no output (every translucent-white dark-theme literal has been replaced).

- [ ] **Step 9: Commit**

```bash
git add demo.html
git commit -m "chore: switch demo page form controls to light theme"
```

---

### Task 4: Replace scrolling sections with a tab bar (CSS + HTML restructure)

**Files:**
- Modify: `demo.html:145-167` (delete `.control-section`/`.control-section:last-child`/`.section-header`, add `.tab-bar`/`.tab-button`/`.action-buttons`)
- Modify: `demo.html:459-713` (the `.controls-panel` inner markup)

**Interfaces:**
- Consumes: `--text-secondary`, `--text-primary`, `--primary`, `--border` from Task 1.
- Produces: the markup contract Task 5's JS depends on:
  - Tab buttons: `<button class="tab-button" data-tab="KEY">` (KEY ∈ `presets`, `language`, `weather`, `time`, `display`), with `class="tab-button active"` on exactly one button at load (the `presets` one).
  - Tab panels: `<div class="tab-panel" data-tab-panel="KEY">`, with the `hidden` attribute present on every panel except the `presets` one at load.
  - Task 5 reads `button.dataset.tab` and `panel.dataset.tabPanel` and toggles `panel.hidden` / `button.classList` — those exact property names (`dataset.tab`, `dataset.tabPanel`) must match.

- [ ] **Step 1: Replace `.control-section`/`.section-header` CSS with `.tab-bar`/`.tab-button`/`.action-buttons`**

Find (currently `demo.html:145-167`):

```css
        .control-section {
            margin-bottom: 28px;
            padding-bottom: 24px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .control-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .section-header {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--text-secondary);
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
```

Replace with:

```css
        .tab-bar {
            display: flex;
            overflow-x: auto;
            border-bottom: 1px solid var(--border);
            margin-bottom: 24px;
        }

        .tab-button {
            flex-shrink: 0;
            margin-right: 20px;
            padding: 10px 2px;
            background: none;
            border: none;
            border-bottom: 2px solid transparent;
            transform: translateY(1px);
            font-size: 13px;
            font-weight: 600;
            color: var(--text-secondary);
            cursor: pointer;
            white-space: nowrap;
            transition: color 0.15s ease, border-color 0.15s ease;
        }

        .tab-button:last-child {
            margin-right: 0;
        }

        .tab-button:hover {
            color: var(--text-primary);
        }

        .tab-button.active {
            color: var(--primary);
            border-bottom-color: var(--primary);
        }

        .action-buttons {
            margin-top: 28px;
            padding-top: 24px;
            border-top: 1px solid var(--border);
        }
```

(`.tab-panel` needs no CSS rule — the native `hidden` HTML attribute already applies `display: none`, and a visible panel just flows normally with the existing `.control-group`/`.checkbox-group` rules untouched below it.)

- [ ] **Step 2: Restructure the controls panel markup**

Find the entire block from `<!-- Controls Panel -->` through the closing `</div>` of the controls panel (currently `demo.html:459-713`):

```html
        <!-- Controls Panel -->
        <div class="controls-panel">
            <h2 class="panel-title" data-i18n="configuration">⚙️ Configuration</h2>

            <!-- Quick Presets -->
            <div class="control-section">
                <div class="section-header" data-i18n="quickPresets">🎨 Quick Presets</div>
                <div class="quick-presets">
                    <div class="preset-card" onclick="applyPreset('sunny')">
                        <div class="preset-icon">☀️</div>
                        <div class="preset-name" data-i18n="sunnyDay">Sunny Day</div>
                    </div>
                    <div class="preset-card" onclick="applyPreset('rainy')">
                        <div class="preset-icon">🌧️</div>
                        <div class="preset-name" data-i18n="rainy">Rainy</div>
                    </div>
                    <div class="preset-card" onclick="applyPreset('snowy')">
                        <div class="preset-icon">❄️</div>
                        <div class="preset-name" data-i18n="snowy">Snowy</div>
                    </div>
                    <div class="preset-card" onclick="applyPreset('night')">
                        <div class="preset-icon">🌙</div>
                        <div class="preset-name" data-i18n="clearNight">Clear Night</div>
                    </div>
                </div>
            </div>

            <div class="control-section">
                <div class="section-header" data-i18n="language.title">🌍 Language</div>

                <div class="control-group">
                    <select id="language-select">
                        <option value="en" data-i18n="language.english">🇺🇸 English</option>
                        <option value="ru" data-i18n="language.russian">🇷🇺 Русский</option>
                        <option value="fr" data-i18n="language.french">🇫🇷 Français</option>
                        <option value="de" data-i18n="language.german">🇩🇪 Deutsch</option>
                        <option value="nl" data-i18n="language.dutch">🇳🇱 Nederlands</option>
                        <option value="it" data-i18n="language.italian">🇮🇹 Italiano</option>
                        <option value="es" data-i18n="language.spanish">🇪🇸 Español</option>
                    </select>
                </div>
            </div>

            <!-- Weather Settings -->
            <div class="control-section">
                <div class="section-header" data-i18n="weatherCondition">🌦️ Weather Condition</div>

                <div class="control-group">
                    <label class="control-label" data-i18n="condition">Condition</label>
                    <select id="condition-select">
                        <option value="sunny" data-i18n="weatherConditions.sunny">☀️ Sunny</option>
                        <option value="clear" data-i18n="weatherConditions.clear">☀️ Clear</option>
                        <option value="clear-night" data-i18n="weatherConditions.clearNight">🌙 Clear Night</option>
                        <option value="partlycloudy" data-i18n="weatherConditions.partlyCloudy">⛅ Partly Cloudy</option>
                        <option value="cloudy" data-i18n="weatherConditions.cloudy">☁️ Cloudy</option>
                        <option value="rainy" data-i18n="weatherConditions.rainy">🌧️ Rainy</option>
                        <option value="pouring" data-i18n="weatherConditions.pouring">⛈️ Pouring</option>
                        <option value="snowy" data-i18n="weatherConditions.snowy">❄️ Snowy</option>
                        <option value="snowy-rainy" data-i18n="weatherConditions.sleet">🌨️ Sleet</option>
                        <option value="hail" data-i18n="weatherConditions.hail">🧊 Hail</option>
                        <option value="foggy" data-i18n="weatherConditions.foggy">🌫️ Foggy</option>
                        <option value="lightning" data-i18n="weatherConditions.lightning">⚡ Lightning</option>
                        <option value="lightning-rainy" data-i18n="weatherConditions.thunderstorm">⛈️ Thunderstorm</option>
                    </select>
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="temperature">Temperature (°C)</label>
                    <input type="number" id="temperature-input" value="20" min="-50" max="50">
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="humidity">Humidity (%)</label>
                    <input type="number" id="humidity-input" value="65" min="0" max="100">
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="windSpeed">Wind Speed (km/h)</label>
                    <input type="number" id="wind-input" value="15" min="0" max="150">
                </div>

                <div class="control-group">
                    <label class="control-label">Wind Direction (°)</label>
                    <input type="number" id="wind-bearing-input" value="200" min="0" max="359">
                    <div style="margin-top: 8px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
                        <button class="btn btn-preset" onclick="setWindBearing(0)" style="font-size: 11px; padding: 8px;">↑ N</button>
                        <button class="btn btn-preset" onclick="setWindBearing(90)" style="font-size: 11px; padding: 8px;">→ E</button>
                        <button class="btn btn-preset" onclick="setWindBearing(180)" style="font-size: 11px; padding: 8px;">↓ S</button>
                        <button class="btn btn-preset" onclick="setWindBearing(270)" style="font-size: 11px; padding: 8px;">← W</button>
                    </div>
                </div>
            </div>

            <!-- Time Settings -->
            <div class="control-section">
                <div class="section-header" data-i18n="timeOfDay">🕐 Time of Day</div>

                <div class="control-group">
                    <label class="control-label" data-i18n="timeMode">Time Mode</label>
                    <select id="time-select">
                        <option value="auto" data-i18n="autoTime">🕐 Auto (Current Time)</option>
                        <option value="manual" data-i18n="manualControl">⏱️ Manual Control</option>
                        <option value="sunrise" data-i18n="sunrise">🌅 Sunrise</option>
                        <option value="day" data-i18n="day">☀️ Day</option>
                        <option value="sunset" data-i18n="sunset">🌇 Sunset</option>
                        <option value="night" data-i18n="night">🌙 Night</option>
                    </select>

                    <div id="time-slider-container" class="time-controls" style="display: none;">
                        <div class="time-display">
                            <span class="control-label">Current Time</span>
                            <span id="time-display" class="time-value">12:00</span>
                        </div>
                        <input type="range" id="time-slider" class="time-slider" min="0" max="1439" value="720">
                        <div class="preset-grid">
                            <button class="btn btn-preset" onclick="setTime(360)">🌅 6:00</button>
                            <button class="btn btn-preset" onclick="setTime(720)">☀️ 12:00</button>
                            <button class="btn btn-preset" onclick="setTime(1080)">🌇 18:00</button>
                            <button class="btn btn-preset" onclick="setTime(0)">🌙 0:00</button>
                        </div>
                        <div style="margin-top: 12px;">
                            <button class="btn btn-demo" id="time-animation-btn" onclick="toggleTimeAnimation()">
                                🎬 Animate 24h Cycle
                            </button>
                        </div>
                        <div class="control-group" style="margin-top: 12px;">
                            <label class="control-label">Animation Speed</label>
                            <select id="animation-speed-select">
                                <option value="10">Very Fast (10s)</option>
                                <option value="20">Fast (20s)</option>
                                <option value="30" selected>Normal (30s)</option>
                                <option value="60">Slow (60s)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Display Options -->
            <div class="control-section">
                <div class="section-header" data-i18n="displayOptions">👁️ Display Options</div>

                <div class="control-group">
                    <label class="control-label" data-i18n="cardName">Card Name</label>
                    <input type="text" id="name-input" value="" placeholder="Leave empty to hide" data-i18n-placeholder="placeholderEmpty">
                </div>

                <div class="control-group">
                    <label class="control-label">Layout</label>
                    <select id="layout-select">
                        <option value="default">Default</option>
                        <option value="minimal">Minimal (compact horizontal)</option>
                    </select>
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="height">Height (px)</label>
                    <input type="number" id="height-input" value="200" min="50" max="800" step="10">
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="overlayOpacity">Overlay Opacity (0-1)</label>
                    <input type="number" id="overlay-opacity-input" value="0.1" min="0" max="1" step="0.05">
                </div>

                <div class="control-group">
                    <label class="control-label">Text Shadow (0-3)</label>
                    <input type="number" id="text-shadow-strength" value="1" min="0" max="3" step="0.1">
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="windSpeedUnit">Wind Speed Unit</label>
                    <select id="wind-speed-unit-select">
                        <option value="ms">m/s</option>
                        <option value="kmh">km/h</option>
                    </select>
                </div>
                <div class="control-group">
                    <label class="control-label" data-i18n="dailyForecastDays">Daily Forecast Days</label>
                    <input type="number" id="daily-forecast-days" value="5" min="1" max="14" step="1">
                </div>
                <div class="control-group">
                    <label class="control-label" data-i18n="hourlyForecastHours">Hourly Forecast Hours</label>
                    <input type="number" id="hourly-forecast-hours" value="5" min="1" max="24" step="1">
                </div>

                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-feels-like" checked>
                        <span class="checkbox-text" data-i18n="feelsLike">Feels Like Temperature</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-min-temp" checked>
                        <span class="checkbox-text" data-i18n="minTemp">Min Temperature</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-humidity">
                        <span class="checkbox-text" data-i18n="humidity">Humidity</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-wind">
                        <span class="checkbox-text" data-i18n="windSpeed">Wind Speed</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-wind-direction">
                        <span class="checkbox-text" data-i18n="windDirection">Wind Direction</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-wind-gust">
                        <span class="checkbox-text" data-i18n="windGust">Wind Gust</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-hourly-forecast">
                        <span class="checkbox-text" data-i18n="hourlyForecast">Hourly Forecast</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-daily-forecast">
                        <span class="checkbox-text" data-i18n="dailyForecast">Daily Forecast</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-sunrise-sunset">
                        <span class="checkbox-text" data-i18n="sunriseSunset">Sunrise/Sunset</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-clock">
                        <span class="checkbox-text" data-i18n="showClock">Clock</span>
                    </label>
                </div>
                <div class="control-group">
                    <label class="control-label" data-i18n="clockPosition">Clock Position</label>
                    <select id="clock-position-select">
                        <option value="top" data-i18n="clockPositionTop">Top right</option>
                        <option value="details" data-i18n="clockPositionDetails">Details row</option>
                    </select>
                </div>
                <div class="control-group">
                    <label class="control-label" data-i18n="clockFormat">Clock Format</label>
                    <select id="clock-format-select">
                        <option value="24h" data-i18n="clockFormat24h">24-hour</option>
                        <option value="12h" data-i18n="clockFormat12h">12-hour (AM/PM)</option>
                    </select>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="control-section">
                <button class="btn btn-primary" onclick="updateCard()" data-i18n="updateCard">
                    🔄 Update Card
                </button>
                <div style="height: 12px;"></div>
                <button class="btn btn-demo" id="demo-btn" onclick="toggleDemoMode()" data-i18n="startDemo">
                    🎬 Start Demo Mode
                </button>
            </div>
        </div>
```

Replace with:

```html
        <!-- Controls Panel -->
        <div class="controls-panel">
            <h2 class="panel-title" data-i18n="configuration">Configuration</h2>

            <div class="tab-bar" role="tablist">
                <button type="button" class="tab-button active" data-tab="presets" data-i18n="quickPresets" role="tab">Quick Presets</button>
                <button type="button" class="tab-button" data-tab="language" data-i18n="language.title" role="tab">Language</button>
                <button type="button" class="tab-button" data-tab="weather" data-i18n="weatherCondition" role="tab">Weather Condition</button>
                <button type="button" class="tab-button" data-tab="time" data-i18n="timeOfDay" role="tab">Time of Day</button>
                <button type="button" class="tab-button" data-tab="display" data-i18n="displayOptions" role="tab">Display Options</button>
            </div>

            <!-- Quick Presets -->
            <div class="tab-panel" data-tab-panel="presets" role="tabpanel">
                <div class="quick-presets">
                    <div class="preset-card" onclick="applyPreset('sunny')">
                        <div class="preset-icon">☀️</div>
                        <div class="preset-name" data-i18n="sunnyDay">Sunny Day</div>
                    </div>
                    <div class="preset-card" onclick="applyPreset('rainy')">
                        <div class="preset-icon">🌧️</div>
                        <div class="preset-name" data-i18n="rainy">Rainy</div>
                    </div>
                    <div class="preset-card" onclick="applyPreset('snowy')">
                        <div class="preset-icon">❄️</div>
                        <div class="preset-name" data-i18n="snowy">Snowy</div>
                    </div>
                    <div class="preset-card" onclick="applyPreset('night')">
                        <div class="preset-icon">🌙</div>
                        <div class="preset-name" data-i18n="clearNight">Clear Night</div>
                    </div>
                </div>
            </div>

            <div class="tab-panel" data-tab-panel="language" role="tabpanel" hidden>
                <div class="control-group">
                    <select id="language-select">
                        <option value="en" data-i18n="language.english">🇺🇸 English</option>
                        <option value="ru" data-i18n="language.russian">🇷🇺 Русский</option>
                        <option value="fr" data-i18n="language.french">🇫🇷 Français</option>
                        <option value="de" data-i18n="language.german">🇩🇪 Deutsch</option>
                        <option value="nl" data-i18n="language.dutch">🇳🇱 Nederlands</option>
                        <option value="it" data-i18n="language.italian">🇮🇹 Italiano</option>
                        <option value="es" data-i18n="language.spanish">🇪🇸 Español</option>
                    </select>
                </div>
            </div>

            <!-- Weather Settings -->
            <div class="tab-panel" data-tab-panel="weather" role="tabpanel" hidden>
                <div class="control-group">
                    <label class="control-label" data-i18n="condition">Condition</label>
                    <select id="condition-select">
                        <option value="sunny" data-i18n="weatherConditions.sunny">☀️ Sunny</option>
                        <option value="clear" data-i18n="weatherConditions.clear">☀️ Clear</option>
                        <option value="clear-night" data-i18n="weatherConditions.clearNight">🌙 Clear Night</option>
                        <option value="partlycloudy" data-i18n="weatherConditions.partlyCloudy">⛅ Partly Cloudy</option>
                        <option value="cloudy" data-i18n="weatherConditions.cloudy">☁️ Cloudy</option>
                        <option value="rainy" data-i18n="weatherConditions.rainy">🌧️ Rainy</option>
                        <option value="pouring" data-i18n="weatherConditions.pouring">⛈️ Pouring</option>
                        <option value="snowy" data-i18n="weatherConditions.snowy">❄️ Snowy</option>
                        <option value="snowy-rainy" data-i18n="weatherConditions.sleet">🌨️ Sleet</option>
                        <option value="hail" data-i18n="weatherConditions.hail">🧊 Hail</option>
                        <option value="foggy" data-i18n="weatherConditions.foggy">🌫️ Foggy</option>
                        <option value="lightning" data-i18n="weatherConditions.lightning">⚡ Lightning</option>
                        <option value="lightning-rainy" data-i18n="weatherConditions.thunderstorm">⛈️ Thunderstorm</option>
                    </select>
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="temperature">Temperature (°C)</label>
                    <input type="number" id="temperature-input" value="20" min="-50" max="50">
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="humidity">Humidity (%)</label>
                    <input type="number" id="humidity-input" value="65" min="0" max="100">
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="windSpeed">Wind Speed (km/h)</label>
                    <input type="number" id="wind-input" value="15" min="0" max="150">
                </div>

                <div class="control-group">
                    <label class="control-label">Wind Direction (°)</label>
                    <input type="number" id="wind-bearing-input" value="200" min="0" max="359">
                    <div style="margin-top: 8px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
                        <button class="btn btn-preset" onclick="setWindBearing(0)" style="font-size: 11px; padding: 8px;">↑ N</button>
                        <button class="btn btn-preset" onclick="setWindBearing(90)" style="font-size: 11px; padding: 8px;">→ E</button>
                        <button class="btn btn-preset" onclick="setWindBearing(180)" style="font-size: 11px; padding: 8px;">↓ S</button>
                        <button class="btn btn-preset" onclick="setWindBearing(270)" style="font-size: 11px; padding: 8px;">← W</button>
                    </div>
                </div>
            </div>

            <!-- Time Settings -->
            <div class="tab-panel" data-tab-panel="time" role="tabpanel" hidden>
                <div class="control-group">
                    <label class="control-label" data-i18n="timeMode">Time Mode</label>
                    <select id="time-select">
                        <option value="auto" data-i18n="autoTime">🕐 Auto (Current Time)</option>
                        <option value="manual" data-i18n="manualControl">⏱️ Manual Control</option>
                        <option value="sunrise" data-i18n="sunrise">🌅 Sunrise</option>
                        <option value="day" data-i18n="day">☀️ Day</option>
                        <option value="sunset" data-i18n="sunset">🌇 Sunset</option>
                        <option value="night" data-i18n="night">🌙 Night</option>
                    </select>

                    <div id="time-slider-container" class="time-controls" style="display: none;">
                        <div class="time-display">
                            <span class="control-label">Current Time</span>
                            <span id="time-display" class="time-value">12:00</span>
                        </div>
                        <input type="range" id="time-slider" class="time-slider" min="0" max="1439" value="720">
                        <div class="preset-grid">
                            <button class="btn btn-preset" onclick="setTime(360)">🌅 6:00</button>
                            <button class="btn btn-preset" onclick="setTime(720)">☀️ 12:00</button>
                            <button class="btn btn-preset" onclick="setTime(1080)">🌇 18:00</button>
                            <button class="btn btn-preset" onclick="setTime(0)">🌙 0:00</button>
                        </div>
                        <div style="margin-top: 12px;">
                            <button class="btn btn-demo" id="time-animation-btn" onclick="toggleTimeAnimation()">
                                🎬 Animate 24h Cycle
                            </button>
                        </div>
                        <div class="control-group" style="margin-top: 12px;">
                            <label class="control-label">Animation Speed</label>
                            <select id="animation-speed-select">
                                <option value="10">Very Fast (10s)</option>
                                <option value="20">Fast (20s)</option>
                                <option value="30" selected>Normal (30s)</option>
                                <option value="60">Slow (60s)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Display Options -->
            <div class="tab-panel" data-tab-panel="display" role="tabpanel" hidden>
                <div class="control-group">
                    <label class="control-label" data-i18n="cardName">Card Name</label>
                    <input type="text" id="name-input" value="" placeholder="Leave empty to hide" data-i18n-placeholder="placeholderEmpty">
                </div>

                <div class="control-group">
                    <label class="control-label">Layout</label>
                    <select id="layout-select">
                        <option value="default">Default</option>
                        <option value="minimal">Minimal (compact horizontal)</option>
                    </select>
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="height">Height (px)</label>
                    <input type="number" id="height-input" value="200" min="50" max="800" step="10">
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="overlayOpacity">Overlay Opacity (0-1)</label>
                    <input type="number" id="overlay-opacity-input" value="0.1" min="0" max="1" step="0.05">
                </div>

                <div class="control-group">
                    <label class="control-label">Text Shadow (0-3)</label>
                    <input type="number" id="text-shadow-strength" value="1" min="0" max="3" step="0.1">
                </div>

                <div class="control-group">
                    <label class="control-label" data-i18n="windSpeedUnit">Wind Speed Unit</label>
                    <select id="wind-speed-unit-select">
                        <option value="ms">m/s</option>
                        <option value="kmh">km/h</option>
                    </select>
                </div>
                <div class="control-group">
                    <label class="control-label" data-i18n="dailyForecastDays">Daily Forecast Days</label>
                    <input type="number" id="daily-forecast-days" value="5" min="1" max="14" step="1">
                </div>
                <div class="control-group">
                    <label class="control-label" data-i18n="hourlyForecastHours">Hourly Forecast Hours</label>
                    <input type="number" id="hourly-forecast-hours" value="5" min="1" max="24" step="1">
                </div>

                <div class="checkbox-group">
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-feels-like" checked>
                        <span class="checkbox-text" data-i18n="feelsLike">Feels Like Temperature</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-min-temp" checked>
                        <span class="checkbox-text" data-i18n="minTemp">Min Temperature</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-humidity">
                        <span class="checkbox-text" data-i18n="humidity">Humidity</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-wind">
                        <span class="checkbox-text" data-i18n="windSpeed">Wind Speed</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-wind-direction">
                        <span class="checkbox-text" data-i18n="windDirection">Wind Direction</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-wind-gust">
                        <span class="checkbox-text" data-i18n="windGust">Wind Gust</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-hourly-forecast">
                        <span class="checkbox-text" data-i18n="hourlyForecast">Hourly Forecast</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-daily-forecast">
                        <span class="checkbox-text" data-i18n="dailyForecast">Daily Forecast</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-sunrise-sunset">
                        <span class="checkbox-text" data-i18n="sunriseSunset">Sunrise/Sunset</span>
                    </label>
                    <label class="checkbox-item">
                        <input type="checkbox" id="show-clock">
                        <span class="checkbox-text" data-i18n="showClock">Clock</span>
                    </label>
                </div>
                <div class="control-group">
                    <label class="control-label" data-i18n="clockPosition">Clock Position</label>
                    <select id="clock-position-select">
                        <option value="top" data-i18n="clockPositionTop">Top right</option>
                        <option value="details" data-i18n="clockPositionDetails">Details row</option>
                    </select>
                </div>
                <div class="control-group">
                    <label class="control-label" data-i18n="clockFormat">Clock Format</label>
                    <select id="clock-format-select">
                        <option value="24h" data-i18n="clockFormat24h">24-hour</option>
                        <option value="12h" data-i18n="clockFormat12h">12-hour (AM/PM)</option>
                    </select>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons">
                <button class="btn btn-primary" onclick="updateCard()" data-i18n="updateCard">
                    🔄 Update Card
                </button>
                <div style="height: 12px;"></div>
                <button class="btn btn-demo" id="demo-btn" onclick="toggleDemoMode()" data-i18n="startDemo">
                    🎬 Start Demo Mode
                </button>
            </div>
        </div>
```

- [ ] **Step 3: Verify every original element id survived the restructure**

Run:
```bash
for id in language-select condition-select temperature-input humidity-input wind-input wind-bearing-input time-select time-slider-container time-display time-slider animation-speed-select time-animation-btn name-input layout-select height-input overlay-opacity-input text-shadow-strength wind-speed-unit-select daily-forecast-days hourly-forecast-hours show-feels-like show-min-temp show-humidity show-wind show-wind-direction show-wind-gust show-hourly-forecast show-daily-forecast show-sunrise-sunset show-clock clock-position-select clock-format-select demo-btn card-container; do
  count=$(grep -c "id=\"$id\"" demo.html)
  [ "$count" -eq 1 ] || echo "MISMATCH: $id appears $count times"
done
```
Expected: no output (every id from the original file appears exactly once).

- [ ] **Step 4: Commit**

```bash
git add demo.html
git commit -m "feat: restructure demo page settings into tabs"
```

---

### Task 5: Wire up tab switching

**Files:**
- Modify: `demo.html` — insert a new `initTabs()` function after the existing `applyTranslations()` function (currently ends at line 813, right before the `// STATE & CONFIGURATION` comment), and call it from the `DOMContentLoaded` handler.

**Interfaces:**
- Consumes: `.tab-button[data-tab]` / `.tab-panel[data-tab-panel]` markup and the `$$()` helper (`const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];`, already defined at the top of the script block) produced by Task 4.
- Produces: `initTabs()` — a zero-argument function with no return value, safe to call once on `DOMContentLoaded`.

- [ ] **Step 1: Add the `initTabs()` function**

Find (currently `demo.html:803-814`):

```javascript
function applyTranslations() {
          $$('[data-i18n]').forEach(el => {
            el.textContent = window.i18n.t(`demo.${el.dataset.i18n}`);
          });

          $$('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = window.i18n.t(`demo.${el.dataset.i18nPlaceholder}`);
          });

          document.title = window.i18n.t('demo.pageTitle');
        }

        // ============================================================================
        // STATE & CONFIGURATION
        // ============================================================================
```

Replace with:

```javascript
function applyTranslations() {
          $$('[data-i18n]').forEach(el => {
            el.textContent = window.i18n.t(`demo.${el.dataset.i18n}`);
          });

          $$('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = window.i18n.t(`demo.${el.dataset.i18nPlaceholder}`);
          });

          document.title = window.i18n.t('demo.pageTitle');
        }

        // ============================================================================
        // TABS
        // ============================================================================
        function initTabs() {
            const buttons = $$('.tab-button');
            const panels = $$('.tab-panel');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const target = button.dataset.tab;

                    buttons.forEach(b => b.classList.toggle('active', b === button));
                    panels.forEach(p => {
                        p.hidden = p.dataset.tabPanel !== target;
                    });
                });
            });
        }

        // ============================================================================
        // STATE & CONFIGURATION
        // ============================================================================
```

- [ ] **Step 2: Call `initTabs()` from the `DOMContentLoaded` handler**

Find (currently `demo.html:1192-1197`):

```javascript
        document.addEventListener('DOMContentLoaded', () => {
            const timeSlider = document.getElementById('time-slider');
            const timeDisplay = document.getElementById('time-display');
            const timeSelect = document.getElementById('time-select');
            const sliderContainer = document.getElementById('time-slider-container');
```

Replace with:

```javascript
        document.addEventListener('DOMContentLoaded', () => {
            initTabs();

            const timeSlider = document.getElementById('time-slider');
            const timeDisplay = document.getElementById('time-display');
            const timeSelect = document.getElementById('time-select');
            const sliderContainer = document.getElementById('time-slider-container');
```

- [ ] **Step 3: Commit**

```bash
git add demo.html
git commit -m "feat: wire up tab switching on demo page"
```

---

### Task 6: Full manual verification

**Files:** none — this task only runs and inspects the page; no code changes.

**Interfaces:** none.

- [ ] **Step 1: Serve the page locally**

Run (from the repo root, in a separate terminal/background process):
```bash
python3 -m http.server 8765
```
Then open `http://localhost:8765/demo.html` in a browser. (The card must be served over `http://`, not opened via `file://`, because it uses ES module imports — see the existing error-message copy in the file for confirmation this is a known constraint.)

- [ ] **Step 2: Verify the light theme**

Check: page background is solid light gray (no blue/purple gradient visible). Both the card-preview box and the settings box are white with a soft shadow (no glassy blur, no heavy dark shadow). "Configuration" heading has no gear emoji.

- [ ] **Step 3: Verify the tab bar**

Check: five tabs are visible in a horizontal row — Quick Presets / Language / Weather Condition / Time of Day / Display Options. "Quick Presets" is active by default (blue text, blue underline). Click each of the other four tabs in turn — each click shows exactly that tab's controls and hides all others; no other tab's controls remain visible or interactable while hidden.

- [ ] **Step 4: Verify there is no inner scrollbar**

Click into "Display Options" (the tab with the most controls — 10 checkboxes plus several inputs). Check: the settings panel is exactly as tall as its content; there is no scrollbar inside the white settings box. If the content is taller than the viewport, only the browser's own page scrollbar appears.

- [ ] **Step 5: Verify existing functionality is unbroken**

Run through each, confirming the live card preview updates as expected in every case (this exercises the untouched JS, proving Task 4's id-preserving restructure didn't break any wiring):
- Click a Quick Preset card (e.g. "Rainy") → card updates to rainy conditions.
- Switch the Language dropdown to Russian → tab labels and card content re-translate to Russian.
- Switch to the Weather Condition tab, change Condition/Temperature/Humidity/Wind → card updates on "Update Card" click.
- Switch to the Time of Day tab, select "Manual Control", drag the time slider → card's lighting updates live.
- Switch to the Display Options tab, change Layout to "Minimal (compact horizontal)" → card switches to the compact horizontal layout.
- Click "Start Demo Mode" → card cycles through weather conditions every 3 seconds; click again to stop.

- [ ] **Step 6: Verify responsive behavior**

Resize the browser window to below 1200px width. Check: layout collapses to a single column — card preview on top, settings panel (with its tab bar) below, full width. Resize further to below 768px. Check: the settings panel is no longer sticky (`position: static`) and the tab bar either wraps or scrolls horizontally without breaking the page layout or overlapping other content.

- [ ] **Step 7: Check for console errors**

Open the browser devtools console. Check: no new JavaScript errors or warnings appear that weren't present before this change (reload the page and click through all 5 tabs and the demo mode toggle while watching the console).

- [ ] **Step 8: Confirm the branch history**

Run: `git log --oneline feature/demo-page-redesign -8`
Expected: the docs commit from brainstorming, followed by the five commits from Tasks 1–5 (`chore: switch demo page to light theme base colors`, `chore: switch demo page panel chrome to light theme`, `chore: switch demo page form controls to light theme`, `feat: restructure demo page settings into tabs`, `feat: wire up tab switching on demo page`).

No commit for this task — it's verification-only and all code changes are already committed in Tasks 1–5.

---

## Self-Review Notes

- **Spec coverage:** Visual Language (Task 1 + 3), Layout (Task 2 + 4), Interaction (Task 5), Testing (Task 6), Scope boundaries (enforced throughout — no `src/**` edits, no new i18n keys, no icon changes in any task) — every spec section maps to at least one task.
- **Placeholder scan:** no TBD/TODO; every step shows complete before/after code.
- **Type/name consistency:** `dataset.tab` / `data-tab` and `dataset.tabPanel` / `data-tab-panel` are used identically in Task 4 (markup) and Task 5 (JS) — HTML `data-tab-panel` maps to JS `element.dataset.tabPanel` per the standard camelCase conversion of dataset attribute names, verified consistent throughout.
