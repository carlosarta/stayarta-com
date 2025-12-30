import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Smartphone, Users, Home, Star, Zap, Package } from 'lucide-react';
import { DesignButton } from '../../design-system/Buttons';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

const tabs = [
  {
    id: 'personal',
    label: 'Para Ti',
    sub: 'Estilo personal',
    icon: <Smartphone className="w-5 h-5" />,
    title: 'Para Ti',
    description: 'Wearables, audio premium y gadgets que elevan tu día a día',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Productos tech', value: '500+' },
      { label: 'Marcas premium', value: '50+' },
      { label: 'Envío rápido', value: '24h' },
    ],
    tags: ['Smartwatches', 'Auriculares', 'Power Banks', 'Accesorios']
  },
  {
    id: 'teams',
    label: 'Para Equipos',
    sub: 'Productividad',
    icon: <Users className="w-5 h-5" />,
    title: 'Para Equipos',
    description: 'Equipamiento de alto rendimiento para startups y agencias creativas.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Empresas', value: '200+' },
      { label: 'Setup completo', value: '48h' },
      { label: 'Soporte', value: '24/7' },
    ],
    tags: ['Workstations', 'Periféricos', 'Monitores', 'Videoconferencia']
  },
  {
    id: 'spaces',
    label: 'Para Espacios',
    sub: 'Ambiente smart',
    icon: <Home className="w-5 h-5" />,
    title: 'Para Espacios',
    description: 'Domótica y tecnología ambiental para transformar tu entorno.',
    image: 'https://images.unsplash.com/photo-1558002038-1091a166111c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stats: [
      { label: 'Sensores', value: 'IoT' },
      { label: 'Ahorro energía', value: '30%' },
      { label: 'Instalación', value: 'Fácil' },
    ],
    tags: ['Iluminación', 'Climatización', 'Seguridad', 'Asistentes']
  }
];

export const LifestyleSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 bg-st-bonewhite relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-mono text-st-orange text-sm tracking-widest uppercase mb-2 block">Catálogo</span>
          <h2 className="font-display text-5xl md:text-6xl text-st-darkblue mb-6">Tech para cada momento</h2>
          <p className="font-ui text-xl text-st-darkblue/70">
            Desde gadgets personales hasta soluciones para equipos completos.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`
                group relative px-8 py-4 rounded-xl text-left transition-all duration-300
                ${activeTab.id === tab.id 
                  ? 'bg-st-darkblue text-white shadow-lg scale-105' 
                  : 'bg-white text-st-darkblue hover:bg-st-turquoise/10 border border-st-darkblue/10'}
              `}
            >
              <div className="flex items-center gap-3 mb-1">
                <div className={`p-2 rounded-lg ${activeTab.id === tab.id ? 'bg-st-orange text-white' : 'bg-st-bonewhite text-st-darkblue'}`}>
                  {tab.icon}
                </div>
                <span className="font-display text-lg">{tab.label}</span>
              </div>
              <span className={`text-xs font-ui ${activeTab.id === tab.id ? 'text-white/60' : 'text-st-darkblue/60'}`}>
                {tab.sub}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl shadow-2xl border border-st-darkblue/5 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]"
            >
              {/* Image Side */}
              <div className="relative h-64 lg:h-full overflow-hidden group">
                 <div className="absolute inset-0 bg-st-darkblue/20 z-10 group-hover:bg-st-darkblue/10 transition-colors duration-500" />
                 <ImageWithFallback
                   src={activeTab.image}
                   alt={activeTab.title}
                   className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute bottom-6 left-6 z-20 flex gap-2 flex-wrap">
                    {activeTab.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/90 backdrop-blur text-st-darkblue text-xs font-bold rounded-full border border-st-darkblue/10">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>

              {/* Info Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <div className="mb-8">
                  <h3 className="font-display text-4xl text-st-darkblue mb-4">{activeTab.title}</h3>
                  <p className="font-ui text-lg text-st-darkblue/70 leading-relaxed">
                    {activeTab.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-10 border-t border-dashed border-st-darkblue/20 pt-8">
                  {activeTab.stats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="font-display text-2xl text-st-orange mb-1">{stat.value}</p>
                      <p className="font-mono text-xs text-st-darkblue/50 uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <DesignButton variant="glow" size="lg">Explorar Categoría</DesignButton>
                  <div className="flex items-center gap-2 text-st-darkblue/60 text-sm">
                    <div className="flex text-st-yellow">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <span className="font-bold text-st-darkblue">4.8/5</span> Valoración
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
