# Yess Chef Landing Page

Production Next.js implementation of the **Yess Chef** restaurant landing page, translated from [Paper](https://paper.design) using design-to-code workflow (structure, typography, and colors from Paper `get_jsx` / `get_computed_styles`).

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4

## Getting started

**Requires Node.js 18+.** If `npm` is not found, install Node once (macOS, no Homebrew needed):

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Close and reopen Terminal (or run `source ~/.zshrc`), then:

```bash
nvm install --lts
cd ~/Cursor/yess-chef-landing
npm install
npm run dev
```

## Roadmap

Polish and redesign plan: **[docs/plan.md](docs/plan.md)** — Lenis, GSAP, Supabase assets, mobile-first Paper → code. Session notes: **[docs/CONTEXT.md](docs/CONTEXT.md)**.

Open [http://localhost:3000](http://localhost:3000). Keep the terminal running while you browse — closing it stops the server.

## Project structure

| Path | Purpose |
|------|---------|
| `components/sections/SiteHeader.tsx` | Logo + CTAs |
| `components/sections/Hero.tsx` | Hero image + headline |
| `components/sections/BookingSection.tsx` | Hours + illustration |
| `components/ui/` | Shared `Button`, `Container`, `Divider` |
| `public/images/` | Assets exported from Paper |

## Background pattern

The repeating cat pattern (`fixed-background-img` from Paper) lives at `public/images/background-pattern.webp`, rendered at **10% opacity** with `background-attachment: fixed` behavior via a fixed `::before` layer.

## Deploy

Deploy to [Vercel](https://vercel.com) (recommended):

```bash
npm run build
```

Or connect the GitHub repo in the Vercel dashboard; framework preset **Next.js**.

## Design tokens

| Token | Value | Usage |
|-------|-------|--------|
| Page background | `#131C2D` | Outer canvas |
| Surface | `#161E2D` | Main card |
| Accent | `#FFEF5F` | Headings, buttons, borders |
| On accent | `#131C2D` | Button text |
