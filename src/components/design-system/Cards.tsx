import React from 'react';
import { cn } from '../../lib/utils';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const ProductCard = ({ title, price, image, className }: { title: string, price: string, image: string, className?: string }) => (
  <div className={cn("group relative bg-st-bonewhite border-4 border-st-darkblue overflow-hidden hover:shadow-[8px_8px_0px_#273F4F] transition-all duration-300", className)}>
    <div className="aspect-[4/5] w-full relative border-b-4 border-st-darkblue">
      <ImageWithFallback src={image} alt={title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
      <div className="absolute top-2 right-2 bg-st-yellow border-2 border-st-darkblue px-2 py-1 font-bold font-ui text-st-darkblue transform rotate-3 group-hover:rotate-12 transition-transform">
        NEW
      </div>
    </div>
    <div className="p-4 flex justify-between items-end">
      <div>
        <h3 className="font-display text-2xl leading-none mb-1 text-st-darkblue">{title}</h3>
        <p className="font-ui text-sm text-st-darkblue/70">Edition 01</p>
      </div>
      <span className="font-bold font-ui text-xl bg-st-orange text-white px-3 py-1 rounded-full">
        {price}
      </span>
    </div>
  </div>
);

export const ServiceCard = ({ title, icon, description, className }: { title: string, icon: React.ReactNode, description: string, className?: string }) => (
  <div className={cn("relative p-6 rounded-3xl bg-st-darkblue/90 border border-st-turquoise/30 backdrop-blur-sm overflow-hidden group hover:border-st-turquoise transition-all duration-500", className)}>
    <div className="absolute inset-0 bg-gradient-to-br from-st-turquoise/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-st-turquoise to-st-darkblue mb-4 flex items-center justify-center text-white shadow-[0_0_15px_rgba(87,180,186,0.5)] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-display text-2xl text-st-bonewhite mb-2 group-hover:text-st-turquoise transition-colors">{title}</h3>
      <p className="font-ui text-st-bonewhite/60 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const MiniAppCard = ({ title, status, children }: { title: string, status: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-[2rem] p-1 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
    <div className="bg-st-bonewhite/50 rounded-[1.8rem] p-5 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className="font-ui font-bold text-sm text-st-darkblue uppercase tracking-wider">{title}</span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium text-gray-500">{status}</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        {children}
      </div>
    </div>
  </div>
);

export const EditorialBlock = ({ image, title, subtitle, reverse = false }: { image: string, title: string, subtitle: string, reverse?: boolean }) => (
  <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-st-darkblue bg-st-yellow", reverse ? "direction-rtl" : "")}>
    <div className={cn("relative aspect-square md:aspect-auto border-b-4 md:border-b-0 md:border-r-4 border-st-darkblue", reverse ? "md:order-2 md:border-l-4 md:border-r-0" : "")}>
      <ImageWithFallback src={image} alt={title} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-st-orange mix-blend-multiply opacity-20 hover:opacity-0 transition-opacity duration-500" />
    </div>
    <div className={cn("p-8 md:p-12 flex flex-col justify-center bg-st-yellow", reverse ? "md:order-1" : "")}>
      <h2 className="font-display text-5xl md:text-7xl text-st-darkblue mb-6 leading-[0.9]">{title}</h2>
      <p className="font-ui text-lg md:text-xl font-bold text-st-darkblue border-l-4 border-st-darkblue pl-6">
        {subtitle}
      </p>
    </div>
  </div>
);
