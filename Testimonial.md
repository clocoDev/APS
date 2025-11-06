# Testimonial Component

Location: `src/app/Components/Testimonial/`  
Files:

- `Testimonial.jsx` — React component (default export).
- `Testimonial.css` — Swiper pagination and responsive styles.
- Assets referenced: `/vector.svg`, `/halfStar.png` (stored in Next.js `public/`).

## Overview

A responsive two-column section:

- Left: testimonials carousel (Swiper) with pagination bullets.
- Right: "Join Our Team" callout with benefits and CTA.

Built with: React (Next.js), MUI (@mui/material), Swiper, react-icons, next/image.

## Key Details

- Component is a client component (`"use client"`).
- Uses MUI `styled` + `sx` for layout and responsive styling.
- Swiper modules used: `Autoplay`, `Pagination`, `EffectFade`. Swiper CSS imports are included in the component.
- Pagination bullets styled in `Testimonial.css` under `.testimonial .testimonial-bullet*`.

## Props / API

- The component has no external props. Content is defined inside `Testimonial.jsx`:
  - `testimonials` — array of { text, author } objects.
  - `benefits` — array of strings for the right column bullet list.

To make it configurable, extract these arrays into props or import from a data module.

## Usage

Import and render in a page or parent component:

```jsx
import Testimonial from "@/app/Components/Testimonial/Testimonial";

export default function Page() {
  return <Testimonial />;
}
```

(Adjust import path according to your project aliasing.)

## Customization

- Edit `testimonials` / `benefits` arrays inside `Testimonial.jsx` or convert them to props.
- Change Swiper behavior by editing `autoplay`, `pagination`, or `effect` props on the `Swiper` element.
- Update colors, spacing and typography via MUI `sx` or `styled` blocks.
- Modify pagination visuals in `Testimonial.css`.

## Assets

Place decorative assets in Next.js `public/`:

- `/vector.svg`
- `/halfStar.png`

Use Next.js `Image` semantics already used in the component.

## Accessibility & Notes

- Text content uses semantic `Typography` elements; ensure color contrast meets accessibility standards.
- Swiper autoplay is enabled; consider offering user controls or disabling autoplay for accessibility if needed.
- `ApplyButton` uses `href` — consider using Next.js `Link` or an MUI `Button` component wrapped with `Link` if you need client-side navigation.

## Dependencies

Ensure these packages are installed:

- react, react-dom, next
- @mui/material
- swiper
- react-icons

## Development

Run Next.js dev server:

- Windows (from project root):
  - npm: `npm run dev`
  - yarn: `yarn dev`

## Testing

- Unit tests are not included. To test visuals, run the app and inspect the component at the page where it's used (e.g., `src/app/page.js`).

## Suggested Improvements

- Extract testimonials to a JSON or CMS for easier updates.
- Make the component accept props for data and configuration.
- Add keyboard controls and aria labels for the Swiper pagination bullets.
