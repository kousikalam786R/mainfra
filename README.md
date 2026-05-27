# MA INFRA Portable Cabin — Portable Cabin & Modular Infrastructure Website

A modern, fully responsive industrial/business website built with Next.js 16, Material UI v9, and Framer Motion.

## 🌐 Live Dev Server

```
http://localhost:3000
```

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI Library | Material UI (MUI) v9 |
| Animation | Framer Motion |
| Language | TypeScript |
| Styling | MUI Emotion CSS-in-JS |

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout with Navbar & Footer
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── contact/page.tsx      # Contact page
│   ├── gallery/page.tsx      # Gallery page
│   └── products/
│       ├── page.tsx          # Product listing page
│       └── [slug]/page.tsx   # Product detail page
│
├── components/
│   ├── common/               # Reusable components
│   │   ├── SectionHeader.tsx
│   │   ├── ThemeRegistry.tsx
│   │   └── WhatsAppButton.tsx
│   ├── layout/               # Layout components
│   │   ├── Navbar.tsx        # Sticky navbar with mega menu
│   │   └── Footer.tsx        # Modern footer
│   ├── cards/
│   │   └── ProductCard.tsx   # Reusable product card
│   └── sections/             # Home page sections
│       ├── HeroSection.tsx
│       ├── CategoriesSection.tsx
│       ├── FeaturedProducts.tsx
│       ├── WhyChooseUs.tsx
│       ├── StatsSection.tsx
│       ├── IndustriesSection.tsx
│       ├── TestimonialsSection.tsx
│       └── CTASection.tsx
│
├── data/
│   └── products.ts           # Mock product/category data
│
└── styles/
    └── theme.ts              # MUI custom theme
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, categories, featured products, why us, stats, industries, testimonials, CTA |
| Products | `/products` | Filterable product grid with search |
| Product Detail | `/products/[slug]` | Image gallery, specs, inquiry form |
| About | `/about` | Company story, mission, process, team |
| Gallery | `/gallery` | Masonry gallery with category filters + lightbox |
| Contact | `/contact` | Inquiry form, office locations, WhatsApp |

## 🎨 Design System

- **Primary Color**: `#1565C0` (Industrial Blue)
- **Secondary Color**: `#F57C00` (Industrial Orange)
- **Font**: Inter (Google Fonts)
- **Background**: `#F8FAFC` (Light grey)
- **Border Radius**: 12px (theme default)

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Key Dependencies

```json
{
  "next": "^16.2.6",
  "@mui/material": "^9.0.1",
  "@mui/icons-material": "^9.x",
  "@emotion/react": "^11.x",
  "@emotion/styled": "^11.x",
  "framer-motion": "^11.x",
  "react-intersection-observer": "^9.x"
}
```

## 🔮 Future Backend Integration

The project is architecture-ready for backend integration:

- All data lives in `src/data/products.ts` — ready for API replacement
- Dynamic routes (`/products/[slug]`) designed for `getStaticPaths` + `getStaticProps` or Server Components
- Contact forms have `onSubmit` handlers — ready for API integration
- Search/filter logic can be moved server-side with minimal changes

## 📱 Responsive Breakpoints

| Breakpoint | Screen |
|-----------|--------|
| `xs` | 0px+ |
| `sm` | 600px+ |
| `md` | 900px+ |
| `lg` | 1200px+ |
| `xl` | 1536px+ |
