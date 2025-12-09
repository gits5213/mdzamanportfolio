/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const isProduction = process.env.NODE_ENV === 'production'
const basePath = isGitHubPages ? '/mdzamanportfolio' : ''

const nextConfig = {
  reactStrictMode: true,
  // Only use static export for production builds (GitHub Pages)
  ...(isProduction && isGitHubPages ? { output: 'export' } : {}),
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

