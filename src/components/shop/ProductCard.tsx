import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { DesignButton } from '../design-system/Buttons';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating?: number;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

export const ProductCard = ({ product, onAddToCart, onToggleFavorite, isFavorite }: ProductCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-st-darkblue/10 hover:border-st-orange/50 hover:shadow-lg transition-all duration-300"
    >
      {/* Badge */}
      {product.isNew && (
        <div className="absolute top-3 left-3 z-10 bg-st-orange text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          New
        </div>
      )}

      {/* Favorite Button */}
      <button 
        onClick={() => onToggleFavorite?.(product.id)}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-st-darkblue hover:text-red-500 transition-colors"
      >
        <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
      </button>

      {/* Image */}
      <div className="aspect-square relative bg-st-bonewhite/50 overflow-hidden">
        <ImageWithFallback 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick Add Overlay (Desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
           <DesignButton 
             variant="solid" 
             className="w-full justify-center shadow-xl"
             onClick={() => onAddToCart?.(product.id)}
           >
             <ShoppingCart size={18} className="mr-2" />
             Añadir
           </DesignButton>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <p className="text-xs text-st-darkblue/60 font-mono uppercase">{product.category}</p>
          {product.rating && (
            <div className="flex items-center text-xs font-bold text-st-darkblue">
              <Star size={12} className="fill-st-orange text-st-orange mr-1" />
              {product.rating}
            </div>
          )}
        </div>
        <h3 className="font-bold text-st-darkblue text-lg mb-2 leading-tight group-hover:text-st-orange transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold font-mono text-st-darkblue">
            ${product.price.toFixed(2)}
          </span>
          {/* Mobile Add Button */}
          <button 
            className="md:hidden bg-st-darkblue text-white p-2 rounded-lg"
            onClick={() => onAddToCart?.(product.id)}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
