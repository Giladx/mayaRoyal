// Wallet Connection JavaScript
// Web3 Wallet Integration for MayaRoyale (Solana + Ethereum support)

let userAccount = null;
let web3Provider = null;
let walletType = null; // 'phantom', 'solflare', 'metamask', etc.

// Check if Phantom (Solana) is installed
function isPhantomInstalled() {
    return typeof window.solana !== 'undefined' && window.solana.isPhantom;
}

// Check if Solflare is installed
function isSolflareInstalled() {
    return typeof window.solflare !== 'undefined';
}

// Check if MetaMask (Ethereum) is installed
function isMetaMaskInstalled() {
    return typeof window.ethereum !== 'undefined';
}

// Connect to Phantom Wallet (Solana - Primary)
async function connectPhantom() {
    if (!isPhantomInstalled()) {
        showToast('Phantom wallet is not installed. Redirecting to install...', 'error');
        setTimeout(() => {
            window.open('https://phantom.app/', '_blank');
        }, 2000);
        return;
    }

    try {
        const response = await window.solana.connect();
        userAccount = response.publicKey.toString();
        web3Provider = window.solana;
        walletType = 'phantom';
        
        // Store connection state
        localStorage.setItem('walletConnected', 'true');
        localStorage.setItem('walletAddress', userAccount);
        localStorage.setItem('walletType', 'phantom');
        
        // Update UI
        updateWalletUI(userAccount, 'Phantom');
        showToast('Phantom wallet connected successfully!', 'success');
        
        // Redirect to dashboard after 1.5 seconds
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
        
    } catch (error) {
        console.error('Error connecting to Phantom:', error);
        showToast('Failed to connect Phantom wallet. Please try again.', 'error');
    }
}

// Connect to Solflare Wallet (Solana)
async function connectSolflare() {
    if (!isSolflareInstalled()) {
        showToast('Solflare wallet is not installed. Redirecting to install...', 'error');
        setTimeout(() => {
            window.open('https://solflare.com/', '_blank');
        }, 2000);
        return;
    }

    try {
        await window.solflare.connect();
        userAccount = window.solflare.publicKey.toString();
        web3Provider = window.solflare;
        walletType = 'solflare';
        
        // Store connection state
        localStorage.setItem('walletConnected', 'true');
        localStorage.setItem('walletAddress', userAccount);
        localStorage.setItem('walletType', 'solflare');
        
        // Update UI
        updateWalletUI(userAccount, 'Solflare');
        showToast('Solflare wallet connected successfully!', 'success');
        
        // Redirect to dashboard after 1.5 seconds
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
        
    } catch (error) {
        console.error('Error connecting to Solflare:', error);
        showToast('Failed to connect Solflare wallet. Please try again.', 'error');
    }
}

// Connect to MetaMask (Ethereum - Fallback)
async function connectMetaMask() {
    if (!isMetaMaskInstalled()) {
        showToast('MetaMask is not installed. Redirecting to install...', 'error');
        setTimeout(() => {
            window.open('https://metamask.io/', '_blank');
        }, 2000);
        return;
    }

    try {
        // Request account access
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
        });
        
        userAccount = accounts[0];
        web3Provider = window.ethereum;
        walletType = 'metamask';
        
        // Store connection state
        localStorage.setItem('walletConnected', 'true');
        localStorage.setItem('walletAddress', userAccount);
        localStorage.setItem('walletType', 'metamask');
        
        // Update UI
        updateWalletUI(userAccount, 'MetaMask');
        showToast('MetaMask connected successfully!', 'success');
        
        // Redirect to dashboard after 1.5 seconds
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
        
    } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        showToast('Failed to connect MetaMask. Please try again.', 'error');
    }
}

// Smart Connect - Try Phantom first, fallback to MetaMask
async function smartConnect() {
    if (isPhantomInstalled()) {
        await connectPhantom();
    } else if (isSolflareInstalled()) {
        await connectSolflare();
    } else if (isMetaMaskInstalled()) {
        await connectMetaMask();
    } else {
        showToast('No wallet detected. Please install Phantom, Solflare, or MetaMask.', 'error');
        setTimeout(() => {
            window.location.href = 'connect-wallet.html';
        }, 2000);
    }
}

// Disconnect wallet
function disconnectWallet() {
    // Disconnect from provider
    if (walletType === 'phantom' && window.solana) {
        window.solana.disconnect();
    } else if (walletType === 'solflare' && window.solflare) {
        window.solflare.disconnect();
    }
    
    userAccount = null;
    web3Provider = null;
    walletType = null;
    
    // Clear storage
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('walletType');
    
    // Update UI
    updateWalletUIDisconnected();
    
    showToast('Wallet disconnected', 'success');
}

// Update UI when wallet is connected
function updateWalletUI(address, walletName = 'Wallet') {
    const walletStatus = document.getElementById('wallet-status');
    const connectedInfo = document.getElementById('connected-info');
    const connectedAddress = document.getElementById('connected-address');
    const connectedNetwork = document.getElementById('connected-network');
    
    if (walletStatus) {
        walletStatus.style.display = 'none';
    }
    
    if (connectedInfo) {
        connectedInfo.style.display = 'block';
    }
    
    if (connectedAddress) {
        const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
        connectedAddress.textContent = shortAddress;
        connectedAddress.style.cursor = 'pointer';
        connectedAddress.title = 'Click to copy full address';
        connectedAddress.onclick = () => copyToClipboard(address);
    }
    
    if (connectedNetwork) {
        const network = (walletType === 'phantom' || walletType === 'solflare') ? 'Solana Mainnet' : 'Ethereum Mainnet';
        connectedNetwork.textContent = `${walletName} (${network})`;
    }
    
    // Update all wallet address displays on the page
    document.querySelectorAll('#wallet-address, .wallet-address').forEach(el => {
        el.textContent = `${address.slice(0, 6)}...${address.slice(-4)}`;
    });
    
    // Update connect buttons
    document.querySelectorAll('#connect-btn, .connect-wallet-btn').forEach(btn => {
        btn.textContent = 'Connected ✓';
        btn.classList.add('btn-secondary');
        btn.classList.remove('btn-primary');
        btn.disabled = true;
    });
}

// Update UI when wallet is disconnected
function updateWalletUIDisconnected() {
    const walletStatus = document.getElementById('wallet-status');
    const connectedInfo = document.getElementById('connected-info');
    
    if (walletStatus) {
        walletStatus.style.display = 'block';
    }
    
    if (connectedInfo) {
        connectedInfo.style.display = 'none';
    }
    
    // Update all wallet address displays
    document.querySelectorAll('#wallet-address, .wallet-address').forEach(el => {
        el.textContent = 'Connect your wallet to view portfolio';
    });
    
    // Update connect buttons
    document.querySelectorAll('#connect-btn, .connect-wallet-btn').forEach(btn => {
        btn.textContent = '⚡ Connect Wallet';
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');
        btn.disabled = false;
    });
}

// Check for existing wallet connection on page load
function checkWalletConnection() {
    const isConnected = localStorage.getItem('walletConnected');
    const savedAddress = localStorage.getItem('walletAddress');
    const savedWalletType = localStorage.getItem('walletType');
    
    if (isConnected === 'true' && savedAddress) {
        userAccount = savedAddress;
        walletType = savedWalletType;
        updateWalletUI(savedAddress, savedWalletType || 'Wallet');
    }
}

// Copy address to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Address copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Failed to copy address', 'error');
    });
}

// Show toast notification
function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00C48C' : '#FF6B6B'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-size: 0.95rem;
        font-weight: 500;
        max-width: 350px;
    `;
    toast.textContent = message;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Listen for account changes (Solana)
if (isPhantomInstalled()) {
    window.solana.on('accountChanged', (publicKey) => {
        if (publicKey) {
            userAccount = publicKey.toString();
            updateWalletUI(userAccount, 'Phantom');
            showToast('Account changed', 'success');
        } else {
            disconnectWallet();
        }
    });
}

// Listen for account changes (Ethereum)
if (isMetaMaskInstalled()) {
    window.ethereum.on('accountsChanged', function (accounts) {
        if (accounts.length === 0) {
            disconnectWallet();
        } else if (accounts[0] !== userAccount) {
            userAccount = accounts[0];
            updateWalletUI(userAccount, 'MetaMask');
            showToast('Account changed', 'success');
        }
    });
    
    window.ethereum.on('chainChanged', function(chainId) {
        window.location.reload();
    });
}

// Initialize wallet connection functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for existing connection
    checkWalletConnection();
    
    // Phantom button
    const phantomBtn = document.getElementById('phantom-btn');
    if (phantomBtn) {
        phantomBtn.addEventListener('click', connectPhantom);
    }
    
    // Solflare button
    const solflareBtn = document.getElementById('solflare-btn');
    if (solflareBtn) {
        solflareBtn.addEventListener('click', connectSolflare);
    }
    
    // MetaMask button
    const metamaskBtn = document.getElementById('metamask-btn');
    if (metamaskBtn) {
        metamaskBtn.addEventListener('click', connectMetaMask);
    }
    
    // ===== UNIVERSAL CONNECT WALLET BUTTON HANDLER =====
    // NOTE: Navigation .nav-premium-cta buttons are handled by navigation-premium.js
    // This only handles OTHER connect wallet buttons on the page (like hero CTAs)
    
    // Handle hero section and other non-navigation connect wallet buttons
    document.querySelectorAll('#connect-btn, .btn-connect, .btn-connect-wallet, .connect-btn').forEach(btn => {
        // Skip navigation buttons - they're handled by navigation-premium.js
        if (!btn.classList.contains('nav-premium-cta')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                // Open wallet modal
                if (typeof openWalletModal === 'function') {
                    openWalletModal();
                }
            });
        }
    });
    
    // Disconnect button
    const disconnectBtn = document.getElementById('disconnect-btn');
    if (disconnectBtn) {
        disconnectBtn.addEventListener('click', disconnectWallet);
    }
    
    // Coinbase Wallet button (placeholder)
    const coinbaseBtn = document.getElementById('coinbase-btn');
    if (coinbaseBtn) {
        coinbaseBtn.addEventListener('click', connectCoinbase);
    }
    
    // WalletConnect button (placeholder)
    const walletConnectBtn = document.getElementById('walletconnect-btn');
    if (walletConnectBtn) {
        walletConnectBtn.addEventListener('click', connectWalletConnect);
    }
});

// Placeholder functions for wallets not yet implemented
function connectCoinbase() {
    showToast('Coinbase Wallet integration coming soon!', 'error');
}

function connectWalletConnect() {
    showToast('WalletConnect integration coming soon!', 'error');
}

function connectTrustWallet() {
    showToast('Trust Wallet integration coming soon!', 'error');
}

// Export functions for use in other scripts
window.WalletConnection = {
    connect: smartConnect,
    connectPhantom: connectPhantom,
    connectSolflare: connectSolflare,
    connectMetaMask: connectMetaMask,
    disconnect: disconnectWallet,
    getAccount: () => userAccount,
    getWalletType: () => walletType,
    isConnected: () => userAccount !== null
};
