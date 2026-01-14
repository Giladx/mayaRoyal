// ULTRA SIMPLE MOBILE NAVIGATION - NO CONFLICTS
// This is the ONLY file that should control mobile navigation

(function() {
    'use strict';
    
    console.log('🟢 SIMPLE MOBILE NAV STARTING...');
    
    function init() {
        const toggle = document.getElementById('navPremiumMobileToggle');
        const menu = document.getElementById('navPremiumMenu');
        
        if (!toggle || !menu) {
            console.error('❌ Elements not found');
            return;
        }
        
        console.log('✅ Elements found');
        
        // MOBILE MENU TOGGLE
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isOpen = menu.classList.contains('active');
            console.log('🔵 Hamburger clicked, menu is open:', isOpen);
            
            if (isOpen) {
                menu.classList.remove('active');
                toggle.classList.remove('active');
                console.log('➡️ Closing menu');
            } else {
                menu.classList.add('active');
                toggle.classList.add('active');
                console.log('➡️ Opening menu');
            }
        });
        
        // DROPDOWN TOGGLE (MOBILE ONLY)
        document.querySelectorAll('.nav-premium-item').forEach(function(item) {
            const link = item.querySelector('.nav-premium-link');
            const dropdown = item.querySelector('.nav-premium-dropdown');
            
            if (!link || !dropdown) return;
            
            link.addEventListener('click', function(e) {
                // Only on mobile
                if (window.innerWidth <= 968) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log('🔵 Dropdown clicked');
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.nav-premium-item').forEach(function(otherItem) {
                        if (otherItem !== item) {
                            otherItem.classList.remove('dropdown-open');
                        }
                    });
                    
                    // Toggle this dropdown
                    item.classList.toggle('dropdown-open');
                    console.log('➡️ Dropdown is now:', item.classList.contains('dropdown-open') ? 'OPEN' : 'CLOSED');
                }
            });
        });
        
        console.log('✅ MOBILE NAV READY');
    }
    
    // Run when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();

// Wallet Modal Functions (for Connect Wallet button)
function openWalletModal() {
    const modal = document.getElementById('walletModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeWalletModal() {
    const modal = document.getElementById('walletModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('walletModal');
    if (e.target === modal) {
        closeWalletModal();
    }
});

// Connect Wallet button click handler
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-premium-cta').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openWalletModal();
        });
    });
});
