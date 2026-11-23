# Anni Software Technologies

A modern full-stack web application and marketing platform for **Anni Software Technologies Pvt. Ltd.**, engineered to the specifications laid out in the [PRD](prd.md).

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router, `.jsx`), React 18, Tailwind CSS, Lucide React, Redux Toolkit, Framer Motion
- **Backend:** Node.js (v20+ LTS / ES Modules), Express.js REST API
- **Database:** MongoDB Atlas (Mongoose ODM schemas)
- **Security:** Helmet, CORS whitelisting, Express Rate Limiter, JWT in HTTP-Only Cookies, Zod validation
- **Styling & Theming:** Custom Design System with Light/Dark mode token switching (`#F8FAFF` / `#0B1020`), subtle 48px grid background, and responsive mobile breakpoints.

---

## 📁 Repository Structure

```
├── backend/
│   ├── src/
│   │   ├── config/          # MongoDB connection & Cloudinary setup
│   │   ├── controllers/     # 13 Express controllers (Leads, Services, Portfolio, etc.)
│   │   ├── middleware/      # Auth, role check, multer, rate-limit, error handler
│   │   ├── model/           # 13 Mongoose models (User, Lead, Booking, Project, etc.)
│   │   ├── routers/         # Express API routers mapped to /api/*
│   │   ├── utils/           # ApiResponse, ApiError, sendEmail, slugify
│   │   └── app.js           # Server entry point
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/login/        # Staff / Admin sign-in
│   │   │   ├── (users)/             # Public pages (Home, Services, Portfolio, etc.)
│   │   │   ├── admin/               # Protected Management Dashboard & Leads table
│   │   │   ├── globals.css          # Design system variables & grid mask
│   │   │   └── layout.jsx           # Root layout with Theme & Redux providers
│   │   ├── component/
│   │   │   ├── data/                # Static datasets (Services, Portfolio, Tech, FAQ)
│   │   │   ├── home/                # Hero, OrbitVisual, Stats, ServicesOverview, etc.
│   │   │   ├── layout/              # Header, MegaMenu, Footer, WhatsApp widget
│   │   │   └── ui/                  # Button, Card, Eyebrow, ThemeToggle
│   │   ├── redux/                   # Redux store & slices
│   │   └── utils/                   # Axios API client
│   ├── .env.local
│   ├── next.config.mjs
│   └── package.json
│
└── prd.md                           # 22-page comprehensive product requirements
```

---

## 🚀 Getting Started

### 1. Run the Backend API
```bash
cd backend
npm install
npm run dev
# API running at http://localhost:5000/api
```

### 2. Run the Next.js Frontend
```bash
cd frontend
npm install
npm run dev
# Website running at http://localhost:3000
```

### 3. Admin Access
- Navigate to `http://localhost:3000/login`
- Default Admin Credentials:
  - **Email:** `admin@annisoftware.com`
  - **Password:** `AdminPassword123!`
