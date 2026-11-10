# Oshodi David Portfolio

React + Next.js portfolio project.

## Development Server

Run `npm run dev` from this directory. Next.js starts on http://localhost:3000. This is a standalone local project and does not depend on Figma Make.

## Project Structure

- `src/app/layout.tsx` - Root layout, metadata, and global CSS import
- `src/app/page.tsx` - Home page
- `src/app/globals.css` - Global CSS, Tailwind CSS v4 import, and local font faces
- `src/components/Portfolio.tsx` - Main portfolio UI (client component)
- `public/assets` - Images and icons used by the app
- `public/fonts` - Self-hosted Geist and Geist Mono fonts
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - Tailwind CSS v4 PostCSS plugin

## Dependencies

- Framework: Next.js 16 (App Router) with React 19
- Styling: Tailwind CSS v4 via `@tailwindcss/postcss`
- Language: TypeScript 5.7
- Formatting: oxfmt

## Scripts

- `npm run dev` - start the development server
- `npm run build` - production build
- `npm run start` - start the production server
- `npm run format` - format source files
