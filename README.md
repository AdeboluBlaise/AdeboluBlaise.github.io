# adebolublaise.github.io

Personal site of Temitope Adebolu, statistician and data scientist.
Live at **https://adebolublaise.github.io**

Plain HTML, CSS and JavaScript. No build step, no frameworks, no trackers.
GitHub Pages publishes whatever is on the `main` branch, usually within a minute.

## Where things live

| File | What it holds |
| --- | --- |
| `index.html` | All page content: intro, selected work, dashboards, experience, about, contact |
| `assets/css/site.css` | Colours (light and dark themes are variables at the top), type and layout |
| `assets/js/site.js` | Theme switch, tabs, the small animated charts, dashboard viewer. Chart data sits in `DATA` at the top |
| `assets/img/dashboards/` | Dashboard images: `-sm` for the grid, `-lg` for the full-size view |
| `assets/fonts/` | Tinos, used only on devices without Times New Roman (SIL Open Font License) |
| `404.html` | Page shown for broken links |

## Common edits

- **Change text**: edit `index.html` and commit.
- **Add a dashboard**: add a 760px-wide `-sm.webp` and a full-size `-lg.webp` to `assets/img/dashboards/`, then copy one `<li class="dash">` line in `index.html` and change its links, image, title and `data-desc`.
- **Add a project card**: copy one `<article class="card">` block. The chart is chosen by `data-fig` (`food`, `fraud`, `hospital`, `governance`, `models`); reuse one, or delete the `<figure>`.
