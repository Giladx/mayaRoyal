@echo off
REM Mobile Dropdown Fix Verification Script (Windows)
REM Run this to verify all files are properly updated

echo.
echo ============================================
echo 🔍 MOBILE DROPDOWN FIX - VERIFICATION
echo ============================================
echo.

REM Check if CSS file exists
if exist "css\mobile-dropdown-fix.css" (
    echo ✅ css/mobile-dropdown-fix.css exists
) else (
    echo ❌ css/mobile-dropdown-fix.css NOT FOUND
)

REM Check if JS file was updated
findstr /C:"applyMobileDropdownStyles" js\mobile-nav-universal.js >nul
if %errorlevel% equ 0 (
    echo ✅ js/mobile-nav-universal.js updated
) else (
    echo ❌ js/mobile-nav-universal.js NOT updated
)

echo.
echo 📄 Checking HTML pages...
echo.

set "updated=0"
set "not_updated=0"

REM Check each page
for %%p in (
    index.html
    dashboard.html
    tokenomics.html
    gallery.html
    positioning.html
    future-vision.html
    wellness-differentiation.html
    contact.html
    lhw-partnership.html
    team.html
    sustainability.html
    technology.html
    culinary-excellence.html
    yucatan-boom.html
    sargassum-hurricane-animation.html
    investment-calculator.html
    financial-forecast.html
) do (
    if exist "%%p" (
        findstr /C:"mobile-dropdown-fix.css" "%%p" >nul
        if !errorlevel! equ 0 (
            echo ✅ %%p
            set /a updated+=1
        ) else (
            echo ❌ %%p - MISSING CSS LINK
            set /a not_updated+=1
        )
    ) else (
        echo ⚠️  %%p - FILE NOT FOUND
    )
)

echo.
echo ============================================
echo 📊 RESULTS:
echo    Updated: %updated% pages
echo    Not Updated: %not_updated% pages
echo.

if %not_updated% equ 0 (
    echo 🎉 SUCCESS! All pages are properly updated!
    echo.
    echo 🧪 Next Steps:
    echo 1. Open index.html on mobile or resize browser to ^<968px
    echo 2. Tap hamburger menu (☰^)
    echo 3. Tap 'Platform' → Should expand
    echo 4. Tap 'The Project' → Should expand
    echo 5. Tap 'Company' → Should expand
    echo.
    echo If all dropdowns work: ✅ FIX COMPLETE!
) else (
    echo ⚠️  WARNING: Some pages are not updated!
    echo Run the fix script to update missing pages.
)

echo.
echo ============================================
echo.
pause
