import React from 'react';
import { Clock, Bot, Palette, Layers } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { DesignButton } from '../../design-system/Buttons';

export const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-st-darkblue rounded-2xl transform -rotate-2"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Team working"
                className="rounded-2xl shadow-xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 bg-st-yellow p-6 rounded-xl border-2 border-st-darkblue z-20 shadow-lg">
                 <p className="font-display text-4xl text-st-darkblue">24h</p>
                 <p className="font-mono text-xs uppercase tracking-widest">Deploy Time</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-st-orange font-bold uppercase tracking-widest text-sm mb-4 block">Sobre Nosotros</span>
            <h2 className="font-display text-5xl text-st-darkblue mb-8">Qué es STAYArta</h2>
            <div className="prose prose-lg text-st-darkblue/70 mb-12 font-ui">
              <p className="mb-6">
                STAYArta es un ecosistema tecnológico modular diseñado para que personas, negocios y equipos operen con más velocidad, claridad y automatización.
              </p>
              <p>
                Combinamos tienda online, servicios digitales, IA integrada y un stack propio de herramientas para construir soluciones funcionales que se despliegan en horas, no semanas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="bg-st-bonewhite p-3 rounded-lg h-min"><Clock className="text-st-darkblue" size={20} /></div>
                <div>
                  <h4 className="font-display text-lg text-st-darkblue">Velocidad</h4>
                  <p className="text-sm text-st-darkblue/60">Deploy en horas, no semanas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-st-bonewhite p-3 rounded-lg h-min"><Bot className="text-st-darkblue" size={20} /></div>
                <div>
                  <h4 className="font-display text-lg text-st-darkblue">IA Práctica</h4>
                  <p className="text-sm text-st-darkblue/60">Automatización desde el día uno.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-st-bonewhite p-3 rounded-lg h-min"><Palette className="text-st-darkblue" size={20} /></div>
                <div>
                  <h4 className="font-display text-lg text-st-darkblue">Estética Pro</h4>
                  <p className="text-sm text-st-darkblue/60">Retro-futurista y funcional.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-st-bonewhite p-3 rounded-lg h-min"><Layers className="text-st-darkblue" size={20} /></div>
                <div>
                  <h4 className="font-display text-lg text-st-darkblue">Escalabilidad</h4>
                  <p className="text-sm text-st-darkblue/60">Arquitectura modular sin límites.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <DesignButton variant="default" size="lg">Nuestra Historia</DesignButton>
              <DesignButton variant="retro-outline" size="lg">Hablemos</DesignButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
