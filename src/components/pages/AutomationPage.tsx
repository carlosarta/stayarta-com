import React from 'react';
import { Navbar, Footer } from '../landing/LandingPage';
import { DesignButton } from '../design-system/Buttons';
import { routes } from '../../config/routes';
import { Bot, Cpu, Network, MessageSquare, Zap, BarChart, CheckCircle } from 'lucide-react';

export const AutomationPage = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  return (
    <div className="min-h-screen bg-st-black text-st-bonewhite font-ui">
      <Navbar onNavigate={onNavigate} />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(87,180,186,0.15),transparent_70%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            Automatización <span className="text-st-turquoise">& IA Empresarial</span>
          </h1>
          <p className="text-xl text-st-bonewhite/70 max-w-3xl mx-auto mb-10">
            Conectamos tus herramientas, eliminamos tareas repetitivas y desplegamos agentes de IA que trabajan 24/7.
          </p>
          <DesignButton variant="glow" size="lg" onClick={() => onNavigate(routes.nova.enterprise)}>
            Solicitar Diagnóstico IA
          </DesignButton>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-st-darkblue/50">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl text-center mb-16 text-st-yellow">Flujo de Implementación IA</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { icon: <MessageSquare />, title: "1. Diagnóstico", desc: "Analizamos tus flujos actuales y puntos de dolor." },
               { icon: <Network />, title: "2. Arquitectura", desc: "Diseñamos la red de agentes y automatizaciones." },
               { icon: <Cpu />, title: "3. Despliegue", desc: "Configuramos Make, Airtable y Nova Bots." },
               { icon: <BarChart />, title: "4. Control", desc: "Te entregamos un dashboard para monitorear todo." }
             ].map((item, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors">
                 <div className="w-12 h-12 mx-auto bg-st-turquoise/20 text-st-turquoise rounded-full flex items-center justify-center mb-4">
                   {item.icon}
                 </div>
                 <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                 <p className="text-sm text-white/60">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="font-display text-4xl mb-6">Soluciones <span className="text-st-orange">Multi-Agente</span></h2>
                  <div className="space-y-6">
                     {[
                       "Atención al cliente automatizada (WhatsApp/Telegram)",
                       "Calificación de leads y agendamiento",
                       "Generación de contenido y reportes",
                       "Sincronización de inventario y pedidos"
                     ].map((feat, i) => (
                       <div key={i} className="flex items-center gap-3 text-lg text-white/80">
                         <CheckCircle className="text-st-turquoise shrink-0" size={20} />
                         {feat}
                       </div>
                     ))}
                  </div>
                  <div className="mt-10">
                     <DesignButton variant="retro-outline" onClick={() => onNavigate(routes.nova.commandCenter)}>
                        Ver Demo Dashboard
                     </DesignButton>
                  </div>
               </div>
               <div className="relative bg-gradient-to-br from-st-darkblue to-black border border-st-turquoise/30 rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <Bot size={120} className="text-st-turquoise animate-bounce" />
                  <div className="absolute inset-0 bg-st-turquoise/10 blur-3xl -z-10" />
               </div>
            </div>
         </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};
