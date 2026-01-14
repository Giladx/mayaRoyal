// UNIVERSAL MOBILE NAVIGATION - WORKING VERSION
// This file makes the hamburger menu work on ALL pages

(function() {
    'use strict';
    
    console.log('🔷 Universal Mobile Nav Loading...');
    
    // Wait for DOM to be ready
    function initMobileNav() {
        const toggle = document.getElementById('navPremiumMobileToggle');
        const menu = document.getElementById('navPremiumMenu');
        
        console.log('🔷 Toggle:', toggle);
        console.log('🔷 Menu:', menu);
        
        if (!toggle || !menu) {
            console.error('❌ Hamburger or menu not found!');
            return;
        }
        
        // ONLY apply mobile styles on mobile screens
        function applyMobileStyles() {
            if (window.innerWidth <= 968) {
                // FORCE MENU TO BE POSITIONED CORRECTLY
                menu.style.position = 'fixed';
                menu.style.top = '72px';
                menu.style.left = '0';
                menu.style.width = '100%';
                menu.style.height = 'calc(100vh - 72px)';
                menu.style.background = 'rgba(10, 10, 10, 0.98)';
                menu.style.zIndex = '9998';
                menu.style.display = 'flex';
                menu.style.flexDirection = 'column';
                menu.style.padding = '1.5rem';
                menu.style.overflowY = 'auto';
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateX(100%)';
                menu.style.transition = 'all 0.3s ease';
                console.log('✅ Mobile menu styles applied');
            } else {
                // DESKTOP - Reset to default (remove inline styles)
                menu.style.position = '';
                menu.style.top = '';
                menu.style.left = '';
                menu.style.width = '';
                menu.style.height = '';
                menu.style.background = '';
                menu.style.zIndex = '';
                menu.style.display = '';
                menu.style.flexDirection = '';
                menu.style.padding = '';
                menu.style.overflowY = '';
                menu.style.opacity = '';
                menu.style.visibility = '';
                menu.style.transform = '';
                menu.style.transition = '';
                console.log('✅ Desktop menu styles applied (default)');
            }
        }
        
        // Apply styles on load
        applyMobileStyles();
        
        // Re-apply on window resize
        window.addEventListener('resize', applyMobileStyles);
        
        // Remove any existing click handlers
        const newToggle = toggle.cloneNode(true);
        toggle.parentNode.replaceChild(newToggle, toggle);
        
        // Add click handler
        newToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isOpen = menu.classList.contains('active');
            console.log('🔷 Hamburger clicked! Currently open:', isOpen);
            
            if (isOpen) {
                // CLOSE MENU
                menu.classList.remove('active');
                newToggle.classList.remove('active');
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateX(100%)';
                console.log('✅ Menu CLOSED');
            } else {
                // OPEN MENU
                menu.classList.add('active');
                newToggle.classList.add('active');
                menu.style.opacity = '1';
                menu.style.visibility = 'visible';
                menu.style.transform = 'translateX(0)';
                console.log('✅ Menu OPENED');
            }
        });
        
        console.log('✅ Click handler attached');
        
        // Handle dropdown toggles in mobile menu
        const menuItems = menu.querySelectorAll('.nav-premium-item');
        menuItems.forEach(item => {
            const link = item.querySelector('.nav-premium-link');
            const dropdown = item.querySelector('.nav-premium-dropdown');
            
            if (link && dropdown) {
                // Apply mobile dropdown styles
                function applyMobileDropdownStyles() {
                    if (window.innerWidth <= 968) {
                        dropdown.style.position = 'static';
                        dropdown.style.minWidth = 'auto';
                        dropdown.style.width = '100%';
                        dropdown.style.background = 'rgba(255, 255, 255, 0.05)';
                        dropdown.style.borderRadius = '8px';
                        dropdown.style.marginTop = '0.5rem';
                        dropdown.style.display = 'block';
                        dropdown.style.maxHeight = '0';
                        dropdown.style.overflow = 'hidden';
                        dropdown.style.opacity = '0';
                        dropdown.style.visibility = 'hidden';
                        dropdown.style.transform = 'none';
                        dropdown.style.transition = 'all 0.3s ease';
                        dropdown.style.padding = '0';
                        dropdown.style.gridTemplateColumns = '1fr';
                    }
                }
                
                applyMobileDropdownStyles();
                window.addEventListener('resize', applyMobileDropdownStyles);
                
                link.addEventListener('click', function(e) {
                    if (window.innerWidth <= 968) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        console.log('🔷 Dropdown link clicked');
                        
                        // Close other dropdowns
                        menuItems.forEach(otherItem => {
                            if (otherItem !== item && otherItem.classList.contains('dropdown-open')) {
                                const otherDropdown = otherItem.querySelector('.nav-premium-dropdown');
                                otherItem.classList.remove('dropdown-open');
                                if (otherDropdown) {
                                    otherDropdown.style.maxHeight = '0';
                                    otherDropdown.style.padding = '0';
                                    otherDropdown.style.opacity = '0';
                                    otherDropdown.style.visibility = 'hidden';
                                }
                            }
                        });
                        
                        // Toggle this dropdown
                        const isOpen = item.classList.contains('dropdown-open');
                        
                        if (isOpen) {
                            // CLOSE
                            item.classList.remove('dropdown-open');
                            dropdown.style.maxHeight = '0';
                            dropdown.style.padding = '0';
                            dropdown.style.opacity = '0';
                            dropdown.style.visibility = 'hidden';
                            console.log('🔷 Dropdown CLOSED');
                        } else {
                            // OPEN
                            item.classList.add('dropdown-open');
                            dropdown.style.maxHeight = '2000px';
                            dropdown.style.padding = '1rem';
                            dropdown.style.opacity = '1';
                            dropdown.style.visibility = 'visible';
                            console.log('🔷 Dropdown OPENED');
                        }
                    }
                });
            }
        });
        
        console.log('✅ Universal Mobile Nav Ready!');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
    
    // Also try after a delay (backup)
    setTimeout(initMobileNav, 500);
    
})();
