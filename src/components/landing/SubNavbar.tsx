import React from 'react';
import { useNavigation } from '../../contexts/NavigationContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const SubNavbar = () => {
  const { navigation, activeSite, getIcon } = useNavigation();
  const navigate = useNavigate();

  // If no sub-items for this site, don't render anything
  if (navigation.sub_header.length === 0) return null;

  const isShop = activeSite.id === 'shop';

  return (
    <div 
      className="w-full border-b backdrop-blur-sm z-40 relative transition-colors duration-500"
      style={{ 
        backgroundColor: isShop ? 'rgba(5, 5, 5, 0.95)' : activeSite.theme.background,
        borderColor: isShop ? 'rgba(255, 0, 255, 0.2)' : 'rgba(0,0,0,0.05)',
        color: activeSite.theme.text
      }}
    >
      <div className="container mx-auto px-6 h-12 flex items-center justify-center overflow-x-auto no-scrollbar">
        <AnimatePresence mode='wait'>
            <motion.div 
                key={activeSite.id}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="flex items-center gap-8"
            >
                {navigation.sub_header.map((item) => {
                    const Icon = getIcon(item.icon_name);
                    const isSeparator = item.label === '|';

                    if (isSeparator) {
                        return <div key={item.id} className="w-[1px] h-4 bg-white/20 mx-2" />;
                    }

                    return (
                        <div
                            key={item.id}
                            onClick={() => navigate(item.url)}
                            className={`
                                flex items-center gap-2 text-sm font-medium cursor-pointer transition-all hover:scale-105 whitespace-nowrap
                                ${isShop ? 'font-mono uppercase tracking-wider' : 'font-ui'}
                            `}
                            style={{ 
                                color: item.meta?.color_highlight || (isShop ? 'rgba(255,255,255,0.7)' : 'inherit'),
                                textShadow: isShop && item.meta?.color_highlight ? `0 0 10px ${item.meta.color_highlight}` : 'none'
                            }}
                        >
                            {Icon && <Icon size={14} />}
                            {item.label}
                            {item.meta?.badge && (
                                <span className="ml-1 text-[9px] bg-[#FF00FF] text-white px-1 py-0.5 rounded animate-pulse shadow-[0_0_10px_#FF00FF]">
                                    {item.meta.badge}
                                </span>
                            )}
                        </div>
                    );
                })}
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
