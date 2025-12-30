import React from 'react';
import { motion } from 'motion/react';
import { SHOP_LANDING_CONTENT } from '../../data/shop-landing';

export const ManekiNekoLoader = () => {
  // Configuración de colores Tokyo
  const colors = {
    neonCyan: '#00FFFF',
    neonMagenta: '#FF00FF',
    white: '#FFFFFF',
    bg: '#050505',
  };

  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* 1. BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)] z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

      {/* 2. THE REALISTIC NEON NEKO */}
      <div className="relative z-10 w-80 h-80 flex items-center justify-center">
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-cyan-500/10 blur-[50px] rounded-full animate-pulse" />

        <svg viewBox="0 0 300 350" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">
            <defs>
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* --- BODY SILHOUETTE (Curved & Organic) --- */}
            {/* Outline of the whole cat body */}
            <path 
                d="M80 320 
                   C 50 320, 40 280, 50 220 
                   C 45 180, 55 140, 75 120 
                   C 60 80, 70 50, 90 40 
                   L 110 60 
                   Q 150 40, 190 60 
                   L 210 40 
                   C 230 50, 240 80, 225 120 
                   C 245 140, 255 180, 250 220 
                   C 260 280, 250 320, 220 320 
                   Z"
                fill="none"
                stroke={colors.neonCyan}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#neon-glow)"
            />

            {/* --- FACE DETAILS --- */}
            {/* Eyes (Closed happy eyes) */}
            <path d="M100 130 Q 115 115, 130 130" stroke={colors.neonCyan} strokeWidth="3" fill="none" />
            <path d="M170 130 Q 185 115, 200 130" stroke={colors.neonCyan} strokeWidth="3" fill="none" />
            
            {/* Nose & Mouth */}
            <path d="M145 145 L155 145 L150 150 Z" fill={colors.neonMagenta} />
            <path d="M150 150 L150 160 Q 130 170, 120 160" stroke={colors.neonCyan} strokeWidth="2" fill="none" />
            <path d="M150 160 Q 170 170, 180 160" stroke={colors.neonCyan} strokeWidth="2" fill="none" />

            {/* Whiskers */}
            <path d="M80 140 L 50 135" stroke={colors.neonCyan} strokeWidth="2" opacity="0.6" />
            <path d="M80 150 L 50 150" stroke={colors.neonCyan} strokeWidth="2" opacity="0.6" />
            <path d="M220 140 L 250 135" stroke={colors.neonCyan} strokeWidth="2" opacity="0.6" />
            <path d="M220 150 L 250 150" stroke={colors.neonCyan} strokeWidth="2" opacity="0.6" />

            {/* --- COLLAR & BELL --- */}
            <path d="M90 180 Q 150 210, 210 180" stroke={colors.neonMagenta} strokeWidth="4" fill="none" />
            <circle cx="150" cy="195" r="12" fill="#050505" stroke={colors.neonMagenta} strokeWidth="2" />
            <circle cx="150" cy="195" r="4" fill={colors.neonMagenta} />

            {/* --- LEFT PAW (Holding Arepa) --- */}
            {/* Paw Shape */}
            <path d="M60 220 Q 50 250, 80 260 L 100 260" stroke={colors.neonCyan} strokeWidth="3" fill="none" />
            
            {/* THE AREPA (White & Crisp) */}
            <g transform="translate(65, 225)">
                <motion.circle 
                    cx="30" cy="30" r="28" 
                    fill="#FFFFFF" 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                    className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
                {/* Grill Marks (Subtle gray) */}
                <path d="M20 20 L 28 28" stroke="#DDD" strokeWidth="2" strokeLinecap="round" />
                <path d="M40 20 L 32 28" stroke="#DDD" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 40 L 30 32" stroke="#DDD" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* --- RIGHT PAW (Waving) --- */}
            <motion.g
                style={{ originX: "210px", originY: "180px" }}
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                {/* Arm Curve */}
                <path 
                    d="M210 180 Q 220 140, 240 140 Q 260 140, 260 160 L 260 200" 
                    stroke={colors.neonCyan} 
                    strokeWidth="3" 
                    fill="none" 
                    filter="url(#neon-glow)"
                />
                {/* Paw Pads */}
                <path d="M245 150 Q 250 145, 255 150" stroke={colors.neonMagenta} strokeWidth="2" fill="none"/>
                <circle cx="250" cy="160" r="6" fill={colors.neonMagenta} />
            </motion.g>

            {/* Kanji / Symbol on Belly (Optional - 'Fuku' aka Luck) */}
            <text x="150" y="280" textAnchor="middle" fill={colors.neonCyan} fontSize="40" fontFamily="serif" opacity="0.5">福</text>
        </svg>
      </div>

      {/* 3. BRANDING TEXT */}
      <div className="relative z-10 mt-8 text-center">
        <h2 className="text-5xl font-display font-black italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            STAY<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#FF00FF]">Arta</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
             <span className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse" />
             <span className="text-[#00FFFF] font-mono text-sm tracking-[0.3em]">SYSTEM LOADING</span>
             <span className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export const TokyoLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Show loader for 2 seconds on mount
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <ManekiNekoLoader />}
      
      <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF00FF] selection:text-white">
        {/* GRID BACKGROUND OVERLAY */}
        <div 
            className="fixed inset-0 pointer-events-none z-0 opacity-20"
            style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
        />
        
        {/* CONTENT */}
        <div className="relative z-10">
            {children}
        </div>
      </div>
    </>
  );
};
