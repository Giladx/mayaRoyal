// Premium Navigation JavaScript
// Include this file on all pages: <script src="js/navigation-premium.js"></script>
// NOTE: This works in tandem with mobile-nav-universal.js for mobile dropdown functionality

document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect (for all pages)
    const navPremium = document.querySelector('.nav-premium');
    
    if (navPremium) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navPremium.classList.add('nav-scrolled');
                navPremium.classList.remove('nav-transparent');
            } else {
                navPremium.classList.remove('nav-scrolled');
                if (navPremium.classList.contains('nav-transparent')) {
                    // Keep transparent class if it was there initially
                }
            }
        });
    }
    
    // Connect Wallet Modal - Open popup instead of redirect
    document.querySelectorAll('.nav-premium-cta').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openWalletModal();
        });
    });
});

// Wallet Modal Functions
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
