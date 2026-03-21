# Caffeine Portfolio App

A portfolio website for Ashish Sah, exported from [Caffeine](https://caffeine.ai/). Built with React + Vite + TypeScript, styled with Tailwind CSS.

## Project Structure

```
src/
  frontend/         # React + Vite frontend (main app)
    src/
      components/portfolio/  # Portfolio section components (Hero, Skills, Experience, etc.)
      data/portfolioData.ts   # Static portfolio data
      mocks/backend.ts        # Mock backend for local/Replit use
      hooks/                  # React Query hooks for data fetching
      config.ts               # Backend/actor configuration
      backend.ts              # Auto-generated ICP canister bindings
  backend/          # Motoko canister (ICP backend - not used in Replit)
```

## Tech Stack

- **Frontend**: React 19, Vite 5, TypeScript, Tailwind CSS, Radix UI
- **State/Data**: TanStack Query, TanStack Router
- **3D**: Three.js, React Three Fiber
- **Backend (ICP)**: Motoko canister (requires DFX toolchain to run locally)

## Running Locally in Replit

The frontend runs with a mock backend enabled via `VITE_USE_MOCK=true`. This bypasses the ICP canister and serves static portfolio data from `src/frontend/src/data/portfolioData.ts`.

The workflow command is:
```
cd src/frontend && VITE_USE_MOCK=true pnpm exec vite --port 5000 --host 0.0.0.0
```

## Deployment

Configured as a **static** deployment:
- **Build**: `cd src/frontend && VITE_USE_MOCK=true pnpm exec vite build`
- **Public dir**: `src/frontend/dist`

## Key Notes

- Node.js 20 is required (upgraded from default 16)
- The `src/backend/` Motoko canister requires the DFX/ICP toolchain which is not available in Replit
- Font: Bricolage Grotesque loaded via Google Fonts (replaced local woff2 reference)
- The mock backend in `src/frontend/src/mocks/backend.ts` implements the `backendInterface` using static data
