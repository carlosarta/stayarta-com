import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'outline' | 'neon';
}

export const SDS_Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', children, ...props }, ref) => {
    const variants = {
      glass: "bg-white/5 backdrop-blur-md border border-white/10",
      solid: "bg-st-dark border border-white/5",
      outline: "bg-transparent border border-white/20 border-dashed",
      neon: "bg-st-black border border-st-cyan/50 shadow-[0_0_15px_rgba(0,255,255,0.1)]"
    };

    return (
      <div
        ref={ref}
        className={cn("rounded-xl p-6", variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SDS_Card.displayName = "SDS_Card";
