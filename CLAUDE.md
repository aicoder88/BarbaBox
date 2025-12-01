# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BarbaBox is a bilingual (Croatian/English) marketing website for ZagrebStorage, a self-storage service. Built with Next.js 14 using the App Router pattern, TypeScript, and Tailwind CSS with shadcn/ui components.

## Development Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Create production build
npm run start  # Run production server
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14.2.23 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 with CSS variables for theming
- **UI Components**: shadcn/ui (Radix UI-based, 40+ components in `/components/ui`)
- **State Management**: React Context API for language switching
- **Theme**: next-themes for light/dark mode support
- **Configured but Unused**: Supabase (backend), Stripe (payments), React Hook Form

### Directory Structure
```
/src
  /app              # Next.js App Router pages
    layout.tsx      # Root layout with LanguageProvider
    page.tsx        # Main landing page
    globals.css     # Global styles with CSS variables
  /components       # React components
    /ui             # 40+ shadcn/ui reusable components
    *.tsx           # Page section components (Header, Hero, Pricing, etc.)
  /contexts
    LanguageContext.tsx  # Bilingual state management (HR/EN)
  /lib
    utils.ts        # Utility functions (cn for class merging)
```

### Language System

All components use the `LanguageContext` for internationalization:
- Import: `import { useLanguage } from '@/contexts/LanguageContext'`
- Usage: `const { language, setLanguage, t } = useLanguage()`
- Translation keys follow dot notation: `t('section.key')`
- Two complete dictionaries (HR and EN) in `LanguageContext.tsx`
- Language preference persists to localStorage

### Component Patterns

All page section components follow these conventions:
- Start with `"use client"` directive (client-side rendering)
- Use `useLanguage()` hook for translations
- Responsive design with Tailwind breakpoints (md:, lg:)
- Consistent spacing pattern: `py-24 px-4` for sections
- Card-based layouts with animations and hover effects
- Data structures hardcoded as arrays within components

### Styling Conventions

- CSS variables defined in `globals.css` using HSL color space
- Tailwind utilities combined with custom color variables
- Dark mode support via class selector
- Gradient backgrounds: `from-primary to-accent` pattern
- Animation delays for staggered entrance effects
- Z-index management for overlays and modals

### Path Aliases

TypeScript configured with `@/*` alias pointing to `/src/*`:
```typescript
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
```

## Key Configuration Files

- `tailwind.config.ts` - Custom animations, colors, and design tokens
- `components.json` - shadcn/ui configuration with path aliases
- `next.config.js` - Image domain whitelist (Unsplash configured)
- `tsconfig.json` - TypeScript config with path aliases

## Landing Page Structure

The main page (`/app/page.tsx`) imports and renders these sections in order:
1. Header - Navigation with language switcher
2. Hero - Full-screen hero with CTAs
3. TrustBar - Trust indicators
4. Process - 3-step process visualization
5. SizeCalculator - Interactive unit size selector
6. Pricing - 4-tier pricing table
7. CustomerSegments - Target audience cards
8. Security - Security features
9. FAQ - Accordion-based questions
10. Location - Map and contact info
11. Footer - Links and copyright
12. MobileCallButton - Floating mobile CTA

## Adding New Translations

When adding translatable content:
1. Add keys to both `translations.hr` and `translations.en` in `LanguageContext.tsx`
2. Use nested objects for section organization
3. Access with dot notation: `t('newSection.newKey')`

## Adding New UI Components

shadcn/ui components are pre-installed in `/components/ui`. To use:
```typescript
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
```

All components support Tailwind customization and dark mode out of the box.
