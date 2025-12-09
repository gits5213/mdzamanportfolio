/**
 * Get the correct favicon path for both local development and GitHub Pages deployment
 */
export function getFaviconPath() {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true'
  const basePath = isGitHubPages ? '/mdzamanportfolio' : ''
  return `${basePath}/favicon.ico`
}

