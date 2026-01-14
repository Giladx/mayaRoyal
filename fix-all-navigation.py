#!/usr/bin/env python3
"""
Automated Navigation Fixer for MayaRoyale Project
Replaces all navigation blocks with the master template across all HTML pages
"""

import re
import glob

# Read the master navigation template
with open('MASTER-NAVIGATION-TEMPLATE.html', 'r', encoding='utf-8') as f:
    master_nav = f.read()

# Remove the comment header from master template
master_nav = re.sub(r'<!-- ={40,}.*?={40,} -->\s*', '', master_nav, flags=re.DOTALL)
master_nav = master_nav.strip()

# List of pages to fix (excluding index.html which uses transparent nav)
pages_to_fix = [
    'positioning.html',
    'yucatan-boom.html',
    'sargassum-hurricane-animation.html',
    'wellness-differentiation.html',
    'investment-calculator.html',
    'gallery.html',
    'dashboard.html',
    'tokenomics.html',
    'financial-forecast.html',
    'future-vision.html',
    'technology.html',
    'team.html',
    'lhw-partnership.html',
    'contact.html',
    'whitepaper.html',
    'culinary-excellence.html',
    'sustainability.html',
    'connect-wallet.html'
]

print("=" * 60)
print("AUTOMATED NAVIGATION FIXER")
print("=" * 60)
print()

for page in pages_to_fix:
    try:
        print(f"Processing {page}...")
        
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern 1: Multi-line navigation
        pattern1 = r'<!--\s*Premium Navigation\s*-->.*?<nav\s+class="nav-premium[^"]*"[^>]*>.*?</nav>'
        
        # Pattern 2: Single-line minified navigation
        pattern2 = r'<nav\s+class="nav-premium[^"]*"[^>]*>.*?</nav>'
        
        # Try pattern 1 first (with comment)
        if re.search(pattern1, content, re.DOTALL):
            new_content = re.sub(
                pattern1,
                f'<!-- Premium Navigation -->\n    {master_nav}',
                content,
                flags=re.DOTALL,
                count=1
            )
            print(f"  ✓ Replaced multi-line navigation")
        # Try pattern 2 (without comment)
        elif re.search(pattern2, content, re.DOTALL):
            new_content = re.sub(
                pattern2,
                f'<!-- Premium Navigation -->\n    {master_nav}',
                content,
                flags=re.DOTALL,
                count=1
            )
            print(f"  ✓ Replaced single-line navigation")
        else:
            print(f"  ⚠ No navigation found - skipping")
            continue
        
        # Write the updated content
        with open(page, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"  ✓ Saved {page}")
        
    except FileNotFoundError:
        print(f"  ✗ File not found: {page}")
    except Exception as e:
        print(f"  ✗ Error: {e}")

print()
print("=" * 60)
print("SUMMARY")
print("=" * 60)
print(f"Attempted to fix {len(pages_to_fix)} pages")
print("Check each page to verify:")
print("  1. Logo is visible (Maya sun image)")
print("  2. Connect Wallet button is small & petite")
print("  3. Hamburger menu works on mobile")
print("  4. All dropdown menus work")
print()
print("Next steps:")
print("  1. Open each page in a browser")
print("  2. Test on mobile (responsive mode)")
print("  3. Verify navigation works")
print("=" * 60)
