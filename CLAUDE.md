# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (Next.js)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

Docker (standalone output, port 3000):
```bash
docker build -t yopago .
docker run -p 3000:3000 yopago
```

## Architecture

**YoPago** is a Next.js 16 marketing/landing site for a Bolivian payment gateway. It uses the App Router with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui component patterns.

### Pages (`app/`)
- `/` — Home: Hero → Integrations → Stats → Services → Industries → FAQ → Footer
- `/solutions` — Full solutions/products listing
- `/industries` — Industry-specific sections (Pensions, POS)
- `/contact` — Contact page
- `/support` — Support page

Every page is a `'use client'` component because they depend on the `useLanguage()` hook from the i18n context.

### i18n (`lib/`)
- `lib/translations.ts` — All UI strings in `en` and `es` objects (dot-path keys)
- `lib/language-context.tsx` — `LanguageProvider` + `useLanguage()` hook; persists selection to `localStorage`
- All text must go through `t('key.path')` — never hardcode user-facing strings

### Components (`components/`)
- `header.tsx` — `HeroHeader`: fixed nav with scroll-aware glassmorphism, active route highlighting, mobile drawer, language/theme toggles
- `hero-section.tsx` — Loads a Spline 3D model via dynamic import (SSR disabled), logo carousel via `LogoLoop`
- `components/ui/` — shadcn/ui primitives (Button, Card, Accordion, Dialog, etc.) plus custom animated components (`animated-group.tsx`, `text-effect.tsx`, `infinite-slider.tsx`, `aurora.tsx`, `logo-loop.tsx`)
- `industries/` — Sub-components for industry pages (`pensions-carousel.tsx`, `pos-section.tsx`)

### Styling
- Tailwind CSS v4 with `@import "tailwindcss"` — no `tailwind.config.js`, configured via CSS variables in `globals.css`
- Brand colors: `--primary: #fb802b` (orange), `--secondary/--accent: #5fd6d6` (teal)
- Dark mode via `next-themes` (`ThemeProvider`) with `class` strategy; toggle button in header
- Custom `.btn-animated` class (rotating gradient border effect) exposed as `variant="animated"` on `Button`
- `cn()` from `lib/utils.ts` (`clsx` + `tailwind-merge`) used everywhere for conditional classes

### Key providers (wrapping order in `layout.tsx`)
1. `ThemeProvider` (next-themes)
2. `LanguageProvider` (i18n)
3. `NextTopLoader` (orange progress bar on navigation)
4. `WhatsAppWidget` (floating chat button)

### External images
`next.config.ts` allows remote images from `ik.imagekit.io`, `html.tailus.io`, and `alt.tailus.io`. Local assets live in `public/logos/`, `public/images/`, and `public/icons/`.
