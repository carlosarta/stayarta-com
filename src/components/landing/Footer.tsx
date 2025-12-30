import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { NavigationItem } from '../../types/navigation';

export const Footer = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  const navigate = useNavigate();
  const { navigation, sites, isLoading } = useNavigation();

  const handleNav = (e: React.MouseEvent, item: NavigationItem) => {
    e.preventDefault();
    if (item.type === 'external') {
      window.open(item.url, '_blank');
      return;
    }
    
    if (onNavigate) {
      onNavigate(item.url);
    } else {
      navigate(item.url);
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
      return <footer className="bg-st-black text-st-bonewhite py-20 border-t-8 border-st-orange" />;
  }

  return (
    <footer className="bg-st-black text-st-bonewhite pt-20 pb-10 border-t-8 border-st-orange relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-st-orange/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 text-sm relative z-10">
        
        {/* Brand Block */}
        <div className="col-span-2 md:col-span-1 lg:col-span-1">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="font-display text-4xl mb-6 text-white tracking-tight">STAYArta</h2>
              <p className="font-ui text-st-bonewhite/60 mb-6 leading-relaxed text-base max-w-xs">
                Retro-futurismo y automatización inteligente. Creamos tecnología que se siente humana.
              </p>
            </div>
            
            <div className="flex gap-3 mt-4">
               {[
                 { icon: Instagram, url: 'https://instagram.com' },
                 { icon: Twitter, url: 'https://twitter.com' },
                 { icon: Linkedin, url: 'https://linkedin.com' }
               ].map((social, idx) => (
                 <a 
                   key={idx}
                   href={social.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 bg-st-darkblue/50 border border-st-darkblue rounded-full flex items-center justify-center hover:bg-st-orange hover:border-st-orange hover:text-white transition-all duration-300 group"
                 >
                   <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                 </a>
               ))}
            </div>
          </div>
        </div>

        {/* Dynamic Columns from Context */}
        {navigation.footer_columns.map((column, idx) => (
          <div key={idx}>
            <h4 className="font-ui font-bold text-st-yellow mb-6 uppercase tracking-widest text-xs">
              {column.title}
            </h4>
            <ul className="space-y-4 font-ui text-st-bonewhite/70">
              {column.items.map((item) => (
                <li 
                  key={item.id}
                  className="flex items-center gap-2 hover:text-st-turquoise cursor-pointer transition-colors group" 
                  onClick={(e) => handleNav(e, item)}
                >
                  <span>{item.label}</span>
                  {item.type === 'external' && (
                    <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-3 text-xs text-st-bonewhite/40 font-mono">
        <p className="text-center">© 2025 STAYArta · CARLOS ARTA LLC. All rights reserved.</p>
        <p className="text-center">CARLOS ARTA LLC · 4320 SW 57TH AVE, MIAMI, FL 33155-5328, US · hola@stayarta.com · +34 662 652 300</p>
      </div>
    </footer>
  );
};
