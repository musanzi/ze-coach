# Ze Coach

Landing page for **Ze Coach Consulting**, built with Angular 21 and Tailwind CSS v4.

The site presents the brand, services catalogue, coaching modalities, FAQ, and social contact channels.

## Highlights

- Modern single-page marketing site (Angular standalone components + routing)
- Service catalogue organized by business sectors
- Animated UI interactions (AOS + custom CSS transitions)
- Responsive layout optimized for mobile and desktop
- Tailwind CSS v4 with custom design tokens

## Tech Stack

- Angular 21
- TypeScript 5
- Tailwind CSS 4
- Lucide Angular icons
- AOS (Animate On Scroll)
- pnpm

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Install

```bash
pnpm install
```

### Run locally

```bash
pnpm start
```

App runs at `http://localhost:4200/`.

## Available Scripts

- `pnpm start`: Start dev server
- `pnpm build`: Create production build
- `pnpm watch`: Build in watch mode (development config)
- `pnpm test`: Run unit tests

## Project Structure

```text
src/
  app/
    landing/
      components/
        header/
        overview/
        services/
        modalities/
        faq/
        media/
        footer/
      pages/
        landing.html
        landing.ts
      landing.routes.ts
  styles.css
public/
  logo.png
  images/rodi.png
  docs/catalogue.pdf
```

## Content Notes

- Main page content is in `src/app/landing/components/*/*.html`.
- The downloadable catalogue file is stored at `public/docs/catalogue.pdf`.
- Global theme tokens and custom animations are defined in `src/styles.css`.

## Build Output

```bash
pnpm build
```

Production assets are generated in the Angular output directory (`dist/`).

## License

Private project.
