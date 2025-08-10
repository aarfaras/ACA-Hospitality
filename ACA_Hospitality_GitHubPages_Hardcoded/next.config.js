// next.config.js
const REPO = 'aca-hospitality-site'; // hardcoded GitHub repo name
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: isProd ? `/${REPO}/` : '',
  basePath: isProd ? `/${REPO}` : '',
  trailingSlash: true,
};
