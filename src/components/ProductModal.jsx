import React, { useState } from 'react';
import { X, Check, ShieldCheck, Sparkles, Heart, Ruler, Info, ArrowRight } from 'lucide-react';

export default function ProductModal({
  product,
  onClose,
  userProfile,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}) {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [localFitPreference, setLocalFitPreference] = useState(userProfile.fitPreference || 'regular');
  const [activeTab, setActiveTab] = useState('fit-spec');
  const [isAdded, setIsAdded] = useState(false);

  // Compute garment measurements dynamically based on user profile and local fit preference
  const easeAdjustments = {
    relaxed: { easeName: 'Relaxed Ease', extraEase: 3 },
    regular: { easeName: 'Regular Ease', extraEase: 0 },
    fitted: { easeName: 'Fitted Contour', extraEase: -1.5 },
    oversized: { easeName: 'Architectural Oversize', extraEase: 6 },
  };

  const currentEase = easeAdjustments[localFitPreference] || { easeName: 'Regular', extraEase: 0 };
  const rawSpecs = product.measurementsSpec(userProfile.measurements);

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedColor,
      selectedFitPreference: localFitPreference,
      tailoredSpecs: rawSpecs,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#222222]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#F7F3ED] rounded-2xl shadow-elevated border border-[#222222]/15 overflow-hidden flex flex-col md:flex-row text-[#222222]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#222222] shadow-sm transition-all focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Gallery & Fashion Editorial Image */}
        <div className="w-full md:w-1/2 bg-[#EFE9DF] relative flex flex-col items-center justify-between p-6">
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-inner group">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Precision Caliper Overlay Graphic */}
            <div className="absolute inset-0 border border-white/20 pointer-events-none p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="bg-[#222222]/85 text-[#F7F3ED] text-[10px] font-mono px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1.5">
                  <Ruler className="w-3 h-3 text-[#A8B5A0]" />
                  PARAMETRIC DRAFT V3.2
                </span>
                <span className="bg-white/85 text-[#222222] text-[10px] font-mono px-2 py-1 rounded">
                  {userProfile.measurements.waist}w / {userProfile.measurements.hip}h
                </span>
              </div>
              <div className="bg-[#FAF8F5]/90 backdrop-blur-sm rounded-lg p-2.5 border border-[#222222]/10 text-xs font-mono">
                <div className="flex items-center justify-between text-[#222222]/70 text-[10px]">
                  <span>PATTERN ID: IB-{product.id.toUpperCase()}</span>
                  <span className="text-[#5E6A4B] font-semibold">ZERO EXCESS FABRIC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alternate Thumbnail Swatches */}
          <div className="flex items-center gap-3 mt-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`w-14 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === img ? 'border-[#222222] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Biometric Customization Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[92vh]">
          <div className="space-y-5">
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#222222]/60 font-mono">
                  {product.category} • Custom Fit
                </span>
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="p-1 text-[#222222]/60 hover:text-[#5C1D24] transition-colors"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#5C1D24] text-[#5C1D24]' : ''}`} />
                </button>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#222222] tracking-wide mt-1">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-xl font-medium text-[#222222]">₹{product.price.toLocaleString()}</span>
                <span className="text-xs font-mono text-[#5E6A4B] bg-[#A8B5A0]/20 px-2 py-0.5 rounded">
                  Bespoke Pattern Included
                </span>
              </div>
            </div>

            {/* Fit Confidence Meter Section (As described in specification) */}
            <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5E6A4B]" />
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#222222]">
                    FIT CONFIDENCE
                  </span>
                </div>
                <span className="text-base font-serif font-bold text-[#222222]">
                  {product.fitConfidence}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-[#222222]/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#5E6A4B] rounded-full transition-all duration-1000"
                  style={{ width: `${product.fitConfidence}%` }}
                />
              </div>

              <p className="text-[12px] text-[#222222]/70 mt-2 font-sans leading-relaxed">
                Designed according to your saved measurements ({userProfile.measurements.waist}cm waist, {userProfile.measurements.hip}cm hip) and preferred {localFitPreference} drape.
              </p>
            </div>

            {/* Tabs: Fit Spec vs Details */}
            <div className="flex border-b border-[#222222]/10 text-xs font-mono">
              <button
                onClick={() => setActiveTab('fit-spec')}
                className={`pb-2 px-1 border-b-2 font-medium transition-colors ${
                  activeTab === 'fit-spec' ? 'border-[#222222] text-[#222222]' : 'border-transparent text-[#222222]/50 hover:text-[#222222]'
                }`}
              >
                BIOMETRIC FIT SPEC
              </button>
              <button
                onClick={() => setActiveTab('garment-info')}
                className={`pb-2 px-4 border-b-2 font-medium transition-colors ${
                  activeTab === 'garment-info' ? 'border-[#222222] text-[#222222]' : 'border-transparent text-[#222222]/50 hover:text-[#222222]'
                }`}
              >
                FABRIC & ORIGIN
              </button>
            </div>

            {/* Spec Tab Content */}
            {activeTab === 'fit-spec' && (
              <div className="space-y-4">
                {/* Fit Preference Selector */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#222222]/70 block mb-2">
                    Drape Preference: <span className="font-semibold text-[#222222]">{localFitPreference.toUpperCase()}</span>
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {['relaxed', 'regular', 'fitted', 'oversized'].map((fit) => (
                      <button
                        key={fit}
                        onClick={() => setLocalFitPreference(fit)}
                        className={`py-1.5 px-2 text-[10px] font-mono uppercase tracking-wider rounded border text-center transition-all ${
                          localFitPreference === fit
                            ? 'bg-[#222222] text-[#F7F3ED] border-[#222222]'
                            : 'bg-white border-[#222222]/15 text-[#222222]/70 hover:border-[#222222]'
                        }`}
                      >
                        {fit}
                      </button>
                    ))}
                  </div>
                </div>

                {/* The Comparison Table requested by user: Measurement | Your size | Garment */}
                <div className="border border-[#222222]/10 rounded-xl overflow-hidden bg-white text-xs">
                  <div className="bg-[#FAF8F5] px-3.5 py-2 border-b border-[#222222]/10 grid grid-cols-3 font-mono text-[10px] uppercase tracking-wider text-[#222222]/70">
                    <span>Measurement</span>
                    <span className="text-center">Your Biometric</span>
                    <span className="text-right">Garment Spec</span>
                  </div>
                  <div className="divide-y divide-[#222222]/5">
                    {rawSpecs.map((spec, i) => (
                      <div key={i} className="px-3.5 py-2.5 grid grid-cols-3 items-center">
                        <span className="font-medium text-[#222222]">{spec.param}</span>
                        <span className="text-center font-mono text-[#222222]/80">{spec.userSize}</span>
                        <span className="text-right font-mono font-semibold text-[#5E6A4B]">
                          {spec.garmentSize}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-[#222222]/60">
                  <Info className="w-3.5 h-3.5 flex-shrink-0 text-[#A8B5A0]" />
                  <span>Garment ease adapts seamlessly to your natural body measurements.</span>
                </div>
              </div>
            )}

            {/* Garment Details Content */}
            {activeTab === 'garment-info' && (
              <div className="space-y-3 text-xs leading-relaxed text-[#222222]/80">
                <p><strong>Fabric:</strong> {product.fabric}</p>
                <p><strong>Design Note:</strong> {product.recommendationReason}</p>
                <p><strong>Pattern Engineering:</strong> {product.story}</p>
                <p className="text-[11px] text-[#222222]/60 border-t border-[#222222]/10 pt-2">
                  Ethically crafted on-demand with laser-guided zero-waste pattern layouts.
                </p>
              </div>
            )}

            {/* Colour Selector */}
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#222222]/70 block mb-2">
                COLOUR: <span className="font-semibold text-[#222222]">{selectedColor.name}</span>
              </label>
              <div className="flex items-center gap-3">
                {product.availableColors.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-8 h-8 rounded-full border-2 transition-transform ${
                        isSelected ? 'scale-110 ring-2 ring-[#222222] ring-offset-2 ring-offset-[#F7F3ED]' : 'border-black/10 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {isSelected && (
                        <Check
                          className={`w-4 h-4 mx-auto ${
                            ['#FAF7F2', '#F7F3ED', '#D8CBB8', '#FFFFFF'].includes(color.hex)
                              ? 'text-[#222222]'
                              : 'text-white'
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Add to Bag Action Button */}
          <div className="pt-6 border-t border-[#222222]/10 mt-6">
            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`w-full py-4 px-6 rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                isAdded
                  ? 'bg-[#5E6A4B] text-white shadow-soft'
                  : 'bg-[#222222] hover:bg-[#141414] text-[#F7F3ED] hover:shadow-elevated'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  CUSTOMIZED & ADDED TO BAG
                </>
              ) : (
                <>
                  <span>ADD TO BAG</span>
                  <span className="opacity-40">•</span>
                  <span>₹{product.price.toLocaleString()}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
