# AGENTS.md

Guidance for AI agents (Oz / Warp) working in this repository.

## What this project is
Personal website for Alex Johnson — PM job search.
Deployed on GitHub Pages at `djohn.github.io`.

## Stack
Plain static site. No framework, no build step, no bundler.

| File | Purpose |
|------|---------|
| `index.html` | HTML shell only. Loads fonts, styles, and scripts. Do not put content here. |
| `config.js` | **All copy and links live here.** This is the only file that needs editing for content changes. |
| `main.js` | Reads from the `profile` global (set by `config.js`) and renders the full page via DOM `innerHTML`. |
| `style.css` | All styles. Design tokens defined in `:root`. |

## How to edit content
Only edit `config.js`. All sections — hero, background, projects, roles, footer — are driven
from the `profile` object. Do not edit text in `main.js` or `index.html`.

## Design system
CSS custom properties are defined in `:root` in `style.css`:
- Accent color: amber (`--accent: #D97706`, hover `--accent-dark: #B45309`)
- Background: warm off-white (`--bg: #FAFAF8`)
- Max content width: 800px (`--max-w`)
- Font: Inter (loaded from Google Fonts)
- Border radius: `--radius: 12px`, `--radius-sm: 8px`
- Single responsive breakpoint at 640px

To change the accent color, update `--accent`, `--accent-dark`, `--accent-bg`, and `--accent-text` in `:root`.

## Running locally
Open `index.html` directly in any browser — no local server needed.
(Uses regular `<script src="...">` tags, not ES modules.)

## Deployment
GitHub user page — push to `main` and GitHub Pages auto-deploys.
No build command needed; the source files ARE the deployed files.

## Page sections (by anchor ID)
- `#home` — Hero (name, headline, CTA buttons)
- `#background` — Product Background
- `#projects` — AI Projects (project cards)
- Footer (no anchor)

## Adding a project
In `config.js`, add an object to `profile.projects`:
```js
{
  title:       "Project Name",
  icon:        "[single emoji for the card header]",
  description: "One or two sentences.",
  tags:        ["Tag 1", "Tag 2"],
  caseStudy:   "#",   // URL or "#" placeholder
  github:      null,  // URL string, or null to hide the GitHub link
}
```

## Do not
- Do not use emojis anywhere in this file or in any generated content or copy
- Do not add a blog, backend, or CMS
- Do not add heavy animations or generic AI imagery
- Do not invent metrics or fake testimonials
- Do not commit or push changes without being explicitly asked (local agent rule)
