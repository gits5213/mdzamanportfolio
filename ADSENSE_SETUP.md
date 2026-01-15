# AdSense Setup Guide

This guide explains what has been implemented and what you need to do next to get your AdSense account approved.

## ✅ What Has Been Fixed

### 1. Privacy Policy Updated
- Added comprehensive Google AdSense disclosure section
- Includes information about cookies, data collection, and user rights
- Provides opt-out links for users

### 2. AdSense Component Created
- Created reusable `components/ads/AdSense.js` component
- Includes separate exported ad components:
  - `BannerAd` - Standard banner ads
  - `InArticleAd` - In-article ads
  - `InFeedAd` - In-feed ads
  - `SidebarAd` - Sidebar ads

### 3. Ad Units Added to Pages
- Added ad units to `HomePage.js` (3 placements)
- Added ad units to `ProjectsPage.js` (2 placements)
- Ad units are strategically placed for better user experience

### 4. ads.txt File Verified
- Located at `/public/ads.txt`
- Format: `google.com, pub-9112023534705295, DIRECT, f08c47fec0942fa0`
- ✅ Correctly formatted and accessible

## 🔧 What You Need to Do Next

### Step 1: Create Ad Units in AdSense

1. Log into your [Google AdSense account](https://www.google.com/adsense/)
2. Go to **Ads** → **By ad unit**
3. Click **+ New ad unit**
4. Create the following ad units:

   **Banner Ad:**
   - Name: "Banner Ad - Portfolio"
   - Size: Responsive
   - Type: Display ads
   - Copy the **Ad unit ID** (format: `1234567890`)

   **In-Article Ad:**
   - Name: "In-Article Ad - Portfolio"
   - Size: Responsive
   - Type: In-article ads
   - Copy the **Ad unit ID**

   **In-Feed Ad:**
   - Name: "In-Feed Ad - Portfolio"
   - Size: Responsive
   - Type: In-feed ads
   - Copy the **Ad unit ID**

### Step 2: Update Ad Slot IDs in Code

Replace the placeholder ad slot IDs (`1234567890`) with your actual AdSense ad unit IDs:

**File: `components/ads/AdSense.js`**

```javascript
// Update these default adSlot values in the exported functions:

export function BannerAd({ className = '', adSlot = 'YOUR_BANNER_AD_SLOT_ID' }) {
  // Replace 'YOUR_BANNER_AD_SLOT_ID' with your actual banner ad slot ID
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <AdSense 
        adSlot={adSlot}
        adFormat="auto"
        fullWidthResponsive={true}
        className="w-full max-w-728px"
      />
    </div>
  )
}

export function InArticleAd({ className = '', adSlot = 'YOUR_IN_ARTICLE_AD_SLOT_ID' }) {
  // Replace 'YOUR_IN_ARTICLE_AD_SLOT_ID' with your actual in-article ad slot ID
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <AdSense 
        adSlot={adSlot}
        adFormat="fluid"
        fullWidthResponsive={true}
      />
    </div>
  )
}

export function InFeedAd({ className = '', adSlot = 'YOUR_IN_FEED_AD_SLOT_ID' }) {
  // Replace 'YOUR_IN_FEED_AD_SLOT_ID' with your actual in-feed ad slot ID
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <AdSense 
        adSlot={adSlot}
        adFormat="fluid"
        fullWidthResponsive={true}
      />
    </div>
  )
}
```

**Alternative:** You can also pass the ad slot ID directly when using the components:

```javascript
import { BannerAd, InArticleAd } from '@/components/ads/AdSense'

// In your component:
<BannerAd adSlot="YOUR_BANNER_AD_SLOT_ID" />
<InArticleAd adSlot="YOUR_IN_ARTICLE_AD_SLOT_ID" />
```

### Step 3: Verify Your Site Meets AdSense Requirements

Before resubmitting, ensure:

✅ **Content Quality:**
- [ ] Your site has substantial, original content
- [ ] Content is well-organized and easy to navigate
- [ ] No placeholder or "under construction" pages
- [ ] Professional appearance

✅ **Navigation:**
- [ ] Clear navigation menu
- [ ] Working internal links
- [ ] Easy to find important pages (About, Contact, Privacy Policy, Terms)

✅ **Legal Pages:**
- [x] Privacy Policy (updated with AdSense disclosure)
- [x] Terms of Use
- [ ] Consider adding an "About" page if you don't have one

✅ **Technical Requirements:**
- [x] ads.txt file is accessible at `/ads.txt`
- [x] AdSense script is loaded in `<head>`
- [x] Ad units are placed on pages
- [ ] Site is fully functional (no broken links, errors)
- [ ] Site loads quickly
- [ ] Mobile-responsive design

✅ **User Experience:**
- [ ] Contact information is easily accessible
- [ ] Site is easy to navigate
- [ ] Content is valuable to visitors
- [ ] No excessive ads (follow AdSense policies)

### Step 4: Test Your Ad Implementation

1. **Deploy your changes** to production
2. **Verify ads.txt is accessible:**
   - Visit: `https://yourdomain.com/ads.txt`
   - Should show: `google.com, pub-9112023534705295, DIRECT, f08c47fec0942fa0`

3. **Check ad units are loading:**
   - Open your site in a browser
   - Open browser DevTools (F12)
   - Check Console for any AdSense errors
   - Verify ad units appear on pages

4. **Use AdSense Preview Tool:**
   - In AdSense dashboard, go to **Ads** → **By site**
   - Use the preview tool to verify ads are showing correctly

### Step 5: Resubmit for Review

1. Log into AdSense
2. Go to **Sites** → **Your site**
3. Click **Request review** or **Fix issues**
4. Ensure all issues are resolved before submitting

## 📋 Common AdSense Rejection Reasons & Solutions

| Issue | Solution |
|-------|----------|
| **Insufficient content** | Add more pages with substantial content (500+ words each) |
| **Missing privacy policy** | ✅ Fixed - Privacy policy now includes AdSense disclosure |
| **No ad units** | ✅ Fixed - Ad units added to key pages |
| **Broken navigation** | Ensure all links work and navigation is clear |
| **Missing contact info** | Ensure contact information is easily accessible |
| **Poor user experience** | Improve site design, loading speed, mobile responsiveness |
| **Incomplete site** | Remove "under construction" pages, complete all sections |
| **Policy violations** | Review AdSense policies, ensure compliance |

## 🔍 Additional Recommendations

### Add an About Page (if missing)
AdSense reviewers often look for an "About" page. Consider adding one if you don't have it.

### Improve Content Depth
- Ensure each page has substantial content (300+ words)
- Add more detailed descriptions
- Include more information about your services/experience

### Verify Site Performance
- Use Google PageSpeed Insights to check loading speed
- Fix any performance issues
- Ensure mobile responsiveness

### Check for Broken Links
- Use a tool like [Broken Link Checker](https://www.brokenlinkcheck.com/)
- Fix any broken internal or external links

## 📞 Need Help?

If you continue to face issues:

1. **Check AdSense Help Center:** https://support.google.com/adsense
2. **Review AdSense Policies:** https://support.google.com/adsense/answer/48182
3. **Contact AdSense Support:** Through your AdSense dashboard

## 🎯 Quick Checklist Before Resubmitting

- [ ] Created ad units in AdSense dashboard
- [ ] Replaced placeholder ad slot IDs with real ones
- [ ] Deployed changes to production
- [ ] Verified ads.txt is accessible
- [ ] Tested ad units are loading correctly
- [ ] Verified Privacy Policy includes AdSense disclosure
- [ ] Checked all links work
- [ ] Ensured site is mobile-responsive
- [ ] Reviewed content quality and depth
- [ ] Fixed any technical issues
- [ ] Ready to resubmit!

---

**Note:** After updating ad slot IDs, make sure to commit and deploy your changes. AdSense needs to see actual ad units on your live site before approving your account.
