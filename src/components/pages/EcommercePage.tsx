import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Search, ShoppingCart, Filter, X } from 'lucide-react'
import { Navbar } from '../landing/Navbar'
import { Footer } from '../landing/Footer'
import { ProductCard, Product } from '../shop/ProductCard'
import { PageTransition } from '../ui/PageTransition'
import { ViewSkeleton } from '../ui/ViewSkeleton'
import { useDatabase } from '../../contexts/DatabaseContext'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { media } from '@/lib/media'

// --- MOCK DATA (Schema First) ---
const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'prod_1',
    name: 'Neon Pop Keyboard',
    price: 129.99,
    category: 'Tech',
    image: media.placeholders.keyboard,
    isNew: true,
    rating: 4.8
  },
  {
    id: 'prod_2',
    name: 'Retro Headset Wireless',
    price: 89.99,
    category: 'Audio',
    image: media.placeholders.headset,
    rating: 4.5
  },
  {
    id: 'prod_3',
    name: 'Smart Desk Mat',
    price: 45.00,
    category: 'Accessories',
    image: media.placeholders.mat,
    rating: 4.2
  },
  {
    id: 'prod_4',
    name: 'Holographic Laptop Sleeve',
    price: 35.50,
    category: 'Accessories',
    image: media.placeholders.sleeve,
    isNew: true,
    rating: 4.9
  },
  // Extra items for better filtering demo
  {
    id: 'prod_5',
    name: 'Cyberpunk LED Glasses',
    price: 25.00,
    category: 'Accessories',
    image: media.placeholders.glasses,
    rating: 4.1
  },
  {
    id: 'prod_6',
    name: 'Quantum Gaming Mouse',
    price: 79.99,
    category: 'Gaming',
    image: media.placeholders.mouse,
    rating: 4.7
  }
];

// Mock Services mapped to Product interface for unified display
const SERVICES_AS_PRODUCTS: Product[] = [
  {
    id: 'serv_1',
    name: 'Implementación Express',
    price: 999.00,
    category: 'Services',
    image: media.services,
    isNew: true,
    rating: 5.0
  },
  {
    id: 'serv_2',
    name: 'Consultoría Tech',
    price: 150.00,
    category: 'Services',
    image: media.placeholders.consulting,
    rating: 4.9
  },
  {
    id: 'serv_3',
    name: 'Automatización & IA',
    price: 500.00,
    category: 'Services',
    image: media.placeholders.ai,
    rating: 4.8
  }
];

const ALL_ITEMS = [...FEATURED_PRODUCTS, ...SERVICES_AS_PRODUCTS];
const CATEGORIES = ['All', 'Tech', 'Audio', 'Gaming', 'Accessories', 'Services'];

export const EcommercePage = () => {
  const { fetchData, isLoading } = useDatabase();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State for filtering
  const [items, setItems] = React.useState<Product[]>(ALL_ITEMS);
  const [filteredItems, setFilteredItems] = React.useState<Product[]>(ALL_ITEMS);
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const searchQuery = searchParams.get('q') || '';

  // Simulate data fetching
  React.useEffect(() => {
    // In real app: fetchData('products').then(setProducts)
    // For now we use the mock ALL_ITEMS
    setItems(ALL_ITEMS);
  }, [fetchData]);

  // Filtering Logic
  React.useEffect(() => {
    let result = items;

    // 1. Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // 2. Filter by Search Query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
      );
    }

    setFilteredItems(result);
  }, [items, selectedCategory, searchQuery]);

  const handleSearchChange = (val: string) => {
     setSearchParams(prev => {
         if (val) prev.set('q', val);
         else prev.delete('q');
         return prev;
     });
  };


  const handleAddToCart = (id: string) => {
    console.log('Add to cart:', id);
    toast.success("Added to cart");
  };

  const handleToggleFavorite = (id: string) => {
    console.log('Toggle favorite:', id);
    toast("Updated favorites");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-st-bonewhite">
        <Navbar />
        <ViewSkeleton />
      </div>
    );
  }

  return (
    <PageTransition className="min-h-screen flex flex-col bg-st-bonewhite font-ui text-st-darkblue">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-st-darkblue text-st-bonewhite py-20 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <span className="text-st-orange font-bold tracking-widest uppercase">New Collection</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-none">
                Retro Tech <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-st-orange to-purple-400">
                  Future Life
                </span>
              </h1>
              <p className="text-lg opacity-80 max-w-md">
                Discover the intersection of nostalgic design and cutting-edge functionality.
              </p>
            </div>
            {/* Abstract 3D Element Placeholder */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
               <div className="w-64 h-64 bg-gradient-to-tr from-st-orange to-blue-500 rounded-full blur-3xl opacity-50 absolute" />
               <div className="relative z-10 w-80 h-80 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center">
                  <span className="font-display text-2xl">Featured Item</span>
               </div>
            </div>
          </div>
        </section>

        {/* Categories / Filter Bar */}
        <section className="sticky top-20 z-30 bg-st-bonewhite/95 backdrop-blur-sm border-b border-st-darkblue/10 py-4 shadow-sm transition-all">
           <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Search Input */}
                <div className="relative w-full md:w-96 group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-st-darkblue/40 group-focus-within:text-st-orange transition-colors" size={18} />
                  <Input 
                    type="text" 
                    placeholder="Search products, services, keywords..." 
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-10 bg-white border-st-darkblue/10 focus-visible:ring-st-orange rounded-full"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => handleSearchChange('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-st-darkblue/40 hover:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Category Buttons */}
                <div className="overflow-x-auto pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
                  <div className="flex gap-2 min-w-max">
                     {CATEGORIES.map((cat) => (
                        <button 
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300
                            ${selectedCategory === cat 
                              ? 'bg-st-darkblue text-white border-st-darkblue shadow-md transform scale-105' 
                              : 'bg-white border-st-darkblue/10 text-st-darkblue/70 hover:border-st-orange hover:text-st-orange hover:bg-white'
                            }`}
                        >
                          {cat}
                        </button>
                     ))}
                  </div>
                </div>

              </div>
           </div>
        </section>

        {/* Product Grid */}
        <section className="container mx-auto px-6 py-12">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-display font-bold">
                {searchQuery ? `Search results for "${searchQuery}"` : 'Marketplace'}
              </h2>
              <span className="text-st-darkblue/50 font-mono text-sm">
                {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
              </span>
           </div>

           {filteredItems.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredItems.map(item => (
                  <ProductCard 
                    key={item.id} 
                    product={item} 
                    onAddToCart={handleAddToCart}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
             </div>
           ) : (
             <div className="py-20 text-center space-y-4 opacity-60">
                <div className="w-20 h-20 bg-st-darkblue/5 rounded-full flex items-center justify-center mx-auto">
                   <Search size={32} />
                </div>
                <p className="text-xl font-display">No results found</p>
                <p>Try adjusting your search or category filter to find what you're looking for.</p>
                <Button 
                  variant="outline" 
                  onClick={() => { handleSearchChange(''); setSelectedCategory('All'); }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
             </div>
           )}
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};
