import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../landing/Navbar';
import { Footer } from '../landing/Footer';
import { SHOP_LANDING_CONTENT } from '../../data/shop-landing';
import { ShieldCheck, Truck, Users, Box, Globe, TrendingUp, ArrowRight } from 'lucide-react';

const IconMap = {
    ShieldCheck, Truck, Users, Box, Globe, TrendingUp
};

export const EcommerceServicesPage = () => {
  const navigate = useNavigate();
  const { hero, services, features } = SHOP_LANDING_CONTENT;

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-white selection:bg-[#FF00FF] selection:text-white">
      {/* 1. COMPOSICIÓN: Navbar Consistente */}
      <Navbar />

      <main className="flex-1 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF00FF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00FFFF]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 py-20 relative z-10">
          
          {/* HERO SECTION */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6"
            >
              <span className="block text-white">{hero.title_line1}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#00FFFF]">
                {hero.title_line2}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <button className="bg-[#FF00FF] text-black font-bold py-4 px-10 rounded-full hover:bg-[#FF00FF]/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,0,255,0.4)]">
                {hero.primary_cta}
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-mono border border-gray-800 px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse" />
                {hero.secondary_info}
              </div>
            </motion.div>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {services.map((service, index) => {
              const Icon = IconMap[service.icon_name];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${service.highlight_color}, transparent 70%)` }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-lg bg-black/50 border border-white/10 text-white">
                        {Icon && <Icon size={24} style={{ color: service.highlight_color }} />}
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded bg-white/10 text-white/80">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-2">{service.title}</h3>
                    <p 
                        className="text-lg font-medium mb-4"
                        style={{ color: service.highlight_color }}
                    >
                        {service.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                      {service.description}
                    </p>

                    <button 
                      onClick={() => navigate(service.link_url)}
                      className="group/btn flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors hover:text-white text-gray-400"
                    >
                      {service.cta}
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* FEATURES STRIP */}
          <div className="border-t border-white/10 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {features.map((feature, idx) => {
                const Icon = IconMap[feature.icon_name];
                return (
                  <div key={idx} className="flex flex-col items-center gap-4 group cursor-default">
                    <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#00FFFF]/10 transition-colors text-white group-hover:text-[#00FFFF]">
                      {Icon && <Icon size={24} />}
                    </div>
                    <span className="text-lg font-medium text-gray-300">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      {/* 2. COMPOSICIÓN: Footer Consistente */}
      <Footer />
    </div>
  );
};
