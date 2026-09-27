import React, { useState } from 'react';
import { Sparkles, Eye, ShoppingBag, Heart, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

export default function ShopPage({
  userProfile,
  onOpenProduct,
  onAddToCart,
  wishlist,
  onToggleWishlist,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['all', 'Tops', 'Trousers', 'Blazers', 'Outerwear', 'Dresses'];

  let displayed = selectedCategory === 'all'
    ? [...PRODUCTS]
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  if (sortBy === 'price-low') {
    displayed.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    displayed.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'confidence') {
    displayed.sort((a, b) => b.fitConfidence - a.fitConfidence);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222222]/10 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#5E6A4B] font-semibold block mb-2">
            MADE-TO-MEASURE CATALOG
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] tracking-tight">
            The Collection
          </h1>
          <p className="text-sm font-sans text-[#222222]/70 mt-2 max-w-xl font-light">
            Every garment in this collection is digitally graded and cut to your exact anatomical measurements upon ordering.
          </p>
        </div>

        {/* Controls: Category & Sort */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 border border-[#222222]/15 rounded-xl px-3 py-2 bg-white text-xs font-mono">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#222222]/60" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent focus:outline-none text-[#222222] font-mono cursor-pointer"
            >
              <option value="featured">Featured Silhouettes</option>
              <option value="confidence">Highest Fit Match %</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#222222] text-[#F7F3ED] font-semibold'
                : 'bg-white border border-[#222222]/10 text-[#222222]/70 hover:border-[#222222]'
            }`}
          >
            {cat === 'all' ? 'All Silhouettes' : cat}
          </button>
        ))}
      </div>

      {/* Product Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayed.map((product) => {
          const isWish = wishlist.includes(product.id);

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#222222]/10 overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              <div 
                className="relative aspect-[3/4] bg-[#EFE9DF] overflow-hidden cursor-pointer"
                onClick={() => onOpenProduct(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#222222]/85 text-[#F7F3ED] text-[10px] font-mono px-3 py-1 rounded-full backdrop-blur-sm">
                    PARAMETRIC PATTERN
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className="p-2 rounded-full bg-white/80 hover:bg-white text-[#222222] transition-colors pointer-events-auto shadow-sm"
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWish ? 'fill-[#5C1D24] text-[#5C1D24]' : ''}`} />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-sm text-[#5E6A4B] text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-[#222222]/10">
                  {product.fitConfidence}% Fit Confidence
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#222222]/50 block">
                    {product.category} • Custom Tailored
                  </span>
                  <div className="flex justify-between items-baseline mt-1">
                    <h3 
                      onClick={() => onOpenProduct(product)}
                      className="font-serif text-xl font-normal text-[#222222] group-hover:text-[#5E6A4B] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <span className="font-mono text-base font-semibold text-[#222222]">
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-[#222222]/70 font-sans mt-2 line-clamp-2">
                    {product.story}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#222222]/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {product.availableColors.map((c, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-black/15"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenProduct(product)}
                    className="px-4 py-2 bg-[#FAF8F5] hover:bg-[#222222] text-[#222222] hover:text-[#F7F3ED] border border-[#222222]/15 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>CUSTOMISE</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
