import React from 'react';
import { Navbar, Footer } from '../landing/LandingPage';
import { DesignButton } from '../design-system/Buttons';
import { Construction } from 'lucide-react';

export const GenericPage = ({ title, subtitle, onNavigate }: { title: string, subtitle: string, onNavigate: (path: string) => void }) => {
  return (
    <div className="min-h-screen bg-st-bonewhite flex flex-col">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
         <div className="w-24 h-24 bg-st-yellow rounded-full flex items-center justify-center text-st-darkblue mb-8 animate-pulse">
            <Construction size={48} />
         </div>
         <h1 className="font-display text-5xl md:text-6xl text-st-darkblue mb-4">{title}</h1>
         <p className="font-ui text-xl text-st-darkblue/60 max-w-2xl">{subtitle}</p>
         
         <div className="mt-12 flex gap-4">
            <DesignButton variant="glow" onClick={() => onNavigate('/')}>Volver al Inicio</DesignButton>
            <DesignButton variant="retro-outline" onClick={() => onNavigate('/contactanos')}>Contáctanos</DesignButton>
         </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};
