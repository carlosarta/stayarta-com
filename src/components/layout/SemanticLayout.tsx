import React from 'react';
import { cn } from '../../lib/utils';

interface SemanticLayoutProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
  id?: string;
  ['aria-labelledby']?: string;
}

export const Main: React.FC<SemanticLayoutProps> = ({ 
  children, 
  className,
  role = "main",
  id = "main-content",
  ...props
}) => {
  return (
    <main 
      id={id}
      role={role}
      className={cn("min-h-screen", className)}
      tabIndex={-1}
      {...props}
    >
      {children}
    </main>
  );
};

export const Section: React.FC<SemanticLayoutProps> = ({ 
  children, 
  className,
  role = "region",
  ...props
}) => {
  return (
    <section 
      role={role}
      className={cn("py-12 md:py-20", className)}
      {...props}
    >
      {children}
    </section>
  );
};

export const Article: React.FC<SemanticLayoutProps> = ({ 
  children, 
  className,
  ...props
}) => {
  return (
    <article className={cn("prose max-w-none", className)} {...props}>
      {children}
    </article>
  );
};

export const SkipLink: React.FC = () => {
  return (
    <a 
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-st-orange text-white px-4 py-2 rounded-lg z-50 shadow-lg font-bold"
    >
      Saltar al contenido principal
    </a>
  );
};