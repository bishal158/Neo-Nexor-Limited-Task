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
- [x] Reviewed `task-requirement.md` thoroughly and established the implementation plan.
- [x] Scaffolding: Created all folders and starter files for `(home)`, `projects`, `projects/[id]`, `services`, `about`, `contact`, `components/layout`, `components/ui`, `data`, and `types`.
- [x] Standardized all component filenames to kebab-case.
- [x] Defined TypeScript interfaces (`types/project.ts`, `types/service.ts`, `types/navigation.ts`).
- [x] Defined luxury styling tokens, dark palette, glassmorphism, and custom scrollbar in `app/globals.css`.
- [x] Prepared data structures for `data/services.ts` (8 core services), `data/team.ts`, `data/testimonials.ts`, and planned 9 projects for `data/projects.ts`.

## 4. Next Steps (To Resume Tomorrow)
1. Populate `data/projects.ts` with the 9 planned interior design projects.
2. Build the global `components/layout/header.tsx` (glassmorphic navbar, active indicator, mobile drawer) and `components/layout/footer.tsx` (Mohakhali DOHS info).
3. Implement `app/(home)/page.tsx` and its 8 colocated section components.
4. Implement `app/projects/page.tsx` (category filtering + project cards) and `app/projects/[id]/page.tsx` (dynamic case study details).
5. Implement `app/services/page.tsx`, `app/about/page.tsx`, and `app/contact/page.tsx` (with interactive consultation form).
