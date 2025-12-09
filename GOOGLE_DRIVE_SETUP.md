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
    let data;
    
    // Handle both JSON and form data
    if (e.postData && e.postData.contents) {
      try {
        // Try to parse as JSON first
        data = JSON.parse(e.postData.contents);
      } catch (e) {
        // If not JSON, parse as form data
        data = {};
        const params = e.parameter;
        data.name = params.name || '';
        data.email = params.email || '';
        data.reason = params.reason || '';
        data.message = params.message || '';
        data.timestamp = params.timestamp || new Date().toISOString();
      }
    } else {
      // Handle form data from POST request
      const params = e.parameter;
      data = {
        name: params.name || '',
        email: params.email || '',
        reason: params.reason || '',
        message: params.message || '',
        timestamp: params.timestamp || new Date().toISOString()
      };
    }
    
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
    
    // Send email notification
    const recipientEmail = 'mdzaman.jobs@gmail.com'; // Change this to your email
    const emailSubject = `New Contact Form Submission: ${data.reason}`;
    const emailBody = `
New contact form submission received:

Name: ${data.name}
Email: ${data.email}
Reason: ${data.reason}
Timestamp: ${data.timestamp || new Date().toISOString()}

Message:
${data.message}

---
This email was sent automatically from your portfolio contact form.
You can reply directly to ${data.email} to respond.
    `.trim();
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Reason:</strong> ${data.reason}</p>
          <p><strong>Timestamp:</strong> ${data.timestamp || new Date().toISOString()}</p>
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #1f2937;">Message:</h3>
          <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin: 10px 0;">
            <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent automatically from your portfolio contact form.</p>
          <p>You can reply directly to <a href="mailto:${data.email}">${data.email}</a> to respond.</p>
        </div>
      </div>
    `;
    
    try {
      MailApp.sendEmail({
        to: recipientEmail,
        subject: emailSubject,
        body: emailBody,
        htmlBody: emailHtml,
        replyTo: data.email // Set reply-to so you can reply directly
      });
    } catch (emailError) {
      // Log email error but don't fail the form submission
      console.error('Email notification failed:', emailError);
      // You can optionally log this to the sheet or send to a different email
    }
    
    // Return success response
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

## Email Notifications

The script now includes email notifications! When a form is submitted, you'll receive an email with:
- Form submission details (name, email, reason, message)
- HTML formatted email for better readability
- Reply-to set to the submitter's email for easy response

**To customize the recipient email:**
1. In the `doPost` function, find the line: `const recipientEmail = 'mdzaman.jobs@gmail.com';`
2. Change it to your preferred email address
3. Save and redeploy the script

**Email Features:**
- ✅ Sends to: `mdzaman.jobs@gmail.com` (configurable)
- ✅ Reply-to: Set to submitter's email for easy response
- ✅ HTML formatted for better readability
- ✅ Includes all form data
- ✅ Won't fail form submission if email fails (error handling included)

