# Neo Interior Studio — Design Token Scaffold

Brand personality: Modern, Elegant, Minimal, Premium, Professional, Trustworthy.
Direction: warm, material-led palette (plaster, stone, walnut, brass) instead of a generic cream/terracotta or dark-mode SaaS look — it should feel like it belongs to a physical, tactile interiors studio, not a tech product.

---

## 1. Color Palette

| Token | Hex | Role |
|---|---|---|
| `--color-base` | `#F6F3EE` | Page background — warm plaster/limewash, not pure white |
| `--color-surface` | `#FFFFFF` | Cards, forms, elevated panels |
| `--color-ink` | `#221E1A` | Primary text — warm near-black (not `#000`/`#111`) |
| `--color-ink-muted` | `#6B6259` | Secondary text, captions, meta |
| `--color-accent` | `#8A6A4B` | Walnut/timber brown — primary accent, CTAs, active states |
| `--color-accent-deep` | `#4E3B2A` | Hover/pressed state of accent, dark section backgrounds |
| `--color-line` | `#E4DDD2` | Hairline borders, dividers |
| `--color-highlight` | `#B08D57` | Brass — sparing use only (icons, small details, focus ring) |

**Usage rules**
- `--color-base` and `--color-surface` do almost all the work; the page should read as quiet and neutral.
- `--color-accent` (walnut) carries CTAs and links — used with restraint, not on every card.
- `--color-highlight` (brass) is the one "bold" accent — spend it in a single recurring detail (e.g. active filter pill, key stat, or the CTA button only), not scattered across icons and borders.
- Avoid rgba(0,0,0,.1) soft shadows on every card; prefer a 1px `--color-line` border, use shadow only on true overlays (mobile menu, modals).

```css
:root {
  --color-base: #F6F3EE;
  --color-surface: #FFFFFF;
  --color-ink: #221E1A;
  --color-ink-muted: #6B6259;
  --color-accent: #8A6A4B;
  --color-accent-deep: #4E3B2A;
  --color-line: #E4DDD2;
  --color-highlight: #B08D57;
}
```

Tailwind (extend theme):
```js
colors: {
  base: '#F6F3EE',
  surface: '#FFFFFF',
  ink: { DEFAULT: '#221E1A', muted: '#6B6259' },
  accent: { DEFAULT: '#8A6A4B', deep: '#4E3B2A' },
  line: '#E4DDD2',
  highlight: '#B08D57',
}
```

---

## 2. Typography

Two families, clearly distinct roles — a refined serif for personality, a clean sans for utility. Avoids the generic "warm cream + high-contrast serif + terracotta" combo by pairing an editorial serif with a technical/neutral sans rather than a rounded default.

| Role | Typeface | Notes |
|---|---|---|
| Display / Headings | **Fraunces** (serif) | Set at optical size "display", slightly negative letter-spacing on large sizes. Used for H1–H3, hero statements, project names. |
| Body / UI | **Inter** or **General Sans** (sans) | Body copy, nav, buttons, form labels, meta text. |

**Type scale** (base 16px, ratio ~1.25)

| Token | Size | Line-height | Use |
|---|---|---|---|
| `--text-display` | 56–72px | 1.05 | Hero headline |
| `--text-h1` | 40px | 1.15 | Page titles |
| `--text-h2` | 28px | 1.2 | Section titles |
| `--text-h3` | 20px | 1.3 | Card/project titles |
| `--text-body` | 16px | 1.6 | Paragraph copy |
| `--text-small` | 14px | 1.5 | Meta, captions, labels |

**Rules**
- Keep body line length under ~75 characters.
- No tracked-out ALL CAPS eyebrow labels above every section — use size/weight/color contrast instead to establish hierarchy.
- Serif is for words that should feel considered (headlines, project names, quotes); sans for everything functional (nav, buttons, forms, filters).
- Weight range: Fraunces 400/500 for most headings, 300 (light) only for large display hero text; Inter 400 body, 500 for emphasis/buttons, 600 sparingly for nav-active state.

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');

:root {
  --font-display: 'Fraunces', serif;
  --font-body: 'Inter', sans-serif;
}
```

Tailwind:
```js
fontFamily: {
  display: ['Fraunces', 'serif'],
  sans: ['Inter', 'sans-serif'],
}
```

---

## 3. Quick Application Guide

- **Hero**: base background, serif display headline, one project image full-bleed or offset — not a centered gradient card.
- **Buttons (primary)**: `--color-accent` fill, `--color-surface` text, no rounded-pill default — use a small consistent radius (4–6px) matched across the whole site.
- **Cards (projects/services)**: `--color-surface` on `--color-base`, 1px `--color-line` border, no drop shadow at rest; on hover, image scale or caption reveal rather than a shadow lift.
- **Dark section (e.g. CTA/consultation band)**: `--color-accent-deep` background, `--color-base` text, brass (`--color-highlight`) used only for the button or a single accent line.
