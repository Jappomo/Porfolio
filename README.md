# Giacomo Liberio - Production Portfolio

Static site, no build step. Works on GitHub Pages as is.

## Publish on GitHub Pages
1. Create a repo named `<your-username>.github.io` (or any name).
2. Upload everything in this folder to the repo root (keep `.nojekyll`).
3. Repo **Settings > Pages > Source: Deploy from branch > main / (root)**.
4. Your site goes live at `https://<your-username>.github.io/` in a minute or two.

## Editing content
Everything lives in `js/data.js`:
- `WORK`: released work, grouped by company (title, context, role, tags, image)
- `STUDIOS`: full-time experience timeline
- `UNRELEASED`: NDA / unannounced list
- `CLIENTS`: freelance companies shown under Experience

## Images
Drop images in `assets/img/` using the filenames in `data.js`
(e.g. `sackboy.jpg`, `cod-mobile.jpg`). Recommended portrait poster 2:3 (e.g. 800x1200), JPG, under 300 KB.
Missing images show a styled placeholder, so the site never looks broken.

