# Cayoosh Construction website

A rebuild of [cayoosh.ca](https://www.cayoosh.ca/), cloned from the original Squarespace site. It runs on [Astro](https://astro.build/) with [EmDash](https://emdashcms.com/) as the CMS, so text, photos, projects and the menu are edited in a browser instead of in code.

## Run it

Needs Node 22.23.4 or later (`nvm use` picks up `.nvmrc`).

```bash
npm install
npx emdash secrets generate --write .env   # first time only
npx emdash seed seed/seed.json             # first time only: loads the pages, projects and photos
npm run dev -- --port 3210
```

- Site: http://localhost:3210
- Admin: http://localhost:3210/_emdash/admin — the first visit runs a short setup wizard that creates your admin account with a passkey.

## Editing content

| In the admin | What it controls |
| --- | --- |
| **Pages** | Every page. Each is a stack of sections (photo banner, photo cards, quote, contact form…) that can be edited, reordered, added or removed. The page with the slug `home` is the home page. |
| **Projects** | The builds under "Our Latest Projects": name, introduction, cover photo, gallery, and the order they appear in. |
| **Site details** | Phone, email, location, social links, footer text and logo, and the "Get in touch" panel. |
| **Menus → Main menu** | The links in the header. |
| **Settings** | Site title and tagline. |
| **Media** | The photo library. |

Changes go live when you press Publish.

## Where things live

- `seed/seed.json` and `seed/assets/` — the starting content and photos, used to fill a fresh database.
- `data.db` and `uploads/` — the live local content and uploaded photos. Not in git; back them up before deploying.
- `src/components/blocks/` — one file per section type.
- `src/styles/global.css` — all styling.
- `AGENTS.md` — notes for working on the code.

## Known gaps versus the Squarespace site

- The contact form opens the visitor's email app instead of submitting to a server (Squarespace handled delivery).
- Squarespace's scroll-in animations are not reproduced.
- Image alt text is empty, as on the original — to be written in the SEO pass (each photo has an alt field in Media).
- Not deployed yet. Hosting needs a Node server (or Cloudflare) with persistent storage for the database and uploads.
