#!/bin/bash
# Mobile Dropdown Fix Verification Script
# Run this to verify all files are properly updated

echo "🔍 MOBILE DROPDOWN FIX - VERIFICATION SCRIPT"
echo "=============================================="
echo ""

# Check if mobile-dropdown-fix.css exists
if [ -f "css/mobile-dropdown-fix.css" ]; then
    echo "✅ css/mobile-dropdown-fix.css exists"
else
    echo "❌ css/mobile-dropdown-fix.css NOT FOUND"
fi

# Check if js file was updated
if grep -q "applyMobileDropdownStyles" js/mobile-nav-universal.js; then
    echo "✅ js/mobile-nav-universal.js updated"
else
    echo "❌ js/mobile-nav-universal.js NOT updated"
fi

echo ""
echo "📄 Checking HTML pages for mobile-dropdown-fix.css..."
echo ""

# List of pages to check
pages=(
    "index.html"
    "dashboard.html"
    "tokenomics.html"
    "gallery.html"
    "positioning.html"
    "future-vision.html"
    "wellness-differentiation.html"
    "contact.html"
    "lhw-partnership.html"
    "team.html"
    "sustainability.html"
    "technology.html"
    "culinary-excellence.html"
    "yucatan-boom.html"
    "sargassum-hurricane-animation.html"
    "investment-calculator.html"
    "financial-forecast.html"
)

updated=0
not_updated=0

for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        if grep -q "mobile-dropdown-fix.css" "$page"; then
            echo "✅ $page"
            ((updated++))
        else
            echo "❌ $page - MISSING CSS LINK"
            ((not_updated++))
        fi
    else
        echo "⚠️  $page - FILE NOT FOUND"
    fi
done

echo ""
echo "=============================================="
echo "📊 RESULTS:"
echo "   Updated: $updated pages"
echo "   Not Updated: $not_updated pages"
echo ""

if [ $not_updated -eq 0 ]; then
    echo "🎉 SUCCESS! All pages are properly updated!"
    echo ""
    echo "🧪 Next Steps:"
    echo "1. Open index.html on mobile (or resize browser to <968px)"
    echo "2. Tap hamburger menu (☰)"
    echo "3. Tap 'Platform' → Should expand"
    echo "4. Tap 'The Project' → Should expand"
    echo "5. Tap 'Company' → Should expand"
    echo ""
    echo "If all dropdowns work: ✅ FIX COMPLETE!"
else
    echo "⚠️  WARNING: Some pages are not updated!"
    echo "Run the fix script to update missing pages."
fi

echo ""
echo "=============================================="
