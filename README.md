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

## Content Management

All content is separated into typed data files for easy updates:


| File                     | Purpose                      |
| ------------------------ | ---------------------------- |
| `src/data/locales/en.ts` | English UI strings           |
| `src/data/locales/tr.ts` | Turkish UI strings           |
| `src/data/projects.ts`   | Project cards & detail pages |
| `src/data/education.ts`  | Education timeline entries   |
| `src/data/skills.ts`     | Skill categories             |
| `src/lib/constants.ts`   | Social links, nav config     |




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

