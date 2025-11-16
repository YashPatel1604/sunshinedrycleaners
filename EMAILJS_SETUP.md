# EmailJS Setup Guide

This guide will help you set up EmailJS so your contact form sends emails directly to your inbox.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Create an account using your email address
4. Verify your email address

## Step 2: Add Email Service

1. Once logged in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended if you use Gmail)
   - **Outlook** (if you use Outlook/Hotmail)
   - **Yahoo** (if you use Yahoo)
   - Or choose **"Custom SMTP"** for other providers
4. Follow the setup instructions for your provider
5. **Save your Service ID** - you'll need this later (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template:

   **Template Name:** Contact Form
   
   **Subject:** New Contact Form Submission from {{from_name}}
   
   **Content:**
   ```
   You have received a new message from your website contact form.
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   
   Message:
   {{message}}
   
   ---
   This email was sent from the Sunshine Dry Cleaners website contact form.
   ```

4. Click **"Save"**
5. **Save your Template ID** - you'll need this later (looks like: `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **"Public Key"** (looks like: `xxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Update Your Website Code

1. Open `js/script.js` in your code editor
2. Find this line (around line 56):
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
3. Replace `YOUR_PUBLIC_KEY` with your actual Public Key from Step 4
   ```javascript
   emailjs.init("abc123xyz789"); // Example - use your actual key
   ```

4. Find this line (around line 100):
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
   ```
5. Replace `YOUR_SERVICE_ID` with your Service ID from Step 2
6. Replace `YOUR_TEMPLATE_ID` with your Template ID from Step 3
   ```javascript
   emailjs.send('service_abc123', 'template_xyz789', templateParams)
   ```

## Step 6: Test Your Form

1. Open your website in a browser
2. Go to the Contact section
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox - you should receive the message!

## Troubleshooting

### Form not sending emails?
- Check browser console (F12) for error messages
- Verify all three IDs are correct (Public Key, Service ID, Template ID)
- Make sure your email service is connected in EmailJS dashboard
- Check that the template variables match: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`

### Getting error messages?
- **"Invalid Public Key"**: Double-check your Public Key in Account settings
- **"Service not found"**: Verify your Service ID is correct
- **"Template not found"**: Verify your Template ID is correct
- **"Email service error"**: Check your email service connection in EmailJS dashboard

### Need help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Check their help center or contact support

## Free Tier Limits

EmailJS free tier includes:
- **200 emails per month** - Perfect for small businesses
- Basic email templates
- Standard support

If you need more, they offer paid plans starting at $15/month for 1,000 emails.

## Security Note

Your Public Key is safe to use in frontend code - it's designed to be public. However, make sure:
- Your Service ID and Template ID are also in the frontend (this is normal for EmailJS)
- EmailJS handles rate limiting and spam protection
- Never share your email service password (it's stored securely in EmailJS)

## Quick Reference

After setup, you should have these three values:
1. **Public Key**: `xxxxxxxxxxxxx` → Goes in `emailjs.init()`
2. **Service ID**: `service_xxxxxxx` → Goes in `emailjs.send()` first parameter
3. **Template ID**: `template_xxxxxxx` → Goes in `emailjs.send()` second parameter

Update these in `js/script.js` and you're all set!

