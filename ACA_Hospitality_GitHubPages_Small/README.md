# ACA Hospitality — Next.js (GitHub Pages ready)

## Quick start
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Create a GitHub repo, e.g. **aca-hospitality-site**.
2. Push this project to the repo's **main** branch.
3. In the repo settings, go to **Settings → Pages** and set Source to **GitHub Actions**.
4. In **Settings → Actions → Variables**, add a repository variable:
   - Name: `GH_REPO`
   - Value: your repo name (e.g. `aca-hospitality-site`)

> The workflow uses `GH_REPO` to set `assetPrefix` and `basePath` at build time.
> Alternatively, hardcode the repo name in `next.config.js`.

## Local static export
```bash
npm run build     # generates ./out
```

## Contact form
Replace `YOUR_FORM_ID` in `/pages/index.js` with your Formspree ID.

## Custom domain
Add a `CNAME` file inside `./out` during build (or set it in Pages settings).
