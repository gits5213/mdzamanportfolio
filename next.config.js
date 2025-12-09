/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // If deploying to GitHub Pages with a base path, uncomment the line below
  // basePath: '/mdzamanportfolio',
  // trailingSlash: true,
}

module.exports = nextConfig

