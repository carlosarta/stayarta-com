import React, { useState, useRef } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DesignButton } from '../design-system/Buttons';
import { StayArtaLogo } from '../design-system/StayArtaLogo';
import { routes } from '../../config/routes';
import { motion, AnimatePresence } from 'motion/react';
import { Input } from '../ui/input';
import { useNavigation } from '../../contexts/NavigationContext';
import { NavigationItem } from '../../types/navigation';
import { SubNavbar } from './SubNavbar';
import { GlobalHeader } from '../layout/GlobalHeader';

export const Navbar = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  const navigate = useNavigate();
  const { navigation, getIcon, isLoading, activeSite } = useNavigation(); // Added activeSite
  
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleNav = (e: React.MouseEvent, item: NavigationItem) => {
    e.preventDefault();
    if (item.type === 'external') {
      window.open(item.url, '_blank');
    } else {
      if (onNavigate) {
        onNavigate(item.url);
      } else {
        navigate(item.url);
      }
    }
    setIsMobileOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const targetUrl = `${routes.shop.root}?q=${encodeURIComponent(searchQuery)}`;
    if (onNavigate) {
      onNavigate(targetUrl);
    } else {
      navigate(targetUrl);
    }
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  if (isLoading) {
    return (
      <div className="sticky top-0 z-50">
        <GlobalHeader />
        <div className="h-20 bg-st-bonewhite border-b-2 border-st-darkblue" />
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 transition-all duration-300">
      <GlobalHeader />
      <nav className="bg-st-bonewhite/90 backdrop-blur-md border-b-2 border-st-darkblue relative z-40">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center relative">
        
        {/* 1. LOGO */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
          {activeSite?.logo_url ? (
             <img 
               src={activeSite.logo_url} 
               alt={activeSite.name} 
               className="h-10 w-auto object-contain transition-all hover:scale-105"
             />
          ) : (
            <>
              <div className="hidden md:block">
                <StayArtaLogo variant="full" className="h-8 w-auto" />
              </div>
              <div className="md:hidden">
                <StayArtaLogo variant="favicon" className="h-10 w-10 rounded-lg shadow-sm" />
              </div>
            </>
          )}
        </div>

        {/* 2. MAIN NAVIGATION (Desktop) */}
        {/* Hidden when search is full width in some designs, but here we overlay search */}
        <div className={`hidden md:flex gap-8 font-ui font-medium text-st-darkblue items-center transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {navigation.header_main.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleNav(e, item)}
              className="relative group py-2 hover:text-st-orange transition-colors"
            >
              {item.label}
              {item.meta?.is_new && (
                <span className="absolute -top-1 -right-2 w-2 h-2 bg-st-orange rounded-full" />
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-st-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Search Overlay (Desktop) */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%' }}
              exit={{ opacity: 0, scale: 0.95, x: '-50%' }}
              className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-[400px]"
            >
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-st-orange" size={20} />
                <Input
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar en todo el ecosistema..."
                  className="pl-10 pr-10 bg-white border-2 border-st-orange shadow-lg h-10 rounded-full text-base"
                />
                <button 
                  type="button" 
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-st-darkblue/50 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. ACTIONS (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
           {/* Search Trigger */}
           <button 
             onClick={toggleSearch}
             className={`p-2 text-st-darkblue hover:text-st-orange transition-colors ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}
             title="Buscar"
           >
             <Search size={22} strokeWidth={2} />
           </button>

          {navigation.header_actions.map((item) => {
            const Icon = getIcon(item.icon_name);
            return (
              <React.Fragment key={item.id}>
                {item.variant === 'icon' && Icon && (
                  <div 
                    className="relative group cursor-pointer text-st-darkblue hover:text-st-orange transition-colors"
                    onClick={(e) => handleNav(e, item)}
                    title={item.label}
                  >
                    <Icon size={22} strokeWidth={2} />
                    {/* Badge Simulation */}
                    {item.meta?.badge && (
                       <span className="absolute -top-2 -right-2 bg-st-orange text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
                    )}
                  </div>
                )}
                {item.variant === 'button' && (
                  <DesignButton 
                    variant="retro-outline" 
                    size="sm" 
                    onClick={(e) => handleNav(e, item)}
                    className="flex items-center gap-2"
                  >
                    {Icon && <Icon size={16} />}
                    {item.label}
                  </DesignButton>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           {/* Mobile Search Trigger */}
           <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-st-darkblue">
             <Search size={24} />
           </button>

          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-st-darkblue p-2">
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (Slide down) */}
      <AnimatePresence>
        {isSearchOpen && (
           <motion.div
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: 'auto', opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="md:hidden bg-st-bonewhite border-t border-st-darkblue/10 overflow-hidden px-6 pb-4"
           >
              <form onSubmit={handleSearchSubmit} className="relative mt-2">
                 <Input
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="Buscar..."
                   autoFocus
                   className="pl-4 pr-10 bg-white border-st-orange"
                 />
                 <button 
                   type="submit" 
                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-st-orange text-white rounded-full"
                 >
                   <Search size={14} />
                 </button>
              </form>
           </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-st-bonewhite border-t-2 border-st-darkblue overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-2 font-ui font-medium text-lg">
              {navigation.header_main.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={(e) => handleNav(e, item)}
                  className="py-4 border-b border-st-darkblue/10 hover:text-st-orange flex items-center justify-between group"
                >
                  {item.label}
                  {item.type === 'external' && <span className="text-xs bg-st-darkblue/10 px-2 py-0.5 rounded text-st-darkblue group-hover:bg-st-orange group-hover:text-white transition-colors">Ext</span>}
                </a>
              ))}
              <div className="border-t-2 border-st-darkblue/10 my-4 pt-6 flex flex-col gap-6">
                 {navigation.header_actions.map((item) => {
                   const Icon = getIcon(item.icon_name);
                   return (
                     <div 
                       key={item.id} 
                       className="flex items-center gap-4 cursor-pointer hover:text-st-orange p-2 -ml-2 rounded-lg active:bg-st-darkblue/5"
                       onClick={(e) => handleNav(e, item)}
                     >
                       {Icon && <Icon size={24} />}
                       <span className="text-xl">{item.label}</span>
                     </div>
                   );
                 })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
      <SubNavbar />
    </div>
  );
};
