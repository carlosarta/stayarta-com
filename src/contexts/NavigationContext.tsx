import React, { createContext, useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavigationItem, NavigationResponse, SiteEntity } from '../types/navigation'
import { routes } from '../config/routes'
import { media } from '@/lib/media'
import { 
  ShoppingCart, Heart, User, Zap, Globe, 
  Search, FlaskConical, Cpu, Store, LayoutGrid,
  Flame, Sparkles, Tag, Layers, Box, Circle, Users, BadgeCheck, Home, ShieldCheck
} from 'lucide-react';

// --- MOCK DATABASE DATA ---

const SITES_DB: SiteEntity[] = [
  { 
    id: 'main', 
    name: 'STAYArta', 
    subdomain: 'www', 
    base_url: 'https://stayarta.com',
    tagline: 'Ecosistema retro pop + IA',
    accent: '#FF4D00',
    logo_url: media.wordmark,
    theme: {
      primary: '#FF4D00', // st-orange
      secondary: '#1A2333', // st-darkblue
      background: '#F5F5F0', // st-bonewhite
      text: '#1A2333',
      font_display: 'Plakato, sans-serif',
      font_body: 'Inter, sans-serif',
      accent_glow: 'rgba(255, 77, 0, 0.2)'
    }
  },
  { 
    id: 'shop', 
    name: 'STAYShop', 
    subdomain: 'ecommerce', 
    base_url: 'https://ecommerce.stayarta.com',
    tagline: 'Comercio creativo y dropshipping',
    accent: '#F000FF',
    logo_url: media.monogram, // Using monogram for shop
    theme: {
      primary: '#FF00FF', // Neon Magenta
      secondary: '#00FFFF', // Cyan
      background: '#050505', // Deep Black
      text: '#FFFFFF',
      font_display: 'Orbitron, sans-serif', // Futuristic
      font_body: 'Share Tech Mono, monospace',
      accent_glow: 'rgba(255, 0, 255, 0.4)'
    }
  },
  { 
    id: 'tech', 
    name: 'STAYTech', 
    subdomain: 'tech', 
    base_url: 'https://tech.stayarta.com',
    tagline: 'Marketplace de hardware e IA',
    accent: '#3B82F6',
    theme: {
      primary: '#3B82F6', // Blue
      secondary: '#60A5FA',
      background: '#0F172A', // Slate 900
      text: '#F8FAFC',
      font_display: 'Inter, sans-serif',
      font_body: 'Inter, sans-serif',
      accent_glow: 'rgba(59, 130, 246, 0.3)'
    }
  },
  { 
    id: 'lab', 
    name: 'STAYLab', 
    subdomain: 'lab', 
    base_url: 'https://lab.stayarta.com',
    tagline: 'Prototipos, HomeHub y seguridad',
    accent: '#f59e0b',
    theme: {
      primary: '#f59e0b',
      secondary: '#fde047',
      background: '#0b0f19',
      text: '#fffaf0',
      font_display: 'Space Mono, monospace',
      font_body: 'Sora, sans-serif',
      accent_glow: 'rgba(245,158,11,0.35)'
    }
  },
  {
    id: 'partners',
    name: 'STAYPartners',
    subdomain: 'partners',
    base_url: 'https://partners.stayarta.com',
    tagline: 'Programas B2B y licencias',
    accent: '#2563eb',
    theme: {
      primary: '#2563eb',
      secondary: '#1d4ed8',
      background: '#020617',
      text: '#e2e8f0',
      font_display: 'Archivo, sans-serif',
      font_body: 'Archivo, sans-serif',
      accent_glow: 'rgba(37,99,235,0.35)'
    }
  }
];

const HEADER_ITEMS_DB: NavigationItem[] = [
  { id: 'nav_1', site_id: 'global', location: 'header', label: 'Inicio', url: '/', type: 'internal', order: 1 },
  { id: 'nav_2', site_id: 'global', location: 'header', label: 'Tech', url: routes.domains.tech, type: 'external', icon_name: 'Cpu', order: 2 },
  { id: 'nav_3', site_id: 'global', location: 'header', label: 'Ecommerce', url: routes.shop.root, type: 'internal', icon_name: 'Store', order: 3 },
  { id: 'nav_4', site_id: 'global', location: 'header', label: 'Lab', url: 'https://lab.stayarta.com', type: 'external', icon_name: 'FlaskConical', order: 4, meta: { is_new: true } },
  { id: 'nav_5', site_id: 'global', location: 'header', label: 'Karta', url: '/karta', type: 'internal', icon_name: 'LayoutGrid', order: 5 },
  { id: 'nav_6', site_id: 'global', location: 'header', label: 'Partners', url: 'https://partners.stayarta.com', type: 'external', icon_name: 'BadgeCheck', order: 6 },
  { id: 'nav_7', site_id: 'global', location: 'header', label: 'Docs', url: 'https://docs.stayarta.com', type: 'external', icon_name: 'Layers', order: 7 },
];

// SUB-NAVIGATION ITEMS (Specific to subdomains)
const SUB_HEADER_ITEMS_DB: NavigationItem[] = [
  // MAIN SUB-NAV
  { id: 'sub_main_1', site_id: 'main', location: 'sub_header', label: 'Visión', url: '/nosotros', type: 'internal', icon_name: 'Sparkles', order: 1 },
  { id: 'sub_main_2', site_id: 'main', location: 'sub_header', label: 'Servicios', url: '/servicios', type: 'internal', icon_name: 'Layers', order: 2 },
  { id: 'sub_main_3', site_id: 'main', location: 'sub_header', label: 'Casos NOVA', url: '/nova', type: 'internal', icon_name: 'Flame', order: 3 },
  { id: 'sub_main_4', site_id: 'main', location: 'sub_header', label: 'Partners', url: 'https://partners.stayarta.com', type: 'external', icon_name: 'BadgeCheck', order: 4 },

  // ECOMMERCE SUB-NAV
  { id: 'sub_sh_1', site_id: 'shop', location: 'sub_header', label: 'Dropshipping', url: '/tienda/dropshipping', type: 'internal', icon_name: 'Box', order: 0 },
  { id: 'sub_sh_2', site_id: 'shop', location: 'sub_header', label: 'Importaciones', url: '/tienda/importaciones', type: 'internal', icon_name: 'Globe', order: 1 },
  { id: 'sub_sh_3', site_id: 'shop', location: 'sub_header', label: 'Mentoría', url: '/tienda/mentoria', type: 'internal', icon_name: 'Users', order: 2 },
  // SEPARATOR / DEMO AREA
  { id: 'sub_sh_4', site_id: 'shop', location: 'sub_header', label: '|', url: '#', type: 'internal', icon_name: 'Circle', order: 3, meta: { color_highlight: '#333' } }, // Visual Separator
  { id: 'sub_sh_5', site_id: 'shop', location: 'sub_header', label: 'Tienda Oficial', url: '/tienda/catalogo', type: 'internal', icon_name: 'Store', order: 4 },
  { id: 'sub_sh_6', site_id: 'shop', location: 'sub_header', label: 'Ofertas Flash', url: '/tienda/catalogo?filter=sale', type: 'internal', icon_name: 'Zap', order: 5, meta: { color_highlight: '#00FFFF' } },
  
  // TECH SUB-NAV (Example)
  { id: 'sub_tc_1', site_id: 'tech', location: 'sub_header', label: 'Reviews', url: '/reviews', type: 'internal', order: 1 },
  { id: 'sub_tc_2', site_id: 'tech', location: 'sub_header', label: 'Tutoriales', url: '/tutorials', type: 'internal', order: 2 },

  // LAB SUB-NAV
  { id: 'sub_lab_1', site_id: 'lab', location: 'sub_header', label: 'StayLocal Ops', url: '/lab/staylocal', type: 'internal', icon_name: 'Cpu', order: 1 },
  { id: 'sub_lab_2', site_id: 'lab', location: 'sub_header', label: 'HomeHub', url: '/lab/stayhome', type: 'internal', icon_name: 'Home', order: 2 },
  { id: 'sub_lab_3', site_id: 'lab', location: 'sub_header', label: 'StaySafe', url: '/lab/staysafe', type: 'internal', icon_name: 'ShieldCheck', order: 3 },
];

const HEADER_ACTIONS_DB: NavigationItem[] = [
  { id: 'act_1', site_id: 'global', location: 'header', label: 'Favoritos', url: routes.shop.favorites, type: 'internal', variant: 'icon', icon_name: 'Heart', order: 1 },
  { id: 'act_2', site_id: 'global', location: 'header', label: 'Carrito', url: routes.shop.cart, type: 'internal', variant: 'icon', icon_name: 'ShoppingCart', order: 2, meta: { badge: 'dynamic' } },
  { id: 'act_3', site_id: 'global', location: 'header', label: 'Acceso', url: routes.auth.login, type: 'internal', variant: 'button', icon_name: 'User', order: 3 },
];

const FOOTER_GROUPS_DB = [
    // ... (Same as before, simplified for brevity in this rewrite, but in real app keep full list)
    {
        title: 'Ecosistema',
        items: [
          { id: 'ft_eco_1', site_id: 'main', location: 'footer', label: 'NOVA AI', url: routes.nova.root, type: 'internal', order: 1 },
          { id: 'ft_eco_2', site_id: 'tech', location: 'footer', label: 'Tech Hub', url: routes.domains.tech, type: 'external', order: 2 },
          { id: 'ft_eco_3', site_id: 'lab',  location: 'footer', label: 'The Lab', url: 'https://lab.stayarta.com', type: 'external', order: 3 },
        ]
      },
      // ... keep other groups
];

// --- CONTEXT SETUP ---

interface NavigationContextType {
  navigation: NavigationResponse & { sub_header: NavigationItem[] };
  sites: SiteEntity[];
  activeSite: SiteEntity;
  getIcon: (name?: string) => React.ElementType | undefined;
  isLoading: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const ICON_MAP: Record<string, React.ElementType> = {
  ShoppingCart,
  Heart,
  User,
  Zap,
  Globe,
  Search,
  FlaskConical,
  Cpu,
  Store,
  LayoutGrid,
  Flame,
  Sparkles,
  Tag,
  Layers,
  Box,
  Circle,
  Users,
  BadgeCheck,
  Home,
  ShieldCheck,
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [activeSite, setActiveSite] = useState<SiteEntity>(SITES_DB[0]);
  const [navigation, setNavigation] = useState<NavigationResponse & { sub_header: NavigationItem[] }>({
    header_main: [],
    header_actions: [],
    sub_header: [],
    footer_columns: []
  });
  const [isLoading, setIsLoading] = useState(true);

  // DETECT ACTIVE SITE BASED ON URL ROUTE (Simulation for SPA)
  useEffect(() => {
    if (location.pathname.startsWith('/tienda') || location.pathname.startsWith('/product')) {
        setActiveSite(SITES_DB.find(s => s.id === 'shop') || SITES_DB[0]);
    } else if (location.pathname.startsWith('/tech')) {
        setActiveSite(SITES_DB.find(s => s.id === 'tech') || SITES_DB[0]);
    } else {
        setActiveSite(SITES_DB.find(s => s.id === 'main') || SITES_DB[0]);
    }
  }, [location.pathname]);

  useEffect(() => {
    const fetchNavigation = async () => {
      await new Promise(resolve => setTimeout(resolve, 50)); // Tiny simulated delay

      // Filter Sub-Nav based on Active Site
      const currentSubNav = SUB_HEADER_ITEMS_DB.filter(item => item.site_id === activeSite.id);

      setNavigation({
        header_main: HEADER_ITEMS_DB.sort((a, b) => a.order - b.order),
        header_actions: HEADER_ACTIONS_DB.sort((a, b) => a.order - b.order),
        sub_header: currentSubNav.sort((a, b) => a.order - b.order),
        footer_columns: FOOTER_GROUPS_DB, // In real app, footer might also change slightly
      });
      setIsLoading(false);
    };

    fetchNavigation();
  }, [activeSite.id]); // Re-fetch/Re-filter when active site changes

  const getIcon = (name?: string) => {
    if (!name) return undefined;
    return ICON_MAP[name];
  };

  return (
    <NavigationContext.Provider value={{ navigation, sites: SITES_DB, activeSite, getIcon, isLoading }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
