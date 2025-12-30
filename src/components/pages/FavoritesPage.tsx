import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../landing/Navbar'
import { Footer } from '../landing/Footer'
import { ProductCard, Product } from '../shop/ProductCard'
import { PageTransition } from '../ui/PageTransition'
import { Heart } from 'lucide-react'
import { DesignButton } from '../design-system/Buttons'
import { media } from '@/lib/media'

// MOCK FAVORITES
const FAVORITE_PRODUCTS: Product[] = [
  {
    id: 'prod_2',
    name: 'Retro Headset Wireless',
    price: 89.99,
    category: 'Audio',
    image: media.placeholders.headset,
    rating: 4.5
  },
  {
    id: 'prod_4',
    name: 'Holographic Laptop Sleeve',
    price: 35.50,
    category: 'Accessories',
    image: media.placeholders.sleeve,
    isNew: true,
    rating: 4.9
  }
];

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Product[]>(FAVORITE_PRODUCTS);

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(p => p.id !== id));
  };

  return (
    <PageTransition className="min-h-screen flex flex-col bg-st-bonewhite font-ui text-st-darkblue">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
           <Heart className="fill-st-orange text-st-orange" size={32} />
           <h1 className="text-4xl font-display font-bold">Your Favorites</h1>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-20 space-y-4">
             <p className="text-xl opacity-60">You haven't saved any items yet.</p>
             <DesignButton variant="outline" onClick={() => navigate('/tienda')}>
               Browse Shop
             </DesignButton>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {favorites.map(product => (
               <ProductCard 
                 key={product.id} 
                 product={product} 
                 isFavorite={true}
                 onToggleFavorite={removeFavorite}
                 onAddToCart={() => console.log('Add', product.id)}
               />
             ))}
          </div>
        )}
      </main>

      <Footer />
    </PageTransition>
  );
};
