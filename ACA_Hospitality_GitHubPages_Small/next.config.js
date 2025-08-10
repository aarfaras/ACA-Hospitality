// next.config.js
// Set REPO to your GitHub repo name (without username).
// Example: if your repo is github.com/yourname/aca-hospitality-site, set REPO='aca-hospitality-site'.
const REPO = process.env.NEXT_PUBLIC_GH_REPO || 'aca-hospitality-site';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',            // static export for GitHub Pages
  images: { unoptimized: true },
  assetPrefix: isProd ? `/${REPO}/` : '',
  basePath: isProd ? `/${REPO}` : '',
  trailingSlash: true,
};
