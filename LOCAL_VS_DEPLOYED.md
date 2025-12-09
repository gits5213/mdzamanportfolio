# Local vs Deployed Version Differences - Fixed

## Problem
The local version and deployed GitHub Pages version looked different due to path issues.

## Root Cause
- GitHub Pages deploys to a subpath: `username.github.io/mdzamanportfolio/`
- Local development runs at root: `localhost:3000/`
- Images and assets were using absolute paths that didn't account for the base path

## Solution Applied

### 1. Dynamic BasePath Configuration
Updated `next.config.js` to automatically use `/mdzamanportfolio` basePath when building for GitHub Pages:

```javascript
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGitHubPages ? '/mdzamanportfolio' : ''
```

### 2. Path Utilities
Created utility functions to handle paths correctly:
- `app/utils/imagePath.js` - For image paths (Next.js Image handles basePath automatically)
- `app/utils/pathUtils.js` - For other asset paths (PDFs, etc.)

### 3. Updated Components
All components now use the utility functions:
- `LandingPage.js` - Profile image
- `Resume.js` - Profile image and PDF links
- `Contact.js` - Profile image

## Testing Locally

### Test without basePath (normal local dev):
```bash
npm run dev
```
Visit: http://localhost:3000

### Test with basePath (simulate GitHub Pages):
```bash
GITHUB_PAGES=true npm run dev
```
Visit: http://localhost:3000/mdzamanportfolio

Note: You may need to update `next.config.js` temporarily to always use basePath for local testing.

## How It Works

1. **Local Development**: 
   - `GITHUB_PAGES` is not set
   - `basePath = ''` (empty)
   - Site runs at `localhost:3000/`

2. **GitHub Pages Build**:
   - `GITHUB_PAGES=true` is set in workflow
   - `basePath = '/mdzamanportfolio'`
   - Site runs at `username.github.io/mdzamanportfolio/`

3. **Next.js Image Component**:
   - Automatically prepends basePath to image src
   - Works correctly in both environments

4. **Other Assets (PDFs, etc.)**:
   - Use `getAssetPath()` utility function
   - Ensures correct paths in both environments

## Verification

After deployment, verify:
- ✅ Images load correctly
- ✅ CSS/styles render properly
- ✅ Navigation links work
- ✅ PDF downloads work
- ✅ All pages are accessible

## If Issues Persist

1. Clear browser cache
2. Check browser console for 404 errors
3. Verify GitHub Pages URL structure
4. Check that `GITHUB_PAGES=true` is set in workflow

