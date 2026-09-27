import React from 'react';
import { X, User, Sliders, Palette, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

export default function ProfileDrawer({
  isOpen,
  onClose,
  userProfile,
  onNavigateToFit,
  onNavigateToColour,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#222222]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F3ED] shadow-elevated border-l border-[#222222]/15 flex flex-col justify-between text-[#222222]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#222222]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#222222] text-[#F7F3ED] flex items-center justify-center font-serif text-lg">
                IB
              </div>
              <div>
                <h2 className="font-serif text-xl font-normal text-[#222222]">My Biometric Profile</h2>
                <p className="text-[11px] font-mono text-[#5E6A4B] flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" /> Custom Pattern Profile Active
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#222222]/70 hover:text-[#222222] transition-colors rounded-full hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Quick summary box */}
            <div className="bg-white border border-[#222222]/10 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#222222]/60">
                  Biometric Parameters
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToFit();
                  }}
                  className="text-xs font-mono text-[#5E6A4B] hover:underline flex items-center gap-1"
                >
                  <Sliders className="w-3 h-3" /> Edit
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-center font-mono">
                <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-[#222222]/5">
                  <span className="text-[10px] text-[#222222]/50 block">HEIGHT</span>
                  <span className="text-sm font-bold text-[#222222]">{userProfile.measurements.height} cm</span>
                </div>
                <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-[#222222]/5">
                  <span className="text-[10px] text-[#222222]/50 block">SHOULDER</span>
                  <span className="text-sm font-bold text-[#222222]">{userProfile.measurements.shoulder} cm</span>
                </div>
                <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-[#222222]/5">
                  <span className="text-[10px] text-[#222222]/50 block">BUST</span>
                  <span className="text-sm font-bold text-[#222222]">{userProfile.measurements.bust} cm</span>
                </div>
                <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-[#222222]/5">
                  <span className="text-[10px] text-[#222222]/50 block">WAIST</span>
                  <span className="text-sm font-bold text-[#222222]">{userProfile.measurements.waist} cm</span>
                </div>
                <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-[#222222]/5">
                  <span className="text-[10px] text-[#222222]/50 block">HIP</span>
                  <span className="text-sm font-bold text-[#222222]">{userProfile.measurements.hip} cm</span>
                </div>
                <div className="bg-[#FAF8F5] p-2.5 rounded-lg border border-[#222222]/5">
                  <span className="text-[10px] text-[#222222]/50 block">INSEAM</span>
                  <span className="text-sm font-bold text-[#222222]">{userProfile.measurements.inseam} cm</span>
                </div>
              </div>
            </div>

            {/* Fit Preference & Proportions */}
            <div className="bg-white border border-[#222222]/10 rounded-2xl p-5 shadow-sm space-y-3 font-mono text-xs">
              <span className="text-[10px] uppercase tracking-wider text-[#222222]/60 block">
                Garment Construction Settings
              </span>
              <div className="flex justify-between items-center py-1.5 border-b border-[#222222]/5">
                <span className="text-[#222222]/70">Drape Preference:</span>
                <span className="font-bold text-[#222222] uppercase">{userProfile.fitPreference}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-[#222222]/5">
                <span className="text-[#222222]/70">Proportions:</span>
                <span className="font-bold text-[#222222] capitalize">
                  {userProfile.proportions?.replace('-', ' ')}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-[#222222]/70">Standard Size Category:</span>
                <span className="text-[#5C1D24] font-semibold line-through">None (Bespoke)</span>
              </div>
            </div>

            {/* Active Colour Palette */}
            <div className="bg-white border border-[#222222]/10 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#222222]/60">
                  Colour Profile: {userProfile.colourProfile?.name || 'Warm Autumn'}
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToColour();
                  }}
                  className="text-xs font-mono text-[#5E6A4B] hover:underline flex items-center gap-1"
                >
                  <Palette className="w-3 h-3" /> Rescan
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {(userProfile.colourProfile?.swatches || []).map((color, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#222222]/10">
                    <span
                      className="w-3 h-3 rounded-full border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[10px] font-mono text-[#222222]">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#222222]/10 text-center">
              <p className="font-serif italic text-sm text-[#222222]/80 leading-relaxed">
                "You're not an XS or an S. You're not a 6 or an 8. You're somewhere in-between."
              </p>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-[#222222]/10 bg-[#FAF8F5]">
            <button
              onClick={() => {
                onClose();
                onNavigateToFit();
              }}
              className="w-full py-3 bg-[#222222] hover:bg-[#141414] text-[#F7F3ED] rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Recalibrate Fit Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
