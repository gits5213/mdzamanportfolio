/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true'
const isProduction = process.env.NODE_ENV === 'production'

// For custom domain, basePath should be empty
// For GitHub Pages subpath, use '/mdzamanportfolio'
const basePath = useCustomDomain ? '' : (isGitHubPages ? '/mdzamanportfolio' : '')

const nextConfig = {
  reactStrictMode: true,
  // Only use static export for production builds (GitHub Pages or custom domain)
  ...(isProduction ? { output: 'export' } : {}),
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

