
# EmailJS Deployment Instructions

Your code is successfully set up to send emails using EmailJS. However, for it to work correctly, your EmailJS dashboard configuration **must** match the variables used in the code.

## 1. Environment Variables (.env)
Ensure your `.env` file contains these values (as previously set):
```env
VITE_EMAILJS_SERVICE_ID=service_cm4k3rr
VITE_EMAILJS_HR_TEMPLATE_ID=template_4mfju7k
VITE_EMAILJS_USER_TEMPLATE_ID=template_szqjpmq
VITE_EMAILJS_PUBLIC_KEY=9EFlXjsjum4h_c7K6
VITE_HR_EMAIL=hr@abhivorn.com
```

### 1.1. CRITICAL: Reply-To Setting
**Why am I receiving my own replies?**
If you click "Reply" on a notification email and it addresses **YOURSELF**, your template is wrong.

1. Go to **Email Templates** -> **HR Template** (`template_4mfju7k`).
2. Find the **Reply To** field (usually on the right side).
3. **DELETE** your email from there.
4. Enter exactly: `{{reply_to}}`
5. Save.

This tells EmailJS: "When I reply, use the email address of the PERSON WHO FILLED THE FORM."

**IMPORTANT:** If you changed the `.env` file, you MUST stop the server (`Ctrl + C`) and run `npm run dev` again.

---

## 2. Configure "Service" (Fixing Error 412)
**Error 412 (SMTP Connection Timeout)** means EmailJS cannot log in to your email provider (Gmail/Outlook) to send the mail.

1. Go to **Email Services** tab in EmailJS.
2. If using **Gmail**:
   - You **cannot** use your normal login password if you have 2-Step Verification enabled.
   - Go to your **Google Account** -> **Security** -> **2-Step Verification**.
   - Scroll to the bottom and create an **App Password**.
   - Use this 16-character App Password in the EmailJS Service configuration instead of your normal password.

---

## 3. Configure "HR Template" (Fixing Error 422)
**Error 422 (Recipient address empty)** means the template doesn't know where to send the email.

1. Go to **Email Templates** -> Select your **HR Template** (`template_4mfju7k`).
2. **To Email**: Set this to `{{to_email}}`.
   - *Why?* The code sends the HR email address in a variable named `to_email`.
3. **From Name**: `{{from_name}}`
4. **Subject**: `{{subject}} - New Inquiry`
5. **Message Content**:
   ```text
   New message from: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   
   Message:
   {{message}}
   ```

---

## 4. Configure "User Template" (Auto-Reply)
1. Go to **Email Templates** -> Select your **User Template** (`template_szqjpmq`).
2. **To Email**: Set this to `{{to_email}}`.
   - *Why?* The code sends the visitor's email in this variable.
3. **Reply To**: `{{reply_to}}`
   - *Why?* So when the user replies, it goes to HR.
4. **Message Content**:
   ```text
   Hi {{to_name}},
   
   Thanks for contacting Abhivorn. We have received your message regarding "{{subject}}".
   Our team will get back to you shortly.
   
   Best,
   Abhivorn HR Team
   ```

---

## Troubleshooting
- **Check Console**: Open Browser Console (F12). The code logs "HR Email Sent" or specific error messages.
- **Alerts**: The app will now show specific alerts for 412 (Service Error) and 422 (Template Error).
