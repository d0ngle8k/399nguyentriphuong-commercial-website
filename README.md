# 399 Professional Translation Office Website

A modern, responsive, and multilingual website for a professional translation office built with React, TypeScript, and TailwindCSS.

![399 Translation Office](https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800)

## 🌟 Features

- **Multi-language Support**: 
  - Vietnamese (vi)
  - English (en)
  - Chinese (zh)
  - Japanese (ja)
  - Thai (th)
  - Korean (ko)
  - Lao (lo)
  - Khmer (km)

- **Responsive Design**:
  - Mobile-first approach
  - Optimized for all screen sizes
  - Smooth animations and transitions

- **Dark/Light Mode**:
  - System preference detection
  - Manual toggle option
  - Persistent theme selection

## 💻 Tech Stack

- **Frontend**:
  - React 18
  - TypeScript
  - TailwindCSS
  - Framer Motion
  - Lucide React Icons

- **Build Tools**:
  - Vite
  - PostCSS
  - Autoprefixer

- **Deployment**:
  - Vercel

## 🏗️ System Design

### Architecture

```
src/
├── components/         # Reusable UI components
│   ├── Header.tsx     # Navigation and language selection
│   ├── Hero.tsx       # Landing section
│   ├── Services.tsx   # Service offerings
│   ├── Contact.tsx    # Contact information
│   └── ...
├── contexts/          # React Context providers
│   ├── ThemeContext   # Dark/Light mode management
│   └── LanguageContext# Internationalization
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

### Key Components

1. **Language System**:
   - Context-based translation management
   - Real-time language switching
   - Persistent language selection

2. **Theme System**:
   - TailwindCSS dark mode integration
   - Context-based theme management
   - System preference detection

3. **Service Sections**:
   - Notarized Translation
   - Professional Interpretation
   - Consular Legalization
   - Specialized Translation

4. **Contact Integration**:
   - Google Maps integration
   - Contact form
   - Quote request system

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/d0ngle8k/399nguyentriphuong-commercial-website.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Environment Variables

No environment variables are required for basic setup.

## 📱 Performance Optimizations

- Lazy loading for images
- Component-level code splitting
- Optimized animations with Framer Motion
- TailwindCSS purge for production builds

## 🔒 Security Features

- Content Security Policy
- XSS Protection
- Secure form handling
- Protected contact information

## 📄 License

MIT License

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!