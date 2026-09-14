<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Context & Agent Memory: Neo Interior Studio

## 1. Project Specifications
- **Client/Brand**: Neo Interior Studio (Neo Nexor Ltd)
- **Role**: Frontend Developer Interview Assignment (task-requirement.md)
- **Stack**: Next.js 16 (App Router), Tailwind CSS v4, Lucide React
- **Official Details**: House 252 (3rd Floor), Road 18 (Lake Road), Mohakhali DOHS | Phone: +880 1627 277284 | Email: md@neonexor.com

## 2. Mandatory Architectural Rules
- **Route Colocation**: Every page has its own private `_components` and `_types` folders (e.g., `app/(home)/_components/`, `app/projects/_components/`, etc.).
- **Component File Naming**: All component file names MUST be lowercase kebab-case (e.g., `project-card.tsx`, `consultation-form.tsx`, `header.tsx`). Do NOT use PascalCase for filenames.
- **Global Components**: Only truly global shared primitives reside in `components/ui/` and `components/layout/`.
- **Data & Types**: Centralized mock datasets reside in `data/`, shared interfaces in `types/`.

## 3. Current Progress (Completed)
- [x] Reviewed `task-requirement.md` and `design.md` thoroughly and established the implementation plan.
- [x] Scaffolding: Created all folders and starter files for `(home)`, `projects`, `projects/[id]`, `services`, `about`, `contact`, `components/layout`, `components/ui`, `data`, and `types`.
- [x] Standardized all component filenames to kebab-case.
- [x] Defined TypeScript interfaces (`types/project.ts`, `types/service.ts`, `types/navigation.ts`).
- [x] Implemented tactile design tokens from `design.md` (`--color-base: #F6F3EE`, `--color-surface: #FFFFFF`, `--color-ink: #221E1A`, `--color-accent: #8A6A4B`, `--color-accent-deep: #4E3B2A`, `--color-line: #E4DDD2`, `--color-highlight: #B08D57`) and typography (Fraunces serif & Inter sans) in `app/globals.css` and `app/layout.tsx`.
- [x] Configured Unsplash remote patterns in `next.config.ts`.
- [x] Populated `data/projects.ts` (9 rich curated projects), `data/services.ts` (8 core services), `data/testimonials.ts` (5 client reviews), and `data/team.ts` (4 leadership profiles).
- [x] Built global layout: `components/layout/header.tsx` (glassmorphic sticky nav, active link indicator, mobile drawer) and `components/layout/footer.tsx` (official Mohakhali DOHS details, newsletter, legal links).
- [x] Built core UI: `components/ui/button.tsx` and `components/ui/section-heading.tsx` (using Tailwind native `container` utility).
- [x] Implemented `app/(home)/page.tsx` and all 8 colocated section components.
- [x] Implemented `app/projects/page.tsx` (category filtering + project cards + milestone stats) and `app/projects/[id]/page.tsx` (specs, narrative, mosaic gallery with fullscreen modal, related projects).
- [x] Implemented `app/services/page.tsx` (8 comprehensive service cards, engagement process, interactive FAQ).
- [x] Implemented `app/about/page.tsx` (studio story, vision/mission, milestones, team profiles).
- [x] Implemented `app/contact/page.tsx` (contact info card, interactive consultation form with validation & success state, embedded location map).
- [x] Authored comprehensive documentation in `README.md`.

## 4. Current Status
- All 6 pages, 8 services, 9 projects, interactive consultation form, image galleries, and design token requirements from `task-requirement.md` and `design.md` are fully implemented.

