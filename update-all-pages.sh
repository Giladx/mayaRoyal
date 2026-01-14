#!/bin/bash
# Batch update all HTML pages to use simple mobile nav

echo "🔧 Updating all pages to use mobile-nav-simple.js..."

# List of pages to update
pages=(
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

for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        echo "Updating $page..."
        
        # Update CSS link
        sed -i 's/mobile-dropdown-fix.css/mobile-dropdown-critical.css/g' "$page"
        
        # Update JS link
        sed -i 's/navigation-premium.js/mobile-nav-simple.js/g' "$page"
        sed -i 's/mobile-nav-universal.js//g' "$page"
        sed -i '/UNIVERSAL MOBILE NAV/d' "$page"
        
        echo "✅ $page updated"
    else
        echo "⚠️  $page not found"
    fi
done

echo ""
echo "✅ All pages updated!"
echo "Test on mobile to verify dropdowns work."
