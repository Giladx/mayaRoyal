# HOW TO ADD WALLET MODAL TO ALL PAGES

## Pages That Need Wallet Modal Added (16 pages):

1. dashboard.html
2. tokenomics.html  
3. positioning.html
4. financial-forecast.html
5. investment-calculator.html
6. sargassum-hurricane-animation.html
7. yucatan-boom.html
8. culinary-excellence.html
9. technology.html
10. sustainability.html
11. team.html
12. lhw-partnership.html
13. contact.html
14. gallery.html (minified nav)
15. wellness-differentiation.html (minified nav)
16. future-vision.html (minified nav)

## Step 1: Change href="dashboard.html" to href="#"

Find: `<a href="dashboard.html" class="nav-premium-cta">Connect Wallet</a>`
Replace with: `<a href="#" class="nav-premium-cta">Connect Wallet</a>`

## Step 2: Add Wallet Modal Before </body>

Copy the content from `WALLET-MODAL-MIN IFIED.txt` and paste it right before the `</body>` tag on each page.

The modal includes:
- HTML structure (div#walletModal)
- CSS styles (minified)
- JavaScript functions (minified)

## What the Modal Does:

1. Opens as popup when "Connect Wallet" is clicked
2. Shows 6 wallet options
3. Connects to Phantom or MetaMask (functional)
4. Shows "coming soon" for others
5. Closes on X button or click outside
6. Redirects to dashboard after connection

## Files Already Complete:

✅ index.html - Modal added and working
✅ MASTER-NAVIGATION-TEMPLATE.html - href changed to #
✅ MASTER-NAVIGATION-TEMPLATE-TRANSPARENT.html - href changed to #
✅ js/navigation-premium.js - Opens modal on click

## Manual Update Pattern:

For each page:
1. Open the file
2. Find `<a href="dashboard.html" class="nav-premium-cta">` 
3. Change to `<a href="#" class="nav-premium-cta">`
4. Find `</body>`
5. Add wallet modal code before it
6. Save

## Automated Script Option:

A Python script could automate this, but manual updates ensure no formatting issues.

## Priority Order:

**High Priority** (user-facing pages):
1. dashboard.html
2. tokenomics.html
3. positioning.html
4. investment-calculator.html
5. financial-forecast.html

**Medium Priority** (content pages):
6-13. All project and company pages

**Low Priority** (minified nav - harder to edit):
14-16. gallery, wellness, future-vision

## Estimated Time:

- Per page: ~2 minutes
- Total: ~30 minutes for all 16 pages
- With automation: ~5 minutes

##Status:

Pages with modal: 1/17 (index.html only)
Pages remaining: 16
Navigation JS: ✅ Ready
Master templates: ✅ Updated
