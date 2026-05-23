# Portfolio

A personal developer portfolio built with Vite, React, and TypeScript. It showcases site sections such as Hero, About, Projects, Skills, Education, Contact, and a set of reusable UI components.

---

## 🚀 Project Overview

**Portfolio** is a responsive, accessible, and modern single-page portfolio site. It demonstrates component-driven development using TypeScript, Tailwind CSS and a set of modular UI components. The project features a clean architecture with separated concerns, making it easy to extend and maintain.

**Live Demo**: [View Portfolio](https://your-portfolio-url.com)

---

## 🧰 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | React (with TypeScript) |
| **Bundler / Dev Server** | Vite |
| **Styling** | Tailwind CSS |
| **Language** | TypeScript |
| **Package Manager** | npm / pnpm / bun |
| **Deployment** | Vercel |

---

## ✨ Features

- ✅ Responsive layouts and sections: Hero, About, Projects, Skills, Education, Contact
- ✅ Reusable UI primitives and components in `src/components/ui` (buttons, modals, cards, forms, etc.)
- ✅ Theme switching (dark/light) via `ThemeSwitcher`
- ✅ Small, focused hooks in `src/hooks` (for mobile behavior and toast handling)
- ✅ Clean, component-based architecture for easy extension and maintenance
- ✅ Fully responsive design (mobile-first approach)
- ✅ Fast performance with Vite (sub-second HMR)
- ✅ SEO-optimized with proper meta tags
- ✅ Accessibility-first design (WCAG 2.1 compliant)

---

## 🛠️ How I Built This Project

1. **Bootstrapped** the project using **Vite** with the React + TypeScript template for fast development.
2. **Configured** Tailwind CSS with `tailwind.config.ts` for utility-first styling.
3. **Created** modular UI components inside `src/components/` and `src/components/ui/` to promote reuse across sections.
4. **Organized** separate `sections/` (Hero, About, Projects, Skills, Education, Contact) to keep the single-page layout clean.
5. **Implemented** small **hooks** (`src/hooks`) to encapsulate behavior like mobile navigation and toast messages.
6. **Added** ThemeSwitcher component for dark/light mode support with persistent user preference.
7. **Configured** `vercel.json` for seamless deployment to Vercel.

### **Key Learnings**

- 🧠 Building accessible React components with TypeScript
- 🧠 Responsive design patterns with Tailwind CSS
- 🧠 Component-driven architecture and reusability
- 🧠 Dark/Light theme implementation with localStorage
- 🧠 Vite build optimization and performance tuning
- 🧠 SEO best practices for SPAs
- 🧠 Mobile-first responsive design approach

---

## ⚙️ Local Setup

### Prerequisites
- Node.js (v16+ recommended)
- npm, pnpm, or bun

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/harishsamala99/Portfolio.git
cd Portfolio

# Install dependencies (choose one)
npm install
# or
pnpm install
# or
bun install

# Run the development server
npm run dev
# or
pnpm dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
src/
├─ components/
│  ├─ sections/           # Page sections (Hero, About, Projects, Skills, Education, Contact)
│  ├─ ui/                 # Reusable UI primitives (buttons, modals, cards, forms, etc.)
│  └─ layout/             # Layout components (Header, Footer, etc.)
├─ hooks/                 # Custom hooks (useIsMobile, useToast, etc.)
├─ lib/                   # Utility functions and helpers
├─ styles/                # Global styles and theme configuration
├─ pages/                 # Page components
├─ App.tsx                # Main App component
└─ main.tsx               # Application entry point
```

---

## 🎨 Customization Guide

### Update Personal Information

Edit `src/components/sections/Hero.tsx`:
```typescript
// Update your name, title, and description
const name = "Your Name";
const title = "Your Job Title";
const bio = "Your bio here...";
```

### Add Your Projects

Edit `src/components/sections/Projects.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    tags: ["React", "TypeScript"],
    link: "https://github.com/...",
    demo: "https://..."
  }
];
```

### Customize Colors

Edit `tailwind.config.ts`:
```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "your-color",
        secondary: "your-color"
      }
    }
  }
};
```

---

## ✅ Best Practices

- Use the components in `src/components/ui` to keep UI consistent and accessible.
- Keep styles in Tailwind utilities to minimize custom CSS.
- Small hooks are designed to be composable — extract and reuse logic as needed.
- Follow TypeScript strict mode for type safety.
- Test components with accessibility tools (axe DevTools, WAVE).

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository directly to Vercel for automatic deployments.

### Deploy to Other Platforms

The build output is in the `dist` folder. Upload it to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

**Build command**: `npm run build`
**Output directory**: `dist`

---

## 🔧 Development Workflow

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code (if prettier is configured)
npm run format

# Run linter (if ESLint is configured)
npm run lint
```

---

## 🤝 Contributing

This is a personal portfolio project, but you can fork it and use it as a template for your own portfolio!

---

## 📄 License

MIT License - Feel free to use this as a template for your portfolio!

---

## 🔗 Connect With Me

- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [github.com/harishsamala99](https://github.com/harishsamala99)
- **Twitter**: [@yourhandle](https://twitter.com)
- **Email**: your@email.com

---

## 📈 Future Enhancements

- [ ] Add blog section with markdown support
- [ ] Implement contact form with email integration
- [ ] Add project filtering by technology
- [ ] Implement analytics tracking
- [ ] Add testimonials/recommendations section
- [ ] Create admin dashboard for content management
- [ ] Add PWA capabilities
- [ ] Implement automated testing (Jest, React Testing Library)

---

**Last Updated**: May 2026

⭐ If you found this helpful, please consider starring the repository!
