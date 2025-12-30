# STAYArta V2 - Documentación Técnica

## 1. Introducción
Este repositorio contiene la versión 2.0 de la plataforma STAYArta, una solución integral que combina una tienda de tecnología retro-futurista con servicios de automatización IA.

## 2. Arquitectura de Componentes
La aplicación utiliza una arquitectura modular basada en componentes reutilizables.

### Design System (`/components/design-system`)
El núcleo visual de la marca. No modifique estos archivos a menos que esté actualizando los tokens globales de la marca.
- `Buttons.tsx`: Variantes 'glow', 'retro-outline', 'brutalist'.
- `Cards.tsx`: Tarjetas con efectos de vidrio y bordes neón.
- `StayArtaLogo.tsx`: Componente SVG vectorial adaptable (Favicon/Full).

### Landing Page (`/components/landing`)
Estructura monolítica dividida en secciones lógicas:
- Navbar
- Hero Section
- Features (Nova AI)
- Product Showcase
- Footer

### Nova App (`/components/nova`)
Interfaz tipo dashboard para el asistente de IA. Utiliza un modo oscuro forzado y componentes de visualización de datos.

## 3. Gestión de Rutas
Todas las rutas están centralizadas en `/config/routes.ts`. Utilice este archivo para generar enlaces internos y evitar hardcoding de URLs.

## 4. Estado y Contexto
Actualmente, la aplicación utiliza un estado local en `App.tsx` para cambiar entre vistas (Landing, Design System, Nova App). En producción, esto se sustituiría por un router (React Router o Next.js Router).

## 5. Despliegue
El proyecto está optimizado para despliegue en Vercel o Netlify. Asegúrese de configurar las variables de entorno si se integra con Supabase u otras APIs.
