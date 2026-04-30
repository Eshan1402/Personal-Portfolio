# Eshan Saxena — Portfolio

A modern, high-performance personal portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | SSR, routing, image optimization |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations & transitions |
| next-themes | Dark/Light mode |
| react-countup | Animated stat counters |
| react-hot-toast | Toast notifications |
| @tabler/icons-react | Modern icon set |

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css       # Design tokens, animations, base styles
│   ├── layout.js         # Root layout — metadata, fonts
│   └── page.js           # Main page (single-page scroll app)
├── components/
│   ├── Navbar.jsx        # Glassmorphism sticky nav + mobile drawer
│   ├── Hero.jsx          # Animated hero with typewriter + rotating photo
│   ├── About.jsx         # Bio, skill bars, education, tech stack
│   ├── Stats.jsx         # Animated counter cards
│   ├── Projects.jsx      # Filterable grid + lightbox modal
│   ├── Experience.jsx    # Vertical timeline
│   ├── Contact.jsx       # Formspree contact form
│   ├── Footer.jsx        # CTA footer
│   └── ThemeToggle.jsx   # Dark/Light toggle
├── lib/
│   └── data.js           # All portfolio content (single source of truth)
└── public/
    └── images/           # Optimized images
```

## ⚡ Getting Started

```bash
cd portfolio-nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — click **Deploy**

Or use the CLI:
```bash
npx vercel --prod
```

## 📝 Customization

### Update your content
Edit `/lib/data.js` — all text, projects, experience, and links are centralized here.

### Add project screenshots
Drop PNG/JPG files into `public/images/projects/` and reference them in `lib/data.js`.

### Contact form
The form uses [Formspree](https://formspree.io). Replace the endpoint in `components/Contact.jsx`:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', ...);
```

### Colors
Edit the CSS custom properties in `app/globals.css`:
```css
:root {
  --accent: #7c3aed;       /* Primary purple */
  --accent-2: #a855f7;     /* Secondary purple */
}
```

## 👨‍💻 Author

**Eshan Saxena**
- GitHub: [@Eshan1402](https://github.com/Eshan1402)
- LinkedIn: [Eshan Saxena](https://www.linkedin.com/in/eshan-saxena-3a6170276/)
- Email: eshanbsaxena@gmail.com
