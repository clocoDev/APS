# Workshop.jsx — Component Documentation

**Path:** `src/app/Components/Workshop/Workshop.jsx`

## Summary

A React (Next.js) client component that renders a promotional grid of workshop/class cards with background images, a decorative star, a title and a "Book Now" button. It uses MUI (v5) components and `styled` for scoped styles and Next.js `Image` for optimized image rendering.

## Contract (inputs / outputs / behavior)

- Inputs: none via props — the component contains a local `classes` array (hard-coded).
  - Class item shape:
    - `title` (string) — displayed on the card
    - `image` (string) — path for Next.js `Image`, e.g. `/secure1.png`
    - `link` (string) — href used on the Book button
- Outputs: renders a responsive grid of cards. Each card shows a background image with overlay, a decorative star, the class title and a Book button that navigates to the supplied `link`.
- Error modes: missing or invalid image path can cause Image to fail to render or log build/runtime warnings. No runtime validation of the array shape is performed.

## File structure and key pieces

- Top-level wrapper: `SectionWrapper` (styled Box) — dark background, relative positioning.
- `SectionTitle`: styled `Typography` showing the section heading "Secure Your Spot Now!".
- `classes`: local array of 4 class items (hard-coded in the file).
- Grid layout: maps `classes` to Grid children (one card per item).
- `CardWrapper`: styled Box for each card; contains an overlay (::before) to darken the image and the hover rule to scale `.card-image`.
- `ImageWrapper` (class `card-image`): absolute-positioned container using Next `Image` with `fill` + objectFit `cover`.
- `CardStar`: decorative Image positioned bottom-left.
- `CardContent`: holds `CardTitle` and `BookButton`, positioned above the image.
- `BookButton`: styled MUI Button using `href` for navigation.

## Styling & responsive behavior

- Breakpoint-driven sizes (via MUI `theme.breakpoints`):
  - Card heights: xs=300px, sm=450px, md/lg=550px.
  - `CardTitle` font sizes scale from 14px (xs) up to 22px (md/lg).
  - Button padding/font-size adjusts across breakpoints.
- Hover effect: the `.card-image` scales to 1.07 on hover (zoom-in). The code includes `transition` on both the image wrapper and the hover rule — these should be unified for consistency.
- Overlay: `CardWrapper::before` applies `background: rgba(0,0,0,0.40)` to improve text contrast over images.

## Accessibility

Current status:

- Card images use `alt={classItem.title}` — good for informative images.
- Decorative star uses `alt=""` — appropriate for a decorative image.
- Buttons have visible labels ("Book Now").

Recommended improvements:

- Use Next `Link` for internal navigation to preserve client-side routing and allow `aria-label` on anchors.
- If the intended affordance is that the whole card is clickable, make the whole card a semantic link (wrap card content in `Link` or render a full-size anchor/button). Ensure keyboard activation and focus styles remain visible on dark backgrounds.
- Add `aria-hidden="true"` to purely decorative images and confirm focus outline contrast.
- Consider truncation/visually handling very long titles for screen readers and visual layout.

## Performance

- Uses Next.js `Image` with `fill` — good. Ensure images are available in `public/` or allowed external domains.
- First image has `priority={index === 0}`, which helps LCP. Others will lazy-load by default.
- Ensure images are appropriately sized/optimized to avoid large downloads.

## Potential bugs / issues & fixes

1. Grid item props: the component currently maps a `size` prop to `Grid`:

   ```jsx
   <Grid size={{ xs: 6, sm: 6, md: 6, lg: 3 }} key={index}>
   ```

   MUI `Grid` expects `item` and breakpoint props like `xs={6}` not a `size` object. Fix:

   ```jsx
   <Grid item xs={6} sm={6} md={6} lg={3} key={index}>
   ```

2. Navigation: `Button` with `href` will render an anchor, but for internal Next.js routes prefer `next/link` for client-side navigation. Example fix:

   ```jsx
   import Link from "next/link";

   <Link href={classItem.link} passHref>
     <BookButton component="a">Book Now</BookButton>
   </Link>;
   ```

   Or use `component={Link}` with correct typing.

3. Hover transition inconsistency: `ImageWrapper` defines `transition: transform 0.5s ease` while the hover rule sets `transition: transform 1.5s ease`. Pick a single duration.

4. Key usage: `key={index}` is acceptable for static lists but prefer a stable unique id when available.

## Usage examples

### Basic import and render

```jsx
// In a Next.js page or another component
import Workshop from "src/app/Components/Workshop/Workshop";

export default function Page() {
  return <Workshop />;
}
```

### Using Next Link for the internal Book action (recommended change)

```jsx
import Link from "next/link";
import Workshop from "src/app/Components/Workshop/Workshop";

// (If Workshop is refactored to accept items via props, you can pass custom data)
```

### Refactor idea: accept `items` prop

Change component signature to:

```jsx
function Workshop({ items = defaultClasses }) { ... }

export const defaultClasses = [ /* original array */ ];
```

Then a parent can do:

```jsx
import Workshop, { defaultClasses } from "src/app/Components/Workshop/Workshop";

const custom = [
  ...defaultClasses,
  { title: "New", image: "/new.png", link: "/new" },
];

<Workshop items={custom} />;
```

This improves reusability and testability.

## Edge cases to test

- `items` / `classes` is an empty array: confirm no cards render and there are no runtime errors.
- Missing or incorrect image path: verify fallback behavior and console output.
- Very long title strings: ensure layout doesn't break and text remains legible.
- Small screens: ensure readable text and tappable buttons.
- Keyboard-only navigation: tab order and activation should work.

## Suggested tests

- Snapshot test for the default rendering (Jest + React Testing Library).
- Accessibility check (axe) to catch contrast and ARIA issues.
- Visual regression for hover/zoom effect (Chromatic / Percy) if available.
- Unit test: render with empty array and assert zero cards.

## Low-risk improvements (prioritized)

1. Fix Grid prop usage (`item xs={6} sm={6} md={6} lg={3}`).
2. Use `next/link` for internal navigation for client-side transitions.
3. Refactor to accept `items`/`classes` as props and export `defaultClasses` for easier testing.
4. Make image transition duration consistent across declaration and hover rule.
5. Add PropTypes or TypeScript types.
6. Add a small accessibility-focused test and a snapshot test.

## Files / assets to check

- Confirm images exist in `public/`: `/secure1.png`, `/secure2.png`, `/secure3.png`, `/secure4.png`, `/secureStar.png`.

## Verification notes

- This component is a client component (`"use client"`) — appropriate for interactive UI and hover effects.
- After making the recommended code edits, run the dev server and manually verify layout, hover, LCP and navigation.

## Next steps

- I can apply the Grid fix and change the button to use `next/link` in the component source if you want — this is a small code edit.
- I can also refactor to accept an `items` prop and add a snapshot and accessibility test.

---

_Generated documentation for `Workshop.jsx`. Place this file at `docs/Workshop.md` in the repository to keep component docs centralized._
