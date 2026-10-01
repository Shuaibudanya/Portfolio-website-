# Shuaibu Abdullahi Danya — Portfolio Website

A modern, responsive portfolio website for Shuaibu Abdullahi Danya, a web developer
based in Kano, Nigeria. Built with plain HTML5, CSS3 and vanilla JavaScript — no
frameworks or build tools required.

## Folder structure

```
portfolio/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── profile.svg
│   ├── project-musa-tailoring.svg
│   ├── project-danya-furniture.svg
│   └── project-school.svg
│
└── README.md
```

## Design

- **Palette:** deep indigo (`#0f1526` / `#131b33` / `#1b2a4a`) paired with a warm
  gold accent (`#d4a017`), on a cream background (`#f7f4ec`) — a nod to Kano's
  indigo-dye heritage combined with a clean, technical developer aesthetic.
- **Type:** Space Grotesk for headings, IBM Plex Sans for body text, IBM Plex Mono
  for small technical labels (loaded from Google Fonts).
- **Hero visual:** a browser/code-editor mockup instead of a generic photo, to keep
  the developer identity front and center.

## Before you publish this, replace the placeholders

This is a real, working site, but a few things are stand-ins until you provide
the real details:

1. **Images** — `images/profile.svg` and the three project thumbnails are simple
   illustrated placeholders (not photos). Swap in real photos/screenshots with the
   same filenames, or update the `src` paths in `index.html` if you rename them.
2. **Project links** — the "Live Demo" and "GitHub" links on each project card in
   `index.html` currently point to `#`. Replace with the real URLs once each
   project is deployed and pushed to GitHub.
3. **GitHub username** — replace `github.com/your-username` in the Contact section
   and footer with your real GitHub profile URL.
4. **WhatsApp number** — the WhatsApp links use `https://wa.me/2348133172137`
   (from `08133172137`). Update this in `index.html` (two places: the CTA section
   and the footer) if you'd like to use a different number.
5. **Contact form** — the form validates input in the browser but has no backend
   yet, so submissions aren't actually sent anywhere. `script.js` shows a success
   message and reminds the visitor to reach you on WhatsApp/email directly. To
   receive submissions by email, connect a service like
   [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) — both
   have free tiers and work with a plain HTML form.
6. **Testimonials** — the three testimonials are clearly labeled as placeholder
   content in both the visible text and the code. Replace with real client
   quotes once you have them; don't present placeholder text as a real review.

## Running it locally

No build step needed. Either:

- Open `index.html` directly in a browser, or
- Serve the folder with a simple local server (recommended, so relative paths
  and any future fetch requests behave correctly):

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Any static hosting service works well here since there's no backend:

- **GitHub Pages** — push this folder to a repository and enable Pages in the
  repo settings.
- **Netlify** or **Vercel** — drag-and-drop the folder (or connect the GitHub
  repo) for a free live URL.

After deploying, update the "Live Demo" links for each project once they're live,
and double-check that image paths still resolve correctly on the live URL.

## Customizing

- Colors and type live at the top of `style.css` in the `:root` block — change
  the values there to retheme the whole site.
- Sections in `index.html` are ordered and commented (`<!-- ============ ... -->`)
  to match the site's flow: Hero → About → Skills → Services → Projects →
  How I Work → Pricing → Why Choose Me → Testimonials → CTA → Contact → Footer.
- `script.js` handles the mobile menu, the active nav-link highlight on scroll,
  a one-time fade-in for each section, and contact form validation.
