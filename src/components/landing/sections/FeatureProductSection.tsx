import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DesignButton } from '../../design-system/Buttons';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { routes } from '../../../config/routes';

export const FeatureProductSection = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  return (
    <section className="bg-st-darkblue py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diag-diamonds-light.png')] opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <div className="bg-st-turquoise/10 p-1 rounded-3xl border border-st-turquoise/30">
                    <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1611087889903-b4837b46857c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjByZXRybyUyMGdhZGdldCUyMGRlY2t8ZW58MXx8fHwxNzY0MDUwOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Cyber Deck 2099"
                        className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
            <div className="order-1 lg:order-2 text-st-bonewhite">
                <span className="inline-block px-3 py-1 bg-st-turquoise/20 text-st-turquoise border border-st-turquoise rounded-full text-xs font-mono mb-6">
                    PRODUCTO DESTACADO
                </span>
                <h2 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
                    Cyber Deck <br />
                    <span className="text-st-orange">2099</span>
                </h2>
                <p className="font-ui text-xl text-st-bonewhite/70 mb-8 max-w-lg leading-relaxed">
                    El computador personal re-imaginado para la era post-digital. 
                    Diseño modular, interfaces hápticas y potencia de procesamiento neural.
                </p>
                <DesignButton 
                    variant="glow" 
                    size="lg" 
                    onClick={() => onNavigate && onNavigate(routes.shop.root)}
                >
                    Ver Catálogo <ArrowRight className="ml-2" size={18} />
                </DesignButton>
            </div>
        </div>
      </div>
    </section>
  );
};
