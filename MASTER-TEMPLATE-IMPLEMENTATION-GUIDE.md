# 📋 MASTER NAVIGATION TEMPLATE - Implementation Guide

## ✅ What I Created

### 3 Master Template Files:

1. **`MASTER-NAVIGATION-TEMPLATE.html`**
   - Standard navigation with solid white background
   - Use for ALL pages EXCEPT index.html
   - Has MayaRoyale logo with fallback
   - Small petite Connect Wallet button
   - 3-line hamburger menu

2. **`MASTER-NAVIGATION-TEMPLATE-TRANSPARENT.html`**
   - Transparent navigation 
   - Use for index.html (home page) ONLY
   - White hamburger lines for visibility
   - Same logo and button as standard

3. **`MASTER-SCRIPTS-TEMPLATE.html`**
   - Required JavaScript for ALL pages
   - Goes right before `</body>` tag
   - Includes wallet.js and navigation-premium.js

---

## 🎯 Key Features in Templates

### ✅ Logo:
```html
<img src="https://www.genspark.ai/api/files/s/CLWTmhof" 
     alt="MayaRoyale" 
     class="nav-premium-logo"
     onerror="this.onerror=null; this.src='data:image/svg+xml;...';">
```
- Loads image from URL
- Falls back to SVG text if image fails
- Gold text on standard nav (#B8860B)
- White text on transparent nav (#FFFFFF)

### ✅ Connect Wallet Button:
```html
<a href="connect-wallet.html" class="nav-premium-cta">Connect Wallet</a>
```
- Small & petite (CSS handles sizing)
- No inline styles
- Uniform across all pages

### ✅ Hamburger Menu:
```html
<button class="nav-premium-mobile-toggle" id="navPremiumMobileToggle">
    <span></span>
    <span></span>
    <span></span>
</button>
```
- 3 lines for menu icon
- White lines on transparent nav
- Dark lines on solid nav
- CSS handles colors automatically

---

## 📝 Which Template to Use Where

### Use **STANDARD** Template (nav-scrolled):
- ✅ dashboard.html
- ✅ tokenomics.html
- ✅ gallery.html
- ✅ positioning.html
- ✅ yucatan-boom.html
- ✅ wellness-differentiation.html
- ✅ sargassum-hurricane-animation.html
- ✅ future-vision.html
- ✅ technology.html
- ✅ team.html
- ✅ lhw-partnership.html
- ✅ contact.html
- ✅ culinary-excellence.html
- ✅ financial-forecast.html
- ✅ sustainability.html
- ✅ connect-wallet.html
- ✅ investment-calculator.html
- ✅ whitepaper.html

### Use **TRANSPARENT** Template (nav-transparent):
- ✅ index.html (home page)

---

## 🔧 How to Replace Navigation on Each Page

### Step 1: Find the Current Navigation

Look for this pattern in HTML:
```html
<nav class="nav-premium">
    ...
</nav>
```

OR minified version (all on one line):
```html
<nav class="nav-premium nav-scrolled"><div class="nav-premium-container">...</nav>
```

### Step 2: Delete Everything

Delete from `<nav...` to `</nav>` (inclusive)

### Step 3: Copy Master Template

- For index.html: Copy **MASTER-NAVIGATION-TEMPLATE-TRANSPARENT.html**
- For all other pages: Copy **MASTER-NAVIGATION-TEMPLATE.html**

### Step 4: Paste in Same Location

Paste the template exactly where the old nav was

### Step 5: Add Scripts (if missing)

Check if page has these scripts before `</body>`:
```html
<script src="js/wallet.js"></script>
<script src="js/navigation-premium.js"></script>
```

If missing, add them from **MASTER-SCRIPTS-TEMPLATE.html**

---

## 📊 Pages Status Audit

### ✅ Already Has Navigation Script:
- index.html
- yucatan-boom.html  
- positioning.html
- sargassum-hurricane-animation.html ✅ (just fixed)

### ❌ Needs Navigation Script Added:
- dashboard.html
- tokenomics.html
- gallery.html
- wellness-differentiation.html
- future-vision.html
- technology.html
- team.html
- lhw-partnership.html
- contact.html
- culinary-excellence.html
- financial-forecast.html
- sustainability.html
- connect-wallet.html
- investment-calculator.html
- whitepaper.html

### ⚠️ Minified Navigation (Hard to Edit):
- gallery.html (nav on one line)
- positioning.html (nav on one line)
- wellness-differentiation.html (nav on one line)
- future-vision.html (nav on one line)

---

## 🎨 Visual Differences

### Standard Navigation (Most Pages):
```
┌──────────────────────────────────────┐
│ [MayaRoyale]  Platform ▼ Project ▼   │ ← Solid white background
│               Company ▼ [Connect] [≡] │   Dark hamburger lines
├──────────────────────────────────────┤
```

### Transparent Navigation (index.html):
```
╔══════════════════════════════════════╗
║ [MayaRoyale]  Platform ▼ Project ▼   ║ ← Transparent background
║               Company ▼ [Connect] [≡] ║   White hamburger lines
║             (Hero Video Below)        ║
╚══════════════════════════════════════╝
```

---

## ⚡ Quick Fix Priority List

### HIGH PRIORITY (Main Pages):
1. **index.html** - Home page (use TRANSPARENT template)
2. **positioning.html** - Strategic positioning (minified)
3. **sargassum-hurricane-animation.html** - ✅ Scripts fixed, needs nav template
4. **yucatan-boom.html** - Yucatan boom page
5. **dashboard.html** - Investor dashboard

### MEDIUM PRIORITY:
6. tokenomics.html
7. financial-forecast.html
8. gallery.html (minified)
9. investment-calculator.html
10. technology.html

### LOWER PRIORITY:
11-18. Remaining pages (team, contact, sustainability, etc.)

---

## 🚨 Common Issues & Solutions

### Issue: Logo Shows Gold Text Instead of Image
**Cause**: Logo image URL blocked or slow
**Solution**: Template has `onerror` fallback - gold text is the backup
**Fix**: Check internet connection or use different CDN

### Issue: Hamburger Menu Doesn't Open
**Cause**: Missing `navigation-premium.js` script
**Solution**: Add script before `</body>` from MASTER-SCRIPTS-TEMPLATE.html

### Issue: Connect Wallet Button Too Big
**Cause**: Inline styles overriding CSS
**Solution**: Template has NO inline styles - CSS handles sizing

### Issue: No Dropdown Menus
**Cause**: Missing JavaScript or HTML structure wrong
**Solution**: Use complete template - don't modify structure

---

## 📦 Files You Have Now

1. `MASTER-NAVIGATION-TEMPLATE.html` - Standard nav
2. `MASTER-NAVIGATION-TEMPLATE-TRANSPARENT.html` - Transparent nav
3. `MASTER-SCRIPTS-TEMPLATE.html` - Required scripts
4. `css/navigation-premium.css` - Universal CSS (already updated)
5. `js/navigation-premium.js` - Navigation JavaScript (existing)
6. `js/wallet.js` - Wallet JavaScript (existing)

---

## ✅ What This Fixes

1. ✅ **Logo visible** on all pages
2. ✅ **Logo fallback** if image fails
3. ✅ **Small Connect Wallet button** (uniform)
4. ✅ **Hamburger menu works** (with JS)
5. ✅ **Correct line colors** (white/dark auto)
6. ✅ **All dropdowns work** (Platform, Project, Company)
7. ✅ **Mobile responsive** (CSS handles it)
8. ✅ **No inline styles** (CSS-only sizing)

---

## 🎯 Next Steps

1. **Start with high-priority pages** (index, positioning, protection animation, yucatan boom)
2. **Replace navigation** using appropriate template
3. **Add scripts** if missing (from MASTER-SCRIPTS-TEMPLATE.html)
4. **Test each page** after replacement
5. **Move to next page**

For minified pages (gallery, positioning, wellness, future-vision), you may need to:
- Search for `<nav class="nav-premium` and select until `</nav>`
- Delete entire line
- Paste template

---

## 💡 Pro Tips

1. **Test after each page** - don't do all at once
2. **Keep backup** of original file before replacing
3. **Hard refresh** (Ctrl+Shift+R) after changes
4. **Check console** (F12) for JavaScript errors
5. **Use Find (Ctrl+F)** to locate nav quickly

---

*Created: January 11, 2026*  
*Master templates for universal navigation*  
*Ready for implementation*
