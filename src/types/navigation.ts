import { LucideIcon } from 'lucide-react';

export type NavigationType = 'internal' | 'external' | 'action';
export type NavigationVariant = 'link' | 'button' | 'icon' | 'badge';

export interface SiteTheme {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  font_display: string;
  font_body: string;
  accent_glow: string;
}

export interface SiteEntity {
  id: string;
  name: string;
  subdomain: string;
  base_url: string;
  logo_url?: string;
  tagline?: string;
  accent?: string;
  theme: SiteTheme;
}

export interface NavigationItem {
  id: string;
  site_id: string; // Belongs to which site? (e.g., 'main', 'tech', 'lab')
  location: 'header' | 'sub_header' | 'footer' | 'sidebar';
  label: string;
  url: string;
  type: NavigationType;
  variant?: NavigationVariant;
  icon_name?: string; // We map string to Icon component
  order: number;
  children?: NavigationItem[]; // For dropdowns/mega-menus
  meta?: {
    badge?: string;
    is_new?: boolean;
    color_highlight?: string;
  };
}

// Helper to simulate DB response
export interface NavigationResponse {
  header_main: NavigationItem[];
  header_actions: NavigationItem[];
  footer_columns: {
    title: string;
    items: NavigationItem[];
  }[];
}
