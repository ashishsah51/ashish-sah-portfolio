# Caffeine Portfolio App

A full-width, animated portfolio website for Ashish Sah. Built with React 19, Vite, TypeScript, and Tailwind CSS.

## Project Structure

```
src/
  frontend/
    src/
      components/
        ui/                   # Shared reusable components
        portfolio/            # Page sections (Hero, Skills, Experience, etc.)
      data/
        portfolioData.ts      # All portfolio content — edit here to customise
      mocks/
        backend.ts            # Mock backend (used when VITE_USE_MOCK=true)
      hooks/                  # React Query hooks
      App.tsx
      main.tsx
      index.css               # Design tokens + global styles
  backend/                    # Motoko ICP canister (not used locally)
package.json                  # Root — delegates all scripts to src/frontend
```

## How to Run Locally

Requirements: Node.js v18+, npm v8+

```bash
# 1. Clone the repo and install frontend dependencies
cd src/frontend
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:5173
```

Or from the project root:
```bash
npm install --prefix src/frontend
npm run dev        # delegates to src/frontend automatically
```

`VITE_USE_MOCK=true` is already built into the `dev` script — no ICP canister setup needed.

## How to Deploy (Live / Production)

### Option A — Replit Deploy (easiest)

Click **Deploy** in Replit. Settings are already configured:
- Build: `cd src/frontend && npm run build`
- Publish directory: `src/frontend/dist`

### Option B — Any Static Host (Netlify, Vercel, GitHub Pages)

```bash
cd src/frontend
npm install
npm run build
# Output is in src/frontend/dist/ — upload this folder
```

**Netlify:** drag-and-drop `dist/` at netlify.com/drop  
**Vercel:** `npx vercel --prod` from `src/frontend`  
**GitHub Pages:** push `dist/` to the `gh-pages` branch

## npm Scripts

Run from the **project root** or from `src/frontend` — both work.

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server with mock data |
| `npm run build` | Production build → `src/frontend/dist/` |
| `npm run typecheck` | TypeScript type-check |

## Running in Replit

Workflow command:
```
cd src/frontend && npm run dev -- --port 5000 --host 0.0.0.0
```

## Architecture Decisions

- **Mock backend**: `VITE_USE_MOCK=true` serves static data from `portfolioData.ts`. No ICP canister needed.
- **Full-width layout**: All sections use `max-w-7xl` containers.
- **Design tokens**: CSS variables in `:root {}` in `index.css` for consistent theming.

## Tech Stack

- React 19, Vite 5, TypeScript
- Tailwind CSS v3, Radix UI
- TanStack Query v5, Motion (Framer Motion v12)
- Lucide React icons, Node.js 20
