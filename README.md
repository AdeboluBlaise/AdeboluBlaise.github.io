# adebolublaise.github.io

Personal site of Temitope Adebolu, statistician and data scientist.
Live at **https://adebolublaise.github.io**

Plain HTML, CSS and JavaScript. No build step, no frameworks, no trackers.
GitHub Pages publishes whatever is on the `main` branch.

## Where things live

| File | What it holds |
| --- | --- |
| `index.html` | All page content: hero, projects, dashboards, experience, about, contact |
| `assets/css/site.css` | Colours, type and layout. Colours are CSS variables at the top |
| `assets/js/site.js` | Galton board, project figures, timeline, dashboard viewer. Project data sits in `DATA` at the top |
| `assets/img/dashboards/` | Dashboard images: `-sm` for the grid, `-lg` for the full-size view |
| `assets/fonts/` | Archivo and STIX Two Text (SIL Open Font License) |
| `404.html` | Page shown for broken links |

## Common edits

- **Change text**: edit `index.html` and commit. The site updates in about a minute.
- **Add a dashboard**: add a 760px-wide `-sm.webp` and a full-size `-lg.webp` to `assets/img/dashboards/`, then copy one `<li class="dash">` block in `index.html` and change its links, image, title and caption.
- **Add a project**: copy one `<article class="proj">` block. Its figure is drawn by a function in `site.js` named in `data-glyph`; reuse an existing one or remove the `<figure>`.
- **Experience timeline**: each bar's `left` and `width` are percentages of 2016 to 2027 (11 years). Position = (year − 2016) ÷ 11 × 100.
