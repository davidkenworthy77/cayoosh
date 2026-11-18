# Cayoosh Construction website

A React (Next.js) rebuild of [cayoosh.ca](https://www.cayoosh.ca/), cloned from the original Squarespace site.

## Run it

```bash
npm install
npm run dev -- --port 3210
```

Then open http://localhost:3210.

## Where things live

- `src/app/` — one folder per page (`page.tsx`), plus `globals.css` for all styling.
- `src/components/` — header, footer, hero, image cards, gallery/lightbox, contact form.
- `src/data/site.ts` — navigation, phone, email, social links.
- `src/data/projects.ts` — the four projects: text, cover photo, gallery photos, order.
- `src/data/images.ts` — every image in `public/images/` with its dimensions.

## Known gaps versus the Squarespace site

- The contact form opens the visitor's email app instead of submitting to a server (Squarespace handled delivery).
- Squarespace's scroll-in animations are not reproduced.
- Image alt text is empty, as on the original — to be written in the SEO pass.
