This is the Cayoosh Construction website: an Astro site whose content is managed in EmDash, a CMS that runs inside the same app. The admin panel is at `/_emdash/admin`.

## Commands

```bash
npm run dev -- --port 3210   # dev server (needs Node 22.23.4+, see .nvmrc)
npm run typecheck            # astro check
npm run build                # production build (Node standalone server in dist/)
npx emdash seed seed/seed.json   # load the seed content into a fresh local database
```

## Where content lives

Content is in the database (`data.db`, not committed) and uploaded media in `uploads/` (not committed). `seed/seed.json` plus `seed/assets/` rebuild both from scratch. The schema is stored in the database too; `seed/seed.json` is how a fresh database gets it.

- **Pages** (`pages`): one entry per page. The entry with the slug `home` renders at `/`, the rest at `/{slug}`. A page is a list of blocks in its `sections` field.
- **Projects** (`projects`): one entry per build, at `/our-projects/{slug}`. `sort_order` sets the order of the grid and the previous/next links.
- **Site details** (`site_details`): a single entry with phone, email, location, footer text and the shared "Get in touch" panel.
- Site title and tagline are in Settings; the header links are the `primary` menu.

## Where code lives

| Path | Purpose |
| --- | --- |
| `src/layouts/Base.astro` | Page frame: head tags, header, footer, EmDash wiring |
| `src/pages/` | Routes, all server-rendered: `index`, `[slug]`, `our-projects/[slug]`, `404` |
| `src/components/PageBlocks.astro` | Maps each block type to its component |
| `src/components/blocks/` | One component per block type in `seed/seed.json` → `blockTypes` |
| `src/lib/site.ts` | Shared queries and helpers |
| `src/styles/global.css` | All styling (plain CSS) |
| `emdash-env.d.ts` | Generated types; regenerated when the dev server starts — don't edit |

## Rules

- Read the `building-emdash-site` skill in `.agents/skills/` before changing schema, queries or the seed. The docs index is at https://docs.emdashcms.com/llms.txt.
- Image fields are objects, not URLs: render them with `src/components/Img.astro`.
- Pages must stay server-rendered (no `getStaticPaths`), or published edits won't show.
- Adding a block type means three changes: the definition in `seed/seed.json`, a component in `src/components/blocks/`, and its entry in `PageBlocks.astro`. A database that already exists also needs the block type added through the admin (or the seed re-applied with `--on-conflict update`, tested on a copy first).
- `.env` holds `EMDASH_ENCRYPTION_KEY`. Never commit it or print it.
- The public site ships no React; React is only there for the admin panel.
