/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  basePath: '/hindu-priest', // GitHub Pages subdirectory
  assetPrefix: '/hindu-priest', // For assets in subdirectory
}

module.exports = nextConfig

