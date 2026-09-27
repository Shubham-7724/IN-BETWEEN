import React, { useState } from 'react';
import { 
  ArrowRight, 
  Ruler, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  SlidersHorizontal, 
  Palette, 
  Layers, 
  Eye, 
  HelpCircle,
  Scissors
} from 'lucide-react';
import BodyModelVisualizer from '../components/BodyModelVisualizer';
import { PRODUCTS, PHILOSOPHY_POINTS } from '../data/mockData';

export default function HomePage({
  onNavigate,
  userProfile,
  onOpenProduct,
  onAddToCart,
}) {
  const [activeComparisonTab, setActiveComparisonTab] = useState('inbetween'); // 'traditional' | 'inbetween'
  const [heroActiveCaliper, setHeroActiveCaliper] = useState('waist');

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      
      {/* ========================================================
          SECTION 2: HERO SECTION
          ======================================================== */}
      <section className="relative pt-8 sm:pt-14 pb-16 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#222222]/15 bg-[#FAF8F5] text-xs font-mono text-[#5E6A4B] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#5E6A4B] animate-pulse"></span>
                THE NEXT EVOLUTION OF APPAREL
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light text-[#222222] tracking-tight leading-[1.08]">
                  Clothes that fit you.<br />
                  <span className="italic font-normal text-[#5E6A4B]">Not the other way around.</span>
                </h1>

                <p className="text-base sm:text-xl font-sans text-[#222222]/75 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  Fashion designed around you — your measurements, your proportions, your colours and your personal style.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('find-fit')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#222222] hover:bg-[#141414] text-[#F7F3ED] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-soft hover:shadow-elevated flex items-center justify-center gap-3 group"
                >
                  <span>DISCOVER YOUR FIT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('shop')}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#222222]/5 text-[#222222] border border-[#222222]/20 rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center"
                >
                  EXPLORE THE COLLECTION
                </button>
              </div>

              {/* USP Highlights ticker underneath buttons */}
              <div className="pt-6 border-t border-[#222222]/10 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0 font-mono text-[11px]">
                <div>
                  <span className="text-[#5E6A4B] font-bold block text-sm">01. ZERO SIZES</span>
                  <span className="text-[#222222]/60">Parametric biometric drafting</span>
                </div>
                <div>
                  <span className="text-[#5E6A4B] font-bold block text-sm">02. PALETTE</span>
                  <span className="text-[#222222]/60">Curated to your undertone</span>
                </div>
                <div>
                  <span className="text-[#5E6A4B] font-bold block text-sm">03. ZERO WASTE</span>
                  <span className="text-[#222222]/60">Crafted strictly on-demand</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column: High-fashion editorial image with live measurement calipers */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Editorial Model Image Container */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated border border-[#222222]/15 bg-[#EFE9DF]">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
                    alt="IN-BETWEEN Tailored Fashion"
                    className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  />

                  {/* Editorial Caliper Overlays */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                    {/* Top Callout */}
                    <div className="flex justify-between items-start">
                      <div className="bg-[#222222]/85 text-[#F7F3ED] text-[10px] font-mono px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                        <Ruler className="w-3 h-3 text-[#A8B5A0]" />
                        <span>SHOULDER: {userProfile.measurements.shoulder} CM</span>
                      </div>
                      <div className="bg-[#FAF8F5]/90 text-[#222222] text-[10px] font-mono px-2.5 py-1 rounded-full border border-[#222222]/10 backdrop-blur-md">
                        98% FIT ACCURACY
                      </div>
                    </div>

                    {/* Waist Measurement Line Overlay */}
                    <div className="space-y-1">
                      <div className="w-full border-t border-dashed border-white/80 relative flex items-center justify-center">
                        <span className="bg-[#222222]/90 text-[#F7F3ED] text-[9.5px] font-mono px-2.5 py-0.5 rounded-full -top-3 shadow">
                          WAIST APEX: {userProfile.measurements.waist} CM
                        </span>
                      </div>
                    </div>

                    {/* Bottom Floating Pattern Card */}
                    <div className="bg-[#FAF8F5]/95 backdrop-blur-md border border-[#222222]/15 rounded-xl p-3.5 shadow-soft pointer-events-auto">
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#222222]/60 mb-1">
                        <span>LIVE PATTERN SPECS</span>
                        <span className="text-[#5E6A4B] font-semibold">1-OF-1 BESPOKE</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-sm font-medium text-[#222222]">The Signature Fluid Trouser</p>
                          <p className="text-[11px] text-[#222222]/70 font-sans">
                            Engineered for {userProfile.measurements.waist}cm waist & {userProfile.measurements.inseam}cm inseam
                          </p>
                        </div>
                        <button
                          onClick={() => onNavigate('find-fit')}
                          className="px-2.5 py-1 bg-[#222222] text-[#F7F3ED] text-[10px] font-mono rounded hover:bg-[#141414] transition-colors"
                        >
                          EDIT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Accent Graphic Behind Card */}
                <div className="absolute -bottom-6 -right-6 w-36 h-36 border border-[#A8B5A0] rounded-2xl -z-10 hidden sm:block opacity-60 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          SECTION 3: IMMEDIATELY EXPLAIN THE PROBLEM
          "Because your body isn't a size chart."
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-3xl p-8 sm:p-14 shadow-soft">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono tracking-widest uppercase text-[#5E6A4B] font-semibold block">
              THE SIZING CRISIS SOLVED
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] tracking-tight">
              Because your body isn't a size chart.
            </h2>
            <p className="text-sm sm:text-base text-[#222222]/70 font-sans leading-relaxed">
              Standard sizing treats bodies as categories. IN-BETWEEN treats every customer as an individual.
            </p>
          </div>

          {/* Interactive Contrast View: Traditional vs IN-BETWEEN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Traditional Online Shopping */}
            <div className="bg-white/80 border border-[#222222]/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#5C1D24]/10 text-[#5C1D24] text-[10px] font-mono px-3 py-1 rounded-bl-xl font-semibold">
                THE BROKEN MODEL
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#222222]/50 block mb-2">
                  Traditional Online Shopping
                </span>
                <h3 className="font-serif text-2xl text-[#222222] font-normal">
                  Standard Sizing Categories
                </h3>
              </div>

              {/* XS -> S -> M -> L -> XL -> XXL progression */}
              <div className="py-6 px-4 bg-[#F7F3ED]/70 rounded-xl border border-[#222222]/10 text-center space-y-3">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm font-semibold text-[#222222]/60">
                  <span className="px-2.5 py-1 bg-white border border-[#222222]/10 rounded">XS</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 bg-white border border-[#222222]/10 rounded">S</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 bg-white border border-[#222222]/10 rounded">M</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 bg-white border border-[#222222]/10 rounded">L</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 bg-white border border-[#222222]/10 rounded">XL</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 bg-white border border-[#222222]/10 rounded">XXL</span>
                </div>
                <div className="text-xs font-mono text-[#5C1D24] pt-1">
                  ↓ Everyone is expected to fit into predetermined categories
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#222222]/70 font-sans border-t border-[#222222]/10 pt-4">
                <div className="flex items-center gap-2 text-[#5C1D24]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5C1D24]"></span>
                  <span>40% of all online clothing is returned due to poor fit</span>
                </div>
                <div className="flex items-center gap-2 text-[#222222]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#222222]/30"></span>
                  <span>Waist gaps, hem dragging, tight shoulders, and loose chest</span>
                </div>
                <div className="flex items-center gap-2 text-[#222222]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#222222]/30"></span>
                  <span>Millions of unsold standard sizes end up in landfills</span>
                </div>
              </div>
            </div>

            {/* Card 2: IN-BETWEEN */}
            <div className="bg-[#222222] text-[#F7F3ED] border border-[#222222] rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-elevated">
              <div className="absolute top-0 right-0 bg-[#A8B5A0] text-[#141414] text-[10px] font-mono px-3 py-1 rounded-bl-xl font-bold">
                THE IN-BETWEEN WAY
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A8B5A0] block mb-2">
                  IN-BETWEEN Algorithm
                </span>
                <h3 className="font-serif text-2xl text-[#F7F3ED] font-normal">
                  Biometric Individual Fit
                </h3>
              </div>

              {/* Your measurements -> Your body profile -> Your colour palette -> Your wardrobe -> Your perfect fit */}
              <div className="py-6 px-4 bg-white/5 rounded-xl border border-white/10 text-center space-y-3">
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs text-[#F7F3ED]">
                  <span className="px-2 py-1 bg-[#A8B5A0]/20 text-[#A8B5A0] rounded border border-[#A8B5A0]/40">Your measurements</span>
                  <span>→</span>
                  <span className="px-2 py-1 bg-white/10 rounded">Body profile</span>
                  <span>→</span>
                  <span className="px-2 py-1 bg-white/10 rounded">Colour palette</span>
                  <span>→</span>
                  <span className="px-2 py-1 bg-white/10 rounded">Your wardrobe</span>
                  <span>→</span>
                  <span className="px-2 py-1 bg-[#A8B5A0] text-[#222222] font-bold rounded">Perfect fit</span>
                </div>
                <div className="text-xs font-mono text-[#A8B5A0] pt-1">
                  100% Tailored to your unique anatomy
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#F7F3ED]/80 font-sans border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-[#A8B5A0]">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Pattern graded directly from your body coordinates</span>
                </div>
                <div className="flex items-center gap-2 text-[#F7F3ED]/80">
                  <Check className="w-4 h-4 flex-shrink-0 text-[#A8B5A0]" />
                  <span>Colours matched to your natural facial undertone</span>
                </div>
                <div className="flex items-center gap-2 text-[#F7F3ED]/80">
                  <Check className="w-4 h-4 flex-shrink-0 text-[#A8B5A0]" />
                  <span>On-demand parametric production = zero deadstock waste</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 4: "HOW IN-BETWEEN WORKS"
          4-step visual process:
          01 MEASURE
          02 ANALYSE
          03 DISCOVER YOUR COLOURS
          04 BUILD YOUR WARDROBE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222222]/10 pb-8">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#5E6A4B] font-semibold block mb-2">
                FOUR-STEP METHODOLOGY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] tracking-tight">
                How IN-BETWEEN Works
              </h2>
            </div>
            <p className="text-sm font-sans text-[#222222]/70 max-w-md">
              From tape measure to tailored hanger: a seamless digital journey designed around your physical individuality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 01: MEASURE */}
            <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-6 flex flex-col justify-between hover:shadow-soft transition-all space-y-6">
              <div>
                <span className="font-mono text-xs text-[#5E6A4B] font-bold block mb-2">01 — MEASURE</span>
                <h3 className="font-serif text-xl text-[#222222] font-medium">Biometric Input</h3>
                <p className="text-xs text-[#222222]/70 font-sans mt-2 leading-relaxed">
                  Enter your measurements or use our guided measurement system to create your unique body profile.
                </p>
              </div>

              {/* Visual representation: Silhouette graphic with measurements */}
              <div className="bg-white rounded-xl border border-[#222222]/10 p-4 font-mono text-[11px] space-y-2">
                <div className="flex justify-between items-center text-[#222222]">
                  <span className="text-[#222222]/60">Shoulder</span>
                  <span className="font-semibold">{userProfile.measurements.shoulder} cm</span>
                </div>
                <div className="flex justify-between items-center text-[#222222]">
                  <span className="text-[#222222]/60">Bust/Chest</span>
                  <span className="font-semibold">{userProfile.measurements.bust} cm</span>
                </div>
                <div className="flex justify-between items-center text-[#222222]">
                  <span className="text-[#222222]/60">Waist</span>
                  <span className="font-semibold">{userProfile.measurements.waist} cm</span>
                </div>
                <div className="flex justify-between items-center text-[#222222]">
                  <span className="text-[#222222]/60">Hips</span>
                  <span className="font-semibold">{userProfile.measurements.hip} cm</span>
                </div>
                <div className="flex justify-between items-center text-[#222222]">
                  <span className="text-[#222222]/60">Inseam</span>
                  <span className="font-semibold">{userProfile.measurements.inseam} cm</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('find-fit')}
                className="text-xs font-mono uppercase tracking-wider text-[#222222] font-semibold hover:text-[#5E6A4B] flex items-center gap-1.5 transition-colors"
              >
                <span>Enter Measurements</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Step 02: ANALYSE */}
            <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-6 flex flex-col justify-between hover:shadow-soft transition-all space-y-6">
              <div>
                <span className="font-mono text-xs text-[#5E6A4B] font-bold block mb-2">02 — ANALYSE</span>
                <h3 className="font-serif text-xl text-[#222222] font-medium">Proportions & Drape</h3>
                <p className="text-xs text-[#222222]/70 font-sans mt-2 leading-relaxed">
                  Our system analyses your proportions, body structure, preferred silhouettes and fit preferences.
                </p>
              </div>

              {/* Display: Body Profile card */}
              <div className="bg-white rounded-xl border border-[#222222]/10 p-4 font-mono text-[11px] space-y-2">
                <span className="text-[10px] text-[#5E6A4B] font-semibold block uppercase">Body Profile Analysis</span>
                <div className="flex justify-between items-center text-[#222222]">
                  <span className="text-[#222222]/60">Height</span>
                  <span>{userProfile.measurements.height} cm</span>
                </div>
                <div className="flex justify-between items-center text-[#222222]">
                  <span className="text-[#222222]/60">Torso Balance</span>
                  <span className="capitalize">{userProfile.proportions.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between items-center text-[#222222]">
                  <span className="text-[#222222]/60">Preferred Fit</span>
                  <span className="uppercase font-semibold text-[#5E6A4B]">{userProfile.fitPreference}</span>
                </div>
                <div className="flex justify-between items-center text-[#222222]">
                  <span className="text-[#222222]/60">Pattern ID</span>
                  <span className="text-[10px] bg-[#FAF8F5] px-1.5 py-0.5 rounded">IB-98A</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('find-fit')}
                className="text-xs font-mono uppercase tracking-wider text-[#222222] font-semibold hover:text-[#5E6A4B] flex items-center gap-1.5 transition-colors"
              >
                <span>View Fit Preferences</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Step 03: DISCOVER YOUR COLOURS */}
            <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-6 flex flex-col justify-between hover:shadow-soft transition-all space-y-6">
              <div>
                <span className="font-mono text-xs text-[#5E6A4B] font-bold block mb-2">03 — COLOURS</span>
                <h3 className="font-serif text-xl text-[#222222] font-medium">Harmonic Palette</h3>
                <p className="text-xs text-[#222222]/70 font-sans mt-2 leading-relaxed">
                  Find the colours that complement your natural features and build a personalised colour palette.
                </p>
              </div>

              {/* Example Palette swatches */}
              <div className="bg-white rounded-xl border border-[#222222]/10 p-4 font-mono text-[11px] space-y-2.5">
                <span className="text-[10px] text-[#5E6A4B] font-semibold block uppercase">YOUR PALETTE</span>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#A8B5A0] border border-black/10"></span>
                    <span className="text-xs text-[#222222]">Soft Sage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#D8B8B5] border border-black/10"></span>
                    <span className="text-xs text-[#222222]">Dusty Rose</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#F7F3ED] border border-black/20"></span>
                    <span className="text-xs text-[#222222]">Warm Ivory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#1B2A38] border border-black/10"></span>
                    <span className="text-xs text-[#222222]">Deep Navy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#5C1D24] border border-black/10"></span>
                    <span className="text-xs text-[#222222]">Burgundy</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('colour-analysis')}
                className="text-xs font-mono uppercase tracking-wider text-[#222222] font-semibold hover:text-[#5E6A4B] flex items-center gap-1.5 transition-colors"
              >
                <span>Decode Your Colours</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Step 04: BUILD YOUR WARDROBE */}
            <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-6 flex flex-col justify-between hover:shadow-soft transition-all space-y-6">
              <div>
                <span className="font-mono text-xs text-[#5E6A4B] font-bold block mb-2">04 — WARDROBE</span>
                <h3 className="font-serif text-xl text-[#222222] font-medium">Bespoke Curation</h3>
                <p className="text-xs text-[#222222]/70 font-sans mt-2 leading-relaxed">
                  Discover pieces selected specifically for your measurements, proportions, colour palette and style.
                </p>
              </div>

              {/* Capsule Preview Box */}
              <div className="bg-white rounded-xl border border-[#222222]/10 p-4 font-mono text-[11px] space-y-2">
                <span className="text-[10px] text-[#5E6A4B] font-semibold block uppercase">WARDROBE HARMONY</span>
                <div className="flex items-center gap-2 text-xs">
                  <Check className="w-3.5 h-3.5 text-[#5E6A4B]" />
                  <span>Custom Shoulder & Sleeve</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className="w-3.5 h-3.5 text-[#5E6A4B]" />
                  <span>Exact Waist-to-Hip Curve</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className="w-3.5 h-3.5 text-[#5E6A4B]" />
                  <span>True Ankle Hem Break</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Check className="w-3.5 h-3.5 text-[#5E6A4B]" />
                  <span>Synchronized Colour Story</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('wardrobe')}
                className="w-full py-3 bg-[#222222] text-[#F7F3ED] rounded-xl text-xs font-mono uppercase tracking-wider hover:bg-[#141414] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>BUILD MY WARDROBE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 7: PERSONALISED WARDROBE PREVIEW
          "Your wardrobe, your way."
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#5E6A4B] font-semibold block mb-2">
                SHOWSTOPPER COLLECTION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] tracking-tight">
                Your wardrobe, your way.
              </h2>
              <p className="text-sm font-sans text-[#222222]/70 mt-2 max-w-xl">
                Every recommendation is selected using your fit profile, colour palette and style preferences.
              </p>
            </div>

            <button
              onClick={() => onNavigate('wardrobe')}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#222222] hover:text-[#5E6A4B] font-semibold group self-start sm:self-end"
            >
              <span>View Full Wardrobe ({PRODUCTS.length} Pieces)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-[#222222]/10 overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div 
                  className="relative aspect-[3/4] overflow-hidden bg-[#EFE9DF] cursor-pointer"
                  onClick={() => onOpenProduct(item)}
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Custom Fit Badge */}
                  <div className="absolute top-4 left-4 bg-[#222222]/85 text-[#F7F3ED] text-[10px] font-mono px-3 py-1 rounded-full backdrop-blur-sm">
                    YOUR FIT: CUSTOM
                  </div>

                  <div className="absolute top-4 right-4 bg-[#FAF8F5]/90 text-[#5E6A4B] text-[10px] font-mono font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {item.fitConfidence}% MATCH
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <h3 
                        onClick={() => onOpenProduct(item)}
                        className="font-serif text-xl font-normal text-[#222222] group-hover:text-[#5E6A4B] transition-colors cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      <span className="font-mono text-sm font-semibold text-[#222222]">
                        ₹{item.price.toLocaleString()}
                      </span>
                    </div>

                    {/* Biometric Checkmarks */}
                    <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-[#5E6A4B]">
                      {item.customCheckmarks.map((chk, i) => (
                        <span key={i} className="bg-[#A8B5A0]/15 px-2 py-0.5 rounded">
                          {chk}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-[#222222]/70 font-sans leading-relaxed pt-2">
                      <strong className="text-[#222222] font-medium">Recommended because:</strong> {item.recommendationReason}
                    </p>
                  </div>

                  {/* Palette and Action */}
                  <div className="pt-4 border-t border-[#222222]/10 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#222222]/60">
                      <span>Available in your palette:</span>
                      <div className="flex -space-x-1">
                        {item.availableColors.slice(0, 4).map((c, idx) => (
                          <span
                            key={idx}
                            className="w-3.5 h-3.5 rounded-full border border-white"
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenProduct(item)}
                      className="w-full py-3 bg-[#FAF8F5] hover:bg-[#222222] text-[#222222] hover:text-[#F7F3ED] border border-[#222222]/15 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>CUSTOMISE & VIEW SPEC</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 9: YOUR BIGGEST USP
          No more "Will this fit me?"
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#222222] text-[#F7F3ED] rounded-3xl p-8 sm:p-16 relative overflow-hidden shadow-elevated">
          {/* Subtle decorative background ring */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase text-[#A8B5A0] font-semibold block">
                THE ULTIMATE USP
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F7F3ED] tracking-tight leading-tight">
                No more <span className="italic">"Will this fit me?"</span>
              </h2>

              <div className="space-y-4 text-sm font-sans text-[#F7F3ED]/80 leading-relaxed">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono uppercase text-[#D8B8B5] block">Traditional online shopping:</span>
                  <p className="font-serif italic text-base text-[#F7F3ED]/90">
                    "I'm usually a medium... I think? But in Zara I'm large, and in H&M I'm small..."
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#A8B5A0]/20 border border-[#A8B5A0]/40 space-y-1">
                  <span className="text-[11px] font-mono uppercase text-[#A8B5A0] block font-bold">IN-BETWEEN:</span>
                  <p className="font-serif text-base font-medium text-[#F7F3ED]">
                    "We've got your measurements. Every seam is cut directly for your body."
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('find-fit')}
                  className="px-8 py-4 bg-[#F7F3ED] hover:bg-white text-[#222222] rounded-xl font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-soft flex items-center gap-3"
                >
                  <span>LOCK IN YOUR MEASUREMENTS</span>
                  <ArrowRight className="w-4 h-4 text-[#5E6A4B]" />
                </button>
              </div>
            </div>

            {/* Visual sizing chart comparison */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAF7F2]/10 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-6">
                
                {/* Traditional XS - XL */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#F7F3ED]/60 uppercase tracking-wider block">
                    Standard Sizing (Generic Categories)
                  </span>
                  <div className="grid grid-cols-5 gap-2 text-center font-mono text-xs">
                    {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
                      <div key={s} className="py-2.5 bg-white/5 border border-white/10 rounded-lg text-[#F7F3ED]/60 line-through">
                        {s}
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#D8B8B5] block pt-1">
                    ✕ Assumes everyone shares the exact same shoulder-to-waist ratio
                  </span>
                </div>

                <div className="w-full h-px bg-white/10 my-4" />

                {/* IN-BETWEEN Sizing */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#A8B5A0] uppercase tracking-wider block font-bold">
                    IN-BETWEEN Sizing (Your Coordinates)
                  </span>
                  <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                    <div className="p-2.5 bg-[#A8B5A0]/20 border border-[#A8B5A0]/40 rounded-lg text-center">
                      <span className="text-[9px] text-[#A8B5A0] block">WAIST</span>
                      <span className="font-bold text-[#F7F3ED]">{userProfile.measurements.waist} cm</span>
                    </div>
                    <div className="p-2.5 bg-[#A8B5A0]/20 border border-[#A8B5A0]/40 rounded-lg text-center">
                      <span className="text-[9px] text-[#A8B5A0] block">HIP</span>
                      <span className="font-bold text-[#F7F3ED]">{userProfile.measurements.hip} cm</span>
                    </div>
                    <div className="p-2.5 bg-[#A8B5A0]/20 border border-[#A8B5A0]/40 rounded-lg text-center">
                      <span className="text-[9px] text-[#A8B5A0] block">INSEAM</span>
                      <span className="font-bold text-[#F7F3ED]">{userProfile.measurements.inseam} cm</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#A8B5A0] block pt-1">
                    ✓ 0cm back gapping • Tailored break • 100% Guaranteed fit
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 10: "WHY IN-BETWEEN?"
          Three cards: PRECISION, PERSONALISATION, CONFIDENCE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#5E6A4B] font-semibold block">
              THE PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] tracking-tight">
              Why IN-BETWEEN?
            </h2>
            <p className="text-sm font-sans text-[#222222]/70">
              Built at the intersection of haute couture bespoke tailoring and computational pattern architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-8 hover:bg-white hover:shadow-elevated transition-all duration-300 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-light text-[#5E6A4B]">{item.number}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A8B5A0]/20 text-[#5E6A4B] uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#222222] tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-[#222222]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#222222]/10 flex items-center gap-2 text-xs font-mono text-[#5E6A4B]">
                  <Check className="w-4 h-4" />
                  <span>Guaranteed on every order</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION 11: BRAND PHILOSOPHY
          "Because people don't exist in standard sizes."
          ======================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#FAF8F5] border border-[#222222]/15 rounded-3xl p-10 sm:p-20 shadow-soft space-y-8 relative overflow-hidden">
          
          <div className="w-12 h-12 mx-auto rounded-full bg-[#222222] text-[#F7F3ED] flex items-center justify-center font-serif text-xl">
            IB
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5E6A4B] block">
              OUR MANIFESTO
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] leading-snug">
              Because people don't exist in standard sizes.
            </h2>
          </div>

          <div className="max-w-xl mx-auto space-y-3 font-serif text-xl sm:text-2xl text-[#222222]/85 italic leading-relaxed">
            <p>You're not an XS or an S.</p>
            <p>You're not a 6 or an 8.</p>
            <p className="font-normal not-italic text-[#5E6A4B] font-serif text-2xl sm:text-3xl">
              You're somewhere in-between.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('find-fit')}
              className="px-10 py-4 bg-[#222222] hover:bg-[#141414] text-[#F7F3ED] rounded-xl font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-soft hover:shadow-elevated inline-flex items-center gap-3"
            >
              <span>BEGIN YOUR BESPOKE PROFILE</span>
              <ArrowRight className="w-4 h-4 text-[#A8B5A0]" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
