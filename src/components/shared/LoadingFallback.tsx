import React from 'react';

export const LoadingFallback: React.FC<{ message?: string }> = ({ 
  message = "Cargando experiencia STAYArta..." 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-st-bonewhite">
      <div className="text-center">
        {/* Logo animado */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-st-turquoise/30 border-t-st-turquoise rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-st-orange rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <p className="text-st-darkblue/60 font-semibold">{message}</p>
        
        {/* Progress bar sutil */}
        <div className="w-48 h-1 bg-st-darkblue/10 rounded-full overflow-hidden mt-4 mx-auto">
          <div className="h-full bg-gradient-to-r from-st-orange to-st-turquoise animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};