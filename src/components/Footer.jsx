import React, { useState } from 'react';
import { ArrowRight, Check, Heart, Shield, Sparkles } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#222222] text-[#F7F3ED] border-t border-[#F7F3ED]/10 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section: Brand Manifesto Banner */}
        <div className="border-b border-[#F7F3ED]/10 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F3ED] font-light tracking-wide leading-tight">
              Clothes that fit you.<br />
              <span className="italic text-[#A8B5A0]">Not the other way around.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm font-sans text-[#F7F3ED]/70 max-w-md leading-relaxed">
              Standard sizing treats bodies as categories. IN-BETWEEN treats every customer as an individual.
            </p>
          </div>

          <div className="bg-[#FAF7F2]/5 p-6 rounded-2xl border border-[#F7F3ED]/10 space-y-3">
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#A8B5A0] block">
              EDITORIAL DISPATCH & PRIVATE RELEASES
            </span>
            <p className="text-xs text-[#F7F3ED]/80 font-sans">
              Join 18,000+ patrons receiving weekly articles on proportional dressing, color harmony, and new tailored silhouettes.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-[#F7F3ED] placeholder:text-[#F7F3ED]/40 focus:outline-none focus:border-[#A8B5A0] font-sans"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#F7F3ED] text-[#222222] rounded-xl text-xs font-mono uppercase tracking-wider hover:bg-white transition-all font-semibold flex items-center gap-1.5"
              >
                {subscribed ? <Check className="w-4 h-4 text-[#5E6A4B]" /> : <span>Join</span>}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <span className="text-[#A8B5A0] uppercase tracking-widest text-[11px] block mb-4">PLATFORM</span>
            <ul className="space-y-2.5 text-[#F7F3ED]/70">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#F7F3ED] transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('find-fit')} className="hover:text-[#F7F3ED] transition-colors">
                  Find Your Fit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('colour-analysis')} className="hover:text-[#F7F3ED] transition-colors">
                  Colour Analysis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('wardrobe')} className="hover:text-[#F7F3ED] transition-colors">
                  Personalised Wardrobe
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#F7F3ED] transition-colors">
                  Curated Catalog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[#A8B5A0] uppercase tracking-widest text-[11px] block mb-4">INNOVATION</span>
            <ul className="space-y-2.5 text-[#F7F3ED]/70">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F7F3ED] transition-colors">
                  Parametric Pattern Drafting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F7F3ED] transition-colors">
                  Zero Deadstock Ethos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F7F3ED] transition-colors">
                  The Sizing Crisis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F7F3ED] transition-colors">
                  Return Rate Reduction
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[#A8B5A0] uppercase tracking-widest text-[11px] block mb-4">PHILOSOPHY</span>
            <p className="text-xs font-serif italic text-[#F7F3ED]/70 leading-relaxed">
              "You're not an XS or an S. You're not a 6 or an 8. You're somewhere in-between."
            </p>
            <span className="text-[10px] text-[#A8B5A0] block mt-2 font-mono">
              IN-BETWEEN MANIFESTO • 2026
            </span>
          </div>

          <div>
            <span className="text-[#A8B5A0] uppercase tracking-widest text-[11px] block mb-4">GUARANTEE</span>
            <div className="space-y-2 text-[#F7F3ED]/70 text-[11px]">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#A8B5A0]" />
                <span>100% Free Fit Adjustments</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#A8B5A0]" />
                <span>Laser-Guided Precision Cuts</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#D8B8B5]" />
                <span>Zero Standard Size Labels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F7F3ED]/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#F7F3ED]/50 gap-4">
          <div>
            © {new Date().getFullYear()} IN-BETWEEN Fashion-Tech Co. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#F7F3ED] cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-[#F7F3ED] cursor-pointer">Bespoke Terms</span>
            <span className="hover:text-[#F7F3ED] cursor-pointer">Instagram @inbetween.fit</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
