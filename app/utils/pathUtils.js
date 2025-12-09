/**
 * Utility functions for handling paths in both local and GitHub Pages environments
 */

/**
 * Get the base path for the application
 * This works for both local development and GitHub Pages deployment
 */
export function getBasePath() {
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on GitHub Pages
    const pathname = window.location.pathname
    if (pathname.startsWith('/mdzamanportfolio')) {
      return '/mdzamanportfolio'
    }
  }
  
  // Server-side or local development
  if (process.env.GITHUB_PAGES === 'true') {
    return '/mdzamanportfolio'
  }
  
  return ''
}

/**
 * Get the correct path for assets (images, PDFs, etc.)
 */
export function getAssetPath(path) {
  const basePath = getBasePath()
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}

