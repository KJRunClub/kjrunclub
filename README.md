# KJ Run Club — Grayscale Slideshow Site

A cinematic, grayscale single-page experience for the Kelana Jaya Run Club (KJRC). Built with Next.js 13 App Router, the site lands on looping slideshow sections, full-height imagery, and data-driven content so the crew can keep every page in sync without touching layout code.

## ✨ Highlights
- **Slide-by-slide storytelling** – Every primary page is a snap-scrolling slideshow fed from `content/club.json`, making updates quick and layout-safe.
- **Grayscale, boxy aesthetic** – The UI intentionally avoids rounded corners and color noise, leaning on typography, contrast, and full-width photography.
- **Division-first structure** – Divisions, leadership, and people profiles share a single data source in `content/club.json` for effortless reuse.
- **Contact ready for brands** – The contact flow pushes visitors straight into an email composer while exposing key identity details and social handles.
- **Gallery to Drive** – A dedicated gallery page links to Google Drive collections, ideal for sharing campaign assets and press imagery.

## 🛠 Tech Stack
- **Framework:** [Next.js 13](https://nextjs.org/docs/app) with the App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS (highly customized global styles for the grayscale look)
- **UI Utilities:** clsx, Radix primitives, Embla carousel, Framer Motion
- **Tooling:** ESLint, TypeScript, PostCSS, Vercel Analytics

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Lint the project
npm run lint
```

Visit `http://localhost:3000` to explore the site locally.

## 📁 Content & Configuration
Most of the site copy, navigation, partner logos, and division details live in [`content/club.json`](content/club.json). Update this file to:

- Change global branding, contact details, or navigation links
- Add/remove home page slides (including partner brands)
- Adjust division teams, leadership, or gallery cards
- Control per-page slide sequencing

Whenever you edit `club.json`, TypeScript helpers from [`lib/siteContent.ts`](lib/siteContent.ts) keep imports strongly typed across the app.

## 🖼 Editing Images
- All imagery is intentionally grayscale. When replacing placeholders (e.g., partner logos), upload assets to `/public` or a CDN and update the corresponding URLs in `content/club.json`.
- Slides expect large, high-resolution photography. Use `?auto=format&fit=crop` parameters for external sources to maintain quality.

## ☁️ Deploying to Vercel
1. Push the repo to GitHub (public visibility is fine).
2. Create a new Vercel project and import the repository.
3. Vercel auto-detects Next.js. Environment configuration isn’t required unless you add APIs.
4. Trigger a deploy – Vercel runs `npm install`, `npm run build`, and `npm run start`.
5. Configure your custom domain under **Project Settings → Domains** if needed.

Need to re-deploy after content edits? Push to main or trigger **Deploy** in Vercel’s dashboard.

## 📜 Useful Scripts
| Script | Description |
| ------ | ----------- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production bundle |
| `npm run start` | Run the production server locally |
| `npm run lint` | Lint with Next.js + project rules |

## 🤝 Contributing
Open to pull requests! Please run `npm run lint` before committing and follow the existing grayscale, square-edged visual language when adding pages or components.

---
Built for the KJRC — every stride, every story, monochrome and in motion.

MEDIA DVSN
Afiq Xilantra
