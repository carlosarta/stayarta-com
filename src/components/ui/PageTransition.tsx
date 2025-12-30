import { motion } from 'motion/react';
import React from 'react';

export const PageTransition = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.98 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Custom easing for "premium" feel
    className={`w-full h-full ${className || ''}`}
  >
    {children}
  </motion.div>
);
