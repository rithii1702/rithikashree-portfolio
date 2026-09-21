# B. RITHIKASHREE — Data Analyst Portfolio

A modern, professional, and recruiter-ready personal portfolio website for **B. RITHIKASHREE**, an Artificial Intelligence and Machine Learning student aspiring to build a career in **Data Analytics / Data Analyst** roles.

Built strictly on verified resume details with zero synthetic metrics and zero invented achievements.

---

## 🎯 Design System

- **Visual Style:** Clean, minimal, professional, elegant, data/technology inspired, recruiter-friendly.
- **Color Palette:**
  - Background: `#FAF8F5` (off-white / warm cream)
  - Text Primary: `#1C1917` (dark charcoal / near-black)
  - Text Secondary: `#57534E` / `#78716C` (warm stone)
  - Primary Accent: `#78350F` (warm brown / amber)
  - Secondary Accent: `#6D28D9` (subtle purple)
  - Cards: `#FFFFFF` with soft borders (`#E7E5E4`) and subtle shadows.
- **Typography:** `Plus Jakarta Sans` for crisp legibility.
- **Multi-Route Navigation:** Powered by `react-router-dom` with full SPA history support and `ScrollToTop`.

---

## 📂 Project Structure

```
rithikashree-portfolio/
├── public/
│   ├── favicon.svg              # Minimalist monogram icon
│   ├── resume.pdf               # Authentic downloadable resume (/resume.pdf)
│   └── projects/                # Project dashboard screenshots
│       ├── bagbill.png
│       ├── data-detective.png
│       ├── ecommerce-sales.png
│       └── pizza-sales.png
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky top navigation with resume CTA & mobile drawer
│   │   ├── Hero.tsx             # Hero section with role, tagline, social links & data workflow
│   │   ├── About.tsx            # Academic background at RRCE & focus areas
│   │   ├── Skills.tsx           # Categorized skill cards (Data Analytics, Programming, etc.)
│   │   ├── Projects.tsx         # Unified 4-project showcase with screenshots & detail links
│   │   ├── Education.tsx        # RRCE, BE in AIML, Expected 2027, CGPA 7.7
│   │   ├── Certifications.tsx   # Verified certifications (Data Science, Power BI, AI)
│   │   ├── ResumeCTA.tsx        # Dedicated Resume download & view section
│   │   ├── Contact.tsx          # Direct email (copy to clipboard), phone, social links & form
│   │   ├── Footer.tsx           # Minimal copyright, role, and back-to-top action
│   │   └── ScrollToTop.tsx      # Window scroll manager on route change
│   ├── pages/
│   │   ├── HomePage.tsx         # Complete single-page layout for main portfolio sections
│   │   └── ProjectDetailPage.tsx# Reusable case study route (/projects/:slug)
│   ├── data/
│   │   └── portfolioData.ts     # Single source of truth for all projects, skills & copy
│   ├── App.tsx                  # BrowserRouter layout & routes definition
│   ├── main.tsx                 # React DOM mount point
│   └── index.css                # Base styling & scrollbar
├── tailwind.config.js           # Theme configuration
└── package.json                 # Project dependencies & scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## ✏️ Customization

All portfolio content is decoupled and stored cleanly in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts):
- **Projects:** Add, update, or edit descriptions, technologies, and GitHub repository links.
- **Skills:** Add or remove technical competencies across categories.
- **Resume:** Replace `public/resume.pdf` with your updated official resume.
- **Contact:** Update your email or LinkedIn / GitHub profile links.

---

## 📄 License
MIT
