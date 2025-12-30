import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, FlaskConical, Cpu } from 'lucide-react';
import { useNavigation } from '@/contexts/NavigationContext';
import { cn } from '@/lib/utils';

const PRELOADERS = {
  main: {
    icon: Sparkles,
    label: 'Cargando experiencia STAYArta',
    gradient: 'from-[#FF4D00] via-[#ff8e3c] to-[#ffe29a]',
    backdrop: 'bg-[#1a2333]',
  },
  shop: {
    icon: FlaskConical,
    label: 'Activando STAYShop · dropshipping retro',
    gradient: 'from-[#d946ef] via-[#7c3aed] to-[#38bdf8]',
    backdrop: 'bg-[#050505]',
  },
  tech: {
    icon: Cpu,
    label: 'Sincronizando Tech Marketplace',
    gradient: 'from-[#0ea5e9] via-[#22d3ee] to-[#4ade80]',
    backdrop: 'bg-[#020617]',
  },
  default: {
    icon: Sparkles,
    label: 'Preparando ecosistema STAYArta',
    gradient: 'from-[#f97316] via-[#fb7185] to-[#c084fc]',
    backdrop: 'bg-[#0f172a]',
  },
} as const;

export const SitePreloader: React.FC<{ helperText?: string }> = ({ helperText }) => {
  const { activeSite } = useNavigation();
  const variant = PRELOADERS[activeSite.id as keyof typeof PRELOADERS] ?? PRELOADERS.default;
  const Icon = variant.icon;

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-3xl border border-white/10 px-6 py-8 text-white shadow-[0_25px_60px_rgba(0,0,0,0.35)]',
        variant.backdrop
      )}
    >
      <motion.div
        className={cn('absolute inset-0 opacity-80 blur-3xl', `bg-gradient-to-br ${variant.gradient}`)}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      />
      <div className="relative flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/10">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Live Loader</p>
            <p className="text-lg font-semibold">{variant.label}</p>
          </div>
        </div>
        <motion.div
          className="flex w-full max-w-sm overflow-hidden rounded-full border border-white/30 bg-white/5"
          initial={{ scaleX: 0.9 }}
          animate={{ scaleX: 1 }}
        >
          <motion.div
            className="h-2 rounded-full bg-white"
            animate={{ width: ['10%', '95%', '40%', '100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
        <p className="text-sm text-white/70">
          {helperText ?? 'Sincronizando datos de Supabase, IA Nova y catálogos conectados.'}
        </p>
      </div>
    </div>
  );
};
