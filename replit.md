# Caffeine Portfolio App

A full-width, animated portfolio website for Ashish Sah. Built with React 19, Vite, TypeScript, and Tailwind CSS. Exported from [Caffeine](https://caffeine.ai/) and refactored with reusable components and a full-width layout.

## Project Structure

```
src/
  frontend/
    src/
      components/
        ui/                   # Shared reusable components
          Badge.tsx           # Pill/badge with blue, muted, success, ghost variants
          Card.tsx            # Animated card with hover effects and viewport animation
          Section.tsx         # Full-width section wrapper with max-w-7xl container
          SectionHeader.tsx   # Section heading with blue accent word + optional subtitle
          index.ts            # Barrel export
        portfolio/            # Page sections
          Navbar.tsx
          Hero.tsx
          Skills.tsx
          Experience.tsx
          Projects.tsx
          Certifications.tsx
          Achievements.tsx
          Footer.tsx
          SectionDivider.tsx
      data/
        portfolioData.ts      # All portfolio content (edit here to customize)
      mocks/
        backend.ts            # Mock backend for dev (used when VITE_USE_MOCK=true)
      hooks/                  # React Query hooks for data fetching
      App.tsx                 # Root layout — no card wrapper, full-width
      main.tsx
      index.css               # Design tokens + global styles + component CSS
  backend/                    # Motoko ICP canister (not used in Replit)
```

## Architecture Decisions

- **Full-width layout**: Removed the boxed card wrapper. All sections use `max-w-7xl` containers.
- **Reusable components**: `Card`, `Badge`, `Section`, `SectionHeader` eliminate repetition.
- **Mock backend**: `VITE_USE_MOCK=true` loads `src/mocks/backend.ts` which serves static data from `portfolioData.ts`. No ICP canister needed.
- **Design tokens**: CSS variables defined in `:root {}` in `index.css` for consistent theming.
- **Alternating sections**: `section-alt` class provides subtle background variation for visual rhythm.

## Running in Replit

Workflow command:
```
cd src/frontend && VITE_USE_MOCK=true pnpm exec vite --port 5000 --host 0.0.0.0
```

## How to Run Locally

Requirements: Node.js v18+, pnpm v8+

```bash
# Install dependencies from root
pnpm install

# Start dev server
cd src/frontend && VITE_USE_MOCK=true pnpm exec vite

# Open http://localhost:5173
```

## Deployment

Configured as a static deployment:
- Build: `cd src/frontend && VITE_USE_MOCK=true pnpm exec vite build`
- Public dir: `src/frontend/dist`

## Tech Stack

- React 19, Vite 5, TypeScript
- Tailwind CSS v3, Radix UI
- TanStack Query v5, Motion (Framer Motion v12)
- Lucide React icons, Node.js 20
