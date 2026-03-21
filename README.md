# Ashish Sah — Portfolio

A full-width, animated portfolio site built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**. Exported from [Caffeine](https://caffeine.ai/) and refactored for clean, reusable React patterns.

---

## Project Structure

```
src/frontend/
├── src/
│   ├── components/
│   │   ├── ui/               # Shared reusable components
│   │   │   ├── Badge.tsx     # Pill/badge with variants (blue, muted, success, ghost)
│   │   │   ├── Card.tsx      # Animated card with hover effects
│   │   │   ├── Section.tsx   # Full-width section wrapper with consistent padding
│   │   │   ├── SectionHeader.tsx  # Section heading with highlighted accent word
│   │   │   └── index.ts      # Barrel export
│   │   └── portfolio/        # Page sections
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── Skills.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Certifications.tsx
│   │       ├── Achievements.tsx
│   │       └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts  # All portfolio content (edit this to customize)
│   ├── mocks/
│   │   └── backend.ts        # Mock backend for local development
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # Global styles + design tokens
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## How to Run Locally

### Prerequisites

- **Node.js** v18 or higher
- **pnpm** v8 or higher — install with: `npm install -g pnpm`

### Steps

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd <repo-folder>

# 2. Install all dependencies (from the root)
pnpm install

# 3. Start the dev server
cd src/frontend
VITE_USE_MOCK=true pnpm exec vite --port 5000 --host 0.0.0.0

# 4. Open in browser
# http://localhost:5000
```

The `VITE_USE_MOCK=true` flag activates the mock backend so the site works without needing an ICP canister running.

### Alternatively, from the project root

```bash
pnpm install
cd src/frontend && VITE_USE_MOCK=true pnpm exec vite
```

---

## Customizing the Portfolio

All content lives in one file: **`src/frontend/src/data/portfolioData.ts`**

Edit the exported constants to update your personal info, skills, experience, projects, certifications, and achievements. No other files need to change.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS v3 + custom CSS |
| Animation | Motion (Framer Motion v12) |
| UI Components | Radix UI primitives |
| Data Fetching | TanStack Query v5 |
| Icons | Lucide React |

---

## Build for Production

```bash
cd src/frontend
VITE_USE_MOCK=true pnpm exec vite build
```

The output will be in `src/frontend/dist/`.
