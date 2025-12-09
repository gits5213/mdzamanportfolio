# Google Drive Form Submission Setup Guide

This guide will help you set up Google Apps Script to store form submissions in Google Drive (via Google Sheets).

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Form Submissions"
4. Add headers in Row 1:
   - Column A: `Timestamp`
   - Column B: `Name`
   - Column C: `Email`
   - Column D: `Reason`
   - Column E: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code
3. Copy and paste this code:

function doPost(e) {
  try {
    // Parse the JSON data from the form
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the data as a new row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.reason || '',
      data.message || ''
    ]);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS preflight requests
function doOptions() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.JSON);
}

// Test function (optional - for testing in Apps Script editor)
function test() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    reason: 'Job Opportunity',
    message: 'This is a test message'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  doPost(mockEvent);
}
```

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: "Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (important for public forms)
4. Click **Deploy**
5. Copy the **Web app URL** - this is your `GOOGLE_SCRIPT_URL`

## Step 4: Authorize the Script

1. When you first deploy, you'll be asked to authorize
2. Click **Authorize access**
3. Choose your Google account
4. Click **Advanced** → **Go to [Project Name] (unsafe)**
5. Click **Allow**

## Step 5: Update Your Environment Variable

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your Google Script URL:

```env
  NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Restart your development server

## Step 6: For Production (GitHub Pages)

Since GitHub Pages doesn't support environment variables for static exports, you have two options:

### Option A: Use Environment Variable (Recommended for Development)
1. Create `.env.local` file in your project root:
```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. The code already uses `process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL` - no changes needed!

3. **Important**: Restart your development server after adding `.env.local`

**Note**: For static export (GitHub Pages), environment variables won't work. Use Option B below.

### Option B: Use a Config File (Required for GitHub Pages)
1. Create `app/config/contact.js`:
```javascript
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
```

2. Update `components/pages/ContactPage.js` to import from config:
```javascript
import { GOOGLE_SCRIPT_URL } from '@/app/config/contact'
```

3. Remove or comment out the environment variable line:
```javascript
// const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''
```

## Testing

1. Fill out the contact form on your website
2. Submit it
3. Check your Google Sheet - you should see a new row with the submission data

## Security Notes

- The Google Apps Script is set to allow "Anyone" to access it, which is necessary for public forms
- Consider adding rate limiting or CAPTCHA if you're concerned about spam
- The script only appends data - it cannot read or modify existing data
- You can add additional validation in the Apps Script if needed

## Troubleshooting

- **CORS errors**: Make sure your Google Apps Script is deployed as a Web App with "Anyone" access
- **No data in sheet**: Check the Apps Script execution log (View → Execution log)
- **Form not submitting**: Check browser console for errors
- **Environment variable not working**: Make sure to restart your dev server after adding `.env.local`

## Optional: Email Notifications

You can enhance the script to send email notifications:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.reason || '',
      data.message || ''
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: 'your-email@gmail.com',
      subject: `New Contact Form Submission: ${data.reason}`,
      body: `Name: ${data.name}\nEmail: ${data.email}\nReason: ${data.reason}\n\nMessage:\n${data.message}`
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

