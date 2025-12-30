import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SHOP_SERVICES_DB } from '../../data/shop-services';
import { Navbar } from '../landing/Navbar';
import { Footer } from '../landing/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Find data based on URL param
  const serviceData = serviceId ? SHOP_SERVICES_DB[serviceId] : null;

  if (!serviceData) {
    return <Navigate to="/tienda" replace />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF00FF] selection:text-white font-ui">
      <Navbar />
      
      {/* HEADER SECTION */}
      <header className="relative py-24 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${serviceData.hero_gradient} opacity-10 blur-[120px] rounded-full pointer-events-none`} />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className={`inline-block px-3 py-1 rounded border border-white/20 bg-white/5 text-sm font-mono tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r ${serviceData.hero_gradient}`}>
              Servicios B2B
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              {serviceData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
              {serviceData.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-24">
        
        {/* OVERVIEW & BENEFITS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Description */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-[#00FFFF] pl-4">
              ¿En qué consiste?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {serviceData.description_long}
            </p>
            <button className={`px-8 py-4 rounded-full font-bold text-black bg-gradient-to-r ${serviceData.hero_gradient} hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
               {serviceData.cta_text}
            </button>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="text-[#FF00FF]">///</span> Ventajas Competitivas
            </h3>
            <ul className="space-y-4">
              {serviceData.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-[#00FFFF] shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* PROCESS / HOW IT WORKS */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Proceso Simplificado
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {serviceData.process.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Connector Line (Desktop) */}
                {idx < serviceData.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-white/10" />
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-[#111] border border-white/20 flex items-center justify-center text-2xl font-bold font-mono mb-6 group-hover:border-[#FF00FF] group-hover:text-[#FF00FF] transition-colors shadow-lg`}>
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-white">{step.title}</h4>
                  <p className="text-sm text-gray-500 max-w-[200px]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#111] to-[#000] border border-white/10 p-12 text-center relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${serviceData.hero_gradient}`} />
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              ¿Listo para escalar?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Únete a miles de emprendedores que ya están operando con nuestra infraestructura.
            </p>
            <div className="flex justify-center gap-4">
               <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors font-medium">
                 Hacer Pregunta
               </button>
               <button className={`px-8 py-3 rounded-full font-bold text-black bg-white hover:bg-[#00FFFF] transition-colors`}>
                 {serviceData.cta_text}
               </button>
            </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};
