import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../landing/LandingPage';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { DesignButton } from '../design-system/Buttons';
import { ServiceCard } from '../design-system/Cards';
import { Monitor, Zap, Clock, Briefcase, Share2, PenTool, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/4adb56e17f8a9cfbb52a7ce7db06856493d6fb5f.png';
import { routes } from '../../config/routes';

export const ServicesHub = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-st-bonewhite">
      <Navbar onNavigate={navigate} />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-st-darkblue overflow-hidden">
        <div className="absolute inset-0">
           <ImageWithFallback 
             src={heroImage} 
             alt="Services Hub" 
             className="w-full h-full object-cover opacity-40 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-st-darkblue via-st-darkblue/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-st-turquoise/10 border border-st-turquoise text-st-turquoise rounded-full text-sm font-bold font-ui mb-6 backdrop-blur-md">
              ECOSYSTEM & SERVICES
            </div>
            <h1 className="font-display text-6xl md:text-7xl mb-6 leading-tight">
              Potencia tu negocio con <br/>
              <span className="text-st-yellow">Tecnología Retro-Futurista</span>
            </h1>
            <p className="font-ui text-xl text-st-bonewhite/80 mb-8 max-w-2xl">
              Desde implementaciones express en 24h hasta automatización avanzada con IA. 
              Elige el nivel de transformación que necesitas.
            </p>
            <div className="flex gap-4">
               <DesignButton variant="glow" size="lg" onClick={() => navigate(routes.services.express)}>
                 Ver Implementación Express
               </DesignButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-st-bonewhite">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Digital Services */}
              <div onClick={() => navigate(routes.services.digital)} className="cursor-pointer group">
                <ServiceCard 
                  title="Servicios Digitales" 
                  icon={<Monitor />} 
                  description="Desarrollo web, diseño de interfaces y experiencias digitales de alto impacto."
                  className="h-full bg-white hover:bg-st-turquoise/10"
                />
              </div>

              {/* Automation & IA */}
              <div onClick={() => navigate(routes.services.automation)} className="cursor-pointer group">
                <ServiceCard 
                  title="Automatización & IA" 
                  icon={<Zap />} 
                  description="Flujos inteligentes, chatbots y sistemas multiagente para escalar tu operación."
                  className="h-full bg-st-darkblue text-white hover:border-st-orange"
                />
              </div>

              {/* Implementation Express */}
              <div onClick={() => navigate(routes.services.express)} className="cursor-pointer group">
                <ServiceCard 
                  title="Implementación Express" 
                  icon={<Clock />} 
                  description="Tu ecosistema digital listo en 24 horas. Web + Tienda + IA básica."
                  className="h-full bg-white hover:bg-st-yellow/20"
                />
              </div>

              {/* Consulting */}
              <div onClick={() => navigate(routes.services.consulting)} className="cursor-pointer group">
                <ServiceCard 
                  title="Consultoría Tech" 
                  icon={<Briefcase />} 
                  description="Asesoría estratégica para digitalizar y optimizar procesos de negocio."
                  className="h-full bg-white hover:bg-st-turquoise/10"
                />
              </div>

              {/* Distribution */}
              <div onClick={() => navigate(routes.services.ecosystem)} className="cursor-pointer group">
                <ServiceCard 
                  title="Distribución & Ecosistema" 
                  icon={<Share2 />} 
                  description="Únete a nuestra red de distribución, dropshipping y alianzas B2B."
                  className="h-full bg-white hover:bg-st-turquoise/10"
                />
              </div>

              {/* Custom */}
              <div onClick={() => navigate(routes.services.custom)} className="cursor-pointer group">
                <ServiceCard 
                  title="Servicios a Medida" 
                  icon={<PenTool />} 
                  description="Soluciones personalizadas para requerimientos específicos y complejos."
                  className="h-full bg-white hover:bg-st-turquoise/10"
                />
              </div>
           </div>
        </div>
      </section>

      <Footer onNavigate={navigate} />
    </div>
  );
};
