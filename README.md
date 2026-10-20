# Employee Lifecycle Guides

How-to guides for Southland's onboarding, role change, and offboarding system (Airtable), published with GitHub Pages.

**Live site:** https://crystal-jeffers.github.io/onboarding/

| Page | What it is |
|---|---|
| `index.html` | The landing page. Pick HR or Manager. |
| `hr.html` | HR home: every guide HR needs, plus the HR Workspace link |
| `manager.html` | Manager home: every guide managers need, plus the Manager Workspace link |
| `guide.html` | Shows one guide. The menu links fill in the rest of the address. |

> This repository is public. Use example names and 555 phone numbers in screenshots and guides. Real contacts stay in Airtable.

## What's in the folder

| Path | What it is |
|---|---|
| `guides/` | One Markdown file per guide. This is where almost all editing happens. |
| `assets/nav-config.js` | The guide list: titles, one-line descriptions, menu groups, which roles see each one, and the quick links at the top of the menu. |
| `assets/img/` | Screenshots. Blur anything sensitive before uploading. |
| `assets/render.js` | The engine. You shouldn't need to touch it. |
| `assets/style.css` | The look. Colors are set at the top of the file. |

## Edit a guide

1. Open the file in `guides/` (or click **Edit this page** at the bottom of any guide on the live site).
2. Click the pencil icon, make your change, and click **Commit changes**.
3. The site updates in a minute or two. Refresh with Ctrl + Shift + R if you still see the old version.

## Add a guide

1. Create a new file in `guides/`. Start it with `# Title`.
2. Open `assets/nav-config.js` and copy a block in `SOP_LIBRARY`. Change `id`, `title`, `blurb`, `group`, `file`, `roles`, and `featured`.
3. Commit. The menu, search, home cards, and Previous / Next buttons update on their own.

## What the site does on its own

- **Left menu** with the role's guides, grouped, and quick links to the Airtable workspace.
- **On this page** list on the right (or folded at the top on smaller screens), built from `## Headings` or the black fold-out sections.
- **Search** across every guide the role can see. Results open the guide with the words highlighted.
- **Timeline page:** the stop you're reading comes into focus as you scroll, and the case-type buttons stay pinned at the top.
- **Definitions page:** a search box that filters the terms as you type.
- **Missing screenshots** show a "Screenshot coming" box with the file name to upload, instead of a broken image.
- **Flowcharts** written in a `<div class="mermaid">` block are drawn automatically.

## Writing guide

| Write this | You get |
|---|---|
| `## Heading` | A section, listed under **On this page** |
| `1. Step` | Numbered step markers on a rail |
| `- [ ] Item` | A tick box saved on that person's device, with a progress bar |
| `- **Label:** text` on every line of a list | Black labels on the left, white bubbles on the right |
| `> Tip:`, `> Note:`, `> Important:`, `> Warning:` | Colored callouts |
| Two or more pictures back to back | A slideshow with arrows |

Extra blank lines add extra space. The fonts (Barlow) come from Google Fonts, which is free.
