import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import stayartaLogo from '@/assets/stayarta-logo.svg';

interface LogoProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  variant?: 'favicon' | 'full';
}

const WORDS = ["Arta", "Retro", "Iconic", "Ahead", "Sharp", "Nova"];

export const StayArtaLogo = ({ className, variant = 'favicon', ...props }: LogoProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (variant !== 'full') return;
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [variant]);

  if (variant === 'full') {
    return (
      <div 
        className={cn("flex flex-col relative", className)}
        {...props as React.HTMLAttributes<HTMLDivElement>}
      >
        <div className="flex items-baseline gap-1">
          <span className="font-display text-[2.5rem] leading-none text-st-darkblue">
            STAY
          </span>
          <div className="relative h-[2.5rem] min-w-[120px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-display text-[2.5rem] leading-none text-st-orange absolute left-0 top-[-4px]"
              >
                {WORDS[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Turquoise Underline Swosh */}
        <svg 
          viewBox="0 0 350 15" 
          className="w-full absolute -bottom-2 left-0 overflow-visible"
          preserveAspectRatio="none"
        >
          <path 
            d="M2 5 Q 175 12, 348 2" 
            stroke="#57B4BA" 
            strokeWidth="3" 
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  // Favicon / Monogram Variant using the exported logo
  return (
    <div 
      className={cn(
        "relative inline-flex items-center justify-center bg-white rounded-[22%] shadow-sm", 
        className
      )}
      {...props as React.HTMLAttributes<HTMLDivElement>}
    >
       <img 
         src={stayartaLogo} 
         alt="STAYArta Logo" 
         className="w-full h-full object-contain p-[10%]" 
       />
    </div>
  );
};
