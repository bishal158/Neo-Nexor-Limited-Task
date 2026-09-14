# Neo Interior Studio — Portfolio Website

An architectural interior design company portfolio website built for **Neo Interior Studio (Neo Nexor Ltd)**. Developed with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **Lucide React**, following the design token scaffold specified in `design.md`.

---

## 🏛️ Brand & Project Overview

| Attribute | Details |
| :--- | :--- |
| **Brand Name** | Neo Interior Studio |
| **Parent Company** | Neo Nexor Ltd |
| **Category** | Interior Design & Architecture |
| **Studio Address** | House 252 (3rd Floor), Road 18 (Lake Road), Mohakhali DOHS, Dhaka |
| **Contact Phone** | +880 1627 277284 |
| **Contact Email** | md@neonexor.com |
| **Website** | [www.neonexor.com](https://www.neonexor.com) |
| **Brand Personality** | Modern, Elegant, Minimal, Tactile, Premium, Trustworthy |

---

## ✨ Key Features

1. **Home Page (`/`)**:
   - Editorial Hero with key metrics and dual CTAs.
   - Studio philosophy & manifesto preview.
   - Curated featured projects with hover interactions.
   - Core capabilities overview.
   - 4-step architectural methodology (Diagnostics, 3D Concept, Technical Detailing, Turnkey Handover).
   - "Why Choose Us" distinction pillars.
   - Client perspectives & testimonials with star ratings.
   - Dark accent consultation CTA band (`#4E3B2A`).

2. **Projects / Portfolio Page (`/projects`)**:
   - Interactive category filtering across 8+ typologies (`Residential`, `Living Room`, `Bedroom`, `Kitchen`, `Office`, `Restaurant`, `Commercial`, `Luxury Interior`).
   - Project counter per category.
   - Tactile cards with 1px hairline borders and image hover scaling.
   - Studio portfolio milestone stats banner.

3. **Dynamic Project Details Page (`/projects/[id]`)**:
   - High-resolution mosaic photo gallery with interactive fullscreen lightbox viewer.
   - Design concept and architectural narrative.
   - Scope of work checklist and noble material palette tags.
   - Specifications bar (Client, Location, Area, Year).
   - Contextual related projects navigation.
   - Direct pre-filled consultation request link.

4. **Services Page (`/services`)**:
   - 8 core interior disciplines:
     1. Residential Interior Design
     2. Commercial Interior Design
     3. Office Interior Design
     4. Restaurant & Café Design
     5. Space Planning & Architecture
     6. Furniture & Lighting Selection
     7. 3D Visualization & VR Walkthroughs
     8. Interior Renovation & Turnkey Execution
   - Detailed deliverables breakdown per service.
   - 4-phase engagement roadmap.
   - Interactive accordion FAQ.

5. **About Us Page (`/about`)**:
   - Studio origins & philosophy by Neo Nexor Ltd.
   - Vision, mission, and 4 foundational architectural principles.
   - Studio milestones & accolades (140+ executed commissions, 14 years practice).
   - Multidisciplinary leadership team profiles.

6. **Contact & Consultation Page (`/contact`)**:
   - Official Mohakhali DOHS atelier details, phone, email, and studio hours.
   - Interactive consultation form with client validation, loading state, and confirmation screen.
   - Query parameter prefill support (e.g. `?project=...` or `?service=...`).
   - Embedded interactive location map of Mohakhali DOHS (Lake Road) with Google Maps directions.

---

## 🎨 Design System (`design.md`)

- **Color Palette (Tactile, Material-Led)**:
  - `--color-base`: `#F6F3EE` (warm plaster / limewash page background)
  - `--color-surface`: `#FFFFFF` (cards, forms, elevated panels)
  - `--color-ink`: `#221E1A` (warm near-black primary text)
  - `--color-ink-muted`: `#6B6259` (secondary text, meta, captions)
  - `--color-accent`: `#8A6A4B` (walnut timber brown for primary CTAs and active states)
  - `--color-accent-deep`: `#4E3B2A` (deep walnut for dark section backgrounds)
  - `--color-line`: `#E4DDD2` (1px hairline borders and dividers)
  - `--color-highlight`: `#B08D57` (brass highlight for active badges and special accents)
- **Typography**:
  - **Display / Headings**: Fraunces (refined optical display serif)
  - **Body / Functional UI**: Inter (clean neutral sans)
- **Radii & Borders**:
  - Small, consistent 4–6px radius (`rounded-[4px]`).
  - 1px hairline borders (`border-line`) over soft drop shadows.

---

## 🏗️ Architecture & Conventions

- **Route Colocation**: Each route encapsulates private components in its local `_components/` directory (e.g. `app/(home)/_components/`, `app/projects/_components/`, etc.).
- **Component File Naming**: Strictly lowercase kebab-case (`project-card.tsx`, `consultation-form.tsx`, `header.tsx`).
- **Global Layout**: `components/layout/` (`header.tsx`, `footer.tsx`).
- **UI Primitives**: `components/ui/` (`button.tsx`, `container.tsx`, `section-heading.tsx`).
- **Centralized Data**: `data/` (`projects.ts`, `services.ts`, `testimonials.ts`, `team.ts`).

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### 2. Installation
```bash
git clone <repository-url>
cd neo_interior_studio
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Deployment

This application is ready for zero-config deployment on **Vercel** or **Netlify**:
1. Push the repository to GitHub.
2. Import the project in Vercel / Netlify.
3. Next.js App Router and image optimization work out of the box.

---

© 2026 Neo Interior Studio • A Brand of Neo Nexor Ltd. All rights reserved.
