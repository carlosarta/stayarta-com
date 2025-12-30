# CÓDIGO COMPLETO - STAYARTA LANDING

**Exportado para uso con DeepSeek, Gemini, OpenAI**  
**Fecha:** Noviembre 2024  
**Stack:** React 18 + TypeScript + Tailwind v4 + Motion

---

## 📁 ESTRUCTURA DEL PROYECTO

```
stayarta-landing/
├── App.tsx                          # Punto de entrada
├── components/
│   ├── Header.tsx                   # Navegación principal
│   ├── Footer.tsx                   # Footer con links
│   ├── HeroSection.tsx              # Hero editorial full-screen
│   ├── LifestyleSection.tsx         # Tabs verticales productos
│   ├── ProductShowcase.tsx          # Showcase productos tech
│   ├── NovaSection.tsx              # Dark hero Nova IA
│   ├── EcosystemSection.tsx         # Bento grid 4 pilares
│   ├── ServicesSection.tsx          # Grid de servicios
│   ├── AboutSection.tsx             # Sobre nosotros
│   ├── ContactSection.tsx           # Formulario contacto
│   ├── icons.tsx                    # SVG icons personalizados
│   └── ui/                          # Componentes UI base
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── config/
│   ├── routes.ts                    # Sistema de rutas (400+)
│   ├── sitemap.xml                  # SEO sitemap
│   └── robots.txt                   # Robots configuration
├── styles/
│   └── globals.css                  # Tokens CSS + Tailwind v4
└── types/
    └── index.ts                     # TypeScript definitions
```

---

## 🎨 TOKENS DE DISEÑO

```css
/* globals.css */
@import "tailwindcss";

/* COLORES BRAND */
:root {
  --color-primary: #2C3E50;
  --color-accent: #E74C3C;
  --color-secondary: #17a2b8;
  
  /* SPACING SCALE (4px base) */
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */
  
  /* TYPOGRAPHY */
  --font-sans: system-ui, -apple-system, sans-serif;
  
  /* SHADOWS */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* BORDER RADIUS */
  --radius-sm: 0.5rem;      /* 8px */
  --radius-md: 0.75rem;     /* 12px */
  --radius-lg: 1rem;        /* 16px */
  --radius-xl: 1.5rem;      /* 24px */
  --radius-2xl: 2rem;       /* 32px */
  
  /* TRANSITIONS */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
  
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-custom: cubic-bezier(0.6, -0.05, 0.01, 0.99);
}
```

---

## 📊 MÉTRICAS ACTUALES

**Performance:**
- Bundle size: ~250KB (sin optimizar)
- Componentes: 10 principales + 20 UI
- Rutas: 400+ configuradas
- Imágenes: 6 hero images (Figma assets)

**Tecnologías:**
- React 18.2
- TypeScript 5.x
- Tailwind CSS 4.0
- Motion (Framer Motion) latest
- Vite 5.x

---

## 🔑 COMPONENTES CLAVE

### App.tsx
```typescript
// Ver archivo completo en el proyecto
// Estructura: Header + 8 Sections + Footer
// Sin routing (single page)
// Smooth scroll automático
```

### HeroSection.tsx
```typescript
// Hero Editorial Full-Screen
// Características:
// - Min-height viewport
// - Carousel automático (3 imágenes)
// - Floating cards (social proof + badge)
// - Geometric backgrounds
// - Scroll indicator animado
// - Stats en cards
// - Typography: 5.5rem heading
```

### NovaSection.tsx
```typescript
// Dark Hero Premium
// Características:
// - Gradient dark background
// - Grid pattern animado
// - Feature cards con gradients
// - Hover effects elevación
// - Stats card destacada
// - CTA dual (primario + secundario)
```

### LifestyleSection.tsx
```typescript
// Tabs Verticales Magazine Style
// Características:
// - 3 categorías (Para Ti, Equipos, Espacios)
// - Tabs verticales con pills
// - Active state con layoutId
// - Grid asimétrico (3+2 columnas)
// - Floating badges
// - Stats bar inferior
```

### EcosystemSection.tsx
```typescript
// Bento Grid Architecture
// Características:
// - 4 pillar cards
// - Top bar (icon + stats)
// - Gradient bottom line on hover
// - CTA card central decorada
// - Trust indicators
// - Connection lines background
```

### ContactSection.tsx
```typescript
// Split Contact Form
// Características:
// - Grid 12 cols (5 info + 7 form)
// - Contact methods en cards
// - Form validation
// - Success state animado
// - Quick stats
// - Geometric backgrounds
```

---

## 🎭 ANIMACIONES IMPLEMENTADAS

### Motion Variants
```typescript
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
}

const slideIn = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const scale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}
```

### Hover Effects
```typescript
// Cards
whileHover={{ y: -8, transition: { duration: 0.3 } }}

// Buttons
whileHover={{ scale: 1.05 }}

// Icons
className="group-hover:rotate-12 transition-transform"
className="group-hover:translate-x-1 transition-transform"
```

---

## 🎨 DESIGN PATTERNS

### Typography Scale
```
Eyebrow:  text-sm uppercase tracking-[0.2em]
H1:       text-5xl sm:text-6xl lg:text-7xl leading-[1.1]
H2:       text-5xl sm:text-6xl leading-[1.1]
H3:       text-3xl text-4xl
Body:     text-xl leading-relaxed
Small:    text-sm text-gray-600
```

### Spacing System
```
Sections:  py-32 lg:py-40
Gaps:      gap-6 gap-8 gap-16 gap-24
Padding:   p-8 lg:p-10 lg:p-12
Margins:   mb-6 mb-8 mb-16
```

### Border Radius
```
Small:   rounded-xl (12px)
Medium:  rounded-2xl (16px)
Large:   rounded-3xl (24px)
```

### Shadows
```
Cards:   shadow-lg hover:shadow-xl
Hero:    shadow-2xl
Buttons: shadow-lg hover:shadow-2xl
```

---

## 🛠️ HOOKS PERSONALIZADOS (A IMPLEMENTAR)

```typescript
// useIntersectionObserver.ts
export function useIntersectionObserver(
  ref: RefObject<Element>,
  options?: IntersectionObserverInit
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  // Implementation...
}

// useMediaQuery.ts
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  // Implementation...
}

// useReducedMotion.ts
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  // Implementation...
}

// useScrollPosition.ts
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);
  // Implementation...
}
```

---

## 🐛 ISSUES CONOCIDOS

1. **Performance:**
   - [ ] Imágenes sin lazy loading
   - [ ] Sin code splitting
   - [ ] Bundle size no optimizado
   - [ ] Animaciones sin GPU acceleration check

2. **Accesibilidad:**
   - [ ] Falta skip to content
   - [ ] Algunos contrasts < 4.5:1
   - [ ] Focus visible mejorable
   - [ ] ARIA labels incompletos

3. **SEO:**
   - [ ] Meta tags faltantes
   - [ ] Structured data sin implementar
   - [ ] Canonical URLs
   - [ ] Sitemap no generado dinámicamente

4. **UX:**
   - [ ] Loading states faltantes
   - [ ] Error boundaries
   - [ ] Form validation mejorable
   - [ ] Toast notifications

---

## 🎯 PRIORIDADES DE MEJORA

### 🔥 CRÍTICO (Hacer primero)
1. Lazy loading de imágenes
2. Code splitting por sección
3. Contraste de colores WCAG AA
4. Form validation robusta
5. Error boundaries

### ⚡ IMPORTANTE (Hacer después)
1. Meta tags + Open Graph
2. Structured data
3. Loading states
4. Toast system
5. Reduced motion support

### 💎 NICE-TO-HAVE (Opcionales)
1. Dark mode
2. Cursor personalizado
3. Parallax effects
4. Particle effects
5. PWA support

---

## 📈 MÉTRICAS OBJETIVO

### Lighthouse Scores
- Performance: > 95
- Accessibility: > 95
- Best Practices: 100
- SEO: 100

### Core Web Vitals
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

### Bundle Size
- Initial: < 150KB gzipped
- Total: < 300KB gzipped

---

## 🔗 ENLACES ÚTILES

**Documentación:**
- [Tailwind v4 Docs](https://tailwindcss.com/docs)
- [Motion React](https://motion.dev/)
- [React Docs](https://react.dev/)

**Herramientas:**
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Bundle Analyzer](https://bundlephobia.com/)

**Inspiración:**
- [Dribbble](https://dribbble.com/search/landing-page)
- [Awwwards](https://awwwards.com/)
- [Lapa](https://lapa.ninja/)

---

## 💻 COMANDOS ÚTILES

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build
npm run preview

# Análisis de bundle
npm run build -- --analyze

# Linting
npm run lint

# Type check
npm run type-check
```

---

## 📝 NOTAS IMPORTANTES

1. **Tailwind v4**: No usar tailwind.config.js, todo en CSS
2. **Motion**: Importar de 'motion/react', no 'framer-motion'
3. **Imágenes**: Usar '@/assets/...' para imports
4. **Rutas**: Centralizadas en /config/routes.ts
5. **Icons**: Todos SVG personalizados en /components/icons.tsx

---

## 🚀 PRÓXIMOS PASOS

1. **Copiar este documento** + el código de los componentes
2. **Elegir el LLM** según tu necesidad (ver PROMPTS_MEJORA_AI.md)
3. **Pegar el prompt** correspondiente + código relevante
4. **Iterar** con las sugerencias
5. **Testear** cambios en local
6. **Deploy** cuando esté listo
