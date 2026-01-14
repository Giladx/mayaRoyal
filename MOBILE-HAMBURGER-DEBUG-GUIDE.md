# 🔍 MOBILE HAMBURGER DEBUG GUIDE
**For: index.html - Home Page**
**Date:** January 12, 2026

## ✅ Pre-Flight Checklist

### 1. HTML Structure
```html
<!-- Line 505-509 in index.html -->
<button class="nav-premium-mobile-toggle" id="navPremiumMobileToggle">
    <span></span>
    <span></span>
    <span></span>
</button>
```
✅ **Confirmed:** Hamburger button exists with 3 spans

### 2. CSS Files Loaded (in order)
```html
<!-- Line 15-19 in index.html -->
<link rel="stylesheet" href="css/navigation-premium.css">
<link rel="stylesheet" href="css/main.css?v=2.0">
<link rel="stylesheet" href="css/premium-light.css">
<link rel="stylesheet" href="css/home-premium.css">
<link rel="stylesheet" href="css/regulatory-disclosure.css">
```
✅ **Confirmed:** navigation-premium.css loads FIRST

### 3. JavaScript Files Loaded
```html
<!-- Line 1160-1162 in index.html -->
<script src="js/wallet.js"></script>
<script src="js/navigation-premium.js"></script>
```
✅ **Confirmed:** navigation-premium.js loads and handles toggle

### 4. Inline JavaScript (Duplicate - But OK)
```javascript
// Lines 1070-1081 in index.html
const navPremiumMobileToggle = document.getElementById('navPremiumMobileToggle');
if (navPremiumMobileToggle) {
    navPremiumMobileToggle.addEventListener('click', () => {
        navPremiumMenu.classList.toggle('active');
        navPremiumMobileToggle.classList.toggle('active');
    });
}
```
✅ **Confirmed:** Toggle functionality exists

---

## 🧪 LIVE DEBUGGING STEPS

### Step 1: Open Mobile Emulator
1. Open **Chrome** browser
2. Press **F12** to open DevTools
3. Press **Ctrl+Shift+M** to toggle device toolbar
4. Select **iPhone 12 Pro** or **Pixel 5**
5. Navigate to: `index.html`

### Step 2: Check if Hamburger Exists in DOM
Open **Console** tab and run:
```javascript
document.getElementById('navPremiumMobileToggle')
```
**Expected:** Returns `<button>` element  
**If NULL:** HTML is broken, hamburger button missing

### Step 3: Check Number of Spans
```javascript
document.querySelectorAll('.nav-premium-mobile-toggle span').length
```
**Expected:** `3`  
**If 0:** Spans are missing from button

### Step 4: Check Display Property
```javascript
window.getComputedStyle(document.querySelector('.nav-premium-mobile-toggle')).display
```
**Expected:** `"flex"`  
**If "none":** CSS is not being applied correctly

### Step 5: Check Visibility
```javascript
window.getComputedStyle(document.querySelector('.nav-premium-mobile-toggle')).visibility
```
**Expected:** `"visible"`  
**If "hidden":** Something is hiding the button

### Step 6: Check Opacity
```javascript
window.getComputedStyle(document.querySelector('.nav-premium-mobile-toggle')).opacity
```
**Expected:** `"1"`  
**If "0":** Button is transparent

### Step 7: Check Z-Index
```javascript
window.getComputedStyle(document.querySelector('.nav-premium-mobile-toggle')).zIndex
```
**Expected:** `"9999"`  
**If lower:** Button might be behind other elements

### Step 8: Check Span Background Color
```javascript
window.getComputedStyle(document.querySelector('.nav-premium-mobile-toggle span')).backgroundColor
```
**Expected:** `"rgb(255, 255, 255)"` (white) on transparent nav  
**Expected:** `"rgb(10, 10, 10)"` (dark) on scrolled nav  
**If "rgba(0, 0, 0, 0)":** Spans are transparent (invisible)

### Step 9: Check Span Dimensions
```javascript
let span = document.querySelector('.nav-premium-mobile-toggle span');
console.log('Width:', window.getComputedStyle(span).width);
console.log('Height:', window.getComputedStyle(span).height);
console.log('Display:', window.getComputedStyle(span).display);
```
**Expected:**
- Width: `"28px"`
- Height: `"3px"`
- Display: `"block"`

### Step 10: Visual Inspection
```javascript
// Highlight the hamburger with a red border
document.querySelector('.nav-premium-mobile-toggle').style.border = '5px solid red';
```
**Expected:** You should see a red box in the top-right corner  
**If no red box:** Button is not rendering at all

### Step 11: Force Visibility (Emergency)
```javascript
let toggle = document.querySelector('.nav-premium-mobile-toggle');
toggle.style.display = 'flex';
toggle.style.visibility = 'visible';
toggle.style.opacity = '1';
toggle.style.width = '28px';
toggle.style.height = '24px';
toggle.style.zIndex = '99999';
toggle.style.position = 'fixed';
toggle.style.right = '20px';
toggle.style.top = '20px';
toggle.style.backgroundColor = 'red';

// Make spans visible
document.querySelectorAll('.nav-premium-mobile-toggle span').forEach(span => {
    span.style.display = 'block';
    span.style.width = '28px';
    span.style.height = '3px';
    span.style.backgroundColor = '#FFFFFF';
    span.style.margin = '3px 0';
});
```
**Expected:** Hamburger should now be visible with red background  
**Purpose:** This proves the button CAN be displayed - issue is CSS

---

## 🚨 Common Issues & Solutions

### Issue 1: Button Exists But Not Visible
**Symptom:** Console shows button exists, but nothing visible on screen  
**Cause:** CSS `display: none` or `opacity: 0` or `visibility: hidden`  
**Solution:** Check computed styles (Step 4-6 above)

### Issue 2: Spans Have No Background Color
**Symptom:** Button visible, but no lines inside  
**Cause:** `background-color: transparent` or not set  
**Solution:** Check Step 8 - span background color

### Issue 3: Button Behind Other Elements
**Symptom:** Button exists but can't click it  
**Cause:** Low z-index, other elements overlap  
**Solution:** Check Step 7 - z-index should be 9999

### Issue 4: Media Query Not Triggering
**Symptom:** Works on desktop, fails on mobile  
**Cause:** Viewport width not detected correctly  
**Solution:** Check viewport meta tag (should be present):
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Issue 5: JavaScript Not Running
**Symptom:** Button visible but doesn't respond to clicks  
**Cause:** JavaScript error before toggle handler  
**Solution:** Check Console tab for red error messages

### Issue 6: CSS File Not Loading
**Symptom:** No styles applied at all  
**Cause:** 404 error on CSS file, path wrong  
**Solution:** Check Network tab in DevTools:
```
navigation-premium.css - Status: 200 OK (good)
navigation-premium.css - Status: 404 Not Found (BAD!)
```

---

## 📊 CSS Specificity Reference

### Current CSS Rules (in priority order):

| Selector | Specificity | File | Line | Status |
|----------|-------------|------|------|--------|
| `.nav-premium-mobile-toggle` | 0,1,0 (10) | navigation-premium.css | 454 | `display: none` (default) |
| `.nav-premium-mobile-toggle` | 0,1,0 (10) | navigation-premium.css | 571 | `display: flex !important` (@media 968px) |
| `.nav-premium-mobile-toggle` | 0,1,0 (10) | index.html | 68 | `display: flex !important` (@media 968px) |
| `.nav-premium-mobile-toggle` | 0,1,0 (10) | index.html | 262 | `display: flex !important` (@media 480px) |
| **`body .nav-premium .nav-premium-mobile-toggle`** | **0,3,1 (31)** | **index.html** | **282** | **`display: flex !important` (@media 968px)** ✅ **WINS** |

**Conclusion:** The ULTRA priority rule (31 specificity) should override ALL other rules.

---

## 🔧 Manual Override (Last Resort)

If NOTHING works, add this at the **END** of `<head>` section (before `</head>`):

```html
<style>
/* EMERGENCY HAMBURGER FIX - ABSOLUTE LAST RESORT */
@media (max-width: 968px) {
    #navPremiumMobileToggle {
        display: flex !important;
        flex-direction: column !important;
        gap: 5px !important;
        width: 28px !important;
        height: 24px !important;
        position: fixed !important;
        top: 20px !important;
        right: 20px !important;
        z-index: 999999 !important;
        background: rgba(255, 0, 0, 0.5) !important; /* RED for debugging */
        border: 3px solid yellow !important; /* YELLOW border for debugging */
        padding: 5px !important;
        cursor: pointer !important;
        visibility: visible !important;
        opacity: 1 !important;
    }
    
    #navPremiumMobileToggle span {
        display: block !important;
        width: 100% !important;
        height: 3px !important;
        background-color: #FFFFFF !important;
        visibility: visible !important;
        opacity: 1 !important;
    }
}
</style>
```

**What this does:**
- Uses ID selector (`#navPremiumMobileToggle`) = highest specificity
- Forces `position: fixed` with explicit coordinates
- Adds RED background and YELLOW border for debugging
- z-index: 999999 (absolute highest)

**If you see a red/yellow box:** The button IS rendering, original CSS is just wrong  
**If you DON'T see anything:** There's a deeper issue (HTML, JavaScript, or browser)

---

## 📞 Report Back Format

When reporting results, please provide:

### ✅ Working
"The hamburger is now visible and working! I can see [3 white/dark] lines and the menu opens when I tap it."

### ❌ Not Working - Provide Debug Info
1. **Can you see the button?** Yes/No
2. **Console results from Step 2-9?** (paste output)
3. **Any errors in Console tab?** (screenshot or paste)
4. **Network tab shows CSS files loaded?** Yes/No/404
5. **Screen size used for testing?** (e.g., "iPhone 12 Pro, 390x844")

---

**Last Updated:** January 12, 2026  
**Purpose:** Comprehensive debugging guide for mobile hamburger menu  
**Status:** Ready for testing
