import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import ProfileDrawer from './components/ProfileDrawer';

import HomePage from './pages/HomePage';
import FindYourFitPage from './pages/FindYourFitPage';
import ColourAnalysisPage from './pages/ColourAnalysisPage';
import WardrobePage from './pages/WardrobePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';

import { INITIAL_MEASUREMENTS, COLOR_PROFILES, PRODUCTS } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Active User Biometric & Style Profile
  const [userProfile, setUserProfile] = useState({
    measurements: { ...INITIAL_MEASUREMENTS },
    fitPreference: 'regular',
    proportions: 'balanced',
    colourProfile: COLOR_PROFILES[0], // Warm Autumn
    isConfigured: true,
  });

  // Cart State (Initialized with 1 tailored garment to immediately demonstrate technology)
  const [cart, setCart] = useState([
    {
      ...PRODUCTS[0],
      quantity: 1,
      selectedColor: PRODUCTS[0].availableColors[0],
      selectedFitPreference: 'regular',
      tailoredSpecs: PRODUCTS[0].measurementsSpec(INITIAL_MEASUREMENTS),
    },
  ]);

  // Wishlist state
  const [wishlist, setWishlist] = useState(['shirt-01', 'blazer-01']);

  // Modals & Drawers
  const [activeProductModal, setActiveProductModal] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Profile Update Handlers
  const handleUpdateMeasurements = (newMeasurements) => {
    setUserProfile((prev) => ({
      ...prev,
      measurements: newMeasurements,
      isConfigured: true,
    }));
  };

  const handleUpdateFitPreference = (fit) => {
    setUserProfile((prev) => ({
      ...prev,
      fitPreference: fit,
    }));
  };

  const handleUpdateProportions = (prop) => {
    setUserProfile((prev) => ({
      ...prev,
      proportions: prop,
    }));
  };

  const handleUpdateColourProfile = (colourProf) => {
    setUserProfile((prev) => ({
      ...prev,
      colourProfile: colourProf,
    }));
  };

  // Cart Handlers
  const handleAddToCart = (productWithCustoms) => {
    setCart((prev) => {
      // Check if same item with same color & fit exists
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === productWithCustoms.id &&
          item.selectedColor?.name === productWithCustoms.selectedColor?.name &&
          item.selectedFitPreference === productWithCustoms.selectedFitPreference
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { ...productWithCustoms, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist Handler
  const handleToggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F7F3ED] text-[#222222] flex flex-col font-sans selection:bg-[#A8B5A0]/30 selection:text-[#222222]">
      
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        wishlistCount={wishlist.length}
        userProfile={userProfile}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            userProfile={userProfile}
            onOpenProduct={(item) => setActiveProductModal(item)}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'find-fit' && (
          <FindYourFitPage
            userProfile={userProfile}
            onUpdateMeasurements={handleUpdateMeasurements}
            onUpdateFitPreference={handleUpdateFitPreference}
            onUpdateProportions={handleUpdateProportions}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'colour-analysis' && (
          <ColourAnalysisPage
            userProfile={userProfile}
            onUpdateColourProfile={handleUpdateColourProfile}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'wardrobe' && (
          <WardrobePage
            userProfile={userProfile}
            onOpenProduct={(item) => setActiveProductModal(item)}
            onAddToCart={handleAddToCart}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeTab === 'shop' && (
          <ShopPage
            userProfile={userProfile}
            onOpenProduct={(item) => setActiveProductModal(item)}
            onAddToCart={handleAddToCart}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive Product Customisation Modal */}
      {activeProductModal && (
        <ProductModal
          product={activeProductModal}
          userProfile={userProfile}
          onClose={() => setActiveProductModal(null)}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlist.includes(activeProductModal.id)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Slide-over Profile Drawer */}
      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        userProfile={userProfile}
        onNavigateToFit={() => {
          setActiveTab('find-fit');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateToColour={() => {
          setActiveTab('colour-analysis');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
