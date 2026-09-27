// Mock Data & Initial State for IN-BETWEEN

export const INITIAL_MEASUREMENTS = {
  height: 168,
  shoulder: 41,
  bust: 88,
  waist: 70,
  hip: 96,
  inseam: 74,
};

export const FIT_PREFERENCES = [
  {
    id: 'relaxed',
    title: 'RELAXED',
    subtitle: 'Loose and effortless',
    description: 'Generous drape with comfortable ease around torso and legs without feeling sloppy.',
    easeOffset: '+4 cm ease',
    icon: 'Feather',
  },
  {
    id: 'regular',
    title: 'REGULAR',
    subtitle: 'Balanced and comfortable',
    description: 'Clean proportions following your natural silhouette with ease for daily movement.',
    easeOffset: '+2 cm ease',
    icon: 'SlidersHorizontal',
  },
  {
    id: 'fitted',
    title: 'FITTED',
    subtitle: 'Closer to the body',
    description: 'Contoured directly to your exact dimensions for a sharp, tailored profile.',
    easeOffset: '+0.5 cm ease',
    icon: 'Sparkles',
  },
  {
    id: 'oversized',
    title: 'OVERSIZED',
    subtitle: 'Extra room and volume',
    description: 'Fashion-forward architectural volume with intentional dropped shoulders and flow.',
    easeOffset: '+7 cm ease',
    icon: 'Maximize2',
  },
];

export const BODY_PROPORTIONS = [
  {
    id: 'balanced',
    title: 'Balanced Proportions',
    description: 'Even distribution between torso and leg length. Standard waistline positioning.',
    garmentNote: 'Standard rise, balanced jacket lengths, and harmonious hem breaks.',
  },
  {
    id: 'longer-torso',
    title: 'Longer Torso / Petite Inseam',
    description: 'Naturally elongated upper body with proportionally shorter leg lines.',
    garmentNote: 'We lengthen top hems by +3cm and elevate trouser waistlines to visually extend legs.',
  },
  {
    id: 'shorter-torso',
    title: 'Shorter Torso / Long Legs',
    description: 'Compact upper frame with longer leg-to-height ratio.',
    garmentNote: 'We slightly reduce jacket length to prevent hem overlap and set rise at high waist.',
  },
  {
    id: 'longer-legs',
    title: 'Longer Legs',
    description: 'Higher natural waistline with extended lower-body length.',
    garmentNote: 'Inseam pattern extended with calibrated knee point placement so taper falls accurately.',
  },
  {
    id: 'shorter-legs',
    title: 'Shorter Legs',
    description: 'Lower natural waistline with proportional inseam.',
    garmentNote: 'Trouser hems calibrated to break cleanly at the shoe without fabric pooling.',
  },
];

export const INITIAL_PALETTE = [
  { name: 'Soft Sage', hex: '#A8B5A0', type: 'core', role: 'Tops & Knitwear' },
  { name: 'Dusty Rose', hex: '#D8B8B5', type: 'accent', role: 'Blouses & Accents' },
  { name: 'Warm Ivory', hex: '#F7F3ED', type: 'neutral', role: 'Tops & Tailoring' },
  { name: 'Deep Navy', hex: '#1B2A38', type: 'core', role: 'Trousers & Blazers' },
  { name: 'Burgundy', hex: '#5C1D24', type: 'statement', role: 'Outerwear & Statements' },
  { name: 'Soft Beige', hex: '#D8CBB8', type: 'neutral', role: 'Trousers & Trench' },
  { name: 'Charcoal', hex: '#222222', type: 'core', role: 'Formal & Structural' },
  { name: 'Terracotta', hex: '#C46D54', type: 'statement', role: 'Statement Pieces' },
];

export const COLOR_PROFILES = [
  {
    id: 'warm-autumn',
    name: 'Warm Autumn',
    undertone: 'Warm Golden',
    contrast: 'Medium Contrast',
    paletteSummary: 'Earthy, rich, and naturally warm tones with golden undertones.',
    swatches: [
      { name: 'Soft Sage', hex: '#A8B5A0' },
      { name: 'Terracotta', hex: '#C46D54' },
      { name: 'Warm Ivory', hex: '#FAF7F2' },
      { name: 'Olive Drab', hex: '#5E6A4B' },
      { name: 'Rich Burgundy', hex: '#5C1D24' },
      { name: 'Soft Beige', hex: '#D8CBB8' },
      { name: 'Espresso', hex: '#322822' },
      { name: 'Mustard Gold', hex: '#CCA152' },
    ],
    recommended: {
      tops: ['Warm Ivory', 'Soft Sage', 'Terracotta'],
      bottoms: ['Soft Beige', 'Espresso', 'Olive Drab'],
      statement: ['Rich Burgundy', 'Mustard Gold'],
    },
    samplePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    description: 'Your skin radiates warmth with amber or golden undertones. Earthy pigments highlight your natural bone structure and eyes.'
  },
  {
    id: 'cool-summer',
    name: 'Cool Summer',
    undertone: 'Cool Rosy',
    contrast: 'Soft Contrast',
    paletteSummary: 'Muted, powdery pastels with blue-grey undertones.',
    swatches: [
      { name: 'Dusty Rose', hex: '#D8B8B5' },
      { name: 'Deep Navy', hex: '#1B2A38' },
      { name: 'Pale Slate', hex: '#A4B0BE' },
      { name: 'Chalk White', hex: '#F1F2F6' },
      { name: 'Muted Lavender', hex: '#9C88FF' },
      { name: 'Charcoal', hex: '#2F3542' },
      { name: 'Seafoam', hex: '#7BED9F' },
      { name: 'Plum Grey', hex: '#57606F' },
    ],
    recommended: {
      tops: ['Dusty Rose', 'Chalk White', 'Pale Slate'],
      bottoms: ['Deep Navy', 'Charcoal', 'Plum Grey'],
      statement: ['Muted Lavender', 'Seafoam'],
    },
    samplePhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80',
    description: 'You feature cool, pinkish or blue-gray undertones with gentle, diffused natural lighting. Cool tones make your complexion glow.'
  },
  {
    id: 'neutral-modern',
    name: 'Neutral Minimalist',
    undertone: 'Balanced Neutral',
    contrast: 'High Contrast',
    paletteSummary: 'Sculptural architectural neutrals with sharp monochrome accents.',
    swatches: [
      { name: 'Warm Ivory', hex: '#F7F3ED' },
      { name: 'Charcoal', hex: '#222222' },
      { name: 'Deep Navy', hex: '#1B2A38' },
      { name: 'Soft Sage', hex: '#A8B5A0' },
      { name: 'Dusty Rose', hex: '#D8B8B5' },
      { name: 'Camel Tan', hex: '#C2A382' },
      { name: 'Burgundy', hex: '#5C1D24' },
      { name: 'Silver Frost', hex: '#DFE4EA' },
    ],
    recommended: {
      tops: ['Warm Ivory', 'Dusty Rose', 'Soft Sage'],
      bottoms: ['Charcoal', 'Deep Navy', 'Camel Tan'],
      statement: ['Burgundy', 'Terracotta'],
    },
    samplePhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
    description: 'Your undertone is remarkably balanced between warm and cool, giving you versatile freedom across both spectrums.'
  }
];

export const PRODUCTS = [
  {
    id: 'trouser-01',
    name: 'THE SIGNATURE TROUSER',
    category: 'Trousers',
    price: 2499,
    rating: 4.9,
    reviewsCount: 142,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    ],
    silhouette: 'Tailored Wide-Leg with Fluid Pleat Drape',
    customCheckmarks: ['Waist ✓', 'Hip ✓', 'Inseam ✓', 'Rise ✓'],
    availableColors: [
      { name: 'Soft Beige', hex: '#D8CBB8' },
      { name: 'Deep Navy', hex: '#1B2A38' },
      { name: 'Charcoal', hex: '#222222' },
      { name: 'Soft Sage', hex: '#A8B5A0' },
    ],
    recommendationReason: 'The silhouette complements your proportions and preferred relaxed fit. Crafted with calibrated rise so fabric drapes without tension.',
    fitConfidence: 98,
    measurementsSpec: (user) => [
      { param: 'Waist', userSize: `${user.waist} cm`, garmentSize: `${user.waist + 1} cm`, note: 'Exact anatomical placement' },
      { param: 'Hip', userSize: `${user.hip} cm`, garmentSize: `${user.hip + 4} cm`, note: 'Proportional fluidity ease' },
      { param: 'Inseam', userSize: `${user.inseam} cm`, garmentSize: `${user.inseam} cm`, note: 'Floor-skimming tailored break' },
      { param: 'Rise', userSize: '27 cm', garmentSize: '28 cm', note: 'High natural rise comfort' },
    ],
    fabric: '68% Tencel Lyocell, 30% Sustainable Wool, 2% Elastane',
    story: 'Engineered pattern with zero gaping at the lower back waist. Cut directly from your biometric profile.',
  },
  {
    id: 'shirt-01',
    name: 'THE EVERYDAY SHIRT',
    category: 'Tops',
    price: 1899,
    rating: 4.8,
    reviewsCount: 215,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
    ],
    silhouette: 'Clean Relaxed Oxford Drape with Articulated Sleeve',
    customCheckmarks: ['Shoulder ✓', 'Sleeve ✓', 'Length ✓', 'Bust Ease ✓'],
    availableColors: [
      { name: 'Warm Ivory', hex: '#F7F3ED' },
      { name: 'Soft Sage', hex: '#A8B5A0' },
      { name: 'Deep Navy', hex: '#1B2A38' },
      { name: 'Dusty Rose', hex: '#D8B8B5' },
    ],
    recommendationReason: 'No chest-button gaping. Shoulder seam lands precisely at your shoulder bone with proportional sleeve length.',
    fitConfidence: 99,
    measurementsSpec: (user) => [
      { param: 'Shoulder', userSize: `${user.shoulder} cm`, garmentSize: `${user.shoulder} cm`, note: 'Exact bone alignment' },
      { param: 'Bust / Chest', userSize: `${user.bust} cm`, garmentSize: `${user.bust + 6} cm`, note: 'Natural movement ease' },
      { param: 'Sleeve Length', userSize: '58 cm', garmentSize: '59 cm', note: 'Lands at base of thumb' },
      { param: 'Body Length', userSize: '65 cm', garmentSize: '66 cm', note: 'Calibrated to torso ratio' },
    ],
    fabric: '100% GOTS Organic Long-Staple Cotton Poplin',
    story: 'The bane of standard shirts is collar pulling and chest gaping. IN-BETWEEN calculates button spacing based on your bust apex.',
  },
  {
    id: 'blazer-01',
    name: 'THE STRUCTURED BLAZER',
    category: 'Blazers',
    price: 3999,
    rating: 5.0,
    reviewsCount: 89,
    images: [
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    ],
    silhouette: 'Architectural Soft-Tailored Double Breasted',
    customCheckmarks: ['Shoulder Width ✓', 'Armhole Drop ✓', 'Waist Nip ✓', 'Torso Length ✓'],
    availableColors: [
      { name: 'Charcoal', hex: '#222222' },
      { name: 'Warm Ivory', hex: '#F7F3ED' },
      { name: 'Burgundy', hex: '#5C1D24' },
      { name: 'Terracotta', hex: '#C46D54' },
    ],
    recommendationReason: 'Eliminates back neck collar roll. Proportioned lapel length calibrated to your bust apex and height.',
    fitConfidence: 97,
    measurementsSpec: (user) => [
      { param: 'Shoulder', userSize: `${user.shoulder} cm`, garmentSize: `${user.shoulder + 1} cm`, note: 'Soft natural padding contour' },
      { param: 'Chest', userSize: `${user.bust} cm`, garmentSize: `${user.bust + 8} cm`, note: 'Structured layering ease' },
      { param: 'Waist', userSize: `${user.waist} cm`, garmentSize: `${user.waist + 8} cm`, note: 'Subtle hourglass taper' },
      { param: 'Total Length', userSize: '71 cm', garmentSize: '72 cm', note: 'Hits at mid-hip apex' },
    ],
    fabric: '70% Recycled Italian Wool, 30% Silk lining',
    story: 'Traditional off-the-rack blazers assume broad shoulders if chest is larger. We draft the armhole independently.',
  },
  {
    id: 'dress-01',
    name: 'THE COLUMN MAXI DRESS',
    category: 'Dresses',
    price: 3299,
    rating: 4.9,
    reviewsCount: 76,
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
    ],
    silhouette: 'Minimalist Bias Drape with Custom Floor Drop',
    customCheckmarks: ['Bust Dart ✓', 'Waist Contour ✓', 'Hip Grace ✓', 'Floor Break ✓'],
    availableColors: [
      { name: 'Dusty Rose', hex: '#D8B8B5' },
      { name: 'Deep Navy', hex: '#1B2A38' },
      { name: 'Warm Ivory', hex: '#F7F3ED' },
      { name: 'Burgundy', hex: '#5C1D24' },
    ],
    recommendationReason: 'Bias-cut drape skims the hips without catching or bunching. Hem is calculated to clear your exact shoe height.',
    fitConfidence: 98,
    measurementsSpec: (user) => [
      { param: 'Bust', userSize: `${user.bust} cm`, garmentSize: `${user.bust + 2} cm`, note: 'Custom apex dart placement' },
      { param: 'Waist', userSize: `${user.waist} cm`, garmentSize: `${user.waist + 3} cm`, note: 'Gentle bias skim' },
      { param: 'Hip', userSize: `${user.hip} cm`, garmentSize: `${user.hip + 5} cm`, note: 'Liquid drape silhouette' },
      { param: 'Total Length', userSize: '128 cm', garmentSize: '129 cm', note: 'Calibrated to height & inseam' },
    ],
    fabric: '100% Heavy Mulberry Silk Georgette',
    story: 'Maxi dresses usually drag or show awkward ankles. We cut length dynamically to your measured total height and torso split.',
  },
  {
    id: 'outerwear-01',
    name: 'THE RELAXED TRENCH COAT',
    category: 'Outerwear',
    price: 5499,
    rating: 5.0,
    reviewsCount: 104,
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    ],
    silhouette: 'Modern Storm-Flap Trench with Custom Belt Height',
    customCheckmarks: ['Belt Placement ✓', 'Sleeve Pitch ✓', 'Hem Drop ✓', 'Shoulder Slope ✓'],
    availableColors: [
      { name: 'Soft Beige', hex: '#D8CBB8' },
      { name: 'Olive', hex: '#5E6A4B' },
      { name: 'Charcoal', hex: '#222222' },
    ],
    recommendationReason: 'The belt loops are sewn at your true biological waistline, never uncomfortably low or across your ribs.',
    fitConfidence: 99,
    measurementsSpec: (user) => [
      { param: 'Shoulder', userSize: `${user.shoulder} cm`, garmentSize: `${user.shoulder + 3} cm`, note: 'Raglan drop drape' },
      { param: 'Bust', userSize: `${user.bust} cm`, garmentSize: `${user.bust + 14} cm`, note: 'Oversized outerwear ease' },
      { param: 'Waist Belt', userSize: `${user.waist} cm`, garmentSize: 'Dynamic loop', note: 'True waist position' },
      { param: 'Length', userSize: '108 cm', garmentSize: '110 cm', note: 'Hits just below knee' },
    ],
    fabric: 'Water-resistant Gabardine Cotton with Organic Cupro Lining',
    story: 'Trench coats look frumpy when belt loops sit 4 inches below where you actually cinch. We anchor loops to your exact waist.',
  },
  {
    id: 'trouser-02',
    name: 'THE PLEATED BARREL PANT',
    category: 'Trousers',
    price: 2699,
    rating: 4.8,
    reviewsCount: 68,
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80',
    ],
    silhouette: 'Sculptural Curved Leg with Tapered Cuff',
    customCheckmarks: ['Curve Geometry ✓', 'Waist Fit ✓', 'Inseam Break ✓'],
    availableColors: [
      { name: 'Charcoal', hex: '#222222' },
      { name: 'Soft Sage', hex: '#A8B5A0' },
      { name: 'Warm Ivory', hex: '#F7F3ED' },
    ],
    recommendationReason: 'Curve arc is calculated mathematically along your inseam so the barrel taper lands exactly at your ankle bone.',
    fitConfidence: 96,
    measurementsSpec: (user) => [
      { param: 'Waist', userSize: `${user.waist} cm`, garmentSize: `${user.waist + 1} cm`, note: 'Firm waistband grip' },
      { param: 'Hip', userSize: `${user.hip} cm`, garmentSize: `${user.hip + 8} cm`, note: 'Volumetric curve room' },
      { param: 'Inseam', userSize: `${user.inseam} cm`, garmentSize: `${user.inseam - 2} cm`, note: 'Cropped ankle reveal' },
      { param: 'Cuff Opening', userSize: '36 cm', garmentSize: '38 cm', note: 'Clean tapered silhouette' },
    ],
    fabric: '100% Japanese Heavy Twill Cotton',
    story: 'Barrel pants easily swallow shorter legs or look awkwardly shrunken on tall frames. Our algorithm scales the apex curve.',
  }
];

export const PHILOSOPHY_POINTS = [
  {
    number: '01',
    title: 'PRECISION',
    desc: 'Clothing recommendations generated from your actual 3D dimensions rather than generic letter tags like S, M, or L.',
    badge: 'Zero Guesswork'
  },
  {
    number: '02',
    title: 'PERSONALISATION',
    desc: 'Every garment recommendations balances your body proportions, undertone colour palette, and personal drape preference.',
    badge: 'Unique To You'
  },
  {
    number: '03',
    title: 'CONFIDENCE',
    desc: 'Understand exactly how a piece will hang, cinch, and move on you before a single thread is stitched or dispatched.',
    badge: '98% Fit Match'
  }
];

export const SIZE_CHART_COMPARISON = [
  { brand: 'Traditional Brand A', sizeM: 'Waist: 76-80cm | Hip: 98-102cm', result: 'Loose waist, tight on hips, 60% chance of return' },
  { brand: 'Traditional Brand B', sizeM: 'Waist: 72-75cm | Hip: 94-97cm', result: 'Pinching at waist, requires expensive tailoring' },
  { brand: 'IN-BETWEEN', sizeM: 'Your Exact Measurements (70cm / 96cm)', result: 'Made for your proportions with 0cm gapping' },
];
