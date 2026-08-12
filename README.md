# Ismail Dadwad — Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Add your files

Put these in `/public`:

- `Ismail_Dadwad_Resume.pdf` — the CV buttons link to `/Ismail_Dadwad_Resume.pdf`
- `ismail.jpg` — your photo, then swap the `ID` placeholder in `components/About.tsx`
  (the commented `<Image>` block shows how)
- Project screenshots, e.g. `/work/quotedesks.png`

## Deploy

Push to GitHub → import at vercel.com → deploy. No environment variables needed.

## Structure

```
app/
  layout.tsx        Fonts, metadata, <html> shell
  page.tsx          Composes the sections
  globals.css       Tailwind layers + reveal/glow CSS
components/
  Nav, Hero, Work, Skills, About, Contact   Server Components
  Ambient, Reveal, ProjectCard              Client Components
data/
  projects.ts       All project content, typed
  site.ts           Contact details, stats, skills, about copy
```

## Editing content

You should never need to touch a component to change wording. All copy lives in
`data/projects.ts` and `data/site.ts`. Adding a project = adding one object to
the `projects` array; the card and the case study both render from it.

---

## Notes for interviews

Be ready to explain these — they're real decisions in this codebase.

**Why Server Components by default?**
Every section is a Server Component, so it renders to HTML at build time and
ships no JavaScript. The page is fully static (`○ Static` in the build output).
That matters here because a recruiter should see content instantly, and because
static HTML is what search engines index.

**Why are only three components `"use client"`?**
`Ambient` needs `mousemove`, `Reveal` needs `IntersectionObserver`, and
`ProjectCard` needs a mouse handler for the cursor glow. Those are browser APIs,
which don't exist on the server. Everything else has no state and no events, so
it stays on the server. The rule: opt into the client at the leaves, not the root.

**Why no state management library?**
There's no shared mutable state — nothing to manage. Reaching for Redux here
would be overhead with no benefit. State libraries earn their place when several
distant components read and write the same data.

**Why `next/font` instead of a `<link>` to Google Fonts?**
`next/font` downloads the font files at build time and self-hosts them, so
there's no extra network request to a third party at runtime and no layout shift
while the font loads.

**Why is the data in `data/` and not inside the components?**
Content changes far more often than layout. Separating them means editing copy
never risks breaking markup, and the types in `projects.ts` catch a missing field
at build time rather than in production.

---

## Adding screenshots

Slots are already wired. Nothing to code — just add files and uncomment.

1. Save images to `public/work/` (PNG or WebP, ~1600px wide, under 400 KB).
2. In `data/projects.ts`, uncomment the `cover` block for the card thumbnail and
   the `gallery` block for the case study. Quote Desks has a worked example.

Until you do, `Shot.tsx` renders a gradient placeholder instead of a broken
image, so the page never looks unfinished.

### What to capture

- **Cover** — the single screen that best explains the product. Full window, real data.
- **Gallery** — two per case. The strongest pairing is before/after where you have it.
- **Blur anything confidential**: client names, prices, phone numbers, emails.
- Prefer real screens over dressed-up mockups. Recruiters can tell.
