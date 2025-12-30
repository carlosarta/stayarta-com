import React from 'react';
import { DesignButton } from '../design-system/Buttons';
import aboutImage from '@/assets/e7fa3df5992de2612c6186d000811d815bda1f33.png';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-st-bonewhite relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-st-orange rounded-3xl translate-x-4 translate-y-4 z-0 bg-st-yellow"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-st-darkblue shadow-[8px_8px_0px_0px_#273F4F]">
            <img 
              src={aboutImage} 
              alt="Team unboxing STAYArta technology" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="inline-block px-3 py-1 bg-st-turquoise/20 text-st-darkblue font-bold rounded-full text-xs mb-4 border border-st-turquoise font-mono">
            EST. 2025
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-st-darkblue mb-6 leading-none">
            We Hack the <br/>
            <span className="text-st-orange italic">Ordinary.</span>
          </h2>
          <p className="font-ui text-lg text-st-darkblue/80 mb-8 leading-relaxed">
            STAYArta isn't just a brand; it's a movement. We merge the nostalgia of retro-tech with the precision of modern AI. 
            Our mission is to democratize automation while keeping the human spirit alive through design that pops.
          </p>
          <div className="flex gap-4">
             <DesignButton variant="retro-outline">Our Story</DesignButton>
             <DesignButton variant="brutalist">Join the Team</DesignButton>
          </div>
        </div>
      </div>
    </section>
  );
};
