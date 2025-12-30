import { LucideIcon, Globe, Box, TrendingUp, ShieldCheck, Truck, Users } from 'lucide-react'
import { media } from '@/lib/media'

export interface ServiceCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  link_url: string;
  icon_name: 'Globe' | 'Box' | 'TrendingUp';
  highlight_color: string;
}

export interface EcommerceLandingData {
  hero: {
    title_line1: string;
    title_line2: string;
    subtitle: string;
    primary_cta: string;
    secondary_info: string;
    stats: { label: string; value: string }[];
  };
  services: ServiceCard[];
  features: { label: string; icon_name: 'ShieldCheck' | 'Truck' | 'Users' }[];
  branding: {
    preloader_image: string;
    logo_full: string;
  };
}

export const SHOP_LANDING_CONTENT: EcommerceLandingData = {
  branding: {
    preloader_image: media.preloader,
    logo_full: media.wordmark,
  },
  hero: {
    title_line1: "Tu negocio,",
    title_line2: "tus reglas.",
    subtitle: "Desde emprendedores que inician sin capital hasta empresas que escalan con importaciones masivas. Proveemos la infraestructura, tú pones la visión.",
    primary_cta: "Empezar Ahora",
    secondary_info: "Setup promedio: 72h",
    stats: [
      { label: "Proveedores", value: "Verified" },
      { label: "Plataforma", value: "All-in-One" }
    ]
  },
  services: [
    {
      id: 'srv_drop',
      badge: "ZERO RIESGO",
      title: "Dropshipping",
      subtitle: "Sin Inversión Inicial",
      description: "Vende sin stock. Conectamos tu tienda con proveedores verificados que envían directamente a tu cliente final. Ideal para validar ideas.",
      cta: "Ver Detalles",
      link_url: "/tienda/dropshipping",
      icon_name: 'Box',
      highlight_color: '#00FFFF' // Cyan
    },
    {
      id: 'srv_import',
      badge: "MAYORISTAS",
      title: "Importación China",
      subtitle: "Escala tu Margen",
      description: "Compra directa a fábricas certificadas. Nos encargamos de la negociación, control de calidad y logística aduanera hasta tu puerta.",
      cta: "Ver Detalles",
      link_url: "/tienda/importaciones",
      icon_name: 'Globe',
      highlight_color: '#FF00FF' // Magenta
    },
    {
      id: 'srv_mentor',
      badge: "PREMIUM",
      title: "Mentoria 1:1",
      subtitle: "Acelera Resultados",
      description: "Asesoría personalizada para estructurar tu negocio, optimizar conversiones y evitar errores costosos. Acompañamiento real.",
      cta: "Agendar Sesión",
      link_url: "/tienda/mentoria",
      icon_name: 'TrendingUp',
      highlight_color: '#FFFF00' // Yellow/Neon
    }
  ],
  features: [
    { label: "Proveedores Certificados", icon_name: 'ShieldCheck' },
    { label: "Tracking Internacional", icon_name: 'Truck' },
    { label: "Comunidad de Emprendedores", icon_name: 'Users' }
  ]
};
