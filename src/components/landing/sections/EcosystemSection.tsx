import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Zap, Truck, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DesignButton } from '../../design-system/Buttons';

const BentoCard = ({ title, description, icon: Icon, stats, colorClass, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative p-8 bg-white rounded-3xl border border-st-darkblue/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden"
  >
    <div className={`absolute top-0 left-0 w-full h-1 ${colorClass}`} />
    <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out" />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass.replace('bg-', 'bg-').replace('500', '100')} text-st-darkblue`}>
          <Icon size={24} />
        </div>
        <div className="text-right">
          <p className="font-display text-2xl text-st-darkblue">{stats.value}</p>
          <p className="text-xs font-mono text-st-darkblue/50">{stats.label}</p>
        </div>
      </div>
      
      <h3 className="font-display text-2xl mb-3 text-st-darkblue">{title}</h3>
      <p className="text-st-darkblue/60 font-ui text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="mt-auto pt-6 border-t border-dashed border-st-darkblue/10">
        <ul className="space-y-2">
          {stats.features.map((feat: string, i: number) => (
            <li key={i} className="flex items-center gap-2 text-xs text-st-darkblue/70 font-medium">
              <CheckCircle2 size={12} className="text-green-500" />
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export const EcosystemSection = () => {
  return (
    <section className="py-24 bg-st-bonewhite relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-st-darkblue text-white text-xs font-mono mb-4 rounded-full">ECOSISTEMA INTEGRAL</span>
            <h2 className="font-display text-5xl md:text-6xl text-st-darkblue leading-tight">
              4 pilares. <br />
              <span className="text-st-orange">1 plataforma.</span>
            </h2>
            <p className="mt-6 text-xl text-st-darkblue/70 font-ui max-w-lg">
              Todo lo que necesitas para escalar tu negocio digital, integrado y listo para usar.
            </p>
          </div>
          <div className="flex gap-4">
            <DesignButton variant="glow" size="lg">Empezar Ahora</DesignButton>
            <DesignButton variant="retro-outline" size="lg">Conocer Más</DesignButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BentoCard 
            title="eCommerce" 
            description="Tienda online completa con catálogo inteligente y checkout optimizado."
            icon={ShoppingCart}
            colorClass="bg-blue-500"
            stats={{ value: '72h', label: 'Setup promedio', features: ['WooCommerce/Shopify', 'Pagos integrados', 'Inventario IA'] }}
            delay={0.1}
          />
          <BentoCard 
            title="Automatización" 
            description="Workflows que eliminan tareas repetitivas y conectan tus herramientas."
            icon={Zap}
            colorClass="bg-st-yellow"
            stats={{ value: '95%', label: 'Menos tiempo', features: ['Make/Zapier', 'APIs custom', 'Triggers IA'] }}
            delay={0.2}
          />
          <BentoCard 
            title="Distribución" 
            description="Programa para mayoristas, dropshipping y marca blanca."
            icon={Truck}
            colorClass="bg-st-orange"
            stats={{ value: '30%', label: 'Comisión prom.', features: ['Catálogo tech', 'Comisiones', 'Marketing kits'] }}
            delay={0.3}
          />
          <BentoCard 
            title="Deploy Express" 
            description="De concepto a producción en 24h con infraestructura optimizada."
            icon={Rocket}
            colorClass="bg-st-turquoise"
            stats={{ value: '24h', label: 'Deploy prom.', features: ['Hosting premium', 'CDN global', 'SSL incluido'] }}
            delay={0.4}
          />
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder logos for trust indicators */}
           <div className="font-display text-2xl text-st-darkblue">SHOPIFY</div>
           <div className="font-display text-2xl text-st-darkblue">WOOCOMMERCE</div>
           <div className="font-display text-2xl text-st-darkblue">MAKE</div>
           <div className="font-display text-2xl text-st-darkblue">STRIPE</div>
           <div className="font-display text-2xl text-st-darkblue">OPENAI</div>
        </div>
      </div>
    </section>
  );
};
