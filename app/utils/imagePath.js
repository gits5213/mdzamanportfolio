/**
 * Get the correct image path for both local development, GitHub Pages deployment, and custom domains
 * For static export with basePath, Next.js Image doesn't automatically prepend basePath
 * so we need to handle it manually
 */
export function getImagePath(path) {
  let basePath = ''
  
  if (typeof window !== 'undefined') {
    // Client-side: check the current URL
    const hostname = window.location.hostname
    const pathname = window.location.pathname
    
    // If using custom domain (not github.io), basePath should be empty
    if (!hostname.includes('github.io') && !hostname.includes('github.com')) {
      basePath = ''
    } else if (pathname.startsWith('/mdzamanportfolio')) {
      basePath = '/mdzamanportfolio'
    }
  } else {
    // Server-side: check environment variables
    if (process.env.USE_CUSTOM_DOMAIN === 'true') {
      basePath = ''
    } else if (process.env.GITHUB_PAGES === 'true') {
      basePath = '/mdzamanportfolio'
    }
  }
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  
  // Prepend basePath if needed
  return basePath ? `${basePath}${cleanPath}` : cleanPath
}

