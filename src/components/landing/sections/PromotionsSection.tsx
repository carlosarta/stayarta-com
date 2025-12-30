import React from 'react';
import { ArrowRight, Tag, Zap, Box } from 'lucide-react';
import { DesignButton } from '../../design-system/Buttons';
import { routes } from '../../../config/routes';

const PromoCard = ({ title, subtitle, features, icon: Icon, colorClass, delay }: any) => (
    <div className="bg-white p-8 rounded-3xl border-2 border-st-darkblue/5 hover:border-st-darkblue transition-all duration-300 shadow-[4px_4px_0px_#273F4F] hover:translate-x-1 hover:-translate-y-1 flex flex-col h-full group">
        <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
            <Icon size={24} />
        </div>
        <h3 className="font-display text-2xl text-st-darkblue mb-2">{title}</h3>
        <p className="font-ui text-sm text-st-darkblue/60 mb-6 font-bold">{subtitle}</p>
        
        <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-st-darkblue/80">
                    <span className="text-st-orange font-bold">•</span>
                    {feature}
                </li>
            ))}
        </ul>
        
        <div className="mt-auto">
             <button className="text-sm font-bold text-st-darkblue flex items-center gap-2 group-hover:gap-3 transition-all">
                Ver Detalles <ArrowRight size={16} />
             </button>
        </div>
    </div>
);

export const PromotionsSection = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  return (
    <section className="py-24 bg-st-bonewhite relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-5xl text-st-darkblue mb-6">Promos de Apertura</h2>
            <p className="font-ui text-xl text-st-darkblue/70">
                Ofertas especiales por tiempo limitado para celebrar nuestra nueva colección.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <PromoCard 
                title='Promo 1 "Starter Deal"'
                subtitle="10% OFF en la primera compra"
                features={['Envío 24h garantizado', 'Aplicable a wearable & audio', 'Soporte prioritario']}
                icon={Tag}
                colorClass="bg-st-orange"
            />
            <PromoCard 
                title='Promo 2 "Tech Upgrade"'
                subtitle="2×1 en accesorios seleccionados"
                features={['Cables de alta velocidad', 'Adaptadores universales', 'Soportes ergonómicos']}
                icon={Box}
                colorClass="bg-st-turquoise"
            />
            <PromoCard 
                title='Promo 3 "Nova Trial"'
                subtitle="7 días de IA empresarial gratis"
                features={['Instalación incluida', 'Acceso a todos los agentes', 'Sin tarjeta de crédito']}
                icon={Zap}
                colorClass="bg-st-yellow text-st-darkblue"
            />
        </div>

        <div className="flex justify-center">
            <DesignButton variant="brutalist" size="lg" onClick={() => onNavigate && onNavigate(routes.shop.root)}>
                Aprovechar Promos <ArrowRight className="ml-2" size={18} />
            </DesignButton>
        </div>
      </div>
    </section>
  );
};
