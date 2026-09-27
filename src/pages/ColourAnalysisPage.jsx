import React, { useState } from 'react';
import { 
  Upload, 
  Sparkles, 
  Check, 
  Palette, 
  RefreshCw, 
  ArrowRight, 
  Sliders, 
  Camera, 
  Sun,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { COLOR_PROFILES } from '../data/mockData';

export default function ColourAnalysisPage({
  userProfile,
  onUpdateColourProfile,
  onNavigate,
}) {
  const [selectedProfileId, setSelectedProfileId] = useState(userProfile.colourProfile?.id || 'warm-autumn');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);
  const [activePhoto, setActivePhoto] = useState(userProfile.colourProfile?.samplePhoto || COLOR_PROFILES[0].samplePhoto);
  const [paletteAppliedToast, setPaletteAppliedToast] = useState(false);

  const currentProfile = COLOR_PROFILES.find((p) => p.id === selectedProfileId) || COLOR_PROFILES[0];

  // Handle simulated photo upload or preset selection
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        triggerScanAnimation(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerScanAnimation = (photoUrl, profileId = 'warm-autumn') => {
    setActivePhoto(photoUrl);
    setSelectedProfileId(profileId);
    setIsScanning(true);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          const found = COLOR_PROFILES.find((p) => p.id === profileId) || COLOR_PROFILES[0];
          onUpdateColourProfile(found);
          return 100;
        }
        return prev + 20;
      });
    }, 250);
  };

  const handleApplyPalette = () => {
    onUpdateColourProfile(currentProfile);
    setPaletteAppliedToast(true);
    setTimeout(() => setPaletteAppliedToast(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#222222]/15 bg-[#FAF8F5] text-xs font-mono text-[#5E6A4B]">
          <Palette className="w-3.5 h-3.5" />
          CHROMATIC HARMONY ENGINE
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] tracking-tight">
          Your colours, decoded.
        </h1>

        <p className="text-sm sm:text-lg text-[#222222]/70 font-sans max-w-xl mx-auto font-light leading-relaxed">
          Discover the shades that complement your natural colouring and build a wardrobe around them.
        </p>
      </div>

      {/* Main Interactive Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Upload & Photo Analysis Studio */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-3xl p-6 sm:p-8 shadow-soft space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#222222]/10 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#5E6A4B] font-semibold">
                BIOMETRIC CHROMATIC SCAN
              </span>
              <span className="text-[11px] font-mono text-[#222222]/60">NATURAL LIGHT</span>
            </div>

            {/* Photo Preview & Scanning Frame */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#EFE9DF] border border-[#222222]/15 shadow-inner group">
              <img
                src={activePhoto}
                alt="Portrait for Colour Analysis"
                className="w-full h-full object-cover object-center"
              />

              {/* Animated laser scan bar when analyzing */}
              {isScanning && (
                <div className="absolute inset-0 bg-[#A8B5A0]/20 flex flex-col justify-between p-6">
                  <div className="w-full h-1 bg-[#A8B5A0] shadow-[0_0_12px_#A8B5A0] animate-pulse" />
                  <div className="bg-[#222222]/90 backdrop-blur-md text-[#F7F3ED] rounded-xl p-4 text-center font-mono text-xs space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#A8B5A0] animate-spin" />
                      <span>ANALYSING MELANIN & SUB-SURFACE UNDERTONE</span>
                    </div>
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#A8B5A0] transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Subtle face tracking frame graphics */}
              {!isScanning && (
                <div className="absolute inset-6 border border-white/40 rounded-xl pointer-events-none flex flex-col justify-between p-3 text-[10px] font-mono text-white/90">
                  <div className="flex justify-between">
                    <span className="bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">FACE ANCHOR</span>
                    <span className="bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">ILLUMINANT: 5500K</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-md rounded-lg p-2.5 flex items-center justify-between">
                    <span>ANALYSIS CONFIDENCE</span>
                    <span className="text-[#A8B5A0] font-bold">99.2%</span>
                  </div>
                </div>
              )}
            </div>

            {/* Upload Area as requested by user */}
            <div className="space-y-3">
              <label className="relative flex flex-col items-center justify-center p-5 border-2 border-dashed border-[#222222]/20 hover:border-[#222222] rounded-2xl cursor-pointer bg-white transition-all group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="sr-only"
                />
                <div className="flex items-center gap-2 text-[#222222] font-mono text-xs font-semibold group-hover:text-[#5E6A4B]">
                  <Upload className="w-4 h-4" />
                  <span>+ UPLOAD YOUR PHOTO</span>
                </div>
                <span className="text-[11px] text-[#222222]/60 font-sans mt-1 text-center">
                  Drag & drop or tap to select from device
                </span>
              </label>

              <p className="text-[11px] text-[#222222]/60 font-sans text-center leading-relaxed">
                For best results, use a clear photo in natural lighting without filters.
              </p>
            </div>

            {/* Preset Samples to test instantly */}
            <div className="pt-2 border-t border-[#222222]/10 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#222222]/50 block">
                Or test with sample portraits:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {COLOR_PROFILES.map((prof) => (
                  <button
                    key={prof.id}
                    onClick={() => triggerScanAnimation(prof.samplePhoto, prof.id)}
                    className={`p-2 rounded-xl border text-left font-mono text-[10px] transition-all ${
                      selectedProfileId === prof.id
                        ? 'border-[#222222] bg-white shadow-sm'
                        : 'border-[#222222]/10 bg-[#FAF8F5] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <span className="font-bold text-[#222222] block truncate">{prof.name}</span>
                    <span className="text-[#5E6A4B] block">{prof.undertone.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Colour Analysis Results & Recommendations */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Card: YOUR COLOUR PROFILE */}
          <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-3xl p-6 sm:p-8 shadow-soft space-y-6">
            <div className="flex items-center justify-between border-b border-[#222222]/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#5E6A4B] font-semibold block">
                  CHROMATIC PROFILE
                </span>
                <h2 className="font-serif text-3xl text-[#222222] font-normal mt-0.5">
                  {currentProfile.name}
                </h2>
              </div>

              {/* Warm / Cool / Neutral Indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#222222]/15 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#5E6A4B]"></span>
                <span className="font-bold text-[#222222] uppercase">{currentProfile.undertone}</span>
              </div>
            </div>

            <p className="text-sm font-sans text-[#222222]/75 leading-relaxed">
              {currentProfile.description}
            </p>

            {/* Profile Metrics: Undertone, Contrast, Palette Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="bg-white p-3 rounded-xl border border-[#222222]/10">
                <span className="text-[10px] text-[#222222]/50 block">UNDERTONE</span>
                <span className="font-semibold text-[#222222]">{currentProfile.undertone}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#222222]/10">
                <span className="text-[10px] text-[#222222]/50 block">CONTRAST LEVEL</span>
                <span className="font-semibold text-[#222222]">{currentProfile.contrast}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#222222]/10 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-[#222222]/50 block">MATCH INDEX</span>
                <span className="font-semibold text-[#5E6A4B]">98.7% Confidence</span>
              </div>
            </div>

            {/* ================= YOUR PALETTE (6-8 Swatches) ================= */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#222222] font-semibold">
                  YOUR PALETTE ({currentProfile.swatches.length} HARMONIC SHADES)
                </span>
                <span className="text-[11px] font-mono text-[#222222]/50">Calibrated to your skin tone</span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                {currentProfile.swatches.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-1.5 group cursor-pointer">
                    <div
                      className="w-12 h-12 rounded-full border-2 border-white shadow-soft transition-transform group-hover:scale-110 flex items-center justify-center"
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 text-[8px] font-mono uppercase text-white bg-black/50 px-1 rounded transition-opacity">
                        {color.hex}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-center text-[#222222]/80 leading-tight">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= RECOMMENDED SECTION =================
                Tops: Cream, olive, burgundy
                Bottoms: Navy, charcoal, beige
                Statement: Terracotta, emerald
            =========================================================== */}
            <div className="border-t border-[#222222]/10 pt-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#5E6A4B] font-semibold block">
                WARDROBE ASSIGNMENT STRATEGY
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-xs">
                {/* Tops */}
                <div className="bg-white p-4 rounded-xl border border-[#222222]/10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FAF7F2] border border-black/20"></span>
                    <strong className="font-serif text-sm text-[#222222]">Recommended Tops</strong>
                  </div>
                  <p className="text-[#222222]/70 font-mono text-[11px]">
                    {currentProfile.recommended.tops.join(', ')}
                  </p>
                  <p className="text-[10px] text-[#222222]/50 leading-relaxed">
                    Positions luminous shades near the face to brighten eye reflections.
                  </p>
                </div>

                {/* Bottoms */}
                <div className="bg-white p-4 rounded-xl border border-[#222222]/10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1B2A38]"></span>
                    <strong className="font-serif text-sm text-[#222222]">Recommended Bottoms</strong>
                  </div>
                  <p className="text-[#222222]/70 font-mono text-[11px]">
                    {currentProfile.recommended.bottoms.join(', ')}
                  </p>
                  <p className="text-[10px] text-[#222222]/50 leading-relaxed">
                    Grounding neutral foundations that pair seamlessly with every top.
                  </p>
                </div>

                {/* Statement */}
                <div className="bg-white p-4 rounded-xl border border-[#222222]/10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5C1D24]"></span>
                    <strong className="font-serif text-sm text-[#222222]">Statement Pieces</strong>
                  </div>
                  <p className="text-[#222222]/70 font-mono text-[11px]">
                    {currentProfile.recommended.statement.join(', ')}
                  </p>
                  <p className="text-[10px] text-[#222222]/50 leading-relaxed">
                    High-chroma outer layers, blazers, and luxury silk accents.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions: Apply Palette & Go to Wardrobe */}
            <div className="border-t border-[#222222]/10 pt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleApplyPalette}
                className="w-full sm:w-auto flex-1 py-4 bg-[#222222] hover:bg-[#141414] text-[#F7F3ED] rounded-xl font-mono text-xs uppercase tracking-widest transition-all shadow-soft flex items-center justify-center gap-2"
              >
                {paletteAppliedToast ? (
                  <>
                    <Check className="w-4 h-4 text-[#A8B5A0]" />
                    <span>PALETTE APPLIED TO PROFILE</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#A8B5A0]" />
                    <span>APPLY PALETTE TO MY WARDROBE</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onNavigate('wardrobe')}
                className="w-full sm:w-auto px-6 py-4 bg-[#FAF8F5] hover:bg-[#EFE9DF] text-[#222222] border border-[#222222]/20 rounded-xl font-mono text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <span>VIEW TAILORED PIECES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
