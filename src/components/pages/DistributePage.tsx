import React from 'react';
import { Navbar, Footer } from '../landing/LandingPage';
import { DesignButton } from '../design-system/Buttons';
import { routes } from '../../config/routes';
import { Truck, Package, Users, Globe, TrendingUp } from 'lucide-react';

export const DistributePage = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  return (
    <div className="min-h-screen bg-st-bonewhite text-st-darkblue font-ui">
      <Navbar onNavigate={onNavigate} />
      
      {/* Hero */}
      <section className="relative py-32 bg-st-yellow border-b-8 border-st-darkblue">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-st-darkblue text-white rounded-full text-sm font-bold mb-6">
            B2B & PARTNERS
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 text-st-darkblue">
            Distribuye el <span className="italic">Futuro</span>
          </h1>
          <p className="text-xl text-st-darkblue/80 max-w-2xl mx-auto mb-10 font-medium">
            Únete al ecosistema STAYArta como mayorista, dropshipper o partner tecnológico.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
             <DesignButton variant="brutalist" size="lg">Aplicar como Partner</DesignButton>
             <DesignButton variant="retro-outline" size="lg" className="border-st-darkblue text-st-darkblue hover:bg-st-darkblue hover:text-white">
                Ver Catálogo
             </DesignButton>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Dropshipping */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-st-darkblue/5 hover:border-st-orange transition-all group">
                 <div className="w-16 h-16 bg-st-orange/10 text-st-orange rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Truck size={32} />
                 </div>
                 <h3 className="font-display text-2xl mb-4">Dropshipping Tech</h3>
                 <p className="text-st-darkblue/70 mb-6">
                   Vende nuestro catálogo sin stock. Nosotros nos encargamos del envío y la logística con tu marca o neutro.
                 </p>
                 <span className="text-sm font-bold underline cursor-pointer" onClick={() => onNavigate(routes.business.dropshipping)}>Saber más</span>
              </div>

              {/* Marca Blanca */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-st-darkblue/5 hover:border-st-turquoise transition-all group">
                 <div className="w-16 h-16 bg-st-turquoise/10 text-st-turquoise rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Package size={32} />
                 </div>
                 <h3 className="font-display text-2xl mb-4">Marca Blanca + IA</h3>
                 <p className="text-st-darkblue/70 mb-6">
                   Personaliza nuestros productos y soluciones tecnológicas con tu propia identidad de marca.
                 </p>
                 <span className="text-sm font-bold underline cursor-pointer" onClick={() => onNavigate(routes.business.whiteLabel)}>Saber más</span>
              </div>

              {/* Alianzas */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-st-darkblue/5 hover:border-st-darkblue transition-all group">
                 <div className="w-16 h-16 bg-st-darkblue/10 text-st-darkblue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users size={32} />
                 </div>
                 <h3 className="font-display text-2xl mb-4">Alianzas B2B</h3>
                 <p className="text-st-darkblue/70 mb-6">
                   Para agencias y consultoras que quieren integrar el ecosistema STAYArta en sus clientes.
                 </p>
                 <span className="text-sm font-bold underline cursor-pointer" onClick={() => onNavigate(routes.business.partners)}>Saber más</span>
              </div>
           </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};
