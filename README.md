# Vincent Mumo — Portfolio

Personal portfolio of Vincent Mumo, Full-Stack Developer. A dark, single-page site built with React, Tailwind CSS, and Framer Motion.

**Live projects featured:** EscrowEase, Don Jerseys, I-Reporter.

## Tech Stack

- **Frontend**: React 18 (Create React App)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (labels) — self-hosted via Fontsource

## Project Structure

```
portfolio/
├── public/
│   ├── index.html              # Meta tags, Open Graph, favicon links
│   ├── favicon.svg             # VM monogram (+ PNG fallbacks)
│   ├── og.png                  # Social share preview image
│   └── Vincent-Mumo-Resume.pdf
├── src/
│   ├── data/
│   │   └── site.js             # Single source of truth: links, projects, timeline
│   ├── components/
│   │   ├── Navbar.js           # Fixed nav with mobile menu
│   │   ├── Hero.js             # Intro, availability badge, CTAs
│   │   ├── Projects.js         # Featured project + project grid
│   │   ├── ProjectCard.js      # Card with tech chips and links
│   │   ├── Experience.js       # Work & education timeline
│   │   ├── Contact.js          # Email CTA
│   │   ├── Footer.js
│   │   ├── SectionHeading.js   # Numbered editorial section headings
│   │   └── SocialLinks.js      # Shared social icon links
│   ├── App.js                  # Section layout + MotionConfig
│   └── index.css               # Tailwind + global dark theme
└── tailwind.config.js          # Fonts + accent color tokens
```

## Getting Started

```bash
npm install
npm start          # dev server at http://localhost:3000
npm test           # run tests
npm run build      # production build
```

## Editing Content

All content lives in [`src/data/site.js`](src/data/site.js) — contact links, the projects array (title, description, stack, live/repo URLs), and the experience timeline. Components read from it; you shouldn't need to touch JSX to update content.

## Design System

- **Background**: near-black (`#09090b`) with zinc surfaces and borders
- **Accent**: lime (`#a3e635`) — used sparingly for emphasis, CTAs, and markers
- **Type**: Space Grotesk for headings, Inter for body, JetBrains Mono for labels/chips
- Animations respect the user's reduced-motion preference (`MotionConfig reducedMotion="user"`)

## Contact

- **Email**: [vinnymummo@gmail.com](mailto:vinnymummo@gmail.com)
- **LinkedIn**: [Vincent Mumo](https://www.linkedin.com/in/vincent-mumo-940635252/)
- **GitHub**: [@Vinmumo](https://github.com/Vinmumo)
