import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Filter, 
  Ruler, 
  Palette, 
  Sliders, 
  Eye, 
  ShoppingBag,
  Heart
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

export default function WardrobePage({
  userProfile,
  onOpenProduct,
  onAddToCart,
  onNavigate,
  wishlist,
  onToggleWishlist,
}) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [addedItemMap, setAddedItemMap] = useState({});

  const filterOptions = [
    { id: 'all', label: 'All Bespoke Pieces' },
    { id: 'Tops', label: 'Tailored Tops' },
    { id: 'Trousers', label: 'Proportional Trousers' },
    { id: 'Blazers', label: 'Architectural Blazers' },
    { id: 'Outerwear', label: 'Outerwear' },
    { id: 'Dresses', label: 'Column Dresses' },
  ];

  const filteredProducts = selectedFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedFilter);

  const handleQuickAdd = (product) => {
    onAddToCart({
      ...product,
      selectedColor: product.availableColors[0],
      selectedFitPreference: userProfile.fitPreference,
      tailoredSpecs: product.measurementsSpec(userProfile.measurements),
    });

    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#222222]/15 bg-[#FAF8F5] text-xs font-mono text-[#5E6A4B]">
          <Sparkles className="w-3.5 h-3.5" />
          GENERATIVE PERSONAL WARDROBE
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] tracking-tight">
              Your wardrobe, your way.
            </h1>
            <p className="text-sm sm:text-base text-[#222222]/70 font-sans mt-2 max-w-xl font-light leading-relaxed">
              Every recommendation is selected using your fit profile, colour palette and style preferences.
            </p>
          </div>

          {/* Biometric Status Summary Box */}
          <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-4 font-mono text-xs text-[#222222]/80 space-y-1.5 self-start md:self-auto">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] uppercase text-[#222222]/50">Active Biometric Profile:</span>
              <button
                onClick={() => onNavigate('find-fit')}
                className="text-[#5E6A4B] text-[10px] underline underline-offset-2 hover:text-[#222222]"
              >
                Adjust Measurements
              </button>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-semibold text-[#222222]">
              <span>W: {userProfile.measurements.waist}cm</span>
              <span>•</span>
              <span>H: {userProfile.measurements.hip}cm</span>
              <span>•</span>
              <span>INS: {userProfile.measurements.inseam}cm</span>
              <span>•</span>
              <span className="uppercase text-[#5E6A4B]">{userProfile.fitPreference} FIT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
        {filterOptions.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFilter(f.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedFilter === f.id
                ? 'bg-[#222222] text-[#F7F3ED] font-semibold'
                : 'bg-white border border-[#222222]/10 text-[#222222]/70 hover:border-[#222222]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const isAdded = !!addedItemMap[product.id];
          const isWish = wishlist.includes(product.id);

          return (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-[#222222]/10 overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Visual */}
              <div 
                className="relative aspect-[3/4] bg-[#EFE9DF] overflow-hidden cursor-pointer"
                onClick={() => onOpenProduct(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlays */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#222222]/85 text-[#F7F3ED] text-[10px] font-mono px-3 py-1 rounded-full backdrop-blur-sm pointer-events-auto">
                    YOUR FIT: CUSTOM
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

                {/* Match indicator pill */}
                <div className="absolute bottom-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-sm text-[#222222] text-[10px] font-mono px-3 py-1 rounded-full border border-[#222222]/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5E6A4B]"></span>
                  <span>Fit Confidence: {product.fitConfidence}%</span>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
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

                  {/* Biometric Verification Checkmarks (Shoulder ✓ Sleeve ✓ Length ✓ Waist ✓ Hip ✓) */}
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#5E6A4B]">
                    {product.customCheckmarks.map((chk, i) => (
                      <span key={i} className="bg-[#A8B5A0]/15 px-2 py-0.5 rounded font-medium">
                        {chk}
                      </span>
                    ))}
                  </div>

                  {/* Recommendation Rationale */}
                  <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#222222]/5 text-xs text-[#222222]/75 font-sans leading-relaxed">
                    <strong className="text-[#222222] font-semibold block text-[11px] font-mono uppercase mb-0.5 text-[#5E6A4B]">
                      Recommended because:
                    </strong>
                    {product.recommendationReason}
                  </div>
                </div>

                {/* Available in Palette + Actions */}
                <div className="pt-4 border-t border-[#222222]/10 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#222222]/60">
                    <span>Available in your palette:</span>
                    <div className="flex items-center gap-1.5">
                      {product.availableColors.map((c, idx) => (
                        <span
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenProduct(product)}
                      className="py-3 px-2 bg-[#FAF8F5] hover:bg-[#222222]/5 text-[#222222] border border-[#222222]/15 rounded-xl font-mono text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>VIEW SPEC</span>
                    </button>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      disabled={isAdded}
                      className={`py-3 px-2 rounded-xl font-mono text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                        isAdded
                          ? 'bg-[#5E6A4B] text-white shadow-soft'
                          : 'bg-[#222222] hover:bg-[#141414] text-[#F7F3ED]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>ADDED</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>ADD TO BAG</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Wardrobe Guarantee Footnote */}
      <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-6 text-center max-w-2xl mx-auto space-y-2 font-mono text-xs text-[#222222]/70">
        <span className="text-[#5E6A4B] font-semibold block uppercase">IN-BETWEEN CRAFTSMANSHIP COMMITMENT</span>
        <p className="font-sans text-xs leading-relaxed">
          Every piece ordered through "My Wardrobe" includes 1-on-1 digital pattern drafting. If any seam does not meet your anatomical satisfaction, our studio provides complimentary tailoring adjustments or pattern recreation.
        </p>
      </div>

    </div>
  );
}
