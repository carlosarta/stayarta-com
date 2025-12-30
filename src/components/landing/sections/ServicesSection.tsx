import React from 'react';
import { ArrowRight, Layout, ShoppingBag, MessageSquare, Zap, PenTool, Share2 } from 'lucide-react';
import { DesignButton } from '../../design-system/Buttons';

const ServiceCard = ({ title, description, icon: Icon, badge, tags }: any) => (
  <div className="bg-white p-8 rounded-2xl border border-st-darkblue/10 hover:border-st-darkblue transition-colors group cursor-pointer shadow-sm hover:shadow-xl h-full flex flex-col">
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 bg-st-bonewhite rounded-xl flex items-center justify-center text-st-darkblue group-hover:bg-st-darkblue group-hover:text-st-yellow transition-colors">
        <Icon size={24} />
      </div>
      {badge && (
        <span className={`px-3 py-1 text-xs font-bold rounded-full ${badge === 'Popular' ? 'bg-st-yellow text-st-darkblue' : 'bg-st-orange text-white'}`}>
          {badge}
        </span>
      )}
    </div>
    
    <h3 className="font-display text-2xl text-st-darkblue mb-3">{title}</h3>
    <p className="text-st-darkblue/70 font-ui text-sm mb-6 flex-grow">{description}</p>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag: string, i: number) => (
        <span key={i} className="px-2 py-1 bg-st-bonewhite text-st-darkblue/60 text-xs rounded font-medium">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex items-center text-st-orange font-bold text-sm group-hover:translate-x-2 transition-transform">
      Ver detalles <ArrowRight size={16} className="ml-2" />
    </div>
  </div>
);

export const ServicesSection = () => {
  const services = [
    {
      title: "Diseño Web & Landings",
      description: "Sitios rápidos con estética retro-tech diseñados para convertir.",
      icon: Layout,
      badge: "Popular",
      tags: ["Responsivo", "Optimizado", "Conversión IA"]
    },
    {
      title: "Setup eCommerce",
      description: "WooCommerce / Shopify listo para vender con configuración completa.",
      icon: ShoppingBag,
      badge: null,
      tags: ["Instalación", "Personalización", "Rendimiento"]
    },
    {
      title: "Tiendas Digitales",
      description: "Catálogo inteligente y checkout optimizado para productos digitales.",
      icon: Zap,
      badge: "Más Vendido",
      tags: ["Catálogo IA", "Pasarelas pago", "Automatización"]
    },
    {
      title: "Funnels & Lead Gen",
      description: "Embudos visuales que captan y convierten tráfico frío en clientes.",
      icon: MessageSquare,
      badge: null,
      tags: ["Captación", "Email auto", "Analítica"]
    },
    {
      title: "Branding Funcional",
      description: "Identidad visual minimalista y coherente para startups.",
      icon: PenTool,
      badge: null,
      tags: ["Logos y assets", "Guía estilo", "Redes sociales"]
    },
    {
      title: "Configuración Redes",
      description: "Perfiles optimizados con automatización de contenido.",
      icon: Share2,
      badge: null,
      tags: ["Config completa", "Visual coherente", "Auto-publicación"]
    }
  ];

  return (
    <section className="py-24 bg-st-bonewhite">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-5xl text-st-darkblue mb-6">Servicios Profesionales</h2>
          <p className="font-ui text-xl text-st-darkblue/60">
            Tecnología útil. IA aplicada. Estilo que resuelve. <br/>
            Soluciones ágiles con impacto inmediato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        <div className="bg-st-darkblue rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diag-diamonds-light.png')] opacity-10"></div>
          <div className="relative z-10">
             <h3 className="font-display text-3xl text-white mb-4">¿Necesitas algo a medida?</h3>
             <p className="text-st-bonewhite/70 max-w-xl mx-auto mb-8">
               Analizamos tu caso y proponemos la solución tecnológica exacta. Sin sobrecostes ni funcionalidades innecesarias.
             </p>
             <DesignButton variant="glow" size="lg">Solicitar Consultoría</DesignButton>
          </div>
        </div>
      </div>
    </section>
  );
};
