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
 * Properly encodes spaces and special characters in the path
 * Adds cache-busting query parameter for resume files to ensure latest version is loaded
 */
export function getAssetPath(path) {
  const basePath = getBasePath()
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Split the path into segments and encode each segment separately
  // This preserves slashes while encoding spaces and special characters
  const segments = cleanPath.split('/').map(segment => encodeURIComponent(segment))
  const encodedPath = segments.join('/')
  const fullPath = basePath ? `${basePath}/${encodedPath}` : `/${encodedPath}`
  
  // Add cache-busting for resume files to ensure latest version is loaded
  if (path.includes('resume') && path.endsWith('.pdf')) {
    // Use a version timestamp to force browser to reload updated files
    // Update this version when the resume file is updated
    const version = '20251209'
    return `${fullPath}?v=${version}`
  }
  
  return fullPath
}

