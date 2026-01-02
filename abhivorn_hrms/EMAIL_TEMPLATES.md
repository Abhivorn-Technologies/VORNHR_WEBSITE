
# EmailJS Template Configuration Guide

To ensure your emails look exactly as requested, you must copy and paste the following content into your EmailJS Dashboard templates.

## 1. Customer Auto-Reply Template (`template_szqjpmq`)
Go to **Email Templates** -> Select (`template_szqjpmq`) -> **Content** Tab.

**Subject:**
```text
We've received your message
```

**Content:**
```text
<img src="https://abhivorn.com/abhivorn.png" style="height: 40px;" alt="Abhivorn Logo" />

Hi {{name}},

Thank you for reaching out to VORN HR.

We have successfully received your request titled:
"{{title}}"

Our HR team will review your request and get back to you within
3 business days.

If you have additional details to share, simply reply to this email.

Best regards,
VORN HR Team
support@abhivorn.com
```

---

## 2. HR Notification Template (`template_4mfju7k`)
Go to **Email Templates** -> Select (`template_4mfju7k`) -> **Content** Tab.

**Subject:**
```text
New Request: {{subject}} - {{from_name}}
```

**Content:**
```text
Hello HR Team,

A new request has been received through the VORN HR website.

----------------------------------
👤 Name:
{{from_name}}

📧 Email:
{{from_email}}

📱 Phone:
{{phone}}

🏢 Company:
{{company}}

📝 Request Title:
{{subject}}

📝 Message:
{{message}}

----------------------------------

Please review the request and respond within 3 business days.

Best regards,
VORN HR System

Email sent via EmailJS.com
```

---

## Important Settings Reminder
Ensure your **"To Email"** fields are set correctly in the dashboard:
1. **HR Template**: Set "To Email" to `{{to_email}}`
2. **Customer Template**: Set "To Email" to `{{email}}` (or `{{to_email}}`, the code sends both)
