import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigation } from '@/contexts/NavigationContext';
import { cn } from '@/lib/utils';

export const GlobalHeader: React.FC = () => {
  const { activeSite, navigation, getIcon } = useNavigation();
  const primaryNavItems = navigation.sub_header;

  return (
    <div className="bg-[#050712] text-white shadow-[0_10px_40px_rgba(5,7,18,0.45)]">
      <div className="border-b border-white/10">
        <div className="container mx-auto flex flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {activeSite.logo_url ? (
              <img
                src={activeSite.logo_url}
                alt="STAYArta"
                className="h-8 w-auto md:h-10"
                loading="lazy"
              />
            ) : (
              <span className="text-lg font-semibold tracking-[0.3em]">STAYARTA</span>
            )}
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/60">Nova Brain</p>
              <p className="text-base font-semibold text-white">IA, automatización y bots</p>
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            {activeSite.tagline ?? 'Ecosistema retro pop + IA'}
          </p>
        </div>
      </div>

      {primaryNavItems.length > 0 && (
        <div className="border-b border-white/5 bg-[#080b1c]">
          <div className="container mx-auto flex flex-wrap gap-2 px-4 py-3 text-[0.85rem]">
            {primaryNavItems.map((item) => {
              const Icon = getIcon(item.icon_name);
              const isExternalLink = item.type === 'external' || item.url.startsWith('http');
              const Wrapper = isExternalLink ? 'a' : Link;
              const wrapperProps = isExternalLink
                ? { href: item.url, target: '_blank', rel: 'noreferrer' }
                : { to: item.url };

              return (
                <Wrapper
                  key={item.id}
                  {...wrapperProps}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-semibold transition',
                    'border-white/10 bg-white/5 text-white/80 hover:border-white/40 hover:text-white'
                  )}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" />}
                  {item.label}
                </Wrapper>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
