# Fix GitHub Pages Deployment Error

## Problem
The deployment is failing with error: "Invalid deployment branch and no branch protection rules set in the environment. Deployments are only allowed from gh-pages"

## Solution

You need to configure the GitHub Pages environment to allow deployments from your `master` branch. Here's how:

### Step 1: Configure GitHub Pages Environment

1. Go to your repository: https://github.com/gits5213/mdzamanportfolio
2. Navigate to **Settings** → **Environments**
3. Click on **github-pages** environment (or create it if it doesn't exist)
4. Under **Deployment branches**, select:
   - **Selected branches**: Choose `master` (or `main` if that's your default branch)
   - OR uncheck "Restrict deployments to the selected branches" to allow all branches
5. Click **Save protection rules**

### Step 2: Verify GitHub Pages Settings

1. Go to **Settings** → **Pages**
2. Under **Source**, make sure **GitHub Actions** is selected (not "Deploy from a branch")
3. Save if needed

### Step 3: Re-run the Workflow

1. Go to **Actions** tab
2. Find the failed workflow run
3. Click **Re-run all jobs** (or push a new commit)

## Alternative: Use gh-pages Branch Method

If you prefer to use the `gh-pages` branch method instead, you can use this alternative workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master
      - main

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

But the recommended approach is to fix the environment settings as described in Step 1.

## Verification

After fixing the environment settings, the workflow should:
1. Build successfully ✅
2. Deploy to GitHub Pages ✅
3. Make your site available at: `https://gits5213.github.io/mdzamanportfolio/`

