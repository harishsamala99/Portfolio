# Portfolio

A personal developer portfolio built with Vite, React, and TypeScript. It showcases site sections such as Hero, About, Projects, Skills, Education, Contact, and a set of reusable UI components.

---

## 🚀 Project Overview

**Portfolio** is a responsive, accessible, and modern single-page portfolio site. It demonstrates component-driven development using TypeScript, Tailwind CSS and a set of modular UI components located under `src/components/`. The project is optimized for fast local development (Vite) and easy deployment (Vercel or other static hosts).

---

## 🧰 Tech stack

- **Framework**: React (with TypeScript)
- **Bundler / Dev Server**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package manager**: npm / pnpm / bun (project includes `bun.lockb`)
- **Deployment**: Vercel (configuration available in `vercel.json`)

---

## ✨ Features

- Responsive layouts and sections: Hero, About, Projects, Skills, Education, Contact
- Reusable UI primitives and components in `src/components/ui` (buttons, modals, cards, forms, etc.)
- Theme switching (dark/light) via `ThemeSwitcher`
- Small, focused hooks in `src/hooks` (for mobile behavior and toast handling)
- Clean, component-based architecture for easy extension and maintenance

---

## 🛠 How I created this project

1. Bootstrapped the project using **Vite** with the React + TypeScript template.
2. Added **Tailwind CSS** and configured `tailwind.config.ts` for utility-first styling.
3. Built modular UI components inside `src/components/` and `src/components/ui/` to promote reuse across sections.
4. Implemented separate `sections/` such as `Hero`, `About`, `Projects`, `Skills`, and `Education` to keep the single-page layout organized.
5. Added small **hooks** (`src/hooks`) to encapsulate behavior like mobile navigation and toast messages.
6. Added a `ThemeSwitcher` component and theme utilities to support dark/light modes.
7. Prepared `vercel.json` for deployment to Vercel; you can also deploy it to any static hosting provider.

---

## ⚙️ Local Setup

Prerequisites: Node.js (v16+ recommended) or Bun.

Clone and run locally:

```bash
# Clone
git clone <your-repo-url>
cd <repo-folder>

# Install (choose one)
npm install
# or
pnpm install
# or
bun install

# Run the dev server
npm run dev
# or
pnpm dev
# or
bun run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

---

## 📁 Project structure

```
src/
├─ components/        # Shared components & UI primitives
│  ├─ sections/       # Page sections (Hero, About, Projects, Skills, Education, Contact)
│  └─ ui/             # Reusable UI primitives (buttons, dialogs, inputs, etc.)
├─ hooks/             # Custom hooks (use-mobile, use-toast)
├─ lib/               # Utilities
├─ pages/             # Router pages
└─ main.tsx           # App entry
```

---

## ✅ Good to know / Tips

- Use the components in `src/components/ui` to keep UI consistent and accessible.
- Keep styles in Tailwind utilities to minimize custom CSS.
- Small hooks are designed to be composable — extract and reuse logic as needed.

---

## 📦 Deployment

- For Vercel: connect the repo and use the default settings (build command `npm run build` and output is the `dist` folder created by Vite).
- Static-hosts: upload the output of `npm run build` to any static hosting service.

---

## 🤝 Contributing

Contributions are welcome. Open an issue for suggestions or submit a pull request with a clear description of the change.

---

## 📜 License

This project is provided under the **MIT License** — feel free to adapt and use as a personal portfolio template.

---

## 👨‍💻 Contact

If you'd like to collaborate or need help, open an issue or contact me via the contact section of the site.
