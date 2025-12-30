import React from 'react';
import { DesignButton } from './Buttons';
import { ProductCard, ServiceCard, EditorialBlock, MiniAppCard } from './Cards';
import { TypeScale } from './Typography';
import { IconSet } from './Icons';
import { StayArtaLogo } from './StayArtaLogo';
import { Zap, ArrowRight } from 'lucide-react';

export const DesignSystemPage = () => {
  return (
    <div className="min-h-screen bg-st-bonewhite p-4 md:p-12 space-y-20">
      <header className="space-y-4 border-b-4 border-st-darkblue pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <StayArtaLogo variant="favicon" className="w-24 h-24 shadow-xl rounded-[2rem]" />
            <div>
              <div className="mb-2">
                 <StayArtaLogo variant="full" className="h-20 w-auto" />
              </div>
              <p className="font-ui text-xl text-st-darkblue/60 max-w-2xl mt-4">
                Design System v2.0 • Retro Pop Tech + Neon Glow 3D
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-st-darkblue/10">
           <p className="font-mono text-xs text-st-darkblue/50 mb-2 uppercase">Favicon Asset (SVG)</p>
           <StayArtaLogo variant="favicon" className="w-16 h-16" />
        </div>
      </header>

      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="w-4 h-4 rounded-full bg-st-orange shadow-[0_0_10px_#EC5228]" />
          <h2 className="font-display text-4xl text-st-darkblue">Color Tokens</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { name: 'ST-Orange', hex: '#EC5228', bg: 'bg-st-orange', text: 'text-white' },
            { name: 'ST-Yellow', hex: '#FDBE34', bg: 'bg-st-yellow', text: 'text-st-darkblue' },
            { name: 'ST-Turquoise', hex: '#57B4BA', bg: 'bg-st-turquoise', text: 'text-st-darkblue' },
            { name: 'ST-DarkBlue', hex: '#273F4F', bg: 'bg-st-darkblue', text: 'text-white' },
            { name: 'ST-BoneWhite', hex: '#EFEEEA', bg: 'bg-st-bonewhite', text: 'text-st-darkblue' },
            { name: 'ST-Black', hex: '#000000', bg: 'bg-st-black', text: 'text-white' },
          ].map((color) => (
            <div key={color.name} className="space-y-2 group">
              <div className={`h-32 rounded-2xl ${color.bg} shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                <span className={`font-mono text-xs ${color.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  {color.hex}
                </span>
              </div>
              <div className="px-1">
                <p className="font-bold text-st-darkblue font-ui">{color.name}</p>
                <p className="text-xs text-st-darkblue/50 font-mono">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
           {[
             { name: 'Coral Glow', from: '#FDBE34', to: '#EC5228' },
             { name: 'Turquoise Glow', from: '#57B4BA', to: '#273F4F' },
             { name: 'Cosmic Glow', from: '#FF5CFF', to: '#3B00FF' },
             { name: 'Soft White Glow', from: '#FFFFFF', to: '#EC5228' },
           ].map((grad) => (
             <div key={grad.name} className="h-24 rounded-xl relative overflow-hidden shadow-md">
               <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${grad.from}, ${grad.to})` }} />
               <div className="absolute bottom-2 left-3 text-white font-bold text-sm drop-shadow-md">
                 {grad.name}
               </div>
             </div>
           ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="w-4 h-4 rounded-full bg-st-turquoise shadow-[0_0_10px_#57B4BA]" />
          <h2 className="font-display text-4xl text-st-darkblue">Typography</h2>
        </div>
        <TypeScale />
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <span className="w-4 h-4 rounded-full bg-st-yellow shadow-[0_0_10px_#FDBE34]" />
          <h2 className="font-display text-4xl text-st-darkblue">Interface Components</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="font-ui text-xl font-bold text-st-darkblue border-b-2 border-st-darkblue pb-2">Buttons</h3>
            <div className="flex flex-wrap gap-4 items-center p-8 bg-white rounded-3xl border-2 border-dashed border-st-darkblue/20">
              <DesignButton variant="glow">Glow Action</DesignButton>
              <DesignButton variant="gel">Soft Gel</DesignButton>
              <DesignButton variant="brutalist">Brutalist</DesignButton>
              <DesignButton variant="retro-outline">Outline</DesignButton>
            </div>
          </div>

          <div className="space-y-8">
             <h3 className="font-ui text-xl font-bold text-st-darkblue border-b-2 border-st-darkblue pb-2">Icons</h3>
             <IconSet />
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="font-ui text-xl font-bold text-st-darkblue border-b-2 border-st-darkblue pb-2">Cards & Layouts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              title="Neon Hoodie" 
              price="$89" 
              image="https://images.unsplash.com/photo-1545829683-1d8935a9b5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
            />
            <ServiceCard 
              title="AI Automation" 
              icon={<Zap size={24} />} 
              description="Deploy autonomous agents to handle your workflow with our signature neon-powered neural networks." 
            />
            <MiniAppCard title="Nova AI" status="Online">
               <div className="w-24 h-24 rounded-full bg-gradient-to-b from-st-turquoise to-st-darkblue flex items-center justify-center mb-4 shadow-lg animate-bounce-slow">
                 <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                 </div>
               </div>
               <DesignButton variant="gel" size="sm">Open Chat</DesignButton>
            </MiniAppCard>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="font-ui text-xl font-bold text-st-darkblue border-b-2 border-st-darkblue pb-2">Editorial Content</h3>
          <EditorialBlock 
             image="https://images.unsplash.com/photo-1660058550844-02d4eaa79667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
             title="Retro Future"
             subtitle="Blending the nostalgia of yesterday with the technology of tomorrow."
          />
        </div>
      </section>
    </div>
  );
};
