# Fix Custom Domain Design Issues

## Problem
When deploying to a custom domain, the design breaks because Next.js static export embeds the `basePath` into the HTML at build time. If the build uses `/mdzamanportfolio` as basePath, all CSS/JS assets will have that prefix, causing 404 errors on custom domains.

## Solution

### Step 1: Set GitHub Secret

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `USE_CUSTOM_DOMAIN`
5. Value: `true` (lowercase, no quotes)
6. Click **Add secret**

### Step 2: Verify Workflow is Updated

The workflow file (`.github/workflows/deploy.yml`) should now use:
```yaml
USE_CUSTOM_DOMAIN: ${{ secrets.USE_CUSTOM_DOMAIN }}
GITHUB_PAGES: ${{ secrets.USE_CUSTOM_DOMAIN != 'true' && 'true' || '' }}
```

### Step 3: Trigger New Deployment

1. Push any change to trigger the workflow, OR
2. Go to **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

### Step 4: Verify Build Logs

In the GitHub Actions build logs, check:
- Look for: `USE_CUSTOM_DOMAIN env will be: true`
- The build should use empty `basePath`

### Step 5: Check Deployed HTML

After deployment, check the HTML source:
- **Correct (custom domain):** `<link href="/_next/static/css/...">`
- **Wrong:** `<link href="/mdzamanportfolio/_next/static/css/...">`

## Quick Test

1. Open your custom domain in browser
2. Right-click → **View Page Source**
3. Search for `_next/static`
4. If you see `/mdzamanportfolio/_next/static`, the build is wrong
5. If you see `/_next/static`, it's correct

## Alternative: Manual Workflow Update

If secrets aren't working, you can manually update the workflow:

```yaml
- name: Build with Next.js
  run: npm run build
  env:
    USE_CUSTOM_DOMAIN: 'true'  # Change this line
    NODE_ENV: 'production'
```

**Important:** Remove or comment out `GITHUB_PAGES: 'true'` when using custom domain.

## Troubleshooting

### Issue: Still seeing `/mdzamanportfolio` in asset paths

**Solution:**
1. Verify `USE_CUSTOM_DOMAIN` secret is set to `true` (exactly lowercase)
2. Check build logs show the secret is being used
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check GitHub Pages settings - make sure custom domain is configured

### Issue: Assets load but design still broken

**Solution:**
1. Check browser console for CSS errors
2. Verify CSS files are loading (Network tab)
3. Check if CSS is being blocked by CORS or CSP headers
4. Verify `globals.css` is being loaded

### Issue: Build fails

**Solution:**
1. Check GitHub Actions logs for errors
2. Verify Node.js version is compatible
3. Check if all dependencies are installed correctly

## Expected Behavior

**With Custom Domain (`USE_CUSTOM_DOMAIN=true`):**
- `basePath` in `next.config.js` = `''` (empty)
- HTML has: `/_next/static/css/...`
- Images: `/images/...`
- All assets load from root

**Without Custom Domain (GitHub Pages subpath):**
- `basePath` in `next.config.js` = `'/mdzamanportfolio'`
- HTML has: `/mdzamanportfolio/_next/static/css/...`
- Images: `/mdzamanportfolio/images/...`
- All assets load from subpath

## Verification Checklist

After deployment:
- [ ] `USE_CUSTOM_DOMAIN` secret is set to `true`
- [ ] Build logs show correct environment variable
- [ ] HTML source shows `/_next/static/...` (not `/mdzamanportfolio/_next/static/...`)
- [ ] Browser Network tab shows assets loading successfully
- [ ] No 404 errors in browser console
- [ ] CSS styling appears correctly
- [ ] All images load properly

