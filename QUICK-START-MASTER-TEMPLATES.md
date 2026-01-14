# 🚀 QUICK START - Master Navigation Templates

## ✅ What You Have Now

### 3 Master Templates Created:

1. **MASTER-NAVIGATION-TEMPLATE.html**
   - For 18+ pages (all except index.html)
   - Solid white navigation
   - Dark hamburger lines

2. **MASTER-NAVIGATION-TEMPLATE-TRANSPARENT.html**
   - For index.html ONLY
   - Transparent navigation
   - White hamburger lines

3. **MASTER-SCRIPTS-TEMPLATE.html**
   - Required scripts for ALL pages
   - Add before `</body>` tag

---

## 🎯 What's in the Templates

### ✅ MayaRoyale Logo
- Image loads from: `https://www.genspark.ai/api/files/s/CLWTmhof`
- Fallback SVG if image fails
- Automatic sizing (55px height)

### ✅ Small Connect Wallet Button
- Petite size: `padding: 0.4rem 0.75rem`
- Font size: `0.75rem`
- Links to: `connect-wallet.html`
- NO inline styles

### ✅ Hamburger Menu
- 3 horizontal lines
- White on transparent nav
- Dark on solid nav
- Opens mobile menu

### ✅ All Menu Items
- Platform (Dashboard, Tokenomics, Forecast, Calculator)
- The Project (10 items: Gallery, Vision, Positioning, etc.)
- Company (Innovation Council, Contact)

---

## 📝 How to Use (3 Steps)

### Step 1: Choose Template

**For index.html:**
→ Use `MASTER-NAVIGATION-TEMPLATE-TRANSPARENT.html`

**For all other pages:**
→ Use `MASTER-NAVIGATION-TEMPLATE.html`

### Step 2: Replace Navigation

1. Open HTML file
2. Find `<nav class="nav-premium">` ... `</nav>`
3. Delete entire nav section
4. Paste template code

### Step 3: Add Scripts (if missing)

Before `</body>` tag, add:
```html
<script src="js/wallet.js"></script>
<script src="js/navigation-premium.js"></script>
```

---

## 🎬 Example: Fix positioning.html

### BEFORE:
```html
<nav class="nav-premium nav-scrolled"><div class="nav-premium-container"><div class="nav-premium-brand"><a href="index.html"><img src="https://www.genspark.ai/api/files/s/CLWTmhof" alt="MayaRoyale" class="nav-premium-logo"></a></div><ul class="nav-premium-menu" id="navPremiumMenu">... (minified on one line) ...</nav>
```

### AFTER:
```html
<!-- Copy entire content from MASTER-NAVIGATION-TEMPLATE.html -->
<nav class="nav-premium nav-scrolled">
    <div class="nav-premium-container">
        <div class="nav-premium-brand">
            <a href="index.html">
                <img src="https://www.genspark.ai/api/files/s/CLWTmhof" 
                     alt="MayaRoyale" 
                     class="nav-premium-logo"
                     onerror="...">
            </a>
        </div>
        ...
    </div>
</nav>
```

---

## 🔥 Priority Order (Which Pages to Fix First)

### Do FIRST (5 pages):
1. ✅ **index.html** - Home (TRANSPARENT template)
2. ✅ **positioning.html** - Strategic Positioning
3. ✅ **sargassum-hurricane-animation.html** - Protection Animation
4. ✅ **yucatan-boom.html** - Yucatan Boom
5. ✅ **dashboard.html** - Investor Dashboard

### Do NEXT (5 pages):
6. tokenomics.html
7. financial-forecast.html
8. gallery.html
9. investment-calculator.html
10. technology.html

### Do LAST (remaining pages):
11-18. Other pages (team, contact, sustainability, etc.)

---

## ✅ What Will Be Fixed

After replacing navigation with templates:

✅ Logo will show (image, not gold text)  
✅ Connect Wallet button will be small & petite  
✅ Hamburger menu will work (3 lines visible)  
✅ All dropdowns will work  
✅ Mobile responsive  
✅ Uniform across all pages  

---

## 🚨 Important Notes

### ⚠️ Minified Pages
These pages have nav on ONE LINE - harder to select:
- gallery.html
- positioning.html
- wellness-differentiation.html
- future-vision.html

**Tip**: Use Find (Ctrl+F) to search for `<nav class="nav-premium"` and carefully select to `</nav>`

### ⚠️ Scripts
15+ pages are missing `navigation-premium.js` - menu won't work without it!

Check every page for scripts before `</body>`:
```html
<script src="js/wallet.js"></script>
<script src="js/navigation-premium.js"></script>  ← Must have BOTH
```

---

## 🎯 Testing After Each Page

1. Open page in browser
2. **Check logo**: Should see image (or gold text if image fails)
3. **Check button**: Should be small "Connect Wallet" button
4. **Check mobile**: Resize window - should see hamburger (≡)
5. **Click hamburger**: Menu should slide in from right
6. **Check dropdowns**: Platform, Project, Company should expand

---

## 📦 File Summary

| File | Purpose |
|------|---------|
| MASTER-NAVIGATION-TEMPLATE.html | Standard nav (18 pages) |
| MASTER-NAVIGATION-TEMPLATE-TRANSPARENT.html | Home page nav (index.html) |
| MASTER-SCRIPTS-TEMPLATE.html | Required scripts |
| MASTER-TEMPLATE-IMPLEMENTATION-GUIDE.md | Full documentation |

---

## 💡 Quick Tips

1. **Backup first** - Save original before replacing
2. **One page at a time** - Don't do all at once
3. **Hard refresh** - Ctrl+Shift+R to see changes
4. **Test immediately** - Check page works before moving on
5. **Console check** - F12 to see any JavaScript errors

---

## ✨ Result

After implementing templates on all pages:

✅ **Universal navigation** across entire site  
✅ **MayaRoyale logo** on every page  
✅ **Small Connect Wallet button** everywhere  
✅ **Working hamburger menu** on mobile  
✅ **Consistent experience** for users  

---

*Quick Start Guide - January 11, 2026*  
*Ready to implement master templates*
