# Guía Rápida V2 - STAYArta

## Comandos Esenciales

### Desarrollo
```bash
# Iniciar servidor
npm run dev

# Linting
npm run lint
```

### Nuevos Componentes
Al crear nuevos componentes:
1. Usar `cn()` para combinar clases.
2. Importar desde `@/components/ui` para base ShadCN.
3. Aplicar tokens de color `text-st-darkblue`, `bg-st-orange`, etc.

## Snippets de Estilo (Tailwind)

**Texto Degradado:**
```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-st-orange to-st-yellow">
  Texto
</span>
```

**Borde Neón:**
```tsx
<div className="border-2 border-st-turquoise shadow-[0_0_10px_#57B4BA]">
  Contenido
</div>
```

**Sombra Retro:**
```tsx
<div className="shadow-[4px_4px_0px_0px_rgba(39,63,79,1)] border-2 border-st-darkblue">
  Botón
</div>
```

## Recursos
- **Iconos**: [Lucide React](https://lucide.dev)
- **Colores**: Ver `/styles/globals.css`
- **Fuentes**: DM Serif Display (Display), Inter (Body)
