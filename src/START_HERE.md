# START HERE - STAYArta Project Guide

Bienvenido al repositorio de STAYArta. Este documento es tu punto de partida para entender la estructura, el diseño y el flujo de trabajo del proyecto.

## 🚀 Visión General
STAYArta fusiona la estética **"Retro Pop Tech"** con **"Neon Soft 3D UI"**. Construimos herramientas de eCommerce y automatización con IA (Nova Assistant).

### Tecnologías Principales
- **Frontend**: React 18 + TypeScript
- **Estilos**: Tailwind CSS v4 (Tokens personalizados en `/styles/globals.css`)
- **Iconos**: Lucide React
- **Componentes**: ShadCN UI (personalizados) + Design System propio (`/components/design-system`)

## 📂 Estructura Clave
- `/components/design-system`: Botones, tarjetas, logos y tipografía base.
- `/components/landing`: Landing page principal (Full Width).
- `/components/nova`: Aplicación del asistente IA Nova (Dark Mode).
- `/config`: Rutas (`routes.ts`) y configuraciones del sitio.
- `/lib`: Utilidades (class merging `cn`).

## 🎨 Guías de Estilo
- **Colores**: ST-Orange, ST-Turquoise, ST-DarkBlue, ST-BoneWhite.
- **Tipografía**: DM Serif Display (Títulos), Inter/Geist (UI).
- **Efectos**: Sombras de neón, bordes gruesos (Retro Outline), Soft 3D.

## 🛠️ Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye para producción.

---
👉 **Siguiente paso**: Revisa `/README_V2.md` para detalles de implementación y `/CHECKLIST_INTERACTIVO.md` para el seguimiento de tareas.
