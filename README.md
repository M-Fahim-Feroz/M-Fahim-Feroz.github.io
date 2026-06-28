# DevOps Portfolio Website

A clean, responsive, static portfolio website designed for a DevOps & Cloud Engineer. Built with semantic HTML, CSS variables, and minimal JavaScript.

## Purpose
This repository serves as a professional landing page showcasing cloud infrastructure projects, CI/CD expertise, and DevSecOps workflows.

## Local Setup
Since this is a static site with no heavy frameworks or build steps, you can run it locally with any simple HTTP server.

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if installed)
npx serve
```
Then open `http://localhost:8000` in your browser.

## Deployment to GitHub Pages
This site is designed to be hosted for free on GitHub Pages.

**Suggested Repository Name:** `M-Fahim-Feroz.github.io`

**Steps to deploy:**
1. Push this code to a public repository named `M-Fahim-Feroz.github.io`.
2. Go to Repository **Settings** > **Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**.
4. Set the branch to `main` and folder to `/ (root)`.
5. Click **Save**. Your site will be live at `https://M-Fahim-Feroz.github.io` within a few minutes.

## Customization Checklist
Before sharing your portfolio, update the following placeholders in `index.html`:
- [ ] Resume PDF link (`href="#"`)
- [ ] LinkedIn profile link (`href="#"`)
- [ ] Ensure the email address is correct (`mailto:cadetfahimferoz@gmail.com`)
- [ ] (Optional) Add project screenshots or thumbnails if desired.

## Note on Secrets
There are no API keys, secrets, or environment variables required to run this static site.
