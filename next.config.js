/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  basePath: '/priest-mumbai', // GitHub Pages subdirectory
  assetPrefix: '/priest-mumbai', // For assets in subdirectory
}

module.exports = nextConfig

