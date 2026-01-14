# Mobile Testing Guide

## How to Verify Mobile Fixes

### Quick Checklist

Test on the following viewports:
- 📱 iPhone SE (375x667)
- 📱 iPhone 12/13/14 (390x844)
- 📱 iPhone 14 Pro Max (430x932)
- 📱 Samsung Galaxy S21 (360x800)
- 📱 Samsung Galaxy S21+ (384x854)
- 📱 iPad Mini (768x1024)
- 📱 iPad Air (820x1180)

### Test Procedure

#### 1. Logo Test ✅
- **Expected:** MayaRoyale logo appears at top-left
- **Fallback:** If image fails, "MayaRoyale" text should appear in gold
- **Size:** Logo should be 32px height on mobile, 40px on desktop

**How to Test:**
1. Load any page (start with index.html)
2. Verify logo is visible
3. If broken image appears, refresh - fallback should load

#### 2. Mobile Menu Test ✅
- **Expected:** Hamburger menu (three horizontal lines) visible at top-right
- **Interaction:** Tap to open menu (slides in from right)
- **Animation:** Lines transform to "X" when open

**How to Test:**
1. Resize browser to < 968px width
2. Look for hamburger icon (three lines) at top-right
3. Tap the icon
4. Menu should slide in from the right side
5. Should NOT require swiping from screen edge
6. Tap "X" to close menu

**Expected Behavior:**
```
Closed State: ☰ (three lines)
Open State: ✕ (X shape)
Menu Position: Slides from right (100% → 0%)
```

#### 3. Content Overflow Test ✅
- **Expected:** No horizontal scrolling on any page
- **Text:** All text wraps properly
- **Images:** All images fit within viewport

**How to Test:**
1. Load each page
2. Scroll vertically only
3. Verify no horizontal scrollbar appears
4. Check that long words break properly
5. Verify images don't exceed screen width

**Pages to Check:**
- index.html
- positioning.html (previously had overflow)
- dashboard.html
- tokenomics.html
- All other pages

#### 4. Navigation Dropdown Test ✅
- **Expected:** All menu items visible and accessible
- **"The Project" Menu:** All 7 items should be visible
- **Interaction:** Tap menu item to expand dropdown

**How to Test:**
1. Open mobile menu
2. Tap "The Project"
3. Verify all 7 items appear:
   - 🏖️ Smart Resort Vision
   - 🌅 The Future of Isla Aguada
   - 🏆 Strategic Positioning
   - 💆 Wellness Differentiation
   - 🍽️ Culinary Excellence
   - 🏨 LHW Partnership
   - 🌿 Sustainability
4. Verify items are not cut off
5. Verify you can scroll if needed

#### 5. Touch Target Test ✅
- **Expected:** All buttons and links easy to tap
- **Minimum Size:** 44x44px (iOS guideline)

**How to Test:**
1. Tap navigation items
2. Tap dropdown menu items
3. Tap CTA buttons
4. Verify no mis-taps occur

#### 6. Responsive Font Sizes ✅
- **Desktop:** Large, comfortable reading
- **Tablet:** Medium, still comfortable
- **Mobile:** Smaller but still readable (14-16px body)

**How to Test:**
1. Check hero titles on positioning.html
2. Desktop: ~4rem
3. Tablet (768px): ~2rem
4. Mobile (480px): ~1.5rem
5. Verify text is readable without zooming

### Browser Testing

Test on actual devices if possible:
- **iOS Safari** (primary browser for iPhone users)
- **Chrome Mobile** (Android primary)
- **Firefox Mobile**
- **Samsung Internet**

### Common Issues to Watch For

❌ **Do NOT Accept:**
- Logo showing as broken image icon
- Hamburger menu not visible
- Having to swipe from edge to see menu
- Text overflowing horizontally
- Missing menu items
- Buttons too small to tap
- Horizontal scrolling

✅ **Expected Behavior:**
- Logo loads instantly
- Hamburger menu visible immediately
- One tap opens menu
- Smooth slide-in animation
- All content fits within screen width
- All menu items visible
- Touch targets >= 44px

### Debug Tools

**Chrome DevTools Device Mode:**
1. Open DevTools (F12)
2. Click device icon (or Ctrl+Shift+M)
3. Select device from dropdown
4. Test all interactions

**Firefox Responsive Design Mode:**
1. Open DevTools (F12)
2. Click responsive icon (or Ctrl+Shift+M)
3. Set viewport size
4. Test all interactions

**Safari Responsive Design Mode:**
1. Open Web Inspector (Cmd+Option+I)
2. Click device icon
3. Test on various iOS devices

### Performance Checks

- **Menu Animation:** Should be smooth (60fps)
- **Page Load:** Logo and menu should appear within 1 second
- **Transitions:** All animations should use hardware acceleration
- **Scrolling:** Should be smooth without jank

### Accessibility Checks

- **Contrast:** Text should have sufficient contrast (4.5:1 minimum)
- **Touch Targets:** All interactive elements >= 44x44px
- **Focus States:** Visible focus indicators for keyboard navigation
- **Screen Reader:** Navigation should be properly labeled

## Quick Reference

### Breakpoints
```css
Desktop:       >= 1200px
Tablet Large:  968px - 1200px
Tablet:        640px - 968px  (mobile menu appears)
Mobile:        <= 640px
Small Mobile:  <= 480px
```

### Key CSS Classes
```css
.nav-premium-mobile-toggle    /* Hamburger button */
.nav-premium-menu             /* Main navigation menu */
.nav-premium-menu.active      /* Menu when open */
.nav-premium-dropdown         /* Dropdown menus */
.nav-premium-dropdown-item    /* Individual menu items */
```

### Animation Timings
```css
Menu Slide: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
Dropdown Expand: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
Toggle Animation: 0.3s ease
```

## Success Criteria

✅ All tests pass on:
- 3+ screen sizes (small phone, large phone, tablet)
- 2+ browsers (Safari/Chrome minimum)
- Portrait AND landscape orientations
- Actual device testing (not just emulator)

## Reporting Issues

If you find any issues, note:
1. Device/browser combination
2. Screen size/orientation
3. Specific page affected
4. Screenshot of the issue
5. Steps to reproduce

---

**Last Updated:** January 8, 2026  
**Test Status:** ✅ All Critical Tests Passing
