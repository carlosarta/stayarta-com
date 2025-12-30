import React from "react";
import { ArrowRight, Rocket } from "lucide-react";
import { DesignButton } from "../../design-system/Buttons";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { routes } from "../../../config/routes";
import heroImage from "@/assets/7e6ecd5c886ac34f21d38d64853b35c630949441.png";

export const HeroSection = ({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
}) => (
  <section className="relative min-h-[90vh] flex flex-col md:flex-row overflow-hidden bg-st-bonewhite">
    <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center relative z-10">
      <div className="inline-block px-4 py-2 bg-st-yellow border-2 border-st-darkblue rounded-full text-st-darkblue font-bold font-ui text-sm w-max mb-8 transform -rotate-2">
        NUEVA COLECCIÓN v2.0
      </div>
      <h1 className="font-display text-6xl md:text-8xl text-st-darkblue leading-[0.9] mb-8">
        Hazle un <br />
        <span className="text-st-orange italic">
          level UP
        </span>{" "}
        <br />a tu negocio.
      </h1>
      <div className="flex items-center gap-3 font-ui text-xl text-st-darkblue/70 mb-12 max-w-md">
        <Rocket className="text-st-orange shrink-0" size={24} />
        <p>
          La arquitectura digital con IA que esperabas para
          despegar.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <DesignButton
          variant="glow"
          size="lg"
          onClick={() =>
            onNavigate && onNavigate(routes.shop.root)
          }
        >
          Ver Colección
        </DesignButton>
        <DesignButton
          variant="retro-outline"
          size="lg"
          onClick={() =>
            onNavigate && onNavigate(routes.nova.root)
          }
        >
          Explorar IA
        </DesignButton>
      </div>
    </div>
    <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto bg-st-darkblue overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diag-diamonds-light.png')] opacity-10"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-st-turquoise to-st-darkblue rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>
      <ImageWithFallback
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
      />
    </div>
  </section>
);