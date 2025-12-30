import React, { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../landing/Navbar'
import { Footer } from '../landing/Footer'
import { PageTransition } from '../ui/PageTransition'
import { DesignButton } from '../design-system/Buttons'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { media } from '@/lib/media'

// MOCK CART DATA
const INITIAL_CART_ITEMS = [
  {
    id: 'cart_1',
    product_id: 'prod_1',
    name: 'Neon Pop Keyboard',
    price: 129.99,
    quantity: 1,
    image: media.placeholders.keyboard,
    variant: 'Cyber Pink'
  },
  {
    id: 'cart_2',
    product_id: 'prod_3',
    name: 'Smart Desk Mat',
    price: 45.00,
    quantity: 2,
    image: media.placeholders.mat,
    variant: 'Deep Space'
  }
];

export const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0; // Free for now
  const total = subtotal + shipping;

  return (
    <PageTransition className="min-h-screen flex flex-col bg-st-bonewhite font-ui text-st-darkblue">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-display font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 space-y-4">
             <p className="text-xl opacity-60">Your cart is empty.</p>
             <DesignButton variant="outline" onClick={() => navigate('/tienda')}>
               Start Shopping
             </DesignButton>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Cart Items List */}
            <div className="flex-1 space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-6 p-6 bg-white rounded-2xl border border-st-darkblue/10 items-center">
                  <div className="w-24 h-24 bg-st-bonewhite rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                       <div>
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-sm text-st-darkblue/60">{item.variant}</p>
                       </div>
                       <button onClick={() => removeItem(item.id)} className="text-st-darkblue/40 hover:text-red-500 transition-colors">
                         <Trash2 size={20} />
                       </button>
                    </div>
                    
                    <div className="flex justify-between items-end">
                       <div className="flex items-center gap-3 bg-st-bonewhite px-3 py-1 rounded-lg">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-st-orange"><Minus size={14} /></button>
                          <span className="font-mono font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-st-orange"><Plus size={14} /></button>
                       </div>
                       <span className="font-mono font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-96">
              <div className="bg-white p-8 rounded-3xl border border-st-darkblue/10 sticky top-24 space-y-6">
                 <h2 className="font-display font-bold text-xl">Order Summary</h2>
                 
                 <div className="space-y-3 pb-6 border-b border-st-darkblue/10">
                    <div className="flex justify-between opacity-80">
                      <span>Subtotal</span>
                      <span className="font-mono">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between opacity-80">
                      <span>Shipping</span>
                      <span className="font-mono text-st-orange">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total</span>
                    <span className="font-mono">${total.toFixed(2)}</span>
                 </div>

                 <DesignButton variant="solid" className="w-full justify-center group" onClick={() => navigate('/checkout')}>
                    Checkout <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </DesignButton>
                 
                 <p className="text-xs text-center opacity-50">
                   Secure checkout powered by Stripe.
                 </p>
              </div>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </PageTransition>
  );
};
