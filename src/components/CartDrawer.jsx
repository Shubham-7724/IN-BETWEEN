import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const bespokeDraftingFee = 0; // Complimentary

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#A8B5A0', '#D8B8B5', '#D8CBB8', '#222222', '#FAF7F2'],
      });
    }, 1500);
  };

  const handleResetOrder = () => {
    setOrderComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#222222]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F3ED] shadow-elevated border-l border-[#222222]/15 flex flex-col justify-between text-[#222222]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#222222]/10 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-normal text-[#222222]">Your Shopping Bag</h2>
              <p className="text-xs font-mono text-[#222222]/60 mt-0.5">
                {cartItems.length} {cartItems.length === 1 ? 'custom garment' : 'custom garments'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#222222]/70 hover:text-[#222222] transition-colors rounded-full hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderComplete ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#A8B5A0]/20 text-[#5E6A4B] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl text-[#222222]">Order Confirmed</h3>
                <p className="text-xs font-mono text-[#222222]/70 max-w-xs mx-auto leading-relaxed">
                  Your biometric measurements have been queued in our parametric pattern studio. Crafting begins shortly.
                </p>
                <div className="bg-white border border-[#222222]/10 rounded-xl p-4 text-left font-mono text-[11px] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#222222]/60">Pattern Protocol:</span>
                    <span className="font-bold">IB-BESPOKE-2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#222222]/60">Estimated Crafting:</span>
                    <span>4-6 Working Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#222222]/60">Fit Assurance:</span>
                    <span className="text-[#5E6A4B]">100% Free Resizing</span>
                  </div>
                </div>
                <button
                  onClick={handleResetOrder}
                  className="mt-6 w-full py-3 bg-[#222222] text-[#F7F3ED] rounded-xl text-xs font-mono uppercase tracking-wider hover:bg-[#141414] transition-all"
                >
                  Continue Browsing
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#222222]/5 mx-auto flex items-center justify-center text-[#222222]/40">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="font-serif text-xl text-[#222222]">Your bag is empty</p>
                <p className="text-xs text-[#222222]/60 font-sans max-w-xs mx-auto">
                  Browse our collection of garments tailored directly to your measurements and proportions.
                </p>
              </div>
            ) : (
              <div className="space-y-4 divide-y divide-[#222222]/10">
                {cartItems.map((item, index) => (
                  <div key={index} className="pt-4 first:pt-0 flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded-lg bg-[#EFE9DF] border border-[#222222]/10 flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-medium text-[#222222]">{item.name}</h4>
                          <button
                            onClick={() => onRemoveItem(index)}
                            className="text-[#222222]/40 hover:text-[#5C1D24] p-1 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] font-mono text-[#5E6A4B] mt-0.5">
                          Fit: {item.selectedFitPreference?.toUpperCase() || 'CUSTOM'}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="w-3 h-3 rounded-full border border-black/20"
                            style={{ backgroundColor: item.selectedColor?.hex || '#222' }}
                          />
                          <span className="text-[11px] text-[#222222]/70 font-sans">
                            {item.selectedColor?.name}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-[#222222]/20 rounded-md bg-white">
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs hover:bg-[#222222]/5"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-mono">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs hover:bg-[#222222]/5"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-mono text-xs font-semibold text-[#222222]">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout Summary */}
          {!orderComplete && cartItems.length > 0 && (
            <div className="p-6 border-t border-[#222222]/10 bg-[#FAF8F5] space-y-4">
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between text-[#222222]/70">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#222222]/70">
                  <span>Parametric Pattern Drafting</span>
                  <span className="text-[#5E6A4B] font-semibold">FREE (Bespoke Included)</span>
                </div>
                <div className="flex justify-between text-[#222222]/70">
                  <span>Shipping</span>
                  <span className="text-[#5E6A4B] font-semibold">FREE</span>
                </div>
                <div className="border-t border-[#222222]/10 pt-2 flex justify-between text-sm font-semibold text-[#222222]">
                  <span>Total</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-[#A8B5A0]/15 border border-[#A8B5A0]/40 rounded-lg p-3 flex items-center gap-2.5 text-[11px] text-[#222222]/80">
                <ShieldCheck className="w-4 h-4 flex-shrink-0 text-[#5E6A4B]" />
                <span>Zero-Return Guarantee: If the fit isn't flawless, we adjust or remake it free.</span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-4 bg-[#222222] hover:bg-[#141414] text-[#F7F3ED] rounded-xl text-xs font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <span>GENERATING CUT PATTERNS...</span>
                ) : (
                  <>
                    <span>CHECKOUT WITH BESPOKE FIT</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
