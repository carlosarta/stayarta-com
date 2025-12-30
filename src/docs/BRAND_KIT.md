# STAYArta Design System & Brand Kit Specification

**Version:** 1.0.0  
**Status:** Active  
**Last Updated:** November 2025

---

## 1. ADN DE MARCA (Brand Identity)

### Identidad Visual
*   **Nombre:** STAYArta
*   **Tagline:** "Hack the Ordinary"
*   **Estética:** Retro Pop Tech / Neon Soft 3D / Industrial Minimalist

### Logotipos
*   **Wordmark:** "STAYArta" (Tipografía custom/modificada, tracking ajustado).
*   **Isotipo:** Monograma "S+A" entrelazado geométricamente.
*   **Favicon:** Versión simplificada del Isotipo (para tamaños 16x16, 32x32px).

### Voz y Tono
*   **Personalidad:** Directa, Técnica, Segura, "No cruft".
*   **Lenguaje:** Evitar jerga de marketing vacía. Usar verbos de acción: "Deploy", "Scale", "Automate", "Ship".
*   **Vibe:** Herramienta poderosa para constructores, no para consumidores pasivos.

### Imaginería
*   **Fotografía:** High-contrast realista (Blanco y Negro con acentos Neón selectivos).
*   **Ilustración:** Vectores retro-futuristas, líneas de circuito, grids isométricos, wireframes 3D.
*   **Prohibido:** Fotos de stock genéricas corporativas (gente dándose la mano, reuniones en salas de cristal).

---

## 2. FUNDAMENTOS VISUALES (Design Tokens)

### Paleta de Colores (Dark-First)

| Token Name | Value | Description |
| :--- | :--- | :--- |
| **Primary (Action)** | `#0BF5C8` | Neon Teal. Main CTA, active states. |
| Primary Hover | `#09DCB3` | Darker teal for interaction. |
| Primary Active | `#07C3A0` | Pressed state. |
| Primary Light | `#E6FFFA` | Subtle backgrounds (rarely used in dark mode). |
| **Secondary (Accent)** | `#FFD166` | Pop Amber. Highlights, badges, special features. |
| **Background Main** | `#0A0F1A` | Deep Space Blue/Black. App background. |
| **Surface/Card** | `#0F172A` | Slate 900. Panels, cards, modals. |
| **Text Primary** | `#E5E7EB` | High contrast readability. |
| **Text Muted** | `#9CA3AF` | Secondary information, labels. |
| **Border** | `#1F2937` | Subtle separation. |
| **Feedback Success** | `#22C55E` | Completion, healthy status. |
| **Feedback Warning** | `#F59E0B` | Alerts, pending actions. |
| **Feedback Error** | `#EF4444` | Critical failures, destructive actions. |
| **Feedback Info** | `#3B82F6` | Contextual help. |

### Tipografía

**Fuentes:**
*   **Display:** `Space Grotesk` (Weights: 700 Bold, 600 SemiBold).
*   **Body/UI:** `Plus Jakarta Sans` (Weights: 600 SemiBold, 500 Medium, 400 Regular).

**Type Scale (Mobile-First):**

| Element | Size | Line Height | Tracking | Font |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | 40px | 120% | -1% | Space Grotesk Bold |
| **H2** | 32px | 125% | -0.5% | Space Grotesk Bold |
| **H3** | 26px | 130% | -0.25% | Space Grotesk SemiBold |
| **Body L** | 18px | 150% | Normal | Plus Jakarta Sans |
| **Body M** | 16px | 150% | Normal | Plus Jakarta Sans (Base) |
| **Caption** | 13px | 140% | +1% | Plus Jakarta Sans |

### Espaciado y Geometría

*   **Base Unit:** 8px (Sistema de Grid 4px/8px).
*   **Border Radius:**
    *   Cards/Modals: `12px`
    *   Inputs/Buttons: `10px`
    *   Badges/Pills: `999px` (Full rounded)

**Sombras (Elevation - Dark Mode):**
*   **Level 1:** `0 4px 12px rgba(0,0,0,0.25)`
*   **Level 2:** `0 10px 30px rgba(0,0,0,0.35)`
*   **Level 3:** `0 18px 50px rgba(0,0,0,0.45)`

---

## 3. UI KIT (Componentes Críticos)

### Botones
*   **Primary:**
    *   Fondo: `#0BF5C8`
    *   Texto: `#0A0F1A` (Bold)
    *   Hover: Scale 1.02 + Opacity 90%
*   **Secondary:**
    *   Fondo: Transparente
    *   Borde: 1.5px solid `#0BF5C8`
    *   Texto: `#0BF5C8`
*   **Ghost:**
    *   Fondo: Transparente
    *   Texto: `#E5E7EB`
    *   Hover: `rgba(255,255,255,0.08)`

### Inputs
*   **Estado Base:**
    *   Fondo: Transparente o `#111827`
    *   Borde: 1.5px solid `#1F2937`
    *   Radio: `10px`
*   **Focus:**
    *   Ring: `0 0 0 3px rgba(11,245,200,0.25)`
    *   Borde: `#0BF5C8`

### Navegación
*   **Navbar (Top):**
    *   Posición: Sticky
    *   Fondo: `#0A0F1A` (con backdrop blur opcional)
    *   Altura: 64px
    *   Borde inferior: `1px solid rgba(255,255,255,0.05)`
*   **Sidebar (Left):**
    *   Ancho: 280px
    *   Estado: Colapsable en mobile.
    *   Active Item: Fondo `rgba(11,245,200,0.12)` + Texto `#0BF5C8`.

### Cards (Surfaces)
*   Fondo: `#0F172A`
*   Borde: `1px solid rgba(255,255,255,0.04)`
*   Padding: 24px (Desktop) / 16px (Mobile)
*   Radius: 12px

---

## 4. ESTRATEGIA RESPONSIVE

### Breakpoints
*   **Mobile:** `< 640px` (Layout fluido 100%, stack vertical).
*   **Tablet:** `768px` (Grid 8 columnas).
*   **Desktop:** `1024px` (Sidebar visible, Grid 12 columnas).
*   **Wide:** `1280px` (Max content width restricted or centered).

### Comportamientos Adaptativos
*   **Navegación:** Menú lateral pasa a ser Drawer (Hamburguesa) en pantallas `< 1024px`.
*   **Tablas:** En móvil, las filas de tablas complejas se transforman en "Card Lists" verticales para legibilidad.

---

## 5. ACTIVOS APP MÓVIL (PWA)

*   **App Icon:** Monograma "S+A" blanco sobre gradiente diagonal (`#0BF5C8` top-left a `#0EA5E9` bottom-right).
*   **Splash Screen:**
    *   Fondo: `#0A0F1A`
    *   Elemento: Logo centrado + Spinner de carga "Neon Ring".
*   **Interacciones Táctiles:**
    *   Touch Targets: Mínimo 44x44px para todos los elementos interactivos.
    *   Gestos: Swipe horizontal habilitado para carruseles y acciones de lista.
    *   Refresh: Pull-to-refresh nativo implementado en contenedores de scroll.

---

## 6. ARQUITECTURA DE DOMINIOS

Establecemos una estrategia de subdominios centralizada para servicios.

*   **Dominio Principal (Endpoint):** `Servicios.stayarta.com`
    *   Todas las aplicaciones y módulos principales residen bajo este dominio.
*   **Estructura de Rutas:**
    *   `Servicios.stayarta.com/Nova` (Hub de IA y Herramientas)
    *   `Servicios.stayarta.com/Tienda` (E-commerce y Marketplace)
    *   `Servicios.stayarta.com/Inicio` (Landing Page y Acceso General)
*   **Redirección:** El tráfico directo al dominio raíz debe enrutar a `/Inicio` o al Dashboard según el estado de autenticación.

---

## 7. HAND-OFF TÉCNICO (Implementación)

### Stack
*   **Framework:** React 18 + Next.js 14 (App Router compatibility)
*   **Styling:** Tailwind CSS v3.4 / v4
*   **Icons:** Lucide React
*   **Animation:** Motion (Framer Motion)

### JSON Theme Structure (taildwind.config.js Reference)

```json
{
  "theme": {
    "extend": {
      "colors": {
        "primary": {
          "DEFAULT": "#0BF5C8",
          "hover": "#09DCB3",
          "active": "#07C3A0",
          "light": "#E6FFFA"
        },
        "secondary": {
          "DEFAULT": "#FFD166"
        },
        "background": "#0A0F1A",
        "surface": "#0F172A",
        "text": {
          "primary": "#E5E7EB",
          "muted": "#9CA3AF"
        },
        "border": "#1F2937",
        "status": {
          "success": "#22C55E",
          "warning": "#F59E0B",
          "error": "#EF4444",
          "info": "#3B82F6"
        }
      },
      "fontFamily": {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Plus Jakarta Sans", "sans-serif"]
      },
      "borderRadius": {
        "card": "12px",
        "input": "10px",
        "pill": "9999px"
      },
      "boxShadow": {
        "level1": "0 4px 12px rgba(0,0,0,0.25)",
        "level2": "0 10px 30px rgba(0,0,0,0.35)",
        "level3": "0 18px 50px rgba(0,0,0,0.45)"
      }
    }
  }
}
```
