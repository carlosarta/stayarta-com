import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Users, TrendingUp, Package, ShieldCheck, Truck } from 'lucide-react';
import { DesignButton } from '../../design-system/Buttons';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

const ModelCard = ({ title, subtitle, description, image, badge }: any) => (
  <div className="group relative bg-st-bonewhite border-4 border-st-darkblue overflow-hidden hover:shadow-[8px_8px_0px_#273F4F] transition-all duration-300 flex flex-col h-full">
    <div className="aspect-video w-full relative border-b-4 border-st-darkblue overflow-hidden">
      <div className="absolute inset-0 bg-st-orange/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity" />
      <ImageWithFallback 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
      />
      {badge && (
        <div className="absolute top-4 right-4 z-20 bg-st-yellow border-2 border-st-darkblue px-3 py-1 font-bold font-ui text-sm text-st-darkblue transform rotate-2 shadow-sm">
          {badge}
        </div>
      )}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="mb-4">
        <h3 className="font-display text-3xl leading-none mb-2 text-st-darkblue">{title}</h3>
        <p className="font-mono text-xs text-st-orange uppercase tracking-wider">{subtitle}</p>
      </div>
      <p className="font-ui text-st-darkblue/70 text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <div className="mt-auto pt-4 border-t-2 border-dashed border-st-darkblue/20 flex justify-between items-center">
        <span className="font-bold text-st-darkblue text-sm group-hover:translate-x-2 transition-transform flex items-center gap-2">
          Ver Detalles <ArrowRight size={16} />
        </span>
      </div>
    </div>
  </div>
);

export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Decorative background text */}
       <div className="absolute top-20 -right-20 font-display text-[200px] text-st-bonewhite leading-none select-none z-0 opacity-50 pointer-events-none">
         MODELOS
       </div>

       <div className="container mx-auto px-6 relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div className="max-w-2xl">
             <span className="text-st-orange font-bold uppercase tracking-widest text-sm mb-4 block">Ecosistema de Negocio</span>
             <h2 className="font-display text-5xl md:text-6xl text-st-darkblue mb-6">Tu negocio,<br /> tus reglas.</h2>
             <p className="text-xl text-st-darkblue/70 font-ui">
               Desde emprendedores que inician sin capital hasta empresas que escalan con importaciones masivas. 
               Proveemos la infraestructura, tú pones la visión.
             </p>
           </div>
           
           <div className="flex flex-col items-end gap-4 mt-8 md:mt-0">
             <DesignButton variant="brutalist" size="lg">Empezar Ahora <ArrowRight className="ml-2" size={18} /></DesignButton>
           </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ModelCard 
              title="Dropshipping" 
              subtitle="Sin Inversión Inicial"
              description="Vende sin stock. Conectamos tu tienda con proveedores verificados que envían directamente a tu cliente final. Ideal para validar ideas."
              image="https://images.unsplash.com/photo-1681514583222-0579e6835666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9wc2hpcHBpbmclMjBsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDA1MTQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              badge="ZERO RIESGO"
            />
            <ModelCard 
              title="Importación China" 
              subtitle="Escala tu Margen"
              description="Compra directa a fábricas certificadas. Nos encargamos de la negociación, control de calidad y logística aduanera hasta tu puerta."
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              badge="MAYORISTAS"
            />
            <ModelCard 
              title="Mentoria 1:1" 
              subtitle="Acelera Resultados"
              description="Asesoría personalizada para estructurar tu negocio, optimizar conversiones y evitar errores costosos. Acompañamiento real."
              image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              badge="PREMIUM"
            />
         </div>

         <div className="bg-st-bonewhite rounded-2xl p-8 flex flex-wrap justify-center gap-8 md:gap-16 items-center border border-st-darkblue/5">
            <div className="flex items-center gap-3 text-st-darkblue/70 font-medium">
              <ShieldCheck className="text-st-orange" size={24} /> Proveedores Certificados
            </div>
            <div className="flex items-center gap-3 text-st-darkblue/70 font-medium">
              <Truck className="text-st-orange" size={24} /> Tracking Internacional
            </div>
            <div className="flex items-center gap-3 text-st-darkblue/70 font-medium">
              <Users className="text-st-orange" size={24} /> Comunidad de Emprendedores
            </div>
         </div>
       </div>
    </section>
  );
};
