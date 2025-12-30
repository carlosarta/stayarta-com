import React from 'react';
import { Navbar } from '../landing/Navbar';
import { Footer } from '../landing/Footer';
import { SDS_Button } from '../design-system/SDS_Buttons';
import { SDS_Input, SDS_TextArea } from '../design-system/SDS_Inputs';
import { SDS_Card } from '../design-system/SDS_Cards';
import { Zap, ShoppingBag, ArrowRight, Mail } from 'lucide-react';

export const DesignSystemPage = () => {
  return (
    <div className="min-h-screen bg-st-black text-white font-ui selection:bg-st-magenta selection:text-white">
      <Navbar />
      
      <main className="container mx-auto px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-display font-bold mb-4">Design System <span className="text-st-cyan">v3.0</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Atomic components and tokens for the STAYArta ecosystem. 
            Audited for accessibility, consistency, and the "Tokyo Futuristic" aesthetic.
          </p>
        </div>

        {/* --- COLORS --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono text-st-cyan mb-8 border-b border-white/10 pb-2">01. Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorCard name="st-cyan" hex="#00FFFF" className="bg-st-cyan text-black" />
            <ColorCard name="st-magenta" hex="#FF00FF" className="bg-st-magenta text-white" />
            <ColorCard name="st-orange" hex="#EC5228" className="bg-st-orange text-white" />
            <ColorCard name="st-yellow" hex="#FDBE34" className="bg-st-yellow text-black" />
            <ColorCard name="st-black" hex="#050505" className="bg-st-black border border-white/20 text-white" />
            <ColorCard name="st-dark" hex="#111111" className="bg-st-dark border border-white/20 text-white" />
          </div>
        </section>

        {/* --- TYPOGRAPHY --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono text-st-cyan mb-8 border-b border-white/10 pb-2">02. Typography</h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 font-mono mb-2">Display (DM Serif Display)</p>
              <h1 className="text-6xl font-display">Tokyo Futurista</h1>
              <h2 className="text-4xl font-display text-gray-400">Technology that feels human.</h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-mono mb-2">UI (Inter)</p>
              <p className="text-lg">The quick brown fox jumps over the lazy dog. Smart automation for the modern era.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-mono mb-2">Monospace (JetBrains Mono)</p>
              <p className="font-mono text-st-cyan">console.log("System Online");</p>
            </div>
          </div>
        </section>

        {/* --- BUTTONS --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono text-st-cyan mb-8 border-b border-white/10 pb-2">03. Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <SDS_Button variant="primary">Primary Action</SDS_Button>
            <SDS_Button variant="secondary">Secondary</SDS_Button>
            <SDS_Button variant="outline">Outline</SDS_Button>
            <SDS_Button variant="ghost">Ghost</SDS_Button>
            <SDS_Button variant="destructive">Destructive</SDS_Button>
            <SDS_Button variant="cyber" rightIcon={<Zap size={14} />}>CYBER_INIT</SDS_Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <SDS_Button size="sm" variant="primary">Small</SDS_Button>
            <SDS_Button size="md" variant="primary">Medium</SDS_Button>
            <SDS_Button size="lg" variant="primary">Large</SDS_Button>
            <SDS_Button size="icon" variant="secondary"><ShoppingBag size={18} /></SDS_Button>
            <SDS_Button isLoading variant="primary">Loading</SDS_Button>
          </div>
        </section>

        {/* --- INPUTS --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono text-st-cyan mb-8 border-b border-white/10 pb-2">04. Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
             <SDS_Input label="Email Address" placeholder="name@company.com" icon={<Mail size={16} />} />
             <SDS_Input label="Full Name" placeholder="John Doe" />
             <SDS_Input label="Error State" placeholder="Invalid input" error="This field is required" />
             <SDS_Input label="Disabled" placeholder="Cannot type here" disabled />
             <div className="md:col-span-2">
                <SDS_TextArea label="Message" placeholder="Tell us about your project..." />
             </div>
          </div>
        </section>

        {/* --- CARDS --- */}
        <section className="mb-20">
          <h2 className="text-2xl font-mono text-st-cyan mb-8 border-b border-white/10 pb-2">05. Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SDS_Card variant="glass">
              <h3 className="text-xl font-bold mb-2">Glass Card</h3>
              <p className="text-gray-400 text-sm">Standard container for content overlaying rich backgrounds.</p>
            </SDS_Card>
            <SDS_Card variant="neon">
              <h3 className="text-xl font-bold mb-2 text-st-cyan">Neon Card</h3>
              <p className="text-gray-400 text-sm">High emphasis container for features or pricing.</p>
            </SDS_Card>
            <SDS_Card variant="outline">
              <h3 className="text-xl font-bold mb-2">Outline Card</h3>
              <p className="text-gray-400 text-sm">Secondary content or technical details.</p>
            </SDS_Card>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

const ColorCard = ({ name, hex, className }: { name: string, hex: string, className: string }) => (
  <div className={`p-4 rounded-xl flex flex-col justify-between h-32 ${className}`}>
    <span className="font-bold">{name}</span>
    <span className="font-mono text-sm opacity-80">{hex}</span>
  </div>
);
