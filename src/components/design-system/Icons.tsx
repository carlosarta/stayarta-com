import React from 'react';
import { Zap, Box, Cpu, Globe, MessageCircle, Search, ShoppingBag, Star } from 'lucide-react';
import { cn } from '../../lib/utils';

const IconWrapper = ({ variant = 'glow', children }: { variant?: 'glow' | 'soft' | 'pixel', children: React.ReactNode }) => {
  const variants = {
    glow: "bg-st-darkblue text-st-turquoise shadow-[0_0_15px_#57B4BA] border border-st-turquoise rounded-xl p-3 hover:scale-110 transition-transform duration-300",
    soft: "bg-gradient-to-br from-white to-gray-100 text-st-orange shadow-[4px_4px_10px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,1)] rounded-2xl p-4 hover:shadow-inner transition-shadow",
    pixel: "bg-st-yellow border-2 border-st-black text-st-black p-2 rounded-none shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] transition-all"
  };

  return (
    <div className={cn("inline-flex items-center justify-center", variants[variant])}>
      {children}
    </div>
  );
};

export const IconSet = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <h3 className="font-ui text-sm text-st-darkblue/50 uppercase tracking-wider">Neon Glow</h3>
        <div className="flex flex-wrap gap-4 p-6 bg-st-darkblue/90 rounded-3xl">
          <IconWrapper variant="glow"><Zap size={24} /></IconWrapper>
          <IconWrapper variant="glow"><Cpu size={24} /></IconWrapper>
          <IconWrapper variant="glow"><Globe size={24} /></IconWrapper>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-ui text-sm text-st-darkblue/50 uppercase tracking-wider">Soft 3D</h3>
        <div className="flex flex-wrap gap-4 p-6 bg-st-bonewhite rounded-3xl">
          <IconWrapper variant="soft"><Box size={24} /></IconWrapper>
          <IconWrapper variant="soft"><ShoppingBag size={24} /></IconWrapper>
          <IconWrapper variant="soft"><MessageCircle size={24} /></IconWrapper>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-ui text-sm text-st-darkblue/50 uppercase tracking-wider">Retro Pixel</h3>
        <div className="flex flex-wrap gap-4 p-6 bg-white border-2 border-st-darkblue/10 rounded-3xl">
          <IconWrapper variant="pixel"><Star size={24} /></IconWrapper>
          <IconWrapper variant="pixel"><Search size={24} /></IconWrapper>
          <IconWrapper variant="pixel"><Zap size={24} /></IconWrapper>
        </div>
      </div>
    </div>
  );
};
