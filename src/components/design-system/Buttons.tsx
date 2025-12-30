import React from 'react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

interface DesignButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'glow' | 'gel' | 'brutalist' | 'retro-outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const DesignButton = ({ 
  variant = 'glow', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: DesignButtonProps) => {
  
  const baseStyles = "transition-all duration-300 font-ui font-bold flex items-center justify-center";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    glow: "rounded-full bg-gradient-to-r from-st-yellow to-st-orange text-white shadow-[0_0_20px_rgba(236,82,40,0.5)] hover:shadow-[0_0_30px_rgba(236,82,40,0.8)] hover:scale-105 border-none",
    gel: "rounded-xl bg-st-turquoise text-st-darkblue shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:brightness-110 active:scale-95",
    brutalist: "rounded-none bg-st-black text-st-yellow border-2 border-st-yellow hover:bg-st-yellow hover:text-st-black uppercase tracking-wider shadow-[4px_4px_0px_#FDBE34] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#FDBE34] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
    'retro-outline': "rounded-md bg-transparent border-4 border-st-darkblue text-st-darkblue hover:bg-st-darkblue hover:text-white font-black tracking-tight",
  };

  return (
    <button 
      className={cn(baseStyles, sizeStyles[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
