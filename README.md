# Neo Interior Studio — Architectural Portfolio & Consultation Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

A production-grade, material-led architectural interior design web application developed for **Neo Interior Studio (Neo Nexor Ltd)**. Crafted with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, **React Hook Form**, and **Lucide React**, implementing the tactile, minimal design token system specified in `design.md`.

---

## 🏛️ 1. Project Overview

**Neo Interior Studio** is the interior architecture and spatial design division of **Neo Nexor Ltd**, based in Mohakhali DOHS, Dhaka. The platform showcases high-end residential, workplace, and commercial interior commissions, communicates the studio's architectural methodology, and facilitates direct client consultations.

### Brand Specifications
| Attribute | Official Details |
| :--- | :--- |
| **Brand Name** | Neo Interior Studio |
| **Parent Company** | Neo Nexor Ltd |
| **Industry Category** | Architectural Interior Design & Turnkey Spatial Execution |
| **Studio Address** | House 252 (3rd Floor), Road 18 (Lake Road), Mohakhali DOHS, Dhaka, Bangladesh |
| **Direct Contact** | +880 1627 277284 |
| **Official Email** | md@neonexor.com |
| **Official Website** | [www.neonexor.com](https://www.neonexor.com) |
| **Design Ethos** | Tactile calm, honest materiality (limewash, fluted stone, walnut, unlacquered metals), timeless restraint |

---

## 🛠️ 2. Technologies Used

| Technology / Library | Version | Role & Purpose |
| :--- | :--- | :--- |
| **Next.js** | `^16.3.5` | App Router, Server & Client Components, Turbopack, Dynamic SSG (`generateStaticParams`), Image Optimization |
| **React** | `^19.0.0` | Core UI engine, React Hooks, Concurrent Features |
| **TypeScript** | `^5.0.0` | End-to-end static type safety, domain interfaces (`types/project.ts`, `types/service.ts`, `types/navigation.ts`) |
| **Tailwind CSS** | `^4.0.0` | Modern CSS styling using native `@theme inline` CSS variables and tactile design tokens |
| **Framer Motion** | `^12.0.0` | Hardware-accelerated micro-animations: mobile navigation sidebar drawer, animated FAQ accordion, and floating scroll-to-top button |
| **React Hook Form** | `^7.54.0` | Performant form state management and input validation with zero unnecessary re-renders |
| **Lucide React** | `^0.475.0` | Minimal, consistent architectural icon set |
| **next/font** | Built-in | Zero-layout-shift Google Font loading (`Fraunces` optical display serif + `Inter` neutral sans) |

---

## 💻 3. Setup and Run Instructions

### Prerequisites
- **Node.js**: `v18.18.0` or higher (Node `v20.x` or `v22.x` recommended)
- **Package Manager**: `npm` (v9+), `pnpm`, or `yarn`
- **Git**

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bishal158/Neo-Nexor-Limited-Task.git
   cd Neo-Nexor-Limited-Task
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
   This compiles and statically pre-renders all pages (including all dynamic project detail case studies).

5. **Start the production server:**
   ```bash
   npm run start
   ```

6. **Lint the codebase:**
   ```bash
   npm run lint
   ```

---

## 📁 4. Architecture & Directory Structure

This project enforces strict **Route Colocation** and clean component separation:

```
neo_interior_studio/
├── app/
│   ├── (home)/                        # Home route group
│   │   ├── _components/               # 8 private colocated section components
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-preview.tsx
│   │   │   ├── featured-projects.tsx
│   │   │   ├── services-overview.tsx
│   │   │   ├── design-process.tsx
│   │   │   ├── why-choose-us.tsx
│   │   │   ├── testimonials.tsx
│   │   │   └── consultation-cta.tsx
│   │   └── page.tsx
│   ├── projects/                      # Projects portfolio listing
│   │   ├── [id]/                      # Dynamic SSG case study page
│   │   │   ├── _components/           # Project gallery, hero, specs, related projects
│   │   │   └── page.tsx
│   │   ├── _components/               # Project card, category filter, stats banner
│   │   ├── loading.tsx                # Skeleton loader
│   │   └── page.tsx
│   ├── services/                      # Services directory
│   │   ├── _components/               # Service card, process roadmap, animated FAQ
│   │   ├── loading.tsx                # Skeleton loader
│   │   └── page.tsx
│   ├── about/                         # About directory
│   │   ├── _components/               # Studio story, vision/mission, milestones, team
│   │   ├── loading.tsx                # Skeleton loader
│   │   └── page.tsx
│   ├── contact/                       # Contact & consultation
│   │   ├── _components/               # Consultation form, contact card, location map
│   │   ├── loading.tsx                # Skeleton loader
│   │   └── page.tsx
│   ├── globals.css                    # Tailwind CSS v4 tokens & tactile theme definition
│   └── layout.tsx                     # Root layout, fonts, header, footer, scroll-to-top
├── components/
│   ├── layout/                        # Global header, mobile drawer sidebar, footer
│   │   ├── _components/
│   │   │   ├── mobile-sidebar.tsx     # Framer Motion animated navigation sheet
│   │   │   └── nav-links.ts
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── ui/                            # Reusable design primitives
│       ├── button.tsx                 # Tactile button primitive
│       ├── common-fieldset.tsx        # Accessible form fieldset wrapper
│       ├── section-heading.tsx        # Standardized editorial section heading
│       └── scroll-to-top.tsx          # Floating animated scroll-to-top button
├── data/                              # Centralized domain mock datasets
│   ├── projects.ts                    # 9 curated interior projects with rich galleries
│   ├── services.ts                    # 8 comprehensive design disciplines
│   ├── testimonials.ts                # Client feedback & star ratings
│   └── team.ts                        # Studio leadership profiles
└── types/                             # Shared TypeScript interfaces
    ├── project.ts
    ├── service.ts
    └── navigation.ts
```

---

## ✨ 5. Key Pages & Features Implemented

### 1. Home Page (`/`)
- **Editorial Hero**: Typographic headline, value proposition, quick metrics (`140+ Spaces`, `14 yrs Mastery`, `100% Turnkey`), and dual action buttons.
- **Studio Philosophy**: Material manifesto detailing the studio's architectural approach.
- **Featured Works**: Curated showcase with image hover zoom and category tags.
- **Service Capabilities**: Overview of core disciplines linking directly to detailed services.
- **Methodology Roadmap**: 4-phase sequential workflow (Diagnostics, 3D Concept, Technical Detailing, Turnkey Handover).
- **Why Choose Us**: Value pillars (Material Honesty, Turnkey Certainty, Acoustic Wellness).
- **Client Perspectives**: Social proof cards with 5-star ratings.
- **Consultation CTA**: High-contrast walnut band with immediate booking trigger.

### 2. Projects Portfolio (`/projects`)
- **Interactive Typology Filtering**: Filter across 9 categories (`Residential`, `Living Room`, `Bedroom`, `Kitchen`, `Office`, `Restaurant`, `Commercial`, `Luxury Interior`, `All`).
- **Dynamic Count Badges**: Real-time project counts per typology.
- **Portfolio Stats Banner**: Milestone counters for documented case studies, completed commissions, and curated floor area.
- **Empty State Fallback**: Graceful message with reset action when no projects match.

### 3. Dynamic Case Study Page (`/projects/[id]`)
- **SSG Static Generation**: Uses `generateStaticParams` for pre-rendered, SEO-optimized project pages.
- **Mosaic Photo Gallery**: Multi-image architectural layout with interactive full-screen lightbox modal.
- **Project Specifications**: Metadata bar displaying Client, Location, Area, and Year.
- **Design Narrative**: Architectural context, spatial strategy, and design concept quote.
- **Scope & Materials**: Checklist of deliverables alongside curated noble material palette tags.
- **Contextual Related Projects**: Auto-suggests projects within the same category.

### 4. Services Page (`/services`)
- **8 Comprehensive Disciplines**: In-depth presentation of Residential, Commercial, Office, Restaurant, Space Planning, 3D Visualization, Furniture/Lighting, and Turnkey Renovation.
- **Deliverables Breakdown**: Detailed checklist of exact client deliverables per service.
- **Engagement Roadmap**: Visual milestone timeline from survey to key handover.
- **Animated FAQ Accordion**: Smooth Framer Motion height expansion and collapse answering client pricing, timelines, and fabrication questions.

### 5. About Us Page (`/about`)
- **Studio Origins**: Background on Neo Nexor Ltd and its architectural vision in Mohakhali DOHS.
- **Vision, Mission & Guiding Principles**: 4 core spatial commitments.
- **Milestones & Accolades**: 140+ completed spaces, 12 design accolades, 99.4% client retention.
- **Leadership Profiles**: Multidisciplinary team bios and roles.

### 6. Contact & Consultation Page (`/contact`)
- **Interactive Consultation Form**: Built with `react-hook-form` and reusable `CommonFieldset`, featuring required field validation, telephone formatting, and project type selection.
- **URL Parameter Prefill**: Supports pre-filling project name (`?project=...`) or service type (`?service=...`) directly from other pages.
- **Submission Feedback**: Interactive loading state followed by a clear confirmation screen.
- **Atelier Details**: Official Mohakhali DOHS address, direct phone, and email.
- **Interactive Map**: Google Maps embed of Mohakhali DOHS (Lake Road) with a direct "Get Directions" trigger.

### 7. Global Polish & Utilities
- **Glassmorphic Navigation**: Sticky header with active route indicators and mobile drawer sheet.
- **Scroll-to-Top Button**: Smooth floating button with scroll-depth detection and Framer Motion animation.
- **Skeleton Loaders**: Custom `loading.tsx` skeletons on all routes matching the page layout to eliminate layout shift.

---

## 🎨 6. Design System & Palette

Implemented via Tailwind CSS v4 `@theme inline` in `app/globals.css`:

```css
:root {
  --color-base: #F6F3EE;       /* Warm plaster / limewash canvas */
  --color-surface: #FFFFFF;    /* Clean elevated cards & forms */
  --color-ink: #221E1A;        /* Near-black primary text */
  --color-ink-muted: #6B6259;  /* Secondary text & metadata */
  --color-accent: #8A6A4B;     /* Walnut timber brown */
  --color-accent-deep: #4E3B2A;/* Deep espresso walnut for dark bands */
  --color-line: #E4DDD2;       /* 1px architectural hairline dividers */
  --color-highlight: #B08D57;  /* Muted brass accent */
}
```

- **Typography**: `Fraunces` optical display serif for elegant headlines; `Inter` for crisp body copy.
- **Hairline Aesthetic**: 1px borders (`border-line`) paired with rounded corners (`rounded-[4px]`) inspired by tactile architectural drawings.

---

## 📝 7. Relevant Project Notes

1. **Tailwind CSS v4 Integration**:
   - Uses Tailwind v4's new CSS-first configuration via `@theme inline`.
   - The token `--color-sand: var(--color-base)` is mapped to avoid collision with Tailwind's standard `text-base` font size utility.
2. **Dynamic SSG & Image Security**:
   - Unsplash remote domain patterns are registered in `next.config.ts` to allow high-resolution architectural imagery.
   - All dynamic case study routes are statically pre-rendered via `generateStaticParams`.
3. **Zero Layout Shift (CLS)**:
   - Dedicated `loading.tsx` skeletons exist for `/projects`, `/services`, `/about`, and `/contact`, matching page dimensions and paddings.
4. **Mobile Responsiveness**:
   - Engineered mobile-first with systematic padding tokens (`py-3 sm:py-6 md:py-12`), proportional typography scales, and a 60fps sliding navigation drawer.

---

## 📄 License & Attribution

Developed for the frontend evaluation assignment for **Neo Interior Studio (Neo Nexor Ltd)**.  
All brand details, locations, and architectural specifications reflect the official studio profile at Mohakhali DOHS, Dhaka.

© 2026 Neo Interior Studio • Neo Nexor Ltd. All rights reserved.
