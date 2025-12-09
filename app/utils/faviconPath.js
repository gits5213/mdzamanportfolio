/**
 * Get the correct favicon path for both local development, GitHub Pages deployment, and custom domains
 */
export function getFaviconPath() {
  let basePath = ''
  
  if (typeof window !== 'undefined') {
    // Client-side: check the current URL
    const hostname = window.location.hostname
    
    // If using custom domain (not github.io), basePath should be empty
    if (!hostname.includes('github.io') && !hostname.includes('github.com')) {
      basePath = ''
    } else {
      // Check if pathname starts with basePath
      const pathname = window.location.pathname
      if (pathname.startsWith('/mdzamanportfolio')) {
        basePath = '/mdzamanportfolio'
      }
    }
  } else {
    // Server-side: check environment variables
    if (process.env.USE_CUSTOM_DOMAIN === 'true') {
      basePath = ''
    } else if (process.env.GITHUB_PAGES === 'true') {
      basePath = '/mdzamanportfolio'
    }
  }
  
  return `${basePath}/favicon.ico`
}

