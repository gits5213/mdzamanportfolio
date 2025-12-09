# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js portfolio to GitHub Pages using GitHub Actions.

## Prerequisites

1. A GitHub repository (e.g., `mdzamanportfolio`)
2. GitHub Pages enabled in your repository settings

## Setup Instructions

### Step 1: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### Step 2: Configure Base Path (If Needed)

If your repository name is NOT your GitHub username (e.g., `username/mdzamanportfolio`), you need to configure the base path:

1. Open `next.config.js`
2. Uncomment and update the `basePath` line:
   ```javascript
   basePath: '/mdzamanportfolio', // Replace with your repository name
   trailingSlash: true,
   ```

If your repository is at the root (e.g., `username.github.io`), you can leave `basePath` commented out.

### Step 3: Push to GitHub

1. Commit all changes:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin master
   ```
   (or `git push origin main` if your default branch is `main`)

### Step 4: Trigger Deployment

The GitHub Action will automatically run when you:
- Push to `master` or `main` branch
- Manually trigger it from the **Actions** tab

### Step 5: View Your Site

After the workflow completes successfully, your site will be available at:
- `https://YOUR_USERNAME.github.io/mdzamanportfolio/` (if using basePath)
- `https://YOUR_USERNAME.github.io/` (if repository is username.github.io)

## Troubleshooting

### Build Fails

1. Check the **Actions** tab in your repository
2. Review the build logs for errors
3. Common issues:
   - Missing dependencies
   - Image optimization errors (should be disabled for static export)
   - Path issues

### 404 Errors

- Ensure `basePath` is correctly configured in `next.config.js`
- Check that `trailingSlash: true` is set if using basePath
- Verify GitHub Pages source is set to **GitHub Actions**

### Images Not Loading

- Ensure images are in the `public/` directory
- Use relative paths: `/images/image.png` (not `/mdzamanportfolio/images/image.png`)
- Check that `images.unoptimized: true` is set in `next.config.js`

## Manual Deployment

If you want to test the build locally before pushing:

```bash
npm run build
```

This will create an `out/` directory with the static files. You can preview it locally or manually upload to GitHub Pages.

## Updating Your Site

Simply push changes to your repository, and GitHub Actions will automatically rebuild and redeploy your site.

