# Andrey Nekrasov — Frontend Portfolio

A personal portfolio built with Vite + React + TypeScript and Tailwind CSS (v4). Includes animated UI (Framer Motion), custom UI components (shadcn-style Button/Card), and a contact modal powered by Formspree.

## Tech Stack
- React 19, TypeScript 5, Vite 7
- Tailwind CSS 4, shadcn-style components, Framer Motion
- Lucide icons
- ESLint (typescript-eslint), PostCSS (`@tailwindcss/postcss`, `postcss-import`)

## Requirements
- Node.js >= 18

## Getting Started
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure
```
src/
  App.tsx           # Main page content and sections
  index.css         # Tailwind v4 + base styles
  components/ui/    # Button, Card components
  lib/utils.ts      # cn() helper (clsx + tailwind-merge)
```
