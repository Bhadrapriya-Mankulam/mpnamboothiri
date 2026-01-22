/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mpnamboothiri',
  assetPrefix: '/mpnamboothiri',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
}

module.exports = nextConfig

