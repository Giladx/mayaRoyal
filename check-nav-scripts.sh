#!/bin/bash
# Check which HTML files are missing navigation-premium.js

echo "Checking all HTML files for navigation-premium.js..."
echo "=================================================="
echo ""

for file in *.html; do
    if grep -q "navigation-premium.js" "$file"; then
        echo "✅ $file - HAS navigation script"
    else
        echo "❌ $file - MISSING navigation script"
    fi
done

echo ""
echo "=================================================="
echo "Files that need navigation-premium.js added"
