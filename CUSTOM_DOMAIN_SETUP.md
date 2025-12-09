# Custom Domain Setup Guide

This guide explains how to configure your portfolio for deployment to a custom domain on GitHub Pages.

## The Problem

When deploying to a custom domain (e.g., `yourdomain.com`), the `basePath` should be empty (`''`), but when deploying to GitHub Pages subpath (e.g., `username.github.io/repository`), the `basePath` needs to be `/mdzamanportfolio`.

## Solution

The code now automatically detects whether you're using a custom domain or GitHub Pages subpath:

1. **Client-side detection**: Checks the current URL's hostname
2. **Server-side detection**: Uses environment variables

## Configuration Options

### Option 1: Automatic Detection (Recommended)

The code automatically detects custom domains by checking if the hostname contains `github.io` or `github.com`. If it doesn't, it assumes a custom domain and uses an empty `basePath`.

**No configuration needed** - it works automatically!

### Option 2: Environment Variable (For Build Time)

If you want to explicitly set it during build, you can use the `USE_CUSTOM_DOMAIN` environment variable:

1. **For Custom Domain Build:**
   ```bash
   USE_CUSTOM_DOMAIN=true npm run build
   ```

2. **For GitHub Pages Subpath Build:**
   ```bash
   GITHUB_PAGES=true npm run build
   ```

### Option 3: Update GitHub Actions Workflow

If you're using a custom domain, update `.github/workflows/deploy.yml`:

```yaml
- name: Build with Next.js
  run: npm run build
  env:
    USE_CUSTOM_DOMAIN: 'true'  # Use this for custom domain
    NODE_ENV: 'production'
```

**OR** keep it as is for GitHub Pages subpath:

```yaml
- name: Build with Next.js
  run: npm run build
  env:
    GITHUB_PAGES: 'true'  # Use this for GitHub Pages subpath
    NODE_ENV: 'production'
```

## Setting Up Custom Domain on GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Custom domain**, enter your domain (e.g., `yourdomain.com`)
4. GitHub will create a `CNAME` file in your repository
5. Configure DNS records with your domain provider:
   - **A Record**: Point to GitHub Pages IP addresses
   - **CNAME Record**: Point to `username.github.io`

## Testing

### Test Locally

1. **For Custom Domain:**
   ```bash
   USE_CUSTOM_DOMAIN=true npm run build
   npm run start
   ```
   Visit `http://localhost:3000` - everything should work correctly

2. **For GitHub Pages Subpath:**
   ```bash
   GITHUB_PAGES=true npm run build
   npm run start
   ```
   Visit `http://localhost:3000/mdzamanportfolio` - everything should work correctly

### Test After Deployment

1. **Custom Domain**: Visit your custom domain (e.g., `https://yourdomain.com`)
2. **GitHub Pages**: Visit `https://username.github.io/mdzamanportfolio`

## Troubleshooting

### Issue: Design/CSS broken on custom domain

**Solution**: Make sure `basePath` is empty. Check:
1. The build used `USE_CUSTOM_DOMAIN=true` OR
2. The automatic detection is working (check browser console for path issues)

### Issue: Assets not loading

**Solution**: 
1. Check browser console for 404 errors
2. Verify the asset paths don't have `/mdzamanportfolio` prefix when using custom domain
3. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Still seeing `/mdzamanportfolio` in URLs

**Solution**: 
1. Clear browser cache
2. Check that the build was done with `USE_CUSTOM_DOMAIN=true`
3. Verify the GitHub Actions workflow is using the correct environment variable

## How It Works

The code uses multiple detection methods:

1. **Client-side (Runtime)**:
   - Checks `window.location.hostname`
   - If hostname doesn't contain `github.io` or `github.com`, assumes custom domain
   - If pathname starts with `/mdzamanportfolio`, uses subpath

2. **Server-side (Build time)**:
   - Checks `process.env.USE_CUSTOM_DOMAIN`
   - Falls back to `process.env.GITHUB_PAGES`
   - Defaults to empty string

This ensures the correct `basePath` is used in all scenarios.

## Files Updated

- `next.config.js` - Detects custom domain vs GitHub Pages
- `app/utils/pathUtils.js` - Client/server-side basePath detection
- `app/utils/imagePath.js` - Image path handling for custom domains
- `app/utils/faviconPath.js` - Favicon path handling for custom domains

All utility functions now automatically detect the deployment environment and use the correct paths.

