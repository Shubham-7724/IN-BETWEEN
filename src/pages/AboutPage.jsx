import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Scissors, 
  TrendingDown, 
  Leaf, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('problem'); // 'problem' | 'technology' | 'philosophy'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      
      {/* Hero Statement */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#222222]/15 bg-[#FAF8F5] text-xs font-mono text-[#5E6A4B]">
          <Sparkles className="w-3.5 h-3.5" />
          FASHION-TECH DISPATCH
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#222222] tracking-tight leading-tight">
          Because people don't exist in standard sizes.
        </h1>

        <div className="font-serif italic text-xl sm:text-2xl text-[#222222]/80 max-w-xl mx-auto space-y-1">
          <p>"You're not an XS or an S.</p>
          <p>You're not a 6 or an 8.</p>
          <p className="not-italic font-normal text-[#5E6A4B] font-serif text-2xl sm:text-3xl">
            You're somewhere in-between."
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#222222]/70 font-sans max-w-2xl mx-auto font-light leading-relaxed pt-2">
          IN-BETWEEN was founded on a simple observation: human anatomy is three-dimensional and infinitely variable, yet the global apparel industry still forces everyone into six arbitrary letters invented eighty years ago.
        </p>
      </div>

      {/* Narrative Section 1: The Sizing Crisis */}
      <section className="bg-[#FAF8F5] border border-[#222222]/10 rounded-3xl p-8 sm:p-14 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-mono tracking-widest uppercase text-[#5C1D24] font-bold">
            THE ROOT OF THE PROBLEM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#222222]">
            Standard sizing was never designed for you.
          </h2>
          <p className="text-sm font-sans text-[#222222]/75 leading-relaxed">
            In the 1940s, standardized sizing was created using statistically biased measurements of a small demographic. When brands grade a garment from Small to Medium, they merely scale all dimensions by an arbitrary 2 inches in all directions.
          </p>
          <p className="text-sm font-sans text-[#222222]/75 leading-relaxed">
            If your waist is narrow but your hips are wide, the waistband gaps. If you have athletic shoulders but a compact chest, buttons pull. If your legs are long but your torso is compact, rises pinch. You end up buying clothes designed for an imaginary average person who does not exist.
          </p>
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
          <div className="bg-white p-6 rounded-2xl border border-[#222222]/10 space-y-2">
            <span className="text-3xl font-serif font-bold text-[#5C1D24]">40%</span>
            <span className="text-xs text-[#222222] font-semibold block uppercase">Online Return Rate</span>
            <p className="text-[11px] font-sans text-[#222222]/60">
              The fashion industry suffers from massive returns, with 70% citing sizing and fit as the reason.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#222222]/10 space-y-2">
            <span className="text-3xl font-serif font-bold text-[#5E6A4B]">&lt; 1.8%</span>
            <span className="text-xs text-[#222222] font-semibold block uppercase">IN-BETWEEN Return Rate</span>
            <p className="text-[11px] font-sans text-[#222222]/60">
              Parametric biometric drafting eliminates guessing, cutting returns by over 95%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#222222]/10 space-y-2 sm:col-span-2">
            <span className="text-3xl font-serif font-bold text-[#222222]">0 Units</span>
            <span className="text-xs text-[#222222] font-semibold block uppercase">Unsold Deadstock Landfill</span>
            <p className="text-[11px] font-sans text-[#222222]/60">
              Because every garment is drafted and laser-cut strictly on-demand, no warehouses of unsold S, M, or L items ever exist.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section 2: Our Technology */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#5E6A4B] font-semibold block">
            HOW WE SOLVED IT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] tracking-tight">
            The IN-BETWEEN Technology Stack
          </h2>
          <p className="text-sm font-sans text-[#222222]/70">
            A proprietary fusion of computational geometry, biometric scanning, and bespoke atelier craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#222222] text-[#F7F3ED] flex items-center justify-center">
              <Cpu className="w-6 h-6 text-[#A8B5A0]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#222222]">
              Parametric Pattern Engine
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#222222]/75 leading-relaxed">
              Instead of static paper patterns, each garment is formulated as a mathematical vector model. Your height, shoulder slope, waist-to-hip ratio, and inseam generate a unique, non-linear cut file in milliseconds.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#222222] text-[#F7F3ED] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#D8B8B5]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#222222]">
              Chromatic Undertone Mapping
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#222222]/75 leading-relaxed">
              Our color engine extracts skin undertones, contrast ratios, and natural pigments from your portrait to recommend shades that flatter rather than wash out your complexion.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#222222] text-[#F7F3ED] flex items-center justify-center">
              <Scissors className="w-6 h-6 text-[#5E6A4B]" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-[#222222]">
              Laser-Guided Atelier Cutting
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#222222]/75 leading-relaxed">
              Digital patterns are dispatched directly to computerized single-ply fabric cutters, ensuring millimeter precision with zero pattern drift and minimal fabric scrap.
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-[#222222] text-[#F7F3ED] rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-elevated">
        <h2 className="font-serif text-3xl sm:text-5xl font-light">
          Ready to experience clothes designed around you?
        </h2>
        <p className="text-sm font-sans text-[#F7F3ED]/75 max-w-xl mx-auto font-light leading-relaxed">
          Create your biometric fit profile in less than 3 minutes. No apps to install, no size charts to decipher.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('find-fit')}
            className="px-8 py-4 bg-[#F7F3ED] hover:bg-white text-[#222222] rounded-xl font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-soft inline-flex items-center gap-3"
          >
            <span>DISCOVER YOUR FIT NOW</span>
            <ArrowRight className="w-4 h-4 text-[#5E6A4B]" />
          </button>
        </div>
      </section>

    </div>
  );
}
