import React, { useState } from 'react';

export default function BodyModelVisualizer({ 
  measurements, 
  activeField = null, 
  onFieldClick = () => {},
  fitPreference = 'regular',
  interactive = true 
}) {
  const [hoveredField, setHoveredField] = useState(null);

  const active = activeField || hoveredField;

  // Visual scaling helpers based on normalized measurements
  // Base standards: height 168, shoulder 41, bust 88, waist 70, hip 96, inseam 74
  const shoulderWidth = Math.max(120, Math.min(220, (measurements.shoulder || 41) * 3.6));
  const bustWidth = Math.max(100, Math.min(190, (measurements.bust || 88) * 1.55));
  const waistWidth = Math.max(70, Math.min(150, (measurements.waist || 70) * 1.4));
  const hipWidth = Math.max(110, Math.min(200, (measurements.hip || 96) * 1.6));
  
  // Height & inseam relative ratios
  const totalHeight = measurements.height || 168;
  const inseam = measurements.inseam || 74;
  const legRatio = Math.min(0.55, Math.max(0.42, inseam / totalHeight));

  const easeLabels = {
    relaxed: '+4cm fluidity ease',
    regular: '+2cm standard ease',
    fitted: '+0.5cm contour ease',
    oversized: '+7cm architectural ease',
  };

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#F7F3ED] border border-[#222222]/10 rounded-2xl p-6 flex flex-col items-center justify-between shadow-soft overflow-hidden select-none">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Top Header Badge */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs tracking-widest uppercase border-b border-[#222222]/10 pb-3">
        <span className="font-mono text-[#222222]/70 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A8B5A0] animate-pulse"></span>
          BIOMETRIC FIT PROFILE
        </span>
        <span className="font-mono text-[#222222]/60">
          {fitPreference.toUpperCase()} ({easeLabels[fitPreference] || '+2cm ease'})
        </span>
      </div>

      {/* Silhouette & Caliper Measurement Graphic */}
      <div className="relative w-full flex-1 flex items-center justify-center py-2">
        <svg
          viewBox="0 0 320 440"
          className="w-full h-full max-h-[380px] drop-shadow-sm transition-all duration-500"
        >
          <defs>
            <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#222222" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#222222" stopOpacity="0.14" />
            </linearGradient>
            <linearGradient id="activeCaliperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A8B5A0" />
              <stop offset="50%" stopColor="#222222" />
              <stop offset="100%" stopColor="#A8B5A0" />
            </linearGradient>
          </defs>

          {/* Minimalist Editorial Body Contour */}
          {/* Head & Neck */}
          <path
            d="M 152 42 C 152 30 168 30 168 42 C 168 55 152 55 152 42 Z"
            fill="none"
            stroke="#222222"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <path
            d="M 156 55 L 156 70 M 164 55 L 164 70"
            stroke="#222222"
            strokeWidth="1.2"
            strokeOpacity="0.3"
          />

          {/* Torso Contour dynamically reacting to measurements */}
          {/* Shoulder points: 160 - shoulderWidth/2 to 160 + shoulderWidth/2 */}
          <path
            d={`
              M 156 70 
              C 140 73 ${160 - shoulderWidth * 0.45} 80 ${160 - shoulderWidth * 0.5} 90
              C ${160 - bustWidth * 0.52} 125 ${160 - waistWidth * 0.5} 165 ${160 - waistWidth * 0.45} 185
              C ${160 - waistWidth * 0.4} 200 ${160 - hipWidth * 0.5} 220 ${160 - hipWidth * 0.48} 250
              L ${160 - 30} 385
              L ${160 - 10} 385
              L 157 265
              L 163 265
              L 170 385
              L 190 385
              L ${160 + hipWidth * 0.48} 250
              C ${160 + hipWidth * 0.5} 220 ${160 + waistWidth * 0.4} 200 ${160 + waistWidth * 0.45} 185
              C ${160 + waistWidth * 0.5} 165 ${160 + bustWidth * 0.52} 125 ${160 + shoulderWidth * 0.5} 90
              C ${160 + shoulderWidth * 0.45} 80 180 73 164 70
              Z
            `}
            fill="url(#silhouetteGrad)"
            stroke="#222222"
            strokeWidth="1.5"
            strokeOpacity="0.55"
            className="transition-all duration-300"
          />

          {/* Central Vertical Posture Axis */}
          <line
            x1="160"
            y1="40"
            x2="160"
            y2="395"
            stroke="#222222"
            strokeWidth="0.75"
            strokeDasharray="2 3"
            strokeOpacity="0.25"
          />

          {/* ================= MEASUREMENT CALIPER LINES ================= */}

          {/* 1. SHOULDER CALIPER (y ~ 90) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => interactive && setHoveredField('shoulder')}
            onMouseLeave={() => interactive && setHoveredField(null)}
            onClick={() => onFieldClick('shoulder')}
          >
            <line
              x1={160 - shoulderWidth * 0.5 - 12}
              y1="88"
              x2={160 + shoulderWidth * 0.5 + 12}
              y2="88"
              stroke={active === 'shoulder' ? '#222222' : '#8C9B83'}
              strokeWidth={active === 'shoulder' ? '2' : '1.2'}
              strokeDasharray={active === 'shoulder' ? 'none' : '3 2'}
            />
            {/* Ticks */}
            <line x1={160 - shoulderWidth * 0.5 - 12} y1="82" x2={160 - shoulderWidth * 0.5 - 12} y2="94" stroke="#222222" strokeWidth="1.5" />
            <line x1={160 + shoulderWidth * 0.5 + 12} y1="82" x2={160 + shoulderWidth * 0.5 + 12} y2="94" stroke="#222222" strokeWidth="1.5" />
            {/* Badge */}
            <rect
              x="240"
              y="78"
              width="68"
              height="20"
              rx="4"
              fill={active === 'shoulder' ? '#222222' : '#FFFFFF'}
              stroke="#222222"
              strokeWidth="0.8"
            />
            <text
              x="274"
              y="92"
              textAnchor="middle"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight={active === 'shoulder' ? 'bold' : 'normal'}
              fill={active === 'shoulder' ? '#F7F3ED' : '#222222'}
            >
              SH {measurements.shoulder || 41}cm
            </text>
          </g>

          {/* 2. BUST / CHEST CALIPER (y ~ 135) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => interactive && setHoveredField('bust')}
            onMouseLeave={() => interactive && setHoveredField(null)}
            onClick={() => onFieldClick('bust')}
          >
            <line
              x1={160 - bustWidth * 0.5 - 8}
              y1="135"
              x2={160 + bustWidth * 0.5 + 8}
              y2="135"
              stroke={active === 'bust' ? '#222222' : '#8C9B83'}
              strokeWidth={active === 'bust' ? '2' : '1.2'}
              strokeDasharray={active === 'bust' ? 'none' : '3 2'}
            />
            <line x1={160 - bustWidth * 0.5 - 8} y1="129" x2={160 - bustWidth * 0.5 - 8} y2="141" stroke="#222222" strokeWidth="1.5" />
            <line x1={160 + bustWidth * 0.5 + 8} y1="129" x2={160 + bustWidth * 0.5 + 8} y2="141" stroke="#222222" strokeWidth="1.5" />
            <rect
              x="12"
              y="125"
              width="68"
              height="20"
              rx="4"
              fill={active === 'bust' ? '#222222' : '#FFFFFF'}
              stroke="#222222"
              strokeWidth="0.8"
            />
            <text
              x="46"
              y="139"
              textAnchor="middle"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight={active === 'bust' ? 'bold' : 'normal'}
              fill={active === 'bust' ? '#F7F3ED' : '#222222'}
            >
              CH {measurements.bust || 88}cm
            </text>
          </g>

          {/* 3. WAIST CALIPER (y ~ 185) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => interactive && setHoveredField('waist')}
            onMouseLeave={() => interactive && setHoveredField(null)}
            onClick={() => onFieldClick('waist')}
          >
            <line
              x1={160 - waistWidth * 0.45 - 8}
              y1="185"
              x2={160 + waistWidth * 0.45 + 8}
              y2="185"
              stroke={active === 'waist' ? '#222222' : '#8C9B83'}
              strokeWidth={active === 'waist' ? '2' : '1.2'}
              strokeDasharray={active === 'waist' ? 'none' : '3 2'}
            />
            <line x1={160 - waistWidth * 0.45 - 8} y1="179" x2={160 - waistWidth * 0.45 - 8} y2="191" stroke="#222222" strokeWidth="1.5" />
            <line x1={160 + waistWidth * 0.45 + 8} y1="179" x2={160 + waistWidth * 0.45 + 8} y2="191" stroke="#222222" strokeWidth="1.5" />
            <rect
              x="240"
              y="175"
              width="68"
              height="20"
              rx="4"
              fill={active === 'waist' ? '#222222' : '#FFFFFF'}
              stroke="#222222"
              strokeWidth="0.8"
            />
            <text
              x="274"
              y="189"
              textAnchor="middle"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight={active === 'waist' ? 'bold' : 'normal'}
              fill={active === 'waist' ? '#F7F3ED' : '#222222'}
            >
              W {measurements.waist || 70}cm
            </text>
          </g>

          {/* 4. HIP CALIPER (y ~ 240) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => interactive && setHoveredField('hip')}
            onMouseLeave={() => interactive && setHoveredField(null)}
            onClick={() => onFieldClick('hip')}
          >
            <line
              x1={160 - hipWidth * 0.48 - 6}
              y1="240"
              x2={160 + hipWidth * 0.48 + 6}
              y2="240"
              stroke={active === 'hip' ? '#222222' : '#8C9B83'}
              strokeWidth={active === 'hip' ? '2' : '1.2'}
              strokeDasharray={active === 'hip' ? 'none' : '3 2'}
            />
            <line x1={160 - hipWidth * 0.48 - 6} y1="234" x2={160 - hipWidth * 0.48 - 6} y2="246" stroke="#222222" strokeWidth="1.5" />
            <line x1={160 + hipWidth * 0.48 + 6} y1="234" x2={160 + hipWidth * 0.48 + 6} y2="246" stroke="#222222" strokeWidth="1.5" />
            <rect
              x="12"
              y="230"
              width="68"
              height="20"
              rx="4"
              fill={active === 'hip' ? '#222222' : '#FFFFFF'}
              stroke="#222222"
              strokeWidth="0.8"
            />
            <text
              x="46"
              y="244"
              textAnchor="middle"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight={active === 'hip' ? 'bold' : 'normal'}
              fill={active === 'hip' ? '#F7F3ED' : '#222222'}
            >
              HIP {measurements.hip || 96}cm
            </text>
          </g>

          {/* 5. INSEAM CALIPER (crotch to ankle, y ~ 265 to 385) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => interactive && setHoveredField('inseam')}
            onMouseLeave={() => interactive && setHoveredField(null)}
            onClick={() => onFieldClick('inseam')}
          >
            <line
              x1="135"
              y1="265"
              x2="135"
              y2="385"
              stroke={active === 'inseam' ? '#222222' : '#8C9B83'}
              strokeWidth={active === 'inseam' ? '2' : '1.2'}
              strokeDasharray={active === 'inseam' ? 'none' : '3 2'}
            />
            <line x1="128" y1="265" x2="142" y2="265" stroke="#222222" strokeWidth="1.5" />
            <line x1="128" y1="385" x2="142" y2="385" stroke="#222222" strokeWidth="1.5" />
            <rect
              x="62"
              y="315"
              width="68"
              height="20"
              rx="4"
              fill={active === 'inseam' ? '#222222' : '#FFFFFF'}
              stroke="#222222"
              strokeWidth="0.8"
            />
            <text
              x="96"
              y="329"
              textAnchor="middle"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight={active === 'inseam' ? 'bold' : 'normal'}
              fill={active === 'inseam' ? '#F7F3ED' : '#222222'}
            >
              INS {measurements.inseam || 74}cm
            </text>
          </g>

          {/* 6. TOTAL HEIGHT CALIPER (Right edge vertical line) */}
          <g
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => interactive && setHoveredField('height')}
            onMouseLeave={() => interactive && setHoveredField(null)}
            onClick={() => onFieldClick('height')}
          >
            <line
              x1="305"
              y1="35"
              x2="305"
              y2="390"
              stroke={active === 'height' ? '#222222' : '#222222'}
              strokeWidth={active === 'height' ? '2' : '0.8'}
              strokeOpacity="0.3"
            />
            <line x1="300" y1="35" x2="310" y2="35" stroke="#222222" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="300" y1="390" x2="310" y2="390" stroke="#222222" strokeWidth="1" strokeOpacity="0.4" />
            <text
              x="305"
              y="215"
              textAnchor="middle"
              transform="rotate(90, 305, 215)"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="0.1em"
              fill={active === 'height' ? '#222222' : '#777777'}
            >
              HEIGHT {measurements.height || 168} CM
            </text>
          </g>
        </svg>
      </div>

      {/* Footer Proportions Ratio Bar */}
      <div className="relative z-10 w-full bg-[#FAF8F5] border border-[#222222]/10 rounded-lg p-2.5 flex items-center justify-between text-[11px] font-mono">
        <div>
          <span className="text-[#222222]/50 block text-[9px] uppercase">Waist-Hip Ratio</span>
          <span className="font-semibold text-[#222222]">
            {((measurements.waist || 70) / (measurements.hip || 96)).toFixed(2)}
          </span>
        </div>
        <div className="h-6 w-px bg-[#222222]/10"></div>
        <div>
          <span className="text-[#222222]/50 block text-[9px] uppercase">Legs-Height</span>
          <span className="font-semibold text-[#222222]">
            {Math.round(((measurements.inseam || 74) / (measurements.height || 168)) * 100)}%
          </span>
        </div>
        <div className="h-6 w-px bg-[#222222]/10"></div>
        <div>
          <span className="text-[#222222]/50 block text-[9px] uppercase">Pattern Ease</span>
          <span className="font-semibold text-[#5E6A4B]">
            {easeLabels[fitPreference]?.split(' ')[0] || '+2cm'}
          </span>
        </div>
      </div>
    </div>
  );
}
