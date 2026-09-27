import React, { useState } from 'react';
import { Heart, ShoppingBag, User, Menu, X, Sparkles, Check } from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  cartCount, 
  onOpenCart, 
  onOpenProfile, 
  wishlistCount, 
  userProfile 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'find-fit', label: 'Find Your Fit', highlight: !userProfile.isConfigured },
    { id: 'colour-analysis', label: 'Colour Analysis' },
    { id: 'wardrobe', label: 'My Wardrobe', badge: 'Personalised' },
    { id: 'shop', label: 'Shop' },
    { id: 'about', label: 'About IN-BETWEEN' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F3ED]/90 backdrop-blur-md border-b border-[#222222]/10 transition-all duration-300">
      {/* Top Editorial Ticker Bar */}
      <div className="bg-[#222222] text-[#F7F3ED] text-[11px] tracking-widest uppercase py-1.5 px-4 text-center font-mono flex items-center justify-center gap-3 overflow-hidden">
        <span className="hidden sm:inline opacity-60">FASHION-TECH INNOVATION</span>
        <span className="hidden sm:inline opacity-30">•</span>
        <span>CLOTHES THAT FIT YOU. NOT THE OTHER WAY AROUND.</span>
        <span className="hidden md:inline opacity-30">•</span>
        <span className="hidden md:inline text-[#A8B5A0]">ZERO SIZE CHARTS. 100% BESPOKE FIT.</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Monogram / Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left focus:outline-none"
          >
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.2em] font-light text-[#222222] group-hover:text-[#5E6A4B] transition-colors block">
              IN—BETWEEN
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#222222]/60 uppercase block -mt-1">
              Bespoke Fit • Colour • Proportions
            </span>
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-200 rounded-full flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#222222] bg-[#222222]/5 font-semibold'
                    : 'text-[#222222]/70 hover:text-[#222222] hover:bg-[#222222]/5'
                }`}
              >
                {item.label}
                {item.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8B5A0] animate-ping" />
                )}
                {item.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#A8B5A0]/20 text-[#5E6A4B] font-normal lowercase">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#222222] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (Wishlist, Bag, Profile) */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Fit Status Quick Pill */}
          <button
            onClick={() => handleNavClick('find-fit')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full border border-[#222222]/15 bg-[#FAF8F5] hover:border-[#222222] transition-colors"
            title="Your biometric fit status"
          >
            {userProfile.isConfigured ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#5E6A4B]" />
                <span className="text-[#222222]">Fit Profile: <strong className="font-semibold">{userProfile.fitPreference}</strong></span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-[#A8B5A0]" />
                <span className="text-[#222222]/80">Configure Fit</span>
              </>
            )}
          </button>

          {/* Wishlist Icon */}
          <button
            onClick={() => handleNavClick('wardrobe')}
            className="relative p-2 text-[#222222]/80 hover:text-[#222222] transition-colors"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5 stroke-[1.5]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#D8B8B5] text-[#222222] text-[10px] font-mono font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag Icon */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#222222]/80 hover:text-[#222222] transition-colors group flex items-center gap-1.5"
            aria-label="Shopping Bag"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 stroke-[1.5] group-hover:scale-105 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 min-w-4 h-4 px-1 rounded-full bg-[#222222] text-[#F7F3ED] text-[10px] font-mono font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden xl:inline text-xs font-mono uppercase tracking-wider">Bag</span>
          </button>

          {/* Profile Icon */}
          <button
            onClick={onOpenProfile}
            className="p-2 text-[#222222]/80 hover:text-[#222222] transition-colors relative"
            aria-label="Profile"
          >
            <User className="w-5 h-5 stroke-[1.5]" />
            {userProfile.isConfigured && (
              <span className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-[#A8B5A0] ring-2 ring-[#F7F3ED]" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#222222]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F3ED] border-b border-[#222222]/10 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm uppercase tracking-wider py-2 font-medium flex items-center justify-between ${
                  activeTab === item.id ? 'text-[#222222] font-bold border-l-2 border-[#222222] pl-3' : 'text-[#222222]/70 pl-2'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#A8B5A0]/20 text-[#5E6A4B]">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#222222]/10 flex items-center justify-between text-xs font-mono">
            <span className="text-[#222222]/60">Status: {userProfile.isConfigured ? 'Fit Profile Active' : 'Unconfigured'}</span>
            <button
              onClick={() => handleNavClick('find-fit')}
              className="text-[#222222] font-semibold underline underline-offset-4"
            >
              Update Measurements →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
