# 📱 Mobile Testing Guide - Visual Checklist

## Quick Test (3 minutes)

### ✅ Test 1: Logo Shows on Header
**Page**: index.html  
**What to look for**: MayaRoyale logo in top-left corner

```
┌─────────────────────────────────────┐
│ [LOGO] ☰         Connect Wallet     │ ← Logo should be here
├─────────────────────────────────────┤
│                                     │
│    BEACHFRONT REAL ESTATE           │
│     MEETS BLOCKCHAIN                │
│                                     │
```

**✅ PASS**: Logo visible (image or "MayaRoyale" text)  
**❌ FAIL**: Empty space where logo should be

---

### ✅ Test 2: Cards Display Properly
**Page**: positioning.html  
**Scroll to**: "Why Isla Aguada Outperforms Riviera Maya"

```
┌───────────────────────────────┐
│  🏖️ Isla Aguada               │
│                               │
│  Investment Risk Score        │
│     ┌─────┐                   │
│     │ 9.2 │  ← Should be big  │
│     │ /10 │     & visible     │
│     └─────┘                   │
│                               │
│  ✓ Hurricane-Free Zone        │
│  ✓ Zero Sargassum            │
│  ✓ 15% Land Appreciation     │
└───────────────────────────────┘

[Space between cards]

┌───────────────────────────────┐
│  ⚠️ Entire Caribbean & Mexico │
│                               │
│  Investment Risk Score        │
│     ┌─────┐                   │
│     │ 5.8 │  ← Should be red  │
│     │ /10 │                   │
│     └─────┘                   │
│                               │
│  ✗ 3-5 months disruption     │
│  ✗ $500M+ annual cost        │
│  ✗ 50+ hurricanes since 1974│
└───────────────────────────────┘
```

**✅ PASS**: Cards stacked vertically, no horizontal scroll, all text readable  
**❌ FAIL**: Cards side-by-side and cut off, need to scroll horizontally

---

### ✅ Test 3: Numbers Animate
**Page**: positioning.html  
**What to do**: Scroll slowly through page

```
Initial view (before scroll):
┌────────────────┐
│      0%        │  ← Starts at zero
└────────────────┘

After scrolling into view:
┌────────────────┐
│    0.45%       │  ← Counts up
│      ↑         │     over 2 sec
│    0.23%       │
│      ↑         │
│    0.11%       │
└────────────────┘
```

**Test these animations**:

1. **Hero Stats** (top of page):
   - 0.45% (coastline)
   - $500M+ (crisis avoided)
   - 5 (defensive moats)
   - 20M (domestic market)

2. **Coastline Cards** (middle section):
   - 11,000+ (KM coastline)
   - ~50 (KM protected)
   - 15 (acres owned)

3. **Risk Scores** (comparison section):
   - 9.2/10 (Isla Aguada - green circle should fill)
   - 5.8/10 (Caribbean - red circle should fill)

**✅ PASS**: Numbers count from 0 to target, circles fill with color  
**❌ FAIL**: Numbers stay static, no animation

---

## Common Issues & Fixes

### Issue: Logo Still Not Showing
**Possible causes**:
- Browser cached old HTML
- Ad blocker blocking image
- VPN/firewall blocking external CDN

**Quick fixes**:
1. Hard refresh: **Ctrl+Shift+R** (PC) or **Cmd+Shift+R** (Mac)
2. Try incognito/private mode
3. Check if you see "MayaRoyale" text (SVG fallback working)
4. Disable ad blocker temporarily

---

### Issue: Cards Still Not Responsive
**Possible causes**:
- Browser cached old CSS
- Viewport meta tag missing

**Quick fixes**:
1. Hard refresh page
2. Check screen width: should work on any size 968px or less
3. Try different browser (Chrome, Safari, Firefox)

---

### Issue: Numbers Not Animating
**Possible causes**:
- JavaScript disabled
- Scrolling too fast
- Element already animated once

**Quick fixes**:
1. Scroll slower - animations trigger at 30% visibility
2. Refresh page to reset animations
3. Check browser console for JavaScript errors (F12 → Console)

---

## Expected Results Summary

| Feature | Expected Behavior |
|---------|------------------|
| **Logo** | Always visible in top-left |
| **Cards** | Stack vertically, readable |
| **Numbers** | Count up when scrolled |
| **Circles** | Fill with color on scroll |
| **Layout** | No horizontal scroll |
| **Text** | All readable, proper size |

---

## Mobile Devices to Test

### ✅ Recommended:
- iPhone (Safari)
- Android phone (Chrome)
- Tablet (iPad/Android)
- Browser DevTools mobile view

### Screen Sizes:
- **Phone**: 375px - 428px width
- **Tablet**: 768px - 1024px width
- **Desktop**: 1200px+ width

---

## If Everything Works

You should see:
- ✅ Logo in header
- ✅ "Beachfront Real Estate" title visible (not covered)
- ✅ Connect Wallet button reasonably sized
- ✅ All comparison cards stacking vertically
- ✅ Numbers counting up from 0
- ✅ Risk score circles filling
- ✅ No horizontal scrolling needed
- ✅ All text readable

**STATUS: READY FOR PRODUCTION** 🎉

---

*Mobile Testing Guide - January 11, 2026*  
*Test all 3 items in under 3 minutes*
