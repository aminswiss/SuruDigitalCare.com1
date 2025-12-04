Suru Digital Care — Final v7 bundle (Option A background)
Generated: 2025-12-04T19:53:40.858452Z

This bundle places the office staff illustration as a full-right background (Option A).
Files included:
- index.html           (homepage using assets/staff_bg.png as large background artwork)
- contact.html         (contact details, no form)
- assets/staff_bg.png  (the illustration image you provided)
- api/sendgrid_send.js (serverless SendGrid handler)
- README.txt           (this file)

HOW TO UPDATE YOUR EXISTING GITHUB PROJECT (no new project)
1) On your machine, open a terminal.
2) Clone your existing repo (if you haven't): 
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
3) Create a branch (recommended):
   git checkout -b add-background-art
4) Copy the new files into your repo root, preserving folders:
   - copy index.html to repo root (overwrite)
   - copy contact.html to repo root (overwrite)
   - copy api/sendgrid_send.js into repo's api/ (create api/ if missing)
   - copy assets/staff_bg.png into repo's assets/ (create assets/ if missing)
5) Check changes, add, commit & push:
   git add index.html contact.html api/sendgrid_send.js assets/staff_bg.png
   git commit -m "Add full-background staff artwork and layout update (Option A)"
   git push origin add-background-art
6) On GitHub: open a Pull Request from branch add-background-art into main. Merge it (or push directly to main if you prefer).
7) Vercel will automatically build and deploy your updated site once GitHub changes are merged.
8) Wait for Vercel deploy to finish, then visit your site: https://www.surudigitalcare.com/

IMPORTANT: environment variables (unchanged)
- Ensure Vercel project still has SENDGRID_API_KEY and FROM_EMAIL set in Production env vars.

TROUBLESHOOTING
- If the background image does not appear, confirm that 'assets/staff_bg.png' exists in the deployed repo on Vercel.
- If the form fails to send, copy DevTools Network request payload and Vercel function logs for diagnosis.

If you want, I can push these files to a branch in your GitHub repo for you — tell me your repo name and I will prepare the commit files (you still need to merge or approve the PR).

Download this bundle: /mnt/data/surudigitalcare_final_v7.zip
