import React from 'react';

export const LoadingSpinner = () => (
  <div className="h-screen w-full flex justify-center items-center bg-st-bonewhite">
    <div className="flex flex-col items-center gap-4">
       <div className="w-12 h-12 border-4 border-st-darkblue border-t-st-orange rounded-full animate-spin"></div>
       <p className="font-mono text-st-darkblue text-sm animate-pulse">LOADING STAYArta...</p>
    </div>
  </div>
);
