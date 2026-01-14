#!/usr/bin/env python3
"""
Universal Logo Fix Script
Adds onerror fallback to ALL logo images across ALL HTML pages
"""

import re
import glob

# Logo image onerror fallback
LOGO_ONERROR = 'onerror="this.onerror=null; this.src=\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%2255%22><text x=%225%22 y=%2240%22 font-family=%22Space Grotesk, sans-serif%22 font-size=%2226%22 font-weight=%22700%22 fill=%22%23B8860B%22>MayaRoyale</text></svg>\';"'

# Find all HTML files
html_files = glob.glob('*.html')

# Logo patterns to match
logo_patterns = [
    # Pattern 1: Logo in nav without onerror
    (
        r'(<img\s+src="https://www\.genspark\.ai/api/files/s/CLWTmhof"\s+alt="MayaRoyale"\s+class="nav-premium-logo")(>)',
        r'\1 ' + LOGO_ONERROR + r'\2'
    ),
    # Pattern 2: Logo with existing onerror (replace it)
    (
        r'(<img\s+src="https://www\.genspark\.ai/api/files/s/CLWTmhof"\s+alt="MayaRoyale"\s+class="nav-premium-logo"\s+)onerror="[^"]*"(>)',
        r'\1' + LOGO_ONERROR + r'\2'
    ),
    # Pattern 3: Logo in footer
    (
        r'(<img\s+src="https://www\.genspark\.ai/api/files/s/CLWTmhof"\s+alt="MayaRoyale"\s+class="footer-logo")(>)',
        r'\1 ' + LOGO_ONERROR + r'\2'
    ),
]

fixed_files = []

for html_file in html_files:
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all logo patterns
        for pattern, replacement in logo_patterns:
            content = re.sub(pattern, replacement, content)
        
        # Only write if changes were made
        if content != original_content:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed_files.append(html_file)
            print(f"✅ Fixed: {html_file}")
        else:
            print(f"⏭️  Skipped: {html_file} (already fixed or no logo)")
    
    except Exception as e:
        print(f"❌ Error processing {html_file}: {e}")

print(f"\n{'='*50}")
print(f"Fixed {len(fixed_files)} files:")
for f in fixed_files:
    print(f"  - {f}")
print(f"{'='*50}")
