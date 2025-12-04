Suru Digital Care — Final v6 bundle
Generated: 2025-12-04T19:28:23.905057Z

Updates in this v6 bundle:
- 'Services' dropdown moved to left beside logo.
- 'Home' and 'Contact Us' placed on the right as requested.
- Contact page (contact.html) now shows contact details only (no form).
- Animated staff SVG added as background on homepage (agents with headset & pyramid logo on shirt).
- Get Estimate form remains on homepage and posts to /api/sendgrid_send (no-deps serverless).
- WhatsApp visible number: 00918866362533 and wa.me link points to +91 8866362533.

Deploy steps (same as before):
1) Upload repository with folder structure (api/ at root).
2) Set Vercel env vars: SENDGRID_API_KEY and FROM_EMAIL (surudigitalcare@gmail.com).
3) Redeploy and test.

If anything fails, gather:
- Browser DevTools Network => Request Payload for /api/sendgrid_send
- Vercel Functions logs => DEBUG raw body / parsed body
- Exact status text under the form
and paste here for diagnosis.
