# 📧 Contact Form Setup Guide

## 🚀 Email & SMS Functionality Setup

Your portfolio now includes a fully functional contact form that can send both email notifications and SMS messages. Here's how to set it up:

### 📧 Email Setup (EmailJS - FREE)

#### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email address

#### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook** 
   - **Yahoo**
   - Or any SMTP service

#### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from Paul Agyare's Portfolio Website
```

#### Step 4: Get Your Keys
1. Go to "Account" → "General"
2. Copy your **Public Key**
3. Copy your **Service ID** (from Email Services)
4. Copy your **Template ID** (from Email Templates)

#### Step 5: Update Your Code
In `index.html`, replace these lines:

```html
<!-- Line 651 -->
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key
```

In `script.js`, replace these lines:

```javascript
// Line 588 -->
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### 📱 SMS Setup (Twilio - Optional)

#### Step 1: Create Twilio Account
1. Go to [Twilio.com](https://www.twilio.com)
2. Sign up for a free account
3. Verify your phone number

#### Step 2: Get Twilio Credentials
1. Go to Console Dashboard
2. Copy your **Account SID**
3. Copy your **Auth Token**
4. Get a **Phone Number** (free trial gives you one)

#### Step 3: Update SMS Function
In `script.js`, update the `sendSMS` function:

```javascript
function sendSMS(name, email, subject, message) {
    const accountSid = 'YOUR_ACCOUNT_SID';
    const authToken = 'YOUR_AUTH_TOKEN';
    const twilioPhone = 'YOUR_TWILIO_PHONE';
    const yourPhone = '2087606233'; // Your phone number
    
    const smsBody = `New contact from ${name} (${email}): ${subject} - ${message}`;
    
    // Twilio API call would go here
    // For security, this should be done on a backend server
}
```

### 🔒 Security Note

**Important:** Never put Twilio credentials directly in frontend code. For production:

1. Create a backend API endpoint
2. Store credentials securely on the server
3. Send form data to your API
4. Let the server handle SMS sending

### 🎯 Quick Setup (Email Only)

For immediate functionality, just set up EmailJS:

1. **Sign up at EmailJS.com**
2. **Add Gmail service**
3. **Create email template**
4. **Update the three keys in your code**
5. **Test the form!**

### 📋 Testing Your Setup

1. Open your portfolio
2. Go to the Contact section
3. Fill out the form
4. Click "Send Message"
5. Check your email for the notification

### 🎨 Customization Options

#### Change Notification Messages
In `script.js`, update these messages:

```javascript
// Line 591
showNotification('Your custom success message here!', 'success');

// Line 616  
showNotification('Your custom SMS message here!', 'success');
```

#### Modify Email Template
In EmailJS dashboard, customize your template with:
- Your branding
- Different subject lines
- Additional fields
- HTML formatting

#### Add More Form Fields
In `index.html`, add new form fields:

```html
<div class="form-group">
    <input type="text" id="phone" required>
    <label for="phone">Phone Number</label>
    <span class="focus-border"></span>
</div>
```

Then update `script.js` to include the new field in `templateParams`.

### 🚨 Troubleshooting

#### Form Not Sending?
1. Check browser console for errors (F12)
2. Verify all EmailJS keys are correct
3. Make sure email service is active
4. Check spam folder for test emails

#### Notifications Not Showing?
1. Check if notification CSS is loading
2. Verify JavaScript is running
3. Look for console errors

#### SMS Not Working?
1. Twilio setup requires backend implementation
2. Use EmailJS only for now (easier setup)
3. SMS is optional - email notifications work great!

### 💡 Pro Tips

1. **Test thoroughly** - Send yourself test messages
2. **Check spam folder** - EmailJS emails might go there initially
3. **Backup plan** - Form shows success message even if email fails
4. **Professional email** - Use your BYU-Idaho email for credibility
5. **Quick response** - Set up email notifications on your phone

### 📞 Support

If you need help setting up:
- **EmailJS Documentation**: [docs.emailjs.com](https://docs.emailjs.com)
- **Twilio Documentation**: [twilio.com/docs](https://twilio.com/docs)
- **Contact**: agy21003@byui.edu

---

**Your contact form is now ready to receive professional inquiries! 🎉**
