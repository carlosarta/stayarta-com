import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Workflow, Zap, BarChart3, ArrowRight, MessageCircle, Share2, Search, LayoutDashboard } from 'lucide-react';
import { DesignButton } from '../../design-system/Buttons';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import novaImage from '@/assets/bc8211b47852d1e6e8c25c8c088de1d6024990ea.png';

const FeatureItem = ({ icon: Icon, title, description }: any) => (
  <div className="flex gap-4 items-start group">
    <div className="w-12 h-12 rounded-lg bg-st-turquoise/10 flex items-center justify-center text-st-turquoise group-hover:bg-st-turquoise group-hover:text-st-darkblue transition-colors duration-300 shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-white font-display text-xl mb-2">{title}</h4>
      <p className="text-st-bonewhite/60 font-ui text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export const NovaSection = () => {
  return (
    <section className="py-24 bg-st-darkblue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,162,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(23,162,184,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-st-turquoise/20 blur-[120px] rounded-full pointer-events-none animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-st-turquoise rounded-full animate-ping" />
              <span className="font-mono text-st-turquoise text-sm uppercase tracking-widest">Nova Intelligence v2.0</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl text-white mb-8 leading-[0.9]">
              IA que <span className="text-transparent bg-clip-text bg-gradient-to-r from-st-turquoise to-white">trabaja</span> <br />
              para tu negocio.
            </h2>
            
            <p className="font-ui text-xl text-st-bonewhite/70 mb-12 leading-relaxed border-l-4 border-st-turquoise pl-6">
              No es IA genérica. Es Nova: un sistema que aprende de tu negocio, automatiza procesos y escala contigo.
            </p>

            <div className="space-y-8 mb-12">
              <FeatureItem 
                icon={LayoutDashboard}
                title="Dashboard Central"
                description="Control total. Visualiza métricas, gestiona pedidos y supervisa el rendimiento de tus agentes IA en tiempo real."
              />
              <FeatureItem 
                icon={MessageCircle}
                title="Bot Telegram"
                description="Tu negocio en tu bolsillo. Recibe notificaciones, alertas de ventas y gestiona operaciones críticas desde Telegram."
              />
              <FeatureItem 
                icon={Share2}
                title="Gestión Social"
                description="Automatización de contenido y respuestas en redes sociales. Mantén tu presencia activa 24/7 sin esfuerzo manual."
              />
              <FeatureItem 
                icon={Search}
                title="Posicionamiento SEO"
                description="Estrategias de SEO técnico y de contenido impulsadas por IA para dominar los resultados de búsqueda y atraer tráfico orgánico."
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <DesignButton variant="glow" size="lg" className="!bg-st-turquoise !text-st-darkblue hover:!bg-white">Explorar Nova</DesignButton>
              <DesignButton variant="retro-outline" size="lg" className="!border-st-bonewhite !text-st-bonewhite hover:!bg-st-bonewhite hover:!text-st-darkblue">Solicitar Demo</DesignButton>
            </div>
          </div>

          {/* Visual / Stats */}
          <div className="relative flex justify-center">
            <div className="relative z-10 w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-st-darkblue via-transparent to-transparent z-20 opacity-60" />
              <ImageWithFallback 
                src={novaImage} 
                alt="NOVA AI Assistant" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 z-30">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-st-turquoise rounded-full flex items-center justify-center text-st-darkblue font-bold animate-pulse">
                       <Zap size={24} />
                    </div>
                    <div>
                       <p className="text-white font-display text-lg">NOVA</p>
                       <p className="text-st-turquoise text-xs uppercase tracking-widest">Super Inteligencia</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-st-turquoise rounded-full blur-[100px] opacity-20 -z-10" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-st-orange rounded-full blur-3xl opacity-30 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
