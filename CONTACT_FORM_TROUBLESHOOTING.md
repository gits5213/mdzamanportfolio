# Contact Form Troubleshooting Guide

## Issues Fixed

### 1. Local Error: "Sorry, there was an error sending your message"
**Cause**: CORS issues with Google Apps Script or script not handling form data correctly.

**Solution**: 
- Updated the form to use iframe submission (avoids CORS)
- Updated Google Apps Script to handle form data (see updated script in GOOGLE_DRIVE_SETUP.md)

### 2. After Deployment: Falls back to mailto
**Cause**: Environment variables don't work with Next.js static export (GitHub Pages).

**Solution**: 
- Added Google Script URL to `app/config/contact.js` for production
- Code now uses config file as fallback when env var is not available

### 3. No Data in Google Sheet
**Possible Causes**:
1. Google Apps Script not updated with new code
2. Google Sheet not linked to the script
3. Script not deployed correctly

## Steps to Fix

### Step 1: Update Your Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Open your script project
3. Replace the `doPost` function with the updated code from `GOOGLE_DRIVE_SETUP.md`
4. The new code handles both JSON and form data

### Step 2: Verify Google Sheet Setup

1. Make sure your Google Sheet has these headers in Row 1:
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Reason`
   - Column E: `Message`

2. Make sure the script is bound to the correct sheet:
   - In Apps Script editor, check that `SpreadsheetApp.getActiveSpreadsheet()` refers to your sheet

### Step 3: Redeploy the Script

1. In Apps Script editor, click **Deploy** → **Manage deployments**
2. Click the pencil icon (✏️) to edit
3. Click **Deploy** to redeploy with new code
4. Make sure "Who has access" is set to **"Anyone"**

### Step 4: Test the Form

1. **Locally**: 
   - Make sure `.env.local` has `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` set
   - Restart dev server: `npm run dev`
   - Submit the form and check Google Sheet

2. **After Deployment**:
   - The config file (`app/config/contact.js`) should have your Google Script URL
   - Submit the form and check Google Sheet

### Step 5: Check Google Apps Script Execution Log

1. Go to Apps Script editor
2. Click **View** → **Execution log**
3. Look for any errors when you submit the form
4. Check the "Last execution" to see if the script ran

## Testing the Google Script Directly

You can test your Google Script directly:

1. In Apps Script editor, click **Run** → **test** (or create a test function)
2. Or use curl:
```bash
curl -X POST "YOUR_GOOGLE_SCRIPT_URL" \
  -d "name=Test User" \
  -d "email=test@example.com" \
  -d "reason=Job Opportunity" \
  -d "message=Test message" \
  -d "timestamp=2024-01-01T00:00:00.000Z"
```

## Common Issues

### Issue: "Script function not found"
- Make sure the function is named `doPost` (case-sensitive)
- Make sure you saved the script

### Issue: "Cannot read property 'getActiveSheet'"
- Make sure the script is bound to a Google Sheet
- Or update the script to use `SpreadsheetApp.openById('YOUR_SHEET_ID')`

### Issue: Data not appearing in sheet
- Check execution log for errors
- Verify sheet permissions (script needs edit access)
- Make sure sheet headers match the script expectations

### Issue: CORS errors in browser console
- The iframe method should avoid CORS, but if you see errors, make sure:
  - Script is deployed as "Web app"
  - "Who has access" is set to "Anyone"
  - Script URL is correct

## Next Steps

1. Update your Google Apps Script with the new code
2. Redeploy the script
3. Test locally and after deployment
4. Check Google Sheet for submissions

If issues persist, check the browser console and Google Apps Script execution log for specific error messages.

