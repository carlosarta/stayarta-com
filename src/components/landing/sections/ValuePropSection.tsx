import React from 'react';
import { ArrowRight, User, Building2, Home, Star, Package, Truck, Award } from 'lucide-react';
import { DesignButton } from '../../design-system/Buttons';
import { routes } from '../../../config/routes';

const ValueCard = ({ title, category, description, benefits, cta, image, onNavigate }: any) => (
  <div className="group relative bg-white rounded-[2rem] overflow-hidden border border-st-darkblue/10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
    <div className="h-64 relative overflow-hidden">
      <div className="absolute inset-0 bg-st-darkblue/20 group-hover:bg-st-darkblue/0 transition-colors z-10" />
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <span className="text-xs font-bold text-st-orange uppercase tracking-widest mb-2">{category}</span>
      <h3 className="font-display text-3xl text-st-darkblue mb-4">{title}</h3>
      <p className="font-ui text-st-darkblue/70 mb-6 text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="mb-8 flex-grow">
        <h4 className="font-bold text-st-darkblue text-sm mb-3 uppercase opacity-80">Beneficios:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-sm text-st-darkblue/60">
              <div className="w-1.5 h-1.5 rounded-full bg-st-turquoise" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => onNavigate && onNavigate(routes.shop.root)}
        className="w-full py-4 border border-st-darkblue text-st-darkblue font-bold font-ui uppercase tracking-wider hover:bg-st-darkblue hover:text-white transition-colors rounded-xl flex items-center justify-center gap-2"
      >
        {cta} <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

export const ValuePropSection = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-st-darkblue mb-6">Ecosistema de Negocio.</h2>
          <p className="text-xl text-st-darkblue/70 font-ui max-w-2xl">
            Creamos soluciones para personas, negocios y espacios que quieren operar al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <ValueCard 
            category="PARA TI"
            title="Tecnología que mejora tu día"
            description="Wearables, audio premium y gadgets que simplifican tus rutinas: salud, productividad y movilidad."
            benefits={['Energía: power banks y carga rápida', 'Comodidad: audio premium, smartwatches', 'Organización: accesorios minimalistas']}
            cta="Ver Tecnología Personal"
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            onNavigate={onNavigate}
          />
          <ValueCard 
            category="PARA NEGOCIOS"
            title="Operación más rápida y rentable"
            description="Soluciones que reducen tiempos, automatizan tareas y aumentan beneficio."
            benefits={['Automatizaciones IA', 'Tiendas online optimizadas', 'Dropshipping y proveedores verificados', 'Importación directa de fábrica']}
            cta="Ver Tecnología para Empresas"
            image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            onNavigate={onNavigate}
          />
          <ValueCard 
            category="PARA ESPACIOS"
            title="Ambientes que mejoran tu vida"
            description="Hogar, oficina o estudio: dispositivos smart para hacer tu entorno más útil y agradable."
            benefits={['Iluminación inteligente', 'Seguridad smart', 'Gadgets para productividad', 'Confort y ergonomía']}
            cta="Ver Tecnología para Espacios"
            image="https://images.unsplash.com/photo-1558002038-109177381793?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            onNavigate={onNavigate}
          />
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-st-darkblue/10">
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-4xl text-st-darkblue mb-1">500+</span>
            <span className="text-sm text-st-darkblue/60 font-medium flex items-center gap-1">
              <Package size={14} /> Productos
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-4xl text-st-darkblue mb-1">50+</span>
            <span className="text-sm text-st-darkblue/60 font-medium flex items-center gap-1">
              <Award size={14} /> Marcas Premium
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-4xl text-st-darkblue mb-1">24h</span>
            <span className="text-sm text-st-darkblue/60 font-medium flex items-center gap-1">
              <Truck size={14} /> Envío Rápido
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-display text-4xl text-st-darkblue mb-1">4.8/5</span>
            <span className="text-sm text-st-darkblue/60 font-medium flex items-center gap-1">
              <Star size={14} /> Valoración
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
