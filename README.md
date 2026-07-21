# Lutezzi Portfolio — Terminal Edition

Cyberpunk/CLI-inspired developer portfolio built with **Next.js App Router**, **Tailwind CSS**, **Framer Motion**, and **Zustand**.

## Features

- Terminal aesthetic with CRT scanline effects and glassmorphism
- Three theme modes: Dark Terminal, Light Paper, High-Contrast Terminal
- Full TR/EN localization with `localStorage` persistence
- Scroll-triggered Framer Motion animations
- Interactive education timeline with accordion
- Project detail pages at `/projects/[slug]`
- Accessible components (ARIA, keyboard navigation, focus states)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Management

All content is separated into typed data files for easy updates:

| File | Purpose |
|------|---------|
| `src/data/locales/en.ts` | English UI strings |
| `src/data/locales/tr.ts` | Turkish UI strings |
| `src/data/projects.ts` | Project cards & detail pages |
| `src/data/education.ts` | Education timeline entries |
| `src/data/skills.ts` | Skill categories |
| `src/lib/constants.ts` | Social links, nav config |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── layout/           # Navbar, Footer, ScrollToTop
│   ├── sections/         # Hero, About, Education, Skills, Projects, Contact
│   ├── ui/               # Reusable UI (TerminalWindow, etc.)
│   └── providers/        # Theme provider
├── data/                 # Content dictionaries (TR/EN)
├── hooks/                # useTranslation, useLocalizeFn
├── lib/                  # Constants, animations, utils
├── stores/               # Zustand theme & locale stores
└── types/                # TypeScript interfaces
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Zustand
- Lucide React

## Deploy to Vercel (lutezzi.space)

1. Push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new).
2. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL` = `https://lutezzi.space`
3. Deploy. Vercel auto-detects Next.js.

### Custom domain DNS (domain registrar)

In your domain panel for **lutezzi.space**, add:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Then in Vercel → Project → **Settings → Domains**, add:
- `lutezzi.space`
- `www.lutezzi.space` (redirect to apex)

`www` → `lutezzi.space` redirect is also configured in `next.config.ts`.

## Build

```bash
npm run build
npm start
```
