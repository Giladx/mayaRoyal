# SIMPLE TESTING GUIDE - January 11, 2026

## 🧪 Test These 4 Things on Mobile

---

### 1. ✅ MOBILE MENU (Dark Background)

**Test:**
1. Open ANY page on mobile
2. Tap hamburger menu (☰)
3. Menu should slide in from right

**Expected Result:**
- ✅ DARK background (almost black)
- ✅ WHITE text (readable)
- ✅ Gold-tinted dropdown sections
- ✅ All menu items visible

**If menu is white:** CSS fix didn't apply. Check `css/navigation-premium.css` line 545.

---

### 2. ✅ LOGO VISIBILITY

**Test:**
1. Open ANY page on mobile
2. Look at top-left corner

**Expected Result:**
- ✅ MayaRoyale logo visible
- ✅ Size: 50px tall on tablet, 45px on phone
- ✅ Stays visible when scrolling

**If logo missing:** Check image URL: `https://www.genspark.ai/api/files/s/CLWTmhof`

---

### 3. ✅ CONNECT WALLET BUTTON

**Test:**
1. Open ANY page
2. Tap "Connect Wallet" button (gold button in menu OR page CTAs)

**Expected Result:**
- ✅ Goes to connect-wallet.html page
- ✅ Shows wallet options (Phantom, Solflare, MetaMask)
- ✅ Button size is normal (not huge)

**If goes wrong page:** Check `js/wallet.js` lines 367-434.

---

### 4. ✅ MAPS

**Test A - Protection Animation Page:**
1. Go to "Protection Animation" page
2. Try to drag the map

**Expected Result:**
- ✅ Map DOES NOT move (dragging disabled)
- ✅ Only animation buttons control the display

**Test B - Gallery/Smart Resort Vision Page:**
1. Go to "Smart Resort Vision" page  
2. Scroll to Property Map section
3. Try to drag the map

**Expected Result:**
- ✅ Map DOES move (this one should be interactive)
- ✅ Can zoom and explore

---

## 📱 Quick Mobile Device Test

### iPhone / iOS:
1. Safari browser
2. Test all 4 items above
3. Check if menu opens/closes smoothly

### Android:
1. Chrome browser
2. Test all 4 items above
3. Check if buttons are tappable

---

## 🖥️ Desktop Test

### Just verify:
1. ✅ Dropdown menus work on hover
2. ✅ Connect Wallet button in navigation bar works
3. ✅ Logo is visible
4. ✅ All pages load correctly

---

## ❌ Common Issues & Fixes

### Issue: Menu still white
**Fix:** Clear browser cache, hard reload (Ctrl+Shift+R)

### Issue: Logo not showing
**Fix:** Check internet connection, image CDN may be blocked

### Issue: Connect Wallet goes nowhere
**Fix:** Check if JavaScript is enabled in browser

### Issue: Map won't stop moving
**Fix:** Check `dragging: false` in sargassum-hurricane-animation.html line 1301

---

## ✅ PASS CRITERIA

**Site is working correctly if:**
1. ✅ Mobile menu has dark background with white text
2. ✅ Logo visible on all pages
3. ✅ Connect Wallet button goes to connect-wallet.html
4. ✅ Protection animation map doesn't move
5. ✅ Gallery property map does move (interactive)

---

**All 5 items passing = SITE IS READY! 🚀**
