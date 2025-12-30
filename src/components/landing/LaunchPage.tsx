import React from 'react';
import { SeoHead } from '../seo/SeoHead';
import { DesignButton } from '../design-system/Buttons';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { routes } from '../../config/routes';
import { Check, ArrowRight, Zap, Monitor, ShoppingBag, BarChart3, LifeBuoy, User, Building2, PenTool, Clock, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ServiceCard } from '../design-system/Cards';

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-st-darkblue text-white pt-20">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1635340038191-96eea7fbd056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGZ1dHVyaXN0aWMlMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBuZW9uJTIwbGlnaHRzJTIwY3liZXJwdW5rJTIwc3R5bGV8ZW58MXx8fHwxNzY0MDQ1MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
        alt="Retro Tech Workspace" 
        className="w-full h-full object-cover opacity-30 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-st-darkblue/80 via-st-darkblue/50 to-st-darkblue" />
    </div>

    {/* Content */}
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="inline-block px-4 py-1 bg-st-turquoise/10 border border-st-turquoise text-st-turquoise rounded-full text-sm font-bold font-ui mb-6 backdrop-blur-md">
        LAUNCH SPRINT 2025
      </div>
      
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
        Activa tu ecosistema <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-st-turquoise to-st-yellow">digital en 24 horas.</span>
      </h1>
      
      <p className="font-ui text-xl md:text-2xl text-st-bonewhite/80 max-w-3xl mx-auto mb-4">
        Web, IA y automatización mínima viable, lista para vender y operar, sin complicaciones técnicas.
      </p>
      
      <p className="font-ui text-sm text-st-orange font-bold mb-10">
        Ideal para emprendedores, pymes y creadores que quieren resultados concretos, no promesas.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <DesignButton 
          variant="glow" 
          size="lg" 
          onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Quiero mi implementación express
        </DesignButton>
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-xl font-bold font-ui border-2 border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 text-white"
        >
          Hablar por WhatsApp <ArrowRight size={18} />
        </a>
      </div>
      
      <p className="mt-6 text-xs text-st-bonewhite/40">
        Cupos limitados. Implementaciones en orden de reserva confirmada.
      </p>
    </div>
  </section>
);

const FeatureBlock = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-st-turquoise/50 transition-all group">
    <div className="w-12 h-12 bg-st-darkblue rounded-lg flex items-center justify-center text-st-turquoise mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(87,180,186,0.2)]">
      {icon}
    </div>
    <h3 className="font-display text-2xl text-white mb-2">{title}</h3>
    <p className="font-ui text-st-bonewhite/60 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const WhatsIncluded = () => (
  <section className="py-24 bg-st-darkblue relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-st-orange/10 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
          Qué incluye el Pack <span className="text-st-orange">Implementación Express</span>
        </h2>
        <p className="font-ui text-xl text-st-bonewhite/60">
          Todo lo mínimo imprescindible para operar con tecnología real, no maquetas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureBlock 
          icon={<Monitor />}
          title="Sitio web listo para operar"
          description="Una landing de alto impacto en WordPress + Elementor, conectada a tu dominio, con estética retro-tech y enfocada en conversión."
        />
        <FeatureBlock 
          icon={<ShoppingBag />}
          title="Tienda y cobros configurados"
          description="WooCommerce operativo, pasarela de pago principal activa y estructura lista para que empieces a vender sin fricción."
        />
        <FeatureBlock 
          icon={<Zap />}
          title="IA conectada a tu negocio"
          description="Un avatar IA básico para tu web o redes y un flujo automático (ej: formulario → Airtable → Telegram) para empezar con automatización real."
        />
        <FeatureBlock 
          icon={<BarChart3 />}
          title="Panel de control mínimo"
          description="Acceso a un mini-dashboard con métricas básicas y registros de eventos, para que veas qué está pasando en tu sistema."
        />
        <FeatureBlock 
          icon={<LifeBuoy />}
          title="30 días de ajustes incluidos"
          description="Durante el primer mes revisamos y afinamos ajustes menores para dejar tu sistema estable y alineado a tus objetivos."
        />
      </div>
    </div>
  </section>
);

const TargetAudience = () => (
  <section className="py-24 bg-st-bonewhite text-st-darkblue">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-4xl md:text-5xl text-center mb-16">
        ¿Para quién es este lanzamiento?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Building2 size={32} />,
            title: "Emprendedores",
            text: "Tienes una idea validada o en marcha y necesitas una presencia digital sólida, rápida y con IA integrada sin pelearte con lo técnico."
          },
          {
            icon: <User size={32} />,
            title: "Pymes",
            text: "Tu negocio ya factura, pero tus procesos son manuales y tu web no refleja el nivel real de tu operación."
          },
          {
            icon: <PenTool size={32} />,
            title: "Creadores y consultores",
            text: "Vendes conocimiento, contenido o mentorías y quieres una landing que convierta y un sistema que trabaje por ti mientras creas."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border-2 border-st-darkblue/5 hover:border-st-orange transition-colors">
            <div className="w-16 h-16 bg-st-yellow rounded-full flex items-center justify-center text-st-darkblue mb-6 border-2 border-st-darkblue">
              {item.icon}
            </div>
            <h3 className="font-display text-3xl mb-4">{item.title}</h3>
            <p className="font-ui text-st-darkblue/70 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-st-darkblue text-white relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl mb-4">Cómo funciona el Launch Sprint</h2>
        <p className="font-ui text-xl text-st-bonewhite/60">Un proceso claro, en cuatro pasos, sin tecnicismos innecesarios.</p>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {[
            { step: "01", title: "Aplicas al Sprint", text: "Rellenas un formulario simple con información clave de tu negocio y tus objetivos." },
            { step: "02", title: "Checklist y accesos", text: "Te enviamos un checklist guiado para que nos compartas los accesos mínimos necesarios." },
            { step: "03", title: "Implementamos", text: "Diseñamos tu landing, configuramos la tienda mínima viable y conectamos la IA básica." },
            { step: "04", title: "Entrega", text: "Te mostramos el resultado, te damos acceso, un walkthrough en video y quedas listo para operar." }
          ].map((item, i) => (
            <div key={i} className="bg-st-darkblue border border-white/10 p-6 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-5xl font-display text-white/10 group-hover:text-st-turquoise/20 transition-colors mb-4">
                {item.step}
              </div>
              <h3 className="font-bold font-ui text-xl mb-3 text-st-yellow">{item.title}</h3>
              <p className="text-sm text-st-bonewhite/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-center mt-12 font-ui font-bold text-st-turquoise">
        Todo con alcance definido, fechas claras y comunicación directa.
      </p>
    </div>
  </section>
);

const OfferSection = () => (
  <section className="py-20 bg-st-yellow border-y-8 border-st-darkblue">
    <div className="container mx-auto px-6 text-center text-st-darkblue">
      <div className="inline-block px-4 py-1 bg-st-darkblue text-white font-bold rounded-full mb-6 animate-pulse">
        OFERTA LIMITADA
      </div>
      <h2 className="font-display text-5xl md:text-6xl mb-6">Oferta especial de lanzamiento</h2>
      <p className="font-ui text-xl max-w-2xl mx-auto font-bold mb-8">
        El Pack Implementación Express STAYArta reúne web, IA y automatización mínima viable en un solo sprint.
      </p>
      
      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl max-w-3xl mx-auto border-2 border-st-darkblue border-dashed mb-8">
        <p className="text-lg">
          <span className="font-bold block text-2xl mb-2">⚡ Descuento de lanzamiento aplicado</span>
          Cupos limitados por capacidad de implementación.
        </p>
      </div>
      
      <p className="text-sm opacity-70">
        Los detalles de precio y forma de pago se confirman después de revisar tu formulario y validar encaje con el pack.
      </p>
    </div>
  </section>
);

const ApplicationForm = () => (
  <section id="apply-form" className="py-24 bg-st-bonewhite">
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl text-st-darkblue mb-4">Aplica al Launch Sprint</h2>
        <p className="font-ui text-st-darkblue/70">
          Cuéntanos en qué punto estás y qué quieres lograr. Leemos todo y te respondemos con una propuesta clara, sin rodeos.
        </p>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-st-darkblue/10">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-st-darkblue">Nombre completo</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-st-bonewhite border border-st-darkblue/10 focus:border-st-orange focus:ring-0 outline-none transition-colors" placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-st-darkblue">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-st-bonewhite border border-st-darkblue/10 focus:border-st-orange focus:ring-0 outline-none transition-colors" placeholder="tu@email.com" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-st-darkblue">WhatsApp</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl bg-st-bonewhite border border-st-darkblue/10 focus:border-st-orange focus:ring-0 outline-none transition-colors" placeholder="+52 123..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-st-darkblue">País / Ciudad</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-st-bonewhite border border-st-darkblue/10 focus:border-st-orange focus:ring-0 outline-none transition-colors" placeholder="CDMX, México" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-st-darkblue">Tipo de proyecto</label>
            <select className="w-full px-4 py-3 rounded-xl bg-st-bonewhite border border-st-darkblue/10 focus:border-st-orange focus:ring-0 outline-none transition-colors appearance-none">
              <option>Emprendimiento</option>
              <option>Pyme</option>
              <option>Creador de contenido</option>
              <option>Otro</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-st-darkblue">¿Qué quieres lograr en los próximos 90 días?</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-st-bonewhite border border-st-darkblue/10 focus:border-st-orange focus:ring-0 outline-none transition-colors resize-none" placeholder="Describe tus objetivos principales..."></textarea>
          </div>

          <div className="flex items-start gap-3 pt-4">
             <div className="mt-1 text-st-orange"><ShieldCheck size={20} /></div>
             <p className="text-xs text-st-darkblue/60">
               Tus datos están seguros. No prometemos milagros, prometemos un sistema mínimo viable funcional, entregado en el tiempo acordado.
             </p>
          </div>

          <DesignButton variant="glow" size="lg" className="w-full mt-6">
            Enviar y revisar mi caso
          </DesignButton>
        </form>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 bg-st-black text-center border-t border-white/10">
    <div className="container mx-auto px-6">
      <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
        ¿Listo para activar tu <span className="text-st-turquoise">ecosistema digital?</span>
      </h2>
      <p className="font-ui text-xl text-st-bonewhite/60 max-w-2xl mx-auto mb-10">
        Si estás cansado de acumular ideas y quieres ver resultados concretos en días, no en meses, este lanzamiento es para ti.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
         <DesignButton variant="glow" size="lg" onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}>
           Reservar mi lugar
         </DesignButton>
         <DesignButton variant="retro-outline" size="lg">
           Resolver dudas por WhatsApp
         </DesignButton>
      </div>
    </div>
  </section>
);

export const LaunchPage = () => {
  return (
    <div className="min-h-screen bg-st-bonewhite">
      <Hero />
      <WhatsIncluded />
      <TargetAudience />
      <HowItWorks />
      <OfferSection />
      <ApplicationForm />
      <FinalCTA />
    </div>
  );
};
