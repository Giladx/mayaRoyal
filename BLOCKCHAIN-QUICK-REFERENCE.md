# 🎨 MayaRoyale Blockchain Design - Quick Visual Reference

## Color Palette

### Primary Blockchain Colors
```
Crypto Cyan:   #00fff7  ████████  (Neon highlights, text)
Crypto Blue:   #00d4ff  ████████  (Primary accent)
Crypto Purple: #7b61ff  ████████  (Secondary accent)
```

### Dark Backgrounds
```
Blockchain Dark: #0a0e27  ████████  (Primary dark)
Blockchain Navy: #1a1f3a  ████████  (Secondary dark)
```

### Existing MayaRoyale Colors (Preserved)
```
Turquoise:     #17a2b8  ████████  (Brand primary)
Gold:          #b8860b  ████████  (Luxury accent)
Navy:          #0a2540  ████████  (Brand dark)
```

---

## Component Showcase

### 1. Crypto Badge
```html
<span class="crypto-badge">⚛️ Blockchain-Backed Real Estate</span>
```
**Visual:** Pill shape | Cyan border | Glowing | Pulsing animation

### 2. Neon Text
```html
<span class="neon-text">Blockchain Innovation</span>
```
**Visual:** Cyan color | Triple shadow | Breathing glow

### 3. Web3 Button
```html
<button class="btn btn-web3"><span>⚡ Connect Wallet</span></button>
```
**Visual:** Gradient bg | Cyan border | Ripple on hover | Glow shadow

### 4. Crypto Stat Card
```html
<div class="crypto-stat-card holographic-shimmer">
    <div class="crypto-stat-label">Token Price</div>
    <div class="crypto-stat-value">$2,000</div>
</div>
```
**Visual:** Dark glassmorphic | Hover lift | Sweep animation | Glowing border

### 5. Blockchain Section Title
```html
<h1 class="blockchain-section-title">
    Investor <span class="highlight">Dashboard</span>
</h1>
```
**Visual:** Large bold | Cyan underline with glow | Centered

### 6. Floating Particles
```html
<div class="particles-bg">
    <div class="particle" style="left: 20%; animation-delay: 0s;"></div>
    <div class="particle" style="left: 40%; animation-delay: -5s;"></div>
    <!-- More particles -->
</div>
```
**Visual:** Cyan/purple/blue dots | Float upward | Fade in/out | Staggered

### 7. Data Flow Strip
```html
<div class="data-strip"></div>
```
**Visual:** Horizontal line | Cyan gradient | Flowing animation | 2px height

### 8. Blockchain Grid Background
```html
<section class="blockchain-grid-bg">
    <!-- Content -->
</section>
```
**Visual:** Animated grid | Cyan lines | 50px squares | Diagonal movement

### 9. Cyber Border Card
```html
<div class="feature-card cyber-border">
    <!-- Content -->
</div>
```
**Visual:** Cyan border | Gradient bg | Pulsing glow on hover

### 10. Hex Pattern Overlay
```html
<section class="hex-pattern">
    <!-- Content -->
</section>
```
**Visual:** Subtle dots | 40px pattern | Low opacity | Geometric

---

## Animation Reference

### Grid Movement
- **Duration:** 20s
- **Type:** Linear infinite
- **Effect:** Diagonal translate (50px, 50px)

### Shimmer Sweep
- **Duration:** 3s  
- **Type:** Linear infinite
- **Effect:** Diagonal light sweep 45°

### Neon Pulse
- **Duration:** 2s
- **Type:** Ease-in-out infinite
- **Effect:** Glow intensity variation

### Particle Float
- **Duration:** 20-30s (staggered)
- **Type:** Linear infinite  
- **Effect:** Vertical movement with fade

### Border Glow
- **Duration:** 2s
- **Type:** Ease-in-out infinite
- **Effect:** Opacity pulse on hover

### Badge Pulse
- **Duration:** 3s
- **Type:** Ease-in-out infinite
- **Effect:** Scale + glow variation

### Data Flow
- **Duration:** 2s
- **Type:** Linear infinite
- **Effect:** Horizontal gradient movement

---

## Page Implementation Map

### ✅ index.html (Home)
- [x] Blockchain grid background (hero)
- [x] 8 floating particles
- [x] Crypto badge ("Blockchain-Backed")
- [x] Neon text ("Blockchain Innovation")
- [x] 4 crypto stat cards with shimmer
- [x] Data flow strip
- [x] Cyber border feature cards
- [x] Blockchain section titles

### ✅ dashboard.html (Dashboard)
- [x] Blockchain grid + hex pattern
- [x] 4 floating particles
- [x] Web3 button ("Connect Wallet")
- [x] Neon text (wallet address)
- [x] Blockchain section title

### ✅ tokenomics.html (Tokenomics)
- [x] Blockchain grid background
- [x] 5 floating particles
- [x] Crypto badge ("1M Token Supply")
- [x] Blockchain section title
- [x] Neon text ("$100M+ beachfront")

### ✅ gallery.html (Gallery)
- [x] Blockchain grid background
- [x] Blockchain section title
- [x] Neon text ("trophy beachfront")

### ✅ contact.html (Contact)
- [x] Blockchain grid + hex pattern
- [x] Blockchain section title
- [x] Neon text ("luxury real estate")

### ✅ connect-wallet.html (Wallet)
- [x] Blockchain grid + hex pattern
- [x] 5 floating particles
- [x] Crypto badge ("Secure Web3")
- [x] Blockchain section title
- [x] Neon text ("investment dashboard")

### ✅ lhw-partnership.html (Partnership)
- [x] Blockchain grid background

---

## CSS Class Quick Reference

### Backgrounds
- `.blockchain-grid-bg` - Animated grid pattern
- `.hex-pattern` - Hexagon dot pattern
- `.particles-bg` - Container for particles

### Text Styles
- `.neon-text` - Glowing cyan text
- `.text-crypto-cyan` - Cyan color utility
- `.text-crypto-purple` - Purple color utility
- `.text-crypto-blue` - Blue color utility

### Components
- `.crypto-badge` - Pill-shaped label
- `.crypto-stat-card` - Dark glassmorphic card
- `.crypto-stat-label` - Card label text
- `.crypto-stat-value` - Large stat number
- `.btn-web3` - Futuristic button
- `.blockchain-section-title` - Page header
- `.highlight` - Cyan highlight text

### Effects
- `.holographic-shimmer` - Shimmer sweep
- `.cyber-border` - Glowing border
- `.data-strip` - Animated line
- `.particle` - Single floating particle

### Utility
- `.glow-cyan` - Cyan glow shadow
- `.glow-purple` - Purple glow shadow
- `.glow-blue` - Blue glow shadow
- `.bg-blockchain-dark` - Dark background
- `.bg-blockchain-navy` - Navy background

---

## Common Patterns

### Hero Section with Full Effects
```html
<section class="hero blockchain-grid-bg">
    <div class="particles-bg">
        <div class="particle" style="left: 10%; animation-delay: 0s;"></div>
        <div class="particle" style="left: 25%; animation-delay: -3s;"></div>
        <div class="particle" style="left: 40%; animation-delay: -7s;"></div>
        <div class="particle" style="left: 55%; animation-delay: -12s;"></div>
        <div class="particle" style="left: 70%; animation-delay: -5s;"></div>
        <div class="particle" style="left: 85%; animation-delay: -9s;"></div>
    </div>
    <div class="container">
        <span class="crypto-badge">🔒 Blockchain-Backed</span>
        <h1>Title with <span class="neon-text">Neon Text</span></h1>
    </div>
</section>
```

### Stats Section
```html
<section class="stats-section hex-pattern">
    <div class="container">
        <div class="data-strip"></div>
        <div class="stats-grid">
            <div class="crypto-stat-card holographic-shimmer">
                <div class="crypto-stat-label">Token Price</div>
                <div class="crypto-stat-value">$2,000</div>
            </div>
        </div>
    </div>
</section>
```

### Feature Cards
```html
<div class="feature-card cyber-border">
    <h3><span class="text-crypto-cyan">Blockchain</span> Security</h3>
    <p>Content here</p>
</div>
```

---

## Responsive Behavior

### Desktop (> 768px)
- Full animations
- 6-8 particles
- Large glows
- Complex gradients

### Tablet (768px - 1024px)
- Maintained animations
- 4-6 particles
- Medium glows
- Full gradients

### Mobile (< 768px)
- Simplified animations
- 2-4 particles
- Smaller glows
- Basic gradients
- Reduced font sizes
- Touch-optimized buttons

---

## Performance Tips

### ✅ DO
- Use CSS transforms (hardware accelerated)
- Limit particle count on mobile
- Use will-change for animated elements
- Debounce hover effects

### ❌ DON'T
- Animate width/height (causes reflow)
- Use too many particles (> 10)
- Animate on every scroll event
- Create deeply nested animations

---

## Accessibility Considerations

### Motion
```css
@media (prefers-reduced-motion: reduce) {
    .particle,
    .blockchain-grid-bg::before,
    .holographic-shimmer::after {
        animation: none;
    }
}
```

### Contrast
- Neon text: Use on dark backgrounds only
- Ensure 4.5:1 contrast ratio for body text
- Don't rely solely on color for information

### Screen Readers
- Animations are decorative (no content impact)
- All interactive elements have proper labels
- Focus states visible without relying on glow

---

## Integration Checklist

When adding blockchain design to a new page:

- [ ] Link `css/blockchain-design.css` in `<head>`
- [ ] Add `.blockchain-grid-bg` to hero section
- [ ] Insert particle container with 4-8 particles
- [ ] Use `.blockchain-section-title` for main heading
- [ ] Add `.highlight` span for key terms
- [ ] Apply `.neon-text` to blockchain-related words
- [ ] Use `.crypto-badge` for feature labels
- [ ] Style stat cards with `.crypto-stat-card`
- [ ] Add `.cyber-border` to feature cards
- [ ] Include `.data-strip` as section divider
- [ ] Test on mobile devices
- [ ] Verify accessibility

---

**Quick Start:** Link the CSS file and add classes to existing elements. No JavaScript required!

```html
<link rel="stylesheet" href="css/blockchain-design.css">
```
