/**
 * Get the correct image path for both local development and GitHub Pages deployment
 * Next.js Image component handles basePath automatically, so we just return the path as-is
 * This function is kept for consistency and future use
 */
export function getImagePath(path) {
  // Next.js Image component automatically handles basePath from next.config.js
  // So we can just return the path as-is
  return path
}

