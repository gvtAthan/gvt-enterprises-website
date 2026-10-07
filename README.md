# GVT Enterprises Inc. website

Marketing site for GVT Enterprises Inc. (Vektor lubricants, IT solutions, premium appliances).

Built with Next.js (App Router, TypeScript) and Tailwind CSS 4, following the Figma file
[UI Mockup - GVT](https://www.figma.com/design/pI9dcAZQUNOCj4frTCvcC8/UI-Mockup---GVT).

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Where things live

- `src/app/globals.css`: design tokens from the Figma "Design System" page (colours, type scale, radius, shadows, focus ring, 1280px container).
- `src/lib/site.ts`: contact details, routes and the primary navigation (including dropdown menus).
- `src/components/layout`: utility bar, sticky header with desktop dropdowns and the full-screen mobile menu, footer.
- `src/components/home`: the Home page sections.
- `src/components/ui`: shared pieces (buttons, section label, logo, image placeholder).
- `public/brand`: brand SVGs exported from Figma. The logo mark is still a placeholder until the official GVT monogram is supplied.

Breakpoints follow the mockup's responsive notes: mobile below 768px, tablet 768 to 1023px, desktop from 1024px.

Only the Home page exists so far. Navigation already links to the planned routes (`/about`, `/lubricants`, `/it-solutions`, `/appliances`, `/contact` and their sub-pages), which return 404 until those pages are built.
