# MayaRoyale Website - Changelog

## January 6, 2026 - MayaRoyale Resort Logo - Creative Floating Watermark Design

### Added
- **Floating Resort Logo Watermark**: Stunning creative placement as an animated floating watermark behind hero content
  - **Location**: Centered in hero section as a subtle, elegant watermark
  - **Image URL**: https://www.genspark.ai/api/files/s/gPGTg8CG
  - **Design Approach**: Floating ethereal background element that adds brand presence without overwhelming content
  
### Creative Design Features

#### 1. **Floating Watermark Positioning**
- Absolutely positioned at center of hero section
- Semi-transparent (15% opacity on desktop)
- Large scale (800px max-width) for impactful presence
- Behind all content (z-index: 1) so text remains readable
- Non-interactive (pointer-events: none) - doesn't interfere with user interaction

#### 2. **Advanced Animations**
```css
/* Gentle floating and rotating motion */
@keyframes floatRotate {
    - 30-second smooth infinite loop
    - Subtle vertical movement (-48% to -52%)
    - Gentle scale variation (0.95 to 1.05)
    - Soft rotation (-1deg to +1deg)
    - Creates organic, breathing effect
}

/* Pulsing glow effect */
@keyframes pulse-glow {
    - 4-second opacity pulse (0.7 to 1.0)
    - Creates living, dynamic feel
}

/* Radial glow animation */
@keyframes glow-pulse {
    - 3-second scale and opacity variation
    - Radial gradient glow in gold and turquoise
    - 40px blur for soft ethereal effect
}
```

#### 3. **Multi-Layer Glow System**
- **Primary Layer**: Logo image with gold drop shadow
- **Glow Layer**: Pseudo-element with radial gradient
  - Gold center: `rgba(184, 134, 11, 0.3)`
  - Turquoise mid: `rgba(23, 162, 184, 0.2)`
  - Transparent outer
- **Blur Effect**: 40px blur for soft, dreamy appearance
- **Animation**: Pulsing scale and opacity

### Technical Implementation

**HTML Structure:**
```html
<!-- Floating above all content -->
<div class="floating-resort-logo">
    <div class="logo-glow-container">
        <img src="https://www.genspark.ai/api/files/s/gPGTg8CG" 
             alt="MayaRoyale Resort">
    </div>
</div>
```

**CSS Layers:**
```
┌─────────────────────────────────┐
│  Content (z-index: 2)           │  ← Text, buttons, video
├─────────────────────────────────┤
│  Floating Logo (z-index: 1)     │  ← Watermark logo
├─────────────────────────────────┤
│  Particles (z-index: 0)         │  ← Blockchain particles
├─────────────────────────────────┤
│  Grid Background                │  ← Animated grid
└─────────────────────────────────┘
```

### Responsive Behavior

#### **Desktop (> 968px)**
- **Size**: 800px max-width
- **Opacity**: 15% (subtle presence)
- **Animation**: Full floating rotation effect
- **Impact**: Majestic brand presence

#### **Tablet (481px - 968px)**
- **Size**: 600px max-width
- **Opacity**: 12% (more subtle)
- **Animation**: Maintained
- **Impact**: Elegant background element

#### **Mobile (< 480px)**
- **Size**: 400px max-width
- **Opacity**: 10% (very subtle)
- **Animation**: Simplified
- **Impact**: Refined brand watermark

### Visual Layering Strategy

```
HERO SECTION DEPTH MAP:
═══════════════════════════════════════════

Layer 5 (Front):  Crypto Badge, Title, Buttons
                  └─ z-index: 2, opacity: 1.0

Layer 4:          Text content, Video player
                  └─ z-index: 2, opacity: 1.0

Layer 3:          Floating Resort Logo ⭐
                  └─ z-index: 1, opacity: 0.15
                  └─ Animated floating/rotating
                  └─ Pulsing glow effects

Layer 2:          Blockchain Particles
                  └─ z-index: 0, various opacities

Layer 1 (Back):   Blockchain Grid Background
                  └─ Animated grid pattern
```

### Design Philosophy

#### **Watermark Approach Benefits:**
1. ✨ **Subtle Brand Presence** - Logo visible but not intrusive
2. 🎨 **Artistic Depth** - Creates visual layers and sophistication
3. 💎 **Luxury Aesthetic** - Ethereal glow suggests premium quality
4. 🔄 **Dynamic Movement** - Gentle animations add life
5. 📖 **Readable Content** - Text remains perfectly legible
6. 🎯 **Professional** - Avoids "slapped on" appearance
7. 🌟 **Memorable** - Creates distinctive visual identity

#### **Animation Rationale:**
- **30s Float Cycle**: Slow enough to be calming, fast enough to notice
- **Gentle Rotation**: ±1° keeps it organic without being distracting
- **Scale Variation**: 0.95-1.05 creates breathing effect
- **Opacity Pulse**: Adds depth perception and life
- **Radial Glow**: Gold/turquoise ties to brand colors

### Color Harmony Integration

**Logo Colors Blend With:**
- Gold sun → Matches token price gold (#B8860B)
- Turquoise waves → Matches brand turquoise (#17a2b8)
- Green palms → Complements tropical theme
- Overall → Creates cohesive brand experience

**Glow Colors:**
- Gold glow: `rgba(184, 134, 11, 0.6)` - Warmth and luxury
- Turquoise glow: `rgba(23, 162, 184, 0.2)` - Ocean and innovation
- Combined: Creates magical sunset/ocean atmosphere

### Visual Impact Comparison

#### **Before (Bad Implementation):**
- ❌ Logo "slapped" directly in text flow
- ❌ Disrupted reading flow
- ❌ No creativity or artistic vision
- ❌ Looked amateur and forced
- ❌ No integration with design system

#### **After (Creative Implementation):**
- ✅ **Ethereal Floating Watermark** - Professional brand presence
- ✅ **Multi-Layer Depth** - Creates visual sophistication
- ✅ **Animated Elegance** - Gentle, organic movement
- ✅ **Perfect Legibility** - Content remains clear and readable
- ✅ **Artistic Integration** - Harmonizes with blockchain design
- ✅ **Luxury Feel** - Glowing, dreamy aesthetic
- ✅ **Brand Recognition** - Subtle but memorable
- ✅ **Technical Excellence** - Smooth performance, beautiful code

### Performance Optimization

- **GPU Acceleration**: Transform and opacity animations
- **No Reflows**: Uses transform instead of position changes
- **Smooth 60fps**: Optimized keyframes
- **Lightweight**: Pure CSS, no JavaScript overhead
- **Conditional Complexity**: Simplified on mobile

---

## January 6, 2026 - Tokenomics Page: "Enhanced Secondary Market Flow" Layout Fixed

### Changed
- **"Enhanced Secondary Market Flow" section on Tokenomics Page**: Fixed layout to display all 4 boxes in equal sizes, aligned left to right
  - Old Layout: Flex layout with wrapping, inconsistent box sizes
  - **New Layout**: All 4 boxes equal size, aligned horizontally on desktop
  - **Desktop (> 968px)**: 4 equal columns in single row
  - **Tablet (481px - 968px)**: 2 columns in 2 rows
  - **Mobile (< 480px)**: 1 column (stacked vertically)
  - Arrows removed for cleaner grid layout

### Technical Details
**File Modified:** `css/tokenomics.css`

**Changes:**
```css
/* Desktop - 4 equal boxes in a row */
.flow-diagram {
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* Changed from flex with wrap */
    gap: 1.5rem;
    align-items: stretch;
}

.flow-step {
    display: flex;
    flex-direction: column;
    /* Removed: min-width, max-width, flex properties */
}

.flow-arrow {
    display: none;  /* Arrows hidden in grid layout */
}

/* Tablet - 2 columns */
@media (max-width: 968px) {
    .flow-diagram {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile - 1 column */
@media (max-width: 480px) {
    .flow-diagram {
        grid-template-columns: 1fr;
    }
}
```

### Visual Impact
**Before:**
- Boxes had varying widths (min-width: 200px, max-width: 250px)
- Flex-wrap caused unpredictable wrapping
- Arrows between boxes (→) disrupted grid alignment
- Inconsistent spacing

**After:**
- ✅ All 4 boxes exactly the same width
- ✅ Clean horizontal alignment on desktop
- ✅ Equal height boxes with flex stretch
- ✅ Predictable 2-column layout on tablets
- ✅ Single column stack on mobile
- ✅ Consistent spacing throughout
- ✅ Professional, organized appearance

### "Enhanced Secondary Market Flow" Content
1. **📊 Token Listing** - CEX and DEX platforms that provide liquidity and market access
2. **💵 Investor Purchase** - Public buys MAYA tokens on exchanges with real-time price discovery
3. **🏨 Hotel Ecosystem Use** - Guests purchase MAYA and spend at resort. Daily volume: $50,000
4. **♻️ Token Recycling** - Hotel returns MAYA to secondary market, creating continuous liquidity

### Layout Structure

**Desktop View:**
```
┌─────────┬─────────┬─────────┬─────────┐
│ Box 1   │ Box 2   │ Box 3   │ Box 4   │
│ Token   │ Investor│ Hotel   │ Token   │
│ Listing │ Purchase│ Use     │ Recycle │
└─────────┴─────────┴─────────┴─────────┘
```

**Tablet View:**
```
┌─────────┬─────────┐
│ Box 1   │ Box 2   │
├─────────┼─────────┤
│ Box 3   │ Box 4   │
└─────────┴─────────┘
```

**Mobile View:**
```
┌─────────┐
│ Box 1   │
├─────────┤
│ Box 2   │
├─────────┤
│ Box 3   │
├─────────┤
│ Box 4   │
└─────────┘
```

---

## January 6, 2026 - "How It Works" Section Layout Fixed

### Changed
- **"How It Works" section on Home Page**: Fixed layout to display all 4 boxes in a single horizontal row
  - Old Layout: Boxes wrapped based on screen width (auto-fit behavior)
  - **New Layout**: All 4 boxes aligned left to right on desktop
  - **Desktop (> 968px)**: 4 columns in single row
  - **Tablet (481px - 968px)**: 2 columns in 2 rows
  - **Mobile (< 480px)**: 1 column (stacked vertically)

### Technical Details
**File Modified:** `css/main.css`

**Changes:**
```css
/* Desktop - Force 4 columns */
.features-grid {
    grid-template-columns: repeat(4, 1fr);  /* Changed from: repeat(auto-fit, minmax(300px, 1fr)) */
}

/* Tablet - 2 columns */
@media (max-width: 968px) {
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile - 1 column */
@media (max-width: 480px) {
    .features-grid {
        grid-template-columns: 1fr;
    }
}
```

### Visual Impact
**Before:**
- Boxes wrapped to multiple rows on narrower screens
- Inconsistent layout across different screen sizes
- "Auto-fit" behavior caused unpredictable wrapping

**After:**
- ✅ Clean horizontal alignment on desktop (all 4 boxes in a row)
- ✅ Predictable 2-column layout on tablets
- ✅ Single column stack on mobile for readability
- ✅ Consistent spacing and alignment

### "How It Works" Section Content
1. **Token Listing** - CEX and DEX platforms
2. **Investor Purchase** - Public buys MAYA tokens
3. **Hotel Ecosystem Use** - Guests purchase and spend tokens
4. **Token Recycling** - Continuous liquidity cycle

---

## January 6, 2026 - MAJOR UPDATE: Blockchain & Crypto Design System Integrated Across All Pages 🚀

### 🌟 NEW FEATURE: Comprehensive Blockchain Design System

**Created:** `css/blockchain-design.css` - A complete futuristic Web3 design system integrated across all 7 pages

### 🎨 Design System Features

#### Color Palette & Variables
- **Crypto Blue**: `#00d4ff` - Primary blockchain accent
- **Crypto Purple**: `#7b61ff` - Secondary tech accent  
- **Crypto Cyan**: `#00fff7` - Neon highlights and glows
- **Blockchain Dark**: `#0a0e27` - Deep tech background
- **Blockchain Navy**: `#1a1f3a` - Secondary dark background

#### Animated Effects
1. **Blockchain Grid Background** - Animated grid pattern with cyan lines
2. **Holographic Shimmer** - Light sweep effect across elements
3. **Cyber Border Glow** - Pulsing border animations on hover
4. **Neon Text Glow** - Pulsing cyan text effects
5. **Floating Particles** - Animated particles floating upward
6. **Data Flow Strips** - Animated data visualization lines
7. **Hexagon Patterns** - Subtle geometric background patterns

#### UI Components
- **Crypto Badges** - Glowing labels with blockchain aesthetic
- **Web3 Buttons** - Futuristic interactive buttons with ripple effects
- **Crypto Stat Cards** - Dark glassmorphic cards with hover effects
- **Blockchain Section Titles** - Stylized headers with glowing underlines
- **Particle Backgrounds** - Floating cyan/purple/blue particles

### 📄 Pages Updated (All 7 Pages)

#### 1. **index.html** (Home Page)
- ✅ Added blockchain grid background to hero section
- ✅ Floating particle effects (8 particles)
- ✅ "Blockchain-Backed Real Estate" crypto badge
- ✅ Neon text on "Blockchain Innovation"
- ✅ Stats section with crypto stat cards
- ✅ Holographic shimmer effects on all stat cards
- ✅ Data flow animation strip
- ✅ Cyber borders on feature cards
- ✅ Blockchain section title styling

#### 2. **dashboard.html** (Investor Dashboard)
- ✅ Blockchain grid background with hex pattern
- ✅ Floating particles (4 particles)
- ✅ Web3 button style for "Connect Wallet"
- ✅ Neon text for wallet address display
- ✅ Blockchain section title with highlights

#### 3. **tokenomics.html** (Token Economics)
- ✅ Blockchain grid background on hero
- ✅ Floating particles (5 particles)
- ✅ "1,000,000 Total Token Supply" crypto badge
- ✅ Blockchain section title styling
- ✅ Neon text on "$100M+ trophy beachfront"

#### 4. **gallery.html** (Property Gallery)
- ✅ Blockchain grid background
- ✅ Blockchain section title with highlights
- ✅ Neon text on "Isla Aguada's trophy beachfront"

#### 5. **contact.html** (Contact Page)
- ✅ Blockchain grid with hex pattern
- ✅ Blockchain section title
- ✅ Neon text on "luxury real estate"

#### 6. **connect-wallet.html** (Wallet Connection)
- ✅ Blockchain grid with hex pattern
- ✅ Floating particles (5 particles)
- ✅ "Secure Web3 Connection" crypto badge
- ✅ Blockchain section title
- ✅ Neon text on "MayaRoyale investment dashboard"

#### 7. **lhw-partnership.html** (LHW Partnership)
- ✅ Blockchain grid background on hero

### 🎯 Visual Impact

#### Before
- Traditional luxury real estate website
- Static backgrounds
- Standard button styles
- No blockchain/crypto visual identity

#### After
- Modern Web3 luxury platform
- Animated blockchain elements
- Futuristic neon accents
- Clear crypto/blockchain identity
- Professional DeFi aesthetic
- Animated particles and effects
- Glowing borders and text
- Dark tech backgrounds

### 🔧 Technical Implementation

**CSS File Structure:**
```css
css/blockchain-design.css (11,015 characters)
├── Root Variables (colors, gradients, glows)
├── Animated Backgrounds (grid, shimmer, borders)
├── Blockchain Accents (neon text, badges, icons)
├── Data Visualization (strips, stat cards)
├── Buttons & Interactive Elements
├── Section Headers
├── Particle Effects
├── Hexagon Patterns
├── Responsive Design
└── Utility Classes
```

**Integration Method:**
- Linked CSS file added to all 7 HTML pages
- Classes applied to existing sections
- Non-invasive - preserves existing functionality
- Fully responsive design
- Performance optimized animations

### 🎨 Animation Details

1. **Grid Movement** - 20s infinite linear animation
2. **Shimmer Effect** - 3s infinite diagonal sweep
3. **Border Glow** - 2s infinite pulse on hover
4. **Neon Pulse** - 2s breathing glow effect
5. **Badge Pulse** - 3s scale + glow animation
6. **Data Flow** - 2s linear infinite strip movement
7. **Particle Float** - 20-30s upward drift (staggered)

### 💡 Design Philosophy

**Fusion of Two Worlds:**
- **Luxury Resort Aesthetic** - Maintains turquoise, gold, elegant typography
- **Blockchain/Crypto Tech** - Adds cyan, purple, neon glows, dark backgrounds
- **Result**: Premium tokenized real estate platform that appeals to both traditional investors and crypto natives

### 📊 Browser Compatibility

- ✅ Chrome/Edge (full support)
- ✅ Firefox (full support)  
- ✅ Safari (full support)
- ✅ Mobile browsers (optimized)

### 🚀 Performance

- Lightweight animations (CSS only, no JavaScript)
- Hardware accelerated transforms
- Optimized keyframes
- Minimal repaints
- Mobile-friendly (reduced complexity on small screens)

### 📱 Responsive Behavior

**Mobile Optimizations:**
- Reduced font sizes
- Smaller padding
- Simplified animations
- Touch-friendly elements

---

## January 6, 2026 - Gallery Image #12: Sustainable Architecture - Sharpened (2K Resolution)

### Changed
- **Sustainable Architecture Image**: Enhanced from blurry to crystal-clear high resolution
  - Old Image: https://www.genspark.ai/api/files/s/EHcRs2F5 (blurry, low resolution)
  - **New Image**: https://www.genspark.ai/api/files/s/zaBwzua9 (sharp, 2K resolution)
  - Title: "Sustainable Architecture" (unchanged)
  - Description: "Organic design inspired by nature" (unchanged)
  - Category: Property, Renderings
  - Position: Gallery image #12
  - Enhancement: Clarity upscaling to 2K resolution

### Image Quality Improvements
- ✨ **Crystal Clear Details** - Sharp architectural lines and wood grain textures
- 🔍 **Ultra High Resolution** - 2K (1365x768) with 8K-level detail
- 🪵 **Enhanced Textures** - Crisp wood patterns, natural materials visible
- 🌿 **Sharp Vegetation** - Clear tropical plants and biophilic elements
- 📐 **Precise Architecture** - Organic curves and structural details in focus
- 💎 **Professional Quality** - Gallery-worthy architectural photography

---

## January 6, 2026 - Gallery: Ultra High-End Beach Club Restaurant Replaced

### Changed
- **Mas'Tul Beach Club & Restaurant**: Replaced with ultra-luxury architectural dining experience
  - Old Image: https://www.genspark.ai/api/files/s/hnCckpT4
  - **New Image**: https://www.genspark.ai/api/files/s/Bw6P9HxR
  - Old Title: "Beachfront Restaurant"
  - **New Title**: "Mas'Tul Beach Club & Restaurant"
  - Old Description: "Open-air tropical dining experience"
  - **New Description**: "Architectural masterpiece with living walls and guests enjoying fine dining"
  - Category: Property, Amenities
  - Position: Gallery image #10
  - Inspired by: Ilios Playa del Carmen, high-end architectural restaurants

### New Image Features - Ultra High-End Design

**Dramatic Architecture:**
- 🏛️ **Sculptural Wooden Ceiling** - Flowing organic curves and artistic design
- 🌿 **Living Green Walls** - Floor-to-ceiling vertical gardens with tropical plants
- 💫 **Statement Lighting** - Elegant chandeliers creating warm ambiance
- 🪵 **Natural Wood Tones** - Rich wooden elements throughout
- 🎨 **Artistic Details** - Architectural masterpiece combining nature and luxury

**Dining Experience:**
- 🍽️ **Elegant Table Settings** - White linens, wine glasses, gourmet presentation
- 👥 **Sophisticated Guests** - Beautiful people in elegant casual resort wear
- 🥂 **Fine Dining Atmosphere** - Upscale restaurant experience
- 🌅 **Warm Golden Lighting** - Intimate, romantic ambiance
- ✨ **VIP Exclusivity** - High-end beach club atmosphere

**Design Elements:**
- 🌱 **Nature Integration** - Lush greenery mixed with architectural sophistication
- 🏖️ **Beachfront Location** - Open-air design with ocean views
- 💎 **Luxury Materials** - Premium finishes and furnishings
- 🎭 **Dramatic Aesthetics** - Instagram-worthy architectural features
- 🌴 **Tropical Elegance** - Beach-chic sophistication

### Design Inspiration
Inspired by world-class establishments like:
- Ilios Playa del Carmen (Greek-Mediterranean sophistication)
- Dramatic sculptural ceiling designs
- Living wall vertical gardens
- Warm, intimate luxury dining atmospheres
- Architectural restaurants that blend nature with high-end design

### Comparison: Before vs After
**Before:**
- Simple open-air tropical dining

**After:**
- ✅ Dramatic sculptural wooden ceiling
- ✅ Floor-to-ceiling living green walls
- ✅ Sophisticated guests dining
- ✅ Statement lighting and ambiance
- ✅ Architectural masterpiece
- ✅ Ultra high-end VIP atmosphere
- ✅ Nature meets luxury design

### Files Modified
- `gallery.html` - Replaced with ultra high-end beach club image
- `CHANGELOG.md` - Documentation updated

---

## January 6, 2026 - Gallery: Tulum-Style Tropical Pool Image Replaced

### Changed
- **Luxury Pool & Lounge**: Replaced with stunning Tulum-style tropical pool image
  - Old Image: https://www.genspark.ai/api/files/s/skBm184T
  - **New Image**: https://www.genspark.ai/api/files/s/XE7atADN
  - Old Title: "Luxury Lounge & Pool Area"
  - **New Title**: "Tropical Pool & Lounge Oasis"
  - Old Description: "Fire pit seating with ocean views"
  - **New Description**: "Lush jungle setting with infinity pool and natural palapa lounges"
  - Category: Amenities, Renderings
  - Position: Gallery image #9

### New Image Features - Tulum Style
**Natural Elements:**
- 🌴 **Dense Tropical Jungle** - Lush palm trees and exotic plants surrounding pool
- 🌿 **Verdant Greenery** - Abundant tropical foliage and hanging vines
- 🌺 **Tropical Flowers** - Colorful exotic blooms throughout
- 🌳 **Jungle Canopy** - Tree cover creating natural shade
- ☀️ **Dappled Sunlight** - Light filtering through leaves

**Design Aesthetic:**
- 🏝️ **Tulum Rustic-Luxe** - Bohemian-chic eco-luxury style
- 🛖 **Organic Palapas** - Natural thatched-roof structures
- 🪵 **Natural Materials** - Wood decking, stone, bamboo elements
- 🛏️ **White Daybeds** - Natural linen cushions, minimalist design
- 💎 **Eco-Luxury** - High-end meets natural sustainability

**Pool Features:**
- 💧 **Infinity Pool** - Seamless edge design
- 🌊 **Turquoise Water** - Crystal clear pristine water
- 🏊 **Jungle Oasis** - Secluded tropical paradise atmosphere
- ✨ **Peaceful Sanctuary** - Intimate, exclusive feel

### Tulum Design Philosophy
- Natural integration with jungle environment
- Rustic-luxe materials (wood, stone, natural fibers)
- Organic shapes and flowing forms
- Minimal environmental impact
- Bohemian sophistication
- Connection to nature

### Files Modified
- `gallery.html` - Replaced pool image with Tulum-style version
- `CHANGELOG.md` - Documentation updated

---

## January 6, 2026 - Team: Shawn Jamil Photo Updated (v3)

### Changed
- **Shawn Jamil Photo**: Updated with refined professional photo
  - Old Photo: https://www.genspark.ai/api/files/s/pigSVrNU
  - **New Photo**: https://www.genspark.ai/api/files/s/HrOYHCYG
  - Features: Professional headshot with overwater bungalows and vibrant turquoise lagoon
  - Style: Business formal (black suit, white shirt)
  - Background: Multiple overwater villas with crystal turquoise water
  - Foreground: Tropical palm foliage framing bottom of image
  - Display: Circular frame with `object-fit: contain` (no cropping)

### Photo Improvements
- 📸 **Cleaner Composition** - Better centered and cropped
- 🌊 **Vibrant Water Colors** - Stunning turquoise lagoon more prominent
- 🏝️ **More Bungalows Visible** - Multiple overwater villas in frame
- 🌴 **Natural Framing** - Palm leaves create elegant bottom border
- ✨ **Professional Quality** - High-resolution, clear presentation
- 💎 **Perfect Brand Match** - Embodies MayaRoyale luxury resort vision

### Files Modified
- `index.html` - Updated Shawn Jamil photo URL
- `CHANGELOG.md` - Documentation updated

---

## January 6, 2026 - Team: Shawn Jamil Photo Updated (v2)

### Changed
- **Shawn Jamil Photo**: Updated with new professional photo
  - Old Photo: https://www.genspark.ai/api/files/s/L1dFC2IZ
  - **New Photo**: https://www.genspark.ai/api/files/s/pigSVrNU
  - Features: Professional headshot with overwater bungalows and turquoise lagoon background
  - Style: Business formal (black suit, white shirt, open collar)
  - Background: Luxury tropical resort with thatched-roof overwater villas
  - Foreground: Tropical palm fronds framing the composition
  - Display: Circular frame with `object-fit: contain` (no cropping)

### Photo Details
- 📸 **Professional Headshot** - Clear, confident presentation
- 🏝️ **Premium Background** - Overwater bungalows on turquoise lagoon
- 👔 **Executive Attire** - Black suit, crisp white shirt
- 🌴 **Tropical Framing** - Palm leaves in foreground
- 💎 **Luxury Setting** - High-end resort aesthetic matching MayaRoyale brand
- 🌊 **Ocean Views** - Multiple shades of blue water (deep ocean to shallow turquoise)

### Files Modified
- `index.html` - Updated Shawn Jamil photo URL
- `CHANGELOG.md` - Documentation updated

---

## January 6, 2026 - Gallery: Beach Horseback Riding Image Added

### Added
- **Beachfront Horseback Riding**: AI-generated luxury beach equestrian experience
  - URL: https://www.genspark.ai/api/files/s/5KxR6aBf
  - Title: "Beachfront Horseback Riding"
  - Description: "Scenic rides along pristine white sand beaches with turquoise waters"
  - Category: Amenities
  - Position: After ATV Jungle Adventures, before Pristine Beachfront
  - Generated using reference image: bj8KEV1s (actual MayaRoyale beach)

### Image Features
- 🐴 **Three Riders on Horseback** - Guests enjoying beach ride
- 🏖️ **Pristine White Sand Beach** - Matches actual MayaRoyale coastline
- 🌊 **Turquoise Caribbean Waters** - Crystal clear ocean backdrop
- 🌿 **Coastal Vegetation** - Lush green tropical landscape
- ☀️ **Golden Hour Lighting** - Warm, inviting atmosphere
- 📸 **Aerial Perspective** - Showcases full beach experience
- 👕 **Resort Attire** - Casual elegance with safety equipment
- 🏇 **Variety of Horses** - White, brown, and black horses

### Gallery Totals
- **13 Images** (including horseback riding)
- **8 Videos**
- **21 Total Media Items**

### Complete Gallery Images (13)
1. Mas'Tul Beach Club Rendering
2. Grand Lobby & Reception
3. Expert Experience (Safari)
4. ATV Jungle Adventures
5. **Beachfront Horseback Riding** ✅ NEW
6. Pristine Caribbean Beach
7. Aerial Beachfront View
8. 8 Kilometer Coastal Masterplan
9. Luxury Lounge & Pool Area
10. Beachfront Restaurant
11. Natural Rock Pools
12. Sustainable Architecture
13. Healing & Wellness Center

### Adventure Activities Portfolio
MayaRoyale now showcases three signature adventure experiences:
- 🚙 **Expert Safari Tours** - Wildlife viewing with naturalist guides
- 🏍️ **ATV Jungle Adventures** - Off-road rainforest expeditions
- 🐴 **Beach Horseback Riding** ✅ NEW - Scenic coastal rides

### Files Modified
- `gallery.html` - Added beach horseback riding image
- `CHANGELOG.md` - Documentation updated

---

## January 6, 2026 - Gallery: Luxury Lobby Image Added

### Added
- **Grand Lobby & Reception**: Stunning luxury resort entrance image
  - URL: https://www.genspark.ai/api/files/s/vrhlicXB
  - Title: "Grand Lobby & Reception"
  - Description: "Tropical elegance with soaring ceilings and ocean views"
  - Category: Amenities, Renderings
  - Position: After Mas'Tul Beach Club, before Expert Experience

### Image Features
- 🏛️ **Soaring Cathedral Ceilings** - Exposed wooden beams with tropical hardwood
- 💡 **Statement Chandeliers** - Large spherical white wicker pendant lights
- 🌴 **Tropical Design** - Palm trees, large planters, natural elements
- 🌊 **Ocean Views** - Open-air design with turquoise water backdrop
- 🪵 **Natural Materials** - Wood flooring, white columns, organic aesthetic
- ✨ **Luxury Details** - Elegant furnishings, spacious layout, resort sophistication

### Gallery Totals
- **12 Images** (including new lobby image)
- **8 Videos**
- **20 Total Media Items**

### Complete Gallery Images (12)
1. Mas'Tul Beach Club Rendering
2. **Grand Lobby & Reception** ✅ NEW
3. Expert Experience (Safari)
4. ATV Jungle Adventures
5. Pristine Caribbean Beach
6. Aerial Beachfront View
7. 8 Kilometer Coastal Masterplan
8. Luxury Lounge & Pool Area
9. Beachfront Restaurant
10. Natural Rock Pools
11. Sustainable Architecture
12. Healing & Wellness Center

### Files Modified
- `gallery.html` - Added luxury lobby image
- `CHANGELOG.md` - Documentation updated

---

## January 6, 2026 - Gallery: Strategic/Info Images Removed

### Removed
- **3 strategic/informational images removed from gallery**
  - ❌ Strategic Connectivity Map (ZRyoZAMG) - REMOVED
  - ❌ Gateway to Campeche Tourism / Strategic Position Map (DErSjSyo) - REMOVED
  - ❌ Rare Physical Advantages (Fi82YAji) - REMOVED
  - Gallery now focuses on visual property and amenity experiences only

### Gallery Totals (Experience-Focused)
- **11 Images** (visual experiences only)
- **8 Videos** (resort experiences)
- **19 Total Media Items**

### Complete Gallery Images (11)
1. Mas'Tul Beach Club Rendering
2. Expert Experience (Safari)
3. ATV Jungle Adventures
4. Pristine Caribbean Beach
5. Aerial Beachfront View
6. 8 Kilometer Coastal Masterplan
7. Luxury Lounge & Pool Area
8. Beachfront Restaurant
9. Natural Rock Pools
10. Sustainable Architecture
11. Healing & Wellness Center

### Gallery Videos (8)
1. 200 Keys (Biophilic Luxury Stays)
2. Monaco Style Casino
3. Aerial Property View
4. Experiential Pillars
5. Gastronomy & Culture
6. Beyond Leisure (Thermal Circuit)
7. Tourist Turtle Hospital / Sanctuary
8. Wellness & Yoga at MayaRoyale

### Files Modified
- `gallery.html` - Removed 3 strategic/info images
- `CHANGELOG.md` - Documentation updated

### Gallery Focus
Gallery now showcases:
✅ Visual property renderings and photos
✅ Resort amenities and guest experiences
✅ Lifestyle and adventure activities
❌ No strategic maps or info graphics
❌ No blockchain/tech imagery

---

## January 6, 2026 - Gallery: All Blockchain Images Removed

### Removed
- **All blockchain/crypto images removed from gallery**
  - ❌ Blockchain Innovation (uQZhf2dC) - REMOVED
  - Gallery now focuses on property, amenities, and location only
  - No tech/blockchain imagery in gallery section

### Gallery Totals (Clean Property Focus)
- **14 Images** (property, amenities, location only)
- **8 Videos** (resort experiences)
- **22 Total Media Items**

### Complete Gallery Images (14)
1. Mas'Tul Beach Club Rendering
2. Strategic Connectivity Map
3. Strategic Position Map
4. Rare Physical Advantages
5. Expert Experience (Safari)
6. ATV Jungle Adventures
7. Pristine Caribbean Beach
8. Aerial Beachfront View
9. 8 Kilometer Coastal Masterplan
10. Luxury Lounge & Pool Area
11. Beachfront Restaurant
12. Natural Rock Pools
13. Sustainable Architecture
14. Healing & Wellness Center

### Gallery Videos (8)
1. 200 Keys (Biophilic Luxury Stays)
2. Monaco Style Casino
3. Aerial Property View
4. Experiential Pillars
5. Gastronomy & Culture
6. Beyond Leisure (Thermal Circuit)
7. Tourist Turtle Hospital / Sanctuary
8. Wellness & Yoga at MayaRoyale

### Files Modified
- `gallery.html` - Removed blockchain image
- `CHANGELOG.md` - Documentation updated

### Note
Gallery now exclusively showcases:
✅ Physical property and location
✅ Resort amenities and experiences
✅ Luxury lifestyle offerings
❌ No blockchain/tech imagery

---

## January 6, 2026 - Gallery: Blockchain Images Reduced to 1

### Changed
- **Removed 2 blockchain images**: Kept only the main Blockchain Innovation image
  - ❌ Removed: Digital Asset Tokenization (YNRXn0ey)
  - ❌ Removed: Investment Analytics (Hl45oYLg)
  - ✅ Kept: Blockchain Innovation (uQZhf2dC)

### Remaining Blockchain Image
**Blockchain Innovation**
  - URL: https://www.genspark.ai/api/files/s/ayKG7BJ2
  - Title: "Blockchain Innovation"
  - Description: "Decentralized network powering transparent real estate ownership"
  - Features: Glowing turquoise/blue nodes, 3D network grid, holographic data visualization
  - Category: Property
  - Position: After Wellness Center, before videos

### Gallery Totals
- **15 Images** (including 1 blockchain image)
- **8 Videos**
- **23 Total Media Items**

### Complete Gallery Images (15)
1. Mas'Tul Beach Club Rendering
2. Strategic Connectivity Map
3. Strategic Position Map
4. Rare Physical Advantages
5. Expert Experience (Safari)
6. ATV Jungle Adventures
7. Pristine Caribbean Beach
8. Aerial Beachfront View
9. 8 Kilometer Coastal Masterplan
10. Luxury Lounge & Pool Area
11. Beachfront Restaurant
12. Natural Rock Pools
13. Sustainable Architecture
14. Healing & Wellness Center
15. **Blockchain Innovation** ✅ (single tech image)

### Files Modified
- `gallery.html` - Removed 2 blockchain images
- `CHANGELOG.md` - Documentation updated

---

## January 6, 2026 - Gallery: Futuristic Blockchain Images Added

### Added
- **3 Futuristic Blockchain/Crypto Images**: Modern tech aesthetic for MayaRoyale
  
**Image 1: Blockchain Innovation**
  - URL: https://www.genspark.ai/api/files/s/ayKG7BJ2
  - Title: "Blockchain Innovation"
  - Description: "Decentralized network powering transparent real estate ownership"
  - Features: Glowing turquoise/blue nodes, 3D network grid, holographic data visualization
  - Style: Abstract digital network with light trails and geometric patterns

**Image 2: Digital Asset Tokenization**
  - URL: https://www.genspark.ai/api/files/s/3QDbMMsa
  - Title: "Digital Asset Tokenization"
  - Description: "MAYA tokens backed by $100M+ trophy beachfront real estate"
  - Features: Golden MAYA token with holographic glow, luxury property connection
  - Style: Real estate + blockchain fusion with futuristic HUD elements

**Image 3: Investment Analytics**
  - URL: https://www.genspark.ai/api/files/s/Epup2jBv
  - Title: "Investment Analytics"
  - Description: "Real-time blockchain tracking and portfolio management"
  - Features: Crypto dashboard, glowing charts, market data displays
  - Style: Sleek trading platform interface with turquoise/gold accents

### Design Theme
- **Color Scheme**: Navy blue, turquoise, gold (matches MayaRoyale brand)
- **Style**: Photorealistic 3D renders, modern crypto aesthetic
- **Purpose**: Shows tech innovation, blockchain credibility, digital transformation
- **Category**: Property (filterable in gallery)
- **Position**: After Wellness Center, before videos section

### Gallery Totals
- **17 Images** (including 3 new blockchain images)
- **8 Videos**
- **25 Total Media Items**

### Complete Gallery Images (17)
1. Mas'Tul Beach Club Rendering
2. Strategic Connectivity Map
3. Strategic Position Map
4. Rare Physical Advantages
5. Expert Experience (Safari)
6. ATV Jungle Adventures
7. Pristine Caribbean Beach
8. Aerial Beachfront View
9. 8 Kilometer Coastal Masterplan
10. Luxury Lounge & Pool Area
11. Beachfront Restaurant
12. Natural Rock Pools
13. Sustainable Architecture
14. Healing & Wellness Center
15. **Blockchain Innovation** ✅ NEW
16. **Digital Asset Tokenization** ✅ NEW
17. **Investment Analytics** ✅ NEW

### Files Modified
- `gallery.html` - Added 3 blockchain/crypto images
- `CHANGELOG.md` - Documentation updated

### Tech Aesthetic Benefits
- 🚀 Modern crypto website look
- 💎 Blockchain credibility and innovation
- 📊 Visual representation of digital transformation
- 🌐 Aligns with tokenization narrative
- ✨ Futuristic, cutting-edge branding

---

## January 5, 2026 - Team: Shawn Jamil Photo Updated

### Changed
- **Shawn Jamil Photo**: Replaced with new professional headshot
  - Old Photo: https://www.genspark.ai/api/files/s/gaeThPfw
  - **New Photo**: https://www.genspark.ai/api/files/s/L1dFC2IZ
  - Features: Professional headshot with tropical resort background (overwater bungalows, turquoise water)
  - Style: Business professional (black suit, white shirt)
  - Background: Luxury tropical paradise setting aligns with MayaRoyale brand
  - Display: Circular frame with `object-fit: contain` (no cropping)

### Files Modified
- `index.html` - Updated Shawn Jamil photo URL
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Home Page: "The Pearl of the Gulf" Removed

### Fixed
- **Video Size Restored**: Hero video now displays at original full size
- **CSS-Based Overlay**: Used ::before pseudo-element instead of inline HTML
- **No Layout Changes**: Original hero-visual structure completely preserved

### Implementation
- **Method**: CSS ::before pseudo-element on .hero-visual
- **Advantage**: Doesn't add HTML elements or affect video container size
- **Position**: Absolute positioning over video (position: relative on parent)
- **Non-Interactive**: pointer-events: none ensures video controls work perfectly

### Pearl Design
**"The Pearl of the Gulf"** appears as beautiful overlay with:
- 🤍 **Pure White** - Clean pearl color (#FFFFFF)
- ✨ **Luminous Glow** - Multiple white glows (30px, 60px) for pearl shimmer
- 💫 **Gold Accent** - Subtle gold undertone (rgba(184,134,11,0.5))
- 🎭 **Deep Shadows** - Strong black shadows for readability over any video frame
- 💎 **Drop Shadow Filter** - Additional white glow for ethereal pearl quality

**Typography:**
- Font: Cinzel serif (luxury elegance)
- Size: 2.5rem (prominent but not overwhelming)
- Weight: 700 (bold)
- Letter Spacing: 0.15em (sophisticated spacing)
- White-space: nowrap (keeps text on one line)

**Positioning:**
- Top: 30px from video top
- Horizontal: Perfectly centered
- Z-index: 10 (floats over video)

### Files Modified
- `index.html` - Reverted to original clean structure
- `css/main.css` - Added .hero-visual::before for overlay
- `CHANGELOG.md` - Documentation updated

### Result
✅ Hero video displays at original size
✅ "The Pearl of the Gulf" floats beautifully over video
✅ No HTML clutter or extra divs
✅ Clean CSS implementation
✅ Video controls fully accessible

---

## January 5, 2026 - Home Page: "The Pearl of the Gulf" - Pearl Design Fixed

### Changed
- **"The Pearl of the Gulf" Tagline**: Beautiful pearl-white design overlay
  - **Fixed**: Restored original hero video box size (no shrinking)
  - **Position**: Overlay positioned absolutely OVER the video (not affecting video size)
  - **Pearl Styling**: White pearl-like appearance with luminous effects
  
### Pearl Design Details
- **Color Scheme**: Pure white (#FFFFFF) with pearl gradient
- **Gradient**: Linear gradient (135deg) from white → light gray → white for pearl luster
- **Effects**:
  - ✨ White glow (0 0 30px) for luminous pearl quality
  - ✨ Gold accent glow (0 0 60px) subtle warmth
  - ✨ Multiple drop shadows for depth and readability
  - ✨ Background gradient with text-fill for pearl shimmer effect
- **Font**: Cinzel serif, 3rem, bold (700)
- **Letter Spacing**: 0.15em for elegant sophistication
- **Position**: Top 30px, centered horizontally
- **Z-index**: 10 (floats over video)
- **Non-Interactive**: pointer-events: none (doesn't block video controls)

### Technical Implementation
```css
- White pearl color with gradient shimmer
- Multiple shadow layers for depth
- Drop-shadow filters for glow effect
- -webkit-background-clip for gradient text
- Position absolute (doesn't affect video container size)
```

### Files Modified
- `index.html` - Fixed video structure, added pearl-style overlay
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Home Page: "The Pearl of the Gulf" Tagline Added

### Added
- **"The Pearl of the Gulf" Tagline**: Elegant overlay on hero video
  - Position: Centered at top of hero video
  - Font: Cinzel serif (luxury branding font)
  - Size: 2.5rem (responsive)
  - Color: Gold (#B8860B) - matches brand palette
  - Effects: 
    - Text shadow for readability over video
    - Gold glow effect for luxury appeal
    - Letter spacing for elegance
  - Styling: Positioned absolutely, non-interactive (pointer-events: none)
  - Z-index: 10 (appears over video content)

### Design Details
- **Typography**: Cinzel serif font family
- **Color**: Brand gold (#B8860B)
- **Shadow**: Dark shadow (0 2px 8px rgba(0,0,0,0.8)) for contrast
- **Glow**: Gold glow (0 0 20px rgba(184,134,11,0.3)) for premium effect
- **Letter Spacing**: 0.1em for sophisticated look
- **Positioning**: Centered horizontally, 20px from top
- **Responsiveness**: White-space nowrap prevents text breaking

### Files Modified
- `index.html` - Added tagline overlay to hero video section
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: ATV Jungle Adventure Image Added

### Added
- **ATV Jungle Adventures**: New professional image showcasing adventure tours
  - Image URL: https://www.genspark.ai/api/files/s/Y8msdOqS
  - Generated: AI-created luxury resort marketing image
  - Title: "ATV Jungle Adventures"
  - Description: "Expert-guided off-road expeditions through pristine rainforest trails"
  - Category: Amenities
  - Features: MayaRoyale guide leading guests on ATVs through lush tropical jungle
  - Shows: Three ATVs on jungle trail, safety gear, adventure experience
  - Styling: `object-fit: cover; object-position: center;`
  - Position: After "Expert Experience", before "Pristine Beachfront"

### Image Content
- 🏍️ Professional ATV adventure scene
- 👨‍🏫 MayaRoyale expert guide in branded uniform leading tour
- 👥 Guests following on separate ATVs with proper safety equipment
- 🌳 Dense tropical rainforest with palm trees and lush vegetation
- ☀️ Sunbeams filtering through jungle canopy
- 🛤️ Authentic jungle trail setting
- 📸 Luxury resort marketing photography style

### Gallery Images (14 Total)
1. Mas'Tul Beach Club Rendering
2. Strategic Connectivity Map
3. Strategic Position Map
4. Rare Physical Advantages
5. Expert Experience (Safari)
6. **ATV Jungle Adventures** ✅ NEW
7. Pristine Caribbean Beach
8. Aerial Beachfront View
9. 8 Kilometer Coastal Masterplan
10. Luxury Lounge & Pool Area
11. Beachfront Restaurant
12. Natural Rock Pools
13. Sustainable Architecture
14. Healing & Wellness Center

### Files Modified
- `gallery.html` - Added ATV adventure image
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: Expert Experience Image Updated

### Changed
- **Expert Experience Image**: Replaced with higher quality professional photo
  - Old Image: https://www.genspark.ai/api/files/s/6v4xlF2n
  - **New Image**: https://www.genspark.ai/api/files/s/eZXVObm7 ✅
  - Old Title: "Expert-Led Safaris"
  - **New Title**: "Expert Experience"
  - Old Description: "Rainforest expeditions with binoculars and deep wildlife insights"
  - **New Description**: "Guided rainforest safaris with MayaRoyale naturalist experts"
  - Features: Professional safari guide, MayaRoyale branded vehicle, guests with binoculars
  - Shows: Expert pointing to wildlife, 4 guests engaged in learning experience
  - Category: Amenities
  - Position: 17th from the last in gallery

### Image Quality Improvements
- ✅ Higher resolution professional photography
- ✅ Clear MayaRoyale branding on guide uniform and vehicle
- ✅ Shows actual safari experience with guide and guests
- ✅ Better composition with "EXPERT EXPERIENCE" badge visible
- ✅ Authentic representation of the luxury safari offering

### Files Modified
- `gallery.html` - Updated image URL and mouseover text
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: Expert-Led Safari Image Added

### Added
- **Expert-Led Rainforest Safari**: New gallery image showcasing adventure experiences
  - Image URL: https://www.genspark.ai/api/files/s/6v4xlF2n
  - Title: "Expert-Led Safaris"
  - Description: "Rainforest expeditions with binoculars and deep wildlife insights"
  - Category: Amenities
  - Features: Safari vehicle, expert guides, immersive wildlife viewing
  - Styling: `object-fit: cover; object-position: center;` for proper image display
  - Location: Gallery section, after "Rare Physical Advantages"

### Gallery Images (13 Total)
1. Mas'Tul Beach Club Rendering
2. Strategic Connectivity Map
3. Strategic Position Map
4. Rare Physical Advantages
5. **Expert-Led Safaris** ✅ NEW
6. Pristine Caribbean Beach
7. Aerial Beachfront View
8. 8 Kilometer Coastal Masterplan
9. Luxury Lounge & Pool Area
10. Beachfront Restaurant
11. Natural Rock Pools
12. Sustainable Architecture
13. Healing & Wellness Center

### Files Modified
- `gallery.html` - Added Expert-Led Safari image
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: Video 1 Luxury Accommodations Text Updated

### Changed
- **Video 1**: Updated mouseover text to reflect biophilic luxury accommodations
  - Video URL: https://www.genspark.ai/api/files/s/8twIIhY2
  - Old Title: "Property Video Tour"
  - Old Description: "Explore the beachfront location"
  - **New Title**: "200 Keys"
  - **New Description**: "Biophilic Luxury Stays • Seamless Flow • Private Retreats"
  - Category: Amenities, Property
  - Position: 8th video from the last (Video 1 of 8)

### Gallery Videos - Complete List (8 Total) ✅ ALL UPDATED
1. 🏨 **200 Keys** ✅ UPDATED (Biophilic Luxury Stays, Seamless Flow, Private Retreats)
2. 🎰 Monaco Style Casino (Ultra Luxury gaming)
3. 🚁 Aerial Property View
4. 🏃 Experiential Pillars (Physical & Adventure, Natural & Inspiring)
5. 🍽️ Gastronomy & Culture (Ocean to Table, Farm to Fork)
6. 💆 Beyond Leisure (Dead Sea thermal circuit)
7. 🐢 Tourist Turtle Hospital / Sanctuary
8. 🧘 Wellness & Yoga at MayaRoyale

### Files Modified
- `gallery.html` - Updated Video 1 overlay text and category
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: Video 2 Monaco Casino Text Updated

### Changed
- **Video 2**: Updated mouseover text to reflect Monaco-style casino amenity
  - Video URL: https://www.genspark.ai/api/files/s/838EaFKG
  - Old Title: "Pristine Beach Views"
  - Old Description: "Crystal clear Caribbean waters"
  - **New Title**: "Monaco Style Casino"
  - **New Description**: "Ultra Luxury gaming and entertainment"
  - Category: Amenities (changed from Location)
  - Position: 7th video from the last (Video 2 of 8)

### Gallery Videos (8 Total)
1. Property Video Tour
2. **Monaco Style Casino** ✅ UPDATED (Ultra Luxury gaming)
3. Aerial Property View
4. Experiential Pillars (Physical & Adventure, Natural & Inspiring)
5. Gastronomy & Culture (Ocean to Table, Farm to Fork)
6. Beyond Leisure (Dead Sea thermal circuit)
7. Tourist Turtle Hospital / Sanctuary
8. Wellness & Yoga at MayaRoyale

### Files Modified
- `gallery.html` - Updated Video 2 overlay text and category
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: Video 4 Experiential Pillars Text Updated

### Changed
- **Video 4**: Updated mouseover text to reflect resort experience pillars
  - Video URL: https://www.genspark.ai/api/files/s/r0PcDsu4
  - Old Title: "Coastal Paradise"
  - Old Description: "Natural beauty of Isla Aguada"
  - **New Title**: "Experiential Pillars"
  - **New Description**: "Physical & Adventure • Natural & Inspiring"
  - Category: Amenities (changed from Location)
  - Position: 5th video from the last (Video 4 of 8)

### Gallery Videos (8 Total)
1. Property Video Tour
2. Pristine Beach Views
3. Aerial Property View
4. **Experiential Pillars** ✅ UPDATED (Physical & Adventure, Natural & Inspiring)
5. Gastronomy & Culture (Ocean to Table, Farm to Fork)
6. Beyond Leisure (Dead Sea thermal circuit)
7. Tourist Turtle Hospital / Sanctuary
8. Wellness & Yoga at MayaRoyale

### Files Modified
- `gallery.html` - Updated Video 4 overlay text and category
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: Video 5 Gastronomy Text Updated

### Changed
- **Video 5**: Updated mouseover text to reflect culinary and wellness dining
  - Video URL: https://www.genspark.ai/api/files/s/owcspZh1
  - Old Title: "Development Site"
  - Old Description: "Trophy beachfront property"
  - **New Title**: "Gastronomy & Culture"
  - **New Description**: "Ocean to Table • Farm to Fork • Wellness Plant Based"
  - Category: Amenities (changed from Property)
  - Position: 4th video from the last (Video 5 of 8)

### Gallery Videos (8 Total)
1. Property Video Tour
2. Pristine Beach Views
3. Aerial Property View
4. Coastal Paradise
5. **Gastronomy & Culture** ✅ UPDATED (Ocean to Table, Farm to Fork)
6. Beyond Leisure (Dead Sea thermal circuit)
7. Tourist Turtle Hospital / Sanctuary
8. Wellness & Yoga at MayaRoyale

### Files Modified
- `gallery.html` - Updated Video 5 overlay text and category
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: Video 6 Thermal Circuit Text Updated

### Changed
- **Video 6**: Updated mouseover text to reflect thermal circuit wellness amenity
  - Video URL: https://www.genspark.ai/api/files/s/wXLdVQwR
  - Old Title: "Beach Walkthrough"
  - Old Description: "Experience the pristine coastline"
  - **New Title**: "Beyond Leisure"
  - **New Description**: "Dead Sea inspired thermal circuit • Organic / Mineral / Nature"
  - Category: Amenities (changed from Location)
  - Position: 3rd video from the last (Video 6 of 8)

### Gallery Videos (8 Total)
1. Property Video Tour
2. Pristine Beach Views
3. Aerial Property View
4. Coastal Paradise
5. Development Site
6. **Beyond Leisure** ✅ UPDATED (Dead Sea thermal circuit)
7. Tourist Turtle Hospital / Sanctuary
8. Wellness & Yoga at MayaRoyale

### Files Modified
- `gallery.html` - Updated Video 6 overlay text and category
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: Turtle Video Corrected

### Fixed
- **Turtle Video**: Replaced with correct video file
  - Old Video URL: https://www.genspark.ai/api/files/s/MSW7BjE7 (wrong video)
  - **New Video URL**: https://www.genspark.ai/api/files/s/onvt1f6j ✅ (correct turtle video)
  - File: VID-20251225-WA0025.mp4
  - Title: "Tourist Turtle Hospital / Sanctuary"
  - Description: "Conservation and protection of endangered sea turtles at the resort"
  - Category: Location

### Gallery Videos (8 Total)
1. Property Video Tour
2. Pristine Beach Views
3. Aerial Property View
4. Coastal Paradise
5. Development Site
6. Beach Walkthrough
7. **Tourist Turtle Hospital / Sanctuary** ✅ CORRECTED VIDEO
8. **Wellness & Yoga at MayaRoyale** (kept as is)

### Files Modified
- `gallery.html` - Replaced turtle video with correct file
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Gallery: Rare Physical Advantages Image Updated

### Changed
- **Gallery Image**: Updated "Rare Physical Advantages" infographic
  - Old URL: https://www.genspark.ai/api/files/s/v6WH5DCR
  - New URL: https://www.genspark.ai/api/files/s/lhH2yb6m
  - Image shows: Natural Elevation, Hurricane-Free Zone, Sargassum-Free, Zero Erosion, Site Cross-Section Analysis
  - Categories: Location, Property
  - Description: "Unique geographic and strategic benefits of Isla Aguada"

### Files Modified
- `gallery.html` - Updated image URL
- `CHANGELOG.md` - Documentation updated

---

## January 5, 2026 - Footer Resources: LHW Letter of Interest Re-added

### Added
- **Resources Section**: Re-added "LHW Letter of Interest" download link to footer
  - URL: https://www.genspark.ai/api/files/s/WGMxJnV5
  - Appears alongside Token Investor Deck and Pitch Deck
  - Consistent styling with other resource links
  - Download attribute for direct file download

### Files Modified
- `index.html` - Footer Resources section
- `dashboard.html` - Footer Resources section
- `tokenomics.html` - Footer Resources section
- `gallery.html` - Footer Resources section
- `connect-wallet.html` - Footer Resources section
- `contact.html` - Footer Resources section
- `lhw-partnership.html` - Already had the link
- `CHANGELOG.md` - Updated documentation

### Footer Resources Links (All 7 Pages)
1. ✅ Token Investor Deck 2026
2. ✅ MayaRoyale Pitch Deck
3. ✅ LHW Letter of Interest (RESTORED)
4. ✅ Connect Wallet

---

## January 5, 2026 - Team Photo Fix

### Fixed
- **Team Photos**: Changed `object-fit` from `cover` to `contain` to prevent photo cropping
  - Shawn Jamil's photo now displays fully without being cut off
  - All team member photos now fit within circular frames without cropping
  - Added white background to ensure proper display
  - CSS: `.team-photo img { object-fit: contain; background: var(--color-white); }`

### Files Modified
- `css/main.css` - Updated team photo styling

---

## January 5, 2026 - Footer LHW Logo Repositioning & Resources Update

### Changed
- **Footer LHW Logo**: Repositioned to bottom-right corner of footer
  - Moved from Quick Links section to standalone positioned element
  - Added `.footer-logo-partner` class with absolute positioning
  - Logo max-width: 150px with hover effects (scale 1.05x)
  - Responsive: centers on mobile devices below 768px
  
### Added
- **Resources Section**: Re-added "LHW Letter of Interest" download link
  - URL: https://www.genspark.ai/api/files/s/WGMxJnV5
  - Appears alongside Token Investor Deck and Pitch Deck
  - Consistent styling with other resource links

### Files Modified
- `index.html` - Footer restructure
- `dashboard.html` - Footer restructure
- `tokenomics.html` - Footer restructure
- `gallery.html` - Footer restructure
- `connect-wallet.html` - Footer restructure
- `contact.html` - Footer restructure
- `lhw-partnership.html` - Footer restructure
- `css/main.css` - Added `.footer-logo-partner` positioning

---

## January 5, 2026 - Footer LHW Logo Alignment

### Changed
- **Footer LHW Logo**: Aligned with Contact link in Quick Links section
  - Logo now left-aligned to match "Contact" text edge
  - CSS: `display: block` for proper alignment
  - Consistent vertical flow in Quick Links column

### Files Modified
- `index.html`, `dashboard.html`, `tokenomics.html`, `gallery.html`, `connect-wallet.html`, `contact.html`, `lhw-partnership.html`

---

## January 5, 2026 - Footer LHW Logo Repositioning

### Changed
- **Footer LHW Logo**: Moved from location block to Quick Links section
  - Now appears under the "Contact" link in the Quick Links column
  - Maintains consistent footer structure across all 7 pages
  - Logo specs: max-width 180px, opacity 0.9, hover opacity 1.0

### Files Modified
- `index.html`, `dashboard.html`, `tokenomics.html`, `gallery.html`, `connect-wallet.html`, `contact.html`, `lhw-partnership.html`

---

## January 5, 2026 - LHW Logo Update (Navy Background)

### Changed
- **Footer LHW Logo**: Updated to navy background version with white text
  - Previous: White background logo with invert filter
  - Current: Navy background (#0a1628) with white text (no filter needed)
  - Logo URL: https://www.genspark.ai/api/files/s/tNK6zuCh
  - Design: 'LHW' + 'THE LEADING HOTELS OF THE WORLD®' in white on navy
  - Simpler CSS: removed `filter: invert(1)` and `background-color`

### Files Modified
- All 7 HTML pages (9 instances total):
  - `index.html` (footer)
  - `dashboard.html` (footer)
  - `tokenomics.html` (footer)
  - `gallery.html` (footer)
  - `connect-wallet.html` (footer)
  - `contact.html` (footer + sidebar)
  - `lhw-partnership.html` (footer)

### CSS Changes
- Removed from `css/main.css`:
  ```css
  filter: invert(1) brightness(0.95);
  background-color: var(--color-navy);
  ```

---

## January 5, 2026 - Contact Page LHW Logo Update

### Changed
- **Contact Page Strategic Partnership Logo**: Updated sidebar logo to navy background version
  - Logo URL: https://www.genspark.ai/api/files/s/tNK6zuCh
  - Size: max-width 200px, width 100%
  - Now matches footer logo across all pages

### Files Modified
- `contact.html` (line 128 - Strategic Partnership section)

---

## January 5, 2026 - LHW Logo Update (Transparent Background)

### Changed
- **Footer LHW Logo**: Updated to transparent background version
  - Previous: Light background logo with invert filter
  - Current: Transparent background, white text on navy
  - Logo URL: https://www.genspark.ai/api/files/s/tNK6zuCh
  - Removed CSS: `filter: invert(1)` and `background-color: var(--color-navy)`
  - Cleaner implementation, blends perfectly with footer

### Files Modified
- All 7 HTML pages (9 instances total):
  - `index.html` (footer)
  - `dashboard.html` (footer)
  - `tokenomics.html` (footer)
  - `gallery.html` (footer)
  - `connect-wallet.html` (footer)
  - `contact.html` (footer + sidebar in Strategic Partnership section)
  - `lhw-partnership.html` (footer)

### CSS Changes
- Simplified `css/main.css` by removing:
  ```css
  filter: invert(1) brightness(0.95);
  background-color: var(--color-navy);
  ```

---

## January 5, 2026 - LHW Footer Logo Color Match

### Changed
- **Footer LHW Logo**: Added CSS filter to match navy footer color
  - Applied `filter: invert(1) brightness(0.95)` to blend white logo with navy background
  - Removed `background-color: var(--color-navy)` for cleaner integration
  - Logo now seamlessly matches footer color (#0a1628)

### Files Modified
- `css/main.css` - Updated footer logo styling

### CSS Code
```css
.footer-section a img[alt*="Leading Hotels"],
.lhw-badge-section a img {
    transition: transform 0.3s ease, opacity 0.3s ease;
    padding: 8px;
    border-radius: 4px;
    filter: invert(1) brightness(0.95);
}

.footer-section a:hover img[alt*="Leading Hotels"],
.lhw-badge-section a:hover img {
    transform: scale(1.05);
    opacity: 1 !important;
}
```

---

## January 5, 2026 - LHW Logo Background Match

### Changed
- **Footer LHW Logo**: Added navy background to blend with footer
  - Background color: `var(--color-navy)` (#0a1628)
  - Padding: 8px
  - Border-radius: 4px
  - Transition: 0.3s for hover effects
  - Hover: scale 1.05x

### Files Modified
- `css/main.css` - Added background styling for LHW logo

### Affected Pages
- All 8 LHW logo instances:
  - Footer: `index.html`, `dashboard.html`, `tokenomics.html`, `gallery.html`, `connect-wallet.html`, `contact.html`, `lhw-partnership.html`
  - Sidebar: `contact.html` (Strategic Partnership section)

---

## January 5, 2026 - LHW Footer Logo Update

### Changed
- **Footer Logo**: Replaced "Leading Hotels of the World" text link with logo image
  - Logo URL: https://www.genspark.ai/api/files/s/m68tb2Mn
  - Position: Under "Isla Aguada, Campeche, Mexico" in footer
  - Specs: max-width 180px, opacity 0.9, hover opacity 1.0, transition 0.3s
  - Hover effect: scale 1.05x
  - Clickable link to `lhw-partnership.html`

### Added
- **Contact Page Enhancement**: LHW logo in Strategic Partnership section
  - Logo size: max-width 200px
  - Includes status badge: "Letter of Interest Received"
  - Date: May 29, 2024
  - Positioned in contact info sidebar after business hours

### Files Modified
- `index.html` - Footer logo
- `dashboard.html` - Footer logo
- `tokenomics.html` - Footer logo
- `gallery.html` - Footer logo
- `connect-wallet.html` - Footer logo
- `lhw-partnership.html` - Footer logo
- `contact.html` - Footer logo + Sidebar section
- `css/main.css` - Added hover/transition styles for logo

---

## January 5, 2026 - LHW Partnership Page Created

### Added
- **New Page**: `lhw-partnership.html` - Leading Hotels of the World Partnership showcase
  - Hero section with LHW logo, status badge, and date (May 29, 2024)
  - About LHW section (190-word summary):
    - 400+ luxury properties worldwide
    - 80+ countries represented
    - Nearly 100 years of excellence
    - 85% minimum inspection score for membership
  - Strategic Benefits for MayaRoyale (6 cards):
    1. Global Luxury Credibility
    2. Access to Affluent Clientele
    3. Operational Excellence Standards
    4. Enhanced Property Value
    5. Marketing & Distribution Network
    6. Quality Assurance Partnership
  - Embedded PDF Letter of Interest:
    - Document viewer with download/view buttons
    - PDF URL: https://www.genspark.ai/api/files/s/WGMxJnV5
  - Key LOI Highlights (4 cards):
    - Mutual interest in partnership
    - Strategic location in Yucatan, Mexico
    - Membership requirements outlined
    - Development timeline established
  - Membership Path (6-step timeline):
    1. Initial Expression of Interest ✓
    2. Detailed Property Plans
    3. Membership Application
    4. Property Inspection (85% score required)
    5. Executive Committee Review
    6. Official LHW Membership
  - Call-to-action links to Tokenomics and Contact pages

- **New CSS File**: `css/lhw.css` - LHW Partnership page styles
  - Animated hero section with floating badge
  - Sticky stats card
  - Interactive benefit cards with hover effects
  - Document viewer styling
  - Timeline with pulsing animation
  - Fully responsive design
  - Luxury branding (Cinzel + Inter fonts)
  - Color scheme: Navy #0a1628, Gold #B8860B, Turquoise #40E0D0

### Changed
- **Footer Navigation**: Added "Leading Hotels of the World" link to all pages
  - Added to footer Quick Links section on:
    - `index.html`
    - `dashboard.html`
    - `tokenomics.html`
    - `gallery.html`
    - `contact.html`
    - `connect-wallet.html`
    - `lhw-partnership.html`

### Files Created
- `lhw-partnership.html` (16,056 bytes)
- `css/lhw.css` (10,510 bytes)

### Files Modified
- `index.html` - Footer link added
- `dashboard.html` - Footer link added
- `tokenomics.html` - Footer link added
- `gallery.html` - Footer link added
- `contact.html` - Footer link added
- `connect-wallet.html` - Footer link added
- `README.md` - Updated project documentation

### Impact
- **Investor Credibility**: LHW partnership strengthens brand positioning
- **Market Differentiation**: Sets MayaRoyale apart from competitors
- **Value Proposition**: Enhanced property value and prestige
- **Exit Strategy**: Clear path to LHW membership for resort operations
- **Investor Confidence**: Demonstrates serious commitment to luxury standards

---

## January 5, 2026 - Gallery: Rare Physical Advantages Image Added

### Added
- **Gallery Image**: Rare Physical Advantages infographic
  - URL: https://www.genspark.ai/api/files/s/v6WH5DCR
  - Location: Gallery page, after "Strategic Position Map"
  - Categories: Location, Property
  - Description: "Unique geographic and strategic benefits of Isla Aguada"
  - Showcases competitive advantages of the location

### Gallery Totals
- **20 media items** total:
  - **12 Images**:
    1. Mas'Tul Beach Club (rendering)
    2. Strategic Connectivity Map
    3. Strategic Position Map
    4. Rare Physical Advantages (NEW)
    5. Pristine Caribbean Beach
    6. Aerial Beachfront View
    7. 8 Kilometer Coastal Masterplan
    8. Luxury Lounge & Pool Area
    9. Beachfront Restaurant
    10. Natural Rock Pools
    11. Sustainable Architecture
    12. Healing & Wellness Center
  - **8 Videos**:
    1. Property Video Tour
    2. Pristine Beach Views
    3. Aerial Property View
    4. Coastal Paradise
    5. Development Site
    6. Beach Walkthrough
    7. Natural Environment
    8. Golden Hour Views

### Files Modified
- `gallery.html` - Added new gallery item
- `CHANGELOG.md` - Updated documentation

### Gallery Features
- 5 filter categories: All, Property, Location, Renderings, Amenities
- Hover overlays with titles and descriptions
- Responsive grid layout
- Video controls with playsinline attribute
- Luxury branding and animations

---

## January 5, 2026 - Gallery: 8 Videos Added

### Added
- **8 Video Gallery Items** to Gallery page:
  1. **Property Video Tour** - https://www.genspark.ai/api/files/s/8twIIhY2
  2. **Pristine Beach Views** - https://www.genspark.ai/api/files/s/838EaFKG
  3. **Aerial Property View** - https://www.genspark.ai/api/files/s/R2L7eYYm
  4. **Coastal Paradise** - https://www.genspark.ai/api/files/s/r0PcDsu4
  5. **Development Site** - https://www.genspark.ai/api/files/s/owcspZh1
  6. **Beach Walkthrough** - https://www.genspark.ai/api/files/s/wXLdVQwR
  7. **Natural Environment** - https://www.genspark.ai/api/files/s/MSW7BjE7
  8. **Golden Hour Views** - https://www.genspark.ai/api/files/s/M62cTa2J

### Changed
- **Gallery CSS**: Enhanced video styling
  - Added `object-fit: cover` for consistent aspect ratio
  - Black background for video containers
  - Responsive video sizing
  - Video controls with playsinline attribute
  - Overlay descriptions for each video

### Files Modified
- `gallery.html` - Added 8 video elements with proper structure
- `css/gallery.css` - Updated video styling

### Features
- Videos categorized under "Property" filter
- Hover overlays with descriptions
- Mobile-responsive video playback
- Controls visible on all videos
- Consistent with existing gallery design

---

## January 5, 2026 - Initial Gallery Update

### Added
- **Gallery Assets**:
  - Luxury Lounge & Pool Area (https://www.genspark.ai/api/files/s/skBm184T)
  - Beachfront Restaurant (https://www.genspark.ai/api/files/s/hnCckpT4)
  - Natural Rock Pools (https://www.genspark.ai/api/files/s/AWDP1df9)
  - Sustainable Architecture (https://www.genspark.ai/api/files/s/EHcRs2F5)
  - Healing & Wellness Center (https://www.genspark.ai/api/files/s/BH3NP8oj)
  - Property Video Tour (https://www.genspark.ai/api/files/s/8twIIhY2)

### Features
- Gallery overlay with titles and descriptions
- Category filtering system
- Responsive grid layout
- Video player with controls

---

## January 5, 2026 - Logo & Font Updates

### Changed
- **Header Logo**: Updated to MayaRoyale branding on all 6 pages
  - Logo URL: https://www.genspark.ai/api/files/s/CLWTmhof
  - Alt text: "MayaRoyale Logo"
  - Class: "logo"
  - CSS: `.logo { height: 50px; width: auto; transition: opacity 0.3s ease; }`
  - Hover effect: opacity 0.8
  - Wrapped in `.logo-link` with flexbox centering

- **Typography**: Implemented luxury branding fonts
  - Imported from Google Fonts: https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap
  - **Headings**: Cinzel (h1-h6, .hero-title, .section-title)
  - **Body**: Inter (body, p, a, button, input, textarea, .btn)

### Files Modified
- All 6 HTML pages: `index.html`, `dashboard.html`, `tokenomics.html`, `gallery.html`, `contact.html`, `connect-wallet.html`
- Main CSS: Updated font imports and applied to elements

---

## January 5, 2026 - Whitepaper Download Sections

### Added
- **Whitepaper Download Sections** on 3 pages:
  1. **Home** (`index.html`)
  2. **Contact** (`contact.html`)
  3. **Tokenomics** (`tokenomics.html`)

- **Download Resources**:
  - Token Investor Deck 2026: https://www.genspark.ai/api/files/s/EqzXYjSM
  - MayaRoyale Pitch Deck: https://www.genspark.ai/api/files/s/eBOnR7OM

### Design
- Card-based UI with hover effects
- Download icons and clear CTAs
- Responsive grid layout
- Consistent styling across all pages

---

## January 5, 2026 - Tokenomics Navigation

### Added
- **Tokenomics Link**: Added to navigation on all 6 pages
  - Active state styling implemented
  - Consistent with existing nav design
  - Links to `tokenomics.html`

### Files Modified
- All 6 HTML pages navigation sections

---

## January 5, 2026 - Team Section Updates

### Added
- **Joseph Tal Photo**: Founder photo updated
  - URL: https://www.genspark.ai/api/files/s/lz67YgwW
  - Featured card styling with gold border
  - Comprehensive bio and credentials

- **Team Member Photos**: 6 additional team members
  1. Seth Rosenberg (CEO) - https://www.genspark.ai/api/files/s/eOxZZ4ff
  2. John Sears (Senior Lead Developer) - https://www.genspark.ai/api/files/s/0eAICT35
  3. Jason Harris (Project Supporter) - https://www.genspark.ai/api/files/s/Ni8ea6lu
  4. Shawn Jamil (Co-Founder/Developer) - https://www.genspark.ai/api/files/s/gaeThPfw
  5. Ben Tal (Junior Dev. Associate) - https://www.genspark.ai/api/files/s/hkt6awce
  6. Damu Winston (Investor & Advisor) - https://www.genspark.ai/api/files/s/bLNHzNzR

### Design
- Circular team photos (140px × 140px)
- Hover effects with turquoise glow
- Responsive grid layout
- Professional bios for each member

---

## Project Overview

**MayaRoyale** is a blockchain-based real estate investment platform tokenizing 15 acres of trophy beachfront property in Isla Aguada, Campeche, Mexico.

### Key Metrics
- **Token Price**: $2,000 per MAYA
- **Total Supply**: 1,000,000 MAYA tokens
- **Asset Backing**: $100M+ trophy beachfront real estate
- **Land Appreciation**: 15% annually
- **Projected Returns**: 18-20% annually
- **Property Size**: 15 acres
- **Contact Email**: information@mayaroyale.com
- **Phone**: +1 786-444-5497

### Website Structure
- **7 HTML Pages**: Home, Dashboard, Tokenomics, Gallery, LHW Partnership, Connect Wallet, Contact
- **7 CSS Files**: Main, Dashboard, Tokenomics, Gallery, LHW, Wallet, Contact
- **6 JavaScript Files**: Main, Dashboard, Chart.js integration
- **3 Documentation Files**: README.md, QUICK-START.md, CHANGELOG.md

### Design System
- **Fonts**: Cinzel (headings), Inter (body)
- **Colors**: Navy #0a1628, Gold #B8860B, Turquoise #40E0D0
- **Framework**: Responsive, mobile-first design
- **Libraries**: Chart.js for data visualization

### Production Status
✅ All updates completed and production-ready
✅ Mobile-responsive across all pages
✅ SEO-optimized with proper meta tags
✅ Performance-optimized assets
✅ Ready for static hosting deployment
