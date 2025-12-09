/**
 * Get the correct image path for both local development and GitHub Pages deployment
 * For static export with basePath, Next.js Image doesn't automatically prepend basePath
 * so we need to handle it manually
 */
export function getImagePath(path) {
  // Check if we're building for GitHub Pages
  const isGitHubPages = process.env.GITHUB_PAGES === 'true'
  const basePath = isGitHubPages ? '/mdzamanportfolio' : ''
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  // Prepend basePath if needed
  return basePath ? `${basePath}${cleanPath}` : cleanPath
}

