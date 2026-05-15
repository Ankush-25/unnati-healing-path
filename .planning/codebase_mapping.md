# Codebase Mapping: Unnati Nasha Mukti Kendra

## Overview

This document provides a high-level mapping of the "Unnati Healing Path" codebase. The application is a frontend-heavy website for a rehabilitation center built using **React**, **Vite**, **TanStack Router / Start**, **Tailwind CSS**, and **Shadcn UI**.

## Directory Structure

```text
/
├── .planning/                  # Documentation and planning artifacts (Current Directory)
├── src/                        # Main application source code
│   ├── assets/                 # Static assets like images (e.g., logo.png)
│   ├── components/             # Reusable React components
│   │   ├── site/               # Site-specific layout components (e.g., chrome.tsx for Navbar/Footer)
│   │   └── ui/                 # Shadcn UI generic components (e.g., buttons, dialogs, forms)
│   ├── hooks/                  # Custom React hooks (e.g., use-mobile.tsx)
│   ├── lib/                    # Utility functions and shared logic (e.g., utils.ts, error-handling)
│   └── routes/                 # TanStack Router page components
│       ├── __root.tsx          # Main layout wrapper containing Navbar and Footer
│       ├── index.tsx           # Landing page / Home
│       ├── about.tsx           # About the center page
│       ├── contact.tsx         # Contact and location details
│       ├── programs.tsx        # Details of rehab programs (30/90 days)
│       ├── services.tsx        # Detox, counseling, and other services
│       ├── stories.tsx         # Patient success stories / testimonials
│       └── why-us.tsx          # Information on why choose Unnati Rehab
├── package.json                # Project dependencies and npm scripts
├── vite.config.ts              # Vite bundler configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.js            # Linter configuration
├── components.json             # Shadcn UI configuration
└── wrangler.jsonc              # Cloudflare Workers configuration
```

## Key Technologies & Libraries

1. **Framework:** React 19, Vite
2. **Routing / SSR:** `@tanstack/react-router`, `@tanstack/react-start`
3. **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
4. **UI Components:** Radix UI primitives, Shadcn UI (`src/components/ui/`)
5. **Icons:** `lucide-react`
6. **Forms & Validation:** `react-hook-form`, `zod`, `@hookform/resolvers`
7. **Animations:** `tw-animate-css`, `embla-carousel-react` (for sliders)

## Core Files & Entry Points

- **`src/router.tsx` & `src/routeTree.gen.ts`**: Define and generate the application's routing map.
- **`src/server.ts` & `src/start.ts`**: Entry points for the TanStack Start setup (managing server-side and client-side initialization).
- **`src/styles.css`**: Global stylesheet containing custom Tailwind configurations, CSS variables, and utility classes like `.reveal` and `.glass` for the custom design system.
- **`src/components/site/chrome.tsx`**: Contains the core layout structure components, such as `Navbar`, `Footer`, `EmergencyBar`, and `PageHero`.

## Deployment

The presence of `wrangler.jsonc` and `@cloudflare/vite-plugin` indicates that the application is configured for deployment on **Cloudflare Pages / Workers**.
