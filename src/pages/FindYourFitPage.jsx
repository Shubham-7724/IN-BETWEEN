import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  HelpCircle, 
  Sparkles, 
  Ruler, 
  RotateCcw,
  Feather,
  SlidersHorizontal,
  Maximize2
} from 'lucide-react';
import BodyModelVisualizer from '../components/BodyModelVisualizer';
import { FIT_PREFERENCES, BODY_PROPORTIONS } from '../data/mockData';

export default function FindYourFitPage({
  userProfile,
  onUpdateMeasurements,
  onUpdateFitPreference,
  onUpdateProportions,
  onNavigate,
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeField, setActiveField] = useState(null);
  const [infoTooltip, setInfoTooltip] = useState(null);

  const measurements = userProfile.measurements;

  const handleInputChange = (field, val) => {
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      onUpdateMeasurements({
        ...measurements,
        [field]: num,
      });
    }
  };

  const measurementFields = [
    {
      id: 'height',
      label: 'Height',
      unit: 'cm',
      min: 140,
      max: 210,
      tip: 'Stand barefoot against a flat wall, measuring from the crown of your head to the floor.',
    },
    {
      id: 'shoulder',
      label: 'Shoulder Width',
      unit: 'cm',
      min: 34,
      max: 56,
      tip: 'From outer shoulder bone edge across the natural curve of your upper back to the opposite bone.',
    },
    {
      id: 'bust',
      label: 'Bust / Chest',
      unit: 'cm',
      min: 70,
      max: 140,
      tip: 'Wrap the tape horizontally around the fullest part of your bust/chest, keeping tape level across shoulder blades.',
    },
    {
      id: 'waist',
      label: 'Natural Waist',
      unit: 'cm',
      min: 55,
      max: 130,
      tip: 'The narrowest circumference between your ribcage and belly button. Relax your stomach naturally.',
    },
    {
      id: 'hip',
      label: 'Hip Circumference',
      unit: 'cm',
      min: 75,
      max: 150,
      tip: 'Around the fullest point of your hips and buttocks, keeping feet together.',
    },
    {
      id: 'inseam',
      label: 'Inseam Length',
      unit: 'cm',
      min: 60,
      max: 95,
      tip: 'From highest point of inner crotch straight down to the ankle bone where trouser hem should graze.',
    },
  ];

  // Quick preset loader for presentations
  const applyPreset = (presetName) => {
    if (presetName === 'petite-balanced') {
      onUpdateMeasurements({ height: 160, shoulder: 38, bust: 82, waist: 64, hip: 90, inseam: 69 });
      onUpdateProportions('balanced');
    } else if (presetName === 'tall-long-legs') {
      onUpdateMeasurements({ height: 178, shoulder: 43, bust: 92, waist: 72, hip: 100, inseam: 84 });
      onUpdateProportions('longer-legs');
    } else if (presetName === 'curvy-short-torso') {
      onUpdateMeasurements({ height: 165, shoulder: 40, bust: 96, waist: 74, hip: 106, inseam: 73 });
      onUpdateProportions('shorter-torso');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#222222]/15 bg-[#FAF8F5] text-xs font-mono text-[#5E6A4B]">
          <Ruler className="w-3.5 h-3.5" />
          PARAMETRIC FIT CONFIGURATOR
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#222222] tracking-tight">
          Let's get to know your fit.
        </h1>

        <p className="text-sm sm:text-lg text-[#222222]/70 font-sans max-w-xl mx-auto font-light leading-relaxed">
          Your body isn't a size. It's a set of measurements, proportions and preferences.
        </p>

        {/* Step Progress Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 pt-4 font-mono text-xs">
          {[
            { step: 1, label: '01 Measurements' },
            { step: 2, label: '02 Fit Preference' },
            { step: 3, label: '03 Proportions' },
          ].map((item) => (
            <button
              key={item.step}
              onClick={() => setCurrentStep(item.step)}
              className={`px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
                currentStep === item.step
                  ? 'bg-[#222222] text-[#F7F3ED] border-[#222222] font-semibold'
                  : currentStep > item.step
                  ? 'bg-[#FAF8F5] text-[#5E6A4B] border-[#5E6A4B]/40'
                  : 'bg-transparent text-[#222222]/50 border-[#222222]/10'
              }`}
            >
              {currentStep > item.step && <Check className="w-3.5 h-3.5" />}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Form on Left, Real-Time Dynamic Silhouette on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Form Container */}
        <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#222222]/10 rounded-3xl p-6 sm:p-10 shadow-soft">
          
          {/* ================= STEP 1: BASIC MEASUREMENTS ================= */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222222]/10 pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#5E6A4B] font-semibold block">
                    STEP 1 OF 3
                  </span>
                  <h2 className="font-serif text-2xl text-[#222222] font-normal">
                    Basic Measurements
                  </h2>
                </div>

                {/* Quick Presets for instant testing */}
                <div className="flex items-center gap-1.5 font-mono text-[10px]">
                  <span className="text-[#222222]/50">Presets:</span>
                  <button
                    onClick={() => applyPreset('petite-balanced')}
                    className="px-2 py-0.5 rounded bg-white border border-[#222222]/10 hover:border-[#222222] text-[#222222]"
                  >
                    Petite
                  </button>
                  <button
                    onClick={() => applyPreset('tall-long-legs')}
                    className="px-2 py-0.5 rounded bg-white border border-[#222222]/10 hover:border-[#222222] text-[#222222]"
                  >
                    Tall
                  </button>
                  <button
                    onClick={() => applyPreset('curvy-short-torso')}
                    className="px-2 py-0.5 rounded bg-white border border-[#222222]/10 hover:border-[#222222] text-[#222222]"
                  >
                    Curvy
                  </button>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {measurementFields.map((field) => (
                  <div
                    key={field.id}
                    onMouseEnter={() => setActiveField(field.id)}
                    onMouseLeave={() => setActiveField(null)}
                    className={`bg-white border rounded-2xl p-4 transition-all ${
                      activeField === field.id
                        ? 'border-[#222222] ring-1 ring-[#222222] shadow-sm'
                        : 'border-[#222222]/10 hover:border-[#222222]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-mono uppercase tracking-wider font-semibold text-[#222222] flex items-center gap-1.5">
                        <span>{field.label}</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setInfoTooltip(infoTooltip === field.id ? null : field.id)}
                        className="text-[#222222]/40 hover:text-[#222222]"
                        title="Measurement instructions"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {infoTooltip === field.id && (
                      <p className="text-[11px] text-[#5E6A4B] font-sans leading-tight bg-[#A8B5A0]/10 p-2 rounded mb-2 border border-[#A8B5A0]/30">
                        {field.tip}
                      </p>
                    )}

                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min={field.min}
                        max={field.max}
                        value={measurements[field.id] || ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                        onFocus={() => setActiveField(field.id)}
                        className="w-full text-xl font-mono font-medium text-[#222222] bg-[#FAF8F5] border border-[#222222]/10 rounded-xl px-3 py-2 focus:outline-none focus:border-[#222222]"
                      />
                      <span className="font-mono text-xs text-[#222222]/50 uppercase">{field.unit}</span>
                    </div>

                    {/* Interactive Range Slider */}
                    <input
                      type="range"
                      min={field.min}
                      max={field.max}
                      value={measurements[field.id] || field.min}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="w-full accent-[#222222] mt-3 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Step Navigation Action */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-8 py-4 bg-[#222222] hover:bg-[#141414] text-[#F7F3ED] rounded-xl font-mono text-xs uppercase tracking-widest transition-all shadow-soft flex items-center gap-2 group"
                >
                  <span>CONTINUE TO FIT PREFERENCE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 2: FIT PREFERENCE ================= */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-[#222222]/10 pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#5E6A4B] font-semibold block">
                  STEP 2 OF 3
                </span>
                <h2 className="font-serif text-2xl text-[#222222] font-normal">
                  How do you like your clothes to fit?
                </h2>
                <p className="text-xs text-[#222222]/70 font-sans mt-1">
                  We adapt the parametric ease calculations across shoulders, waist, and thighs to match your aesthetic comfort.
                </p>
              </div>

              {/* The 4 Cards requested by user: RELAXED, REGULAR, FITTED, OVERSIZED */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FIT_PREFERENCES.map((fit) => {
                  const isSelected = userProfile.fitPreference === fit.id;
                  return (
                    <div
                      key={fit.id}
                      onClick={() => onUpdateFitPreference(fit.id)}
                      className={`cursor-pointer rounded-2xl p-6 border transition-all text-left flex flex-col justify-between space-y-4 ${
                        isSelected
                          ? 'bg-white border-[#222222] ring-2 ring-[#222222] shadow-elevated'
                          : 'bg-white/70 border-[#222222]/10 hover:border-[#222222]/40 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-serif text-xl font-normal text-[#222222] tracking-wide">
                            {fit.title}
                          </h3>
                          <span className="text-xs font-mono text-[#5E6A4B] font-medium block mt-0.5">
                            {fit.subtitle}
                          </span>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'bg-[#222222] border-[#222222] text-[#F7F3ED]'
                              : 'border-[#222222]/20'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      <p className="text-xs text-[#222222]/70 font-sans leading-relaxed">
                        {fit.description}
                      </p>

                      <div className="pt-2 border-t border-[#222222]/10 flex items-center justify-between text-[11px] font-mono text-[#222222]/60">
                        <span>Ease allowance:</span>
                        <span className="font-bold text-[#222222]">{fit.easeOffset}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3.5 bg-transparent text-[#222222] border border-[#222222]/20 hover:bg-[#222222]/5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>BACK</span>
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-8 py-3.5 bg-[#222222] hover:bg-[#141414] text-[#F7F3ED] rounded-xl font-mono text-xs uppercase tracking-widest transition-all shadow-soft flex items-center gap-2 group"
                >
                  <span>CONTINUE TO PROPORTIONS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 3: BODY PROPORTIONS ================= */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-[#222222]/10 pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#5E6A4B] font-semibold block">
                  STEP 3 OF 3
                </span>
                <h2 className="font-serif text-2xl text-[#222222] font-normal">
                  Help us understand how clothes should be proportioned for you.
                </h2>
                <p className="text-xs text-[#222222]/70 font-sans mt-1">
                  Instead of generic sizes, garment architecture hinges on vertical proportions like torso-to-leg balance.
                </p>
              </div>

              {/* Options: Longer torso, Shorter torso, Longer legs, Shorter legs, Balanced proportions */}
              <div className="space-y-3">
                {BODY_PROPORTIONS.map((prop) => {
                  const isSelected = userProfile.proportions === prop.id;
                  return (
                    <div
                      key={prop.id}
                      onClick={() => onUpdateProportions(prop.id)}
                      className={`cursor-pointer rounded-2xl p-5 border transition-all flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'bg-white border-[#222222] ring-2 ring-[#222222] shadow-elevated'
                          : 'bg-white/70 border-[#222222]/10 hover:border-[#222222]/40 hover:bg-white'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif text-lg font-medium text-[#222222]">
                            {prop.title}
                          </h3>
                          {isSelected && (
                            <span className="text-[10px] font-mono bg-[#A8B5A0]/20 text-[#5E6A4B] px-2 py-0.5 rounded font-semibold">
                              SELECTED
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#222222]/70 font-sans">{prop.description}</p>
                        <p className="text-[11px] font-mono text-[#5E6A4B]">
                          <strong>Garment Crafting:</strong> {prop.garmentNote}
                        </p>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#222222] border-[#222222] text-[#F7F3ED]'
                            : 'border-[#222222]/20'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Final Complete Action */}
              <div className="pt-4 flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3.5 bg-transparent text-[#222222] border border-[#222222]/20 hover:bg-[#222222]/5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>BACK</span>
                </button>
                <button
                  onClick={() => onNavigate('wardrobe')}
                  className="px-8 py-4 bg-[#5E6A4B] hover:bg-[#4E5A3D] text-[#F7F3ED] rounded-xl font-mono text-xs uppercase tracking-widest transition-all shadow-soft flex items-center gap-2 font-semibold"
                >
                  <span>SAVE & GENERATE WARDROBE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Right Interactive Caliper Visualizer Column */}
        <div className="lg:col-span-5 sticky top-28 space-y-4">
          <BodyModelVisualizer
            measurements={measurements}
            activeField={activeField}
            onFieldClick={(field) => {
              setCurrentStep(1);
              setActiveField(field);
            }}
            fitPreference={userProfile.fitPreference}
          />

          <div className="bg-[#FAF8F5] border border-[#222222]/10 rounded-2xl p-4 text-xs font-mono text-[#222222]/70 space-y-1.5">
            <div className="flex items-center justify-between text-[#222222] font-semibold">
              <span>REAL-TIME DRAFT STATUS</span>
              <span className="text-[#5E6A4B]">LIVE SYNC</span>
            </div>
            <p className="text-[11px] font-sans leading-relaxed text-[#222222]/60">
              Caliper lines adapt directly as you adjust sliders. These biometric coordinates guide our parametric cutter.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
